import React, { useState } from 'react'
import '../PagesStyle/Home.css'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import ServiceOneimg from '/assets/img/SerivesLeftOne.png'
import ServiceTwoimg from '/assets/img/SerivesLeftTwo.png'
import { Link } from 'react-router-dom'
import ServiceScrollSlider from '../Component/ServiceScrollSlider'
import AwardsOne from '/assets/img/AwardsOne.jpg'
import AwardTwo from '/assets/img/AwardsTwo.jpg'
import AwardThree from '/assets/img/AwardsThree.jpg'
import Awardfour from '/assets/img/AwardsFour.jpg'
import AwardFive from '/assets/img/AwardsFive.jpg'
import ViedoOne from '/assets/video/orbius-video.mp4'

import ImgesScollSlider from '../Component/ImgesScollSlider'
import ReviewSlider from '../Component/ReviewSlider'
import BlogImgOne from '/assets/img/blogImg-One.png'
import Footer from '../Component/Footer'
const Home = () => {

  const [imegshover, setImgesHover] = useState(AwardsOne)

  const Imgesfunc = (image) => {
    setImgesHover(image)
  }
  const serives = [
    { name: "adaptive design solutions", creativeHediing: 'strategic planning', creativeArtical: 'Fusce accumsan tincidunt erat et convallis risus ullamcorper euoled vehicula massa a massa cursus bibendum leovel.' },
    { name: "adaptive design solutions", creativeHediing: 'design blueprinting', creativeArtical: 'Fusce accumsan tincidunt erat et convallis risus ullamcorper euoled vehicula massa a massa cursus bibendum leovel.' },
    { name: "adaptive design solutions", creativeHediing: 'creative development', creativeArtical: 'Fusce accumsan tincidunt erat et convallis risus ullamcorper euoled vehicula massa a massa cursus bibendum leovel.' },
    { name: "adaptive design solutions", creativeHediing: 'project handover', creativeArtical: 'Fusce accumsan tincidunt erat et convallis risus ullamcorper euoled vehicula massa a massa cursus bibendum leovel.', },

  ];

  const MainArr = [
    {
      year: "2024", SerivesHedding: "digital infinity awards", titel: 'best animation', image: AwardsOne,
    },
    {
      year: "2023", SerivesHedding: "best website of the year", titel: 'interactive design', image: AwardTwo,
    },
    {
      year: "2022", SerivesHedding: "festival of digital culture", titel: 'photo contest', image: AwardThree,
    },
    {
      year: "2021", SerivesHedding: "crown digital agency site", titel: 'css design awards', image: Awardfour,
    },
    {
      year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design', image: AwardFive,
    },
  ]



  return (
    <>
      <Navbar />
      <Banner />
      <section className='container-fluid'>
        <div className='custom-bottom-border d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'>who we are</h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover our identity</h5>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row m-0 py-5 ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">'
              <div className='conatiner-imges'>
                <div>
                  <div>
                    <img className='img-fluid cutom-img-width' src={ServiceOneimg} alt="" />
                  </div>
                  <div className='text-start text-sm-end'>
                    <img className='img-fluid me-lg-4 sm-mt-3 cutom-img-width' src={ServiceTwoimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <h2 className='fw-bold mt-3'>
                Elevate your online brand with our agency, specializing in creative branding, navigating the digital landscape seamlessly for sustained business success and enhanced online visibility.</h2>
              <div className=' mt-100'>
                <Link className='text-decoration-none'>
                  <ul className=' p-0'>
                    {
                      serives.map((SerivesValue, index) => (
                        <div key={index} className='d-flex justify-content-between align-items-center custom-table-list'>
                          <li className='text-capitalize'>
                            {SerivesValue.name}
                          </li>
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </div>
                      ))
                    }
                  </ul>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceScrollSlider />

      <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border  d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'>awards</h2>
          <h5 className='mt-5 d-md-block d-none'>/ notable achievements</h5>
        </div>
      </section>

      <section className='custom-margin-sm'>
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-6 d-lg-block d-none col-md-12 col-sm-12 col-12 ps-4 position-relative">
              <img className='imges-set-award' src={imegshover} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
              {
                MainArr.map((Awardsitem, index) => (
                  <div style={{ cursor: 'pointer' }} key={index} onMouseEnter={() => Imgesfunc(Awardsitem.image)} className='d-flex award-hover-item align-items-center justify-content-between'>
                    <div className='left-side-carcel'>
                      <div className='carcel-height-width'>
                        <h6>{Awardsitem.year}</h6>
                      </div>
                      <div className='border-horizontal'></div>
                    </div>
                    <div style={{ width: '48%' }}>
                      <h3>{Awardsitem.SerivesHedding}</h3>
                      <p>{Awardsitem.titel}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className='my-50'>
        <div className="container-fluid px-lg-4">
          <video autoPlay muted loop className='w-100 viedo-filter' src={ViedoOne}></video>
        </div>
      </section>

      <section>
        <div className="container-fluid my-100">
          <div className="row">
            {
              serives.map((creativeItem, index) => (
                <div key={index} className='col-lg-3 col-md-3 col-sm-6 col-12'>
                  <h2 className='stroked-text fs-1 mb-3'>0{index + 1}</h2>
                  <h3 className='fw-bold mb-3 item-text'>{creativeItem.creativeHediing}</h3>
                  <p>{creativeItem.creativeArtical}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <ImgesScollSlider />
      <ReviewSlider />

      <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border  d-flex align-items-center gap-3   my-md-4 my-sm-4'>
          <h2 className='font-size-large'>latest news</h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover the news</h5>
        </div>
      </section>

      <section className= 'mb-50 custom-my'>
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 offset-lg-3">
            <div className="blog-container">
              <span className="blog-line"></span>
              <span className="blog-date">March 28, 2024</span>
              <span className="blog-dot">•</span>
              <p className="blog-category m-0 p-0">creativity</p>
              <h2 className="blog-title fw-bold py-3">techniques for increased productivity</h2>
              <img className='img-fluid' src={BlogImgOne} alt="" />
              <p className='mt-3'>Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus</p>
              <button className='blog-btn-custom'>read more</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="blog-container">
              <span className="blog-line"></span>
              <span className="blog-date">March 28, 2024</span>
              <span className="blog-dot">•</span>
              <p className="blog-category m-0 p-0">creativity</p>
              <h2 className="blog-title fw-bold py-3">techniques for increased productivity</h2>
              <img className='img-fluid' src={BlogImgOne} alt="" />
              <p className='mt-3'>Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus</p>
              <button className='blog-btn-custom'>read more</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="blog-container">
              <span className="blog-line"></span>
              <span className="blog-date">March 28, 2024</span>
              <span className="blog-dot">•</span>
              <p className="blog-category m-0 p-0">creativity</p>
              <h2 className="blog-title fw-bold py-3">techniques for increased productivity</h2>
              <img className='img-fluid' src={BlogImgOne} alt="" />
              <p className='mt-3'>Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus</p>
              <button className='blog-btn-custom'>read more</button>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Home