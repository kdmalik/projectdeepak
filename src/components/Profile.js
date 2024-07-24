import React, { useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import './Profile.css';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async (user) => {
    if (user) {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("No user data found");
      }
    } else {
      setUserDetails(null);
      console.log("User is not logged in");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      fetchUserData(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="profile-container">
      {userDetails ? (
        <>
          <div className="profile-image">
            <img src={userDetails.photo} alt="Profile" />
          </div>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <div className="profile-details">
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            <p>Last Name: {userDetails.lastName}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
