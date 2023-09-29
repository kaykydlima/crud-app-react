/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { BsFillTrashFill, BsPencilFill } from "react-icons/bs"
import { deleteProduct as deleteProductService } from "../services/product-service";

export default function ProductCard({ product, deleteProduct }) {

  function removeProduct() {
    deleteProductService(product.id)
      .then(() => deleteProduct())
      .catch(error => console.log(error))
  }


  return (
    <div>

      <div className="w-44 rounded-lg bg-white shadow-lg">
        <img src={product.image} alt="teste" className="w-fit rounded-t-lg" />
        <div className="p-3">

          <h2 className="text-lg font-bold mb-1">{product.name}</h2>
          <p className=" font-mono mb-3">{product.value}</p>
          <div className="mb-2 flex justify-between">
            <Link to={`/editar-produto/${product.id}`} className="bg-cyan-900 text-center text-white p-3 font-bold rounded-lg"><BsPencilFill /></Link>
            <button onClick={removeProduct} className="bg-red-800 text-center text-white p-3 font-bold rounded-lg"><BsFillTrashFill /></button>
          </div>
        </div>
      </div>
    </div>
  )
}