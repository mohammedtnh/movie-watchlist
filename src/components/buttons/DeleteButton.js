import { DeleteButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../store/actions";

const DeleteButton = ({ movieId }) => {
  const dispatch = useDispatch();

  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteMovie(movieId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
