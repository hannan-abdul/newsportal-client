import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import EditPost from './EditPost';
import './Postwrite.css';

const EditPostLoad = () => {
    const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://warm-ocean-89697.herokuapp.com/allnews')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

    return (
        <div className='container'>
            <div className="row">
                {
                    news.map(newsDataEdit=><EditPost 
                        newsDataEdit={newsDataEdit}
                        key={newsDataEdit._id}
                        />)
                }
            </div>
        </div>
    );
};

export default EditPostLoad;

console.log(props.newsdata.selectedNews._id)
  const { _id } = props.newsdata.selectedNews;

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    console.log(data);
    const editData = {
      title: data.title,
      author: data.author,
      description: data.description,
      category: data.category,
      imageURL: imageURL
    };
    const url = `https://warm-ocean-89697.herokuapp.com/update/${_id}`;
    console.log(editData)
    fetch(url, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(editData)
    })
      .then(res => console.log('server side response', res))
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

  return (
    <div className='mt-5'>
      <h2>Edit Post: {_id} </h2>
      <div>
        {/* <input onChange={handleUpdate} value={updatedItem.title} name="title" placeholder="News Title"></input>
        <br />
        <input onChange={handleUpdate} value={updatedItem.author} name="author" placeholder="Author Name"></input>
        <br />
        <textarea onChange={handleUpdate} value={updatedItem.description} name="description" placeholder="News Description"></textarea>
        <br />
        <input onChange={handleUpdate} value={updatedItem.category} name="category" placeholder="News Category"></input>
        <br />
        <button onClick={() => updateItem(updatedItem.id)}>Update</button> */}
      </div>

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
    </div>