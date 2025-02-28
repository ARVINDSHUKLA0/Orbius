import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import '../PagesStyle/About.css'
import AboutimgOne from '/assets/img/aboutOne.jpg'
import { Link } from 'react-router-dom'
import AboutTwo from '/assets/img/AboutTwo.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SerivesSilderAboutOne from '/assets/img/SerivesSilderAboutOne.jpg'
import SerivesSilderAboutTwo from '/assets/img/SerivesSilderAboutTwo.jpg'
import SerivesSilderAboutThree from '/assets/img/SerivesSilderAboutThree.jpg'
import SerivesSilderAboutFour from '/assets/img/SerivesSilderAboutFour.jpg'
import SerivesSilderAboutFive from '/assets/img/SerivesSilderAboutfive.jpg'
import SerivesSilderAboutSix from '/assets/img/SerivesSilderAboutSix.jpg'
import ReviewSilder from '../Component/ReviewSlider.jsx'
import Footer from '../Component/Footer.jsx'
 
const About = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const serivesSilder = [
        { imgesSilderSerives: SerivesSilderAboutOne, name: 'casa mondo', title: 'logo design', subtitle: 'animation', application: 'mobile app' },
        { imgesSilderSerives: SerivesSilderAboutTwo, name: 'nova wave ', title: 'web design', subtitle: 'marketing', application: 'animation' },
        { imgesSilderSerives: SerivesSilderAboutThree, name: 'ocean shine', title: 'barading', subtitle: 'graphics', application: 'marketing' },
        { imgesSilderSerives: SerivesSilderAboutFour, name: 'bright path ', title: 'digital art', subtitle: 'marketing', application: 'barading' },
        { imgesSilderSerives: SerivesSilderAboutFive, name: 'urban blend', title: 'marketing', subtitle: 'animation', application: 'printing' },
        { imgesSilderSerives: SerivesSilderAboutSix, name: 'cloud space', title: 'web design', subtitle: 'marketing', application: 'animation' },
    ]
    return (
        <>
            <Navbar />
            <section>
                <div className="container-fluid">
                    <div className="marquee py-3">
                        <div className="marquee-content">
                            <h2 className='font-size-large'>hello guys! my name is <span className="stroke-text">olivia smith.</span></h2>
                            <h2 className='font-size-large'>hello guys! my name is <span className="stroke-text">olivia smith.</span></h2>
                        </div>
                    </div>
                    <div>
                        <div className="row m-0 ">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                                <img className='img-fluid w-100' src={AboutimgOne} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0 custom-bg-color">
                                <div className='  pt-100 ps-lg-5 pe-lg-4 px-3'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <i className="fas fa-circle li-icon-dots"></i>
                                        <h4>about me</h4>
                                    </div>
                                    <p className='fs-6 fw-bold'>crafting designs and stories, i find my inspiration in the vibrant streets of new york. exploring the intersection of creativity and innovation, i am dedicated to bringing visions to life through my work. join me on this journey of imagination and design.</p>
                                    <ul className='d-flex align-items-center gap-3 p-0 '>
                                        <li className='list-style-none'>
                                            <Link className='text-decoration-none'>fb</Link>
                                        </li>
                                        <li className='list-style-none'>
                                            <Link className='text-decoration-none'>tw</Link>
                                        </li>
                                        <li className='list-style-none'>
                                            <Link className='text-decoration-none'>In</Link>
                                        </li>
                                        <li className='list-style-none'>
                                            <Link className='text-decoration-none'>pi</Link>
                                        </li>
                                    </ul>
                                    <div className="row pt-lg-3 mb-4 ">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className='d-flex align-items-center gap-1'>
                                                <i className="fas fa-circle li-icon-dots"></i>
                                                <h4 className='py-lg-3'>awards</h4>
                                            </div>
                                            <p>2014 - aliquam sodales justo sit <br />
                                                2016 - smet urna auctor <br />
                                                2018 - delerisquinterdum  <br /> leo
                                            </p>

                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className='d-flex align-items-center gap-1'>
                                                <i className="fas fa-circle li-icon-dots"></i>
                                                <h4 className='py-lg-3'>skills</h4>
                                            </div>
                                            <p>expert level in adobe cs package fluent in written and spoken english video editing skill in final cut pro</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid py-lg-5'>
                <div className='custom-bottom-border  d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
                    <h2 className='font-size-large'>services</h2>
                    <p className='mt-5 d-md-block d-none'>/ triumphs in design</p>
                </div>
            </section>
            <section>
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 ps-lg-3">
                                <div className='custom-width'>
                                    <h2 className='d-flex align-items-center ps-3'>
                                        <i className="fa fa-circle li-icon-dots pe-2"></i>
                                        designing
                                    </h2>
                                    <p className='ps-3'>Fusce accumsan tincidunt erat et convallis risus ullamcorper euoled vehicula massa a massa cursus bendum leovel usce.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">

                                <p className='custom-border-bottom fs-5 '>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    website layout design
                                </p>
                                <p className='custom-border-bottom fs-5'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    brochure design packages
                                </p>
                                <p className='custom-border-bottom fs-5'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    brand identity <span className='ps-3'>dovelopment</span>
                                </p>
                                <p className='custom-border-bottom fs-5'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    logo creation serives
                                </p>
                                <p className='custom-border-bottom fs-5'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    business card creation
                                </p>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-end">
                                <img className='img-fluid custom-rounded-img' src={AboutTwo} width={350} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className='custom-width'>
                                    <h2 className='d-flex align-items-center'>
                                        <i className="fa fa-circle li-icon-dots pe-2"></i>
                                        development
                                    </h2>
                                    <p>Fusce accumsan tincidunt erat et convallis risus ullamcorper euoled vehicula massa a massa cursus bendum leovel usce.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">

                                <p className='custom-border-bottom fs-5 p-0 '>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    mobile and web
                                </p>
                                <p className='custom-border-bottom fs-5'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    database management
                                </p>
                                <p className='custom-border-bottom fs-5 p-0'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    content management solutions
                                </p>
                                <p className='custom-border-bottom fs-5 p-0'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    payment gateway integration
                                </p>
                                <p className='custom-border-bottom fs-5 p-0'>
                                    <span><i className="fa fa-circle li-icon-dots pe-2"></i></span>
                                    cloud comuting solutions
                                </p>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-end">
                                <img className='img-fluid custom-rounded-img' src={AboutTwo} width={350} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid py-lg-5'>
                <div className='custom-bottom-border  d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
                    <h2 className='font-size-large'>my work</h2>
                    <p className='mt-5 d-md-block d-none'>/ triumphs in design</p>
                </div>
            </section>
            <section className='slider-container'>
                <Slider  {...settings}>
                    {
                        serivesSilder.map((SerivesSliderValue, index) => (
                            <div className='custom-focus-visible' key={index}>
                                <div className='custom-imges-conatiner'>
                                    <img className='img-fluid px-3' src={SerivesSliderValue.imgesSilderSerives} alt="" />
                                </div>
                                <h2 className='ps-3'>{SerivesSliderValue.name}</h2>
                                <ul className='ps-lg-4 m-0'>
                                    <li className='ms-lg-2'>
                                        <Link className='text-decoration-none'>
                                            {SerivesSliderValue.title}
                                        </Link>
                                    </li>
                                    <li className='ms-lg-2'>
                                        <Link className='text-decoration-none'>
                                            {SerivesSliderValue.subtitle}
                                        </Link>
                                    </li>
                                    <li className='ms-lg-2'>
                                        <Link className='text-decoration-none'>
                                            {SerivesSliderValue.application}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </Slider>
            </section>
            <ReviewSilder/>
            <Footer/>
        </>
    )
}

export default About