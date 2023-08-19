import classnames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './quotes.module.scss';
import Skeleton from '../skeleton';

const  cx = classnames.bind(styles);



const Quotes = () => { 
    const [quotes, setQuotes] = useState(null);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/quotes')
        .then((response) => {
            // console.log(response.data.data)
            setQuotes(response.data.data)
        })
    },[])
    
    return (
       <div className={cx("quotes-wrap")}>
            { quotes ? <p className={cx("quotes")}>“ {quotes.quote} ”</p> : <Skeleton line={2}/>}
            { quotes ? <p className={cx("author")}>― {quotes.author}</p> : <Skeleton line={1} width={'30%'} pos={'end'}/> }
       </div>
    );
}

export default Quotes;
