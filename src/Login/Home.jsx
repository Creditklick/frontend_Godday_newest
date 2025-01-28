// import React, { useState } from 'react';

// import facebook from './../Images/facebook.png';
// import googlenew from './../Images/googlenew.png';
// import twitter from './../Images/twitter.png';
// import { Link } from 'react-router-dom';

// import axios from 'axios'

// function Home() {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [openLogin, setOpenLogin] = useState(true);
//   const [openSignup, setOpenSignup] = useState(false);

//   const [showimage,setShowImage] = useState(null);

//   const [image , setImage] = useState(null);

//   const [loading,setLoading] = useState(false);

//   const toggleToSignup = () => {
//     setOpenLogin(false);
//     setOpenSignup(true);
//   };

//   const toggleToLogin = () => {
//     setOpenSignup(false);
//     setOpenLogin(true);
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if(image){
//         console.log("Found an Image");
//     }
//     else{
//         console.log("Not Image Found");
//     }
//     console.log('Click on signup');
//     console.log(name);
//     console.log(email);
//     console.log(password);
//   };

//    const handleimage = async (e)=>{
//     const file = e.target.files[0];
//     const data = new FormData();
//     data.append('file',file);
//     data.append('name_of_image','image');
//     if(file){
//         setImage(file);
//         try{
//            setLoading(true);
//           const response = await axios.post('http://localhost:8000/upload',data)
//            if(response){
//               console.log("Image upload successfully");
//            }
//         }
//         catch(error){
//             console.log("Image upload unsuccessfully",error);
//         }finally{
//            setLoading(false);
//         }

//         setShowImage(URL.createObjectURL(file));
//         console.log("Image upload successfully");
//     }
//     else{
//         console.log("Image upload Unsuccessfully");
//     }

//    }

//   return (
//     <div>

//      <div className="relative hidden md:block h-fit bg-black">
//         <div className="absolute z-10 top-0 right-1/3 w-[200px] h-[200px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-blue-500 to-pink-400 rounded-full"></div>
//         <div className="absolute z-10 bottom-0 right-0 w-[200px] h-[200px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-blue-500 to-pink-400 rounded-full"></div>

//         <div className="md:flex w-full">
//           <div className="w-[60%] flex items-center justify-center md:px-10">
//             <h1 className="text-white font-semibold md:text-5xl lg:text-6xl xlg:text-8xl">Welcome to LiveLink</h1>
//           </div>

//           <div className="md:w-[70%] lg:w-[40%] border-gray-400 z-10 h-screen">
//             <div className="py-2 text-white px-12 mt-10 mb-6">
//               <div className="z-30 text-black border-blue-950 border-2 rounded-lg">
//                 {openLogin && (
//                   <form className="text-white z-30 mt-5 mb-5" >
//                     <div className="w-full px-6">
//                       <div className="space-y-5">
//                         <label className="text-2xl md:text-2xl lg:text-3xl">Login</label>

//                         <div className="space-y-2">
//                           <h1>Email</h1>
//                           <input
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="text"
//                             placeholder="username"
//                             required
//                             className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
//                           />
//                         </div>
//                       </div>

//                       <div className="py-4 space-y-2 text-white">
//                         <label>Password</label>
//                         <input
//                           type="password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           placeholder="password"
//                           className="w-full px-4 py-1 text-lg bg-transparent border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>

//                       <div className="space-x-2">
//                         <input type="checkbox" />
//                         <span>Remember me!</span>
//                       </div>

//                       <div>
//                         <button
//                           type="submit"
//                           className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-pink-600 rounded-md mt-2 w-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-800 transition duration-300"
//                         >
//                           Login
//                         </button>
//                       </div>

//                       <div className="flex items-center my-4">
//                         <div className="flex-grow h-px bg-gray-300"></div>
//                         <span className="px-4 text-gray-500">or</span>
//                         <div className="flex-grow h-px bg-gray-300"></div>
//                       </div>

//                       <div className="mt-5 mb-3 flex justify-center space-x-3">
//                         <Link to="">
//                           <img alt="" style={{ width: '30px', height: '30px' }} src={googlenew} />
//                         </Link>
//                         <Link to="">
//                           <img alt="" style={{ width: '30px', height: '30px' }} src={facebook} />
//                         </Link>
//                         <Link to="">
//                           <img alt="" style={{ width: '30px', height: '30px' }} src={twitter} />
//                         </Link>
//                       </div>

//                       <div className="flex justify-center items-center cursor-pointer space-x-3">
//                         <h6 className="hover:text-gray-400 underline underline-offset-8">Don't have an Account?</h6>
//                         <button
//                           type="button"
//                           onClick={toggleToSignup}
//                           className="rounded-md py-1 px-2 hover:scale-105 transition duration-300 ease-in-out bg-pink-400"
//                         >
//                           Signup
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 )}

//                 {openSignup && (

//                   <form className="text-white z-30 mt-5 mb-5" onSubmit={handleSignup}>
//                     <div className="w-full px-6">
//                       <div className="space-y-5">
//                         <label className="text-2xl md:text-2xl lg:text-3xl ">Signup</label>

//                         <div className="space-y-2">
//                           <h1>Name</h1>
//                           <input
//                             type="text"
//                             value={name}
//                             placeholder="username"
//                             required
//                             onChange={(e) => setName(e.target.value)}
//                             className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
//                           />
//                         </div>

//                         <div className="space-y-2">
//                           <h1>Email</h1>
//                           <input
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="email"
//                             placeholder="email"
//                             className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
//                           />
//                         </div>
//                       </div>

