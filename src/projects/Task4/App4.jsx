import React from 'react';

const App4 = ({ rey, reses }) => {
   return (
      <div>
         <h1>Hola, Bienvenido rey {rey} come {reses} reses al dia.</h1>
      </div>
   );
}

App4.defaultProps={
   reses: 'pocas',
   rey: 'Rey Godo'
}

export default App4;
