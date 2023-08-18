import classnames from 'classnames/bind';
import axios from 'axios';
import { useState, useEffect } from 'react';

import styles from './luckyNumber.module.scss';

const  cx = classnames.bind(styles);



const LuckNumberRight = () => {    

    const [number, setNumber] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "number-lucky-north/")
            .then((res) => {
                setNumber(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    // console.log(number.data)

    return (
       <div className={cx("DollarPrice-wrap")}>
            <p className={cx("DollarPrice")}>Lucky Number North</p>
            <table className = {cx("custom-table","table table-dark")}>
                <tbody>
                   {
                        number?.data?.map((item, index) => {
                            return (<tr key={index}>
                                <td>{index == 0 ? "Special" :"Top " + index}</td>
                                {item.map((item, index) => {
                                    return (
                                        <td key={index}>{item}</td>
                                    )
                                })}
                            </tr>)
                        })
                   }
                </tbody>
            </table>
       </div>
    );
}

export default LuckNumberRight;
