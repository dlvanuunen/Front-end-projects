import '../css/anime-card2.css'

function AnimeCard({ title, year, img }) {
  return (
    <>
    <div className="anime-card" >
      <div className="card-poster">
     
      <img src={img}/>
      </div>
    
    <div className="card-label">
           <h3>{title}</h3>
      <p>{year}</p>
    <div className="card-tags"></div>
    <button>Favorite</button>
</div>

    </div>

    </>
  );
}

export default AnimeCard;
