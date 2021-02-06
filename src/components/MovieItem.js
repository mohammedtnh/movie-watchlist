import { MovieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import WatchButton from "./buttons/WatchButton";

const MovieItem = (props) => {
  const movie = props.movie;

  return (
    <MovieWrapper>
      <p>{movie.name}</p>
      <DeleteButton movieId={movie.id} />
      <WatchButton movieId={movie.id} />
    </MovieWrapper>
  );
};

export default MovieItem;
