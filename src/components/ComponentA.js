import React, {useState} from "react";
import Data from '../../src/data/data';

const ComponentA = () => {
    let [totalPrice, setTotalPrice] = useState(0);

    let [user, setUser] = useState([{
        name: '',
        roomName: '',
        startDate: '',
        endDate: ''
    }]);

    const fetchRoomDetails = () => {
        Data.map((details) => {
            details.guestInfo.map(guestInfoDetails => {
                if (guestInfoDetails.type == 'Primary') {
                    console.log("inside primary loop");
                    setUser(prevState => [
                        ...prevState, {
                            name: guestInfoDetails.name,
                            roomName: details.roomDetails.Name,
                            startDate: details.startDate,
                            endDate: details.endDate
                        }]);
                }
            })
        });
    };

    const getTotalPriceByGuestName = (name) => {
        Data.map(data => {
            data.guestInfo.map(guestDetail => {
                if (guestDetail.name == "Brad Pitt") {
                    data.price.perDay.map((dayPrice) => {
                        setTotalPrice(prevState => prevState + dayPrice.RoomPrice + dayPrice.RoomTax + dayPrice.RoomFees
                        );
                    });
                }
            })
        })
    };

    return (<div>

        <button onClick={fetchRoomDetails}>DATA</button>
        <table>
            <tr>
                <th>Primary Guest Name</th>
                <th>Room Name</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
        </table>
        {user.map(userInfo => (
                <table>
                    <tr>
                        <td>{userInfo.name}</td>
                        <td>{userInfo.roomName}</td>
                        <td>{userInfo.startDate}</td>
                        <td>{userInfo.endDate}</td>
                    </tr>
                </table>
            )
        )}
        <button onClick={getTotalPriceByGuestName}>Get Price</button>
        Total Price: <br/>{totalPrice}
    </div>);

};

export default ComponentA;
