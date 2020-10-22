import React, {useState, useEffect} from "react";
import axios from 'axios';

function BodyData({date}) {
    const [data, setData] = useState("");
    const newDate = date.toISOString().slice(0,10);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vUhLzjh47gSz2vqQOyZryZ6VWh2E6hSCJJosyzmg&date=${newDate}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, [newDate])
    console.log(data);
    return(
        <div>
            Title: {data.title}
            <br></br>
            {data.media_type === 'image' 
            ? <img src={data.url} alt="NASA APOD"/> 
            : <iframe width="825" height="640" src={`${data.url}`}></iframe>}
            <div>
                {data.explanation}
            </div>
        </div>
    )
}

export default BodyData;