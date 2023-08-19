import classnames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './music.module.scss';
import Skeleton from '../skeleton';
const  cx = classnames.bind(styles);



const Music = () => {    

    const [music, setMusic] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + 'musics/')
        .then(res => {
            setMusic(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    // console.log(music);

    return (
       <div className={cx("music-wrap")}>
            <h3 className={cx("title")}>Top 10 BillBoard of Week</h3>
            <div className={cx("list-music")}>
                {
                    music?.data ? music?.data?.map((item, index) => {
                        return (
                            <div className={cx("music")} key={index}>
                                <div className={cx("index")}>{index + 1}</div>
                                <div className={cx("music-img")}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={cx("music-info")}>
                                    <h3>{item.name}</h3>
                                    <p>{item.singer}</p>
                                </div>
                            </div>
                        )
                    }) : Array.from({length: 10}).map((item, index) => {
                        return (
                            <div className={cx("music")} key={index}>
                                <Skeleton width="2rem" height="2rem" />
                                <div className={cx("music-img")}>
                                    <Skeleton width="5rem" height="5rem" />
                                </div>
                                <div className={cx("music-info")}>
                                    <Skeleton width="15rem" height="1.3rem" />
                                    <Skeleton width="10rem" height="0.8rem" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
       </div>
    );
}

export default Music;
