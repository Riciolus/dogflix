import { useEffect, useState } from "react";
import { getUpcoming } from "../API";
import Navbar from "../components/navbar";
import star from "../assets/star.png";

const UpcomingPages = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getUpcoming().then((result) => {
      setUpcomingMovies(result);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black pt-8 text-white">
        <span className="ps-20 font-bold text-2xl  ">UPCOMING MOVIES</span>
        <div className="flex flex-wrap mx-10 mt-5">
          {upcomingMovies.map((movie) => {
            const date = new Date(movie.release_date);
            const year = date.getFullYear();
            return (
              <div
                className="relative h-56 w-40  bg-slate-400 m-2 border border-opacity-65  border-gray-700 rounded-lg hover:scale-110 hover:-translate-y-1 transition-all"
                key={movie.id}
              >
                <img
                  draggable="false"
                  className="absolute size-full rounded-lg"
                  src={`${import.meta.env.VITE_BASEIMGURL}/${
                    movie.poster_path
                  }`}
                ></img>
                <div className="relative transition-all size-full rounded-lg opacity-0 hover:opacity-90 bg-gradient-to-t from-black  ">
                  <div className="absolute pe-3  ps-2 text-sm font-semibold object-left-bottom flex flex-col h-auto inset-x-0 bottom-0 pb-4">
                    <div>{movie.title}</div>
                    <div className=" font-normal text-xs">{year}</div>
                    <div className="flex items-center font-normal">
                      <img src={star} alt="" className="size-3 mr-1" />
                      <span>{movie.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UpcomingPages;
