import React from 'react'
import welcomeimg from "../assets/welcome.jpg"
import { FaClock, FaCommentDollar, FaLocationDot } from 'react-icons/fa6'
import { IoHome } from 'react-icons/io5'
const Howitworks = () => {
  return (
    <div className='welcome_bg py-5'>
      <div className='container'>
        <div className='row'>
            <div className='col-12 text-center px-3 mb-4'>
                <h1 className='welcome_h3_info'>How <span className='half_text_color'>IT WORKS</span>
                </h1>
            </div>
            <div className='row mb-5'>
                <div className='col-lg-3 col-md-4 col-12'>
                    <div className='works_box'>
                    <div className='text-center mt-4 mb-2'>
                    <FaLocationDot fontSize={30} color='#22EB8B'/>
                    </div>
                    <div className='text-center'>
                        <h3>Submit</h3>
                        <h5 className='mb-4'>your address</h5>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-12'>
                    <div className='works_box'>
                    <div className='text-center mt-4 mb-2'>
                    <FaClock fontSize={30} color='#22EB8B'/>
                    </div>
                    <div className='text-center'>
                        <h3>Book</h3>
                        <h5 className='mb-4'>Service in 24h</h5>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-12'>
                    <div className='works_box'>
                    <div className='text-center mt-4 mb-2'>
                    <IoHome fontSize={30} color='#22EB8B'/>
                    </div>
                    <div className='text-center'>
                        <h3>We Visit</h3>
                        <h5 className='mb-4'>your property</h5>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-12'>
                    <div className='works_box'>
                    <div className='text-center mt-4 mb-2'>
                    <FaCommentDollar fontSize={30} color='#22EB8B'/>
                    </div>
                    <div className='text-center'>
                        <h3>XYZ</h3>
                        <h5 className='mb-4'>Complete the Service</h5>
                    </div>
                    </div>
                </div>
                </div> 
            <div className='col-12'>
                <h3 className='howit_h4'>Schedule and Customize Your Cleaning</h3>
                <p className='welcome_p'>Book your cleaning service online or by phone, choosing a date and time that fits your schedule. Customize your cleaning plan by selecting from our range of services and specifying any special instructions.</p>
                <h3 className='howit_h4'>Professional Cleaning and Quality Assurance</h3>
                <p className='welcome_p'>Our experienced cleaning team arrives on the scheduled day, fully equipped and ready to follow your customized plan. After completing the job, we conduct a quality check to ensure everything meets our high standards, leaving your home spotless and you satisfied.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Howitworks
