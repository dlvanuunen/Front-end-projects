





export async function fetchStations(){

console.log('clicked')
// const BASE＿URL＝’https：//api.luchtmeetnet.nl/open_api   werkt ook??

let page =1;
let hasNext = true;
const stations = [];

const BASE_URL= 'https://api.luchtmeetnet.nl/open_api'

const stations_url= '/stations?'

    while (hasNext){

    const response = await fetch(`${BASE_URL}${stations_url}page=${page}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
    const json = await response.json();
    console.log(json)


    const page_stations = json.data.map(station=> station.location);
    console.log(page_stations)

    stations.push(...page_stations)

    page+=1;
    if (page===json.pagination.last_page){ hasNext=false}
}

console.log(stations);
return stations

}

