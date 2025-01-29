

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Button, Typography, TextField, CircularProgress, Grid } from '@mui/material';
// import { MdCreateNewFolder, MdFileUpload, MdDelete } from 'react-icons/md';
// import { FiFolder } from 'react-icons/fi';

// import FilesPage from './../Components/FilePage';
// import Uploadfile from './Uploadfile';
// import ShowAllFolder from './showallfolder';
// import CreateFolder from './CreateFolder';



// const FullFileManagers = ({setFileProtection}) => {
//     const navigate = useNavigate();

//     const [files, setFiles] = useState([]);
//     const [file, setFile] = useState(null);
//     const [folderName, setFolderName] = useState('');
//     const [currentPath, setCurrentPath] = useState('');
//     const [loading, setLoading] = useState(false);


    
    


//     // Fetch files for the current folder
//     const fetchFiles = async (folderPath = '') => {
//         try {
//             // const response = await axios.get(`https://backend-theta-vert-75.vercel.app/files?folderPath=${folderPath}`);
//             const response = await axios.get(`https://file-manager-backend-main-1.onrender.com/files?folderPath=${folderPath}`);
//             setFiles(response.data);
//         } catch (error) {
//             console.error("Error fetching files:", error);
//         }
//     };

//     const navigateToFolder = (folder) => {
//         setCurrentPath(folder);
//         fetchFiles(folder);
//     };

//     const goBack = () => {
//         const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '';
//         setCurrentPath(parentPath);
//         fetchFiles(parentPath);
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };



//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a file!");
//             return;
//         }


//         const sanitizedFileName = file.name.replace(/[\s()]+/g, '_');
  
//   // Create a new file with the sanitized name
//   const sanitizedFile = new File([file], sanitizedFileName, { type: file.type });

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('folderPath', currentPath);

//         setLoading(true);

//         try {
           
//             // const response = await axios.post('https://backend-theta-vert-75.vercel.app/upload', formData);
//            const response = await axios.post('https://file-manager-backend-main-1.onrender.com/upload', formData);
//             alert(response.data);
//             fetchFiles(currentPath);
//         } catch (error) {
//             console.error("Error uploading file:", error);
//             alert("Failed to upload the file.");
//         } finally {
//             setLoading(false);
//         }
//     };
 

 




//     const handleCreateFolder = async () => {
//         if (!folderName) {
//             alert("Please enter a folder name.");
//             return;
//         }

//         try {
//            //https://file-manager-godaddy.vercel.app
//             // const response = await axios.post('https://backend-theta-vert-75.vercel.app/create-folder', { folderPath: `${currentPath}/${folderName}` });
//              const response = await axios.post('https://file-manager-backend-main-1.onrender.com/create-folder', { folderPath: `${currentPath}/${folderName}` });
//             alert(response.data);
//             fetchFiles(currentPath);
//         } catch (error) {
//             console.error("Error creating folder:", error);
//         }
//     };

//     const handleDelete = async (filePath) => {
//         try {
//            //https://file-manager-godaddy.vercel.app
//             await axios.delete('https://file-manager-backend-main-1.onrender.com/delete', { data: { filePath } });
//             alert("File deleted!");
//             fetchFiles(currentPath);
//         } catch (error) {
//             console.error("Error deleting file:", error);
//         }
//     };

//     useEffect(() => {
//         fetchFiles(currentPath);
//     }, [currentPath]);





//    {/*A static Ui for open when i call mangodb backend api */}

   
//    const [inputstatepassword,setInputStatePassword]  = useState(false);



//     const navigateToFolders = (folder) => {
//         //open a UI state for entering password;
//        // setInputStatePassword(true);
//         console.log("Please Enter a password for ui");

       
//         navigate(`/${encodeURIComponent(folder)}`);
//     };





    



   

//     return (
//         <div className="p-10 w-full mx-auto bg-gray-50 min-h-screen space-y-10">
               



          

