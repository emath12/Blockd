import Checkbox from '@mui/joy/Checkbox';


export default function TodoItem({ title, text }: { title: string, text: string}): JSX.Element {
    
    function handleCheckBoxClick() {
        // do something
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
                    <h1 className="text-weight text-white font-bold">{title}</h1>
                </div>
                <div className='col-start-2 col-span-1' style={{ justifySelf: 'end' }}>
                    <Checkbox />
                </div>
            </div>
            <br/>
            <div className="grid grid-cols-6">
                <p className="col-start-1 col-span-5 p-1 text-white">{text}</p>
                <button className="bg-neutral-950 h-full rounded-lg text-white">-</button>
            </div>
            <br/>
           
        </div>
    )
}