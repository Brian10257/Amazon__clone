import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect
  // a piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if (authUser){
        // the user is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // the user is logged out...

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return() =>{
      // Any Cleanup operations come here
      unsubscribe(); 
    }
  }, [])
  console.log(user) 
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/checkout" component={Checkout}>
        <Header/>
          <Checkout />
        </Route>
        <Login exact path="/login"/>
          <Route exact path="/">
        <Header/>
        <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
