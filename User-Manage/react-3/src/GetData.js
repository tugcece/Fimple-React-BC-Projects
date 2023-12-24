import React, { useEffect, useState } from "react";
import axios from "axios";



const getUserData = async (userId) => {//to get user datas....
  try {
    // get user datas from api
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;
    // get user posts from api
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postsResponse.data;
    // combine both data 
    const result = {
      user: userData,
      posts: userPosts
    };

    return result;
  } catch (error) {  
    console.error('Error:', error.message);
    throw error;
  }
};

const GetData = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(userId);
        setUserData(data);
        console.log('UserData:', data); 
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
    </div>
  );
};

export default GetData;