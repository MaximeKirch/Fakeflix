import React from 'react'
import './QuickView.scss'
import CancelIcon from '@material-ui/icons/Cancel'
import { dateFormatter } from './Utils'
import { Link } from 'react-router-dom'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

function QuickView({bannerStyle, movie,  popupStatus, popup}) {
  return (
    <div className={`quickView ${popupStatus && "open"}`}>
        <div className='quickView_banner' style={bannerStyle}>
            <div className='quickView_content'>
                
                <h3 className="quickView_title">
                    {movie?.title || movie?.name || movie?.original_title}
                </h3>
                <h5>Date de sortie : {dateFormatter(movie?.release_date || movie?.first_air_date)}</h5>
                <h5>Note moyenne : {movie?.vote_average} / 10</h5>
                <br />
                <p>{movie?.overview}</p>

                <Link to={'/video'}>
                <div className="quickView_button">
                    <button className="quickView_button--play">
                        <PlayArrowIcon /> Lecture 
                    </button>
                </div>
                </Link>
            </div>
            <button className="quickView_close" onClick={popup}>
                <CancelIcon fontSize="large"/>
            </button>
        </div>
    </div>
  )
}

export default QuickView