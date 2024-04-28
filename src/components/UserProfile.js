// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <div className='person_img'>
        <img className="profile-image" src={user.picture.large} alt="User Profile" />
      </div>
      
      <div className="profile-details"> 
        <div className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>  
        <p className="gender"> <b>Gender:</b>  {user.gender}</p>
        <p className="phone"> <b>Phone:</b> {user.phone}</p> 
      </div>
    </div>
  );
};

export default UserProfile;
