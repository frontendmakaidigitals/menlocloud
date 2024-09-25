import { useSwiper } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";

export default function SwiperNavButtons({ swiperRef }) {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiper = swiperRef.current?.swiper;

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const updateSlideState = () => {
    if (swiper) {
      setIsFirstSlide(swiper.isBeginning);
      setIsLastSlide(swiper.isEnd);
    }
  };

  useEffect(() => {
    if (swiper) {
      updateSlideState();
      swiper.on('slideChange', updateSlideState);
    }

    // Clean up the event listener on unmount
    return () => {
      if (swiper) {
        swiper.off('slideChange', updateSlideState);
      }
    };
  }, [swiper]);

  return (
    <div className="flex items-center gap-3">
      <button
        className="p-2 bg-gray-900 hover:bg-black rounded-full text-3xl text-gray-50 disabled:bg-gray-400"
        onClick={handlePrev}
        disabled={isFirstSlide}
      >
        <GoArrowLeft />
      </button>
      <button
        className="p-2 bg-gray-900 hover:bg-black rounded-full text-3xl text-gray-50 disabled:bg-gray-400"
        onClick={handleNext}
        disabled={isLastSlide}
      >
        <GoArrowRight />
      </button>
    </div>
  );
}
