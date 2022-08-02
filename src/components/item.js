import Elliststayle from './ellist.css';
import elimg from './images/germany.png';

let item = (props) => {
	let { name, region, flags, population, capital } = props.name;

	return (
		<li className='item'>
			<img className='item-img' src={flags.svg} alt='props.name.name.common' />
			<div className='box'>
				<h3 className='box-tittle'>{name.common}</h3>
				<p className='text'>Population: {population}</p>
				<p className='text'>Region: {region}</p>
				<p className='text'>Capital: {capital}</p>
			</div>
		</li>
	);
};

export default item;
