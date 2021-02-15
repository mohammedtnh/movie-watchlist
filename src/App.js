import "./App.css";
import AddMovie from "./components/AddMovie";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <>
      <AddMovie />
      <Watchlist />
      <Watched />
    </>
  );
}

export default App;
