'use client';

import Image from 'next/image';
import Link from 'next/link';

import {Button} from './common/Button';
import {ShapeshiftLogo} from './common/icons/ShapeshiftLogo';
import {appDao, appProducts, appResources} from './constants';

import type {ReactNode} from 'react';

const footerLinks = {
	Products: appProducts,
	Resources: appResources,
	DAO: appDao,
	Connect: [
		{name: 'Twitter', href: 'https://twitter.com/shapeshift'},
		{name: 'Medium', href: 'https://medium.com/shapeshift'},
		{name: 'Discord', href: 'https://discord.gg/shapeshift'},
		{name: 'Telegram', href: 'https://t.me/shapeshift'},
		{name: 'Warpcast', href: 'https://warpcast.com/shapeshift'}
	]
};

export function Footer(): ReactNode {
	return (
		<div className={'relative'}>
			<div className={'rounded-lg border border-stoke bg-secondBg'}>
				<div className={'h-[480px]'}>
					<div className={'flex h-full flex-col p-12'}>
						<div className={'flex justify-between'}>
							<div className={'flex flex-col justify-between'}>
								<Link href={'/'}>
									<ShapeshiftLogo />
								</Link>
							</div>

							<div className={'flex gap-20'}>
								{Object.entries(footerLinks).map(([category, links]) => (
									<div
										key={category}
										className={'flex flex-col gap-8'}>
										<h3 className={'cursor-default text-sm font-medium text-gray-500'}>
											{category}
										</h3>
										<div className={'flex flex-col gap-3'}>
											{links.map(link => (
												<Link
													key={link.name}
													href={link.href}
													target={category === 'Connect' ? '_blank' : '_self'}
													className={'text-sm text-white transition-all hover:text-gray-500'}>
													{link.name}
												</Link>
											))}
										</div>
									</div>
								))}
							</div>
							<Button
								href={'/'}
								variant={'blue'}
								title={'Donate'}
							/>
						</div>

						<div className={'flex items-center justify-between gap-2'}>
							<div className={'text-sm text-gray-500'}>{'© 2022 ShapeShift. All Rights Reserved'}</div>

							<div className={'flex items-center gap-6 rounded-2xl border border-stoke bg-black/95 p-2'}>
								<span className={'p-4 text-2xl text-white'}>{'Get the app'}</span>
								<div>
									<Image
										src={'/qrcode.png'}
										alt={'qrcode'}
										width={64}
										height={64}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
