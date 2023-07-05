import React, {useEffect, useState } from "react"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import "./card.css"
import "react-loading-skeleton/dist/skeleton.css";
import {Link} from "react-router-dom"

const Card=({movie}) =>{

    const [isLoading, setisLoading] =useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setisLoading(false)
        },1500)
    },[])

    return <> {
        isLoading?
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
             <Skeleton> height={300} duration={2}</Skeleton>
          </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`}>
            <div className="card">
                <img className="card_img" src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" />
                <div className="card_overlay">
                    <div className="card_title">{movie?.original_title}</div>
                    <div className="card_runtime">{movie?.release_date}
                    <span className="card_rating">{movie?.vote_average}
                    <i className="fas fa-star" />
                    </span>
                    </div>
                    <div className="card_description">{movie?.overview.slice(0,118)+ "..."}</div>
                </div>
            </div>
        </Link>
    } </>
} 

export default Card;