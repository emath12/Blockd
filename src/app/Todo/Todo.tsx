import { AddTodoButton } from "./AddTodoButton";
import Button from "../components/Button";

function Todo() {
  return (
    <div className=
    "bg-neutral-900 rounded-lg border-solid border-neutral-50 shadow-[#000000] shadow-md m-2 col-start-1 col-span-1 row-start-1 row-span-4 flex flex-col">
      <div className="grid grid-rows-3"> {/* Adjust the number of rows if needed */}
        <h1 className="m-4 row-start-1 row-span-1 bg-neutral-800 text-white rounded-lg p-4 text-2xl font-extrabold text-center">
          Todo
        </h1>
      </div>

      <div className="flex-grow"></div> 
      
      <div className="flex justify-center">
        <Button 
          text="Add Todo"
        />
      </div>
    </div>
  );
}

export default Todo;
