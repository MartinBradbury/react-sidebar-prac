import React from 'react'
import css from './css/NavBarSimple.module.css';

function NavBar(props) {
  return (
    <div>
        {
        props.isLoggedIn ? (
            <button onClick={props.myClickIn}>Login</button>
        ) : (
            <div className={css.NavBar}>
                <p>Username:</p>
                <input></input>
                <p> Password:</p>
                <input></input>
                <button onClick={props.myClickOut}>Submit</button>
            </div>
        )}
    </div>
  )
}

export default NavBar