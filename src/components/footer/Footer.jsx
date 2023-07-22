import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='footercontainer'>
            <div className='footeritems'>
                <div>
                <h6 className='headings'>Email</h6>
                <p className='information'>shivsaini75006@gmail.com</p>
                </div>

                <div>
                <h6 className='headings'>Contact</h6>
                <p className='information'>7017585059</p>
                </div>
                <div>
                <h6 className='headings'>Instagram</h6>
                <Link className='footerlinks' to='https://www.instagram.com/shivyanshu_saini_suryavanshi/'>  <p className='information'>@shivyanshu_saini_suryavanshi</p></Link>
                <Link className='footerlinks' to='https://www.instagram.com/shiv_designs26/'>   <p className='information'>@shiv_designs26</p></Link>
                <Link className='footerlinks' to='https://www.instagram.com/shiv_illustrates/'>   <p className='information'>@shiv_illustrates</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer