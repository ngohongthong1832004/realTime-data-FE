import classnames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './weather.module.scss';

const  cx = classnames.bind(styles);



const Weather = () => {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + 'weather/')
        .then(response => response.json())
        .then(data => setWeather(data));
    }, []);
    return (
        <div className={cx("weather")}>
            <div className={cx("weather-icon")}>
                <h3 className={cx("title")}>{weather?.data?.main?.location}</h3>
                <div className={cx("info-top")}>
                    <div className = {cx("info-top-wrapper")}>
                        <ul>
                            <li>{weather?.data?.main?.status}</li>
                            <li>Temp: {weather?.data?.main?.temp}</li>
                            <li>{weather?.data?.main?.wind}</li>
                            <li>{weather?.data?.main?.forecast}</li>
                        </ul>
                    </div>
                    <img src={weather?.data?.main?.icon} alt="weather-icon"/>
                </div>
            </div>
            <div className={cx("info-bottom")}>
                <h3 className={cx("title")}>{weather?.data?.more?.title}</h3>
                <table className={"table table-dark"}>
                    <thead>
                        <tr>
                            <th>{weather?.data?.more?.data[0][0]}</th>
                            <th>{weather?.data?.more?.data[0][1]}</th>
                            <th>{weather?.data?.more?.data[0][2]}</th>
                            <th>{weather?.data?.more?.data[0][3]}</th>
                            <th>{weather?.data?.more?.data[0][4]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <img src={weather?.data?.more?.data[1][0]}></img>
                            </th>
                            <th>
                                <img src={weather?.data?.more?.data[1][1]}></img>
                            </th>
                            <th>
                                <img src={weather?.data?.more?.data[1][2]}></img>
                            </th>
                            <th>
                                <img src={weather?.data?.more?.data[1][3]}></img>
                            </th>
                            <th>
                                <img src={weather?.data?.more?.data[1][4]}></img>
                            </th>
                        </tr>
                        <tr>
                            <th>{weather?.data?.more?.data[2][0]}</th>
                            <th>{weather?.data?.more?.data[2][1]}</th>
                            <th>{weather?.data?.more?.data[2][2]}</th>
                            <th>{weather?.data?.more?.data[2][3]}</th>
                            <th>{weather?.data?.more?.data[2][4]}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Weather;
