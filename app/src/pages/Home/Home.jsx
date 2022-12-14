import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer>
        <span>greeting</span>
      </ItemListContainer>
    </div>
  );
}

export default Home;
