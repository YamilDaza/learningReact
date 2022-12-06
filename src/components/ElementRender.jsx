import React, { Component} from 'react'
import data from '../helpers/data.json'


const ListItem = (props) => {
   const {web, name, id} = props.skills
   return(
      <li key={id}>
         <a target='_blanck' href={web}>{name}</a>
      </li>
   )
}

class ElementRender extends Component{
   constructor(props){
      super(props)
      this.state = {
         seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
      }
   }
   render(){
      console.log(data)
      return(
         <div>
            <h2>Renderizado de elementos</h2>

            <ol>
               {this.state.seasons.map((item,index) => (
                  <li key={index}>{item}</li>
               ))}
            </ol>

            <h3>Frameworks Frontend JavaScript</h3>
            <ul>
               {
                  data.frameworks.map((item,index) => (
                     <ListItem key={index} skills={item}/>
                  ))
               }
            </ul>
         </div>
      )
   }
};

export default ElementRender;

