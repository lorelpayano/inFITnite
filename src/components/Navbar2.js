// ABOUT, CALORIE TRACKER, EXERCISE, RECIPES

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import account from '../images/account.png'


class Navbar2 extends Component {
    render() {
        return (
            <nav className='nav2'>
                <ul className='nav2-ul'>
                    <li><Link className='nav2-links' to='/'>Home</Link></li>
                    <li><Link className='nav2-links' to='/menu'>Menu</Link></li>
                    <li><Link className='nav2-links' to='/mealplans'>Meal Plans</Link></li>
                    <li><Link className='nav2-links' to= '/aboutus'>About Us</Link></li>
                    <li><Link to='/'><img className='account' src={account} alt='account'/></Link></li>

 

                </ul>
            </nav>
        );
    }
}

export default Navbar2;