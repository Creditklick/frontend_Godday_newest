// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// function FileUploadAndShowAllFiles() {
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [files, setFiles] = useState([]);
//     const { folderPath } = useParams(); 
//     console.log("Folder path ",folderPath)
//     const fetchFiles = async () => {
//         try {
//             const response = await axios.get(`http://localhost:5000/files/${folderPath}`);
//             setFiles(response.data); 
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error fetching files:', error);
//         }
//     };

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert('Please select a file!');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);
//         try {
//             setLoading(true);
//             const response = await axios.post(`http://localhost:5000/upload/${folderPath}`, formData);
//             alert(response.data);
//             setLoading(false);
//             fetchFiles(folderPath); // Refresh file list after upload
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Failed to upload the file.');
//             setLoading(false);
//         }
//     };


//     const handleDeletefolder = async (filePath) => {
//         try {
//             await axios.delete('http://localhost:5000/delete', { data: { filePath } });
//             alert("File deleted!");
//             fetchFiles(filePath);
//         } catch (error) {
//             console.error("Error deleting file:", error);
//         }
//     };



//     const handleDownload = async (folderPath, fileName) => {
//         try {
//             // Create the file URL for the download endpoint
//             const fileURL = `http://localhost:5000/download/${folderPath}/${fileName}`;
    
//             // Trigger the download by making a GET request to the server
//             const response = await fetch(fileURL, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/octet-stream',
//                 },
//             });
    
//             // Check if the response is successful
//             if (!response.ok) {
//                 throw new Error(`Error downloading file: ${response.statusText}`);
//             }
    
//             // Create a blob from the response
//             const blob = await response.blob();
    
//             // Create a link element to trigger the file download
//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = fileName; // Set the file name for the downloaded file
    
//             // Simulate a click event to trigger the download
//             link.click();
    
//             console.log(`✅ Downloaded file: ${fileName}`);
    
//         } catch (error) {
//             console.error("Error downloading the file:", error);
//         }
//     };
    

//     useEffect(() => {
//         fetchFiles(folderPath);
//     }, [folderPath]);

//     return (
//         <div>
//             <h2>Current Folder: {folderPath || 'Root'}</h2>
//             <div>
//                 <h3>Upload File</h3>
//                 <input type="file" onChange={handleFileChange} />
//                 <button onClick={handleUpload} disabled={loading}>
//                     {loading ? 'Uploading...' : 'Upload'}
//                 </button>
//             </div>

//             <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
//     <h2 className="text-2xl font-semibold">📁 Current file Files</h2>
//     <ul className="space-y-4">

//     <div className='grid grid-cols-3 gap-4'>
// {files
// .filter(file => file.type !== 2) 
// .map((file, index) => (
// <li key={index} className="flex justify-between items-center p-4 border rounded-lg bg-gray-100 shadow">
//     <span className="font-medium">📄 {file.name}</span>
//     <div className="space-x-3 flex">
//     <button
//                                         onClick={() => handleDownload(folderPath,file.name)}
//                                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                                     >
//                                         📥 Download
//                                     </button>
//         <button 
//             onClick={()=>handleDeletefolder(`${folderPath}/${file.name}`)}
//             className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" 
//           >
//             🗑️ Delete File
//         </button>
//     </div>
// </li>
// ))}
// </div>


       

//     </ul>
// </div>
   
//         </div>
//     );
// }

// export default FileUploadAndShowAllFiles;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Button, CircularProgress, IconButton, Typography } from '@mui/material';
// import { FileDownload, Delete } from '@mui/icons-material';

// function FileUploadAndShowAllFiles() {
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [files, setFiles] = useState([]);
//     const { folderPath } = useParams();
//     console.log("Folder path ", folderPath);

//     const fetchFiles = async () => {
//         try {
//             const response = await axios.get(`http://localhost:5000/files/${folderPath}`);
//             setFiles(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error fetching files:', error);
//         }
//     };

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert('Please select a file!');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);
//         try {
//             setLoading(true);
//             const response = await axios.post(`http://localhost:5000/upload/${folderPath}`, formData);
//             alert(response.data);
//             setLoading(false);
           
//             fetchFiles(folderPath); // Refresh file list after upload
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Failed to upload the file.');
//             setLoading(false);
//         }
//     };

//     const handleDeleteFile = async (filePath) => {
//         try {
//             await axios.delete('http://localhost:5000/delete', { data: { filePath } });
//             alert("File deleted!");
//             fetchFiles(filePath);
//         } catch (error) {
//             console.error("Error deleting file:", error);
//         }
//     };

//     const handleDownload = async (folderPath, fileName) => {
//         try {
//             // Create the file URL for the download endpoint
//             const fileURL = `http://localhost:5000/download/${folderPath}/${fileName}`;

//             // Trigger the download by making a GET request to the server
//             const response = await fetch(fileURL, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/octet-stream',
//                 },
//             });

