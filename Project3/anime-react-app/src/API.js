
const API_KEY= ""

const BASE_URL="https://api.jikan.moe/v4"



export async function getAnime(query) {
  try {
    console.log("fetching data for:"+query);
    const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}`);
   
    console.log("Status:", response.status);
    if (!response.ok) throw new Error("Network response was not ok");
    const results = await response.json();
    console.log("data fetched:" , results)
    return results.data;
  } catch (error) {
    console.error("Error fetching data:", error); 
  }
}

