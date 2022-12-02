import React from 'react'
import "./PricingCard.css"
import {Link} from "react-router-dom"

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                
                <h3> --- BAsic ---</h3>
                <span className='bar'></span>
                <p className="btc">$ 100</p>
                <p> - 3 Days -</p>
                <p> - 3 Pages -</p>
                <p> - Featured -</p>
                <p>- Responsive Design -</p>
            <Link to ="/contact" className="btn"> Purchase now</Link>
            
            </div>
            <div className='card'>
                <h3> --- BAsic ---</h3>
                <span className='bar'></span>
                <p className="btc">$ 100</p>
                <p> - 3 Days -</p>
                <p> - 3 Pages -</p>
                <p> - Featured -</p>
                <p>- Responsive Design -</p>
            <Link to ="/contact" className="btn"> Purchase now</Link>
            
            </div>

            <div className='card'>
                <h3> --- Bussiness ---</h3>
                <span className='bar'></span>
                <p className="btc">$ 300</p>
                <p> - 5 Days -</p>
                <p> - 5 Pages -</p>
                <p> - Featured -</p>
                <p>- Responsive Design -</p>
            <Link to ="/contact" className="btn"> Purchase now</Link>
            
            </div>
        </div>
    </div>
  )
}

export default PricingCard