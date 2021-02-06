import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <>
      <SearchBarStyled
        onChange={(event) => props.setQuery(event.target.value.toLowerCase())}
        placeholder="Search movies..."
      ></SearchBarStyled>
    </>
  );
};

export default SearchBar;
