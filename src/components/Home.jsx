import { useState, useEffect } from "react";
// import "./Home.css";
const Home = () => {
//   const list = [{ id: 1, description: "todo1" }];
  const [todo, setTodo] = useState([]);
  const [toadd, setToAdd] = useState("");
  const [edit,setEdit] =useState(false)
  const [editIndex,setEditIndex]=useState(null)
  useEffect(() => {
    console.log(todo);
  }, [todo]);
  const handleAdd = () => {
    if(toadd.length==0){
      
    }
    else { 
    const id = todo.length === 0 ? 1 : todo[todo.length - 1].id + 1;
    const description = toadd;
    setTodo((prev) => [...prev, { id, description }]);
    setToAdd("")}
  };
  const handleDelete=(ind)=>{
    const newarr=todo.filter((_,index)=>ind!=index)
    setTodo(newarr)

  }
  const handleEdit=(index)=>{
    setEdit(true)
    setToAdd(todo[index].description)
    setEditIndex(index)
  }
  const editArray=()=>{
    setEdit(false)
     const newArr=todo.map((item,index)=>index===editIndex ? {...item,description:toadd}:item)
     setTodo(newArr)
     setToAdd("")
  }
  return (
    <div className="main   ">
      <div className="add-item">
        <div>
          <input
            placeholder="Enter item to add "
            onChange={(e) => {
              setToAdd(e.target.value);
            }}
            value={toadd}
          />
          <button onClick={handleAdd}>add item </button>
        </div>
      </div>
      <div className="todo-list">
        {todo.map((item, index) => (
          <div className="todo-item" key={index}>
            {item.description}
            <div className="buttons">
            <button className="edit-btn btn" onClick={()=>handleEdit(index)}>Edit</button>
            <button className="del-btn btn" onClick={()=>handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {edit&&<div className="edit-input">
        <input value={toadd} onChange={(e)=>setToAdd(e.target.value)}></input>
        <button onClick={editArray} >Done Edit </button></div>}
         
    </div>
  );
};
export default Home;
