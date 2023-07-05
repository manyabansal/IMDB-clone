import React, {useEffect, useState} from 'react'
import Card from '../card/Card'
import "./movieList.css"
import { useParams } from 'react-router-dom'

const MovieList=()=>{
    const [movieList, setMovieList]=useState([]);
    const {type}=useParams();

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    },[type])

    const getData =()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "now_playing"}?language=en-US&api_key=93bebc647ed9204f19bdb5ec542e710c`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return(
        <div className='movie_list'>
            <h2 className='title'>{(type ? type : "NOW PLAYING").toUpperCase()}</h2>
            <div className='cards'>
                {
                    movieList.map(movie =>(
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;