//             // Check if the response is successful
//             if (!response.ok) {
//                 throw new Error(`Error downloading file: ${response.statusText}`);
//             }

//             // Create a blob from the response
//             const blob = await response.blob();

//             // Create a link element to trigger the file download
//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = fileName; // Set the file name for the downloaded file

//             // Simulate a click event to trigger the download
//             link.click();

//             console.log(`✅ Downloaded file: ${fileName}`);

//         } catch (error) {
//             console.error("Error downloading the file:", error);
//         }
//     };

//     useEffect(() => {
//         fetchFiles(folderPath);
//     }, [folderPath]);

//     return (
//         <div className="p-8">
//             <Typography variant="h4" gutterBottom>
//                 📂 Files in Folder: {folderPath || 'Root'}
//             </Typography>

//             <div className="my-4">
//                 <Typography variant="h6">Upload a New File</Typography>
//                 <div className="flex items-center space-x-4">
//                     <input type="file" onChange={handleFileChange} className="p-2 border rounded" />
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={handleUpload}
//                         disabled={loading}
//                         startIcon={loading && <CircularProgress size={24} />}
//                     >
//                         {loading ? 'Uploading...' : 'Upload File'}
//                     </Button>
//                 </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//                 <Typography variant="h6" gutterBottom>Current Files in Folder</Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {files.filter(file => file.type !== 2).map((file, index) => (
//                         <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-gray-50 shadow-md">
//                             <div className="text-sm font-medium text-gray-700 flex items-center space-x-2">
//                                 <FileDownload fontSize="small" />
//                                 <span>{file.name}</span>
//                             </div>
//                             <div className="flex space-x-2">
//                                 <IconButton
//                                     onClick={() => handleDownload(folderPath, file.name)}
//                                     color="primary"
//                                 >
//                                     <FileDownload />
//                                 </IconButton>
//                                 <IconButton
//                                     onClick={() => handleDeleteFile(`${folderPath}/${file.name}`)}
//                                     color="secondary"
//                                 >
//                                     <Delete />
//                                 </IconButton>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FileUploadAndShowAllFiles;

























import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress, IconButton, Typography } from '@mui/material';
import { FileDownload, Delete } from '@mui/icons-material';

