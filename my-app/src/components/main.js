import React, { useState, useEffect } from 'react';
import '../css/main.css'

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
        <div className="container">
            <div className="posts-container">
                {posts.map((post) => {
                    return (
                        <div className='post'>
                            <h2 className="post-title"><span className=''>{post.title}</span></h2>
                            <div className='post-img-pb'>
                                <img className='post-img' src={post.image} alt="" />
                            </div>
                            <h3 className='post-price'>Price: <span className='post-price-value'>{post.price}$</span></h3>
                            <p className='post-desc'>Description: <span className='post-desc-value'>{post.description}</span></p>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Main