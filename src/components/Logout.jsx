import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Firebase auth instance
import { useNavigate } from "react-router-dom"; // For redirecting after sign-out

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth); // Sign out the user
        console.log("User signed out successfully.");
        navigate("/"); // Redirect user to login page
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    };

    handleLogout(); // Call the sign-out function as soon as the component loads
  }, [navigate]);

  return (
    <div className="logout-container">
      <p>Logging out...</p>
    </div>
  );
};

export default LogoutPage;
