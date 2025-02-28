import React, { useEffect, useState } from 'react'
import '../PagesStyle/Portfolio.css'
import Navbar from '../Component/Navbar.jsx'
import ViedoOne from '/assets/video/orbius-video.mp4'
import AllPortfolioImage from '../AllPortfolioImage.js'
import Footer from '../Component/Footer.jsx'


const Portfolio = () => {
  const ImgLimit = 6;
  const [category, setCategory] = useState('')
  const [filterImages, setFilterImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const FilterDatafunc = () => {
    if (!category) {
      setFilterImages(AllPortfolioImage)
      return;
    }
    const res = AllPortfolioImage.filter(d => d.category == category)
    setFilterImages(res)
  }

  const paginationFunc = () => {
    if (filterImages.length > 0) {
      const totalPages = Math.ceil(filterImages.length / ImgLimit)
      setTotalPage(totalPages)
    }


  }

  useEffect(() => {
    FilterDatafunc()
    setCurrentPage(1)
  }, [category])

  useEffect(() => {
    paginationFunc()
  }, [filterImages])


  return (
    <>
      <Navbar />
      <section className='mb-50 mt-2'>
        <div className="container-fluid px-lg-4">
          <video autoPlay muted loop className='w-100 viedo-filter' src={ViedoOne}></video>
        </div>
      </section>
      <section className='mb-5'>
        <div className='d-flex flex-wrap align-items-center justify-content-center mb-50 gap-2'>
          <button onClick={() => setCategory('')} className={`custom-btn-product ${category == '' ? 'active' : ''}`}>show all</button>
          <button onClick={() => setCategory('branding')} className={`custom-btn-product ${category == 'branding' ? 'active' : ''}`}>branding</button>
          <button onClick={() => setCategory('design')} className={`custom-btn-product ${category == 'design' ? 'active' : ''}`}>design</button>
          <button onClick={() => setCategory('photography')} className={`custom-btn-product ${category == 'photography' ? 'active' : ''}`}>photography</button>
        </div>
        <div className="row m-0">
          {
            filterImages.slice((ImgLimit * currentPage) - ImgLimit, (ImgLimit * currentPage)).map((values) => (
              <div key={values.id} className="col-lg-4 col-sm-6 col-12 mb-4">
                <div>
                  <img className='img-fluid' src={values.image} alt="" />
                  <h3 className='fw-bold m-0 '>{values.name}</h3>
                  <p>
                    {values.category}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="d-flex justify-content-center mt-lg-4">

          {totalPage > 1 && Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={` mx-1 custom-round ${currentPage === page ? "pageination-text" : "bg-white"
                }`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>

      <Footer/>

    </>
  )
}

export default Portfolio
