import React from 'react'
import teamimg from "../assets/team.webp"

const Ourteam = () => {
  return (
    <div className='our_team_bg py-5'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-12'>
                <div>
                    <img src={teamimg} className='img-fluid rounded-3' style={{boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.5)"}}></img>
                </div>
            </div>
            <div className='col-lg-8 col-md-8 col-12'>
                <div className='text-center'>
                    <h3 className='welcome_h3_info pb-4 pt-3'>Our <span className='half_text_color'>Team</span></h3>
                </div>
                <div className=''>
                    <p className='welcome_li mb-1'>Our team consists of experienced and trained professionals who are passionate about cleaning. Each team member undergoes thorough training and background checks to ensure they meet our high standards.</p>
                    <p className='welcome_li'>
                         We take pride in our attention to detail and our ability to tailor our services to meet the specific needs of our clients.
                         </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ourteam
