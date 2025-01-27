// import React from 'react'

// function CreateFolder({currentPath,setFolderName,handleCreateFolder,folderName,goBack}) {
//   return (
//     <div>
//                <div className="flex justify-between items-center mb-6">
//                 {currentPath && (
//                     <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={goBack}>⬅️ Go Back</button>
//                 )}
//                 <h2 className="text-lg font-semibold">Current Path: <span className="text-gray-700">{currentPath || 'Root'}</span></h2>
//             </div>

//             {/* Create Folder Section */}
//             <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
//                 <h2 className="text-2xl font-semibold">📂 Create Folder</h2>
//                 <input
//                     className="border p-3 w-full rounded-lg"
//                     type="text"
//                     placeholder="Enter Folder Name"
//                     value={folderName}
//                     onChange={(e) => setFolderName(e.target.value)}
//                 />
//                 <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick={handleCreateFolder}>➕ Create Folder</button>
//             </div>


//     </div>
//   )
// }

// export default CreateFolder


















// import React, { useState } from 'react';
// import { Button, CircularProgress, Typography } from '@mui/material';
// import { FaFolderPlus } from 'react-icons/fa'; // Folder icon for creation
// import { MdArrowBack } from 'react-icons/md'; // Back icon

// function CreateFolder({ currentPath, setFolderName, handleCreateFolder, folderName, goBack }) {
//     const [loading, setLoading] = useState(false);

//     const handleFolderCreation = async () => {
//         setLoading(true); // Start loading
//         await handleCreateFolder(); // Call the folder creation logic
//         setLoading(false); // Stop loading after operation
//     };

//     return (
//         <div>
//             <div className="">
//                 {currentPath && (
//                     <Button
//                         variant="contained"
//                         color="success"
//                         startIcon={<MdArrowBack />}
//                         onClick={goBack}
//                         className="hover:bg-green-700"
//                     >
//                         ⬅️ Go Back
//                     </Button>
//                 )}
//                 <Typography variant="h6" className="text-gray-800 font-semibold">
//                     Current Path: <span className="text-green-700">{currentPath || 'Root'}</span>
//                 </Typography>
//             </div>

//             {/* Create Folder Section */}
//             <div className="p-6 bg-green-50 rounded-lg shadow-md space-y-4">
//                 <Typography variant="h5" className="text-2xl font-semibold text-green-800">
//                     📂 Create Folder
//                 </Typography>
//                 <input
//                     className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                     type="text"
//                     placeholder="Enter Folder Name"
//                     value={folderName}
//                     onChange={(e) => setFolderName(e.target.value)}
//                 />

//                 <Button
//                     variant="contained"
//                     color="success"
//                     startIcon={<FaFolderPlus />}
//                     onClick={handleFolderCreation}
//                     disabled={loading}
//                     className="hover:bg-green-600"
//                 >
//                     {loading ? (
//                         <CircularProgress size={24} color="inherit" />
//                     ) : (
//                         "➕ Create Folder"
//                     )}
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default CreateFolder;


































// import React, { useEffect, useState } from 'react';
// import { Button, CircularProgress, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// import { FaFolderPlus } from 'react-icons/fa';
// import { MdArrowBack } from 'react-icons/md';

// function CreateFolder({ currentPath, handleCreateFolder, goBack  }) {
//     const [loading, setLoading] = useState(false);
//     const [openPopup, setOpenPopup] = useState(false); // Manage popup state
//     const [folderName, setFolderName] = useState('');
//     const [password, setPassword] = useState('');

//     // Handle folder creation with loading indicator
//     const handleFolderCreation = async (folderName) => {
//         // if (!folderName || !password) {
//         //     alert("Both folder name and password are required.");
//         //     return;
//         // }
         
//         console.log("Foler name is : ", folderName);

//         setLoading(true);
//         await handleCreateFolder(folderName); // Pass folder name and password to creation logic
//         setLoading(false);
//         setOpenPopup(false); // Close popup after creation
//         setFolderName(''); // Reset inputs
//         setPassword('');
//     };



//     useEffect(()=>{
//          console.log("folder name is ",folderName);
//     })

//     return (
//         <div>
//             {/* Navigation and current path display */}
//             <div className="flex justify-between items-center mb-6">
//                 {currentPath && (
//                     <Button
//                         variant="contained"
//                         color="success"
//                         startIcon={<MdArrowBack />}
//                         onClick={goBack}
//                         className="hover:bg-green-700"
//                     >
//                         ⬅️ Go Back
//                     </Button>
//                 )}
//                 <Typography variant="h6" className="text-gray-800 font-semibold">
//                     Current Path: <span className="text-green-700">{currentPath || 'Root'}</span>
//                 </Typography>
//             </div>

//             {/* Create Folder Button */}
//             <div className="p-6 bg-green-50 rounded-lg shadow-md space-y-4">
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     startIcon={<FaFolderPlus />}
//                     onClick={() => setOpenPopup(true)} // Open popup
//                     className="hover:bg-green-600"
//                 >
//                     Create Folder
//                 </Button>
//             </div>

