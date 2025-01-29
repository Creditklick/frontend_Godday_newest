// import React, { useState } from 'react';
// import { CircularProgress } from '@mui/material';

// function UploadFile({ handleFileChange, handleUpload }) {
//   const [loading, setLoading] = useState(false);

//   // Update the loading state during upload process
//   const onUpload = async () => {
//     setLoading(true);
//     await handleUpload();
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-lg shadow-xl space-y-4 max-w-lg mx-auto">
//       <h2 className="text-3xl font-semibold text-green-800">🌱 Upload Your File</h2>
//       <input
//         className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//         type="file"
//         onChange={handleFileChange}
//       />
//       <button
//         className={`px-5 py-2 rounded-lg transition-all duration-300 ${loading ? 'bg-gray-300' : 'bg-green-600 hover:bg-green-700'} text-white focus:outline-none focus:ring-4 focus:ring-green-300`}
//         onClick={onUpload}
//         disabled={loading}
//       >
//         {loading ? (
//           <CircularProgress size={24} className="text-white" />
//         ) : (
//           '⬆️ Upload File'
//         )}
//       </button>
//     </div>
//   );
// }

// export default UploadFile;








import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';

function UploadFile({ handleFileChange, handleUpload }) {
  const [loading, setLoading] = useState(false);

  const [progress,setProgress] = useState(0);

  // Update the loading state during upload process
  const onUpload = async () => {
    setLoading(true);
    await handleUpload();
    setLoading(false);
  };

  return (
    <div className="p-2 bg-white shadow-md rounded-md ">
    <input
      className="border p-1 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
      type="file"
      onChange={handleFileChange}
    />
    <button
      className={`mt-2 w-full py-1 rounded-md ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
      onClick={onUpload}
      disabled={loading}
    >
      {loading ? (
        <CircularProgress size={20} className="text-white" />
      ) : (
        'Upload'
      )}
    </button>
  </div>
  )
}

export default UploadFile;
