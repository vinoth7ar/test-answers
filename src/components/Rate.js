// import React, {useState} from "react";
// import Data from '../../src/data/data';
//
// const Rate = () => {
//
//     const [priceDetail, setPriceDetail] = useState([{
//         roomPrice: '',
//         roomTax: '',
//         roomFees: ''
//     }]);
//
//     const getTotalPriceByGuestName = (name) => {
//         Data.map(data => {
//             data.guestInfo.map(guestDetail => {
//                 if (guestDetail.name == name) {
//                     data.price.perDay.map((dayPrice) => {
//                         setPriceDetail([{
//                             roomPrice: dayPrice.RoomPrice,
//                             roomTax: dayPrice.RoomTax,
//                             roomFees: dayPrice.RoomFees
//                         }]);
//                     });
//                 }
//             })
//         });
//         console.log(priceDetail.roomPrice, priceDetail.roomTax, priceDetail.roomFees);
//     };
//
//     return <div> {} </div>
// }
//
// export default Rate;