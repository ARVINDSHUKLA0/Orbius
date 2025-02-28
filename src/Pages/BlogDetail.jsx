import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Slider from 'react-slick';
import BlogData from '../BlogData';
const BlogDetail = () => {
    const { id } = useParams();
       const blog = BlogData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <h2>Blog not found</h2>;
    }
    const filteredBlogs = BlogData.filter((b) => b.id !== parseInt(id));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
            <Navbar />
            <section className='container-fluid'>
                <div className='blog-details-conatiner'>
                    <img className='w-100 d-block mx-auto my-4' src={blog.image} alt={blog.name} />
                </div>
                <div className='py-5'>
                    <h4 className='text-capitalize'> name : {blog.name} </h4>
                    <h6 className='text-capitalize'> category : {blog.category}</h6>
                    <p className='text-capitalize mt-lg-5'> <span className='fw-bold fs-4'>description : </span> {blog.description}</p>
                </div>
            </section>

            <section className='container-fluid overflow-hidden mb-lg-5'>
                <Slider {...settings}>
                    {filteredBlogs.map((item) => (
                        <div key={item.id} className='p-3'>
                            <div className='d-flex align-items-center'>
                                <div className='cutom-border'></div>
                                <p className='m-0 ps-2'>{item.date}</p>
                                <i className="fas fa-circle li-icon-dots ps-2"></i>
                            </div>
                            <p className='m-0'>{item.creativity}</p>
                            <h4 className='fw-bold my-lg-4 py-2'>{item.name}</h4>
                            <img className='img-fluid' src={item.image} alt="" />
                            <p className='m-0 py-lg-4 py-3'>{item.title}</p>
                            <Link to={`/blog/${item.id}`}>
                                <button className='custom-border'>read more</button>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </section>
            <Footer />
        </>
    );
};

export default BlogDetail;
