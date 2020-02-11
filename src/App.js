import React from 'react';
import './App.css';
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import AddFeed from "./components/AddFeed";

function App() {
    return (
        <div>
            <ComponentB/>
            <AddFeed/>
        </div>
    );
}

export default App;
