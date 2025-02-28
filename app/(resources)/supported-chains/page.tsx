import SupportedTable from '@/app/(resources)/supported-chains/SupportedTable';
import {Banner} from '@/components/common/Banner';
import {Button} from '@/components/common/Button';
import {StrapiChains} from '@/components/StrapiChains';
import {getSupportedChains} from '@/components/utils/query';

import type {ReactNode} from 'react';

export default async function SupportedChainsPage(): Promise<ReactNode> {
	const chains = await getSupportedChains();

	return (
		<div className={'flex w-full justify-center'}>
			<div className={'container mt-[120px] flex flex-col justify-center lg:mt-60'}>
				<section className={'flex flex-col items-start'}>
					<div className={'mb-6 flex flex-col items-center gap-2'}>
						<h1 className={'text-[40px] leading-10 lg:text-7xl'}>{'Supported chains'}</h1>
					</div>
					<Button
						variant={'blue'}
						href={'https://app.shapeshift.com/'}
						title={'Get Started'}
					/>
				</section>

				<section className={'mt-8'}>
					<StrapiChains chains={chains} />
				</section>
				<section className={'mt-16'}>
					<SupportedTable />
				</section>
				<div className={'my-16'}>
					<Banner />
				</div>
			</div>
		</div>
	);
}
