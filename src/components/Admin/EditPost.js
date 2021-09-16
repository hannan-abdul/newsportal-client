import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Postwrite.css';

const EditPost = (props) => {
  console.log(props.newsdata.selectedNews._id)
  const { _id } = props.newsdata.selectedNews;

   // Update news 
   const [updatedItem, setUpdatedItem] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    id: "",
})

// const [isPut, setIsPut] = useState(false);
function openUpdate(id) {
    console.log(id)
    // setIsPut(true);
    setUpdatedItem((prevInput) => {
        return {
            ...prevInput,
            id: id,
        };
    });
}

function updateItem(id) {
    axios.put("http://localhost:5055/update/" + id, updatedItem);
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

  return (
    <div className='mt-5'>
      <h2>Edit Post: {_id} </h2>
      <div>
        <input onChange={handleUpdate} value={updatedItem.title} name="title" placeholder="News Title"></input>
        <br />
        <input onChange={handleUpdate} value={updatedItem.author} name="author" placeholder="Author Name"></input>
        <br />
        <textarea onChange={handleUpdate} value={updatedItem.description} name="description" placeholder="News Description"></textarea>
        <br />
        <input onChange={handleUpdate} value={updatedItem.category} name="category" placeholder="News Category"></input>
        <br />
        <button onClick={() => updateItem(updatedItem.id)}>Update</button>
      </div>

      
    </div>
  );
};

export default EditPost;