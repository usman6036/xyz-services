import React from 'react'
import footerlogo from "../assets/xyz-logo.png"

const Footer = () => {
  return (
    <div className='copyright_border'>
      <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='text-center py-4'>
                    <img src={footerlogo}></img>
                    <p className='welcome_p pt-3 mb-0'>Copyright © 2024. All Rights Reserved</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
