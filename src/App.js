import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/card-detail/ItemDetailContainer";
import ItemListContainer from "./components/cards/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
