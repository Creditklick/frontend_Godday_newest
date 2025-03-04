
// import './App.css';
// import {BrowserRouter,Routes,Route, useParams } from 'react-router-dom'
// import FullFileManager from './Components/FullFileManagers';
// // import Page from './Components/Page';
// import FolderPage from './Components/FolderPage';

// import Home from './Login/Home';
// import { Navigate } from 'react-router-dom';
// import Header from './Login/Header';

// import { useEffect , useState } from 'react';

// import {  Outlet } from 'react-router-dom';



// function App() {
    
   
//      const token = localStorage.getItem('token');
     


    

//      // const ProtectedRoutes = ({ folderPath }) => {
//      //   // Retrieve the folder's authentication status from localStorage
//      //   const authenticatedFolders = JSON.parse(localStorage.getItem('authenticatedFolders')) || {};
       
//      //   // Check if the folder is authenticated
//      //   if (authenticatedFolders[folderPath] === true) {
//      //     return <Outlet />; // Folder is authenticated, render the child route (FolderPage)
//      //   } else {
//      //     // Folder is not authenticated, redirect to an error page or login page
//      //     return <Navigate to="/filesystem" replace />;
//      //   }
//      // };


//      const [fileprotection,setFileProtection] = useState('');
     
    


//      useEffect(()=>{
//            console.log("fileprotection state is ",fileprotection);
//      })



//      const ProtectEachFolder =({children,fileprotection})=>{
//             //console.log protect Each Folder:
//             if(!fileprotection){
//                  return <Navigate to='/filesystem' replace/>
//             }
//             return children;

//      }
    
   


//   return (
//       <BrowserRouter>
//              {token &&  <Header />}
//           <Routes>
//                {/* <Route path = '/Home'   element={<Home/>}/>  */}

           
              
//                <Route path='/' element={<Home/>}/>
//                <Route path = '/filesystem'   element={<ProtectedRoute ><FullFileManager setFileProtection=  {setFileProtection} /></ProtectedRoute>}/> 
//                {/* <Route path = '/page1'   element={<Page/>}/>  */}
//                {/* <Route path="/folder/:folderPath" element={<FolderPage />} /> */}
//                <Route path="/:folderPath" element={<ProtectEachFolder fileprotection={fileprotection}><FolderPage /></ProtectEachFolder>} /> 
                 
// {/*                  
//                <Route 
//           path="/:folderPath" 
//           element={<ProtectedRoutes folderPath=":folderPath" />}/>  */}

              



              
//           </Routes>
//        </BrowserRouter>
//   );
// }



 


// const ProtectedRoute = ({ children }) => {
     
//      const token = localStorage.getItem('token');
//      return token ? children : <Navigate to="/" />;
// };













// // const ProtectedRoute = ({ children }) => {
// //   const location = useLocation(); // Get the current route

// //   // If the user navigates to the root route, remove the token
// //   if (location.pathname === '/') {
// //     localStorage.removeItem('token');
// //   }

// //   // Check if the token exists
// //   const token = localStorage.getItem('token');

// //   // If token exists, allow access to the protected route
// //   return token ? children : <Navigate to="/" />;
// // };





// export default App;






import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import FullFileManager from './Components/FullFileManagers';
import FolderPage from './Components/FolderPage';
import Home from './Login/Home';
import Header from './Login/Header';
import { useEffect, useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [fileProtection, setFileProtection] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token')); 
  const location = useLocation(); 

 
  useEffect(() => {
    console.log('My current location is: ', location.pathname);
    if (location.pathname === '/') {
    console.log("Current location is '/', removing token.");
    
    const token = localStorage.getItem("token"); // Use localStorage.getItem instead of getItem
    console.log("Token before removal:", token);
    
    localStorage.removeItem("token");
    
    const tokenAfterRemoval = localStorage.getItem("token"); // Use localStorage.getItem again
    console.log("Token after removal:", tokenAfterRemoval);
    
    setToken(null); 
}

  });

 
  const ProtectEachFolder = ({ children, fileProtection }) => {
    if (!fileProtection) {
      return <Navigate to="/filesystem" replace />;
    }
    return children;
  };

  return (
    <div>
      {token && <Header />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/filesystem"
          element={
            <ProtectedRoute token={token}>
              <FullFileManager setFileProtection={setFileProtection} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:folderPath"
          element={
            <ProtectEachFolder fileProtection={fileProtection}>
              <FolderPage />
            </ProtectEachFolder>
          }
        />
      </Routes>
    </div>
  );
}


// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/" />;
// };

const ProtectedRoute = ({ children , token }) => {
  // const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};


export default App;




