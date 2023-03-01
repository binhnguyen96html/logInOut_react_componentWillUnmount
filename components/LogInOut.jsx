import { Component } from "react";
import "./LogInOut.css";
import Home from './Home';

class LogInOut extends Component {
    state={
        form: {
            emailInput:"binh@gmail.com", 
            passwordInput:"123"
        },
        isValid: false,
        isLogIn: false,
    }

    handleChange = (event) => {
        
        this.setState( 
            //chua hieu phan nay????
        (state) => {
            const {form} = state;
            form[event.target.form.name] = event.target.value;
            return {form};
        }, 
        
        () => this.checkValidForm()
    )

    }

 

    checkValidForm = () => {
        const {emailInput, passwordInput} = this.state.form;
        const value = emailInput && passwordInput;
        this.setState({isValid: value});
    }

    // handleChangeCheckbox = () => {
    //     this.setState((state) => {
    //       const { form } = state
    //       form.isRemember = !form.isRemember
    //       return { form }
    //     }, () => this.checkValidForm())
    //   }

    handleSubmit = () => {
        if(this.state.isValid){
            this.setState({isLogIn: true})
            console.log("Sign in successfully!")
        }
    }

    handleLogOut = () => {
        this.setState({isLogIn: false});
        console.log("Sign out!")
    }
 

    render() {
        const {form, isLogIn} = this.state;
        
        if(isLogIn){
            return <Home needToLogOut={this.handleLogOut}/>
        }

    return (
    <>
      <div className="container d-flex align-items-center text-center"> 
        <div className="form-signin">

          <form>

            {/* logo */}
            <img
              className="mb-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
              alt=""
              style={{ width:72, height:57, margin:"auto"}}
            />

            <h1 className="h3 mb-3 fw-normal" >Please sign in</h1>

            {/* EMAIL */}
            <div className="form-floating">
            <label>Email address:</label> <br/>
              <input
                className="form-control email"
                type="email"
                placeholder="name@example.com"
                name="email"
                // value={form.emailInput}
                onChange={this.handleChange}
              ></input>
            </div>

            {/* PASSWORD  */}
            <label>Password:</label> <br/>
            <div className="form-floating">
              <input
                className="form-control password"
                type="password"
                name="password"
                placeholder="Password"
                // value={form.passwordInput}
                onChange={this.handleChange}
              />
            </div>

            {/* CHECKBOX */}
            {/* <div className="checkbox mb-3">
              <label>
                <input
                  type="checkbox"
                  //value={form.isRemember}
                //   onChange={this.handleChangeCheckbox}
                />{" "}
                Remember me
              </label>
            </div>
            <br/> */}

            {/* SIGN IN  */}
            <button
              className="w-100 btn btn-lg btn-primary mt-3"
              type="button"
              onClick={this.handleSubmit}
            >
              Sign in
            </button>


            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>

      </>
    ); //end return

  }//end render

} //end class


export default LogInOut;
