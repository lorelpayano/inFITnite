import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Menu from './components/Menu'
import MealPlans from './components/MealPlans'
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="home">
      <Navbar1 />
      <Navbar2 />
      {/* <h1>inFITnit</h1> */}




      <Switch>
          <Route exact path='/' render={() => <Home/>} />
          <Route exact path='/menu' render={() => <Menu/>} />
          <Route exact path='/mealplans' render={() => <MealPlans/>} />
          <Route exact path='/aboutus' render={() => <AboutUs/>} />
          <Route exact path='/login' render={() => <Login/>} />
          <Route exact path='/signup' render={() => <SignUp/>} />



        </Switch>
        <div className='footer'>
        <Footer />
        </div>
    </div>
    );
  }
}

export default App;