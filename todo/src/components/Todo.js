import React, { useState } from 'react'
import './todo.css'
const Todo = () => {
  const[input,setinput]=useState("")
    const[items,setitems]=useState([]);
 const additem=()=>{
  if(!input){
    alert('plz fill input')
  }else{
    const newInput={
      id: new Date().getTime().toString(),
      name:input
    }
    setitems([...items,newInput])
  }
}
    const deleteitem=(index)=>{
      const newdatas=items.filter((curElem)=>{
        return curElem.id !== index;
      })
      setitems(newdatas);
    }


    const removeall=()=>{
      const removes=items.filter(()=>{
        return "";
      })
      setitems(removes)
    }



    const updateitem=(index,input)=>{
      const update=items.filter((curElem)=>{
        return( curElem.id===index)?curElem.name=input:curElem.name
      })
      setitems(update)
    }
  return (
    <>
         <div className="main-div">
        <div className="child-div">
          <figure>
            <img  className="mx-auto" src="./todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control" 
              onClick={(e)=>setinput(e.target.value)}
              
            />
          <i className='fa fa-plus add-btn' onClick={additem}></i>
          </div>
         
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={()=>updateitem(curElem.id,input)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                     onClick={()=>deleteitem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
             onClick={removeall}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
