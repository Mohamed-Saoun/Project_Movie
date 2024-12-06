
import './App.css';
import Navbar from './components/Navbar.jsx';
import Movieslist from './components/Movieslist.jsx';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './components/MovieDetails.jsx'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

function App() {
  const[movies ,setMovies] = useState([])
  const[pagesCount ,setPagesCount] = useState(0)
  const fetchData = () => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=5b94a958ce1b8838ad9aa7418992d9e7&include_adult=false&include_video=false&language=en&page=1", true);


    xhr.onload = function () {
      if (xhr.status === 200) {
        let dataFetched = JSON.parse(xhr.responseText);
        setMovies(dataFetched.results)
        console.log(dataFetched.total_pages)
        setPagesCount(dataFetched.total_pages)

      } else {
        console.error("Error loading JSON file: " + xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error("Request failed");
    };

    xhr.send();
  };

  const onSearch = (query)=>{
   if (query === '') {
    fetchData();
   } else {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=5b94a958ce1b8838ad9aa7418992d9e7&query=${query}`, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let dataFetched = JSON.parse(xhr.responseText);
        setMovies(dataFetched.results)
        setPagesCount(dataFetched.total_pages)

      } else {
        console.error("Error loading JSON file: " + xhr.status);
      }
    };
    xhr.send();
   }

  }



  const getSelectedPage = (id) => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.themoviedb.org/3/discover/movie?api_key=5b94a958ce1b8838ad9aa7418992d9e7&include_adult=false&include_video=false&language=en&page=${id}`, true);


    xhr.onload = function () {
      if (xhr.status === 200) {
        let dataFetched = JSON.parse(xhr.responseText);
        setMovies(dataFetched.results)
        setPagesCount(dataFetched.total_pages)

      } else {
        console.error("Error loading JSON file: " + xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error("Request failed");
    };

    xhr.send();
  };

useEffect(()=>{
  fetchData()

},[])


  return (
    <div className="font color-body" >
      {/*  */}
      <Navbar search={onSearch}></Navbar>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Movieslist movies={movies} getSelectedPage={getSelectedPage} total_pages={pagesCount}></Movieslist>}/>
      <Route path='/movie/:id' element={<MovieDetails></MovieDetails> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
