// #UI-user-feed exercise
//
// ## Instructions
// * Using any UI framework (or none) create a social media user feed component using the data.json file provided and the requirements below
// * Provide notes on your code, including how to run it in the Candidate Notes section below.
//
//     ## Requirements
// * Component should use data.json to mock initial feed list items. The data is a list of feed objects that describe a user's comment or tweet.
// * Component should display each feed value and the number of likes it has in a list of feed items.
// * Component should provide some way for user to increment the number of likes for that item.
// * Component should provide a way for user to add another item to the feed.
// * Component should display a count above the list that shows the current number of feed items.
//
//     ## Candidate Notes

import React, {useState} from "react";
import Data from '../data/data1';

const ComponentB = (props) => {

    let [feed, setFeed] = useState([{
        ...props.feed
        // user: "",
        // value: "",
        // id: '',
        // timestamp: "",
        // timeZoneOffset: "",
        // likes: ''
    }]);

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
    };

    return (
        <>
            <button onClick={getFeeds}>GET</button>
            <table>
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Value</th>
                    <th>Value ID</th>
                    <th>No of Likes</th>
                    <th>Time zone offset</th>
                    <th>Time Stamp</th>
                </tr>
                </thead>
                <tbody>
                {feed.map(val => (
                    <tr key={val.id}>
                        <td>{val.user}</td>
                        <td>{val.value}</td>
                        <td>{val.id}</td>
                        <td>{val.likes}</td>
                        <td>{val.timeZoneOffset}</td>
                        <td>{val.timestamp}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
};

export default ComponentB;