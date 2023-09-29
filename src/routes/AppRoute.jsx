import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProducts from "../components/ListProducts";
import RegisterProduct from "../components/RegisterProduct";
import EditProduct from "../components/EditProduct";

export default function AppRoute() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/cadastrar-produtos" element={<RegisterProduct />}/>
        <Route path="/editar-produto/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  )
}