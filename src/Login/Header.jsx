import React ,{useState,useEffect} from 'react';
import axios from 'axios'

function Header() {


      const [username,setUserName] = useState('');
      const [user,setUser] = useState('');
  
       
      const getUserDetail = async (localtoken)=>{
 
              try{
                    const response = await axios.get('https://file-manager-backend-main-1.onrender.com/api/users/profile',{
                         headers : {
                               'Authorization': `Bearer ${localtoken}`,
                         }
                    });

                    const userdetail = response.data;
                    if(userdetail){
                         setUser(userdetail?.user);
                         console.log("acutal user name is ",userdetail?.user);
                    }
                       
                   console.log(typeof response.data);
                   console.log(response.data);
                   console.log(response.data.name);
                 
              }
              catch(err){
                console.log("User Detail not Found",err);
              }
            
      }
 

    
    
      useEffect(()=>{
           const localtoken = localStorage.getItem('token');
           if(localtoken){
                getUserDetail(localtoken);
           }
      },[]);



    //   useEffect(()=>{
    //     console.log("USer is ",username);
        
    //     console.log("user email ",user.email);
    //   })





 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md w-full">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-300">
          
            Ck Web Transfer
        </a>
      </div>

      {/* Navigation Links */}
      {/* <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/filesystem" className="hover:text-gray-300">
          File Manager
        </a>
        <a href="/profile" className="hover:text-gray-300">
          Profile
        </a>
      </nav> */}

      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="hidden md:flex flex-col items-end">
            <p className="text-sm font-medium">{`Welcome, ${user.name || 'User'}`}</p>
            <p className="text-xs text-gray-200">{user.email || 'Email not available'}</p>
          </div>
        ) : null}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Mobile Menu Button (for smaller screens) */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => alert('Toggle mobile menu')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
