import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Students />
      <Products />
    </div>
  );
}

export default App;
