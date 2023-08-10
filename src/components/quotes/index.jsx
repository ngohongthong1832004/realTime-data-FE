import classnames from 'classnames/bind';
import styles from './quotes.module.scss';

const  cx = classnames.bind(styles);



const Quotes = () => {    
    return (
       <div className={cx("quotes-wrap")}>
            <p className={cx("quotes")}>“The best preparation for tomorrow is doing your best today. asdashdbsjadbhsajbdj ”</p>
            <p className={cx("author")}>― H. Jackson Brown Jr.</p>
       </div>
    );
}

export default Quotes;
