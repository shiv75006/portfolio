import React from 'react'
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer'
import './gd.css'
import Logos from './images/logos.png'
import Post from './images/21.png'
import Indira from './images/indira.png'
import Webmaster from './images/9.png'
import cbs from './images/instapostcbs.png'
import Block from './images/blockchaininstapost.png'
// import Banner1 from './images/apm.png'
// import Banner2 from './images/Banner2.png'
// import Banner3 from './images/BLOCKCHAINposter.png'
import img1 from './images/MAA SHAILPUTRI 2/1.png'
import img2 from './images/MAA SHAILPUTRI 2/4.png'
import img3 from './images/MAA SHAILPUTRI 2/7.png'
import img4 from './images/MAA SHAILPUTRI 2/10.png'
import img5 from './images/MAA SHAILPUTRI 2/13.png'
import img6 from './images/MAA SHAILPUTRI 2/16.png'
import img7 from './images/MAA SHAILPUTRI 2/19.png'
import img8 from './images/MAA SHAILPUTRI 2/22.png'
import img9 from './images/MAA SHAILPUTRI 2/25.png'
const Gd = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <h1 className='tedxhead'>TEDxGraphicEraUniversityWomen</h1>
            <div className='gridcontainer'>
            <div className='griditem'><img className='tedgridimg' src={Logos} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={Post} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={Indira} alt=""></img></div>
            </div>
        </div>

        <div>
            <h1 className='acmhead'>ACM Student Chapter</h1>
            <div className='gridcontainer2'>
            <div className='griditem'><img className='tedgridimg' src={Webmaster} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={Block} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={cbs} alt=""></img></div>
           
            </div>
        </div>

        {/* <div className='gridcontainer3'>
        <div className='griditem2'><img className='tedgridimg' src={Banner1}></img></div>
            <div className='griditem2'><img className='tedgridimg' src={Banner2}></img></div>
            <div className='griditem2'><img className='tedgridimg' src={Banner3}></img></div>
        </div> */}
        
        <div>
            <h1 className='phead'>Personal Designs</h1>
            <div className='gridcontainer3'>
            <div className='griditem'><img className='tedgridimg' src={img1} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img2} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img3} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img4} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img5} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img6} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img7} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img8} alt=""></img></div>
            <div className='griditem'><img className='tedgridimg' src={img9} alt=""></img></div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gd