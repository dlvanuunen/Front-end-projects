


function Results({animeList}){

  
const renderObject = () => {
    if (animeList.data?.length > 0){
        
        return(<>
<p>{animeList.data[0].title}</p>
<p>{animeList.data[0].year}</p>
<p>{animeList.data[0].images.jpg.image_url}</p>
<img src={animeList.data[0].images.jpg.image_url} aria-placeholder={`Image belonging to the anime ${animeList.data[0].images.jpg.title}`}/>
</>

        )

    }
    else{return <p>No anime found to display</p>}
}



    return(
        <>

        {renderObject()}
        {animeList.data?.length > 0 &&   <p>{animeList.data[0].title}</p> }
        </>
    //     animeList.data?.length > 0 ?   <p>{animeList.data[0].title}</p> : <p>{test}</p>
    // 
    )

}


export default Results       

/* <p>{animeList.data[0].title}</p> */