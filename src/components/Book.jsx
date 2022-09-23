import { Link } from "react-router-dom"
import '../style.css'
import { useAppContext } from "../store/Store"

/**
 * Generaa la vista del libro para ser mostrada en Index.jsx
 */

export const Book = ({item}) => {
    const store = useAppContext()

    function handleClick(e){
      
      const conf =  confirm('¿Está seguro de eliminar este libro?')

      conf ?store.deleteItems(e.target.value):null

    }
  return (
    <div >
            <div className="bookContainer">
        <Link  to={`/view/${item.id}`}>
          <div className="imgContainer">

            <img className="image" src={item.cover} alt="img-cover"/>
          </div>
        </Link>
            <h3>{item.title}</h3>
            <h3>{item.author}</h3>
            <button className="btnBook" onClick={handleClick} value={item.id} >Delete</button>
            </div>
    </div>
  )
}
