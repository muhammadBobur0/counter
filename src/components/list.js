import { useEffect, useState } from 'react';
import './ellist.css';
import Item from './item';
import Svg from './images/Spinner-1.1s-203px.svg';

let Card = () => {
	let [todos, setTodos] = useState([]);
	let [value, setvalue] = useState('');

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => setTodos([...data]));
	}, []);

	return (
		<section className='section'>
			<div className='container'>
				<div className='search'>
					<form
						onSubmit={(evt) => {
							evt.preventDefault();
							fetch(`https://restcountries.com/v3.1/name/${value}`)
								.then((res) => res.json())
								.then((data) => setTodos([...data]));
						}}>
						<input
							onChange={(evt) => setvalue(evt.target.value.toLowerCase())}
							className='Search'
							placeholder='Search for a country…'
							type='serach'
						/>
						<button type='submit'>send</button>
					</form>
					<select
						onChange={(evt) =>
							fetch(
								`https://restcountries.com/v3.1/region/${evt.target.value.toLocaleLowerCase()}`,
							)
								.then((res) => res.json())
								.then((data) => setTodos([...data]))
						}
						className='select'>
						<option value='defaultValue'> Filter by Region </option>
						<option value='Africa'> Africa </option>
						<option value='America'> America </option>
						<option value='Asia'> Asia </option>
						<option value='Europe'> Europe </option>
						<option value='Oceania'> Oceania </option>
					</select>
				</div>

				{todos.length ? (
					<ul className='list'>
						{todos.map((el) => {
							return <Item key={el.name.common} name={el} />;
						})}
					</ul>
				) : (
					<img className='loading' src={Svg} alt='loadin' />
				)}
			</div>
		</section>
	);
};

export default Card;
