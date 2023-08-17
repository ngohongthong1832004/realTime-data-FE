import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './film.module.scss';

const  cx = classnames.bind(styles);



const Film = () => {    
   const [data, setData] = useState({data : []})
   const [genreTitle, setGenreTitle] = useState("New Releases")
   const [genre, setGenre] = useState(0)

   useEffect(() => {
    const getFilm = async () => {
        const res =  axios.get(import.meta.env.VITE_API_URL+ 'movies/')
        const data = await res
         setData(data.data)
     }
     getFilm()
    }, [])

   //  console.log(data?.data)
    return (
       <div className={cx("film-wrap")}>
         <div className={cx("dropdown")}>
            <button className={cx("btn btn-secondary dropdown-toggle","custom-btn")} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Movies : {genreTitle}
            </button>
            <ul className={cx("dropdown-menu","custom-dropdown")} aria-labelledby="dropdownMenuButton1">
               {
                  data?.data?.map((item, index) =>{
                  return <li key={index} onClick={() => {setGenre(index) ; setGenreTitle(item.title) }}><p className={cx("dropdown-item")}>{item.title}</p></li>
                  })
               }
            </ul>
            </div>
            <div className={cx("list-film")}>
               <div className={cx("row", "custom-row")}>
                  {
                     data && data?.data[genre]?.movies?.map((item, index) =>{
                        if (index == 2 ){
                           return (
                                 <div className={cx("film","col-12 col-sm-4 col-lg-4")} key={index}>
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
                              <div className={cx("film","col-12, col-sm-4 col-lg-2")} key={index}>
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
