import React, {useState, useEffect} from "react";
import BodyData from './BodyData.js';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,

  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


function Body() {
    var newDate = moment().utcOffset('').format('YYYY-MM-DD');
    const [date, setDate] = useState(new Date("2020-10-20 00:00"));
    console.log(newDate);
    return (
        <div>
            <BodyData date={date}/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={date} onChange={setDate} />
            </MuiPickersUtilsProvider>
        </div>
    );
}
  
export default Body;