function FileUploadAndShowAllFiles() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);
    const { folderPath } = useParams();
    console.log("Folder path ", folderPath);

    const fetchFiles = async () => {
        try {
            //https://file-manager-backend-5.onrender.com/
            const response = await axios.get(`http://localhost:8000/files/${folderPath}`);
            setFiles(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };






    // const handleUpload = async () => {
    //     if (!file) {
    //         alert('Please select a file!');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('file', file);
      
    //     console.log("File in upload ",file);
    //     console.log("foler path is ",folderPath);



    //     console.log("Data in frontend ",formData);

    //     try {
    //         setLoading(true);
    //         const response = await axios.post(`http://localhost:8000/upload/inside/${folderPath}`, formData);
    //         alert(response.data);
    //         setLoading(false);
           
    //         fetchFiles(folderPath); // Refresh file list after upload
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //         alert('Failed to upload the file.');
    //         setLoading(false);
    //     }
    // };

  
    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file!');
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        console.log("File in upload ", file);
        console.log("Folder path is ", folderPath);
    
        try {
            setLoading(true);
            const response = await axios.post(`http://localhost:8000/upload/inside/${folderPath}`, formData);
            alert(response.data);
            setLoading(false);
    
            fetchFiles(folderPath); // Refresh file list after upload
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload the file.');
            setLoading(false);
        }
    };
    
      
  
    
  
    


    const handleDeleteFile = async (filePath) => {
        try {
            await axios.delete('http://localhost:8000/delete', { data: { filePath } });
            alert("File deleted!");
            fetchFiles(filePath);
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    };

    const handleDownload = async (folderPath, fileName) => {
        try {
            // Create the file URL for the download endpoint
            const fileURL = `http://localhost:8000/download/${folderPath}/${fileName}`;

            // Trigger the download by making a GET request to the server
            const response = await fetch(fileURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/octet-stream',
                },
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Error downloading file: ${response.statusText}`);
            }

            // Create a blob from the response
            const blob = await response.blob();

            // Create a link element to trigger the file download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName; // Set the file name for the downloaded file

            // Simulate a click event to trigger the download
            link.click();

            console.log(`✅ Downloaded file: ${fileName}`);

        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };

    useEffect(() => {
        fetchFiles(folderPath);
    }, [folderPath]);

    return (
        <div className="p-8 bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-lg shadow-xl space-y-6">
            <Typography variant="h4" gutterBottom className="text-green-800 font-semibold">
                📂 Files in Folder: {folderPath || 'Root'}
            </Typography>

            <div className="my-4">
                <Typography variant="h6" className="text-green-700">Upload a New File</Typography>
                <div className="flex items-center space-x-4">
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
                    />
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleUpload}
                        disabled={loading}
                        startIcon={loading && <CircularProgress size={24} />}
                        className="transition-all duration-300"
                    >
                        {loading ? 'Uploading...' : 'Upload File'}
                    </Button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <Typography variant="h6" gutterBottom className="text-green-700">Current Files in Folder</Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {files.filter(file => file.type !== 2).map((file, index) => (
                        <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-gray-50 shadow-md">
                            <div className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                                <FileDownload fontSize="small" />
                                <span>{file.name}</span>
                            </div>
                            <div className="flex space-x-2">
                                <IconButton
                                    onClick={() => handleDownload(folderPath, file.name)}
                                    color="primary"
                                >
                                    <FileDownload />
                                </IconButton>
                               
                                <IconButton
                                    onClick={() => handleDeleteFile(`${folderPath}/${file.name}`)}
                                    color="secondary"
                                >
                                    <Delete />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FileUploadAndShowAllFiles;

















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Button, CircularProgress, IconButton, Typography } from '@mui/material';
// import { FileDownload, Delete } from '@mui/icons-material';
// import { FaCloudUploadAlt, FaFolderOpen } from 'react-icons/fa';

// function FileUploadAndShowAllFiles() {
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [files, setFiles] = useState([]);
//     const { folderPath } = useParams();
//     console.log("Folder path ", folderPath);

//     const fetchFiles = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`http://localhost:5000/files/${folderPath}`);
//             setFiles(response.data.reverse());  // Reverse the array to show newest at the top
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching files:', error);
//             setLoading(false);
//         }
//     };

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert('Please select a file!');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);
//         try {
//             setLoading(true);
//             const response = await axios.post(`http://localhost:5000/upload/${folderPath}`, formData);
//             alert(response.data);
//             setLoading(false);
//             fetchFiles(folderPath); // Refresh file list after upload
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Failed to upload the file.');
//             setLoading(false);
//         }
//     };

//     const handleDeleteFile = async (filePath) => {
//         try {
//             await axios.delete('http://localhost:5000/delete', { data: { filePath } });
//             alert("File deleted!");
//             fetchFiles(filePath); // Refresh the file list after deletion
//         } catch (error) {
//             console.error("Error deleting file:", error);
//         }
//     };

//     const handleDownload = async (folderPath, fileName) => {
//         try {
//             const fileURL = `http://localhost:5000/download/${folderPath}/${fileName}`;
//             const response = await fetch(fileURL, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/octet-stream',
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error(`Error downloading file: ${response.statusText}`);
//             }

//             const blob = await response.blob();
//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = fileName;
//             link.click();

//             console.log(`✅ Downloaded file: ${fileName}`);
//         } catch (error) {
//             console.error("Error downloading the file:", error);
//         }
//     };

//     useEffect(() => {
//         fetchFiles(folderPath);
//     }, [folderPath]);

//     return (
//         <div className="p-8 bg-green-50">
//             <Typography variant="h4" gutterBottom className="text-green-800">
//                 📂 Files in Folder: {folderPath || 'Root'}
//             </Typography>

//             <div className="my-4">
//                 <Typography variant="h6" className="text-green-700">Upload a New File</Typography>
//                 <div className="flex items-center space-x-4">
//                     <input type="file" onChange={handleFileChange} className="p-2 border rounded" />
//                     <Button
//                         variant="contained"
//                         color="success"
//                         onClick={handleUpload}
//                         disabled={loading}
//                         startIcon={loading && <CircularProgress size={24} />}
//                     >
//                         {loading ? 'Uploading...' : 'Upload File'}
//                     </Button>
//                 </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//                 <Typography variant="h6" gutterBottom className="text-green-800">Current Files in Folder</Typography>
//                 {loading ? (
//                     <div className="flex justify-center items-center">
//                         <CircularProgress size={48} color="success" />
//                     </div>
//                 ) : (
//                     <div className="space-y-4">
//                         {files.filter(file => file.type !== 2).map((file, index) => (
//                             <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-green-100 shadow-lg">
//                                 <div className="text-sm font-medium text-green-700 flex items-center space-x-2">
//                                     <FaFolderOpen className="text-green-500" />
//                                     <span>{file.name}</span>
//                                 </div>
//                                 <div className="flex space-x-2">
//                                     <IconButton
//                                         onClick={() => handleDownload(folderPath, file.name)}
//                                         color="primary"
//                                     >
//                                         <FileDownload />
//                                     </IconButton>
//                                     <IconButton
//                                         onClick={() => handleDeleteFile(`${folderPath}/${file.name}`)}
//                                         color="secondary"
//                                     >
//                                         <Delete />
//                                     </IconButton>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default FileUploadAndShowAllFiles;
