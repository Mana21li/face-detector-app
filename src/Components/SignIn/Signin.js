import React from 'react';

class Signin extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         signInEmail: '',
         signInPassword: ''
      }
   }

   onEmailChange = (event) => {
      this.setState({ signInEmail: event.target.value })
   }

   onPasswordChange = (event) => {
      this.setState({ signInPassword: event.target.value })
   }

   onSubmitSignIn = () => {
      let flag = false;
      fetch('https://mighty-everglades-07960.herokuapp.com/signin', {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
         })
      })
         .then(response => response.json())
         .then(user => {
            if (user.id) {
               this.props.loadUser(user);
               this.props.onRouteChange('home');
               flag = true;
            }
            if(flag===false){
               alert('Login failed! Please try again.');
            }
         })
   }


   render() {
      const { onRouteChange } = this.props;
      return (
         <article id="form" className="br2 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 white-80">
               <div className="measure">
                  <fieldset className="ba b--transparent ph0 mh0">
                     <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                     <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input
                           className="pa2 input-reset ba bg-transparent white-80 hover-bg-dark-gray w-100" 
                           type="email" 
                           name="email-address"
                           onChange={this.onEmailChange}
                        />
                     </div>
                     <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input 
                           className="b pa2 input-reset ba bg-transparent white-80 hover-bg-dark-gray ba w-100" 
                           type="password" 
                           name="password" 
                           onChange={this.onPasswordChange}
                        />
                     </div>
                  </fieldset>
                  <div>
                     <input
                        onClick={this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba grow pointer bg-transparent white f5 dib"
                        type="submit"
                        value="Sign in" />
                  </div>
                  <div className="lh-copy mt3">
                     <p onClick={() => onRouteChange('register')} className="f5 link dim db pointer">Register</p>
                  </div>
               </div>
            </main>
         </article>
      );
   }   
}

export default Signin;