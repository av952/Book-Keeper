import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../components/Layout"
import { useAppContext } from "../store/Store"
import '../style.css'

export const View = () => {
  //me regresa los parametros que tengo en mi ruta, el id de la ruta
  const params = useParams()
  const store = useAppContext()
  const[item,setItem]=useState(null)

  useEffect(()=>{
    const book  = store.getItem(params.bookId)
    setItem(book)
  },[])

  if(!item){
    return(
      <Layout>
        <h1>Item not found</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="containerView">
      <div>{item?.cover?<img className="imgView" src={item.cover} width='600' alt="cover hight"></img>:''}</div>
      <div className="subContainerView">

      <h2>{item?.title}</h2>
      <p>{item?.author}</p>
      <p>{item?.intro}</p>
      <div>{item?.completed? <p>Completado :)</p>: <p>Sin completar :(</p>}</div>
      <p>{item?.review}</p>
      </div>
    </div>
    </Layout>
  )
}
