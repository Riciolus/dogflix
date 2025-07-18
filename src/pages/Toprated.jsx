import { useEffect, useState } from "react";
import { getTopRated } from "../API";
import Navbar from "../components/navbar";
import ShowMovies from "../components/cardMovie";

const TopratedPages = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getTopRated().then((result) => {
      setTopRatedMovies(result);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black pt-8 text-white">
        <span className="ps-20 font-bold text-2xl  ">TOP RATED MOVIES</span>
        <div className="flex flex-wrap mx-10 mt-5">
          <ShowMovies movies={topRatedMovies} />
        </div>
      </div>
    </>
  );
};

export default TopratedPages;
