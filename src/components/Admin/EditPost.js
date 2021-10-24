import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
// import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import './EveryNews.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const ModalForm = ({ modalIsOpen, closeModal, newdata }) => {
  // const email = useSelector((state) => state.auth.userdetails.email);
  const { title, author, description, category, _id } = newdata;
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [photo, setPhoto] = useState(null);

  const onSubmit = async data => {
    const serviceUpdateData = {
      title: data.title,
      author: data.author,
      description: data.description,
      category: data.category,
      photo: photo
    };

    try {
      const res = await axios({
        method: 'put',
        url: `https://warm-ocean-89697.herokuapp.com/api/news/${_id}`,
        data: serviceUpdateData
      });
      console.log('server side response', res)
      swal("Successfully updated", "Your service has been successfully updated!", "success");
      history.push("/manage-news")
    }
    catch (err) {
      swal("Failed!", "You can update only your added Service!", "error", { dangerMode: true });
      console.log(err);
    }
  };

  // photo upload 
  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '85444d10cf609e017623ead34516426d');
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setPhoto(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="modal-form">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-primary text-center">{title}</h2>
        <form className='modal-form' onSubmit={handleSubmit(onSubmit)}>
          <input className="image-input" type='file' onChange={handleImageUpload} />
          <br />
          <input type='text' defaultValue={title} placeholder="News Title" {...register("title")} />
          <br />
          <input type='text' defaultValue={author} placeholder="Author Name" {...register("author")} />
          <br />
          <textarea type='text' defaultValue={description} placeholder="News Description" {...register("description")} />
          <br />
          <select placeholder="Category" defaultValue={category} className="box form-control responsive-input" {...register("category")} required>
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
      </Modal>
    </div>
  );
};

export default ModalForm;