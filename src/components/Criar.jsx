import { PlusCircle } from "@phosphor-icons/react"

export function Criar() {

    return (
        <>
             <button onClick={""} className=" flex justify-center items-center h-12 p-4 bg-azul-dark text-cinza-100 hover:bg-azul border-0 rounded-md font-bold text-sm transition-all">
            Criar <PlusCircle className="w-7 size-6"/>
          </button>
        </>
        
    )
}