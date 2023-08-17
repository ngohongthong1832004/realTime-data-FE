import classnames from 'classnames/bind';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './goldPrice.module.scss';

const  cx = classnames.bind(styles);



const GoldPrice = () => {    

    const [gold, setGold] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/price-gold/")
            .then((res) => {
                setGold(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    console.log(gold)

    return (
       <div className={cx("GoldPrice-wrap")}>
            <p className={cx("GoldPrice")}>GoldPrice”</p>
            {/* <p className={cx("author")}>― H. Jackson Brown Jr.</p> */}
       </div>
    );
}

export default GoldPrice;
