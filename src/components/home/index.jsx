import classnames from 'classnames/bind';
import styles from './home.module.scss';

import Weather from '../weather';
import Time from '../time';
import Calendar from '../calendar';
import Quotes from '../quotes';
import Film from '../film';
import Music from '../music';
import Book from '../book';

const  cx = classnames.bind(styles);


const Home = () => {
    const test = import.meta.env.VITE_SOME_KEY;
    return (
        <div className={cx("content", "container-fluid")}>
            <h1 className={cx("title")}>Today is perfect</h1>
            <div className={cx("row px-2")}>
                <div className={cx("col-12 col-sm-6 col-lg-4")}>
                    <div className={cx("item")}>
                        <Weather />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-6 col-lg-4")}>
                    <div className={cx("item")}>
                        <Time />
                        <Quotes />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-4")}>
                    <div className={cx("item")}>
                        <Calendar />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-8")}>
                    <div className={cx("item")}>
                        <Film />
                    </div>
                    <div className={cx("item")}>
                        <Book />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-4")}>
                    <div className={cx("item")}>
                        <Music />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;