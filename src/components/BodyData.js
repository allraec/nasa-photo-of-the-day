import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components'

const DataContainer = styled.div`
    display: flex;
    margin: 2% 10% 0 10%;
    align-items: center;
`;

const MediaContainer = styled.img`
    border-radius: 5%;
    height: 500px;
    width: 550px;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    width: 50%;
`;

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
        <DataContainer>
            <FlexContainer>
                {data.media_type === 'image' 
                ? <MediaContainer src={data.url} alt="NASA APOD"/> 
                : <iframe width="550" height="500" src={`${data.url}`}></iframe>}
            </FlexContainer>
            <FlexContainer>
                <h2>{data.title}</h2>
                <p>{data.explanation}</p>
            </FlexContainer>
        </DataContainer>
    )
}

export default BodyData;