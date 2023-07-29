import Checkbox from '@mui/joy/Checkbox';


export default function TodoItem(props: any) {

    const id = props.id

    const [activeTodos, setActiveTodos] = props.theActiveTodos;
    
    function handleCheckBoxClick() {
        
        let newActiveTodos = [...activeTodos];

        newActiveTodos = newActiveTodos.filter((todo: any) => {
            todo.id != id
        })

        setActiveTodos(newActiveTodos);

    }

    function handleReallocationClick() {
        // do something
    }
    
    return (
        <div className="
        bg-neutral-700 p-5 m-3 hover: border-black border-2 border-solid rounded-lg shadow-md \
         shadow-black transition-transform transform hover:scale-105">
            
            <div className='grid grid-cols-2'>
                <div className='col-start-1 col-span-1'>
                    <h1 className="text-weight text-white font-bold">{props.title}</h1>
                </div>
                <div className='col-start-2 col-span-1' style={{ justifySelf: 'end' }}>
                    <Checkbox 
                        onChange={handleCheckBoxClick}
                    />
                </div>
            </div>
            <br/>
            <div className="grid grid-cols-6">
                <p className="col-start-1 col-span-5 p-1 text-white">{props.text}</p>
                <button className="bg-neutral-950 border-solid border-white border h-full shadow-sm shadow-black rounded-lg hover:bg-slate-800 active:bg-slate-900 text-white">R</button>
            </div>
            <br/>
           
        </div>
    )
}