import { WatchButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../store/actions";
import { useSelector } from "react-redux";

const WatchButton = ({ movieId }) => {
  const dispatch = useDispatch();
  const foundMovie = useSelector((state) =>
    state.movies.find((movie) => movie.id === movieId)
  );

  return (
    <WatchButtonStyled onClick={() => dispatch(updateMovie(movieId))}>
      {foundMovie.watched === true ? "Unwatch" : "Watched"}
    </WatchButtonStyled>
  );
};

export default WatchButton;
