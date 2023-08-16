import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './film.module.scss';

const  cx = classnames.bind(styles);



const Film = () => {    
   const [data, setData] = useState({data : []})
   useEffect(() => {
    const getFilm = async () => {
        const res =  axios.get(import.meta.env.VITE_API_URL+ 'movies/')
        const data = await res
         setData(data.data)
     }
     getFilm()
    }, [])

   //  console.log(data)
    return (
       <div className={cx("film-wrap")}>
         <div className={cx("dropdown")}>
            <button className={cx("btn btn-secondary dropdown-toggle","custom-btn")} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               -- Genres --
            </button>
            <ul className={cx("dropdown-menu","custom-dropdown")} aria-labelledby="dropdownMenuButton1">
               {
                  data?.data?.map((item, index) =>{
                  return <li key={index}><a className={cx("dropdown-item")} href="#">{item.title}</a></li>
                  })
               }
            </ul>
            </div>
            <div className={cx("list-film")}>
               <div className={cx("row", "custom-row")}>
                  {
                     data && data?.data[3]?.movies?.map((item, index) =>{
                        if (index == 2 ){
                           return (
                                 <div className={cx("film","col-4 col-sm-4 col-lg-4")} key={index}>
                                    <a href={item.href}>
                                       <div className={cx("film-img")}>
                                          <img src={item.image} alt={item.name} />
                                       </div>
                                       <div className={cx("film-info")}>
                                          <h3>{item.name}</h3>
                                       </div>
                                    </a>
                                 </div>
                           )
                        }else {
                           return (
                              <div className={cx("film","col-2 col-sm-2 col-lg-2")} key={index}>
                                 <a href={item.href}>
                                    <div className={cx("film-img")}>
                                       <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className={cx("film-info")}>
                                       <h3>{item.name}</h3>
                                    </div>
                                 </a>
                              </div>
                           )
                        }
                     })
                  }
               </div>
            </div>
       </div>
    );
}

export default Film;
