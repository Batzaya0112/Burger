import React, {Component} from "react";
import Button from "../../components/General/Button";
import css from "./styles.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import {Redirect} from 'react-router-dom';
class SignUp extends Component{
    state = {
        email: "",
        password1: "",
        password2: "",
        error: ""
    };
    changePassword1 = (event) => {
        this.setState({password1: event.target.value})
    }
    changePassword2 = (event) => {
        this.setState({password2: event.target.value})
    }
    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }
    signUp = () => {
        if(this.state.password1 === this.state.password2){
            this.props.signupUser(this.state.email, this.state.password2);
        }else {
            this.setState({error:'Нууц үг таарахгүй байна!'});
        }
           
    };
    render(){
        return(

            <div className={css.SignUp}>
                {this.props.userId && <Redirect to = "/"/>}
                <div>Та өөрийн мэдээллээ оруулна уу.</div>
                <input 
                    onChange={this.changeEmail} 
                    type="text" 
                    placeholder="Имэйл хаяг">
                </input>
                <input 
                    onChange={this.changePassword1} 
                    type="password" 
                    placeholder="Нууц үгээ оруулна уу">
                </input>
                <input 
                    onChange={this.changePassword2} 
                    type="password" 
                    placeholder="Нууц үгээ давтан оруулна уу">
                </input>
                {
                    this.state.error && 
                    <div style={{color: 'red'}}>
                        {this.state.error }
                    </div>
                }
                {
                    this.props.firebaseError && 
                    <div style={{color: 'red'}}>
                        {this.props.firebaseError}
                    </div>
                }
                {this.props.saving && <Spinner/>}
                <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={this.signUp}/>
        </div>
        ); 
    }
}
const mapStateToProps = state =>{
    return{
        saving: state.signupReducer.saving,
        firebaseError: state.signupReducer.firebaseError,
        userId: state.signupReducer.userId
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);