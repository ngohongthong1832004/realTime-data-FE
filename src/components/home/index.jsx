import classnames from 'classnames/bind';
import styles from './home.module.scss';

import Weather from '../weather';
import Time from '../time';
import Calendar from '../calendar';
import Quotes from '../quotes';
import Film from '../film';
import Music from '../music';
import Book from '../book';
import Food from '../food';
// import News from '../news';
import GoldPrice from '../goldPrice';
import DollarPrice from '../dollarPrice';
import LuckNumber from '../luckyNumber';
import LuckNumberRight from '../luckyNumberRight';
import Travel from '../travel';
import Skeleton from '../skeleton';

const  cx = classnames.bind(styles);


const Home = () => {
    const test = import.meta.env.VITE_SOME_KEY;
    // console.log('render la die')
    return (
        <div className={cx("content", "container-fluid")}>
            {/* <h1 className={cx("title")}>Today is perfect</h1> */}
            <div className={cx("row px-2")}>
                <div className={cx("col-12 col-sm-6 col-lg-4")}>
                    <p className={cx("title")}>How's the weather?</p>
                    <div className={cx("item")}>
                        <Weather />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-6 col-lg-4")}>
                    <p className={cx("title")}>What time is it ?</p>
                    <div className={cx("item")}>
                        <Time />
                        <Quotes />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-4")}>
                    <p className={cx("title")}>What is Today?</p>
                    <div className={cx("item")}>
                        <Calendar />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-8")}>
                    <p className={cx("title")}>What is the most popular movie today?</p>
                    <div className={cx("item")}>
                        <Film />
                    </div>
                    <p className={cx("title")}>What is the best book that I should read?</p>
                    <div className={cx("item")}>
                        <Book />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-4")}>
                    <p className={cx("title")}>What are music for you?</p>
                    <div className={cx("item")}>
                        <Music />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-12")}>
                    <p className={cx("title")}>What foods should I be eating?</p>
                    <div className={cx("item")}>
                        <Food />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-12 col-lg-12")}>
                    <p className={cx("title")}>What is the nicest place on earth to visit?</p>
                    <div className={cx("item")}>
                        <Travel />
                    </div>
                </div>



                {/* <h2 className={cx("title")}>More ?</h2>
                <div className={cx("col-12 col-sm-6 col-lg-6")}>
                    <div className={cx("item")}>
                        <GoldPrice />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-6 col-lg-6")}>
                    <div className={cx("item")}>
                        <DollarPrice />
                    </div>
                </div>
                <div className={cx("col-12 col-sm-6 col-lg-6")}>
                    <div className={cx("item")}>
                        <LuckNumber />
                    </div>
                </div> */}


                
                {/* <div className={cx("col-12 col-sm-6 col-lg-6")}>
                    <div className={cx("item")}>
                        <LuckNumberRight />
                    </div>
                </div> */}
                {/* <div className={cx("col-12")}>
                    <div className={cx("item")}>
                        <Skeleton />                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default Home;