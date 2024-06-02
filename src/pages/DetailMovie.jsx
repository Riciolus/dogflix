import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGenreList, getPopularList } from "../API";
import Navbar from "../components/navbar";
import star from "../assets/star.png";

const DetailMovie = () => {
  const params = useParams([]);
  const [movies, setMovies] = useState([]);
  const [mov, setMov] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getPopularList().then((result) => {
      setMovies(result);
    });
    getGenreList().then((id) => {
      setGenreList(id);
    });
  }, []);

  useEffect(() => {
    const findedMovie = movies.find((movies) => movies.title == params.title);
    setMov(findedMovie);
  }, [movies]);

  useEffect(() => {
    if (mov && typeof mov === "object" && Array.isArray(mov.genre_ids)) {
      const findGenreIDS = mov.genre_ids;
      const findedGenre = genreList.filter((item) =>
        findGenreIDS.includes(item.id)
      );

      setGenre(findedGenre);
    }
  }, [mov]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Invalid date";
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  return (
    <div>
      {mov ? (
        <div>
          <Navbar />
          <div className="px-32 bg-black">
            <div className="relative w-full h-[350px]">
              {/* bg film */}
              <img
                draggable="false"
                className="absolute w-full h-full object-cover"
                src={`${import.meta.env.VITE_BASEIMGURL}/${mov.backdrop_path}`}
              ></img>
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-black  w-full">
                .
              </div>
              {/* card poster */}
              <img
                src={`${import.meta.env.VITE_BASEIMGURL}/${mov.poster_path}`}
                alt=""
                className="absolute h-full -bottom-36 left-28 border-lime-100  shadow-black shadow-lg rounded-lg"
              />
              {/* Atribute */}
              <div className="absolute  text-white  left-80 ps-11 drop-shadow-xl pt-72 ">
                {/* TITLE */}
                <div className="pb-6 text-4xl font-bold">{mov.title}</div>
                {/* DESC */}
                <div className="text-sm font-normal  w-3/4">{mov.overview}</div>
                {/* VOTE */}
                <div className="flex text-base font-normal pt-1">
                  <span className="pr-3 flex items-center ">
                    <img src={star} className="size-4 mr-1" alt="" />
                    {mov.vote_average ? mov.vote_average.toFixed(1) : "0"}
                  </span>
                  <span className="">{`(${mov.vote_count} Votes)`}</span>
                </div>
                {/* RELEASE DATE */}
                <div className="">
                  Release Date : {formatDate(mov.release_date)}
                </div>
                {/* GENRES */}
                <div className="flex pt-3">
                  {genre.map((item) => {
                    return (
                      <div
                        className="border rounded-xl px-2.5 border-indigo-700  mx-1"
                        key={item.id}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* AFTER CARD */}
            <div className="bg-black text-white h-screen"></div>
          </div>
        </div>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

export default DetailMovie;
