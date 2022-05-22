import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { useStatevalue } from './Components/Subtotal/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';
import Footer from './Components/Footer/Footer';

const promise = loadStripe("pk_test_51L1OiCJeyByGMDpaGgeODbX2pSYgJf3Wb819jTcZbtqnoqEuhnHgkag9oGUn8cWp7RYWRDtQzP2FrKl3Gj2ZvWhc00wFGVdxxA");

function App() {
  const [{}, dispatch] = useStatevalue();

  useEffect ( () => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //user logout
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  
  return (
   <Router>
     <Header/>
     <Switch>

     <Route path="/orders">
        <Orders/>
      </Route>

     <Route path="/login">
        <Login/>
      </Route>
       
      <Route path="/checkout">
        <Checkout/>
      </Route>

      <Route path="/Payment">
        <Elements stripe={promise}>
          <Payment/>
        </Elements>
      </Route>

      <Route path="/">
        <Home/>
        <Footer/>
      </Route>

    </Switch>
    
   </Router>
  );
}

export default App;
