import classnames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Skeleton from '../skeleton';


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
                {
                   weather ? <h3 className={cx("title")}>{weather?.data?.main?.location}</h3> : <Skeleton height={"1rem"} width={"50%"}  />
                }
                <div className={cx("info-top")}>
                    <div className = {cx("info-top-wrapper")}>
                        { weather ? <ul>
                            <li>{weather?.data?.main?.status}</li>
                            <li>Temp: {weather?.data?.main?.temp}</li>
                            <li>{weather?.data?.main?.wind}</li>
                            <li>{weather?.data?.main?.forecast}</li>
                        </ul> : <Skeleton height={"1rem"} width={"11rem"} line={4} />
                        }
                    </div> 
                    { weather ? <img src={weather?.data?.main?.icon} alt="weather-icon"/> : <Skeleton height={"7rem"} width={"7rem"} />}
                </div>
            </div>
            <div className={cx("info-bottom")}>
                { weather ? <h3 className={cx("title")}>{weather?.data?.more?.title}</h3> : <Skeleton height={"1rem"} width={"50%"}/> }
                <table className={"table table-dark"}>
                    <thead>
                        <tr>
                            <th> { weather ?  weather?.data?.more?.data[0]?.[0] : <Skeleton height= {"0.8rem"} width={"3rem"} margin={"0"}/> } </th>
                            <th> { weather ?  weather?.data?.more?.data[0]?.[1] : <Skeleton height= {"0.8rem"} width={"3rem"} margin={"0"}/> } </th>
                            <th> { weather ?  weather?.data?.more?.data[0]?.[2] : <Skeleton height= {"0.8rem"} width={"3rem"} margin={"0"}/> } </th>
                            <th> { weather ?  weather?.data?.more?.data[0]?.[3] : <Skeleton height= {"0.8rem"} width={"3rem"} margin={"0"}/> } </th>
                            <th> { weather ?  weather?.data?.more?.data[0]?.[4] : <Skeleton height= {"0.8rem"} width={"3rem"} margin={"0"}/> } </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                { weather ? <img src={weather?.data?.more?.data?.[1][0]}></img> : <Skeleton height={"2.2rem"} width={"2.2rem"} margin={"0"} /> }
                            </th>
                            <th>
                                { weather ? <img src={weather?.data?.more?.data?.[1][1]}></img> : <Skeleton height={"2.2rem"} width={"2.2rem"} margin={"0"} /> }
                            </th>
                            <th>
                                { weather ? <img src={weather?.data?.more?.data?.[1][2]}></img> : <Skeleton height={"2.2rem"} width={"2.2rem"} margin={"0"} /> }
                            </th>
                            <th>
                                { weather ? <img src={weather?.data?.more?.data?.[1][3]}></img> : <Skeleton height={"2.2rem"} width={"2.2rem"} margin={"0"} /> }
                            </th>
                            <th>
                                { weather ? <img src={weather?.data?.more?.data?.[1][4]}></img> : <Skeleton height={"2.2rem"} width={"2.2rem"} margin={"0"} /> }
                            </th>
                        </tr>
                        <tr>
                            <th>{ weather ?  weather.data.more.data[2][0] : <Skeleton width={"3rem"} height={"0.8rem"} margin={"0"}/> }</th>
                            <th>{ weather ?  weather.data.more.data[2][1] : <Skeleton width={"3rem"} height={"0.8rem"} margin={"0"}/> }</th>
                            <th>{ weather ?  weather.data.more.data[2][2] : <Skeleton width={"3rem"} height={"0.8rem"} margin={"0"}/> }</th>
                            <th>{ weather ?  weather.data.more.data[2][3] : <Skeleton width={"3rem"} height={"0.8rem"} margin={"0"}/> }</th>
                            <th>{ weather ?  weather.data.more.data[2][4] : <Skeleton width={"3rem"} height={"0.8rem"} margin={"0"}/> }</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Weather;
