import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('Full name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits')
        .required('Phone number is required'),
      address: Yup.string()
        .required('Address is required')
    }),
    onSubmit: (values) => {
      console.log('Form Data:', values);
      // You can send the values to your API here
    }
  });

  return (
    <div className='form_bg py-4 mx-5'>
    <form onSubmit={formik.handleSubmit} className="container">
      <div className="form-group">
        <label htmlFor="fullName" className=''>Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          className={`form-control ${formik.touched.fullName && formik.errors.fullName ? 'is-invalid' : ''}`}
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="invalid-feedback">{formik.errors.fullName}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="email" className='pt-2'>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="invalid-feedback">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className='pt-2'>Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="invalid-feedback">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="address" className='pt-2'>Address</label>
        <input
          id="address"
          name="address"
          type="text"
          className={`form-control ${formik.touched.address && formik.errors.address ? 'is-invalid' : ''}`}
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="invalid-feedback">{formik.errors.address}</div>
        ) : null}
      </div>

      <button type="submit" className="btn submit_form_btn">Book Your Service</button>
    </form>
    </div>
  );
};

export default AddressForm;
