import React from 'react'
import AddressForm from './AddressForm'
import videohero from "../assets/video.mp4"

const Hero = () => {
  return (
    <div className='hero_bg py-5'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
                <div>
                    <div>
                    <h3 className='trusted_partner_h3 pb-3'>Your Trusted Home Cleaning Partner</h3>
                    </div>
                    <div>
                        <video src={videohero} className='img-fluid rounded-3'></video>
                    </div>
                    <div>
                        <h6 className='trusted_partner_h3_cleaning pt-3'>At XYZ Cleaning, we understand the importance of a clean and <span className='half_text_color'>ORGANISED HOME.</span> </h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
                <div className='text-center'>
                    <h3 className='trusted_partner_h3_info mb-4'>JUST ENTER <span className='half_text_color'>YOUR INFO BELOW</span></h3>
                </div>
                <div>
                    <AddressForm/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
