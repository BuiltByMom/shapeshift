/********************************************************************************************
 * Types for Strapi API responses and component structures
 * Each component type corresponds to a section that can be included in a page
 ********************************************************************************************/
export type TStrapiImage = {
	url: string;
	width: number;
	height: number;
	formats: {
		thumbnail: {url: string; width: number; height: number};
		small: {url: string; width: number; height: number};
		medium: {url: string; width: number; height: number};
		large: {url: string; width: number; height: number};
	};
};

export type TDownloadButton = {
	id: number;
	variant: 'appstore' | 'googleplay';
	url: string;
};

export type TButton = {
	id: number;
	title: string;
	url: string;
};

export type TStat = {
	id: number;
	title: string;
	value: string;
};

export type TCard = {
	id: number;
	title: string;
	description: string;
	isTextFirst: boolean;
	image: TStrapiImage;
};

export type TGridLadderStep = {
	id: number;
	title: string;
	description: string;
	image?: TStrapiImage;
	buttonCta: TButton;
};

// Component types
export type THeroSection = {
	id: number;
	title: string;
	description: string;
	stats: TStat[];
	featuredImg: TStrapiImage;
	buttonDownload: TDownloadButton[];
	buttonCta: TButton;
};

export type TCardsRowSection = {
	id: number;
	title: string;
	ctaBlock: TButton | null;
	cards: TCard[];
};

export type TGridSection = {
	id: number;
	card: TCard[];
	cardCta: {
		id: number;
		title: string;
		description: string;
		imageBg?: TStrapiImage;
		buttonCta: TButton;
	}[];
};

export type TGridDisplacedSection = {
	id: number;
	title: string;
	description: string;
	cta: TButton;
	cards: TCard[];
	features: {
		title: string;
		description: string;
		image?: TStrapiImage;
	}[];
};

export type TGridLadderSection = {
	id: number;
	steps: TGridLadderStep[];
};

export type TFooterSection = {
	id: number;
	title: string;
	cta: string;
	imageBg: TStrapiImage;
	buttonDownload: TButton[];
	buttonCta: TButton;
};

export type TPage = {
	id: number;
	documentId: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

export type TSections = {
	hero?: THeroSection;
	cardsRow?: TCardsRowSection;
	grid?: TGridSection;
	gridLadder?: TGridLadderSection;
	gridDisplaced?: TGridDisplacedSection;
	footer?: TFooterSection;
};

export type TSectionType =
	| THeroSection
	| TCardsRowSection
	| TGridSection
	| TGridLadderSection
	| TGridDisplacedSection
	| TFooterSection;

export type TSectionPageData = TSections & TPage;

/********************************************************************************************
 * Types for Strapi Blog API responses
 * Includes both list and single post interfaces
 ********************************************************************************************/
export type TBlogPost = {
	id: number;
	documentId: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	imageFeatured: TStrapiImage;
	type: ('announcements' | 'tutorials' | 'news')[];
	description: string;
};

export type TBlogListResponse = {
	data: TBlogPost[];
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
};

export type TFaqData = {
	id: number;
	documentId: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	faqSection: TFaqSection[];
};

export type TFaqSection = {
	id: number;
	sectionTitle: string;
	faqSectionItem: TFaqSectionItem[];
};

export type TFaqSectionItem = {
	id: number;
	question: string;
	answer: string;
};
