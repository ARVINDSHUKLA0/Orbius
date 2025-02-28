import React from 'react'
import '../ComponentStyle/Footer.css'
import Logo from '/assets/img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='py-100'>
                    <section className='container-fluid'>
                        <div className="row m-0">
                            <div className="col-lg-5 col-sm-12 col-12 p-0">
                                <img  src={Logo} width={150} alt="" />
                                <p className='my-2'>© 2024 Softwebmedia Inc.</p>
                                <p className='py-lg-3 fw-bold'>lorem ipsum dolor sit amet consectetur aiscing elitum dolor id quamtis ac varius turpis dignisim usce ullacorper ligula vel odio fermentum nec bibendum</p>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-12 p-0  offset-lg-1">
                                <span className='text-decoration-light-weight'>
                                    <ul className='m-0 p-0'>
                                        <li className='list-style-none text-capitalize'>
                                             <Link className='f-decoration-none'>  useful links</Link>
                                            <ul className='p-0'>
                                                <li className='list-style-none text-capitalize py-1'>about company</li>
                                                <li className='list-style-none text-capitalize py-1'>our portfolio</li>
                                                <li className='list-style-none text-capitalize py-1 '>news & media</li>
                                                <li className='list-style-none text-capitalize py-1'>cantact us</li>
                                                <li className='list-style-none text-capitalize py-1 '>pricing plans</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-12 p-0">
                                <span className='text-decoration-light-weight'>
                                    <ul className='m-0 p-0'>
                                        <li className='list-style-none text-capitalize'>
                                            <Link className='f-decoration-none'>our services</Link>
                                            <ul className='p-0'>
                                                <li className='list-style-none text-capitalize py-1'>web design</li>
                                                <li className='list-style-none text-capitalize py-1'> digital printing </li>
                                                <li className='list-style-none text-capitalize py-1 '>social media</li>
                                                <li className='list-style-none text-capitalize py-1'>viral marketing</li>
                                                <li className='list-style-none text-capitalize py-1 '>photography</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-12 p-0">
                                <span className='text-decoration-light-weight'>
                                    <ul className='m-0 p-0'>
                                        <li className='list-style-none text-capitalize'>
                                         <Link className='f-decoration-none'>follow us</Link>
                                            <ul className='p-0 m-0'>
                                                <li className='list-style-none text-capitalize py-1'>facebook</li>
                                                <li className='list-style-none text-capitalize py-1'>behance</li>
                                                <li className='list-style-none text-capitalize py-1 '>twitter</li>
                                                <li className='list-style-none text-capitalize py-1'>instagram</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </span>
                            </div>


                        </div>
                    </section>
                </div>
                <div className='d-block py-lg-5 custom-border-top p-0 ps-2 py-3 d-md-flex container-fluid justify-content-between align-items-center'>
                    <div>
                        <p className='m-0'>call our office</p>
                        <h5 className='fw-bold'>+1 888 456 7890</h5>
                    </div>
                    <div>
                        <p className='m-0'>send a message</p>
                        <h5 className='fw-bold'>info@loremips.com</h5>
                    </div>
                    <div>
                        <p className='m-0'>our address</p>
                        <h5 className='fw-bold'>25 Elm Drive, Riverside, TX</h5>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer