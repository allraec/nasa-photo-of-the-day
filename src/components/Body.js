import React, {useState, useEffect} from "react";
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


function Body() {
    const initDate = new Date();
    const newDate = initDate.toISOString();
    const [date, setDate] = useState(newDate.slice(0,10));
    const [data, setData] = useState("");
    useEffect(() => {

        const newDate2 = date.toISOString();;
        console.log(newDate2)
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vUhLzjh47gSz2vqQOyZryZ6VWh2E6hSCJJosyzmg&date=${newDate2}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, [date])

    return (
        <div>
            {console.log(data)}
            <img src={`${data.url}`}></img>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={date} onChange={setDate} />
            </MuiPickersUtilsProvider>
        </div>
    );
}
  
export default Body;