import React, { Component } from 'react';

const Login = () => {
   return(
      <div>
         <h3>Login</h3>
      </div>
   )
};


const Logout = () => {
   return(
      <div>
         <h3>Logout</h3>
      </div>
   )
};

class Renderizado extends Component {
   constructor(props){
      super(props);
      this.state = {
         session: false,
      }
   }

   render(){
      return (
         <div>
            <h2>Renderizado condicional</h2>
            {this.state.session ? <Login/> : <Logout/>}
         </div>
      )
   }
};

export default Renderizado;
