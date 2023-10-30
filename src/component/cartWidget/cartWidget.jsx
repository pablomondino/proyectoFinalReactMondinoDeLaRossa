
import { Avatar, Badge} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';


const CartWitget = () => {
    return (
        <>
            <Badge count={3}>
                <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
            </Badge>
        </>
    )
}

export default CartWitget