import AnimeCard from "./AnimeCard";

function Results({ animeList }) {
  return animeList?.data?.length > 0 ? (
    animeList.data.map((item, index) => {
      return (
        <AnimeCard
          key={index}
          title={item.title}
          year={item.year}
          img={item.images.jpg.large_image_url}
        />
      );
    })
  ) : (
    <p>No anime found to display</p>
  );
}

export default Results;

// Depricated
/* <p>{animeList.data[0].title}</p> */

// const renderMultiAnime =()=>{

//     return(animeList.data.map((item, index)=>{
//         return <p>{item.title}</p>
//     })

// )
// }

// const renderObject = () => {
//     if (animeList.data?.length > 0){

//         return(<>
// <p>{animeList.data[0].title}</p>
// <p>{animeList.data[0].year}</p>
// <img src={animeList.data[0].images.jpg.image_url} aria-placeholder={`Image belonging to the anime ${animeList.data[0].images.jpg.title}`}/>
// </>
// )

//     }
//     else{return <p>No anime found to display</p>}
// }

//     return(
//         <>

//         {renderObject()}
//         {renderMultiAnime()}

//         </>
//     //     animeList.data?.length > 0 ?   <p>{animeList.data[0].title}</p> : <p>{test}</p>
//     //
//     )

// }
