/**Almacenar los estados de toda la información de forma global */
import { createContext,useContext,useEfect,useState } from "react"

const AppContext = createContext({
  items:[],
  createItem: (item)=>{},
  getItem: (id)=>{},
  updateItem : (item)=>{}
})

export const Store = ({children}) => {
  const[items,setItems]= useState([])

  function createItem(item){
    //alamacenamos todo los que ya tiene items de maner temporal
    const temp = [...items]
    //agregamos el item nuevo a la primera posición
    temp.unshift(item)
    //insertamos en items todos los elementos
    setItems([...temp])
  }


  function getItem(id){
    const item = items.find(el=>el.id == id)
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
      updateItem
    }}
    >

      {children}
    </AppContext.Provider>
  )
}


export function useAppContext(){
  return useContext(AppContext)
}