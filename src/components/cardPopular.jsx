import { useNavigate } from "react-router-dom";
import star from "../assets/star.png";

const ShowPopularMovies = ({ popularMovies }) => {
  const navigate = useNavigate();
  return popularMovies.map((results) => {
    const date = new Date(results.release_date);
    const year = date.getFullYear();

    const handleClick = (movie) => {
      navigate(`movie/${movie.title}`);
    };

    return (
      <div
        className="relative h-56 w-40  bg-slate-400 m-2 border border-opacity-65  border-gray-700 rounded-lg hover:scale-110 hover:-translate-y-1 transition-all"
        key={results.id}
        onClick={() => handleClick(results)}
      >
        <img
          draggable="false"
          className="absolute size-full rounded-lg"
          src={`${import.meta.env.VITE_BASEIMGURL}/${results.poster_path}`}
        ></img>
        <div className="relative transition-all size-full rounded-lg opacity-0 hover:opacity-90 bg-gradient-to-t from-black  ">
          <div className="absolute pe-3  ps-2 text-sm font-semibold object-left-bottom flex flex-col h-auto inset-x-0 bottom-0 pb-4">
            <div>{results.title}</div>
            <div className=" font-normal text-xs">{year}</div>
            <div className="flex items-center font-normal">
              <img src={star} alt="" className="size-3 mr-1" />
              <span>{results.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ShowPopularMovies;
