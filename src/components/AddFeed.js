import React, {useState} from "react";

const AddFeed = ({addFeed}) => {
    const [userName, setUserName] = useState("");
    const [desc, setDesc] = useState("");
    const [valueID, setValueID] = useState("");
    const [likesCount, setLikesCount] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addFeed(userName, desc, valueID, likesCount);
        resetAllStateValues();
    };

    const resetAllStateValues = () => {
        setUserName('');
        setDesc('');
        setValueID('');
        setLikesCount('');
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <input type='string' onChange={event => {
                setUserName(event.target.value)
            }} value={userName} placeholder="Enter username"/>

            <input type='string' onChange={event => {
                setDesc(event.target.value)
            }} value={desc} placeholder="Enter Value"/>

            <input type='number' onChange={event => {
                setValueID(event.target.value)
            }} value={valueID} placeholder="Enter Value ID"/>

            <input type='number' onChange={event => {
                setLikesCount(event.target.value)
            }} value={likesCount} placeholder="Current No of Likes"/>

            <input type='submit' value="Add"/>
        </form>
    </div>
};

export default AddFeed;