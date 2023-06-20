import React, {Component} from "react";
import Button from "../../components/General/Button";
import css from "./styles.module.css";
import {connect} from "react-redux";
import  * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import {Redirect} from "react-router-dom"
class Login extends Component{
    state = {
        email: "",
        password: ""
    };

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    login = () => {
        this.props.login(this.state.email, this.state.password)
    }
    render(){
        return(
            <div className={css.Login}>
            {this.props.userId && <Redirect to = "/orders" />}
            <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг"></input>
            <input onChange={this.changePassword} type="password" placeholder="Нууц үг"></input>
            {this.props.logginIn && <Spinner/>}
            {this.props.firebaseError && <div style={{color: 'red'}}>{this.props.firebaseError}</div>}
            <Button text="НЭВТРЭХ" btnType="Success" clicked={this.login}/>
        </div>
        ); 
    };
};
const mapStateToProps = state => {
    return {
        logginIn: state.signupReducer.logginIn,
        firebaseError: state.signupReducer.firebaseError,
        firebaseErrorCode: state.signupReducer.firebaseErrorCode,
        userId: state.signupReducer.userId
    };
};
const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);