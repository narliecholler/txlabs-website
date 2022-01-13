import { useState } from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import type InformationSwiperProps from './InformationSwiperProps';

const InformationSwiper = ({ slides }: InformationSwiperProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const navigationButtonClassName =
    'flex items-center justify-center w-10 h-10 border-2 border-white disabled:opacity-50';

  return (
    <div className="space-y-6 information-swiper">
      <Swiper
        className="w-full"
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<button class="${className}">0${index + 1}</button>`,
        }}
        navigation={{
          prevEl,
          nextEl,
        }}
        spaceBetween={32}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide className="space-y-6" key={slide.title}>
            <h3>{slide.title}</h3>
            <p>{slide.body}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-4">
        <button
          className={navigationButtonClassName}
          ref={(node) => setPrevEl(node)}
          aria-label="Go to previous slide"
        >
          <IoChevronBackOutline size={20} />
        </button>
        <button
          className={navigationButtonClassName}
          ref={(node) => setNextEl(node)}
          aria-label="Go to next slide"
        >
          <IoChevronForwardOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default InformationSwiper;
