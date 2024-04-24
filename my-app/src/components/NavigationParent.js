import React, { Component } from 'react'
import css from './css/NavBarSimple.module.css';
import NavigationChild from './NavigationChild';

export class NavigationParent extends Component {
constructor(props) {
  super(props)

  this.state = {
     LoggedIn: true
  }
}

clickMe = () => {
    this.setState((prevState) => ({
        LoggedIn: prevState.LoggedIn === true ? false : true
    }))
}

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Site</h1>
        <NavigationChild 
            LoggedIn={this.state.LoggedIn}
            clickMe={this.clickMe}
        />
        

      </div>
    )
  }
}

export default NavigationParent