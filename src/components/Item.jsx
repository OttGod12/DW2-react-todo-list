import { Lixeira } from "./Lixeira"
import { Check } from "@phosphor-icons/react"
import { Checkbox } from "./Checkbox"
export function Item(props) {
  
    return (
        <>
            {!props.check ? (<div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
              <div className="flex">
                <label htmlFor="checkbox" className="flex items-center gap-3 p-1">
                 <Checkbox check={props}></Checkbox>
                  <p>
                    Tarefa 1
                  </p>
                </label>
              </div>
              <Lixeira></Lixeira>
            </div>) : (<div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
              <div className="flex">
                <label htmlFor="checkbox" className="flex items-center gap-3 p-1">
                  <input type="checkbox" className="hidden" checked="true"/>
                  <span 
                    className="
                      rounded-full w-4 h-4 flex items-center justify-center 
                      border-2 border-roxo-dark bg-roxo-dark"
                  >
                    <Check/>
                  </span>
                  <p className="text-cinza-300 line-through">
                    Tarefa 1
                  </p>
                </label>
              </div>
              <Lixeira></Lixeira>
            </div>)}
        </>
    )
}