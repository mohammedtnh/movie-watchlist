import { addMovie } from "../store/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddMovie = (props) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(movie));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="Movie..."
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovie;
