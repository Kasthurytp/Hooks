import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { getBasketTotal } from '../Subtotal/Reducer';
import { useStatevalue } from '../Subtotal/StateProvider';
import './Payment.css'
import axios from './axios';
import { db } from '../../firebase';

function Payment() {
  const [{basket, user}, dispatch] = useStatevalue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
 

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
      //generate the special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
          const response = await axios({
              method: 'post',
              url: `/payments/create?total=${getBasketTotal(basket) * 100}`
          });
          setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
  }, [basket])

  console.log('THE SECRET IS >>>', clientSecret)

  const handleSubmit = async (event) => {
     event.preventDefault();
     setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
             card : elements.getElement(CardElement)
         }
     }).then(({paymentIntent}) => {
         //paymentINtent = payment confirmation

         db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

         setSucceeded(true);
         setError(null);
         setProcessing(false);

         dispatch({
             type: 'EMPTY_BASKET'
         })

         history.replace('/orders')
     })
  }

  const handleChange = event => {
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
  }

  return (
    <div className='payment'>
        <div className='paymentContainer'>
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>

            {/* Delivery address */}
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='paymentAddress'>
                    <p>{user?.email}</p>
                    <p>Sivan kovil road,</p>
                    <p>Madduvil north,</p>
                    <p>Chavakachcheri.</p>
                </div>
            </div>
            {/* Review items */}
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='paymentItems'>
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

            {/* Payment */}
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>PaymentMethod</h3>
                </div>
                <div className='paymentDetails'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='paymentPriceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                   <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment