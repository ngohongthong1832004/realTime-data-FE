import classNames from "classnames/bind";
import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./food.module.scss";

const cx = classNames.bind(styles);

const Food = () => {
    
    const [food, setFood] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/foods/")
            .then((res) => {
                setFood(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    // console.log(food?.data?.feed[1]?.content?.matches?.feed);


    return (
        <div className={cx("food")}>
            <h3 className={cx("title")}>Food & Yummi</h3>
            <div className={cx("food__list")}>
                <div className={cx("row")}>
                    {food?.data?.feed[1]?.content?.matches?.feed.map((item, index) => (
                        <div key={index} className={cx("food__item", "col-6 col-md-4 col col-lg-2")}>
                            <div className={cx("food__item__image")}>
                                <img src={item.display.images[0]} alt={index} />
                            </div>
                            <div className={cx("food__item__name")}>{item.display.displayName}</div>
                            {/* <div className={cx("food__item__price")}>{item.price}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Food;