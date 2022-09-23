import { Link } from "react-router-dom"
import '../style.css'

export const Navbar = () => {
  return (
    <div className="containerNav">
        <Link to='/book-keeper'>Home</Link>
        <Link to='/create'>Create</Link>
    </div>
  )
}
