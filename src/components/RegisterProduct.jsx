import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"

import { createProduct } from "../services/product-service"
import { useState } from "react";

export default function RegisterProduct() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [value, setValue] = useState('')


  async function saveProduct(event) {
    event.preventDefault()

    const product = {
      id: uuidv4(),
      name,
      image,
      value: value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    if(name.length > 0  && image.length > 0  && value.length > 0)  {
      await createProduct(product)
    .then(() => alert(`produto ${product.name} salvo com sucesso`))
      .catch(() => alert('Não foi possível salvar o produto') )

      setName('')
      setImage('')
      setValue('')
    } else alert('Digite valores corretos nos campos')
      

  }

  return (
    <main>
      <Link to="/" className="mx-4 mt-5 block font-mono hover:underline">Inicio</Link>
      <h1 className="text-3xl font-bold my-7 text-center">Cadastrar novo produto</h1>
      <form action="" method="post" className="flex flex-col items-center w-full gap-6">
        <label htmlFor="name" className="w-6/12">
          <h2 className="text-lg font-bold">Nome</h2>
          <input type="text" onChange={(e) => setName(e.target.value.trim())} id="name" placeholder="Digite o nome do produto" required className="p-3 rounded-md border-spacing-1 border-slate-500 w-full bg-slate-200 placeholder-slate-600 outline-none" />
        </label>
        <label htmlFor="image" className="w-6/12">
          <h2 className="text-lg font-bold">URL Imagem</h2>
          <input type="text" onChange={(e) => setImage(e.target.value.trim())} id="image" placeholder="Digite a URL da imagem" required className="p-3 rounded-md border-spacing-1 border-slate-500 w-full bg-slate-200 placeholder-slate-600 outline-none" />
        </label>
        <label htmlFor="value" className="w-6/12">
          <h2 className="text-lg font-bold">Valor</h2>
          <input type="text" onChange={(e) => setValue(e.target.value.trim())} id="value" placeholder="Digite o valor (apenas numeros. Ex: 9,00)" required className="p-3 rounded-md border-spacing-1 border-slate-500 w-full bg-slate-200 placeholder-slate-600 outline-none" />
        </label>
        <button className="bg-red-800 text-white p-3 font-bold rounded-lg mb-2" onClick={saveProduct}>Salvar</button>
      </form>
    </main>
  )
}