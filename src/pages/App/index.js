import React from 'react';
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';
import { Component } from 'react/cjs/react.development';
import OrderPage from '../OrderPage';
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
        {/**<BurgerPage />**/}
        <OrderPage />
      </main>

    </div>
    )
  }
};

export default App;
