import { useSelector } from "react-redux";
import { useState } from "react";
import MovieItem from "./MovieItem";
import { Title, ListWrapper } from "../styles";
import SearchBar from "./SearchBar";

const Watchlist = () => {
  const movies = useSelector((state) => state.movies);
  const [query, setQuery] = useState("");

  const watchlist = movies
    .filter((movie) => movie.watched === false)
    .filter((movie) => movie.name.toLowerCase().includes(query))
    .map((movie) => <MovieItem key={movie.id} movie={movie} />);

  return (
    <>
      <Title>Watchlist {watchlist.length}</Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{watchlist}</ListWrapper>
    </>
  );
};

export default Watchlist;
