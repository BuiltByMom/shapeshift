import Image from 'next/image';
import {notFound} from 'next/navigation';

import {Button} from '@/components/common/Button';
import Footer from '@/components/strapi-sections/products/Footer';
import Grid from '@/components/strapi-sections/products/Grid';

import type {TButton, TFooterSection, TGridSection, TStrapiImage} from '@/types/strapi';
import type {ReactNode} from 'react';

type TPage = {
	title: string;
	description: string;
	buttonCta: TButton;
	featuredImg: TStrapiImage;
	buttonDownload: TButton[];
	grid: TGridSection;
	footer: TFooterSection;
};

/********************************************************************************************
 * Fetches page data from Strapi API
 * Returns null if page is not found
 ********************************************************************************************/
async function getPageData(): Promise<TPage | null> {
	const pages = await fetch(
		`${process.env.STRAPI_URL}/api/earn?fields[0]=title&populate[1]=buttonCta&populate[3]=featuredImg&fields[4]=description&populate[10]=grid&populate[11]=grid.cardCta&populate[12]=grid.cardCta.buttonCta&populate[13]=grid.cardCta.imageBg&populate[14]=grid.card&populate[15]=grid.card.image&populate[23]=footer&populate[24]=footer.buttonCta&populate[25]=footer.buttonDownload&populate[26]=footer.imageBg&pagination[pageSize]=10&pagination[page]=1&status=published&locale=en`,
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
	const {title, description, buttonCta, featuredImg} = props;

	return (
		<section className={'relative mb-60 pt-52 md:px-4 lg:px-0'}>
			<div className={'container mx-auto'}>
				<div className={'grid gap-10 lg:grid-cols-2'}>
					<h1 className={'mb-4 text-7xl font-normal'}>{title}</h1>
					<div className={'flex flex-col'}>
						<p className={'mb-8 text-xl font-normal text-gray-500'}>{description}</p>
						<Button
							variant={'blue'}
							title={buttonCta?.title ?? 'Title'}
							href={buttonCta?.url ?? '/'}
							hasArrow
						/>
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
			<Grid data={page.grid} />
			<Footer data={page.footer} />
		</main>
	);
}
