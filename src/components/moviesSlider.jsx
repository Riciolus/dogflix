import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax } from "swiper/modules";
import star from "../assets/star.png";
import "swiper/css";
import "swiper/css/pagination";

// MOVIES SLIDER
const MoviesSlider = ({ nowplay }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={600}
      parallax={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Parallax]}
      className="mySwipe bg-black h-[520px]"
    >
      {nowplay.map((movie) => {
        return (
          <SwiperSlide className="static pb-32" key={movie.id}>
            <img
              draggable="false"
              className="absolute max-h-full w-full  object-center object-cover  "
              src={`${import.meta.env.VITE_BASEIMGURL}/${movie.backdrop_path}`}
            ></img>
            <div className="absolute ps-24 pt-60 font-extrabold text-4xl w-full">
              {movie.title}
            </div>
            <div className="absolute flex ps-24 pt-72 font-semibold text-lg w-full">
              <div>{movie.release_date}</div>
              <div className="ml-4 flex items-center">
                <img src={star} alt="" className="size-4 mr-1" />
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <div className="absolute ps-24 pt-80 font-semibold text-xs w-1/2 italic">
              {movie.overview}
            </div>
            <div className="absolute bg-gradient-to-t from-black to-transparent  w-full bottom-0 h-36"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MoviesSlider;
