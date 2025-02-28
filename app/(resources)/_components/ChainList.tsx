/************************************************************************************************
 ** ChainList Component:
 **
 ** A specialized component for displaying blockchain network grids
 ** Uses ResourceGrid and ResourceCard for consistent display
 **
 ** Features:
 ** - Optimized for blockchain data structure
 ** - Consistent loading and empty states
 ** - Type-safe implementation with proper TS typing
 **
 ** Usage:
 ** - Import in any page that needs to display blockchain network lists
 ** - Pass chains data and optional loading state
 ************************************************************************************************/

import {ResourceCard} from '@/app/(resources)/_components/ResourceCard';
import {ResourceGrid} from '@/app/(resources)/_components/ResourceGrid';

import type {TSupportedChainData} from '@/components/strapi/types';
import type {ReactNode} from 'react';

type TChainListProps = {
	chains: TSupportedChainData[] | null;
	isLoading?: boolean;
	className?: string;
};

export function ChainList({chains, isLoading, className}: TChainListProps): ReactNode {
	return (
		<ResourceGrid
			items={chains}
			isLoading={isLoading}
			emptyMessage={'No blockchain networks available yet.'}
			className={className}
			renderItem={chain => (
				<ResourceCard
					key={chain.slug}
					slug={chain.slug}
					title={chain.name}
					description={chain.description}
					imageUrl={chain.featuredImg?.url}
					imageWidth={chain.featuredImg?.width}
					imageHeight={chain.featuredImg?.height}
					baseURL={'/supported-chains'}
					imagePosition={'bottom'}
					altText={`${chain.name} logo`}
				/>
			)}
		/>
	);
}
