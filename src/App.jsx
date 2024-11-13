import { Check } from "@phosphor-icons/react"
import { Input } from "./components/Input"
import { Criar } from "./components/Criar"
import { Item } from "./components/Item"
import { Lista } from "./components/Lista"
import { useState } from "react"




function App() {

  const [valorInput,setValorInput] = useState('')

  const [item, setItem] = useState([])

  const [contaId, setContaId] = useState(0)
  
  const criarItem = () => {
    const novoItem = {id: contaId, texto: valorInput, concluido: false}
    setItem ([...item, novoItem])
    setContaId(()=> contaId+=1)
    setValorInput('')
  }

  const removerItem = (id) => {
    setItem(item.filter((item) => item.id !== id));
  }

  const alternaConcluirItem = (id) =>{
    setItem(
      item.map((tarefa) => tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa)
    )
  }
  

  return (
    <div 
      className="
        min-h-screen w-screen
        bg-cinza-600 text-cinza-100 antialiased
      "
    >
      <header className="flex flex-1 justify-center items-center py-20 px-3 bg-neutral-900">
        <img src="/logo.svg" alt="" />
      </header>

      <section className="w-full max-w-3xl m-auto ">
        
        <div className="flex justify-between items-center gap-2 -translate-y-2/4">
          <Input value={valorInput} onChange={setValorInput}></Input>
          <Criar onClick={criarItem}></Criar>
        </div>


        {/* Lista */}
        <div className="flex flex-col gap-6">

          <Lista></Lista>

          <div className="flex flex-col gap-3">
          <Item
                id={tarefa.id}
                item={item}
                toggleConcluir={() => alternaConcluirItem(tarefa.id)}
                removerTarefa={() => removerItem(item.id)}
              />           


            

          </div>

        </div>

      </section>

    </div>
  )
}

export default App
