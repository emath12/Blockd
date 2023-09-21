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
        <>
        <div 
        key={id}
        className="
        bg-neutral-700 p-5 m-3 hover: border-black border-2 border-solid rounded-lg shadow-md \
         shadow-black transition-transform transform hover:scale-105">
            
            <div className='grid grid-cols-2'>
                <div className='col-start-1 col-span-2'>
                    <h1 className="underline text-lg font-bold text-white ">{props.title}</h1>
                    <div className='col-start-2 col-span-1'>
                        
                    </div>
                </div>
                
            </div>
            <p className="col-start-1 col-span-5 mt-2 mb-5 text-sm text-white">{props.text}</p>
            <p className='text-red-700 sm-2 ml-0 mr-0'>Due: {props.dueDate} </p>
            <div className='grid grid-cols-2'>
                <button className="bg-neutral-950 shadow-sm shadow-black rounded-lg p-2 hover:bg-slate-900 active:bg-slate-900 text-white col-start-1 col-span-1">
                    Reallocate
                </button>
                <div className='col-start-2 col-span-1 flex flex-col justify-end items-end'> 
                    <Checkbox 
                        onChange={handleCheckBoxClick}
                    />
                </div>   
            </div>

        </div>

        </>
    )
}