//                       <div className="py-4 space-y-2 text-white">
//                         <label>Password</label>
//                         <input
//                           type="password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           placeholder="password"
//                           className="w-full px-4 py-1 text-lg bg-transparent border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>

//                       <div className="py-4 space-y-2 text-white">
//                         <label>Upload</label>
//                         <input
//                           type="file"
//                           accept='image/*'
//                           onChange={handleimage}
//                           placeholder="password"
//                           className="w-full px-4 py-1 text-lg bg-transparent border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>

//                       <div>
//                         <button
//                           type="submit"
//                           className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-pink-600 rounded-md mt-2 w-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-800 transition duration-300"
//                         >
//                           Signup
//                         </button>
//                       </div>

//                       <div className="flex justify-center items-center cursor-pointer space-x-3">
//                         <h6 className="hover:text-gray-400 underline underline-offset-8">Already have an Account?</h6>
//                         <button
//                           type="button"
//                           onClick={toggleToLogin}
//                           className="rounded-md py-1 px-2 hover:scale-105 transition duration-300 ease-in-out bg-pink-400"
//                         >
//                           Login
//                         </button>
//                       </div>
//                     </div>

//                   </form>

//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//     </div>
//   );
// }

// export default Home;

import React, { useState , useEffect } from "react";
import facebook from "./../Images/facebook.png";
import googlenew from "./../Images/googlenew.png";
import twitter from "./../Images/twitter.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {

 
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openLogin, setOpenLogin] = useState(true);
  const [openSignup, setOpenSignup] = useState(false);
  const [showimage, setShowImage] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('');

  const toggleToSignup = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };

  const toggleToLogin = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (image) console.log("Found an Image");
    else console.log("No Image Found");
    console.log("Click on signup", name, email, password);
  };



  const handleLogin = async (e) => {
    e.preventDefault();
    //setLoading(true);
  
    console.log("Email: ", email);
    console.log("Password: ", password);
  
    try {
      const response = await axios.get('https://file-manager-backend-main-1.onrender.com/api/users/login', {
    
         params :{
          email: email,
          password: password

         }
       
        
      
      
      });

      console.log("message is ",response.message);
      
      localStorage.setItem("token",response.data.token);
      window.location.href = '/filesystem';
      console.log("User logged in successfully", response.data.token);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
        console.error("Error message from server:", error.response.data.message);
        // alert(error.response.data.message); // Show the error to the user (optional)
      } else {
        console.error("An unknown error occurred:", error.message);
        setError(error.message)
        alert("Something went wrong. Please try again."); // Fallback message
      }
    } finally {
      setLoading(false);  // Make sure to stop loading even after the request is complete
     
    }
  };
  


  return (
    <div className="relative">
      {/* Background with responsive padding */}
      <div className="relative bg-black px-4 sm:px-6 lg:px-8">
        <div className="absolute z-10 top-10 right-10 w-[150px] cursor-pointer h-[150px] sm:w-[200px] sm:h-[200px] hover:z-30 hover:scale-105 transition duration-300 ease-in-out  bg-gradient-to-r from-blue-500 to-pink-400 rounded-full"></div>
        <div className="absolute z-10 bottom-10 left-10 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-blue-500 to-pink-400 rounded-full"></div>

        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          {/* Left Section */}

          <div className="flex-1 flex items-center justify-center text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-white z-20 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
              File Storage
            </h1>
          </div>

          {/* Right Section */}
          
          <div className=" flex-1 z-20   md:w-1/2 lg:w-1/3   border border-gray-600 rounded-lg p-4 sm:p-6 h-screen">
            <div className="text-white">
              <div className=" rounded-lg">
                {openLogin && (
                  <form className=" mt-5 md:mt-28  mb-5">
                    <div className="text-center">
                      <h2 className="text-2xl sm:text-3xl mb-4 h-full">Login</h2>
                    </div>

                    <div>
                      <div className="space-y-4">
                        <label>Email</label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          placeholder="username"
                          required
                          className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
                        />
                      </div>
                      <div className="space-y-4 mt-4">
                        <label>Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="password"
                          className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
                        />
                      </div>
                      <div className="mt-4  text-center">
                          {
                             error && <span className="text-red-500">{error}</span>
                          }
                      </div>
                      
                      <button
                         onClick={handleLogin}
                        className="w-full mt-6 py-2 bg-gradient-to-r from-blue-500 to-pink-600 text-white rounded-lg hover:from-blue-600 hover:to-pink-700 transition duration-300"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                )}

                {/* {openSignup && (
                  <form className="mt-5 mb-5" onSubmit={handleSignup}>
                    <div className="pt-10">
                         
                    <h2 className="text-2xl sm:text-3xl mb-4 text-center">Signup</h2>
                    <div className="space-y-4">
                      <label>Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
                      />
                    </div>
                    <div className="space-y-4 mt-4">
                      <label>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
                      />
                    </div>
                    <div className="space-y-4 mt-4">
                      <label>Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full py-1 text-lg px-4 text-white border-2 border-gray-400 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 placeholder-gray-500"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full mt-6 py-2 bg-gradient-to-r from-blue-500 to-pink-600 text-white rounded-lg hover:from-blue-600 hover:to-pink-700 transition duration-300"
                    >
                      Signup
                    </button>


                    </div>




                  



                  </form>
                )} */}



                
              </div>

              {/* <div className="mt-6 text-center">
                <p>
                  {openLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </p>
                <button
                  onClick={openLogin ? toggleToSignup : toggleToLogin}
                  className="text-blue-400 hover:underline"
                >
                  {openLogin ? "Signup" : "Login"}
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
