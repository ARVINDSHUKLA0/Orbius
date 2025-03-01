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
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const Imgesfunc = (image) => {
    setImgesHover(image)
  }
  const serives = [
    { creativeHediing: 'Strategic Planning', creativeArtical: 'I align design with your business goals. I analyze your audience and competition. I develop visual strategies, ensuring consistent brand messaging. I measure results and adapt designs for optimal impact.' },
    { creativeHediing: 'Design Blueprinting', creativeArtical: 'I translate strategic plans into actionable visual frameworks. This involves creating wireframes, style guides, and mockups to map out design elements and user flows, ensuring a clear and efficient design process.' },
    { creativeHediing: 'Creative Development', creativeArtical: 'I transform concepts into compelling visuals. I explore diverse styles, experiment with innovative techniques, and refine ideas to deliver unique, impactful designs that capture attention and resonate with your audience.' },
    { creativeHediing: 'Project Handover:', creativeArtical: 'I deliver comprehensive, organized files with clear documentation, ensuring seamless implementation. I provide style guides, asset packages, and any necessary training, empowering you to effectively utilize the design deliverables.', },


  ];



  const MainArr = [
    {
      name: "Brand Identity:", brandDescription: "What I do : I craft the visual foundation of your brand. This includes designing a unique logo that captures your essence, developing comprehensive brand guidelines (color palettes, typography, imagery style), and establishing a cohesive visual identity that resonates with your target audience.", brandInnercontent: "Why it matters : A strong brand identity builds trust, creates recognition, and sets you apart from competitors. It provides consistency across all communication channels, ensuring a unified and professional brand image.", year: "2024", SerivesHedding: "digital infinity awards", titel: 'best animation', image: AwardsOne,
    },
    {
      name: "Web Design", brandDescription: "What I do: I design user-friendly and visually appealing websites that are tailored to your business goals. This involves creating intuitive website layouts, designing engaging user interfaces (UI), and ensuring responsive design for optimal viewing on all devices.", brandInnercontent: "Why it matters: Your website is your online storefront. A well-designed website enhances user experience, drives conversions, and establishes your online credibility.", year: "2023", SerivesHedding: "best website of the year", titel: 'interactive design', image: AwardTwo,
    },
    {
      name: "Print Design", brandDescription: "What I do: I create tangible marketing materials that leave a lasting impression. This includes designing brochures, flyers, business cards, stationery, and packaging that effectively communicate your message and reflect your brand's personality", brandInnercontent: "Why it matters: Print materials provide a physical connection with your audience. High-quality print design reinforces your brand and creates a professional and memorable experience.", year: "2022", SerivesHedding: "festival of digital culture", titel: 'photo contest', image: AwardThree,
    },
    {
      name: "Digital Graphics", brandDescription: "What I do: I design compelling visuals for digital platforms. This includes creating engaging social media graphics, impactful digital advertisements, and informative infographics that capture attention and drive engagement.", brandInnercontent: "Why it matters: In today's digital landscape, strong visuals are essential for online presence. Effective digital graphics increase brand visibility, enhance social media engagement, and drive online traffic.", year: "2021", SerivesHedding: "crown digital agency site", titel: 'css design awards', image: Awardfour,
    },
    {
      name: "Image Editing and Manipulation", brandDescription: "What I do: I enhance and manipulate images to meet your specific needs. This includes photo retouching, color correction, background removal, image composition, and file preparation for both print and web.", brandInnercontent: "Why it matters: High-quality images are crucial for all design projects. Professional image editing ensures that your visuals are polished, consistent, and optimized for their intended use.", year: "2020", SerivesHedding: "the journey of one project", titel: 'portfolio design', image: AwardFive,
    },
  ]




  return (
    <>
      <Navbar />
      <Banner />
      <section className='container-fluid'>
        <div className='custom-bottom-border d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'>  who i am </h2>
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
                Building powerful brands through creative design, seamlessly navigating the digital world to drive growth and visibility.</h2>
              <div className=' mt-100'>
                <ul className="p-0">
                  {MainArr.map((service, index) => (
                    <li key={index} className="list-unstyled">
                      <div
                        className="d-flex justify-content-between align-items-center custom-table-list"
                        onClick={() => handleToggle(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="text-capitalize fw-bold">{service.name}</span>
                        <i
                          className={`fa-solid fa-arrow-right ${activeIndex === index ? "rotate" : ""}`}
                        ></i>
                      </div>

                      {activeIndex === index && (
                        <>
                          {service.brandDescription && (
                            <div className="content-box d-flex gap-3">
                              <i className="fa-solid fa-circle li-icon-dots mt-2"></i>
                              <p>
                                <span style={{ fontWeight: "bold", fontSize: "17px", paddingRight: "10px" }}>
                                  {service.brandDescription.split(" ").slice(0, 3).join(" ")}
                                </span>
                                {service.brandDescription.split(" ").slice(3).join(" ")}
                              </p>
                            </div>
                          )}

                          {service.brandInnercontent && (
                            <div className="content-box d-flex gap-3">
                              <i className="fa-solid fa-circle li-icon-dots mt-2"></i>
                              <p>
                                <span style={{ fontWeight: "bold", fontSize: "17px", paddingRight: "10px" }}>
                                  {service.brandInnercontent.split(" ").slice(0, 3).join(" ")}
                                </span>
                                {service.brandInnercontent.split(" ").slice(3).join(" ")}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>

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

      <section className='mb-50 custom-my'>
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

      <Footer />
    </>
  )
}

export default Home