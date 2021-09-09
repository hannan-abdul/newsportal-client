import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Postwrite.css';

const Postwrite = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    // console.log(data);
    const newsData = {
      title: data.title,
      author: data.author,
      description: data.description,
      category: data.category,
      imageURL: imageURL
    };
    const url = `http://localhost:5055/addNews`;
    console.log(newsData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newsData)
    })
    .then(res=> console.log('server side response', res))
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
      <h2>New Post</h2>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input type='file' onChange={handleImageUpload} />
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
  );
};

export default Postwrite;