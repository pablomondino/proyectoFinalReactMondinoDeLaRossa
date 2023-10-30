import { Link } from "react-router-dom"



const Item = ({ producto }) => {
    return (
        //<img src={producto.image} alt="" />
        <div>
            <p>{producto.title}</p>
            <p>{producto.description}</p>
            <p>{producto.price}</p>

            <img src={producto.image} alt="" style={{ width: '200px', height: 'auto' }} />
            <Link to ={`/item/${producto.id}`}>Ver mas </Link>

        </div>
    )
}

export default Item