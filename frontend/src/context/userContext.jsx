
// UserContext.jsx for managing user data and images in a React application
import React, { createContext, useState } from "react"; // Import necessary React functions
import axios from "axios"; // Import axios for HTTP requests
import { useEffect } from "react"; // Import useEffect for side effects

// Create a context for user data
export const userDataContext = createContext();

function UserContext({ children }) { // Define the UserContext component
  const serverUrl = "http://localhost:8000"; // Define the server URL
  const [userData, setUserData] = React.useState(null); // State for storing user data
 
  // Function to fetch current user data from the server

  const handleCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`, {
        withCredentials: true,
      });
      setUserData(result.data);
      console.log("Current User Data:", result.data);
    } catch (error) {
      console.error("Error fetching current user data:", error);
    }
  };

  
  
  // useEffect to fetch current user data on component mount
  useEffect(() => {
    handleCurrentUser();
  }, []);
  // Define the value to be provided by the context
  const value = {
    serverUrl,userData,setUserData
  };
  return (
    <div>
      <userDataContext.Provider value={value}> 
        {children} 
      </userDataContext.Provider> 
    </div>
  );
}

export default UserContext;
