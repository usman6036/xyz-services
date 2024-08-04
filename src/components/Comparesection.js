import React from 'react'
import compareimg from "../assets/compare.jpg"

const Comparesection = () => {
  return (
    <div>
      <div className='container'>
        <div className='text-center'>
        <h1 className='welcome_h3_info mt-5'>HOW WE <span className='half_text_color'>COMPARE</span></h1>
        </div>
        <div className='text-center mt-4 mb-5'>
            <img src={compareimg} className='img-fluid rounded-3' style={{height:"400px"}}></img>
        </div>
      </div>
    </div>
  )
}

export default Comparesection
