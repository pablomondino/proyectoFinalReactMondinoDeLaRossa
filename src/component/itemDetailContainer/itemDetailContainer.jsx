import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    
    const {id} =useParams()
    const [producto,setProducto]= useState()
    //const {nombreCategoria}= useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>{
            setProducto(json)
            console.log(json)
        })
        .catch(error => console.error(error))



    }, [id])
       
    return(
        //<img src={producto.image} alt="" />

        <div> 
            <h3>soy el producto {producto?.title}</h3>
          
            <h3>soy el producto {producto?.description}</h3>

            <img src={producto?.image} alt="" style={{ width: '200px', height: 'auto' }} />

            
          
        </div>
    )
}

export default ItemDetailContainer