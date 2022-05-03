import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetail from "./components/card-detail/ItemDetail";
import ItemDetailContainer from "./components/card-detail/ItemDetailContainer";
import ItemCategory from "./components/categories/ItemCategory";
import ItemCategoryContainer from "./components/categories/ItemCategoryContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemCategoryContainer />} />
          <Route path="/category/:id" element={<ItemCategory />} />
          <Route path="/items" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
