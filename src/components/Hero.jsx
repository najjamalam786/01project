import React from 'react'
import "../styles/Hero.css"
import Arrow from "../assets/arrow.svg"
import Prize from "../assets/prize.svg"

const Hero = () => {
  return (
    <main>
        <div className="left-col">
            <h1>Quality apparel without the price tag</h1>
            <p className='subhead'>No need to spen $xxxx an apparel just for the name's sake. Our premium appparel is made from the same stuff.</p>
            <div className="cta-btns">
                <a href="/" className="primary-cta">Browse our collection</a>

                <a href="/" className='secondary-cta'>
                    <span>Spring '23 Collection</span>
                    <img src={Arrow} alt="arrow" />


                </a>
            </div>
            <div className="news">
            <div className='prize'><img src={Prize} alt="prize" /></div>
                <p className="employees">50K</p>
                <p className="details">
                    We're proud to announce that we now employ a<br/>workflorce of over <strong>50,000</strong> It's all possible because<br/>of you.
                </p>
            </div>
        </div>
        <div className="right-col">
            <div className="card card1">
                <div className="card-details">
                    <div className='product-details'>
                        <a href="/" className='product-title'>Fauxica Sport</a>
                        <p>Running Shoe</p>
                    </div>
                    <p className="product-price">$49</p>
                </div>
            </div>

            <div className='right-col-row'>
            <div className="card card2 cd2">
                <div className="card-details2">
                    <div className='product-details'>
                        <a href="/" className='product-title'>Fauxica Sport</a>
                        <p>Running Shoe</p>
                    </div>
                    <p className="product-price">$49</p>
                </div>
            </div>

            <div className="card card2 cd3">
                <div className="card-details2">
                    <div className='product-details'>
                        <a href="/" className='product-title'>Fauxica Sport</a>
                        <p>Running Shoe</p>
                    </div>
                    <p className="product-price">$49</p>
                </div>
            </div>

            </div>
        </div>
    </main>
  )
}

export default Hero