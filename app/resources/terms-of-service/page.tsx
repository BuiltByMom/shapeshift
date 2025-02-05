'use client';

import React from 'react';

export default function TermsOfServicePage(): React.ReactNode {
	return (
		<div className={'relative mt-40 flex w-full flex-col items-center justify-center gap-20'}>
			<div className={'flex max-w-[800px] flex-col'}>
				<h1 className={'mb-4 text-[40px] leading-[40px]'}>{'Terms of Service'}</h1>
				<p className={'mb-16 text-sm font-medium text-gray-500'}> {'Last Modified: January 24, 2023'}</p>

				<p className={'mb-16 text-2xl font-normal uppercase'}>
					{
						'THESE TERMS CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU AND US. PLEASE READ THESE TERMS CAREFULLY TO ENSURE THAT YOU UNDERSTAND AND AGREE TO EVERY PORTION OF THESE TERMS BEFORE USING ANY PART OF THE SERVICE.'
					}
				</p>

				<p className={'mb-6'}>
					{
						'These terms of service (these "Terms" or the "Terms") govern your: relationship with Fox Foundation, a nonprofit foundation formed in Lichtenstein ("ShapeShift", "we", "our", or "us"); and use or access of: (1) ShapeShift.com, ShapeShift.io, and any other website maintained or published by ShapeShift (each, a "Website"); (2) our software platform which enables you to hold, transfer, buy, sell, or interact with certain smart contracts ("Platform"); (3) our mobile application, which allows access to one or more of our Websites or the Platform from a mobile device ("App"); (4) any application programming interface we provide ("API"); and (5) any other of our online or mobile services or software ("Software") provided on or in connection with our service to hold, transfer, buy, sell, or enable the sale of, certain digital assets (the Websites, the Platform, the App, the API, and the Software, collectively, the "Service"). By accessing or using any part of the Service, or clicking a button or checking a box marked "I Agree" (or substantially similar language), you acknowledge that you have read, understood, acknowledge, and agree to: (i) be bound by these Terms in full; and (ii) to our '
					}
					<a
						className={'underline'}
						href={'/privacy-policy'}>
						{'privacy policy'}
					</a>
					{
						', which is incorporated into these Terms ("Privacy Policy") and includes certain rights granted to us for the collection and use of your information. These Terms apply to any visitor of a Website, user of the Service, and any other person who registers for or otherwise accesses or uses the Service (each, a "User"). Certain parts of the Service may be subject to additional terms that we may specify from time to time, and your use of such Service is subject to those additional terms. Such additional terms are hereby incorporated into these Terms.'
					}
				</p>
				<p className={'mb-6'}>
					{
						'ShapeShift may, in its sole discretion, modify or update these Terms from time to time, so you should review this page periodically. When we change these Terms in a material manner, we will update the date at the top of this page. Your continued use of the Service after any such change constitutes your acceptance of such change to these Terms. If you do not agree to any portion of these Terms or any future terms of service including future versions of these Terms, you must not use or access (or continue to access) the Service.'
					}
				</p>

				<p>
					<span className={'font-light uppercase'}>{'INVESTMENT DISCLAIMER: '}</span>
					{
						'ShapeShift does not endorse or recommend any particular digital asset, transaction, or purchasing strategy. Content on any of the Websites or your communications with any of our personnel should not be construed as purchase or investment advice. You should seek independent investment advice prior to using the Service. You acknowledge and represent that all transaction decisions made in connection with your use of the Service are made solely by you and ShapeShift will have no liability for any of your decisions.'
					}
					<span className={'uppercase'}>
						{
							' THE RISK OF LOSS IN BUYING OR SELLING A DIGITAL ASSET CAN BE SUBSTANTIAL, THEREFORE YOU SHOULD CAREFULLY CONSIDER WHETHER BUYING OR SELLING A DIGITAL ASSET IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION BEFORE BUYING OR SELLING A DIGITAL ASSET.'
						}
					</span>
				</p>

				<ol className={'list-roman space-y-6 pl-6'}>
					{/* i. Use of the Service */}
					<li>
						<h2 className={'mb-2 text-2xl font-semibold'}>{'Use of the Service'}</h2>
						<ol className={'list-[lower-alpha] space-y-4 pl-6'}>
							<li>
								<span className={'font-semibold'}>{'Eligibility to use the Service. '}</span>
								{
									"You shall not use the Service unless you are in full compliance with these Terms and all applicable laws. You shall not use any part of the Service if you cannot form a legally binding contract with ShapeShift. Any use of or access to the Service by anyone under 18 is prohibited. Currently, we do not allow Users residing or present in the following jurisdictions to use the Service: the State of New York, the State of Washington, any jurisdiction sanctioned by the United States Treasury's Office of Foreign Assets Control, or any other jurisdiction that we determine to present a high risk of fraud. You shall not use the Service if: (i) you reside or are present in one of the jurisdictions listed in the previous sentence; (ii) we determine that you violated these Terms; or (iii) we have removed or suspended you from using the Service."
								}
							</li>
							<li>
								<span className={'font-semibold'}>{'The Service Generally. '}</span>
								{
									'Generally, the purpose of the Service is to allow Users to hold, buy, sell, and transfer digital assets (buying, selling, or otherwise transferring a digital asset on our Service, referred to as a "'
								}
								<b>{'Transaction'}</b>
								{'"). Click '}
								<a
									href={
										'https://shapeshift.zendesk.com/hc/en-us/articles/115001620310-How-to-Trade-Coins-on-ShapeShift'
									}
									className={'underline'}
									target={'_blank'}>
									{'here'}
								</a>
								{' for an overview on how to trade digital assets on our Service. '}
								<b>
									{
										'OUR SERVICE IS NON-CUSTODIAL, MEANING SHAPESHIFT NEVER TAKES CONTROL OF THE DIGITAL ASSETS THAT INTERACT WITH OUR SERVICE.'
									}
								</b>{' '}
								{
									'You may be charged a miner or network fee to process the Transaction on your behalf (a "'
								}
								<b>{'Miner Fee'}</b>
								{
									'"). ShapeShift calculates the Miner Fee for a particular digital asset in its discretion. ShapeShift shall maintain a list of current Miner Fees here or on another page of the Website, however at the time of your Transaction, the particular Miner Fee may deviate from such list. ShapeShift shall notify you of the Miner Fee applicable to your Transaction before your authorization of the Transaction. ShapeShift may modify or update any portion of the Service at any time. Subject to your full compliance with these Terms, you are hereby granted a non-exclusive, limited, non-transferable, freely revocable license to access and use the Service for your personal use only and as permitted by the features of the Service ("'
								}
								<b>{'Service License'}</b>
								{
									'"). You shall not use any part of the Service for illegal or fraudulent purposes or for the purpose of consummating Transactions on behalf of another person. For the avoidance of doubt, you must be the beneficial owner of the digital assets, the sending address, the destination address, and the refund address for each Transaction you initiate on the Service. ShapeShift reserves all rights not expressly granted in these Terms in the Service and the ShapeShift Content (as defined below). ShapeShift may terminate the Service License or any portion of the Service at any time for any or no reason.'
								}
							</li>
							<li>
								<span className={'font-semibold'}>{'Suspension or Termination of the Service.'}</span>

								{
									'You acknowledge that we may, without prior notice to you: suspend the Service; change the Service; stop providing the Service or features of the Service, to you or to Users generally; or create usage or Transaction limits on the Service. '
								}
							</li>
							<li>
								<span className={'font-semibold'}>{'Third-Party Integrations.'}</span>
								{
									'You acknowledge that the Service may contain links or integrations to third-party (i.e., not ShapeShift or any of our affiliates) materials, services, or software that are not owned or controlled by us, including smart contracts (each, a "'
								}
								<b>{'Third-Party Service'}</b>
								{'"). We do not endorse or assume any responsibility for any Third-Party Service.'}
								<b>
									{
										' IF YOU ACCESS A THIRD-PARTY SERVICE FROM THE SERVICES OR SHARE ANY CONTENT ON OR THROUGH SUCH THIRD-PARTY SERVICE, YOU ACKNOWLEDGE THAT: YOU DO SO AT YOUR OWN RISK; THESE TERMS AND OUR PRIVACY POLICY MAY NOT APPLY TO SUCH THIRD-PARTY SERVICE; YOU MAY BE REQUIRED BY SUCH THIRD-PARTY TO AGREE TO CERTAIN ADDITIONAL TERMS OR CREATE AN ACCOUNT; AND THAT CERTAIN THIRD-PARTY SERVICES MAY PUBLISH TO A PUBLIC BLOCKCHAIN INFORMATION YOU SEND TO SUCH THIRD-PARTY.'
									}
								</b>
								{
									" You shall not hold us liable for any damages you incur related to your use of any Third-Party Service. You acknowledge that your dealings with or participation in promotions any advertiser that connects with you through your use of the Service, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such advertiser. You acknowledge that we will not be liable for any loss or damage of any sort relating to your interactions with any such advertiser.'"
								}
							</li>
							<li>
								<span className={'font-semibold'}>{'DEX Trading. '}</span>
								{
									'Through our Services, we offer the ability to connect to a Third-Party Service that allows you to trade digital assets on a decentralized exchange ("DEX"). You expressly acknowledge that we do not control or maintain the DEXs you may connect with through our Services, nor are we a party to any transaction on a DEX on our Service. You further acknowledge that we will have no liability for any interaction you have with a DEX. Further, you also acknowledge that we cannot reverse or refund any transaction that occurs on a DEX. You acknowledge that prior to completing a trade on a DEX, you have the sole responsibility to conduct diligence on the DEX, the assets being traded, and the underlying smart contract(s).'
								}
							</li>
							<li>
								<span className={'font-semibold'}>{'Liquidity Rewards. '}</span>
								{
									'Through the Service, you may deposit a pair of certain digital assets into a liquidity pool entirely facilitated by a Third-Party Service enabling you to possibly earn returns on those digital assets ("Liquidity Mining"). When used in connection with Liquidity Mining, "APR" means: the estimated annual percentage return for a certain pair of digital assets, calculated based on the prior 24 hours of accrued liquidity fees divided by total liquidity for that pair of digital assets, except that "FOX Bonus APR" means the estimated annual percentage returned in bonus FOX Tokens (defined in section ix) rewarded by us in connection with Liquidity Mining of FOX Token-ETH pairs and calculated as follows:'
								}
								<div className={'mt-4 pl-6'}>
									<p className={'mb-2'}>
										{
											'1.) Total amount of FOX Tokens awarded per block (as determined by ShapeShift), in the aggregate, times the annualized estimated amount of ETH blocks mined, times current USD value of FOX; divided by'
										}
									</p>
									<p>
										{
											'2.) The value of FOX-ETH UniswapV2 liquidity pool tokens currently staked in this smart contract. APR figures may include estimated FOX bonus awards where the context dictates inclusion of FOX Bonus APR.'
										}
									</p>
								</div>
								<p className={'mt-4'}>
									{
										'APR is based entirely on publicly available data provided by Uniswap. You acknowledge that the APR and FOX Bonus APR figures we provide in the Service is for illustration purposes only and is not a guarantee that any such returns will materialize. You further acknowledge that we will not be liable to you for any reliance on any APR or FOX Bonus APRs provided by us in the Service.'
									}
								</p>
							</li>
							<li>
								<span className={'font-semibold'}>{'Disclaimer of Warranties. '}</span>
								<span className={'uppercase'}>
									{
										'YOU ACKNOWLEDGE THAT THE SERVICE IS BEING PROVIDED BY SHAPESHIFT “AS IS” AND “AS AVAILABLE” BASIS. SHAPESHIFT MAKES NO WARRANTY REGARDING THE SERVICE AND HEREBY EXPRESSLY DISCLAIMS ALL IMPLIED AND STATUTORY WARRANTIES, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. SHAPESHIFT DOES NOT GUARANTEE THAT: THE SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS; THE SERVICE WILL BE AVAILABLE UNINTERRUPTED OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, SECURE, OR ERROR-FREE; ANY CONTENT PROVIDED TO YOU IN CONNECTION WITH THE SERVICE WILL BE ACCURATE, RELIABLE, OR CORRECT; ANY OF THE SERVICE’S DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM SHAPESHIFT OR THROUGH THE SERVICE WILL CREATE ANY WARRANTY.	'
									}
								</span>

								<p className={'m-6'}>
									{
										'Any content downloaded or otherwise obtained through the use of the Service is downloaded at your own risk and you will be solely responsible for any damage to your computer system or mobile device or loss of data that results from such download or your use of the Service.'
									}
								</p>

								<p className={'mb-6'}>
									{
										'Due to the disclaimers in this section, we strongly recommend that you only use the Service to manage, buy, sell, or trade small amounts of digital assets. If any issues arise in connection with the Service, ShapeShift shall make reasonable efforts to resolve such issues, but you acknowledge that ShapeShift will have no liability for any bugs, errors, or other problems that result in loss of your funds or digital assets. You acknowledge that the Service may contain more or fewer features or be licensed under different terms than previous versions. You acknowledge that ShapeShift reserves the right to make changes to the Service at any time for any reason, without prior notice, and any reliance on the current services available on the Service is at your own risk. Without limiting any disclaimer of warranty or other limitation specified in this section, you acknowledge that the Service is not suitable for commercial use, and that the Service may contain errors affecting its proper operation.'
									}
								</p>

								<p className={'mb-6'}>
									{
										'The disclaimers and exclusions under these Terms will not apply to the extent prohibited by applicable law. Federal law, some states, provinces, and other jurisdictions do not allow the exclusion and limitations of certain implied warranties, so the exclusions in this section may not apply to you. These Terms give you specific legal rights, and you may also have other rights which vary from jurisdiction to jurisdiction.'
									}
								</p>
							</li>
							<li>
								<span className={'font-semibold'}>
									{'Use of the Service on Behalf of the US Government. '}
								</span>
								{
									'If you acquire any part of the Service on behalf of the United States Government, then the Service will be deemed to be “commercial computer software” and “commercial computer software documentation,” respectively, pursuant to DFAR Section 227.7202 and FAR Section 12.212. Any use, reproduction, release, performance, display, or disclosure of the Service and any accompanying documentation by the U.S. Government will be governed solely by these Terms and is prohibited except to the extent expressly permitted by these Terms. The Service is subject to United States export laws and regulations. No portion of the Service may be exported or re-exported to certain countries or those persons or entities prohibited from receiving exports from the United States. The Service may be subject to the import and export laws of other countries'
								}
							</li>
							<li>
								<span className={'font-semibold'}>{'California Residents. '}</span>
								{
									'The provider of services associated with these Terms is ShapeShift. If you are a California resident, in accordance with Cal. Civ. Code §1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210 or (916) 445-1254.'
								}
							</li>
						</ol>
					</li>
				</ol>
			</div>
		</div>
	);
}
