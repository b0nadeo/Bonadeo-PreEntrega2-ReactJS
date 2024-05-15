import getProducts from "../../../data/data";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) => {

  const [products, setProducts] = useState([]);
  const {idCategory} = useParams()
  console.log(idCategory);

  useEffect(()=>{
    getProducts()
    .then((respuesta)=>{
      if(idCategory){
        const productsFilter = respuesta.filter((productRes)=>productRes.category === idCategory)
        setProducts(productsFilter)
      } else{
        setProducts(respuesta)
      }
      
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=>{
      console.log("Fin de la promesa");
    })
  },[idCategory]);

  return (
      <div className="text-center my-5 fs-5">{saludo}
      <ItemList products={products}/>
      </div>
      
  )
}

export default ItemListContainer