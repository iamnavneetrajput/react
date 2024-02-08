import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './page.css';


export default function App() {
  return (
    <div className="swiper-container">
      <h3>List Of Courses We Provides </h3>
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
        <SwiperSlide>
          <CustomCard name="JavaScript" description="Learn JavaScript from basic to advance" buttonText="View Course" buttonLink="#" />
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard name="React" description="Learn React from basic to advance" buttonText="View Course" buttonLink="#" />
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard name="Node.Js" description="Learn Node.js from basic to advance" buttonText="View Course" buttonLink="#" />
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard name="Mongodb" description="Learn Mongodb from basic to advance" buttonText="View Course" buttonLink="#" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
const CustomCard = ({ name, description, buttonText, buttonLink }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={buttonLink} className="button">{buttonText}</a>
    </div>
  );
};
