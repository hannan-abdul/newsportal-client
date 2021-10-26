import React, { useEffect, useState } from 'react';
import Allnews from '../../components/Body/AllNews/Allnews';
import { useDispatch, useSelector } from 'react-redux';
import './Body.css'
import { newsAction } from '../../Redux/action/newsDataAction';
import axios from 'axios';

const Body = () => {
    const dispatch = useDispatch();
    const newsDatas = useSelector((state) => state.newsdata.allnewsdetails);
    // const [category, setCategory] = useState([]);
    const [newcategory, setNewCategory] = useState([]);

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const res = await axios.get('https://warm-ocean-89697.herokuapp.com/api/news/allnews');
                dispatch(newsAction(res.data))
                // setCategory(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllNews()
    }, [newsDatas])

    const allFilterNews = (newsCategory) => {
        const updatedItems = newsDatas.filter((news) => news.category === newsCategory)
        setNewCategory(updatedItems)
    }

    return (
        <div className="container text-center mt-5">
            <div>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => allFilterNews('Business')}>Business</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => allFilterNews('Entertainment')}>Entertainment</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => allFilterNews('Politics')}>Politics</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => allFilterNews('Sports')}>Sports</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => allFilterNews('International')}>international</button>
                <button className="btn btn-secondary ms-2 mb-2" onClick={() => allFilterNews('Other')}>Other</button>
            </div>
            <div className='row justify-content-between text-center mt-5 mb-5 pb-3 pt-3 main-body-fix'>
                {
                    newsDatas.length === 0 && <div className="spinner-border m-auto text-primary" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                }
                {
                    newcategory.length ? newcategory.map(newdata =>
                        <div className="col-lg-5 col-md-4 col-sm-12 card-fix">
                            <Allnews
                                newdata={newdata}
                                key={newdata._id} />
                        </div>
                    ) : newsDatas.map(newdata =>
                        <div className="col-lg-5 col-md-4 col-sm-12 card-fix">
                            <Allnews
                                newdata={newdata}
                                key={newdata._id} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Body;

// https://warm-ocean-89697.herokuapp.com
// .then(data => setNewsdata(data.slice(0, 2)))
// <button className="btn btn-secondary ms-2 mb-2" onClick={() => setCategory(category)}>All News</button>

// {
//     newcategory.length ? newcategory.map(newdata =>
//         <div className="col-lg-5 col-md-4 col-sm-12 card-fix">
//             <Allnews
//                 newdata={newdata}
//                 key={newdata._id} />
//         </div>
//     ) : newcategory.length === 0 ? <div>No Item Found</div> :
//         category.map(newdata =>
//             <div className="col-lg-5 col-md-4 col-sm-12 card-fix">
//                 <Allnews
//                     newdata={newdata}
//                     key={newdata._id} />
//             </div>
//         )
// }




