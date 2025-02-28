  import React, { useState } from 'react';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination, Autoplay } from 'swiper/modules';

  import BannerOne from '/assets/img/Banner-1.jpeg';
  import BannerTwo from '/assets/img/Banner-2.jpeg';
  import BannerThree from '/assets/img/Banner-3.jpg';
  import BannerFour from '/assets/img/Banner-4.jpg';
  import BannerFive from '/assets/img/Banner-5.jpg';
  import BannerSix from '/assets/img/Banner-6.jpg';

  import '../ComponentStyle/Banner.css';
  
  const slidesData = [
    { Bannerimg: BannerOne, name: 'The art of brand ' },
    { Bannerimg: BannerTwo, name: 'communication' },
    { Bannerimg: BannerThree, name: 'creating impactful' },
    { Bannerimg: BannerFour, name: 'web solutions' },
    { Bannerimg: BannerFive, name: 'creating dynamic' },
    { Bannerimg: BannerSix, name: 'web interactions' },
  ];
  
  const chunkArray = (arr, size) => {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedSlides = chunkArray(slidesData, 2);

  const Banner = () => { 
    const [activeIndex, setActiveIndex] = useState(0);
  
    const renderAnimatedLetters = (text, slideIndex) => {
      return text.split('').map((letter, i) => (
        <span
          key={i}
          className={`animate-letter ${activeIndex === slideIndex ? 'active' : ''}`}
          style={{ animationDelay: `${i * 0.1}s`,marginRight: letter === ' ' ? '20px' : '0px' }}
        >
          {letter}
        </span>
      ));
    };

    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {groupedSlides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="container-fluid py-lg-5 py-sm-3 py-md-4 mt-100 position-relative">
              <div className="row"> 
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="main-conatiner-banner-left">
                    <img
                      className="imges-cover-contanier-left"
                      src={group[0].Bannerimg}
                      alt={`Banner ${index * 2 + 1}`}
                    />
                    <div className="banner-content">
                      <h2 className="banner-text">
                        {renderAnimatedLetters(group[0].name, index)}
                      </h2>
                      <h2 className="banner-text">
                        {renderAnimatedLetters(group[1].name, index)}
                      </h2>
                    </div>
                  </div>
                </div> 
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="main-conatiner-banner-right">
                    <img
                      className="imges-cover-contanier-right"
                      src={group[1].Bannerimg}
                      alt={`Banner ${index * 2 + 2}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default Banner;
