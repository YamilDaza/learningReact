import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './styles/index.css';
import MainTaks from './projects/MainTaks';
import Practice from './Practice';
import Interfaz from './Interfaz';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <MainTaks></MainTaks> */}
		{/* <Practice>My component of practice</Practice> */}
		<Interfaz></Interfaz>
	</React.StrictMode>
)
