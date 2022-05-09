import React from 'react'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className="footer_socials">
                <a href="/" className='footer_social'><FacebookIcon/></a>
                <a href="/" className='footer_social'><InstagramIcon/></a>
                <a href="/" className='footer_social'><TwitterIcon/></a>
                <a href="/" className='footer_social'><YouTubeIcon/></a>
            </div>
            <ul className='footer_links'>
                <li className='footer_link'>
                    <a href="/">Audio et sous-titres</a>
                </li>
                <li className='footer_link'>
                    <a href="/">Presse</a>
                </li>
                <li className='footer_link'>
                    <a href="/">Confidentialité</a>
                </li>
                <li className='footer_link'>
                    <a href="/">Nous contacter</a>
                </li>
                <li className='footer_link'>
                    <a href="/">Audiodescription</a>
                </li>
                <li className='footer_link'>
                    <a href="/">Relations Investisseurs</a>
                </li>
                <li className='footer_link'>
                    <a href="/">Informations légales</a>
                </li>
                <li className='footer_link'>
                    <a href="/">Centre d'aide</a>
                </li>
            </ul>
            <div className="footer_copy">
                Fakeflix Clone
            </div>
        </div>
    </footer>
  )
}
