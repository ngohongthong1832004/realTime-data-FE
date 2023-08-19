import classnames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './quotes.module.scss';

const  cx = classnames.bind(styles);



const Quotes = () => { 
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/quotes')
        .then((response) => {
            console.log(response.data.data)
            setQuotes(response.data.data)
        })
    },[])
    
    return (
       <div className={cx("quotes-wrap")}>
            <p className={cx("quotes")}>“ {quotes.quote} ”</p>
            <p className={cx("author")}>― {quotes.author}</p>
       </div>
    );
}

export default Quotes;
