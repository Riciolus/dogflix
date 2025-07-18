import { useEffect, useState } from "react";
import { getUpcoming } from "../API";
import Navbar from "../components/navbar";
import ShowMovies from "../components/cardMovie";

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
          <ShowMovies movies={upcomingMovies} />
        </div>
      </div>
    </>
  );
};

export default UpcomingPages;
