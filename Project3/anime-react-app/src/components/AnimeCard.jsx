function AnimeCard({ title, year, img }) {
  return (
    <>
    <div className="card-container card-layout">
    <div className="anime-card" >
      <img src={img}/>
      <p>{title}</p>
      <p>{year}</p>
    
</div>
</div>
    </>
  );
}

export default AnimeCard;
