import { useEffect, useState } from "react";
import { getNowplayList, getPopularList } from "../API";
import Navbar from "../components/navbar";
import ShowPopularMovies from "../components/cardPopular";
import MoviesSlider from "../components/moviesSlider";

const Mainboard = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowplay, setNowplay] = useState([]);

  useEffect(() => {
    getPopularList().then((result) => {
      setPopularMovies(result);
    });
    getNowplayList().then((result) => {
      setNowplay(result);
    });
  }, []);

  // APP RETURN
  return (
    <div className=" from-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MOVIE SLIDER */}
      <MoviesSlider nowplay={nowplay} />

      {/* POPULAR MOVIES */}
      <div className="bg-black pt-8 ">
        <span className="ps-20 font-bold text-2xl ">POPULAR</span>
        <div className="flex flex-wrap mx-10 mt-5">
          <ShowPopularMovies popularMovies={popularMovies} />
        </div>
      </div>
    </div>
  );
};

export default Mainboard;
