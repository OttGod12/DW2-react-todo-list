import { useState } from "react"

export function Input() {

    let [Filled, setFilled] = useState(false)

    return (
        <>
{ Filled ? (<input onChange={(event) => {if(event.target.value == ""){setFilled(false)}}} className="
            bg-cinza-500 text-cinza-100
              border-[1px] border-purple-500 rounded-md
              h-12 p-4 leading-normal outline-none
              w-full"
              type="text" />)
            : (
            <input onInput={() => setFilled(true)} className="
            bg-cinza-500 text-cinza-100
              border-[1px] border-cinza-700 outline- rounded-md
              h-12 p-4 leading-normal
              w-full outline-none" type="text" />)}
            
        
        </>
        
    )
}