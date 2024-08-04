import React from 'react'
import welcomeimg from "../assets/welcome.jpg"
const Welcomeservices = () => {
  return (
    <div className='welcome_bg py-5'>
      <div className='container'>
        <div className='row'>
            <div className='col-12 text-center px-3 mb-4'>
                <h1 className='welcome_h3_info'>Welcome to <span className='half_text_color'> XYZ Cleaning Services</span>
                </h1>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
                <div className='text-center'>
                <img src={welcomeimg} className='img-fluid rounded-3' style={{height:"300px"}}></img>
                </div>
            </div>      
            <div className='col-lg-6 col-md-6 col-12'>
                <p className='welcome_p'>At XYZ Cleaning, we understand the importance of a clean and organized home. Our team of professional cleaners is dedicated to providing top-notch cleaning services tailored to your specific needs. Whether you need a one-time deep clean, regular maintenance, or specialized cleaning services, we’ve got you covered.</p>
                <p className='welcome_p'>Ready to experience the XYZ Cleaning difference? Contact us today to schedule your cleaning service.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcomeservices
