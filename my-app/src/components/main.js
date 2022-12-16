import React, { useState, useEffect } from 'react';

function Main() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    return(
        <div className="posts-container">
      {posts.map((post) => {
         return (
            <>
            {/* <div className="post-card" key={post.id}> */}
               <h2 className="post-title">{post.title}</h2>
               <h3>{post.price}</h3>
               <img width={150} src={post.image} alt="" />
                
            {/* </div> */}
            </>
         );
      })}
   </div>
   );
}

export default Main