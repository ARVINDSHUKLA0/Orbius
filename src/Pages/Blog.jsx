import React from 'react'
import '../PagesStyle/Blog.css'
import Navbar from '../Component/Navbar.jsx'
// import BlogImgesOne from '/assets/img/photographyOne.jpg'
// import BlogImgesTwo from '/assets/img/photographyTwo.jpg'
// import BlogImgesThree from '/assets/img/photographyThree.jpg'
// import BlogImgesFour from '/assets/img/photographyFour.jpg'
// import BlogImgesFive from '/assets/img/photographyFive.jpg'
// import BlogImgesSix from '/assets/img/photographySix.jpg'
// import BlogImgesSeven from '/assets/img/designOne.jpg'
// import BlogImgesEight from '/assets/img/designTwo.jpg'
// import BlogImgesNav from '/assets/img/designThree.jpg'
import Footer from '../Component/Footer.jsx'
import { Link } from 'react-router-dom'
import BlogData from '../BlogData.js'

const Blog = () => {
  // const BlogArr = [
  //   { id : 1, Blogimg: BlogImgesOne, name: 'hushed whispers echo through ruins', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'design trends' },
  //   { id : 2, Blogimg: BlogImgesTwo, name: 'twinkling stars adorn the night sky', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'infographics' },
  //   { id : 3, Blogimg: BlogImgesThree, name: 'ancient ruins whisper tales of bygone eras', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'design trends' },
  //   { id : 4, Blogimg: BlogImgesFour, name: 'golden sunbeams dance upon waters ', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'photography' },
  //   { id : 5, Blogimg: BlogImgesFive, name: 'rippling brooks babble over smooth stones', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'design trends' },
  //   { id : 6, Blogimg: BlogImgesSix, name: 'velvet petals unfold in the sunshine', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'infographics' },
  //   { id : 7, Blogimg: BlogImgesSeven, name: 'majestic eagles soar above lofty peaks', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'design trends' },
  //   { id : 8, Blogimg: BlogImgesEight, name: 'echoing canyons sing songs of solitude', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'design trends' },
  //   { id : 9, Blogimg: BlogImgesNav, name: 'techniques for increased productivity', deception: 'Sed fringilla massa dignissim fringilla dignissim donec faucibus enim vitae ornare gravida phasellus', creativity: 'creativity' },
  // ]
  return (
    <>
      <Navbar />

      <section className='container-fluid py-lg-5'>
        <div className='custom-bottom-border  d-flex align-items-center gap-3  my-lg-5  my-md-4 my-sm-4'>
          <h2 className='font-size-large'>blog grid</h2>
          <h5 className='mt-5 d-md-block d-none'>/ discover the news</h5>
        </div>
      </section>

      <section>
        <div className="row m-0">
          <div className="col-lg-9 col-sm-12 col-12 offset-lg-3">
            <div className="row m-0">
              {BlogData.map((blogValue, index) => (
                <div key={index} className="col-lg-4 col-sm-6 col-12 mb-50 custom-sm-margin">
                  <div className='d-flex align-items-center'>
                    <div className='cutom-border'></div>
                    <p className='m-0 ps-2'>{blogValue.date}</p>
                    <i className="fas fa-circle li-icon-dots ps-2"></i>
                  </div>
                  <p className='m-0'>{blogValue.creativity}</p>
                  <h4 className='fw-bold my-lg-4 py-2'>{blogValue.name}</h4>
                  <img className='img-fluid' src={blogValue.image} alt="" />
                  <p className='m-0 py-lg-4 py-3'>{blogValue.title}</p>
                  <Link to={`/blog/${blogValue.id}`}>
                  <button className='custom-border'>read more</button>
                  </Link>
                  
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>

      <Footer/>
    </>
  )
}

export default Blog