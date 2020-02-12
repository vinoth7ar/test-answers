import React, {useState} from 'react';
import './App.css';
import ComponentB from "./components/ComponentB";
import AddFeed from "./components/AddFeed";

export const ToggleContext = React.createContext();


function App() {

    let [feed, setFeed] = useState([{
        user: "",
        value: "",
        id: '',
        timestamp: "",
        timeZoneOffset: "",
        likes: ''
    }]);


    const addFeedHandler = () => {
        setToggleComp(!toggleComp);
    };

    const [toggleComp, setToggleComp] = useState(true);
    const [buttonName, setButtonName] = useState("Add Feed");

    return (
        <div>
            {toggleComp ?
                <ComponentB feed={[...feed]} setFeed={[...setFeed]}/> : <AddFeed/>}
            <button onClick={addFeedHandler}>{buttonName}</button>

        </div>
    );
}

export default App;
