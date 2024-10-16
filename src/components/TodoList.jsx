
import tickMark from '../assets/tickMark.png'
import noTickMark from '../assets/noTickMark.png'
import deleteIcon from '../assets/deleteIcon.png'



const TodoList = ({text, id, isComplete, deleteList, toggle}) => {
  return (
    <div className='flex justify-between items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center  cursor-pointer'>
        <img src={isComplete ? tickMark : noTickMark} alt="" className='w-6'/>
        <p className={`text-gray-700 ml-3 text-[1.12rem] ${isComplete ? "font-semibold project-green-text" : ""}`}>
          {text}</p>
      </div>
      <img src={deleteIcon} onClick={()=>{deleteList(id)}} alt="" className='w-6 grayscale-[85%] hover:grayscale-0 transition duration-300 delay-150 hover:delay-300'/>
      
    </div>
  )
}

export default TodoList
