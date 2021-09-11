import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Postwrite.css';

const EditPost = (props) => {
  // console.log(props)
  const {_id} = props.newsdata.selectedNews
  // console.log(props)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    console.log(data);
    const newsData = {
      title: data.title,
      author: data.author,
      description: data.description,
      category: data.category,
      imageURL: imageURL
    };
    const url = `https://warm-ocean-89697.herokuapp.com/update/${_id}`;
    console.log(newsData)
    fetch(url, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newsData)
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
      <h2>Edit Post: {_id } </h2>
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
  );
};

export default EditPost;