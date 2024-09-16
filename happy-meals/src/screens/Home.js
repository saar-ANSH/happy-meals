import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>

      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">text to build on the card title .</p>
            <div className='container w-100'> </div>
            <select className='m-2 h-100  bg-sucess'>
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}> {i + 1}  </option>
                )
              }
              )}
            </select>
            <select className='m-2 h-100  bg-sucess rounded'>
              <option value="half">Half</option>
              <option value="full">Full</option>

            </select>
            <div className='d-inline h-100 fs-5'>
              Total price
            </div>


          </div>
        </div>
      </div>
      <div> <Footer /> </div>
    </div>
  )
}
