import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
         axios.get("http://localhost:3000/get-posts")
            .then((res) => {
                console.log(res.data); // because from server in res they send message and posts you can see that
                setPosts(res.data.posts);
            })
    }, [])


    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id}
                            className='post-card'>
                            <img src={post.image} alt={post.caption || "Post preview"} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1 className='empty-state'>No posts available yet</h1>
                )
            }
        </section>
    )
}

export default Feed