import React from 'react'
import '../ComponentStyle/ReviewSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReviwimgOne from '/assets/img/ReviewImgOne.png'
import ReviwimgTwo from '/assets/img/ReviewImgTwo.png'
import ReviwimgThree from '/assets/img/ReviewImgThree.png'


const ReviewSlider = () => { 
    const PrevArrow = ({ onClick }) => {
        return <button className="custom-arrow custom-prev" onClick={onClick}><i className="fa-solid fa-arrow-left"></i></button>;
      };
    const NextArrow = ({ onClick }) => {
        return <button className="custom-arrow custom-next" onClick={onClick}><i className="fa-solid fa-arrow-right"></i></button>;
      };

      
        const settings = {
          dots: false,          
          infinite: true,      
          speed: 500,          
          slidesToShow: 1,      
          slidesToScroll: 1,   
          autoplay: true,       
          autoplaySpeed: 2000, 
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />
          
        };

        const ReviwArr = [
            {description : 'uipsum dolor sit amet consectetur adipiscing elit sed ac eros metus integer fermentum metus nec euismod nulla nullam nec metus nunc phasellus eu fermentum lectus vivamus vel quam', imges :ReviwimgOne, name : 'jenny smith', department  : 'art director'},
            {description : 'uipsum dolor sit amet consectetur adipiscing elit sed ac eros metus integer fermentum metus nec euismod nulla nullam nec metus nunc phasellus eu fermentum lectus vivamus vel quam', imges : ReviwimgTwo, name : 'ryan taylor', department  : 'copy writer'},
            {description : 'uipsum dolor sit amet consectetur adipiscing elit sed ac eros metus integer fermentum metus nec euismod nulla nullam nec metus nunc phasellus eu fermentum lectus vivamus vel quam', imges : ReviwimgThree,  name : 'ashley perez', department  : 'evnet planner'},
        ]
  return (
    <>
      <div className='overflow-hidden slick-slider-custom container-fluid'>
          <Slider className='review-main-conatiner mb-5' {...settings}>
              {
                ReviwArr.map((ReviwValue, index)=>(
                <div key={index} className='d-flex align-items-sm-center'>
                    <div>
                         <p className='font-size-silder-hedding'>{ReviwValue.description}</p>
                         <div className='d-flex align-items-center mt-4 gap-4'>
                             <div className='rounded-carcel-custom'>
                                <img src={ReviwValue.imges} alt="" />
                             </div>
                             <div>
                                 <h5 className='m-0'>{ReviwValue.name}</h5>
                                 <p>{ReviwValue.department}</p>
                             </div>
                         </div>
                    </div>
                </div>
                ))
              }
          </Slider>
      </div>
    </>
  )
}

export default ReviewSlider