import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target); 
        console.log(formData)
        
        await axios.post("http://localhost:3000/create-post", formData)
            .then((res) => {
                console.log(res);
                navigate("/feed")
            })
            .catch((err) => {
                console.log(err);
                alert("error craeting post");
            })
    }

    return (
        <section className='create-post-section'>
            <h1>Create Page</h1>

            <form onSubmit={handleSubmit}>
                <input type="file" name="image" accept="image/*" />
                <input type="text" name="caption" placeholder='Title' required />
                <button type="submit">Submit </button>
            </form>
        </section>
    )
}

export default CreatePage