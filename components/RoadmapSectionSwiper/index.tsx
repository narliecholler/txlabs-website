/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/pagination"
import type RoadmapSectionSwiperProps from './RoadmapSectionSwiperProps';

const RoadmapSwiper = ({ slides }: RoadmapSectionSwiperProps) => (
  <Swiper
    className="useCaseSwiper"
    modules={[Pagination]}
    spaceBetween={32}
    breakpoints={{
      '768': {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      '1280': {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    }}
    pagination={true}
  >
    {slides.map((slide) => (
      <SwiperSlide
        className="w-full flex flex-col items-center !h-auto p-6 space-y-6 card"
        key={slide.title}
      >
        <img className="h-32" src={slide.imgSrc} alt={slide.title} />
        <h3 className="text-[2.5rem] text-center">{slide.title}</h3>
        <ul className="pl-6 space-y-4 list-disc">
          {slide.listItems.map((listItem) => (
            <li key={listItem}>{listItem}</li>
          ))}
        </ul>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default RoadmapSwiper;
