import Button from "../components/Button";
import TodoItem from "./TodoItem";
import {useState} from "react"
import AddTodoForm from "./AddTodoForm";
import { TodoObject } from "./TodoObjects";

function Todo() {

  const [activeTodos, setActiveTodos] = useState<TodoObject[]>([]);

  return (
    <div className=
    "bg-neutral-900 rounded-lg border-solid border-neutral-50 shadow-[#000000] shadow-md m-2 col-start-1 col-span-1 row-start-1 row-span-4 flex flex-col">
      <h1 className="m-4 bg-neutral-800 text-white rounded-lg p-4 text-2xl font-extrabold text-center">
        Todo
      </h1>    
      <div className="row-start-1 row-span-3 grid grid-rows-3">
          {
            activeTodos.map((todo, index) => {
                return <TodoItem 
                          id={index}
                          key={index}
                          title={todo.title}
                          text={todo.description}
                          theActiveTodos={[activeTodos, setActiveTodos]}
                        />
            })
          }  
      </div>

      <div className="flex row-start-4 row-span-1 justify-center">
            <AddTodoForm
              theActiveTodos={[activeTodos, setActiveTodos]}
            />
        </div>
    </div>
  );
}

export default Todo;
