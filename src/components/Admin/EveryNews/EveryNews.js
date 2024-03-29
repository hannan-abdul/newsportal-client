import React, { useState } from 'react';
import axios from 'axios';
import './EveryNews.css';
import swal from 'sweetalert';
import EditPost from '../EditPost/EditPost';
import { useSelector } from 'react-redux';

const EveryNews = ({ newdata }) => {
    const { title, author, category, _id } = newdata;
    const [modalIsOpen, setIsOpen] = useState(false);
    const email = useSelector((state) => state.auth.userdetails.email);
    // modal function 
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const deleteNews = async () => {
        try {
            await axios.delete(`https://newsportal-server-i4kcjaat3-shohas563-gmailcom.vercel.app/api/news/${_id}`,{
                data: {email: email}
            });
            swal("Successfully Deleted", "Your News has been successfully Deleted!", "success");
            // window.location.replace("/dashboard/manage-news");
        }
        catch (err) {
            swal("Failed!", "You can delete only your added News!", "error", { dangerMode: true });
            console.log(err);
        }
    }
    return (
        <div>
            <div className="row row-fix justify-content-center align-items-center">
                <div className="col-md-2 text-start">
                    <p>{title}</p>
                </div>
                <div className="col-md-3">
                    <h6>{author}</h6>
                </div>
                <div className="col-md-3">
                    <h6>{category}</h6>
                </div>
                <div className="col-md-4">
                    <button className="button-fix" onClick={() => deleteNews(_id)}>Delete</button>
                    <button className="button-fix" onClick={openModal} className="button-fix">Edit</button>
                </div>
                <EditPost
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    newdata={newdata}
                />
            </div>
        </div>
    );
};

export default EveryNews;
