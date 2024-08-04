import React from 'react'
import chooseimg from "../assets/chooseus.jpg"
const Chooseus = () => {
  return (
    <div className='py-5'>
      <div className='container'>
        <div className='row'>
            <div className='col-12 text-center px-3 mb-4'>
                <h1 className='welcome_h3_info'>Choose Us
                </h1>
            </div>      
            <div className='col-lg-6 col-md-6 col-12'>
            <h1 className='welcome_h3_info pt-3'>Why Choose <span className='half_text_color'>XYZ Cleaning?</span>
            </h1>
            <ul>
                <li className='welcome_p_li pb-2 pt-2'>
                <span className='welcome_p_li_b'>Experienced and Trained Staff: </span>Our cleaning professionals are thoroughly trained, background-checked, and committed to delivering exceptional service.
                </li>
                <li className='welcome_p_li pb-2'>
                <span className='welcome_p_li_b'>Customized Cleaning Plans: </span>We offer flexible cleaning plans tailored to meet your unique requirements and preferences.
                </li>
                <li className='welcome_p_li'>
                <span className='welcome_p_li_b'>Eco-Friendly Products: </span>We use environmentally friendly cleaning products that are safe for your family and pets.
                </li>
                <li className='welcome_p_li'>
                <span className='welcome_p_li_b'>Satisfaction Guaranteed: </span>Your satisfaction is our top priority. We stand by the quality of our work and strive to exceed your expectations.
                </li>
            </ul>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
                <div className='text-center'>
                <img src={chooseimg} className='img-fluid rounded-3' style={{height:"300px"}}></img>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chooseus
