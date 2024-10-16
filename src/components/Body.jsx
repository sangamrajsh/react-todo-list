import { useRef, useState, useEffect } from "react"
import TodoList from "./TodoList"
const Body = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todo")? JSON.parse(localStorage.getItem("todo")) : []);

const inputRef = useRef();
    const add = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }
        const newBody = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }

        setTodoList((prev) => [...prev, newBody]);
        inputRef.current.value ="";
    }

    const deleteList = (id) => {
        setTodoList((prevTodo)=>{
           return prevTodo.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoList((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoList))
    },[todoList])

  return (
    <section className="flex flex-col shadow-2xl bg-gray-800 shadow-red-900">
        <div className=" bg-gray-200 place-self-center w-full md:w-[60%] lg:w-[50%] xl:w-[40%] align-middle p-6">
            <div className="py-4">
                <h1 className="text-3xl font-semibold">To Do List</h1>
            </div>
        
            <div className="flex items-center rounded-full mx-8 border-1 border-neutral-500">
                <input ref={inputRef} className="bg-transparent flex-1 h-14 pl-6 pr-4 outline-none" type="text" placeholder="Add the task on the list..."/>
                <button onClick={add} className="bg-green-500 plus-button rounded-full text-4xl text-white">+</button>
            </div>
            <div>
                {todoList.map((item, index) =>{
                    return <TodoList key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteList={deleteList} toggle={toggle} />}
                )} 
            </div>

        </div>
    </section>
  )
}

export default Body