//             <Typography variant="h4" className="text-center text-blue-600 font-extrabold">
//                 📁 Full File Manager
//             </Typography>

//             {/* Breadcrumb Navigation */}
           
//             {/* Upload File Section */}
            


          

//             <div className='flex justify-between items-center'>
//             <CreateFolder
//                 currentPath={currentPath}
//                 goBack={goBack}
//                 setFolderName={setFolderName}
//                 handleCreateFolder={handleCreateFolder}
//                 folderName={folderName}
//             />

                  

//             <Uploadfile handleFileChange={handleFileChange} handleUpload={handleUpload} loading={loading} />




            


//             </div>
           

//             {/* Show All Folders */}
//             <FilesPage files={files} handleDelete={(fileName) => handleDelete(`${currentPath}/${fileName}`)} />

//             <ShowAllFolder files={files} navigateToFolders={navigateToFolders} fetchFiles = {fetchFiles}  setFileProtection={setFileProtection} />
//         </div>
//     );
// };

// export default FullFileManagers;
























// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Button, Typography, TextField, CircularProgress, Grid } from '@mui/material';
// import { MdCreateNewFolder, MdFileUpload, MdDelete } from 'react-icons/md';
// import { FiFolder } from 'react-icons/fi';

// import FilesPage from './../Components/FilePage';
// import Uploadfile from './Uploadfile';
// import ShowAllFolder from './showallfolder';
// import CreateFolder from './CreateFolder';



// const FullFileManagers = ({setFileProtection}) => {
//     const navigate = useNavigate();

//     const [files, setFiles] = useState([]);
//     const [file, setFile] = useState(null);
//     const [folderName, setFolderName] = useState('');
//     const [currentPath, setCurrentPath] = useState('');
//     const [loading, setLoading] = useState(false);


  


    
    


//     // Fetch files for the current folder
//     const fetchFiles = async (folderPath = '') => {
//         try {
//             // const response = await axios.get(`https://file-manager-backend-main-1.onrender.com/files?folderPath=${folderPath}`);
//             const response = await axios.get(`https://file-manager-backend-main-1.onrender.com/files?folderPath=${folderPath}`);
//             setFiles(response.data);
//         } catch (error) {
//             console.error("Error fetching files:", error);
//         }
//     };

//     const navigateToFolder = (folder) => {
//         setCurrentPath(folder);
//         fetchFiles(folder);
//     };

//     const goBack = () => {
//         const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '';
//         setCurrentPath(parentPath);
//         fetchFiles(parentPath);
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };



//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a file!");
//             return;
//         }


//         const sanitizedFileName = file.name.replace(/[\s()]+/g, '_');
  
//   // Create a new file with the sanitized name
//   const sanitizedFile = new File([file], sanitizedFileName, { type: file.type });

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('folderPath', currentPath);

//         setLoading(true);

//         try {
           
//             // const response = await axios.post('https://file-manager-backend-main-1.onrender.com/upload', formData);
//            const response = await axios.post('https://file-manager-backend-main-1.onrender.com/upload', formData);
//             alert(response.data);
//             fetchFiles(currentPath);
//         } catch (error) {
//             console.error("Error uploading file:", error);
//             alert("Failed to upload the file.");
//         } finally {
//             setLoading(false);
//         }
//     };
 

 




//     const handleCreateFolder = async () => {
//         if (!folderName) {
//             alert("Please enter a folder name.");
//             return;
//         }

//         try {
//            //https://file-manager-godaddy.vercel.app
//             // const response = await axios.post('https://file-manager-backend-main-1.onrender.com/create-folder', { folderPath: `${currentPath}/${folderName}` });
//              const response = await axios.post('https://file-manager-backend-main-1.onrender.com/create-folder', { folderPath: `${currentPath}/${folderName}` });
//             alert(response.data);
//             fetchFiles(currentPath);
//         } catch (error) {
//             console.error("Error creating folder:", error);
//         }
//     };

