import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Ticket from './Ticket'

const Home = () => {
  return (
    <>
    <span className='header'>
        <h1>ParkTheCar</h1>
        <h2>Your go to parking spot !</h2>
    </span>
    <div className='book-tickets'>
        <Link to="/tickets" >Yosdsdsd</Link>
    </div>
    </>
  )
}

export default Home