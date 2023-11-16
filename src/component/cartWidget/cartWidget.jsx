
import { Avatar, Badge} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
//agrego context para consumir

import { CartContext } from '../../context/cartContext';

import { useContext } from 'react';
const CartWitget = () => {

    // para consumir context -----AGREGUE NUMERO EN EL COUNTERMAS ABAJO
    const{numero}=useContext(CartContext)

    return (
        <>
            <Badge count={numero}>
                <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
            </Badge>
        </>
    )
}

export default CartWitget