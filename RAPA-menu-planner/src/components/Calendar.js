import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendars() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar 
      className="calendar" 
      onChange={onChange} 
      value={value}
      formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}/>
    </div>
  );
}