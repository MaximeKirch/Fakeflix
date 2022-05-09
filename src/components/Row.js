import React, {useState, useEffect} from 'react'
import "./Row.scss"
import axios from 'axios'
import {Link} from "react-router-dom"

function Row({title, fetchurl, isPoster}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchurl)
  
        // Set movies
        setMovies(
          request.data.results
        )
      }
  
      fetchData()
    }, [fetchurl])

  return (
    <div className="row">
        <h2 className='row_title'>{title}</h2>
            <div className="row_images">
                {movies.map((movie) => <div key={movie.id}>
                    {isPoster ? (
                      <Link to={`/video/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="row_image" alt={movie.title} />
                    </Link>
                    )
                    :
                    (
                      <Link to={`/video/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="row_image" alt={movie.title} />
                      </Link>

                    )
                }

                </div>)}
                image
            </div>
    </div>
  )
}

export default Row