import React from "react";

const PopUp = (props) => {
    const handleClick = () => {
        props.toggle();
    };

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClick}>&times;</span>
                <p>I'm A Pop Up!!!</p>
            </div>
        </div>
    );


    {/*    <td onClick={togglePop}>*/}
    {/*        {userInfo.price}*/}
    {/*    </td>*/}
    {/*    {popUpSeen && <PopUp toggle={togglePop}/>}*/}
};

export default PopUp;