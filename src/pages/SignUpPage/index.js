import React, {Component} from "react";
import Button from "../../components/General/Button";
import css from "./styles.module.css";
class SignUp extends Component{
    state = {
        email: "",
        password1: "",
        password2: ""
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
        alert("SignUp..." + this.state.email + " " + this.state.password1);
    };
    render(){
        return(

            <div className={css.SignUp}>
            <div>Та өөрийн мэдээллээ оруулна уу.</div>
            <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг"></input>
            <input onChange={this.changePassword1} type="password" placeholder="Нууц үгээ оруулна уу"></input>
            <input onChange={this.changePassword2} type="password" placeholder="Нууц үгээ давтан оруулна уу"></input>
            <Button text="Бүртгүүлэх" btnType="Success" clicked={this.signUp}/>
        </div>
        ); 
    }
}
export default SignUp;