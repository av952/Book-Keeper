/**Almacenar los estados de toda la información de forma global */
import { createContext,useContext,useEffect,useState } from "react"

const AppContext = createContext({
  items:[],
  createItem: (item)=>{},
  getItem: (id)=>{},
  updateItem : (item)=>{},
  deleteItems:(id)=>{},
  updateCkeck:(id)=>{}
})


export const Store = ({children}) => {
  const[items,setItems]= useState([])


  useEffect(()=>{

    if(!localStorage.getItem('books')){
      localStorage.setItem('books',JSON.stringify([]))

    }else{

      const tempLocal = JSON.parse(localStorage.getItem('books'))  
      if(tempLocal){
  
        setItems([...tempLocal])
      }
    }

  },[])
  
  function createItem(item){
    //alamacenamos todo los que ya tiene items de maner temporal
    //
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books',JSON.stringify([]))
    }else{
      //const temp = [...items]
      const tempLocal = JSON.parse(localStorage.getItem('books'))
      //agregamos el item nuevo a la primera posición
      //temp.unshift(item)
      tempLocal.unshift(item)
      //insertamos en items todos los elementos
      setItems([...tempLocal])
      localStorage.setItem('books',JSON.stringify(tempLocal))
    }
  }

  function getItem(id){
    //const item = items.find(el=>el.id == id)
    const tempLocal = JSON.parse(localStorage.getItem('books'))
    const itemLocal = tempLocal.find(el=>el.id== id)

    return itemLocal
  }

  function deleteItems(id) {
    const tempLocal = JSON.parse(localStorage.getItem('books'))
    const itemLocal = tempLocal.filter(el=>el.id != id)

    setItems([...itemLocal])
    localStorage.setItem('books',JSON.stringify(itemLocal))

  }

  function updateCkeck(id,bool,item){
    const tempLocal = JSON.parse(localStorage.getItem('books'))
    const itemLocal = tempLocal.find(el=>el.id == id)

    itemLocal.completed = bool
    item.completed = bool

    const fil = tempLocal.filter(el=> el.id != id)
    const all =[...fil,item]
    console.log(all);

    setItems(all)
    localStorage.setItem('books',JSON.stringify(all))

    return item 
  }


  function updateItem(item){
    //devuelve la posición del primer elemento del array si no existe devuelve -1
    const index = items.findIndex(el=> el.id == item.id)
    const temp = [...items]
    temp[index] = {...item}
  }

  return (
    <AppContext.Provider
    value={{
      items,
      createItem,
      getItem,
      updateItem,
      deleteItems,
      updateCkeck
    }}
    >

      {children}
    </AppContext.Provider>
  )
}


export function useAppContext(){
  return useContext(AppContext)
}