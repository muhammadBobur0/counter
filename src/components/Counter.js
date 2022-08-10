import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Svg from './images/Spinner-1.1s-203px.svg';
import Arrow from './images/arraw.svg';
import { useContext } from 'react';
import { Themcontect } from '../context/usetoken';

let Counter = (props) => {
	const { name } = useParams();
	const { thema } = useContext(Themcontect);

	let navigate = useNavigate();

	function handleClick() {
		navigate('/');
	}

	const { data } = useFetch(`https://restcountries.com/v3.1/name/${name}`);
	return (
		<div className='backslaw'>
			{data.length ? (
				data &&
				data?.map((el) => {
					let { flags, name, borders } = el;
					return (
						<div key={el.area} className={thema}>
							<div className='container'>
								<button className='back' onClick={handleClick}>
									<img src={Arrow} alt='' width={15} height={15} />
									Back
								</button>

								<div className={'counter'}>
									<img className='flag' src={flags.svg} alt={name.official} />
									<div className='cou-box'>
										<div className='counter-boxs'>
											<div className='marg'>
												<h2>{el.name.common}</h2>
												<p>Native Name: {name.official}</p>
												<p>Population: {el.population}</p>
												<p>Region: {el.region}</p>
												<p>Sub Region: {el.subregion}</p>
												<p>Capital: {el.capital} </p>
											</div>
											<div>
												<p>
													Top Level Domain: <strong>{el.tld[0]}</strong>
												</p>
												<p>
													Currencies:
													{Object.values(el.currencies)?.map((elem) => (
														<strong key={elem.name}>{elem.name}</strong>
													))}
												</p>
												<p>
													Languages:
													{Object.values(el.languages)?.map((elem) => (
														<strong key={elem}>{elem}</strong>
													))}
												</p>
											</div>
										</div>
										<div>
											<p className='scrool'>
												Border Countries:
												{borders?.map((els) => (
													<span key={els} className='border'>
														{els}
													</span>
												))}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<img className='loading' src={Svg} alt='loadin' />
			)}
		</div>
	);
};

export default Counter;
