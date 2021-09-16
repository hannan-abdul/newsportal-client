import axios from 'axios';
import React, { useState } from 'react';

const EveryNews = (props) => {
    const { title, author, _id } = props.newsdata;

    // delete news 
    const deleteEvent = id => {
        console.log(id)
        fetch(`http://localhost:5055/delete/${id}`, {
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

    // Update news 
    const [updatedItem, setUpdatedItem] = useState({
        title: "",
        author: "",
        description: "",
        category: "",
        id: "",
    })

    // const [isPut, setIsPut] = useState(false);
    const openUpdate = (id)=>{
        console.log(id)
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
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h6>{title}</h6>
                </div>
                <div className="col-md-3">
                    <h5>{author}</h5>
                </div>
                <div className="col-md-3">
                    <button onClick={() => deleteEvent(_id)}>Delete</button>
                </div>
                <div className="col-md-3">
                    {/* <button onClick={props.newsSelect}>Update</button> */}
                    <button onClick={() => openUpdate(_id)}>Update</button>
                </div>
            </div>
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

export default EveryNews;