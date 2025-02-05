



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

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   if (image) console.log("Found an Image");
  //   else console.log("No Image Found");
  //   console.log("Click on signup", name, email, password);
  // };



const handleSignup = async (e) => {
    e.preventDefault();

    console.log("name is ",name);
   console.log("email is , email);
               console.log("password is ",password);
 
    try {
      const response = await axios.post(
        "file-manager-backend-main-1.onrender.com/api/users/signup",
       {  params :{
          name : name,
          email: email,
          password: password

         }
       }
       // { name, email, password },
       // { headers: { "Content-Type": "application/json" } }
      );

      console.log("Signup successful", response.data);
     alert("Account Created please click on login ");
     
       // toast.success("Signup Successfull");
        
    } catch (err) {
      if (err.response) {
        console.error("Signup failed:", err.response.data.message);
        // setError(err.response.data.message);
        // toast.error(err.response.data.message || "Signup Failed");
      } else {
        console.error("Error in signup request:", err.message);
      }
    }
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
                  <form className=" mt-5 md:mt-15  mb-5">
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

                      
                       <div className="text-red-500 mt-10">
                          <h1 className="text-center font-medium hover:underline cursor-pointer mb-2">Important Notice</h1>


                          <span className="text-red-300 text-ssm mt-10">This device is the exclusive property of IMS Pvt Ltd. Unauthorized access to this device is not permitted.</span>


                          <p className="text-ssm mt-3">IMS Digital monitors and logs all activities on this device. Anyone using this system expressly consents to such monitoring and is advised if such monitoring reveals possible evidence of criminal activity, system personnel may provide the evidence to law enforcement officials.

Any attempt to gain unauthorized access and/or to tamper with this device will attract legal action against the party identified.</p>

                     </div>

                      

                    

                  </form>
                )}

                 {openSignup && (
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
                )} 



                
              </div>

               <div className="mt-6 text-center">
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
              </div> 
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Home;

