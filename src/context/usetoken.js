import { useState, createContext } from 'react';

export const Themcontect = createContext();

export const ThemaProvayder = ({ children }) => {
	const [thema, setthema] = useState('ligt');

	const data = {
		thema,
		setthema,
	};

	return <Themcontect.Provider value={data}>{children}</Themcontect.Provider>;
};
