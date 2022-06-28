// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Geocode from 'react-geocode';

// const Geolocation = () => {
//   const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);
//   const [status, setStatus] = useState(null);

//   const getLocation = () => {
//     if (!navigator.geolocation) {
//       setStatus('Geolocation is not supported by your browser');
//     } else {
//       setStatus('Locating...');
//       navigator.geolocation.getCurrentPosition((position) => {
//         setStatus(null);
//         setLat(position.coords.latitude);
//         setLng(position.coords.longitude);
//         Geocode.setApiKey(API_KEY);
//         Geocode.setLanguage("en");
//         Geocode.setLocationType("ROOFTOP");
//         Geocode.enableDebug();
//         Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
//           (response) => {
//             const address = response.results[0].formatted_address;
//             console.log(address);
//           },
//           (error) => {
//             console.error(error);
//           }
//         );
//         Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
//           (response) => {
//             const address = response.results[0].formatted_address;
//             let city, state, country;
//             for (let i = 0; i < response.results[0].address_components.length; i++) {
//               for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
//                 switch (response.results[0].address_components[i].types[j]) {
//                   case "locality":
//                     city = response.results[0].address_components[i].long_name;
//                     break;
//                   case "administrative_area_level_1":
//                     state = response.results[0].address_components[i].long_name;
//                     break;
//                   case "country":
//                     country = response.results[0].address_components[i].long_name;
//                     break;
//                 }
//               }
//             }
//             console.log(city, state, country);
//             console.log(address);
//           },
//           (error) => {
//             console.error(error);
//           }
//         );
//       }, () => {
//         setStatus('Unable to retrieve your location');
//       });
//     }
//   }
  
//   return (
//     <div>
//       <Link to="/geoLoc">
//         <button type="button">
//           <h2>Next</h2>
//         </button>
//       </Link>
//       <button type="button" onClick={getLocation}>Get Location</button>
//       <h1>Coordinates</h1>
//       <p>{status}</p>
//       {lat && <p>Latitude: {lat}</p>}
//       {lng && <p>Longitude: {lng}</p>}
//     </div>
//   );
// }

// export default Geolocation;