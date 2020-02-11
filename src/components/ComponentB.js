import React, {useState} from "react";
import Data from '../data/data1';

const ComponentB = () => {

    let [feed, setFeed] = useState([{
        user: "",
        value: "",
        id: '',
        timestamp: "",
        timeZoneOffset: "",
        likes: ''
    }])

    const getFeeds = () => {
        Data.feed.map(data => {
            setFeed(prevState => [
                ...prevState, {
                    user: data.user,
                    value: data.value,
                    id: data.id,
                    timestamp: data.timestamp,
                    timeZoneOffset: data.timeZoneOffset,
                    likes: data.likes
                }]);
        });
    }

    return (
        <>
            <button onClick={getFeeds}>GET</button>
            {feed.map(val=>(
                    <table>
                        <tr key={val.id}>
                            <td>{val.user}</td>
                            <td>{val.value}</td>
                            <td>{val.id}</td>
                            <td>{val.timestamp}</td>
                            <td>{val.timeZoneOffset}</td>
                            <td>{val.likes}</td>
                        </tr>
                    </table>
            ))}
        </>
    )
};

export default ComponentB;