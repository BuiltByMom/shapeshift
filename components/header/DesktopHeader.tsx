'use client';

import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useMemo, useState} from 'react';

import {containerAnimation} from './animations';
import {IconPlanet} from '../common/icons/IconPlanet';
import {dAppUrl, headerTabs} from '../constants';
import {DAOExpand} from './DaoExpand';
import {LanguageExpand} from './LanguageExpand';
import {ProductsExpand} from './ProductsExpand';
import {ResourcesExpand} from './ResourcesExpand';
import {Button} from '../common/Button';
import {ShapeshiftLogo} from '../common/icons/ShapeshiftLogo';
import {cl} from '../utils/cl';

import type {ReactNode} from 'react';

type TDesktopHeaderProps = {
	className?: string;
};

/**
 * Desktop header component with hover menu expansions
 */
export function DesktopHeader({className}: TDesktopHeaderProps): ReactNode {
	const pathname = usePathname();
	const variant = pathname === '/' ? 'transparent' : 'default';
	const [currentTab, setCurrentTab] = useState<string>('');

	/**
	 * Map of tab content components keyed by tab value
	 */
	const tabContent: Record<string, ReactNode> = useMemo(
		() => ({
			products: <ProductsExpand setCurrentTab={setCurrentTab} />,
			resources: <ResourcesExpand setCurrentTab={setCurrentTab} />,
			dao: <DAOExpand setCurrentTab={setCurrentTab} />,
			language: <LanguageExpand />,
			empty: null
		}),
		[]
	);

	/**
	 * Determine background style based on variant and active tab
	 */
	const getVariant = (): string => {
		if (variant === 'transparent') {
			if (currentTab) {
				return 'bg-secondBg';
			}
			return 'bg-headerBg/10 ';
		}
		return 'bg-secondBg';
	};

	return (
		<div className={'relative z-50 hidden lg:block'}>
			<div
				onMouseLeave={() => setCurrentTab('')}
				className={cl('fixed w-[calc(100%-2rem)]', getVariant())}>
				<div
					className={cl(
						'flex flex-col border border-white/5 items-center transition-all backdrop-blur-lg duration-300 justify-between rounded-lg mt-4 px-6 py-3',
						className
					)}>
					<div className={'flex w-full items-center justify-between'}>
						<Link
							href={'/'}
							className={'flex items-center'}
							onMouseEnter={() => setCurrentTab('')}>
							<ShapeshiftLogo />
						</Link>

						<nav className={'flex'}>
							{headerTabs.map(tab => (
								<div
									key={tab.name}
									onMouseEnter={() => setCurrentTab(tab.value)}
									className={cl(
										'cursor-pointer p-4 text-sm font-medium transition-colors',
										currentTab && currentTab !== tab.value ? 'text-gray-500' : 'text-white'
									)}>
									{tab.name}
								</div>
							))}
						</nav>

						<div className={'flex gap-2'}>
							<button
								onMouseEnter={() => setCurrentTab('language')}
								className={
									'group flex aspect-square h-14 items-center justify-center rounded-[20px] border border-white/5'
								}>
								<IconPlanet className={'opacity-50 transition-opacity group-hover:opacity-100'} />
							</button>
							<Button
								variant={'blue'}
								title={'Launch dApp'}
								href={dAppUrl}
							/>
						</div>
					</div>
				</div>
				<AnimatePresence mode={'wait'}>
					<motion.div
						className={'flex justify-center'}
						key={currentTab}
						initial={containerAnimation.initial}
						animate={containerAnimation.animate(!!currentTab)}
						exit={containerAnimation.exit}
						transition={containerAnimation.transition}>
						{tabContent[currentTab]}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
