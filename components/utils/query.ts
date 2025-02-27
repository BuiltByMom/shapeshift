import type {
	TDiscoverData,
	TFaqData,
	TPrivacyPolicyData,
	TSupportedChainData,
	TSupportedProtocolData,
	TSupportedWalletData,
	TTermsOfServiceData
} from '@/types/strapi';

export async function getFaq(): Promise<TFaqData | null> {
	const res = await fetch(
		`${process.env.STRAPI_URL}/api/faq?populate[0]=faqSection&populate[1]=faqSection.faqSectionItem&pagination[pageSize]=10&pagination[page]=1&status=published&locale=en`,
		{
			headers: {
				Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
			}
		}
	);

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
}

export async function getSupportedWallets(): Promise<TSupportedWalletData[] | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/supported-wallets?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
}

export async function getSupportedWallet(slug: string): Promise<TSupportedWalletData | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/supported-wallets?filters[slug][$eq]=${slug}&populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data[0];
}

export async function getSupportedChains(): Promise<TSupportedChainData[] | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/supported-chains?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
}

export async function getSupportedChain(slug: string): Promise<TSupportedChainData | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/supported-chains?filters[slug][$eq]=${slug}&populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data[0];
}

export async function getSupportedProtocols(): Promise<TSupportedProtocolData[] | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/supported-protocols?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
}

export async function getSupportedProtocol(slug: string): Promise<TSupportedProtocolData | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/supported-protocols?filters[slug][$eq]=${slug}&populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data[0];
}

export async function getDiscovers(): Promise<TDiscoverData[] | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/discovers?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
}

export async function getDiscover(slug: string): Promise<TDiscoverData | null> {
	const res = await fetch(
		`${process.env.STRAPI_URL}/api/discovers?filters[slug][$eq]=${slug}&populate[0]=features&fields[1]=title&fields[2]=description&populate[3]=featuredImg&populate[4]=features.image`,
		{
			headers: {
				Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
			}
		}
	);

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data[0];
}

export async function getPrivacyPolicy(): Promise<TPrivacyPolicyData | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/privacy-policy?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
}

export async function getTermsOfService(): Promise<TTermsOfServiceData | null> {
	const res = await fetch(`${process.env.STRAPI_URL}/api/terms-of-service?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
}
