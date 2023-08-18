import classnames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './news.module.scss';

const  cx = classnames.bind(styles);



const News = () => {    

    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/news')
        .then((response) => {
            setNews(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    console.log(news)

    return (
       <div className={cx("News-wrap")}>
            <p className={cx("News")}>news”</p>
            {/* <p className={cx("author")}>― H. Jackson Brown Jr.</p> */}
       </div>
    );
}

export default News;
