import { Link } from "react-router-dom";

const Cardmovie = ({film}) => {

  return (
    <>
      <Link to={`/movie/${film.id}`}>
      <div className="card">
        <img src={'https://image.tmdb.org/t/p/w500'+film.poster_path} alt="" className="card__image" />
        <div className="card__overlay">
          <div className="overlay__text">
            <p><h2>{film.original_title}</h2></p>
            <p>Publication date:{film.release_date}</p>
            <p>Votes Counts:{film.vote_count}</p>
            <p>Vote average:{film.vote_average}</p>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};
export default Cardmovie;
