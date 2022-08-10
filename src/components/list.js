import { useState } from 'react';
import './ellist.css';
import Item from './item';
import { useFetch } from '../hooks/useFetch';
import Svg from './images/Spinner-1.1s-203px.svg';
import { useContext } from 'react';
import { Themcontect } from '../context/usetoken';

let Card = () => {
	let [value, setvalue] = useState('');
	let [url, setUrl] = useState('https://restcountries.com/v3.1/all');

	const { thema } = useContext(Themcontect);

	const { data } = useFetch(url);

	return (
		<section className={thema}>
			<div className='container'>
				<div className='search'>
					<form
						onSubmit={(evt) => {
							evt.preventDefault();
							setUrl(`https://restcountries.com/v3.1/name/${value}`);
						}}>
						<input
							onChange={(evt) => setvalue(evt.target.value.toLowerCase())}
							className='Search'
							placeholder='Search for a country…'
							type='serach'
						/>
						<button className='btn' type='submit'>
							send
						</button>
					</form>
					<select
						onChange={(evt) =>
							setUrl(
								`https://restcountries.com/v3.1/region/${evt.target.value.toLocaleLowerCase()}`,
							)
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

				{data.length ? (
					<ul className='list'>
						{data &&
							data.map((el) => {
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
