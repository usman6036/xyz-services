import React from 'react'
import Slider from "react-slick";

const Testimonialas = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center'>
                    <h3>
                        <h3 className='welcome_h3_info pb-4 pt-3'>Testimonials</h3>
                    </h3>
                </div>
                <div>
                    <div className=''>
                    <Slider {...settings}>
                        <div>
                        <figure class="snip1390">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
                            <figcaption>
                                <h2>Jane D</h2>
                                <blockquote>I am absolutely thrilled with services I received from XYZ Cleaning! The team was professional, and did an incredible job. </blockquote>
                            </figcaption>
                        </figure>
                        </div>
                        <div>
                        <figure class="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
                            <figcaption>
                                <h2>Emily R.</h2>
                                <blockquote>It was so easy to book a service, and the results were outstanding. I will definitely be using them again!</blockquote>
                            </figcaption>
                        </figure>
                        </div>
                        <div>
                        <figure class="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
                            <figcaption>
                                <h2>Sarah M.</h2>
                                <blockquote>XYZ Cleaning is a lifesaver! With my busy schedule, I don’t have time to clean as thoroughly as I’d like. </blockquote>
                            </figcaption>
                        </figure>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonialas
