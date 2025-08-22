import "../css/anime-card.css";
import { useEffect, useRef } from "react";

function AnimeCard({ title, year, img }) {
  return (
    <>
      <div className="anime-card">
                      
        <div className="card-poster">
          <img src={img} />
          <div className="gradient-effect"></div>
        </div>


        <div className="card-label">
          <div className="card-header">
            <h3>{title}</h3>

            <p>{year}</p>
          </div>

          <div className="card-footer">
            <div className="card-tags">
              <span>Mystery</span>
              <span>Action</span>
            </div>
            <button>{"♥"} </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default AnimeCard;
