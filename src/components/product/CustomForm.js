import React, { useState } from 'react'
import { GiCycle } from 'react-icons/gi'
import { IoLocationSharp } from 'react-icons/io5'
import { LiaOpencart, LiaOpenid } from 'react-icons/lia'
import { MdAccessTimeFilled } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import doublebed from "../../assets/double-bed.svg"
import bathroom from "../../assets/shower.svg"
import DatePicker from 'react-datepicker';
import axios from 'axios'
const CustomForm = () => {
  const [selectedSolarType, setSelectedSolarType] = useState('');
  const [selectedServiceFrequency, setSelectedServiceFrequency] = useState('');
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [hours, setHours] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    houseNumber: ''
  });


  const handleSolarTypeSelection = (type, setFieldValue) => {
    setSelectedSolarType(type);
    setFieldValue('solarType', type);
  };

  const handleServiceFrequencySelection = (frequency, setFieldValue) => {
    setSelectedServiceFrequency(frequency);
    setFieldValue('serviceFrequency', frequency);
  };

  const handleIncrement = (type, setFieldValue) => {
    if (type === 'bedrooms') {
      const newBedrooms = bedrooms + 1;
      setBedrooms(newBedrooms);
      setFieldValue('bedrooms', newBedrooms);
    } else if (type === 'bathrooms') {
      const newBathrooms = bathrooms + 1;
      setBathrooms(newBathrooms);
      setFieldValue('bathrooms', newBathrooms);
    }
  };

  const handleDecrement = (type, setFieldValue) => {
    if (type === 'bedrooms' && bedrooms > 0) {
      const newBedrooms = bedrooms - 1;
      setBedrooms(newBedrooms);
      setFieldValue('bedrooms', newBedrooms);
    } else if (type === 'bathrooms' && bathrooms > 0) {
      const newBathrooms = bathrooms - 1;
      setBathrooms(newBathrooms);
      setFieldValue('bathrooms', newBathrooms);
    }
  };

  const handleServiceSelection = (service, setFieldValue) => {
    const currentIndex = selectedServices.indexOf(service);
    const newSelectedServices = [...selectedServices];

    if (currentIndex === -1) {
      newSelectedServices.push(service);
    } else {
      newSelectedServices.splice(currentIndex, 1);
    }

    setSelectedServices(newSelectedServices);
    setFieldValue('additionalServices', newSelectedServices);
  };

  const handleSpecialRequirementsChange = (e, setFieldValue) => {
    const value = e.target.value;
    setSpecialRequirements(value);
    setFieldValue('specialRequirements', value);
  };
  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/submit', values);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const validationSchema = Yup.object({
    solarType: Yup.string().required('Please select a solar type'),
    serviceFrequency: Yup.string().required('Please select a service frequency'),
    bedrooms: Yup.number().required('Please specify the number of bedrooms').min(0),
    bathrooms: Yup.number().required('Please specify the number of bathrooms').min(0),
    additionalServices: Yup.array().min(1, 'Please select at least one additional service'),
    hours: Yup.number().required('Please specify the number of hours').min(1),
    serviceDate: Yup.date().required('Please select a date for the service').nullable(),
    serviceTime: Yup.string().required('Please select a service start time'),
    personalDetails: Yup.array()
      .of(Yup.string().required('This field is required'))
      .min(5, 'Please fill out all the fields'),
    termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
  });
  return (
    <div className='form_page_bg'>
      <div className='container pb-5'>
        <div className='row'>
          <div className='col-12 text-center px-3 mb-4 mt-5'>
            <h1 className='welcome_h3_info'>Start Booking<span className='half_text_color'> Your Own Service</span>
            </h1>
            <p className='welcome_p_li'>Its time to book our Solar service for your home or apartment.
            </p>
          </div>
        </div>
        <Formik
          initialValues={{
            solarType: '', serviceFrequency: '', bedrooms: bedrooms,
            bathrooms: bathrooms, additionalServices: [], specialRequirements: '', hours: hours,
            serviceDate: null, serviceTime: '', personalDetails: ['', '', '', '', ''], termsAccepted: false

          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className='row'>
                <div className='col-lg-8 col-md-8 col-12'>
                  <div>
                    <div className='solar_preferences_bg  py-3 ps-3'>
                      <h4 className='solar_preferences_h4 mb-0'>Solar Preferences</h4>
                    </div>
                    <div className='px-4 bg-white'>

                      {/* Step 1: Solar Type */}

                      <div>
                        <p className='welcome_p_li pt-4'>
                          What type of Solar?
                        </p>
                        <div className='d-flex'>
                          {['Standard', 'Deep', 'Move In / Out'].map((type) => (
                            <div
                              key={type}
                              className={`solar_type_box ${selectedSolarType === type ? 'solar_type_box_active' : ''
                                } me-2 text-center py-3`}
                              onClick={() => handleSolarTypeSelection(type, setFieldValue)}
                            >
                              <h3 className='solar_type_box_h4'>{type}</h3>
                            </div>
                          ))}
                        </div>
                        <ErrorMessage name='solarType' component='div' className='text-danger' />
                      </div>

                      {/* Step 2: Frequency */}

                      <div>
                        <p className='welcome_p_li pt-4'>
                          How often would you like Solar?
                        </p>
                        <div className='d-flex'>
                          {['One time', 'Weekly', 'Bi-weekly', 'Monthly'].map((frequency) => (
                            <div
                              key={frequency}
                              className={`solar_type_box ${selectedServiceFrequency === frequency ? 'solar_type_box_active' : ''
                                } me-2 text-center py-3`}
                              onClick={() => handleServiceFrequencySelection(frequency, setFieldValue)}
                            >
                              <h3 className='solar_type_box_h4'>{frequency}</h3>
                            </div>
                          ))}
                        </div>
                        <ErrorMessage name='serviceFrequency' component='div' className='text-danger' />
                      </div>
                      <div className='summary_hr'></div>

                      {/* Step 3: Counters */}

                      <div>
                        <p className='welcome_p_li pt-1'>Tell us about your home:</p>
                        <div className='row'>
                          <div className='col-lg-4 col-md-4 col-12'>
                            <div className='about_home_box pt-2'>
                              <div className='text-center'>
                                <img src={doublebed} style={{ width: '120px' }} alt='Bedrooms' />
                                <h5>Bedrooms</h5>
                              </div>
                              <div className='d-flex justify-content-between about_home_box_center'>
                                <div
                                  className='about_home_box_inner px-3'
                                  onClick={() => handleDecrement('bedrooms', setFieldValue)}
                                >
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>-</p>
                                </div>
                                <div>
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>{bedrooms}</p>
                                </div>
                                <div
                                  className='about_home_box_inner_right px-3'
                                  onClick={() => handleIncrement('bedrooms', setFieldValue)}
                                >
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>+</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-4 col-md-4 col-12'>
                            <div className='about_home_box pt-2'>
                              <div className='text-center'>
                                <img src={bathroom} style={{ width: '120px' }} alt='Bathrooms' />
                                <h5>Bathrooms</h5>
                              </div>
                              <div className='d-flex justify-content-between about_home_box_center'>
                                <div
                                  className='about_home_box_inner px-3'
                                  onClick={() => handleDecrement('bathrooms', setFieldValue)}
                                >
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>-</p>
                                </div>
                                <div>
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>{bathrooms}</p>
                                </div>
                                <div
                                  className='about_home_box_inner_right px-3'
                                  onClick={() => handleIncrement('bathrooms', setFieldValue)}
                                >
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>+</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ErrorMessage name='bedrooms' component='div' className='text-danger' />
                        <ErrorMessage name='bathrooms' component='div' className='text-danger' />
                      </div>

                      {/* Step 4: Additional Services*/}

                      <div>
                        <p className='welcome_p_li pt-4'>Select additional services:</p>
                        <div className='d-flex'>
                          {['Clean Oven', 'Clean Windows', 'Clean Fridge', 'Ironing'].map((service) => (
                            <div
                              key={service}
                              className={`solar_type_box ${selectedServices.includes(service) ? 'solar_type_box_active' : ''
                                } me-2 text-center py-3`}
                              onClick={() => handleServiceSelection(service, setFieldValue)}
                            >
                              <h3 className='solar_type_box_h4'>{service}</h3>
                            </div>
                          ))}
                        </div>
                        <ErrorMessage name='additionalServices' component='div' className='text-danger' />
                      </div>

                      {/* Step 5: Special Requirements */}

                      <div>
                        <p className='welcome_p_li pt-4'>Do you have any special requirements?</p>
                        <div>
                          <Field
                            as='textarea'
                            name='specialRequirements'
                            className='form-control'
                            placeholder='Enter your special requirements here'
                            onChange={(e) => handleSpecialRequirementsChange(e, setFieldValue)}
                          />
                          <ErrorMessage name='specialRequirements' component='div' className='text-danger' />
                        </div>
                      </div>

                      {/* Step 6: Choose Date and Hours */}

                      <div>
                        <p className='welcome_p_li pt-4'>Select the number of hours of service:</p>
                        <div className='row'>
                          <div className='col-lg-6 col-md-6 col-12'>
                            <div className='about_home_box pt-2'>
                              <div className='text-center'>
                                <h5>Hours of Service</h5>
                              </div>
                              <div className='d-flex justify-content-between about_home_box_center'>
                                <div
                                  className='about_home_box_inner px-3'
                                  onClick={() => {
                                    if (hours > 1) {
                                      setHours(hours - 1);
                                      setFieldValue('hours', hours - 1);
                                    }
                                  }}
                                >
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>-</p>
                                </div>
                                <div>
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>{hours}</p>
                                </div>
                                <div
                                  className='about_home_box_inner_right px-3'
                                  onClick={() => {
                                    setHours(hours + 1);
                                    setFieldValue('hours', hours + 1);
                                  }}
                                >
                                  <p className='welcome_p_li fw-bold mt-2 mb-2'>+</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6 col-md-6 col-12'>
                            <div className='about_home_box pt-2'>
                              <div className='text-center'>
                                <h5>Date of Service</h5>
                              </div>
                              <div className='d-flex justify-content-center pb-2'>
                                <DatePicker
                                  selected={selectedDate}
                                  onChange={(date) => {
                                    setSelectedDate(date);
                                    setFieldValue('serviceDate', date);
                                  }}
                                  dateFormat='MMMM d, yyyy'
                                  className='form-control'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <ErrorMessage name='hours' component='div' className='text-danger' />
                        <ErrorMessage name='serviceDate' component='div' className='text-danger' />
                      </div>

                      {/*  Step 7: Service Start Time */}
                      <div>
                        <p className='welcome_p_li pt-4'>Select the start time for the service:</p>
                        <div className='d-flex flex-wrap'>
                          {['7am', '9am', '11am', '1pm', '3pm', '5pm', '7pm', '9pm'].map((time) => (
                            <div
                              key={time}
                              className={`solar_type_box ${selectedTime === time ? 'solar_type_box_active' : ''
                                } me-2 text-center py-3 mb-2`}
                              onClick={() => {
                                setSelectedTime(time);
                                setFieldValue('serviceTime', time);
                              }}
                            >
                              <h3 className='solar_type_box_h4'>{time}</h3>
                            </div>
                          ))}
                        </div>
                        <ErrorMessage name='serviceTime' component='div' className='text-danger' />
                      </div>

                      {/*  Step 8: Personal Details */}
                      <div>
                        <p className='welcome_p_li pt-4'>Please provide your personal details:</p>
                        <div className='row'>
                          {['Name', 'Email', 'Phone', 'Address', 'House Number'].map((field, index) => (
                            <div className='col-lg-6 col-md-6 col-12 mb-3' key={index}>
                              <Field
                                name={field.toLowerCase().replace(' ', '')}
                                type='text'
                                placeholder={field}
                                className='form-control'
                                value={personalDetails[field.toLowerCase().replace(' ', '')]}
                                onChange={(e) => {
                                  const { name, value } = e.target;
                                  setPersonalDetails({ ...personalDetails, [name]: value });
                                  setFieldValue(`personalDetails.${index}`, value);
                                }}
                              />
                              <ErrorMessage name={`personalDetails.${index}`} component='div' className='text-danger' />
                            </div>
                          ))}
                        </div>
                      </div>
                      {/*  Step 9: Terms and Conditions */}
                      <div className='pb-3
                    '>
                        <label>
                          <Field
                            type='checkbox'
                            name='termsAccepted'
                            checked={termsAccepted}
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              setTermsAccepted(isChecked);
                              setFieldValue('termsAccepted', isChecked);
                            }}
                          />
                          &nbsp;&nbsp;&nbsp;I have read and agree to the terms and conditions
                        </label>
                        <ErrorMessage name='termsAccepted' component='div' className='text-danger' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                  <div>
                    <div className='solar_preferences_bg py-3 ps-3'>
                      <h4 className='solar_preferences_h4 mb-0'>Booking Summary</h4>
                    </div>
                    <div className='bg-white'>
                      <div className='px-4 py-4'>
                        <div className='d-flex'>
                          <div>
                            <LiaOpenid color='#59F763' fontSize={20} />
                          </div>
                          <div>
                            <p className='mb-0 ms-3 welcome_p_li'>{selectedSolarType ? selectedSolarType : "Select"} Solar</p>
                          </div>
                        </div>
                        <div className='d-flex mt-2'>
                          <div>
                            <SlCalender color='#59F763' fontSize={20} />
                          </div>
                          <div>
                            <p className='mb-0 ms-3 welcome_p_li'>12/31/2016 @ {selectedTime ? selectedTime : "00 : 00"}</p>
                          </div>
                        </div>
                        <div className='d-flex mt-2'>
                          <div>
                            <MdAccessTimeFilled color='#59F763' fontSize={20} />
                          </div>
                          <div>
                            <p className='mb-0 ms-3 welcome_p_li'>{hours} Hours</p>
                          </div>
                        </div>
                        <div className='d-flex mt-2'>
                          <div>
                            <GiCycle color='#59F763' fontSize={20} />
                          </div>
                          <div>
                            <p className='mb-0 ms-3 welcome_p_li'>{selectedServiceFrequency ? selectedServiceFrequency : "One time"}</p>
                          </div>
                        </div>
                        <div className='d-flex mt-2'>
                          <div>
                            <IoLocationSharp color='#59F763' fontSize={20} />
                          </div>
                          <div>
                            <p className='mb-0 ms-3 welcome_p_li'>{personalDetails.address ? personalDetails?.address :"Enter Your Address"}</p>
                          </div>
                        </div>
                        <div className='summary_hr'></div>
                        {/* <div className='d-flex mt-2 justify-content-between'>
                          <div>
                            <h1 className='welcome_h3_info'>Total Cost
                            </h1>
                          </div>
                          <div>
                            <h1 className='welcome_h3_info'><span className='half_text_color'>$350</span>
                            </h1>
                          </div>
                        </div> */}
                        <div className=''>
                          <button className='booking_now_btn py-2' type='submit'>Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>)}
        </Formik>
      </div>
    </div>
  )
}

export default CustomForm
