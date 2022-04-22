import "./App.css";
import ItemListContainer from "./components/container/ItemListContainer";
import NavBar from "./components/navigation-top/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Hello world!..." />
    </>
  );
}

export default App;
