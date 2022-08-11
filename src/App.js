import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/search";

function App() {
  const handleOnSearchChagne = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChagne} />
    </div>
  );
}

export default App;
