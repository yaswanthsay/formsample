import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from '../images/shirt1.jpg';
import img2 from '../images/shirt2.jpg';
import img3 from '../images/shirt3.jpg'
import img4 from '../images/shirt4.jpg'

function Slider() {
  return (
    <div className='slider'>
        <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={img1} className="sliderimg" alt='img1'/>
      <img src={img2} className="sliderimg" alt='img2'/>
      <img src={img3} className="sliderimg" alt='img3'/>
      <img src={img4} className="sliderimg" alt='img4'/>
</AliceCarousel>
    </div>
  )
}

export default Slider