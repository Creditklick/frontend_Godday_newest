

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
//             //https://file-manager-backend-5.onrender.com/
//             const response = await axios.get(`https://file-manager-backend-main-1.onrender.com/files/${folderPath}`);
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
    
//         console.log("File in upload ", file);
//         console.log("Folder path is ", folderPath);
    
//         try {
//             setLoading(true);
//             const response = await axios.post(`https://file-manager-backend-main-1.onrender.com/upload/inside/${folderPath}`, formData);
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
//             await axios.delete('https://file-manager-backend-main-1.onrender.com/delete', { data: { filePath } });
//             alert("File deleted!");
//             fetchFiles(filePath);
//         } catch (error) {
//             console.error("Error deleting file:", error);
//         }
//     };

//     const handleDownload = async (folderPath, fileName) => {
//         try {
//             // Create the file URL for the download endpoint
//             const fileURL = `https://file-manager-backend-main-1.onrender.com/download/${folderPath}/${fileName}`;

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
//         <div className="p-8 bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-lg shadow-xl space-y-6">
//             <Typography variant="h4" gutterBottom className="text-green-800 font-semibold">
//                 📂 Files in Folder: {folderPath || 'Root'}
//             </Typography>

//             <div className="my-4">
//                 <Typography variant="h6" className="text-green-700">Upload a New File</Typography>
//                 <div className="flex items-center space-x-4">
//                     <input 
//                         type="file" 
//                         onChange={handleFileChange} 
//                         className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
//                     />
//                     <Button
//                         variant="contained"
//                         color="success"
//                         onClick={handleUpload}
//                         disabled={loading}
//                         startIcon={loading && <CircularProgress size={24} />}
//                         className="transition-all duration-300"
//                     >
//                         {loading ? 'Uploading...' : 'Upload File'}
//                     </Button>
//                 </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//                 <Typography variant="h6" gutterBottom className="text-green-700">Current Files in Folder</Typography>
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
            const response = await axios.get(`https://file-manager-backend-main-1.onrender.com/files/${folderPath}`);
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
            const response = await axios.post(`https://file-manager-backend-main-1.onrender.com/upload/inside/${folderPath}`, formData);
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
            await axios.delete('https://file-manager-backend-main-1.onrender.com/delete', { data: { filePath } });
            alert("File deleted!");
            fetchFiles(filePath);
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    };

    const handleDownload = async (folderPath, fileName) => {
        try {
            // Create the file URL for the download endpoint
            const fileURL = `https://file-manager-backend-main-1.onrender.com/download/${folderPath}/${fileName}`;

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














