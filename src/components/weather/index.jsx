import classnames from 'classnames/bind';
import { useState } from 'react';
import styles from './weather.module.scss';

const  cx = classnames.bind(styles);



const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // useEffect(() => {
    //     const fetchWeather = async () => {
    //     try {
    //         const response = await axios.get(
    //         `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    //         );
    //         setWeather(response.data);
    //         setLoading(false);
    //     } catch (error) {
    //         setError(error);
    //         setLoading(false);
    //     }
    //     };
    
    //     fetchWeather();
    // }, []);
    
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    
    // if (error) {
    //     return <p>{error.message}</p>;
    // }
    
    return (
        <div>
            <h1>Weather</h1>
        </div>
    );
}

export default Weather;
