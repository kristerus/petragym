import React from 'react'

const Prices = () => {
    return (
        <div className="bigContainer" id="pricing">
            <div className="priceContainer">
                <h1 className='priceTitle'>Our Prices</h1>
                <div className="priceList">
                    <ul className="styled">
                        <li className="priceli">One Day</li>
                        <li className="priceli">One Week</li>
                        <li className="priceli">One Month</li>
                        <li className="priceli">Three Months</li>
                        <li className="priceli">Six Months</li>
                        <li className="priceli">One Year</li>
                    </ul>
                    <ul>
                        <li className="priceli">5 euros</li>
                        <li className="priceli">10 euros</li>
                        <li className="priceli">10 euros</li>
                        <li className="priceli">10 euros</li>
                        <li className="priceli">10 euros</li>
                        <li className="priceli">10 euros</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Prices