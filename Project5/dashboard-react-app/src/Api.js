function makeStationDict(data) {
  const stationDict = Object.fromEntries(
    data.map((station) => [station.location, station.number])
  );
  console.log("created station dictionary: ", stationDict);
  return stationDict;
}

function makeStationOptions(data) {
  const stationOptions = data
    .map((station) => ({
      value: station.number,
      label: station.location,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
  console.log("created station options: ", stationOptions);

  return stationOptions;
}

export async function fetchStations() {
  console.log("Fetching stations...");

  let page = 3;
  let hasNext = true;
  const data = [];

  const BASE_URL = "https://api.luchtmeetnet.nl/open_api"; // const BASE＿URL＝’https：//api.luchtmeetnet.nl/open_api   werkt ook??
  const stations_url = "/stations?";

  while (hasNext) {
    const response = await fetch(`${BASE_URL}${stations_url}page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json(); // console.log(`page:${page} json:`, json.data);
    data.push(...json.data);

    page += 1;
    if (page === json.pagination.last_page) {
      hasNext = false;
    }
  }

  console.log("Fetched data: ", data);
  const dict = makeStationDict(data);
  const options = makeStationOptions(data);

  return { dict, options };
}


export async function getStationMeasurements(stationCode){

  const response = await fetch(`/api/measurements/${stationCode}`, {
      method: "GET"})
      
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)}

  const json = await response.json();
  console.log(json)
      return json
}







// const page_stations = json.data.map(station=> station.location);
// console.log(page_stations)
// stations.push(...page_stations)

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
