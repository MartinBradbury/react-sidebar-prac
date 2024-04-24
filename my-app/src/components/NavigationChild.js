import React from 'react'
import css from './css/NavBarSimple.module.css';


function NavigationChild(props) {
  return (
    <div>
        {props.LoggedIn ? (
            <div className={css.NavBar}>
                <p>Click to Login: </p>
                <button onClick={(props.clickMe)}>Login</button>
            </div>
        ) : (
            <div className={css.NavBar}>
                <p>Click to logout: </p>
                <button onClick={(props.clickMe)}>Logout</button>
            </div>
        )}
    </div>
  )
}

export default NavigationChild