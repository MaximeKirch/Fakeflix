import React, {useState} from 'react'
import './Nav.scss'
import logo from '../assets/Logo.png'
import avatar from '../assets/avatar.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Nav() {

    const [navBlack, setNavBlack] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    
    // Scroll transition 
    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }

    useState(() => {
        document.addEventListener("scroll", transitionNav)
    })

    // Burger menu
    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }

    
  return (
    <div className={`nav ${navBlack || toggleMenu ? "nav-black" : "nav--transparent"} ${toggleMenu && "show"}`}>
        <button className="nav_burger" onClick={handleClick}>
            <MenuIcon />
        </button>
        <img className='nav_logo' src={logo}  alt="fakeflix"/>
        <nav className="nav_links">
            <a  href="/" className="nav_link"> Accueil</a>
            <a  href="/" className="nav_link"> Séries</a>
            <a  href="/" className="nav_link"> Films</a>
        </nav>
        <div className='nav_actions'>
            <a className='nav_action' href="/"><SearchIcon/></a>
            <a className='nav_action' href="/">DIRECT</a>
            <a className='nav_action' href="/"><CardGiftcardIcon/></a>
            <a className='nav_action' href="/"><NotificationsIcon /></a>
            <a className='nav_action' href="/"><img id="avatar" src={avatar} alt="avatar"/></a>
        </div>
    </div>
  )
}
