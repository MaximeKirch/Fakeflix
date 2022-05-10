import React, { useEffect, useState } from 'react'
import './Banner.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import requests from '../config/Requests'
import axios from 'axios'
import QuickView from './QuickView'
import {Link} from "react-router-dom"

function Banner() {
  const [movie, setMovie] = useState([])
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)

      // Set a random movie
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      )
    }

    fetchData()
  }, [])

  console.log(movie)

  const truncateText = (string, n) => {
    return string?.length > n
      ? string.substr(0, n - 1) + '...'
      : 'No description'
  }

  const handleClickPopup = () => {
    setPopup(!popup)
  }

  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        <p className="banner_description">
          {truncateText(movie?.overview, 110)}
        </p>
        <div className="banner_buttons">
          <Link to={`/video/${movie?.id}`}>
          <button className="banner_button banner_button--play">
            {' '}
            <PlayArrowIcon /> Lecture
          </button>
          </Link>
          <button className="banner_button" onClick={handleClickPopup}>
            {' '}
            <HelpOutlineIcon /> Plus d'infos
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatus={popup}
      />
    </header>
  )
}

export default Banner
