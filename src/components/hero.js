import './hero.css';
import List from './list';
import Counter from './Counter';
import Error from './Erorr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let hero = () => {
	return (
		<main className='main'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<List />} />
					<Route path='/counter/:name' element={<Counter />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
};

export default hero;
