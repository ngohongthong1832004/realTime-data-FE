import classnames from 'classnames/bind';
import styles from './news.module.scss';

const  cx = classnames.bind(styles);



const News = () => {    
    return (
       <div className={cx("News-wrap")}>
            <p className={cx("News")}>news”</p>
            {/* <p className={cx("author")}>― H. Jackson Brown Jr.</p> */}
       </div>
    );
}

export default News;
