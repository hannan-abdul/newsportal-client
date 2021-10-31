import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

const EvaryCategory = ({ catdata }) => {
    const { name, createdAt, _id } = catdata;
    const email = useSelector((state) => state.auth.userdetails.email);

    const deleteNews = async () => {
        try {
            await axios.delete(`https://warm-ocean-89697.herokuapp.com/api/categories/${_id}`, {
                data: {email: email}
            });
            // window.location.replace("/dashboard/manage-category");
        }
        catch (err) {
            console.log(err);
            swal("Failed!", "You can delete only your added Category!", "error", { dangerMode: true });
        }
    }
    return (
        <div>
            <div className="row row-fix justify-content-center align-items-center">
                <div className="col-md-2">
                    <p className="text-start">{name}</p>
                </div>
                <div className="col-md-3">
                    <h6>{new Date(createdAt).toDateString()}</h6>
                </div>
                <div className="col-md-3">
                    {/* <h6>{category}</h6> */}
                </div>
                <div className="col-md-4">
                    <button className="button-fix" onClick={() => deleteNews(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default EvaryCategory;