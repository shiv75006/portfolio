import './App.css';
import {Navbar} from './components'
import Pic from './picture.png'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import code from './code-solid.svg'
import {Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <h1 className='name'>Shivyanshu<br></br>Saini</h1>
        <h4 className='feild'>website development/Graphic design</h4>
        <button className='downloadcv'>Download CV </button>
        <p className='aboutpara'>Discover the extraordinary fusion of design and technology on my captivating portfolio website.I am a multi-talented graphic designer, web developer, and a dedicated student at Graphic Era Deemed to be University, Dehradun.</p>
      </div>
     <img className='picture' src={Pic}></img>
     <div className='scmlinks'>
     <Link to="https://www.instagram.com/shivyanshu_saini_suryavanshi/"> <img className='scmpics' src={instagram}></img></Link>
     <Link to="https://www.linkedin.com/in/shivyanshu-saini/"><img className='scmpics' src={linkedin}></img></Link> 
      <Link to="https://leetcode.com/Shivyanshu/"><img className='scmpics' src={code}></img></Link>
     </div>
    </div>
  );
}

export default App;
