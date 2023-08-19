import classNames from "classnames/bind";
import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./food.module.scss";
import Skeleton from "../skeleton";

const cx = classNames.bind(styles);

const Food = () => {
    
    const [food, setFood] = useState([]);
    let hour = new Date().getHours();

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/foods/")
            .then((res) => {
                setFood(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);




    return (
        <div className={cx("food")}>
            <h3 className={cx("title")}>Food & Yummi</h3>
            <div className={cx("food__list")}>
                <div className={cx("row")}>
                    {food?.data ? ( hour > 9 ? food?.data?.data?.feed?.[1]?.content?.matches?.feed.map((item, index) => (
                        <div key={index} className={cx("food__item", "col-6 col-md-4 col col-lg-2")}>
                            <div className={cx("food__item__image")}>
                                <img src={item.display.images[0]} alt={index} />
                            </div>
                            <div className={cx("food__item__name")}>{item.display.displayName}</div>
                        </div>
                    )) : food?.data?.breakfast?.breakfast?.map((item, index) => (
                        <div key={index} className={cx("food__item", "col-6 col-md-4 col col-lg-2")}>
                            <div className={cx("food__item__image")}>
                                <img src={item.image} alt={index} />
                            </div>
                            <div className={cx("food__item__name")}>{item.name}</div>
                        </div>
                    ))) : Array.from({length : 6}).map((item, index) => (
                        <div key={index} className={cx("food__item", "col-6 col-md-4 col col-lg-2")}>
                            <div className={cx("food__item__image")}>
                                <Skeleton  height="15rem" /> 
                            </div>
                                <Skeleton />
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Food;