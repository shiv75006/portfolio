import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './project.css'
import {Link} from 'react-router-dom'
const Project = () => {
  return (
    <div className='projectpage'>
        <div className='nav'><Navbar></Navbar></div>
     <div className='cards'>
        <div className='card'>
           <h1 className='projectname'>Heart Disease Prediction System</h1>
           <h4>Machine Learning</h4>
           <p className='projectinfo'>This is an efficient machine learning project utilizing logistic regression to develop a predictive system for heart disease. Leveraging a comprehensive dataset of patient attributes and clinical indicators, the model employs logistic regression to assess individual risk factors and deliver accurate predictions. With its streamlined approach and interpretable results.</p>
           <p className='githublink'><span className='linktext'>Github Link :</span><Link className='Link' to="https://github.com/shiv75006/Heart_Disease_prediction-using-machine-learning">https://github.com/shiv75006/Heart_Disease_prediction-using-machine-learning</Link> </p>

        </div>
        <div className='card'>
        <h1 className='projectname'>GEU ACM Website</h1>
        <h4>React.js</h4>
        <p className='projectinfo'>The GEU ACM Student Chapter's dynamic website, built with React, offers an engaging platform for students and tech enthusiasts. Integrating the Google Sheets API, the website seamlessly collects real-time data including event registrations. Visitors can explore upcoming events, access resources, and interact with the vibrant tech community through this interactive and data-driven online hub.</p>
        <p className='githublink2'><span className='linktext'>Github Link :</span><Link className='Link' to="https://github.com/shiv75006/GEU-ACM-website">https://github.com/shiv75006/GEU-ACM-website</Link> </p>
        </div>
        </div>
        <Footer></Footer>
    </div>
    
  )
}

export default Project