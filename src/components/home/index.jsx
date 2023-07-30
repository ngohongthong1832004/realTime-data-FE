import classnames from 'classnames/bind';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';

const  cx = classnames.bind(styles);


const Home = () => {
    return (
        <div>
            <h1 className={cx("main")}>My Home</h1>

            <Link to="about">About Us</Link>
        </div>
    )
}


export default Home;