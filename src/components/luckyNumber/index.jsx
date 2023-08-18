import classnames from 'classnames/bind';
import axios from 'axios';
import { useState, useEffect } from 'react';

import styles from './luckyNumber.module.scss';

const  cx = classnames.bind(styles);



const LuckNumber = () => {    

    const [number, setNumber] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "number-lucky-south/")
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
            <p className={cx("DollarPrice")}>Lucky Number South</p>
            <table className = {cx("custom-table","table table-dark")}>
                <thead>
                    <tr>
                        <th></th>
                        <th>{number && number?.data?.[0][0]}</th>
                        <th>{number && number?.data?.[0][1]}</th>
                        <th>{number && number?.data?.[0][2]}</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        number?.data?.map((item, index) => {
                            if (index > 0) {
                                const arr = []

                                let step = Math.floor(item.length / 3)

                                for (let i = 0; i < item.length; i+=step) {
                                    arr.push(item.slice(i, i+step))
                                }
                
                    
                                return (
                                    <tr key={index}>
                                        <td>{(9 - index == 0 ) ? "Special" : "Top " + (9 - index)}</td>
                                        {arr.map((item, index) => {
                                            return (
                                                <td key={index}>
                                                    {item.map((item, index) => {
                                                        return (
                                                            <div key={index}>{item}</div>
                                                        )
                                                    })}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                );
                            }
                        })
                   }
                </tbody>
            </table>
       </div>
    );
}

export default LuckNumber;
