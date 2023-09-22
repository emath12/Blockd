import Button from "../components/Button";
import TodoItem from "./TodoItem";
import {useState} from "react"
import AddTodoForm from "./AddTodoForm";
import { TodoObject } from "./TodoObjects";
import { C } from "@fullcalendar/core/internal-common";

function Todo() {

  const [activeTodos, setActiveTodos] = useState<TodoObject[]>([]);

  return (
    <div className=
    "bg-neutral-900 rounded-lg border-solid border-neutral-50 shadow-[#000000] shadow-md m-2 col-start-1 col-span-1 row-start-1 row-span-4 flex flex-col">
      <h1 className="m-4 bg-neutral-800 text-white rounded-lg p-4 text-2xl font-extrabold text-center">
        Todo
      </h1>    
      <div className="break-words">
          {
            activeTodos.map((todo, index) => {
                console.log(todo)
                return <TodoItem 
                          id={index}
                          key={index}
                          title={todo.title}
                          dueDate={todo.dueDate.$d.toLocaleDateString()}
                          text={todo.description}
                          priority={todo.priority}
                          timeNeeded={todo.timeNeeded}
                          theActiveTodos={[activeTodos, setActiveTodos]}
                        />
            })
          }  
      </div>

      <div className="flex row-start-2 justify-center">
            <AddTodoForm
              theActiveTodos={[activeTodos, setActiveTodos]}
            />
        </div>
    </div>
  );
}

export default Todo;
