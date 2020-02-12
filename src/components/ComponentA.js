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

const ComponentA = () => {
    let [getDataButtonStatus, setGetDataButtonStatus] = useState(true);
    let [user, setUser] = useState([{
        name: '',
        roomName: '',
        startDate: '',
        endDate: '',
        price: '',
        amenities: [{name: '', desc: ''}]
    }]);
    const [priceDetail, setPriceDetail] = useState([{
        roomPrice: '',
        roomTax: '',
        roomFees: ''
    }]);

    const [popUpSeen, setPopUpSeen] = useState(false)

    const togglePop = () => {
        setPopUpSeen(!popUpSeen);
    };

    const fetchPrimaryGuestDetails = () => {
        Data.map((details) => {
            details.amenities.map(amenity => {
                details.guestInfo.map(guestInfoDetails => {
                    if (guestInfoDetails.type == 'Primary') {
                        setUser(prevState => [
                            ...prevState, {
                                name: guestInfoDetails.name,
                                roomName: details.roomDetails.Name,
                                startDate: details.startDate,
                                endDate: details.endDate,
                                price: getTotalPriceByGuestName(guestInfoDetails.name),
                                amenities: {
                                    name: amenity.name
                                }
                            }]);
                    }
                })
            });
        });
        setGetDataButtonStatus(false);
    };

    const getTotalPriceByGuestName = (name) => {
        let price = 0;
        Data.map(data => {
            data.guestInfo.map(guestDetail => {
                if (guestDetail.name == name) {
                    data.price.perDay.map((dayPrice) => {
                        price += dayPrice.RoomPrice + dayPrice.RoomTax + dayPrice.RoomFees;
                    });
                }
            })
        });
        return price;
    };

    return (<div>
            {getDataButtonStatus && <button onClick={fetchPrimaryGuestDetails}>DATA</button>}
            <table>
                <thead>
                <tr>
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
                            <td>{userInfo.price}</td>
                            <td>{userInfo.amenities.name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default ComponentA;