//             {/* Popup for Folder Creation */}
//             <Dialog open={openPopup} onClose={() => setOpenPopup(false)} fullWidth maxWidth="sm">
//                 <DialogTitle>Create New Folder</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         label="Folder Name"
//                         fullWidth
//                         margin="normal"
//                         value={folderName}
//                         onChange={(e) => setFolderName(e.target.value)}
//                     />
//                     <TextField
//                         label="Password"
//                         type="password"
//                         fullWidth
//                         margin="normal"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button
//                         onClick={() => setOpenPopup(false)}
//                         color="secondary"
//                         variant="outlined"
//                     >
//                         Close
//                     </Button>
//                     <Button
//                         onClick={()=>handleFolderCreation(folderName)}
//                         color="primary"
//                         variant="contained"
//                         disabled={loading}
//                     >
//                         {loading ? <CircularProgress size={24} color="inherit" /> : "Create Folder"}
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

// export default CreateFolder;

















// import React, { useState , useEffect } from 'react';
// import { Button, CircularProgress, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// import { FaFolderPlus } from 'react-icons/fa'; // Folder icon for creation
// import { MdArrowBack } from 'react-icons/md'; // Back icon

// function CreateFolder({ currentPath, setFolderName, handleCreateFolder, folderName, goBack }) {
//     const [loading, setLoading] = useState(false);
//     const [openPopup, setOpenPopup] = useState(false); 
//     const [password,setPassword] = useState('');

//     const handleFolderCreation = async () => {
//         if (!folderName) {
//             alert("Folder name is required.");
//             return;
//         }
//         setLoading(true);
//         await handleCreateFolder(); // Call the existing folder creation logic
//         setLoading(false);
//         setOpenPopup(false); // Close popup after folder creation
//         setFolderName(''); // Reset folder name input
//     };



//     useEffect(()=>{
//         console.log("My Folder name is ",folderName);
//          console.log("My Folder Password is ",password);

//     })

//     return (
//         <div>
//             {/* Navigation and current path display */}
//             <div className="flex justify-between items-center mb-6">
//                 {currentPath && (
//                     <Button
//                         variant="contained"
//                         color="success"
//                         startIcon={<MdArrowBack />}
//                         onClick={goBack}
//                         className="hover:bg-green-700"
//                     >
//                         ⬅️ Go Back
//                     </Button>
//                 )}
//                 <Typography variant="h6" className="text-gray-800 font-semibold">
//                     Current Path: <span className="text-green-700">{currentPath || 'Root'}</span>
//                 </Typography>
//             </div>

//             {/* Button to trigger popup */}
//             <div className="p-6 bg-green-50 rounded-lg shadow-md space-y-4">
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     startIcon={<FaFolderPlus />}
//                     onClick={() => setOpenPopup(true)} // Open popup
//                     className="hover:bg-green-600"
//                 >
//                     Create Folder
//                 </Button>
//             </div>

//             {/* Popup for creating a folder */}
//             <Dialog open={openPopup} onClose={() => setOpenPopup(false)} fullWidth maxWidth="sm">
//                 <DialogTitle>Create New Folder</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         label="Folder Name"
//                         fullWidth
//                         margin="normal"
//                         value={folderName}
//                         onChange={(e) => setFolderName(e.target.value)} // Use existing setFolderName
//                     />
//                     <TextField
//                         label="password"
//                         fullWidth
//                         margin="normal"
//                         value = {password}
//                         onChange={(e)=>setPassword(e.target.value)}
                       
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button
//                         onClick={() => setOpenPopup(false)}
//                         color="secondary"
//                         variant="outlined"
//                     >
//                         Close
//                     </Button>
//                     <Button
//                         onClick={handleFolderCreation} // Use existing handleCreateFolder
//                         color="primary"
//                         variant="contained"
//                         disabled={loading}
//                     >
//                         {loading ? <CircularProgress size={24} color="inherit" /> : "Create Folder"}
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

// export default CreateFolder;


















// import React, { useState, useEffect } from 'react';
// import {
//   Button,
//   CircularProgress,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
// } from '@mui/material';
// import { FaFolderPlus } from 'react-icons/fa'; // Folder icon for creation
// import { MdArrowBack } from 'react-icons/md'; // Back icon
// import axios from 'axios';
// function CreateFolder({ currentPath, setFolderName, handleCreateFolder, folderName, goBack }) {
//   const [loading, setLoading] = useState(false);
//   const [openPopup, setOpenPopup] = useState(false);

//   const [password,setPassword] = useState('');




//   const handlefolderDB = async ()=>{
            
//         console.log("Call MangoDB Database ",folderName);
//         console.log("Call MangoDB password",password);

//         try{
               
           
//             const response = await axios.post('http://localhost:8000/api/users/folder', {
//                 foldername: folderName,
//                 folderpassword: password,
//                 creator : ''
//             });
             
//               console.log("Response from frontend ",response.data);
//               if(response.data.success){
//                  return true;
//               }else{
//                  return false;
//               }
//         }
//         catch(error){
//             if (error.response) {
//                 // Error response from server
//                 console.error("Error from server:", error.response.data.message);
//                 alert("Error: " + error.response.data.message); // Example: show alert to user
//             } else if (error.request) {
//                 // No response received from the server
//                 console.error("No response received:", error.request);
//                 alert("Server did not respond. Please try again.");
//             } else {
//                 // Some error occurred while setting up the request
//                 console.error("Error during request setup:", error.message);
//                 alert("An unexpected error occurred. Please try again.");
//             }
//         }

