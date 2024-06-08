import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclucive_image.png'

const Offers = () => {
    return(
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclucive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>

            </div>
        <div className="offers-right">
            <img src={exclucive_image} alt=""/>

        </div>

        </div>
    )
}
export default Offers