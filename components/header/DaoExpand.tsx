import Image from 'next/image';

import HeaderItem from '../common/HeaderItem';
import {appDao} from '../constants';
import {expandAnimation} from './animations';

import type {ReactNode} from 'react';

export function DAOExpand({setCurrentTab}: {setCurrentTab: (tab: string) => void}): ReactNode {
	return (
		<div
			className={'flex justify-between'}
			{...expandAnimation}>
			<div className={'mt-16 max-w-[320px] pb-16 pr-10'}>
				<div className={'mb-5 flex items-center gap-2'}>
					<div className={'mr-4 size-10'}>
						<Image
							src={'/fox-token/foxLogo.png'}
							alt={'Fox Token'}
							width={80}
							height={80}
						/>
					</div>
					<div className={'text-[32px] leading-[32px]'}>
						<span>{'FOX '}</span>
						<span className={'font-bold italic text-blue'}>{'Power'}</span>
					</div>
				</div>
				<p className={'text-sm text-gray-500'}>{'FOX Tokens wield mighty powers for those who hodl them.'}</p>
			</div>
			<div className={'mx-16 border border-white/5'} />
			<div className={'mt-16 pb-10'}>
				<div className={'grid grid-cols-3 gap-4'}>
					{appDao.slice(0, 3).map(dao => (
						<HeaderItem
							onClick={() => setCurrentTab('empty')}
							key={dao.name}
							name={dao.name}
							href={dao.href}
							description={dao.description}
							icon={dao.icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
