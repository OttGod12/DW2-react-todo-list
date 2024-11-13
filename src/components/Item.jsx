import { Lixeira } from "./Lixeira"
import { Check } from "@phosphor-icons/react"
import { Checkbox } from "./Checkbox"
export function Item(props) {
  
    return (
        <>
            <div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
              <div className="flex">
                <label htmlFor="checkbox" className="flex items-center gap-3 p-1">
                 <Checkbox check={props}></Checkbox>
                  <p>
                    Tarefa 1
                  </p>
                </label>
              </div>
              <Lixeira></Lixeira>
            </div> 
        </>

        
    )
}