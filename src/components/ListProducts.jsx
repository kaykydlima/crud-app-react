import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getProduct } from "../services/product-service";

export default function ListProducts(){
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProduct().then(resp => setProducts(resp)).catch(e => console.log(e))
  }, [])
  
  console.log(products)

  function handleProductDelete(productRemoved) {
    const updatedProducts = products.filter((product) => product.id !== productRemoved);
    setProducts(updatedProducts);
  }

  return(
    <main>
      <h1 className="text-3xl font-bold my-7 text-center">Lista de Produtos</h1>
      <div className="flex flex-col items-center">
      <Link to='/cadastrar-produtos' className="bg-red-800 text-white p-3 font-bold rounded-lg mb-5">Cadastrar produto</Link>
        <div className="flex flex-wrap gap-6 max-[600px]:flex-col max-[600px]:items-center justify-center">
          { products.length === 0 ? <h2>Não há produtos cadastrados</h2> : products.map(product => <ProductCard product={product} deleteProduct={() => handleProductDelete(product.id)} key={product.id} />)}
        </div>
      </div>
    </main>
  )
}