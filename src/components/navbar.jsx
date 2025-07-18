import { useState } from "react";

import logo from "../assets/logoDogflix.jpg";
import star from "../assets/star.png";
import { Link } from "react-router-dom";
import { searchMovie } from "../API";

const Navbar = () => {
  const [moviesOnSearch, setMovieOnSearch] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const search = async (params) => {
    if (params.length >= 3) {
      const query = await searchMovie(params);
      setMovieOnSearch(query);
      setShowSearchResult(true);
    } else if (params.length < 3) {
      setShowSearchResult(false);
    }
  };

  const SearchResult = () => {
    if (showSearchResult && isFocus && moviesOnSearch.length > 0) {
      return (
        <div className="absolute h-4/5  mt-3 w-[312px] overflow-visible bg-black opacity-80 hover:opacity-85 transition-all rounded-b-lg">
          <div className="opacity-100 grid">
            {moviesOnSearch.slice(0, 5).map((movie) => {
              return (
                <Link
                  to={`movie/${movie.title}`}
                  className="flex items-center emmy-1 mx-2 h-28 border-b  border-gray-600 "
                  key={movie.id}
                >
                  <img
                    draggable="false"
                    className="rounded-lg  h-24 w-auto"
                    src={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`}
                  ></img>
                  <div>
                    <div className="ps-1 pt-2 text-balance text-xs font-bold">
                      {movie.title}
                    </div>
                    <div className="flex items-center ps-1 pt-2 text-balance text-xs font-bold">
                      <img src={star} alt="" className="size-3 mr-1" />
                      {movie.vote_average}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <Link className="text-xs font-medium flex justify-center my-2 text-red-700 underline italic">
              View All Result
            </Link>
            <div className="text-sm flex justify-end  ">
              <button onClick={() => setIsFocus(false)} className="w-fit px-3">
                Close
              </button>
            </div>
          </div>
        </div>
      );
    } else if (showSearchResult && isFocus) {
      return (
        <div className="absolute h-20  mt-3 w-[312px] overflow-visible bg-black opacity-70 hover:opacity-75 transition-all rounded-b-lg">
          <div className="opacity-100  text-base flex justify-center pt-5">
            Movies Not Found
          </div>
        </div>
      );
    }
  };

  return (
    <nav className=" bg-black text-white h-16  ps-4 pe-4 items-center  text-lg flex justify-between">
      <div className="w-1/2 h-full flex items-center">
        <Link to="/">
          <img
            className="size-16 object-contain mx-3 hover:scale-110 transition"
            src={logo}
            alt=""
          />
        </Link>
        <Link to={"/popular"} className="mx-3" href="">
          Popular
        </Link>
        <Link to="/top-rated" className="mx-3" href="">
          Top Rated
        </Link>
        <Link to="/upcoming" className="mx-3" href="">
          Upcoming
        </Link>
      </div>
      <div className="static z-10  " onFocus={() => setIsFocus(true)}>
        <input
          className="ps-2 mx-5 rounded-md text-sm  font-semibold h-9 w-64 bg-gradient-to-r from-orange-800 to-violet-950 bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%]  transition-all duration-500 focus:to-red-500  "
          type="text"
          placeholder="Search..."
          onChange={(target) => search(target.currentTarget.value)}
        ></input>

        <SearchResult />
      </div>
    </nav>
  );
};

export default Navbar;
