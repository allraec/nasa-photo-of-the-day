import React, {useState, useEffect} from "react";
import axios from "axios";

let date = 25;
const NasaData = () => {
    let [title, setTitle] = useState("");
    let [date, setDate] = useState("");
    let [newDate, setNewDate] = ("2020-08-27");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=vUhLzjh47gSz2vqQOyZryZ6VWh2E6hSCJJosyzmg`)
            .then(res => {
                setTitle(res.data.title);
                setDate(res.data.date);
                setDescription(res.data.explanation);
                setImage(res.data.url);
            })
            .catch(error =>{
                console.log(error, "error");
            })
    });

    return <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt='pic'/>
        <br></br>
        <iframe width="420" height="315" src={image}></iframe>
        <br></br>
        <button onClick={e => setDate(`2020-08-26`)}>8-26</button>
        <button onClick={e => setDate(`2020-08-25`)}>8-25</button>
        <button onClick={e => setDate(`2020-08-24`)}>8-24</button>
        <button onClick={e => setDate(`2020-08-23`)}>8-23</button>
        <button onClick={e => setDate(`2020-08-22`)}>8-22</button>
        <button onClick={e => setDate(`2020-08-21`)}>8-21</button>
    </div>
}

export default NasaData;