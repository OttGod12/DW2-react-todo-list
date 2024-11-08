export function Checkbox(props) {

    return (
        <>
            {!props.check ? (<div>
                <input type="checkbox" className="hidden"/>
                <span className="rounded-full w-4 h-4 flex items-center justify-center border-2 border-blue-500 hover:border-blue-300">
                </span>
            </div>)
            :            
            (<div>
                <input type="checkbox" className="hidden"/>
                <span className="rounded-full w-4 h-4 flex items-center justify-center border-2 border-blue-500 hover:border-blue-300">
                </span>
            </div>)}
        </>
    )
}