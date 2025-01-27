// import React from 'react'

// function showallfolder({files, navigateToFolders}) {
//   return (
//     <div>

// <ul className="space-y-4">
//             <h2 className="text-2xl font-semibold">📁 Current Directory Folder</h2>
//                 <div className='grid grid-cols-3 border-2 border-yellow-400'>
//                 {files
//         .filter(file => file.type === 2) // Only include folders
//         .map((file, index) => (
//             <li key={index} className=" justify-between items-center p-4 border rounded-lg bg-gray-100">
//                 <span className="font-medium">{file.name}</span>
//                 <div className="space-x-3">
                   
//                     <button
//                         className=" px-4  py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                         // onClick={() => navigateToFolder(`${currentPath}/${file.name}`)}
//                         onClick={() => navigateToFolders(file.name)}
//                     >
//                         📂 {file.name}{
                       
//                         }
//                     </button>
//                 </div>
//             </li>
//         ))}
                    
//                 </div>
   
//            </ul>

//     </div>
//   )
// }

// export default showallfolder




import React ,{useState , useEffect } from 'react'
import axios  from 'axios';

import PasswordInputModal from './../Components/PasswordInputModal'


import { Delete } from '@mui/icons-material';

function ShowAllFolder({ files, navigateToFolders , fetchFiles }) {



  

  const [authenticatedFolders, setAuthenticatedFolders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
    const [password, setPassword] = useState("");

    const [foldername,setFolderName] = useState('');


    
  
    const openModal = (filename)=>{
             setModalOpen(true);
             setFolderName(filename);
    }

   
   


    const closeModal = ()=>{

        setModalOpen(false);
        setPassword('');
        setFolderName('');

    }






    const handlePasswordSubmit = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/folder', {
          params : {
            foldername : foldername,
            password : password
          }
          
        });

        
    // Check if the response status is true
    if (response.data.success) {
        


      const authenticatedFolders = JSON.parse(localStorage.getItem('authenticatedFolders')) || {};
      authenticatedFolders[foldername] = true;  // Mark the folder as authenticated
      localStorage.setItem('authenticatedFolders', JSON.stringify(authenticatedFolders));
     
      const isAuthenticated = authenticatedFolders[foldername];
      if (isAuthenticated) {
        navigateToFolders(foldername); // Navigate to the folder
      } else {
        alert("Folder authentication failed.");
      }

     //set authenticate locally:
      // alert(response.data.message); // Optional: Display success message
      // navigateToFolders(`${foldername}`); // Replace '/success' with the desired route
    } else {
      alert(response.data.message); // Display error message
    }

      } catch (error) {
        if (error.response) {
          console.error("Error from server:", error.response.data.message);
          alert("Error: " + error.response.data.message);
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("Server did not respond. Please try again.");
        } else {
          console.error("Error during request setup:", error.message);
          alert("An unexpected error occurred. Please try again.");
        }
      }
    
      console.log("Folder name is", foldername);
      console.log("Password entered:", password);
      closeModal();
    };



    useEffect(()=>{
         console.log("password is ",password);
    })
    
   








  
  
   
   
  const [loadingFile, setLoading] = useState(null);

const handleDeleteFolder = async (folderPath) => {
  console.log(`Deleting folder: ${folderPath}`);
  setLoading(folderPath); // Start loading state
  try {
    const response = await axios.delete(`http://localhost:8000/delete-folder?folderPath=${folderPath}`);
    console.log("Delete Folder Successfully", response);
    alert("Folder Deleted Successfully");
    fetchFiles(folderPath); // Update file/folder list
  } catch (err) {
    console.error("Folder is not deleted", err);
    alert("Failed to delete the folder. Please try again.");
  } finally {
    setLoading(false); // End loading state
  }
};




   const [modeldelete,setModelDelete] = useState(false);


   const HandleDelete = (filename)=>{
            setFolderName(filename)
            setModelDelete(true);
   }


   const closemodeldelete =()=>{
        setModelDelete(false);
        setFolderName('');
        setPassword('');
   }






  const deleteFromDB = async (foldername, folderpassword) => {
    try {
      const response = await axios.delete('http://localhost:8000/api/users/delete-folder', {
        params: { foldername, folderpassword }, // Pass query parameters here
      });
  
      if (response.data.success) {
        console.log("Folder deleted successfully from DB:", response.data.message);
        return true; // Return success to indicate the operation was successful
      } else {
        console.error("Error from server:", response.data.message);
        alert("Error: " + response.data.message);
        return false; // Return false to indicate failure
      }
    } catch (error) {
      if (error.response) {
        console.error("Error from server:", error.response.data.message);
        alert("Error: " + error.response.data.message);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("Server did not respond. Please try again.");
      } else {
        console.error("Error during request setup:", error.message);
        alert("An unexpected error occurred. Please try again.");
      }
      return false; // Return false if any error occurs
    }
  };
  



  const DeleteFolder = async (foldername, folderpassword) => {
    try {
      const isDeletedFromDB = await deleteFromDB(foldername, folderpassword);
  
      if (isDeletedFromDB) {
        
        await handleDeleteFolder(foldername);
        console.log("Folder deleted locally after successful DB deletion");
      } else {
        console.error("Folder deletion failed from DB. Local deletion aborted.");
      }
    
    } catch (error) {
      console.error("Error in the folder deletion process:", error);
    }
    finally{
      setModelDelete(false);
    }
  };






  return (
    <div className="p-8 bg-green-50">







     
    

      {
        isModalOpen && (
              <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>

                   <div className='bg-white rounded-2xl shadow-lg p-6 w-80'>
                        
                         <h2 className='text-xl font-semibold mb-4'>Password</h2>
                         <input
                      type="password"
                        className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                        placeholder="Password"
                         value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       />

                       <div className='flex justify-end gap-4'>
                       <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={handlePasswordSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
                        </div>
                      


                    </div>
              </div>
        )
      }




{
        modeldelete && (
              <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>

                   <div className='bg-white rounded-2xl shadow-lg p-6 w-80'>
                        
                         <h2 className='text-xl font-semibold mb-4'>Delete Folder</h2>
                         <input
                      type="password"
                        className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                        placeholder="Password"
                         value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       />

                       <div className='flex justify-end gap-4'>
                       <button
                onClick={closemodeldelete}
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick  = {()=>DeleteFolder(foldername,password)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Delete Submit
              </button>
                        </div>
                      


                    </div>
              </div>
        )
      }





























  


      <h2 className="text-2xl font-semibold text-green-800">📁 Current Directory Folders</h2>

      <div className="my-6 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {files
            .filter(file => file.type === 2) // Only include folders
            .map((file, index) => (
              <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-green-100 shadow-lg">
                
                
                <div className="w-full space-x-3 justify-between">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={()=>openModal(file.name)}
                  >
                    📂 {file.name}
                  </button>

                  <button   disabled = {loadingFile===file.name}  onClick={() => HandleDelete(file.name) }>{loadingFile === file.name ? "Deleting..." : <Delete />}</button>

                </div>

                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShowAllFolder;
