import React from 'react';
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';
import { Component } from 'react/cjs/react.development';
import OrderPage from '../OrderPage';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ShippingPage from '../ShippingPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import { connect } from 'react-redux';
import Logout from '../../components/Logout';
class App extends Component {
  state = {
    showSidebar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSidebar: !prevState.showSidebar}
    });
  };

  render(){
    return (
      <div>
      <Toolbar toggleSideBar={this.toggleSideBar}/>
      <SideBar 
        showSidebar={this.state.showSidebar} 
        toggleSideBar={this.toggleSideBar}
      />
      <main className={css.Content}>
        {console.log("userId ======> ", this.props.userId)};
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/orders" component={OrderPage} />
          <Route path="/ship" component={ShippingPage} />
          <Route path="/" component={BurgerPage} />
        </Switch>
        
      </main>

    </div>
    )
  }
};
const mapStateToProps = state => {
  return{
    userId: state.signupReducer.userId
  }
}
export default connect(mapStateToProps)(App);
