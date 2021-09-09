import React from 'react';

const ManageNews = (props) => {
    const { title, author, _id } = props.newsdata;

    const deleteEvent = id => {
        console.log(id)
        fetch(`https://warm-ocean-89697.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('news deleted')
            })
            .catch(error => {
                console.error(error)
            })
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
            </div>
        </div>
    );
};

export default ManageNews;