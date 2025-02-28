import React from 'react'
import Navbar from '../Component/Navbar'
import '../PagesStyle/Contact.css'
import ContactBootomImges from '/assets/img/ContactBootomimg.jpg'
import Footer from '../Component/Footer.jsx'

const Contact = () => {

  return (
    <>
      <Navbar />
      <section className='mb-3'>
        <div className='container-fluid'>
          <div className='background-imges'></div>
        </div>
      </section>
      <section className='container-fluid'>
        <div className='custom-bottom-border d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'>locations </h2>
          <h5 className='mt-5 d-md-block d-none'>/ reach out to us today</h5>
        </div>
      </section>
      <section className='custom-margin'>
        <div className="row m-0">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 offset-lg-3 p-0">
            <h2 className='custom-stroke-text'> houston</h2>
            <h4>north america</h4>
            <p className='m-0'>123 maple avenue, houston, tx 56034</p>
            <p className='m-0'>+1 (888) 765 4326 / 765 4327</p>
            <p>info@domainname.com</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0">
            <h2 className='custom-stroke-text'> london</h2>
            <h4>united kingdom</h4>
            <p className='m-0'>123 maple avenue, houston, tx 56034</p>
            <p className='m-0'>+1 (888) 765 4326 / 765 4327</p>
            <p className='m-0'>info@domainname.com</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0">
            <h2 className='custom-stroke-text'> sydney</h2>
            <h4>australia</h4>
            <p className='m-0'>123 maple avenue, houston, tx 56034</p>
            <p className='m-0'>+1 (888) 765 4326 / 765 4327</p>
            <p className='m-0'>info@domainname.com</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid my-50">
          <iframe
            title="Office Location"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20103.25243905627!2d77.36506861405148!3d28.612882770615602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8e9e95e497%3A0x59e8df2ffed4a0e1!2sThink%20Cmyk%20Studios!5e1!3m2!1sen!2sin!4v1740561737620!5m2!1sen!2sin"
          ></iframe>
        </div>
      </section>
      <section className='mb-lg-5'>
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
            <div className='input-main-conatiner'>
              <img className='img-fluid w-100 custom-rounded ' src={ContactBootomImges} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <h2 className='custom-font-size-mediam'>get in touch</h2>
              <p className='fs-6 fw-bold'>take the first step and get in touch with us today</p>
              <div>
                <input className=' custom-border-bootom py-2' type="text" placeholder='your name' required />
                <input className='custom-border-bootom py-2' type="email" placeholder='email' required />
                <textarea className='custom-border-bootom py-2' name="text" rows={6} placeholder='your message' required></textarea>
                <div className='mt-3 mb-4'>
                  <button className='custom-submit-btn py-1'>submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact

