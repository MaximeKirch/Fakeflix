import React from 'react'
import {useParams} from "react-router-dom"
import './Video.scss'

function Video() {

    //let { id } = useParams();

    let id = "C50_kM8Rp-w"

  return (
    <div className='video'>
        <iframe src={`https://www.youtube.com/embed/${id}`}
        title='video'
        frameBorder="0"
        allowFullScreen
        ></iframe>
    </div>
  )
}

export default Video