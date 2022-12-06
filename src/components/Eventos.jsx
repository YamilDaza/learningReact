import React, {Component} from 'react'

const nav = {
   display:'flex',
   alignItem:'center',
   justifyContent:'center',
   btn:{
      margin:'1rem',
      padding:'10px',
      cursor:'pointer',
   }
}

export default class Eventos extends Component{
   constructor(props){
      super(props)
      this.state = {
         contador:0,
      };

      this.Incrementar = this.Incrementar.bind(this);
      this.Decrementar = this.Decrementar.bind(this);

   }

   Incrementar(){
      this.setState({
         contador:this.state.contador + 1,
      })
   };

   Decrementar(){
      if(this.state.contador > 0){
         this.setState({
            contador:this.state.contador - 1,
         })
      }else{
         alert('No puedes disminuir menor que 0')
      }
   };
   
   render(){
      return(
         <div>
            <h2>Eventos en Componentes de Clase.</h2>
            <h3 style={{textAlign:'center', fontSize:'3rem'}}>{this.state.contador}</h3>
            <nav style={nav}>
               <button onClick={this.Incrementar} style={nav.btn}>Incrementar</button>
               <button onClick={this.Decrementar} style={nav.btn}>Decrementar</button>
            </nav>
         </div>
      )
   }
}
