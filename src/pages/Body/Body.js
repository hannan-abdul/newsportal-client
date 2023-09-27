import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Body.css'
import { newsAction } from '../../Redux/action/newsDataAction';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Body = () => {
    const dispatch = useDispatch();
    const path = useLocation()
    const newsDatas = useSelector((state) => state.newsdata.allnewsdetails);
    const filterPath = (path.pathname.slice(10)).replace("&", "");

    // console.log("filterpath",filterPath)
    useEffect(() => {
        const getAllNews = async () => {
            try {
                const res = await axios.get('https://newsportal-server-i4kcjaat3-shohas563-gmailcom.vercel.app/api/news/allnews');
                // setNewsdata(res.data)
                dispatch(newsAction(res.data))
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllNews()
    }, [filterPath])

    const filterNews = newsDatas.filter(name => name.category.includes(filterPath))

    // pagination 
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 4;
    const pageVigited = pageNumber * userPerPage;

    const pageCount = Math.ceil(filterNews.length / userPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="container text-center mt-3">
            <div className='row justify-content-between text-center mt-5 mb-5 pb-3 pt-3 main-body-fix'>
                {
                    filterNews.length === 0 && <div className="spinner-border m-auto text-primary" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                }
                {
                    filterNews.slice(pageVigited, pageVigited + userPerPage)
                        .map(newdata =>
                            <div className="col-lg-5 col-md-4 col-sm-12 card-fix">
                                <div className='text-start'>
                                    <img className="all-img-fix" src={newdata.photo} alt="new image" />
                                    <h4><Link className="text-decoration-none text-black all-img-title" to={`/newsdetail/${newdata._id}`} key={newdata._id}>{newdata.title}</Link></h4>

                                    <div className='d-flex justify-content-between'>
                                        <div><p>By: {newdata.author}</p></div>
                                        <div><p>{new Date(newdata.createdAt).toDateString()}</p></div>
                                    </div>
                                    <h5>{newdata.category}</h5>
                                </div>
                            </div>
                        )
                }
            </div>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
};

export default Body;
