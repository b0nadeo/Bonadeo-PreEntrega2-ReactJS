import { Link } from 'react-router-dom' 

import './Item.css'

const Item = ({product}) => {
  return (
    <div className="p-3">
          <div className="card carta">
          <img src={product.image} className="card-img-top carddimension"/>
          <div className="card-body">
          <p className="card-text">{product.name}</p>
          <p className="card-text">{product.price}</p>
          <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver detalles</Link>
          </div>
          </div> 
    </div>
  )
}

export default Item