import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/product-service";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getProductById(id)
      .then(resp => {
        setName(resp.name)
        setValue(resp.value)
      })
      .catch(error => alert(error))
  }, [id])

  async function saveUpdates(e) {
    e.preventDefault()
    const product = {
      id: id,
      name: name,
      value: value
    }
    
    await updateProduct(product)
      .then(() => console.log('funciona') )
      .catch(() => alert('Não foi possível realizar a alteração do valor do produto'))
  }

  return (
    <main>
      <Link to="/" className="mx-4 mt-5 block font-mono hover:underline">Inicio</Link>
      <h1 className="text-3xl font-bold my-7 text-center">Editar produto</h1>
      <form action="" method="post" className="flex flex-col items-center w-full gap-6">
        <label htmlFor="name" className="w-6/12">
          <h2 className="text-lg font-bold">Nome</h2>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Digite o nome do produto" required className="p-3 rounded-md border-spacing-1 border-slate-500 w-full bg-slate-200 placeholder-slate-600 outline-none" />
        </label>
        <label htmlFor="value" className="w-6/12">
          <h2 className="text-lg font-bold">Valor</h2>
          <input type="text" id="value" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Digite o valor (apenas numeros. Ex: 9,00)" required className="p-3 rounded-md border-spacing-1 border-slate-500 w-full bg-slate-200 placeholder-slate-600 outline-none" />
        </label>
        <button onClick={() => saveUpdates()} className="bg-red-800 text-white p-3 font-bold rounded-lg mb-2">Salvar</button>
      </form>
    </main>
  )
}