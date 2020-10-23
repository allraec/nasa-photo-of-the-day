import React, {useState} from "react";
import BodyData from './BodyData.js';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import styled from 'styled-components'

const DatePickContainer = styled.div`
    background: white;
    border-radius: 2%;
    margin: 0 46% 0 45%;
    border: 5px solid black;
`;

function Body() {
    const currentDate = new Date();
    const [date, setDate] = useState(new Date("2020-10-21 00:00"));
    console.log(date);
    return (
        <div>
            <DatePickContainer>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker  variant="inline" value={date} onChange={setDate} maxDate={currentDate} label="Pick a Date"/>
                </MuiPickersUtilsProvider>
            </DatePickContainer>
            <BodyData date={date}/>
        </div>
    );
}
  
export default Body;