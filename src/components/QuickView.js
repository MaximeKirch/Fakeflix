import React from 'react'
import './QuickView.scss'
import CancelIcon from '@material-ui/icons/Cancel'

function QuickView({bannerStyle, movie,  popupStatus, popup}) {
  return (
    <div className={`quickView ${popupStatus && "open"}`}>
        <div className='quickView_banner' style={bannerStyle}>
            <div className='quickView_content'>
                <h3 className="quickView_title">
                    {movie?.title || movie?.name || movie?.original_title}
                </h3>
                <p>{movie?.overview}</p>
            </div>
            <button className="quickView_close" onClick={popup}>
                <CancelIcon fontSize="large"/>
            </button>
        </div>
    </div>
  )
}

export default QuickView