import React, {useState} from "react";
import BodyData from './BodyData.js';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


function Body() {
    const currentDate = new Date();
    const [date, setDate] = useState(new Date("2020-10-21 00:00"));
    console.log(date);
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker  value={date} onChange={setDate} maxDate={currentDate} label="Pick a Date"/>
            </MuiPickersUtilsProvider>
            <BodyData date={date}/>
        </div>
    );
}
  
export default Body;