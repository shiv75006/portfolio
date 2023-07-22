import './App.css';
import {Navbar,Footer} from './components'
import Pic from './picture.png'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import code from './code-solid.svg'
import {Link} from "react-router-dom"
import Pic2 from './Asset 1@4x.png'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <img className='pic2' src={Pic2} alt=""></img>
        <h1 className='name'>Shivyanshu<br></br>Saini</h1>
        <h4 className='feild'>website development/Graphic design</h4>
        <Link to='https://drive.google.com/drive/folders/1QZ8v7evRf7cDNvdZVELMnsZo23-iJYqP?usp=drive_link'><button className='downloadcv'>Download CV </button></Link>
        <p className='aboutpara'>Discover the extraordinary fusion of design and technology on my captivating portfolio website.I am a multi-talented graphic designer, web developer, and a dedicated student at Graphic Era Deemed to be University, Dehradun.</p>
      </div>
     <img className='picture' src={Pic} alt=""></img>
     <div className='scmlinks'>
     <Link to="https://www.instagram.com/shivyanshu_saini_suryavanshi/" atl=""> <img className='scmpics' src={instagram} alt=""></img></Link>
     <Link to="https://www.linkedin.com/in/shivyanshu-saini/" alt=""><img className='scmpics' src={linkedin} alt=""></img></Link> 
      <Link to="https://leetcode.com/Shivyanshu/" alt=""><img className='scmpics' src={code} alt=""></img></Link>
     </div>
     <Footer></Footer>
    </div>
  );
}

export default App;
