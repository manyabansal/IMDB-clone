import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"
import MovieList from "../../components/movieList/MovieList";

const Home=()=>{
    
    const [popularMovies, setPopularMovies]= useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=93bebc647ed9204f19bdb5ec542e710c')
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])
    return(
       <div>
          <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
              {
                popularMovies.map(movie =>{
                  const url = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

                   return <Link to={`/movie/${movie.id}`}>
                    <div className="posterImage">
                        <img src={url}></img>
                    </div>
                    <div className="posterImage_overlay">
                      <div className="posterImage_title">{movie?.original_title}</div>
                      <div className="posterImage_runtime">{movie?.release_date}
                      <span className="posterImage_rating">
                        {movie?.vote_average}
                        <i className="fas fa-star" />{" "}
                      </span>
                      </div>
                      <div className="posterImage_description">{movie?.overview}</div>
                    </div>
                    </Link>
                }
                )
              }
            </Carousel>
            <MovieList />
          </div>
       </div>
    )
}

export default Home