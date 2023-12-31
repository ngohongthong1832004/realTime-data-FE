import classnames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './travel.module.scss';
import Skeleton from '../skeleton';

const  cx = classnames.bind(styles);



const Travel = () => {    

    const [travel, setTravel] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/travels')
        .then((response) => {
            setTravel(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    // console.log(travel)

    return (
       <div className={cx("travel-wrap")}>
            <p className={cx("title")}>Beautiful places</p>
            <div className={cx("row")}>
                {
                travel?.data ? travel?.data?.map((item, index) => {
                        return (
                            <div className={cx("col-12 col-md-6 col-lg-3")} key={index}>
                                <div className={cx("card my-2")}>
                                    <img src={item.image} className={cx("card-img-top", "custom-img")} alt="..." />
                                    <div className={cx("card-body")}>
                                        <h5 className={cx("card-title")}>{item.title}</h5>
                                        <p className={cx("card-text")}>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                Array.from(Array(4).keys()).map((item, index) => {
                    return (
                        <div className={cx("col-12 col-md-6 col-lg-3")} key={index}>
                            <Skeleton height='30rem'/>
                            <Skeleton height='2rem'/>
                            <Skeleton height='0.8rem' line={4}/>
                        </div>
                    )
                })
                }
            </div>
       </div>
    );
}

export default Travel;
