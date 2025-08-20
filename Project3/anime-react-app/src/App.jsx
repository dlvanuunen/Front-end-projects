import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import SearchBar from './components/SearchBar'
import { getAnime } from './API'
import Results from './components/Results'



function App() {
 
const [animeList, setAnimeList] = useState({})

const searchForAnime = async (searchInput) => {
      const response = await getAnime(searchInput)
      setAnimeList(response)};

      // console.log("animeList state:" + response.data[0].title)


const fakeData={data: [{title:"title1"}, {title:"title2"}]}

  return (
    <>
    <div className="search-container">
      <h1>Anime Search</h1>
      <SearchBar onSearch={searchForAnime} />
      </div>
         
      <div className="card-container card-layout">
      <Results animeList={animeList}/>
      </div>

         {/* {animeList.data?.length > 0 &&   <p>{animeList.data[0].title}</p>} */}
         
          </>
  )
}

export default App
