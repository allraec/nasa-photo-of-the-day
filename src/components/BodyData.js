import React, {useState, useEffect} from "react";
import axios from 'axios';

function BodyData({date}) {
    const [data, setData] = useState("");
    const newDate = date.toISOString().slice(0,10);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vUhLzjh47gSz2vqQOyZryZ6VWh2E6hSCJJosyzmg&date=${newDate}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, [date])
    return(
        <div>
            <img src={data.url}/>
        </div>
    )
}

export default BodyData;