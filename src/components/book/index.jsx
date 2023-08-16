import classnames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './book.module.scss';

const  cx = classnames.bind(styles);



const Book = () => {    

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + 'books/')
        .then(res => {
            setBook(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    console.log(book);

    return (
       <div className={cx("Book-wrap")}>
            
       </div>
    );
}

export default Book;
