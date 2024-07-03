import React,{useEffect,useState} from 'react'
import Navbar from '../Allpages/Navbar'
import Home from '../Allpages/Home'
import Process from '../Allpages/Process'
import Match from '../Allpages/Match'
import Footer from '../Footer/Footer'
import Testimonials from '../Testimonial/Testimonials'
import Categories from '../../categories/Categories'
import './Homepage.css'; 
// import Testimonial from '../Team/Team'

function Homepage() {
  
  return (
    <div className='homepage'>
    <>
    <Navbar/>
    <Home/>
    <Categories/>
    <Process/>
    <Match/> 
     <Testimonials/>
    <Footer/>
  
    {/* <Testimonial/> */}
    </>
    </div>
  )
}

export default Homepage
