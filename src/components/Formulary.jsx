import React from 'react';
import { useFormik } from 'formik';

function Formulary() {
  // A custom validation function. This must return an object
  // which keys are symmetrical to our values/initialValues
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 25) {
      errors.name = 'Must be 25 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length === 0) {
      errors.message = 'Type your message here';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <header>
        <h2 style={{ fontSize: '1.45em', fontWeight: 900 }}>
          LET'S GET IN TOUCH
        </h2>
        <p style={{ fontSize: '18px' }}>
          Let's talk, no strings attached, tell us your idea and we'll do our
          best to provide with the best service and support
        </p>
      </header>

      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={formik.handleSubmit}
      >
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="name"
              id="name"
              //   defaultValue=""
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: 'red' }}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              name="email"
              id="email"
              //   defaultValue=""
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows="6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            <div>
              {formik.touched.message && formik.errors.message ? (
                <div style={{ color: 'red' }}>{formik.errors.message}</div>
              ) : null}
            </div>
          </div>
          <div className="col-12">
            <input type="submit" value="Send Message" className="primary" />
          </div>
        </div>
      </form>
    </>
  );
}

export default Formulary;
