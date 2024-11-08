import { Check } from "@phosphor-icons/react"
import { Input } from "./components/Input"
import { Lixeira } from "./components/Lixeira"
import { Criar } from "./components/Criar"
import { Item } from "./components/Item"







function App() {
  

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
          <Input ></Input>
          <Criar></Criar>
        </div>


        {/* Lista */}
        <div className="flex flex-col gap-6">

          <header className="flex flex-1 justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-azul">
              <p className="text-sm">Tarefas criadas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                2
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-roxo">
              <p className="text-sm">Concluídas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                1 de 2
              </span>
            </div>
          </header>

          <div className="flex flex-col gap-3">
            <Item check={false}></Item>
            <Item check={true}></Item>


            

          </div>

        </div>

      </section>

    </div>
  )
}

export default App
