import { doc} from 'firebase/firestore';

import { getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/client"


const ItemDetailContainer = () => {
    
    const {id} =useParams()
    const [producto,setProducto]= useState()
    const [loding,setLoading]=useState(true)

    //const {nombreCategoria}= useParams()
    useEffect(()=>{
            //db, "products",
            const productRef= doc(db, "products", id)
        getDoc(productRef) //agregue eso
            
        .then(snapshop=>{
            if( snapshop.exists()){
                setProducto(
                    {id: snapshop.id,
                    ...snapshop.data()
                    }
                )
            }

        })
        .catch(e=>console.error(e))

        
        .finally(()=>setLoading(false))
        //aca estaba hecho con la api
                /*
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>{
            setProducto(json)
            console.log(json)
        })
        .catch(error => console.error(error))
        */


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