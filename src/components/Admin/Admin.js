import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Postwrite.css';

const Admin = () => {

    // create post 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data) => {
        // console.log(data);
        const newsData = {
            title: data.title,
            author: data.author,
            description: data.description,
            category: data.category,
            imageURL: imageURL,
        };
        const url = `https://warm-ocean-89697.herokuapp.com/addNews`;
        console.log(newsData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
            .then(res => console.log('server side response', res))
        // alert("item added");
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'eeb4fdf4446cbfff89dd86eccb1a15f9');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // read post 
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://warm-ocean-89697.herokuapp.com/allnews')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    // Update news 
    const [updatedItem, setUpdatedItem] = useState({
        title: "",
        author: "",
        description: "",
        category: "",
        id: "",
    })

    const [isPut, setIsPut] = useState(false);
    const openUpdate = (id) => {
        setIsPut(true);
        console.log(id)
        setUpdatedItem((prevInput) => {
            return {
                ...prevInput,
                id: id,
            };
        });
    }

    const updateItem =(id) =>{
        axios.put(`https://warm-ocean-89697.herokuapp.com/update/${id}`, updatedItem);
        alert("item updated");
        console.log(`item with id ${id} updated`);
    }

    function handleUpdate(event) {
        const { name, value } = event.target;
        setUpdatedItem((prevInput) => {
            return {
                ...prevInput,
                [name]: value,
            };
        });
        console.log(updatedItem);
    }

    // delete post 
    const deleteEvent = id => {
        console.log(id)
        fetch(`https://warm-ocean-89697.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('news deleted')
                alert('News Deleted')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="container">
            {!isPut ?
                (
                    <div className='mt-3'>
                        <h2>New Post</h2>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <input className="image-input" type='file' onChange={handleImageUpload} />
                            <br />
                            <input type='text' placeholder="News Title" {...register("title")} />
                            <br />
                            <input type='text' placeholder="Author Name" {...register("author")} />
                            <br />
                            <textarea type='text' placeholder="News Description" {...register("description")} />
                            <br />
                            <input type='text' placeholder="News Category" {...register("category")} />
                            <br />
                            <input className='custom-btn' type="submit" />
                        </form>
                    </div>
                ) : (
                    <div className='mt-3'>
                        <h2>Update Post</h2>
                        <form className='form'>
                            <input onChange={handleUpdate} value={updatedItem.title} name="title" placeholder="News Title"></input>
                            <br />
                            <input onChange={handleUpdate} value={updatedItem.author} name="author" placeholder="Author Name"></input>
                            <br />
                            <textarea onChange={handleUpdate} value={updatedItem.description} name="description" placeholder="News Description"></textarea>
                            <br />
                            <input onChange={handleUpdate} value={updatedItem.category} name="category" placeholder="News Category"></input>
                            <br />
                            <button className='custom-btn' onClick={() => updateItem(updatedItem.id)}>Update</button>
                        </form>
                    </div>
                )}
            {
                news.map(newsData => {
                    return (
                        <div className='row mt-3 edit-div' key={newsData._id}>
                            <div className="col-6">
                                <p>{newsData.title}</p>
                                <p>{newsData.author}</p>
                            </div>
                            <div className="col-6">
                                <button className='custom-btn-edit' onClick={() => deleteEvent(newsData._id)}>DELETE</button>
                                <button className='custom-btn-edit' onClick={() => openUpdate(newsData._id)}>UPDATE</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Admin;