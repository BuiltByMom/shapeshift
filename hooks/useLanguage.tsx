import {useEffect, useState} from 'react';

export function useLanguage(): {
	currentLanguage: string;
	switchLanguage: (symbol: string) => void;
} {
	const [dynamicCurrentLang, setDynamicCurrentLang] = useState('en');
	useEffect(() => {
		// eslint-disable-next-line
		//@ts-ignore
		if (window.Weglot.initialized) {
			// eslint-disable-next-line
			//@ts-ignore
			const staticCurrentLanguage = window.Weglot.getCurrentLang();
			setDynamicCurrentLang(staticCurrentLanguage);
		}
	}, []);

	const switchLanguage = (symbol: string): void => {
		// eslint-disable-next-line
		//@ts-ignore
		if (window.Weglot.initialized) {
			// eslint-disable-next-line
			//@ts-ignore
			window.Weglot.switchTo(symbol);
			setDynamicCurrentLang(symbol);
		}
	};

	return {
		currentLanguage: dynamicCurrentLang,
		switchLanguage
	};
}
