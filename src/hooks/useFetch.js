import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setdata] = useState([]);

	useEffect(() => {
		const fetchurl = async () => {
			const req = await fetch(url);
			const json = await req.json();
			setdata([...json]);
		};
		fetchurl();
	}, [url]);

	return { data };
};
