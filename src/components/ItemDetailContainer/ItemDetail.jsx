

const ItemDetail = ({product}) => {
  return (
    <div className="ps-5 pt-5">
        <img src={product.image} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
  )
}

export default ItemDetail