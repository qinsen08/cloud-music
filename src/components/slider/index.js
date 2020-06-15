/*
 * @Author: qinsensen
 * @Date: 2020-06-15 19:26:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-15 22:45:10
 * @Description: 
 */
import React, { useState, useEffect } from 'react'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import { SliderContainer } from './style';
function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList } = props
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: { el: '.swiper-pagination' },
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])
  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((slider, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)