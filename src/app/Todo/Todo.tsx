import Button from "../components/Button";
import TodoItem from "./TodoItem";

function Todo() {


  function handleAddTodoClick() {
      // do something
  }

  return (
    <div className=
    "bg-neutral-900 rounded-lg border-solid border-neutral-50 shadow-[#000000] shadow-md m-2 col-start-1 col-span-1 row-start-1 row-span-4 flex flex-col">
      <div className="row-start-1 row-span-3 grid grid-rows-3">

          <h1 className="m-4 bg-neutral-800 text-white rounded-lg p-4 text-2xl font-extrabold text-center">
            Todo
          </h1>    

          <TodoItem 
            title={"Buy Groceries"}
            text={"This is a test to do item, let's see what happes when the text is longer!"}
          />  
          <TodoItem 
            title={"Buy Groceries"}
            text={"This is a test to do item, let's see what happes when the text is longer!"}
          />  
      </div>

      <div className="flex row-start-4 row-span-1 justify-center">
            <Button 
              text="Add Todo"
            />
        </div>
    </div>
  );
}

export default Todo;
