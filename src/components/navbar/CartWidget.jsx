import { IoCart } from "react-icons/io5";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="iconocarrito">
        <IoCart size={30}/>
        <p className="text-center me-3 ms-1 numerocarrito">2</p>
        
    </div>
  )
}

export default CartWidget