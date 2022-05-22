import React from 'react'
import { useStatevalue } from '../Subtotal/StateProvider';
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

  const [{basket, user}, dispatch] = useStatevalue();
  
  return (
    <div className='checkout'>
        <div className='checkoutLeft'>
            <div>
                <h5>Hello, {user?.email}</h5>
                <h2 className='checkoutTitle'>Your Shopping Basket</h2>
                {basket.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
            </div>
        </div>

        <div className='checkoutRight'>
                <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout