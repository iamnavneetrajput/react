import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Courseslist} from './Data'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './page.css';

export default function App() {
  return (
    <div className="swiper-container">
      <h3> Top Courses </h3>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          1000: {
            slidesPerView: 3
          },
          650: {
            slidesPerView: 2
          }

        }}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        {
          Courseslist.map(Course => (
            <SwiperSlide key={Courseslist.id}>
              <CustomCard {...Course}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
const CustomCard = ({ name, Description, buttonText, link }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{Description}</p>
      <a href={link} className="button">{buttonText}</a>
    </div>
  );
};
