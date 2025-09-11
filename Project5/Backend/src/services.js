// Loading test json so dont have to k

import { DateTime } from "luxon";
// USE LUXON Instead, chaining like d3 and direct comparison with reduce

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const json = require("./test.json");

export async function fetchStationMeasurements(station) {
  console.log("running fetch");

  const now = DateTime.utc();
  const searchStart = now.minus({ hours: 24 });

  console.log("Current UTC:", now.toISO());
  console.log("Earliest search date:", searchStart.toISO());

  let page = 1;

  const data = [];

  while (true) {
    const BASE_URL = "https://api.luchtmeetnet.nl/open_api";
    const measurements_url = `/stations/${station}/measurements?`;
    const api_url = `${BASE_URL}${measurements_url}page=${page}`;

    console.log(api_url);
    const response = await fetch(api_url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    // Local copy for testing:
    // const json = JSON.parse("./test.json")
    console.log(json);
    data.push(...json.data);
    console.log(json.data);


    console.log("checking search range...");
    const timestamps = json.data.map((item) =>
      DateTime.fromISO(item.timestamp_measured, { zone: "utc" })
    );

    const earliest = timestamps.reduce((a, b) => (a < b ? a : b));
    // const latest = .reduce((a, b) => (a > b ? a : b));

    console.log("Earliest timestamp:", earliest.toISO());
    // console.log("Latest date:", latest.toISO());

    const isBefore = earliest < searchStart; // true if earliest is before 24h ago
    if (isBefore) {
      console.log(`Dates found beyond search window: ${earliest} earlier than ${searchStart}. Ending fetch...`);
      break
    }
    page += 1;
    console.log("Fetching next page...")
  }


  return data;
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

// const filter_o3 = Math.min(
//   ...json.data
//     .filter((item) => {
//       if (item.formula === "O3") {
//         return item;
//       }
//     })
//     .map((item) => new Date(item.timestamp_measured))
// );
