import { useSelector } from "react-redux";
import { useState } from "react";
import MovieItem from "./MovieItem";
import { Title, ListWrapper } from "../styles";
import SearchBar from "./SearchBar";

const Watched = () => {
  const movies = useSelector((state) => state.movies);
  const [query, setQuery] = useState("");

  const watched = movies
    .filter((movie) => movie.watched === true)
    .filter((movie) => movie.name.toLowerCase().includes(query))
    .map((movie) => <MovieItem key={movie.id} movie={movie} />);

  return (
    <>
      <Title>Watched {watched.length}</Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{watched}</ListWrapper>
    </>
  );
};

export default Watched;
