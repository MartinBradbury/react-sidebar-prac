import React from "react";
import css from './css/NavBarSimple.module.css';


class NavbarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: "Hello, guest!",
            button: "Log in",
        };
    }


    handleClick = () => {
        this.setState((prevState) => ({
            greeting: prevState.greeting === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            button: prevState.button === "Log out" ? "Log in" : "Log out",
        }), ()=> console.log(this.state.greeting))
        
    }



    render() {
        return(
            <>
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.greeting}</span>
                <button onClick={() => this.handleClick()}>{this.state.button}</button> 
            </div>
            </>
        )
    }





}

export default NavbarSimple