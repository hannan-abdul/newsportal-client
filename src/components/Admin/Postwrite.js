import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import DashboardMenu from '../Dashboard/DashboardMenu/DashboardMenu';
import './Postwrite.css';

const Postwrite = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [photo, setPhoto] = useState(null);
  const history = useHistory();

  const onSubmit = async(data) => {
    // console.log(data);
    const newsData = {
      title: data.title,
      author: data.author,
      description: data.description,
      category: data.category,
      photo: photo,
    };
    // https://warm-ocean-89697.herokuapp.com
    try{
      const res = await axios({
        method: 'post',
        url: `http://localhost:5050/api/news/addNews`,
        data: newsData
      })
      swal("Successfully Added", "Your news has been successfully added!", "success");
      console.log('server side response', res)
      res && history.push("/manage-news")
    }
    catch(err){
      console.log(err)
    }
  }

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'eeb4fdf4446cbfff89dd86eccb1a15f9');
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setPhoto(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <section>
      <div>
        <DashboardMenu />
      </div>
      <div>
        <h2 className="my-4">New Post</h2>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <input className="image-input" type='file' onChange={handleImageUpload} />
          <br />
          <input type='text' placeholder="News Title" {...register("title")} />
          <br />
          <input type='text' placeholder="Author Name" {...register("author")} />
          <br />
          <textarea type='text' placeholder="News Description" {...register("description")} />
          <br />
          <select placeholder="Category" className="box form-control responsive-input" {...register("category")} required>
            <option value="" disabled selected>Select Category</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="International">International</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <input className='custom-btn' type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Postwrite;