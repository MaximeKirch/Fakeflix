import './App.scss'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Row from './components/Row'
import requests from './config/Requests'
import { BrowerRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Routes } from 'react-router'

function App() {
  return (
    <div className="App">
            <Nav />
            <Banner />
            <Row
              title="Programmes originaux Netflix"
              fetchurl={requests.fetchNetflixOriginals}
              isPoster={true}
            />
            <Row
              title="Tendances actuelles"
              fetchurl={requests.fetchTrending}
            />
            <Row title="Les mieux notés" fetchurl={requests.fetchTopRated} />
            <Row title="Films d'action" fetchurl={requests.fetchActionMovies} />
            <Footer />
    </div>
  )
}

export default App
