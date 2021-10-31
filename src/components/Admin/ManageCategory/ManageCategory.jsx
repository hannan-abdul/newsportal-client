import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getCategoriesAction } from '../../../Redux/action/catDataAction';
import DashboardMenu from '../../Dashboard/DashboardMenu/DashboardMenu';
import EvaryCategory from '../EvaryCategory/EvaryCategory';
import './ManageCategory.css';

const ManageCategory = () => {
    const [CategoryName, setName] = useState();
    const location = useLocation();
    const email = useSelector((state) => state.auth.userdetails.email);
    const categories = useSelector((state) => state.categories.item);
    const dispatch = useDispatch();
    const Path = location.pathname.split('/')[1];

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const res = await axios.get('https://warm-ocean-89697.herokuapp.com/api/categories/all');
                dispatch(getCategoriesAction(res.data))
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllNews()
    }, [categories, Path])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCategory = {
            name: CategoryName,
            email: email
        };
        console.log(newCategory);

        try {
            const res = await axios({

                method: 'post',
                url: 'https://warm-ocean-89697.herokuapp.com/api/categories/addcategory',
                data: newCategory
            })
        } catch (err) {
            console.log(err)
        }

    };

    return (
        <section>
            <div>
                <DashboardMenu />
            </div>

            <div className="container text-center mt-5 col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <div className="">
                    <form onSubmit={handleSubmit} class="d-flex justify-content-center mb-2">
                        <div className="me-2">
                            <input type="text" placeholder="Category name" onBlur={e => setName(e.target.value)} required />
                        </div>

                        <button type="submit" className="me-5 button-fix"> Add Category</button>
                    </form>
                </div>
                <h3>Manage News</h3>
                {
                    categories.map(catdata => <EvaryCategory catdata={catdata} />)
                }
            </div>
        </section>
    );
};

export default ManageCategory;