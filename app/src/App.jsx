import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer>
        <span>greeting</span>
      </ItemListContainer>
    </div>
  );
}

export default App;
