import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/img/before1.png", name: "Before" },
  { src: "/img/working1.png", name: "Working" },
  { src: "/img/after1.png", name: "After" },
  { src: "/img/roofing.png", name: "Roofing" },
  { src: "/img/windows.png", name: "Windows" },
  { src: "/img/bathroom.png", name: "Bathrooms" },
];

export default function ImageSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-gray-600 text-lg">- Our Jobs -</h3>
      </div>

      <div className="relative max-w-5xl mx-auto mt-8 mb-8">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          navigation={false}
          modules={[EffectCoverflow, Pagination]}
          className="tranding-slider mt-8"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="w-72 h-96 relative overflow-visible">
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl shadow-lg fixed-size"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/40 rounded-2xl">
                <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute left-1/2 transform -translate-x-1/2 top-[100%] mt-5 flex items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 bg-[#4559b5] rounded-full shadow-lg z-10 hover:bg-[#D4C2AE]"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <div className="custom-pagination flex [&>*]:mx-1 [&>*]:!bg-[#4559b5] [&>*]:opacity-100 [&>*]:w-3 [&>*]:h-3"></div>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 bg-[#4559b5] rounded-full shadow-lg z-10 hover:bg-[#D4C2AE]"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
