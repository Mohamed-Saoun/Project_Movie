import React from 'react'
import {useState ,useEffect} from 'react'
import { Link ,useParams } from 'react-router-dom'

const MovieDetails = () => {
    const id = useParams();
    const [movie ,setMovie] = useState(null)
    

    function getMovieDetails() {
        var xhr = new XMLHttpRequest();

        xhr.open("GET" ,`https://api.themoviedb.org/3/movie/${id.id}?api_key=5b94a958ce1b8838ad9aa7418992d9e7&language=en-US`, true);
    
    
        xhr.onload = function () {
          if (xhr.status === 200) {
            let dataFetched = JSON.parse(xhr.responseText);
            // console.log(dataFetched)
            setMovie(dataFetched)
            console.log(dataFetched)
    
          } else {
            console.error("Error loading JSON file: " + xhr.status);
          }
        };
        xhr.send();
    }

useEffect(()=>{
  getMovieDetails()
},[id])
    

    if (!movie) {
      return <div class="loader"></div>;
    }
    
  return (
    <div className='Details-movie'>
      <div className='Movie-Info'>
        <div className="movie-img">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </div>
        <div className="movie-text">
            <p className='description'><span>Movie name :</span>{movie.original_title}</p>
            <p className='description'><span>movie date :</span>{movie.release_date}</p>
            <p className='description'> <span>number of viewers :</span>{movie.vote_count}</p>
            <p className='description'><span>rating :</span>{movie.vote_average}</p>
        </div>
      </div>
      <div className='Movie-Story'>
        <p>
        <span>The story:</span><br />
        <p className="text">
            {movie.overview}
        </p>
        </p>
      </div>
      <div className="buttoms">
        <div>
            <Link to='/'><button>Back to Home</button></Link>
            <a href={movie.homepage}><button>Watch the movie</button></a>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails