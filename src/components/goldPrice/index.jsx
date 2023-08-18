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


    // console.log(gold)

    return (
       <div className={cx("GoldPrice-wrap")}>
            <p className={cx("GoldPrice")}>GoldPrice</p>
            <table className = {cx("custom-table","table table-dark")}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Yesterday</th>
                        <th></th>
                        <th>Today</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Buy Price</th>
                        <th>Sell Price</th>
                        <th>Buy Price</th>
                        <th>Sell Price</th>
                    </tr>
                </thead>
                <tbody>
                   {
                            gold?.data?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                    </tr>
                                )
                            })
                   }
                </tbody>
            </table>
       </div>
    );
}

export default GoldPrice;
