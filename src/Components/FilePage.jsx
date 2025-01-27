// import React from 'react'

// function FilePage({files , handleDelete}) {

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
//     <h2 className="text-2xl font-semibold">📁 Current file Files</h2>
//     <ul className="space-y-4">

//     <div className='grid grid-cols-3 gap-4'>
// {files
// .filter(file => file.type !== 2) 
// .map((file, index) => (
// <li key={index} className="flex justify-between items-center p-4 border rounded-lg bg-gray-100 shadow">
//     <span className="font-medium">📄 {file.name}</span>
//     <div className="space-x-3">
//         <button 
//             className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" 
//             onClick={() => handleDelete(file.name)}>
//             🗑️ Delete File
//         </button>
//     </div>
// </li>
// ))}
// </div>


       

//     </ul>
// </div>
//   )
// }

// export default FilePage

import React, { useState, useEffect } from 'react';
import { Button, Typography, CircularProgress } from '@mui/material';
import { MdDelete, MdFileDownload } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

function FilePage({ files, handleDelete }) {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a file fetching process
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);
 
    //  const folderPath = useParams();
     


    //  useEffect(()=>{
    //     console.log("current path of filepage ",folderPath);
    //  },[folderPath])

    




    const handleDownload = async (fileName) => {
        try {
            // Create the file URL for the download endpoint
          
            console.log("File name ",fileName);
            // console.log("Folder name ",folderPath);
            const fileURL = `http://localhost:8000/download/${fileName}`;

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


    return (
        <div className="p-6 bg-green-50 rounded-lg shadow-md space-y-4">
            <Typography variant="h5" className="text-2xl font-semibold mb-4 text-green-700">
                🌿 Current Files in Nature's Cloud
            </Typography>

            {/* Loading Spinner */}
            {isLoading ? (
                <div className="flex justify-center items-center py-10">
                    <CircularProgress color="success" />
                </div>
            ) : (
                <div className="space-y-4">
                    {files
                        .filter((file) => file.type !== 2)
                        .map((file, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-4 border rounded-lg bg-green-100 shadow-lg mb-4"
                            >
                                <span className="font-medium text-green-800">{file.name}</span>
                                <div className="space-x-3 flex">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        startIcon={<FaCloudDownloadAlt />}
                                         onClick={() => handleDownload(file.name)}
                                    >
                                        🌱 Download
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        startIcon={<MdDelete />}
                                        onClick={() => handleDelete(file.name)}
                                    >
                                        🌿 Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

export default FilePage;
