import './header.css';
import { useContext } from 'react';
import { Themcontect } from '../context/usetoken';

const Headers = () => {
	const { thema, setthema } = useContext(Themcontect);
	return (
		<div className='head'>
			<header className={thema}>
				<div className='container iner'>
					<h1 className='tittle'>Where in the world?</h1>
					<button
						onClick={() => {
							if (thema === 'ligt') {
								setthema('dark');
							} else {
								setthema('ligt');
							}
						}}
						className='darck'>
						Dark Mode
					</button>
				</div>
			</header>
		</div>
	);
};

export default Headers;
