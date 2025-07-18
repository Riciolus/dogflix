import { useEffect, useState } from "react";
import { getPopularList } from "../API";
import Navbar from "../components/navbar";
import ShowMovies from "../components/cardMovie";

const PopularPages = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  return (
    <div className="bg-black  min-h-[100vh]">
      <Navbar />
      <div className="bg-black pt-8 text-white">
        <span className="ps-20 font-bold text-2xl  ">POPULAR MOVIES</span>
        <div className="flex flex-wrap mx-10 mt-5">
          <ShowMovies movies={popularMovies} />
        </div>
      </div>
    </div>
  );
};

export default PopularPages;
