import { useSwiper } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
export default function SwiperNavButtons({ swiperRef }) {
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button className="p-2 bg-gray-900 rounded-full text-3xl text-gray-50 " onClick={handlePrev}>
        <GoArrowLeft />
      </button>
      <button className="p-2 bg-gray-900 rounded-full text-3xl text-gray-50 " onClick={handleNext}>
        <GoArrowRight />
      </button>
    </div>
  );
}
