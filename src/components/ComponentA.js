// #UI-reservation-info exercise
//
// ## Instructions
// * Using any UI framework (or none), create a component that uses the data.json file provided to view a user's hotel reservations
// * Provide notes on your code, including how to run it in the Candidate Notes section below.
//
//     ## Requirements
// * Component should use the data.json file to retrieve data
// * Component should display the following information
// * Primary Guest
// * Room Name
// * Dates
// * Total Price
// * Amenity Names
// * Component should allow user to filter previous or future reservations
// * Clicking the price should allow user to view a breakdown of price into each day and the breakdown of room/tax/fees
//
// ## Candidate Notes
// #UI-reservation-info exercise
//
// ## Instructions
// * Using any UI framework (or none), create a component that uses the data.json file provided to view a user's hotel reservations
// * Provide notes on your code, including how to run it in the Candidate Notes section below.
//
//     ## Requirements
// * Component should use the data.json file to retrieve data
// * Component should display the following information
// * Primary Guest
// * Room Name
// * Dates
// * Total Price
// * Amenity Names
// * Component should allow user to filter previous or future reservations
// * Clicking the price should allow user to view a breakdown of price into each day and the breakdown of room/tax/fees
//
// ## Candidate Notes

import React, {useState} from "react";
import Data from '../../src/data/data';
import _ from 'lodash';
import ToolTip from "./ToolTip";

const ComponentA = () => {
    let [getDataButtonStatus, setGetDataButtonStatus] = useState(true);
    let [user, setUser] = useState([{
        name: '',
        roomName: '',
        startDate: '',
        endDate: '',
        price: '',
        priceBreakdown: '',
        amenities: ''
    }]);

    const fetchPrimaryGuestDetails = () => {
        Data.map((room) => {
            debugger;
            var primaryGuest = _.filter(room.guestInfo, x => x.type == 'Primary');
            setUser(prevState => [
                ...prevState, {
                    name: primaryGuest[0].name,
                    roomName: room.roomDetails.Name,
                    startDate: room.startDate,
                    endDate: room.endDate,
                    price: getTotalPriceByGuestName(room.price.perDay),
                    priceBreakdown: getPriceBreakdown(room.price.perDay),
                    amenities: room.amenities.map(am => am.name).join(',')
                }]);
        });
        setGetDataButtonStatus(false);
    };

    const getTotalPriceByGuestName = (perDay) => {
        let price = 0;
        perDay.map((dayPrice) => {
            price += dayPrice.RoomPrice + dayPrice.RoomTax + dayPrice.RoomFees;
        });
        return price;
    };

    const getPriceBreakdown = (perDay) => {
        let price = '';
        perDay.map((dayPrice) => {
            price += '\nRoomPrice : ' + dayPrice.RoomPrice + ' RoomTax : ' + dayPrice.RoomTax + ' RoomFees : ' + dayPrice.RoomFees + '\n';
        });
        return price;
    };

    const style = {
        cursor: "pointer",
        fontSize: 25,
        padding: "0",
        textAlign: "center",
        userSelect: "none",
        color: "Black",
        border: "1px solid black"
    };

    return (<div>
            {getDataButtonStatus
                ?
                <div>Welcome to Sabre Hotel Reservations<br/>
                    <button onClick={fetchPrimaryGuestDetails}>Get GuestList Details</button>
                </div>
                :
                <table style={style}>
                    <thead>
                    <tr style={style}>
                        <th>Primary Guest Name</th>
                        <th>Room Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Total Price</th>
                        <th>Amenities</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map(userInfo => {
                        return (
                            <tr key={userInfo.name}>
                                <td>{userInfo.name}</td>
                                <td>{userInfo.roomName}</td>
                                <td>{userInfo.startDate}</td>
                                <td>{userInfo.endDate}</td>
                                <ToolTip breakDownPrice={userInfo.priceBreakdown} totalPrice={userInfo.price}>
                                    <td>{userInfo.price}</td>
                                </ToolTip>
                                <td>{userInfo.amenities}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default ComponentA;
