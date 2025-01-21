'use client';

import {type ReactNode, useState} from 'react';
import {useTranslations} from 'next-intl';

import {Button} from '@/components/common/Button';
import {ButtonArrow} from '@/components/common/ButtonArrow';
import {ButtonMinus} from '@/components/common/ButtonMinus';
import {ButtonPlus} from '@/components/common/ButtonPlus';
import {IconArrow} from '@/components/common/icons/IconArrow';
import {IconBack} from '@/components/common/icons/IconBack';
import {IconBot} from '@/components/common/icons/IconBot';
import {IconMinus} from '@/components/common/icons/IconMinus';
import {IconNext} from '@/components/common/icons/IconNext';
import {IconPlus} from '@/components/common/icons/IconPlus';
import {IconResource} from '@/components/common/icons/IconResource';
import {IconTriLink} from '@/components/common/icons/IconTriLink';
import {TabItem} from '@/components/common/TabItem';

export default function HomePage(): ReactNode {
	const [tab, set_tab] = useState<'buy' | 'trade' | 'earn'>('buy');
	const t = useTranslations('SomePage');
	return (
		<div className={'flex h-screen flex-col gap-2  bg-bg p-6'}>
			<h1>{t('first_translation')}</h1>
			<div className={'grid w-24 grid-cols-2 gap-2'}>
				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconPlus className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconPlus />
				</div>

				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconArrow className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconArrow />
				</div>

				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconMinus className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconMinus />
				</div>

				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconNext className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconNext />
				</div>

				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconBack className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconBack />
				</div>

				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconTriLink className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconTriLink />
				</div>

				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconBot className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconBot />
				</div>

				<div className={'flex size-12 items-center justify-center bg-white text-black'}>
					<IconResource className={'text-black'} />
				</div>

				<div className={'flex size-12 items-center justify-center bg-black text-white'}>
					<IconResource />
				</div>
			</div>

			<Button variant={'blue'}>{'Click me'}</Button>
			<Button variant={'white'}>{'Click me'}</Button>

			<ButtonPlus />
			<ButtonMinus />
			<ButtonArrow />

			<div className={'flex gap-2'}>
				<TabItem
					title={'Buy'}
					selected={tab === 'buy'}
					onClick={() => set_tab('buy')}
				/>
				<TabItem
					title={'Trade'}
					selected={tab === 'trade'}
					onClick={() => set_tab('trade')}
				/>
				<TabItem
					title={'Earn'}
					selected={tab === 'earn'}
					onClick={() => set_tab('earn')}
				/>
			</div>
		</div>
	);
}
