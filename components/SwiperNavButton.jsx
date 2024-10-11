import { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function SwiperNavButtons({ swiperRef }) {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const updateSlideState = () => {
    if (swiperRef.current) {
      setIsFirstSlide(swiperRef.current.swiper.isBeginning);
      setIsLastSlide(swiperRef.current.swiper.isEnd);
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      updateSlideState();
      swiper.on("slideChange", updateSlideState);
    }

    return () => {
      if (swiper) {
        swiper.off("slideChange", updateSlideState);
      }
    };
  }, [swiperRef]);

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
