import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import '../EveryNews/EveryNews.css';
import { useSelector } from 'react-redux';

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
  const email = useSelector((state) => state.auth.userdetails.email);
  const categories = useSelector((state) => state.categories.item);
  const { title, author, description, category, _id } = newdata;
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [photo, setPhoto] = useState(null);

  const onSubmit = async data => {
    const serviceUpdateData = {
      title: data.title,
      email: email,
      author: data.author,
      description: data.description,
      category: data.category,
      photo: photo
    };

    try {
      const res = await axios({
        method: 'put',
        url: `https://newsportal-server-i4kcjaat3-shohas563-gmailcom.vercel.app/${_id}`,
        data: serviceUpdateData
      });
      console.log('server side response', res)
      swal("Successfully updated", "Your News has been successfully updated!", "success");
      history.push("/dashboard/manage-news")
    }
    catch (err) {
      swal("Failed!", "You can update only your added News!", "error", { dangerMode: true });
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
            {
              categories.map(cat=>(<option value={cat.name}>{cat.name}</option>))
            }
          </select>
          <br />
          <input className='custom-btn' type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;
