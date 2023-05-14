import { useEffect, useState } from "react";
import Card from "./card";
import { getMovies, getWatchList } from "../api/getMovies";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Movie } from "../types";

const Gallery = ({ dark, setDark }: any) => {
  const [data, setData] = useState<Movie[]>();
  const [movies, setMovies] = useState<Movie[]>();
  const [watchList, setWatchList] = useState<Movie[]>();
  const id = "1";

  const handleSearch = (e: any) => {
    const searchKey = e.target.value;
    if (searchKey) {
      const results = data?.filter((item) => {
        return item.title.toLowerCase().includes(searchKey.toLowerCase());
      });
      setData(results);
    } else {
      setData(movies);
    }
  };

  const getMovieList = async () => {
    const res = await getMovies();
    setMovies(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div>
      <div className="flex p-5 justify-around items-center text-xl">
        <div>
          <p className="font-[pattaya]">Movie Store</p>
        </div>
        <div className="flex items-center">
          <span className="p-1">Dark Mode</span>
          <input
            type="checkbox"
            className="toggle"
            onClick={() => setDark(!dark)}
          />
        </div>
        <div>
          <div className="collapse absolute top-3 w-72 ">
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">
              My WatchList
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <ol>
                {}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full bg-cover bg-hero-pattern flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold p-2 text-white">
          Search from a huge collection of movies
        </h2>
        <input
          type="text"
          placeholder="Search here"
          className="input w-full max-w-xl relative"
          onChange={handleSearch}
        />
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 6 }}
        className="p-2"
      >
        <Masonry gutter="1rem">
          {data?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              url={item.url}
              name={item.title}
              description={item.description}
              year={item.year}
              rating={item.rating}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