//     const handleDelete = async (filePath) => {
       
//         try {
//            //https://file-manager-godaddy.vercel.app
//             await axios.delete('https://file-manager-backend-main-1.onrender.com/delete', { data: { filePath } });
//             alert("File deleted!");
//             fetchFiles(currentPath);
//         } catch (error) {
//             console.error("Error deleting file:", error);
//         }
//     };

//     useEffect(() => {
//         fetchFiles(currentPath);
//     }, [currentPath]);





//    {/*A static Ui for open when i call mangodb backend api */}

   
//    const [inputstatepassword,setInputStatePassword]  = useState(false);



//     const navigateToFolders = (folder) => {
//         //open a UI state for entering password;
//        // setInputStatePassword(true);
//         console.log("Please Enter a password for ui");

       
//         navigate(`/${encodeURIComponent(folder)}`);
//     };


    
      
   


    



   

//     return (
//         <div className="p-10 w-full mx-auto bg-gray-50 min-h-screen space-y-10">
               


//                <div className="relative w-full h-6 flex items-center overflow-hidden">
//   <p className="absolute animate-moveLine text-sm whitespace-nowrap text-red-500 font-medium">
//     Please download your file within 7 days of the upload date. If you need further assistance, please send an email requesting the folder not be deleted. Include the folder name in your request and send it to 
//      creditklick.a@imsplglobal.com, so we can retain the folder on SFTP.
//   </p>
// </div>



          

//             <Typography variant="h4" className="text-center text-blue-600 font-extrabold">
//                 📁 Full File Manager
//             </Typography>

//             {/* Breadcrumb Navigation */}
           
//             {/* Upload File Section */}
            


          

//             <div className='flex justify-between items-center'>
//             <CreateFolder
//                 currentPath={currentPath}
//                 goBack={goBack}
//                 setFolderName={setFolderName}
//                 handleCreateFolder={handleCreateFolder}
//                 folderName={folderName}
//             />

                  

//             <Uploadfile handleFileChange={handleFileChange} handleUpload={handleUpload} loading={loading} />




            


//             </div>
           

//             {/* Show All Folders */}
//             <FilesPage files={files} handleDelete={(fileName) => handleDelete(`${currentPath}/${fileName}`) }/>

//             <ShowAllFolder files={files} navigateToFolders={navigateToFolders} fetchFiles = {fetchFiles}  setFileProtection={setFileProtection} />
//         </div>
//     );
// };

// export default FullFileManagers;






































import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, TextField, CircularProgress, Grid } from '@mui/material';
import { MdCreateNewFolder, MdFileUpload, MdDelete } from 'react-icons/md';
import { FiFolder } from 'react-icons/fi';

import FilesPage from './../Components/FilePage';
import Uploadfile from './Uploadfile';
import ShowAllFolder from './showallfolder';
import CreateFolder from './CreateFolder';
import FolderIcon from '@mui/icons-material/Folder';






