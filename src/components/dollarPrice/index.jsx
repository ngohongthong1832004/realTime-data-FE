import classnames from 'classnames/bind';
import styles from './dollarPrice.module.scss';

const  cx = classnames.bind(styles);



const DollarPrice = () => {    
    return (
       <div className={cx("DollarPrice-wrap")}>
            <p className={cx("DollarPrice")}>DollarPrice”</p>
            {/* <p className={cx("author")}>― H. Jackson Brown Jr.</p> */}
       </div>
    );
}

export default DollarPrice;
