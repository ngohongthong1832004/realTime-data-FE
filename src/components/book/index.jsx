import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './book.module.scss';
import Skeleton from '../skeleton';

const  cx = classnames.bind(styles);



const Book = () => {    
   const [data, setData] = useState({data : []})
   const [genreTitle, setGenreTitle] = useState("Science Fiction")
   const [genre, setGenre] = useState(0)
   useEffect(() => {
    const getBook = async () => {
        const res =  axios.get(import.meta.env.VITE_API_URL+ 'books/')
        const data = await res
         setData(data.data)
     }
     getBook()
    }, [])

   //  console.log(data)
    return (
       <div className={cx("book-wrap")}>
         <div className={cx("dropdown")}>
            <button className={cx("btn btn-secondary dropdown-toggle","custom-btn")} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Book : {genreTitle}
            </button>
            <ul className={cx("dropdown-menu","custom-dropdown")} aria-labelledby="dropdownMenuButton1">
               {
                  data?.data?.map((item, index) =>{
                  return <li key={index}  onClick={() => {setGenre(index) ; setGenreTitle(item.name) }}><p className={cx("dropdown-item")}>{item.name}</p></li>
                  })
               }
            </ul>
            </div>
            <div className={cx("list-book")}>
               <div className={cx("row", "custom-row")}>
                  {
                     data?.data[genre] ? data?.data[genre]?.data?.map((item, index) =>{
                        return (
                           <div className={cx("book","col-6 col-sm-4 col-lg-2")} key={index}>
                                 <div className={cx("book-img")}>
                                    <img src={item.image} alt={item.name} />
                                 </div>
                                 <div className={cx("book-info")}>
                                    <h3>{item.name}</h3>
                                 </div>
                                 <div className={cx("book-info")}>
                                       <h4>{item.author}</h4>
                                 </div>
                           </div>
                        )
                     }) : Array.from(Array(6).keys()).map((item, index) =>{
                        return (
                           <div className={cx("book","col-6 col-sm-4 col-lg-2")} key={index}>
                                 <div className={cx("book-img")}>
                                    <Skeleton height='12rem'/>
                                 </div>
                                 <div className={cx("book-info")}>
                                    <Skeleton margin='0.5rem 0 0 0 '/>
                                 </div>
                                 <div className={cx("book-info")}>
                                    <Skeleton margin='5px' height='0.6rem'/>
                                 </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
       </div>
    );
}

export default Book;
