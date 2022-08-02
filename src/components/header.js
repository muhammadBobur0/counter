import headercss from './header.css';

const headers = () => {
	return (
		<header className='header'>
			<div className='container iner'>
				<h1 className='tittle'>Where in the world?</h1>
				<button className='darck'>Dark Mode</button>
			</div>
		</header>
	);
};

export default headers;
