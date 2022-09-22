import { Link } from "react-router-dom"
import '../style.css'

export const Book = ({item}) => {
    console.log(item);
    console.log(item);
  return (
    <div >
            <div className="bookContainer">
        <Link  to={`/view/${item.id}`}>
            <img className="image" src={item.cover} alt="img-cover"/>
        </Link>
            <h3>{item.title}</h3>
            <h3>{item.author}</h3>
            <p>{item.intro}</p>
            <p>{item.completed}</p>
            <p>{item.review}</p>
            </div>
    </div>
  )
}
