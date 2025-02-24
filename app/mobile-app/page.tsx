import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';

import GridLadder from '@/components/strapi-sections/products/GridLadder';

import type {TButton, TDownloadButton, TGridLadderSection, TStrapiImage} from '@/types/strapi';
import type {ReactNode} from 'react';

type TPage = {
	title: string;
	description: string;
	buttonCta: TButton;
	featuredImg: TStrapiImage;
	buttonDownload: TDownloadButton[];
	gridLadder: TGridLadderSection;
};

/********************************************************************************************
 * Fetches page data from Strapi API
 * Returns null if page is not found
 ********************************************************************************************/
async function getPageData(): Promise<TPage | null> {
	const pages = await fetch(
		`${process.env.STRAPI_URL}/api/mobile-app?fields[0]=title&populate[1]=buttonDownload&fields[2]=description&populate[3]=featuredImg&populate[4]=gridLadder&populate[5]=gridLadder.steps&populate[6]=gridLadder.steps.buttonCta&populate[7]=gridLadder.steps.image&populate[8]=footer&populate[9]=footer.buttonDownload&populate[10]=footer.imageBg&pagination[pageSize]=1&pagination[page]=1&status=published`,
		{
			headers: {
				Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
			}
		}
	);

	const pagesJson = await pages.json();
	return pagesJson.data;
}

function Hero(props: TPage): ReactNode | null {
	const {title, description, buttonDownload, featuredImg} = props;

	return (
		<section className={'relative mb-60 pt-52 md:px-4 lg:px-0'}>
			<div className={'container mx-auto'}>
				<div className={'grid gap-10 lg:grid-cols-2'}>
					<h1 className={'mb-4 text-7xl font-normal'}>{title}</h1>
					<div className={'flex flex-col'}>
						<p className={'mb-8 text-xl font-normal text-gray-500'}>{description}</p>
						<div className={'flex gap-4'}>
							{buttonDownload.map(button => (
								<Link
									href={button.url ?? ''}
									target={'_blank'}
									className={'h-[40px] w-[130px]'}
									key={button.id}>
									<Image
										src={`/${button.variant}.png`}
										alt={button.id.toString()}
										width={390}
										height={120}
									/>
								</Link>
							))}
						</div>
					</div>
				</div>

				<div className={'mt-20 aspect-[1400/400] overflow-hidden rounded-2xl'}>
					<Image
						src={`${process.env.STRAPI_URL}${featuredImg.url}`}
						className={'aspect-[1400/400] w-full'}
						alt={''}
						quality={100}
						width={2800}
						height={800}
					/>
				</div>
			</div>
		</section>
	);
}

export default async function Page(): Promise<ReactNode> {
	const page = await getPageData();
	if (!page) {
		return notFound(); // TODO: handle this
	}

	return (
		<main className={'flex w-full flex-col items-center justify-center'}>
			<div className={'absolute inset-0'}>
				<Image
					src={'/heroBg.png'}
					alt={'hero-bg'}
					height={'2256'}
					width={'3840'}
				/>
			</div>

			<Hero {...page} />
			<GridLadder data={page.gridLadder} />
		</main>
	);
}
