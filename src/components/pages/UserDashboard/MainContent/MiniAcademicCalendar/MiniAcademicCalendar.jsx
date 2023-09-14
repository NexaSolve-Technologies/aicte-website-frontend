import React,{useState,useEffect} from "react";
import './MiniAcademicCalendar.css'

const MiniCalender = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const updateCurrentDate=()=>{
            setCurrentDate(new Date());
        };
        const interval = setInterval(updateCurrentDate,1000);
        return()=>{
            clearInterval(interval);
        };
    },[]);

    const currentMonth = currentDate.toLocaleString('default', {month:'long'});
    const currentYear = currentDate.getFullYear();
    const lastDayOfMonth=new Date(currentYear,currentDate.getMonth() + 1,0);
    const currentDay = currentDate.getDate();
    const daysInMonth= lastDayOfMonth.getDate();
    const daysArray =Array.from({length: daysInMonth},(_, i)=>i+1);
    return (
        <div className="mini-calendar">
            <div className="header">
                {currentMonth}{currentYear}
            </div>
            <div className="days">
                {daysArray.map((day)=>(
                    <div key={day} className={`day ${day === currentDay ? 'current-day' : ''}`}
                    >
                    {day}
                    </div>
                ))}
            </div>
        </div>
        // <div>
        //     <h1>MiniCalender</h1>
        // </div>
    );
};

export default MiniCalender;