const FullFileManagers = ({setFileProtection}) => {
    const navigate = useNavigate();

    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null);
    const [folderName, setFolderName] = useState('');
    const [currentPath, setCurrentPath] = useState('');
    const [loading, setLoading] = useState(false);


  


    
    


    // Fetch files for the current folder
    const fetchFiles = async (folderPath = '') => {
        try {
            // const response = await axios.get(`https://backend-theta-vert-75.vercel.app/files?folderPath=${folderPath}`);
            const response = await axios.get(`https://file-manager-backend-main-1.onrender.com/files?folderPath=${folderPath}`);
            setFiles(response.data);
        } catch (error) {
            console.error("Error fetching files:", error);
        }
    };

    const navigateToFolder = (folder) => {
        setCurrentPath(folder);
        fetchFiles(folder);
    };

    const goBack = () => {
        const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '';
        setCurrentPath(parentPath);
        fetchFiles(parentPath);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };



    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file!");
            return;
        }


        const sanitizedFileName = file.name.replace(/[\s()]+/g, '_');
  
  // Create a new file with the sanitized name
  const sanitizedFile = new File([file], sanitizedFileName, { type: file.type });

        const formData = new FormData();
        formData.append('file', file);
        formData.append('folderPath', currentPath);

        setLoading(true);

        try {
           
            // const response = await axios.post('https://backend-theta-vert-75.vercel.app/upload', formData);
           const response = await axios.post('https://file-manager-backend-main-1.onrender.com/upload', formData);
            alert(response.data);
            fetchFiles(currentPath);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload the file.");
        } finally {
            setLoading(false);
        }
    };
 

 




    const handleCreateFolder = async () => {
        if (!folderName) {
            alert("Please enter a folder name.");
            return;
        }

        try {
           //https://file-manager-godaddy.vercel.app
            // const response = await axios.post('https://backend-theta-vert-75.vercel.app/create-folder', { folderPath: `${currentPath}/${folderName}` });
             const response = await axios.post('https://file-manager-backend-main-1.onrender.com/create-folder', { folderPath: `${currentPath}/${folderName}` });
            alert(response.data);
            fetchFiles(currentPath);
        } catch (error) {
            console.error("Error creating folder:", error);
        }
    };

    const handleDelete = async (filePath) => {
       
        try {
           //https://file-manager-godaddy.vercel.app
            await axios.delete('https://file-manager-backend-main-1.onrender.com/delete', { data: { filePath } });
            alert("File deleted!");
            fetchFiles(currentPath);
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    };

    useEffect(() => {
        fetchFiles(currentPath);
    }, [currentPath]);





   {/*A static Ui for open when i call mangodb backend api */}

   
   const [inputstatepassword,setInputStatePassword]  = useState(false);



    const navigateToFolders = (folder) => {
        //open a UI state for entering password;
       // setInputStatePassword(true);
        console.log("Please Enter a password for ui");

       
        navigate(`/${encodeURIComponent(folder)}`);
    };


    
      
   


    



   

    return (

         <div className='w-full'>
           
              <div className="absolute top-15 p-10 w-full mx-auto  min-h-screen space-y-10 bg-gradient-to-t from-red-200 to-blue-300  ">
                  


                 


                  <div className="relative w-full h-6 flex items-center overflow-hidden">
     <p className="absolute animate-moveLine text-sm whitespace-nowrap text-red-500 font-medium">
       Please download your file within 7 days of the upload date. If you need further assistance, please send an email requesting the folder not be deleted. Include the folder name in your request and send it to 
        creditklick.a@imsplglobal.com, so we can retain the folder on SFTP.
     </p>
   </div>
   
   
   
             
   
   <Typography
     variant="h4"
     className="flex items-center justify-center text-blue-600 font-extrabold space-x-2"
   >
     <FolderIcon style={{ fontSize: "35px", color: "#ff9800" }} />
     <span>Full File Manager</span>
   </Typography>
   
   
   
             
   
              
   
   
             
   
               <div className='flex items-center space-x-2'>
               <CreateFolder
                   currentPath={currentPath}
                   goBack={goBack}
                   setFolderName={setFolderName}
                   handleCreateFolder={handleCreateFolder}
                   folderName={folderName}
               />
   
                      <div>
                      <Uploadfile handleFileChange={handleFileChange} handleUpload={handleUpload} loading={loading} />
   
                      </div>
   
              
   
   
   
   
               
   
   
               </div>
              
   
               {/* Show All Folders */}
               <FilesPage files={files} handleDelete={(fileName) => handleDelete(`${currentPath}/${fileName}`) }/>
   
               <ShowAllFolder files={files} navigateToFolders={navigateToFolders} fetchFiles = {fetchFiles}  setFileProtection={setFileProtection} />
                
              
              
              </div>
             
          </div>


           
  
     


     


       
    );
};

export default FullFileManagers;



















