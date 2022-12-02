
import React from 'react'
import "./HeroImgstyle.css"
import {Link} from "react-router-dom"

const HomeImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
          <img className='intro-img' src='https://www.rd.com/wp-content/uploads/2018/09/12-Red-Flags-That-Someone-May-Be-Spying-on-Your-Computer-8.jpg?resize=700,466' alt='first img' />

        </div>
        <div className='content'>
          <p>Hi i Am Anju Tewatia</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/project" className='btn' >Project</Link>
            <Link to="/contact" className=' btn btn-light' >Contact</Link>

          </div>
        </div>
    </div>
  )
}

export default HomeImg