//   }




//   const handleFolderCreation = async () => {
//     if (!folderName) {
//       alert('Folder name is required.');
//       return;
//     }
//     setLoading(true);


//     if (await handlefolderDB() === true) {
//       await handleCreateFolder();
//     }
    

//     // await Promise.all[handleCreateFolder(),handlefolderDB()]
//     // await handleCreateFolder(); // Call the existing folder creation logic
//     // await handlefolderDB();
//     setLoading(false);
//     setOpenPopup(false); // Close popup after folder creation
//    // setFolderName(''); // Reset folder name input
//   };

//   useEffect(()=>{
//             console.log("My Folder name is ",folderName);
//              console.log("My Folder Password is ",password);
    
//         })



//   return (
//     <div>
//       {/* Navigation and current path display */}
//       <div className="flex justify-between items-center mb-6">
//         {currentPath && (
//           <Button
//             variant="contained"
//             color="success"
//             startIcon={<MdArrowBack />}
//             onClick={goBack}
//             className="hover:bg-green-700"
//           >
//             ⬅️ Go Back
//           </Button>
//         )}
//         <Typography variant="h6" className="text-gray-800 font-semibold">
//           Current Path: <span className="text-green-700">{currentPath || 'Root'}</span>
//         </Typography>
//       </div>

//       {/* Button to trigger popup */}
//       <div className="p-6 bg-green-50 rounded-lg shadow-md space-y-4">
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<FaFolderPlus />}
//           onClick={() => setOpenPopup(true)} // Open popup
//           className="hover:bg-green-600"
//         >
//           Create Folder
//         </Button>
//       </div>

//       {/* Popup for creating a folder */}
//       <Dialog open={openPopup} onClose={() => setOpenPopup(false)} fullWidth maxWidth="sm">
//         <DialogTitle>Create New Folder</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Folder Name"
//             fullWidth
//             margin="normal"
//             value={folderName}
//             onChange={(e) => setFolderName(e.target.value)} // Use existing setFolderName
//           />

         
//           <TextField
//             label="Password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} // Use existing setFolderName
//           />

//         </DialogContent>
//         <DialogActions>
//           <Button
//             onClick={() => setOpenPopup(false)}
//             color="secondary"
//             variant="outlined"
//           >
//             Close
//           </Button>
//           <Button
//             onClick={handleFolderCreation} // Use existing handleCreateFolder
//             color="primary"
//             variant="contained"
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Folder'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default CreateFolder;






import React, { useState } from 'react';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { FaFolderPlus } from 'react-icons/fa'; // Folder icon for creation
import { MdArrowBack } from 'react-icons/md'; // Back icon
import axios from 'axios';

function CreateFolder({ currentPath, setFolderName, handleCreateFolder, folderName, goBack }) {
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [password, setPassword] = useState('');

  const handlefolderDB = async () => {
    console.log("Call MongoDB Database", folderName);
    console.log("Call MongoDB password", password);

    try {
      const response = await axios.post('http://localhost:8000/api/users/folder', {
        foldername: folderName,
        folderpassword: password,
        creator: ''
      });

      console.log("Response from frontend", response.data);
      if (response.data.success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error from server:", error.response ? error.response.data.message : error.message);
      alert("Error: " + (error.response ? error.response.data.message : error.message));
    }
  };

  const handleFolderCreation = async () => {
    if (!folderName) {
      alert('Folder name is required.');
      return;
    }
    setLoading(true);

    if (await handlefolderDB() === true) {
      await handleCreateFolder();
    }

    setLoading(false);
    setOpenPopup(false); // Close popup after folder creation
  };

  return (
    <div>
      {/* Navigation and current path display */}
      <div className="flex justify-between items-center mb-6">
        {currentPath && (
          <Button
            variant="contained"
            color="success"
            startIcon={<MdArrowBack />}
            onClick={goBack}
          >
            ⬅️ Go Back
          </Button>
        )}
        <div>Current Path: <span>{currentPath || 'Root'}</span></div>
      </div>

      {/* Button to trigger popup */}
      <div className="p-4 bg-green-50 rounded-md shadow-md">
        <Button
          variant="contained"
          color="primary"
          startIcon={<FaFolderPlus />}
          onClick={() => setOpenPopup(true)} // Open popup
        >
          Create Folder
        </Button>
      </div>

      {/* Popup for creating a folder */}
      <Dialog open={openPopup} onClose={() => setOpenPopup(false)} fullWidth maxWidth="sm">
        <DialogTitle>Create New Folder</DialogTitle>
        <DialogContent>
          <TextField
            label="Folder Name"
            fullWidth
            margin="normal"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenPopup(false)}
            color="secondary"
            variant="outlined"
          >
            Close
          </Button>
          <Button
            onClick={handleFolderCreation}
            color="primary"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Folder'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateFolder;
