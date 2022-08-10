import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Hero from './components/hero';
import { ThemaProvayder } from './context/usetoken';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemaProvayder>
			<Header />
			<Hero />
		</ThemaProvayder>
	</React.StrictMode>,
);
