import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './subscription.css';
import { PricingData } from '../../pages/Data';
import PageHeader from "../PageHeader/PageHeader";
const Subscription = () => {
    return (
        <div className='main'>
              <PageHeader
                    title="Subscription"
                    paragraph='Choose Best  Suited Plan for Your Needs'
                    buttonText='Know your best plan'
                    className='home-image'
                />
            <div className="swiper-container subscription">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
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
                    {PricingData.map(pricing => (
                        <SwiperSlide key={pricing.id}>
                            <CustomCard {...pricing} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

const CustomCard = ({ name, price, description, features, buttonText, buttonLink }) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <p>{features}</p>
            <a href={buttonLink} className="button">{buttonText}</a>
        </div>
    );
}

export default Subscription;
