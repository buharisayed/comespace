import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'
const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3> - Basic -</h3>
                <span className='bar'> </span>
                <p className='btc'> 1 BTC</p>
                <p>Views</p>
                <p>3 Days</p>
                <p>month</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3> - Diamond -</h3>
                <span className='bar'> </span>
                <p className='btc'> 3 BTC</p>
                <p>Views</p>
                <p>3 Days</p>
                <p>month</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3> - Platinum -</h3>
                <span className='bar'> </span>
                <p className='btc'> 6 BTC</p>
                <p>Views</p>
                <p>3 Days</p>
                <p>month</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>


        
    </div>
  )
}

export default Pricing