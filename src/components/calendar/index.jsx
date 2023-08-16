import classnames from 'classnames/bind';
import  { useState } from 'react';
import styles from './calendar.module.scss';

const  cx = classnames.bind(styles);



const Calendar = () => {

    const [newMonth, setNewMonth] = useState(0);

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }
    let dateActive = new Date();
    let date = new Date();

    let month = date.getMonth();
    let year = date.getFullYear();
    let active = date.getDate();

    date = new Date(year, month + newMonth, active);

    month = date.getMonth();
    year = date.getFullYear();
    active = date.getDate();
    
    const daysInMonth = getDaysInMonth(month + 1, year);
    const firstDayInMonth = new Date(year, month, 1).getDay();

    function getMonthName(monthNumber) {
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'long' });
    }

    // console.log(month, daysInMonth)

    const calendar = []
   
    for(let i = 1; i < 35; i++){
        if (i < firstDayInMonth || i > daysInMonth + firstDayInMonth - 1){
            calendar.push(null)
        }else{
            calendar.push(i - firstDayInMonth + 1)
        }
    }
   


    return (
        <div>
            <div className={cx("title-wrapper")}>
                <span onClick={() => setNewMonth(newMonth - 1)}>{"<"}</span>
                <h3>{getMonthName(month + 1)}</h3>
                <p>{year}</p>
                <span onClick={() => setNewMonth(newMonth + 1)}>{">"}</span>
            </div>
            <table className={cx("custom-table","table-dark","table")}>
                <thead>
                    <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        calendar.map((item, index) => {
                            if (index % 7 === 0){
                                return (
                                    <tr key={index}>
                                        {
                                            calendar.slice(index, index + 7).map((item, index) => {
                                                return <td 
                                                        key={index} 
                                                        className={cx({"active": (item === active && month === dateActive.getMonth() && year === dateActive.getFullYear())})}
                                                    >{item}
                                                    </td>
                                            })
                                        }
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;


