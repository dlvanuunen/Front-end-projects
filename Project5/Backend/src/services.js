export async function fetchStationMeasurements(station){

  let page = 1;
  const BASE_URL = "https://api.luchtmeetnet.nl/open_api";
  const measurements_url = `/stations/${station}/measurements?`;
  const api_url = `${BASE_URL}${measurements_url}page=${page}`;

  console.log(api_url) 
  const response = await fetch(api_url, {
      method: "GET"})
      
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)}

  const json = await response.json();
  console.log(json)
  return json

}



// export async function fetchMeasurement_old(station) {
//   console.log("fetching measurements for station: " + station);
//   // const BASE＿URL＝’https：//api.luchtmeetnet.nl/open_api   werkt ook??

//   let page = 1;
//   let hasNext = true;

//   const data = [];

//   const measurements_url = `/open_api/stations/${station}/measurements?`;
//   const api_url = `${BASE_URL}${measurements_url}page=${page}`;

//   console.log(api_url);

//   while (hasNext) {
//     const response = await fetch(api_url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const json = await response.json();
//     console.log(json);

//     hasNext = false;

//     page += 1;
//     if (page === 3) {
//       hasNext = false;
//     }
//   }
//   console.log("fetching stations finished running");

// }
