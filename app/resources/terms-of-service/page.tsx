'use client';

import React from 'react';

export default function TermsOfServicePage(): React.ReactNode {
	return (
		<main className={'terms-of-service mx-auto mt-40 max-w-[800px] px-4 py-8'}>
			<h1 className={'mb-4 text-[40px] leading-[52px]'}>{'Terms of Service'}</h1>
			<p className={'mb-16 text-sm text-gray-500'}>{'Last Modified: January 24, 2023'}</p>
			<p className={'mb-16 text-2xl font-normal'}>
				{
					'THESE TERMS CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU AND US. PLEASE READ THESE TERMS CAREFULLY TO ENSURE THAT YOU UNDERSTAND AND AGREE TO EVERY PORTION OF THESE TERMS BEFORE USING ANY PART OF THE SERVICE.'
				}
			</p>

			<p className={'mb-7'}>
				{'These terms of service (these "'}
				<strong>{'Terms'}</strong>
				{'" or the "'}
				<strong>{'Terms'}</strong>
				{'") govern your: relationship with Fox Foundation, a nonprofit foundation formed in Lichtenstein ("'}
				<strong>{'ShapeShift'}</strong>
				{'", "'}
				<strong>{'we'}</strong>
				{'", "'}
				<strong>{'our'}</strong>
				{'", or "'}
				<strong>{'us'}</strong>
				{
					'"); and use or access of: (1) ShapeShift.com, ShapeShift.io, and any other website maintained or published by ShapeShift (each, a "'
				}
				<strong>{'Website'}</strong>
				{
					'"); (2) our software platform which enables you to hold, transfer, buy, sell, or interact with certain smart contracts ("'
				}
				<strong>{'Platform'}</strong>
				{
					'"); (3) our mobile application, which allows access to one or more of our Websites or the Platform from a mobile device ("'
				}
				<strong>{'App'}</strong>
				{'"); (4) any application programming interface we provide ("'}
				<strong>{'API'}</strong>
				{'"); and (5) any other of our online or mobile services or software ("'}
				<strong>{'Software'}</strong>
				{
					'") provided on or in connection with our service to hold, transfer, buy, sell, or enable the sale of, certain digital assets (the Websites, the Platform, the App, the API, and the Software, collectively, the "'
				}
				<strong>{'Service'}</strong>
				{
					'"). By accessing or using any part of the Service, or clicking a button or checking a box marked "I Agree" (or substantially similar language), you acknowledge that you have read, understood, acknowledge, and agree to: (i) be bound by these Terms in full; and (ii) to our '
				}{' '}
				<a
					className={'text-blue underline'}
					href={'/privacy-policy'}>
					{'privacy policy'}
				</a>
				{', which is incorporated into these Terms ("'}
				<strong>{'Privacy Policy'}</strong>
				{
					'") and includes certain rights granted to us for the collection and use of your information. These Terms apply to any visitor of a Website, user of the Service, and any other person who registers for or otherwise accesses or uses the Service (each, a "'
				}
				<strong>{'User'}</strong>
				{
					'"). Certain parts of the Service may be subject to additional terms that we may specify from time to time, and your use of such Service is subject to those additional terms. Such additional terms are hereby incorporated into these Terms.'
				}
			</p>

			<p className={'mb-7'}>
				{
					'ShapeShift may, in its sole discretion, modify or update these Terms from time to time, so you should review this page periodically. When we change these Terms in a material manner, we will update the date at the top of this page. Your continued use of the Service after any such change constitutes your acceptance of such change to these Terms. If you do not agree to any portion of these Terms or any future terms of service including future versions of these Terms, you must not use or access (or continue to access) the Service.'
				}
			</p>

			<p className={'mb-16'}>
				{
					'INVESTMENT DISCLAIMER: ShapeShift does not endorse or recommend any particular digital asset, transaction, or purchasing strategy. Content on any of the Websites or your communications with any of our personnel should not be construed as purchase or investment advice. You should seek independent investment advice prior to using the Service. You acknowledge and represent that all transaction decisions made in connection with your use of the Service are made solely by you and ShapeShift will have no liability for any of your decisions. THE RISK OF LOSS IN BUYING OR SELLING A DIGITAL ASSET CAN BE SUBSTANTIAL, THEREFORE YOU SHOULD CAREFULLY CONSIDER WHETHER BUYING OR SELLING A DIGITAL ASSET IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION BEFORE BUYING OR SELLING A DIGITAL ASSET.'
				}
			</p>
			<ol className={'list-roman space-y-6 pl-6'}>
				{/* i. Use of the Service */}
				<li>
					<h2 className={'mb-4 text-2xl'}>{'Use of the Service'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'Eligibility to use the Service. '}</strong>
							{
								'Eligibility to use the Service. You shall not use the Service unless you are in full compliance with these Terms and all applicable laws. You shall not use any part of the Service if you cannot form a legally binding contract with ShapeShift. Any use of or access to the Service by anyone under 18 is prohibited. Currently, we do not allow Users residing or present in the following jurisdictions to use the Service: the State of New York, the State of Washington, any jurisdiction sanctioned by the United States Treasury’s Office of Foreign Assets Control, or any other jurisdiction that we determine to present a high risk of fraud. You shall not use the Service if: (i) you reside or are present in one of the jurisdictions listed in the previous sentence; (ii) we determine that you violated these Terms; or (iii) we have removed or suspended you from using the Service.'
							}
						</li>
						<li>
							<strong>{'The Service Generally. '}</strong>
							{
								'Generally, the purpose of the Service is to allow Users to hold, buy, sell, and transfer digital assets (buying, selling, or otherwise transferring a digital asset on our Service, referred to as a “'
							}
							<strong>{'Transaction'}</strong>
							{'”). Click '}
							<a
								className={'text-blue underline'}
								href={
									'https://shapeshift.zendesk.com/hc/en-us/articles/115001620310-How-to-Trade-Coins-on-ShapeShift'
								}
								target={'_blank'}>
								{'here'}
							</a>
							{' for an overview on how to trade digital assets on our Service. '}
							<strong>
								{
									'OUR SERVICE IS NON-CUSTODIAL, MEANING SHAPESHIFT NEVER TAKES CONTROL OF THE DIGITAL ASSETS THAT INTERACT WITH OUR SERVICE.'
								}
							</strong>{' '}
							{'You may be charged a miner or network fee to process the Transaction on your behalf (a “'}
							<strong>{'Miner Fee'}</strong>
							{
								'”). ShapeShift calculates the Miner Fee for a particular digital asset in its discretion. ShapeShift shall maintain a list of current Miner Fees here or on another page of the Website, however at the time of your Transaction, the particular Miner Fee may deviate from such list. ShapeShift shall notify you of the Miner Fee applicable to your Transaction before your authorization of the Transaction. ShapeShift may modify or update any portion of the Service at any time. Subject to your full compliance with these Terms, you are hereby granted a non-exclusive, limited, non-transferable, freely revocable license to access and use the Service for your personal use only and as permitted by the features of the Service (“'
							}
							<strong>{'Service License'}</strong>
							{
								'”). You shall not use any part of the Service for illegal or fraudulent purposes or for the purpose of consummating Transactions on behalf of another person. For the avoidance of doubt, you must be the beneficial owner of the digital assets, the sending address, the destination address, and the refund address for each Transaction you initiate on the Service. ShapeShift reserves all rights not expressly granted in these Terms in the Service and the ShapeShift Content (as defined below). ShapeShift may terminate the Service License or any portion of the Service at any time for any or no reason.'
							}
						</li>
						<li>
							<strong>{'Suspension or Termination of the Service. '}</strong>
							{
								'You acknowledge that we may, without prior notice to you: suspend the Service; change the Service; stop providing the Service or features of the Service, to you or to Users generally; or create usage or Transaction limits on the Service.'
							}
						</li>
						<li>
							<strong>{'Third-Party Integrations. '}</strong>
							{
								'You acknowledge that the Service may contain links or integrations to third-party (i.e., not ShapeShift or any of our affiliates) materials, services, or software that are not owned or controlled by us, including smart contracts (each, a “'
							}
							<strong>{'Third-Party Service'}</strong>
							{
								'”). We do not endorse or assume any responsibility for any Third-Party Service. IF YOU ACCESS A THIRD-PARTY SERVICE FROM THE SERVICES OR SHARE ANY CONTENT ON OR THROUGH SUCH THIRD-PARTY SERVICE, YOU ACKNOWLEDGE THAT: YOU DO SO AT YOUR OWN RISK; THESE TERMS AND OUR PRIVACY POLICY MAY NOT APPLY TO SUCH THIRD-PARTY SERVICE; YOU MAY BE REQUIRED BY SUCH THIRD-PARTY TO AGREE TO CERTAIN ADDITIONAL TERMS OR CREATE AN ACCOUNT; AND THAT CERTAIN THIRD-PARTY SERVICES MAY PUBLISH TO A PUBLIC BLOCKCHAIN INFORMATION YOU SEND TO SUCH THIRD-PARTY. You shall not hold us liable for any damages you incur related to your use of any Third-Party Service. You acknowledge that your dealings with or participation in promotions any advertiser that connects with you through your use of the Service, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such advertiser. You acknowledge that we will not be liable for any loss or damage of any sort relating to your interactions with any such advertiser.'
							}
						</li>
						<li>
							<strong>{'DEX Trading. '}</strong>
							{
								'Through our Services, we offer the ability to connect to a Third-Party Service that allows you to trade digital assets on a decentralized exchange (“'
							}
							<strong>{'DEX'}</strong>
							{
								'”). You expressly acknowledge that we do not control or maintain the DEXs you may connect with through our Services, nor are we a party to any transaction on a DEX on our Service. You further acknowledge that we will have no liability for any interaction you have with a DEX. Further, you also acknowledge that we cannot reverse or refund any transaction that occurs on a DEX. You acknowledge that prior to completing a trade on a DEX, you have the sole responsibility to conduct diligence on the DEX, the assets being traded, and the underlying smart contract(s).'
							}
						</li>
						<li>
							<strong>{'Liquidity Rewards. '}</strong>
							{
								'Through the Service, you may deposit a pair of certain digital assets into a liquidity pool entirely facilitated by a Third-Party Service enabling you to possibly earn returns on those digital assets (“'
							}
							<strong>{'Liquidity Mining'}</strong>
							{'”). When used in connection with Liquidity Mining, “'}
							<strong>{'APR'}</strong>
							{
								'” means: the estimated annual percentage return for a certain pair of digital assets, calculated based on the prior 24 hours of accrued liquidity fees divided by total liquidity for that pair of digital assets, except that “'
							}
							<strong>{'FOX Bonus APR'}</strong>
							{
								'” means the estimated annual percentage returned in bonus FOX Tokens (defined in section ix) rewarded by us in connection with Liquidity Mining of FOX Token-ETH pairs and calculated as follows:'
							}

							<ol className={'my-4 list-decimal space-y-4 pl-6'}>
								<li>
									{
										') Total amount of FOX Tokens awarded per block (as determined by ShapeShift), in the aggregate, times the annualized estimated amount of ETH blocks mined, times current USD value of FOX; divided by'
									}
								</li>
								<li>
									{') The value of '}
									<a
										className={'text-blue underline'}
										href={'https://etherscan.io/token/0x470e8de2ebaef52014a47cb5e6af86884947f08c'}
										target={'_blank'}>
										{'FOX-ETH UniswapV2 liquidity pool tokens '}
									</a>
									{'currently staked in '}
									<a
										className={'text-blue underline'}
										href={'https://etherscan.io/address/0xDd80E21669A664Bce83E3AD9a0d74f8Dad5D9E72'}
										target={'_blank'}>
										{'this smart contract.'}
									</a>
									{
										' APR figures may include estimated FOX bonus awards where the context dictates inclusion of FOX Bonus APR.'
									}
								</li>
							</ol>
							{
								'APR is based entirely on publicly available data provided by Uniswap. You acknowledge that the APR and FOX Bonus APR figures we provide in the Service is for illustration purposes only and is not a guarantee that any such returns will materialize. You further acknowledge that we will not be liable to you for any reliance on any APR or FOX Bonus APRs provided by us in the Service.'
							}
						</li>
						<li className={'mb-4'}>
							<strong>{'Disclaimer of Warranties. '}</strong>
							{
								'YOU ACKNOWLEDGE THAT THE SERVICE IS BEING PROVIDED BY SHAPESHIFT “AS IS” AND “AS AVAILABLE” BASIS. SHAPESHIFT MAKES NO WARRANTY REGARDING THE SERVICE AND HEREBY EXPRESSLY DISCLAIMS ALL IMPLIED AND STATUTORY WARRANTIES, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. SHAPESHIFT DOES NOT GUARANTEE THAT: THE SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS; THE SERVICE WILL BE AVAILABLE UNINTERRUPTED OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, SECURE, OR ERROR-FREE; ANY CONTENT PROVIDED TO YOU IN CONNECTION WITH THE SERVICE WILL BE ACCURATE, RELIABLE, OR CORRECT; ANY OF THE SERVICE’S DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM SHAPESHIFT OR THROUGH THE SERVICE WILL CREATE ANY WARRANTY.'
							}
							<p className={'mt-4'}>
								{
									'Any content downloaded or otherwise obtained through the use of the Service is downloaded at your own risk and you will be solely responsible for any damage to your computer system or mobile device or loss of data that results from such download or your use of the Service.  '
								}
							</p>
							<p className={'my-4'}>
								{
									'Due to the disclaimers in this section, we strongly recommend that you only use the Service to manage, buy, sell, or trade small amounts of digital assets. If any issues arise in connection with the Service, ShapeShift shall make reasonable efforts to resolve such issues, but you acknowledge that ShapeShift will have no liability for any bugs, errors, or other problems that result in loss of your funds or digital assets. You acknowledge that the Service may contain more or fewer features or be licensed under different terms than previous versions. You acknowledge that ShapeShift reserves the right to make changes to the Service at any time for any reason, without prior notice, and any reliance on the current services available on the Service is at your own risk. Without limiting any disclaimer of warranty or other limitation specified in this section, you acknowledge that the Service is not suitable for commercial use, and that the Service may contain errors affecting its proper operation.'
								}
							</p>
							<p className={'mb-4'}>
								{
									'The disclaimers and exclusions under these Terms will not apply to the extent prohibited by applicable law. Federal law, some states, provinces, and other jurisdictions do not allow the exclusion and limitations of certain implied warranties, so the exclusions in this section may not apply to you. These Terms give you specific legal rights, and you may also have other rights which vary from jurisdiction to jurisdiction. '
								}
							</p>
						</li>
						<li>
							<strong>{'Use of the Service on Behalf of the US Government. '}</strong>
							{
								'If you acquire any part of the Service on behalf of the United States Government, then the Service will be deemed to be “commercial computer software” and “commercial computer software documentation,” respectively, pursuant to DFAR Section 227.7202 and FAR Section 12.212. Any use, reproduction, release, performance, display, or disclosure of the Service and any accompanying documentation by the U.S. Government will be governed solely by these Terms and is prohibited except to the extent expressly permitted by these Terms. The Service is subject to United States export laws and regulations. No portion of the Service may be exported or re-exported to certain countries or those persons or entities prohibited from receiving exports from the United States. The Service may be subject to the import and export laws of other countries'
							}
						</li>
						<li>
							<strong>{'California Residents. '}</strong>
							{
								'The provider of services associated with these Terms is ShapeShift. If you are a California resident, in accordance with Cal. Civ. Code §1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210 or (916) 445-1254.'
							}
						</li>
					</ol>
				</li>

				{/* ii. User Accounts */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'User Accounts'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'ShapeShift Accounts. '}</strong>
							{'You may be required to sign up for a ShapeShift account ("'}
							<strong>{'Account'}</strong>
							{
								'") in order to use certain portions of the Service. We strongly recommend that when creating your Account, you use strong passwords that contain a combination of uppercase and lowercase letters, numbers, and symbols. You shall notify ShapeShift immediately of any breach of security or unauthorized use of your Account by emailing our customer support '
							}
							<a
								target={'_blank'}
								className={'text-blue underline'}
								href={'mailto:support@shapeshift.zendesk.com'}>
								{'here'}
							</a>
							{' or making a support request '}
							<a
								target={'_blank'}
								className={'text-blue underline'}
								href={'https://shapeshift.zendesk.com/hc/en-us/requests/new'}>
								{'here'}
							</a>
							{
								'. ShapeShift will not be liable for any losses you incur that are caused by any unauthorized use of your Account. Your Account gives you access to the Service and any other functionality that we may establish and maintain. If you open an Account on behalf of an organization, then for these Terms "you" includes that organization – meaning (i) you represent that you are an authorized representative with the authority to bind the organization to these Terms, (ii) you agree to these Terms on its behalf, and (iii) if you cease to be such a representative, you shall stop using the Service on its behalf. You shall not use another User\'s Account. When creating your Account, provide complete and accurate information and keep it updated. You may delete your Account through your Account settings or by emailing us '
							}
							<a
								target={'_blank'}
								className={'text-blue underline'}
								href={'mailto:privacy@shapeshift.io'}>
								{'here'}
							</a>
							{'. You acknowledge that there are no refunds for deletion of your Account.'}
						</li>

						<li>
							<strong>{'Verification. '}</strong>
							{
								'You shall provide us with any information we request for the purposes of identity verification and the detection of money laundering, terrorist financing, fraud, or any other financial crime and consent to us keeping a record of such information. You authorize us to make inquiries, whether directly or through third-parties, that we determine necessary to verify your identity or to otherwise prevent money laundering, terrorist financing, fraud, or any other financial crime, and to take any other action we reasonably determine is necessary based on the results of such inquiries. When we make these inquiries, you acknowledge that your personal information may be disclosed to fraud prevention or financial crime agencies and that these agencies and you consent to such disclosures. You are solely responsible for the activity that occurs on your Account, and you must keep your Account password secure.'
							}
						</li>
						<li>
							<strong>{'Your Email Address. '}</strong>
							{
								'By providing ShapeShift your email address you consent to our use of your email address to send you ShapeShift-related or Service-related notices, including any notices required by law, instead of communication by postal mail. If you do not want to receive such email messages, you may opt out by clicking “unsubscribe” or similar language in any email message received from ShapeShift. You acknowledge that opting out of receiving emails from us may prevent you from learning about Service updates, improvements, or offers'
							}
						</li>

						<li>
							<strong>{'Service Rules. '}</strong>
							{'You shall not engage in any of the following (each, a “'}
							<strong>{'Prohibited Activity'}</strong>
							{
								'”): (i) modifying, disassembling, decompiling, or reverse engineering any portion of the Service; (ii) renting, leasing, loaning, reselling, sublicensing, or otherwise transferring any portion of the Service to any third-party; (iii) use any portion of the Service to provide time sharing or similar services for any third-party; (iv) copying, distributing, or disclosing any part of the Service in any medium, including by any automated or non-automated “scraping”; (v) writing, using any automated system, including “robots,” “spiders,” “offline readers,” etc., to access the Service in a manner that sends more request messages to the ShapeShift servers than a human can reasonably produce in the same period of time by using a conventional on-line web browser (except that ShapeShift grants the operators of public search engines revocable permission to use spiders to copy publicly available materials from the Websites for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of those materials, but not caches or archives of such materials); (vi) transmitting spam, chain letters, or other unsolicited email in connection with the Service; (vii) attempting to interfere with, compromise the system integrity or security or decipher any transmissions to or from the servers running the Service; (viii) taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure; (ix) uploading invalid data, viruses, worms, or other software agents through the Service; (x) collecting or harvesting any personally identifiable information from the Service; (xi) using the Service for any commercial solicitation purposes; (xii) impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity in connection with the Service, including using a temporary email account; (xiii) interfering with the proper working of the Service; (xiv) accessing any content on the Service through any technology or means other than those provided or authorized by the Service; (xv) bypassing the measures we may use to prevent or restrict access to the Service, including removing, circumventing, disabling or otherwise interfering with security-related features or features that prevent or restrict use or copying of any content or enforce limitations on use of the Service or the content of the Service; or (xvi) deleting any of our copyright and other proprietary rights notices.'
							}
						</li>
						<li>
							<strong>{'Suspension or Termination of your Account. '}</strong>
							{
								'You acknowledge that we may permanently or temporarily terminate or suspend your access to the Service without notice and liability for any reason, including if in our sole determination you violate any part of these Terms. ShapeShift may, without prior notice: suspend, restrict, or terminate your access to any portion of the Service, deactivate or cancel your Account, or seek to block any Transaction you initiate if: (i) we are required by a facially valid subpoena, court order, or binding order of a government authority; (ii) we reasonably suspect you of using the Service in connection with a Prohibited Activity; (iii) your Account is subject to any pending litigation, investigation, or government proceeding; (iv) we reasonably believe there to be a heightened risk of legal or regulatory non-compliance associated with your Account or your Account’s activity; (v) you take any action that ShapeShift deems, in its sole discretion, as circumventing ShapeShift’s controls, including opening more than one Account, initiating Transactions for the benefit of a third-party, or violating the terms of any ShapeShift Promotion; or (vi) for any other reason or no reason in our sole discretion. If your Account or use of the Service is terminated or suspended, you acknowledge that you will remain bound by these Terms. If ShapeShift suspends or closes your Account, or terminates your use of the Service, in whole or in part, for any reason, we will use commercially reasonable efforts to provide you with notice of our actions but you acknowledge that ShapeShift’s decision to take certain actions, including limiting access to, suspending, or closing your Account, may be based on confidential criteria that are essential to ShapeShift’s risk management and security protocols and that ShapeShift is under no obligation to disclose the details of its risk management and security procedures to you. ShapeShift will have no liability for any action taken by us substantially consistent with or authorized by this section.'
							}
						</li>
					</ol>
				</li>

				{/* iii. Transactions on the Service */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'Transactions on the Service'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'Digital Wallet. '}</strong>
							{
								'You may be required to create or link with the Service a digital wallet in order to utilize certain portions of the Service, including initiating and completing Transactions. WHEN YOU CREATE A NEW DIGITAL WALLET, YOU MUST REMEMBER OR WRITE DOWN THE ASSOCIATED ACCOUNT EMAIL, PASSWORD, AND RECOVERY PHRASE TO RETAIN ACCESS TO ANY DIGITAL ASSETS STORED ON SUCH WALLET IN ORDER TO RETAIN OR RECOVER ANY APPLICABLE DIGITAL ASSETS IF YOU DELETE YOUR SHAPESHIFT ACCOUNT OR IF SHAPESHIFT CEASES OPERATION. You are solely responsible for the management of any digital wallet you control and the digital assets within such digital wallet. ShapeShift may not be able to recover any digital wallet or digital asset for you in the event you forget your password or lose your recovery phrase. You acknowledge that ShapeShift will not be liable for any loss of funds or digital assets due to your loss of your Account email, password, or recovery phrase. If you need assistance in setting up a new digital wallet or understanding how the recovery phrase process works, please email our customer support '
							}
							<a
								target={'_blank'}
								className={'text-blue underline'}
								href={'mailto:support@shapeshift.zendesk.com'}>
								{'here'}
							</a>
							{' or make a support request '}
							<a
								target={'_blank'}
								className={'text-blue underline'}
								href={'https://shapeshift.zendesk.com/hc/en-us/requests/new'}>
								{'here'}
							</a>
						</li>
						<li>
							<strong>{'Digital Asset Prices. '}</strong>
							{
								'You acknowledge that we utilize Third-Party Services to determine prices on the Service, including for Transactions that occur on a Third-Party Service, such as a DEX. Digital assets are experimental and risky. We will use good faith efforts to ensure the Service provides fair and accurate price and Transaction fee information, but this information is volatile and subject to change without advance notice and instantaneously. Factors that we consider when offering a price to a User include: brokerage considerations, risk, liquidity, and other proprietary factors. The price for a Transaction is provided at the time your payment is received and confirmed by the applicable blockchain network, limited to the number of confirmations we deem reasonable in order to protect us from double-spends, 51% attacks, or other risks.'
							}
						</li>
						<li>
							<strong>{'Transactions Generally. '}</strong>
							{
								'We reserve the right to: (i) refuse to process or to cancel any pending Transaction as required by law or in response to a subpoena, court order, or other binding government order or to enforce any Transaction limits whether imposed by us or otherwise; (ii) delay any Transaction we reasonably believe has a risk of fraud or illegal activity; and (iii) refuse to process or cancel any Transaction due to technological issues with the blockchain software, the Service, or any other software or process impacting the Service. You acknowledge that ShapeShift cannot reverse a Transaction which has been broadcast to a blockchain network and that once you initiate a Transaction, it may finalize. Refund requests will be provided in accordance with article VIII. You acknowledge that you or ShapeShift may not be able to reverse or change any Transaction denoted as complete or pending.'
							}
						</li>

						<li>
							<strong>{'Payments. '}</strong>
							{
								'We will determine when to accept any payment on the Service and may accept a payment with zero block confirmations. A payment broadcasted to the blockchain network does not constitute our acceptance of such payment. When submitting a Transaction, you may elect to be provided with a guaranteed price by selecting the “Precise Amount” function (or any other similarly worded function) for a specified period of time as long as we receive and accept your payment during such period of time. We may cancel any Transaction that does not finalize or confirm by 48 hours after being initiated.  We only accept one form of payment per Transaction. If you attempt to initiate a Transaction with more than one form of payment the pricing for the Transaction may not be honored and we may cancel the Transaction.'
							}
						</li>
						<li>
							<strong>{'Digital Assets. '}</strong>
							{
								'ShapeShift does not guarantee the listing of any asset on the Service and we may add or remove digital assets to the Service in our sole discretion. We may impose Transaction or amount limits to any digital asset on our Service. You shall not attempt to use the Services to store, send, request, or receive digital assets that are not supported by ShapeShift. ShapeShift assumes no responsibility or liability in connection with any attempt to use the Service for digital assets that we do not support.'
							}
						</li>
						<li>
							<strong>{'Underlying Protocols. '}</strong>
							{
								'Generally, the underlying protocols in our Service are open source and any person can use, copy, modify, and distribute them. You acknowledge that: (i) ShapeShift does not own or control the underlying software protocols which govern the operation of the digital assets supported on the Service; (ii) that ShapeShift is not responsible for the operation of the underlying protocols and that we make no guarantee of those protocols’ functionality, security, or availability; and (iii) that the underlying protocols are subject to sudden changes in operating rules, which may materially affect the value, function, our ability to have a particular digital asset listed on our Service, the name of the digital asset, or any combination of the foregoing items.'
							}
						</li>
						<li>
							<strong>{'Digital Asset Forks. '}</strong>
							{
								'In the event of a digital asset fork, you acknowledge that: (i) ShapeShift may, without advance notice to you temporarily suspend operations associated with such digital asset; (ii) ShapeShift may not support either branch of the forked digital asset protocol after that fork; (iii) if you send a Transaction at the time of the fork, ShapeShift will only honor the originally-intended Transaction that you sent; and (iv) ShapeShift assumes no responsibility for damages related to an unsupported branch of a forked digital asset protocol.'
							}
						</li>
						<li>
							<strong>{'Taxes. '}</strong>
							{
								'It is your sole responsibility to determine whether, and to what extent, any taxes apply to any Transaction you conduct through the Service, and to withhold, collect, report, and remit the correct amounts of taxes to the appropriate tax authorities. Your Transaction history is available through your Account settings. You acknowledge that ShapeShift will have no liability for any taxes associated with your Transactions.'
							}
						</li>
					</ol>
				</li>

				{/* iv. User Feedback and Ideas */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'User Feedback and Ideas'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'User Feedback and Ideas. '}</strong>
							{
								'You may choose to or we may invite you to submit feedback, ideas, modifications, comments, or suggestions about the Service or ShapeShift generally, including about how to improve the Service or our products (each, an “'
							}
							<strong>{'Idea'}</strong>
							{
								'”). By submitting any Idea, you acknowledge that and hereby consent to your disclosure being gratuitous, unsolicited and without restriction and will not place ShapeShift under any fiduciary or other obligation, and that ShapeShift is the sole owner of such Idea and that we are free to use any Idea without any additional compensation to you, or to disclose the Ideas on a non-confidential basis or otherwise to anyone. You acknowledge that, despite our acceptance of your Idea submission, ShapeShift does not waive any rights to use similar or related ideas previously known to ShapeShift, or developed by its employees or contractors, or obtained from sources other than you.'
							}
						</li>
					</ol>
				</li>

				{/* v. The ShapeShift App */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'The ShapeShift App'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'Generally. '}</strong>
							{
								'Generally. To use the App, you must have a mobile device that is compatible with the App. ShapeShift does not guarantee that the App will be compatible with your mobile device. You may be required by your wireless provider to use mobile data in connection with the App and may incur additional charges from your wireless provider for using this data. You acknowledge that you are solely responsible for any such charges and ShapeShift will have no liability for such charges. ShapeShift hereby grants you a non-exclusive, non-transferable, revocable license to use a compiled code copy of the App for one Account on mobile devices owned or leased solely by you for your personal use (“'
							}
							<strong>{'App License'}</strong>
							{
								'”). The App License is not a sale of the App or any copy of the App, and ShapeShift or its third-party partners or suppliers retain all rights, title, and interest in the App (and any copy of the App). Any attempt by you to transfer any of the rights, duties, or obligations in connection with the App License, except as expressly provided for in these Terms, is void and of no legal effect. You acknowledge that ShapeShift may release future versions of the App, which may be automatically downloaded to your mobile device and replace a prior version of the App. You consent to such automatic upgrading on your mobile device and acknowledge that these Terms will apply to all such upgrades. Any third-party code that may be incorporated in the App is covered by the applicable open source or third-party license end-user license agreement, if any, authorizing use of such code. ShapeShift reserves all rights in the App not expressly granted under these Terms. When you download and operate the App for the first time, you may be required to create a new Account, which can have the same password as your old Account.'
							}
						</li>
						<li>
							<strong>{'Additional Apple App Store Terms. '}</strong>
							{
								'Additional Apple App Store Terms. This section applies to all Users who obtain the App from Apple\'s App Store. You and ShapeShift acknowledge that: (i) these Terms are solely between you and ShapeShift; (ii) Apple, Inc. and its affiliates or subsidiaries ("'
							}
							<strong>{'Apple'}</strong>
							{
								"”) are not a party to these Terms; and (iii) Apple has no responsibility for the App or its related content. Your use of the App must comply with the applicable Apple's App Store terms of service or use. If a conflict arises between Apple's App Store terms and these Terms, then Apple's App Store terms of service or use will prevail. The App License is limited to use on Apple-branded Products that you own or control and as permitted by the Usage Rules set forth in the App Store Terms of Service, except that the App may be accessed and used by other Accounts associated with you via “Family Sharing” or volume purchasing. You and ShapeShift acknowledge that Apple has no obligation to provide you with any maintenance and support services with respect to the App. ShapeShift is solely responsible for any product warranties of the App, whether express or implied by law, to the extent not effectively disclaimed elsewhere in these Terms. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the App to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation with respect to the App, and any other claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to any warranty will be solely ShapeShift’s responsibility. You acknowledge that Apple is not responsible for addressing any claims of you or any third-party relating to the App and your possession or use of the App, including: (iv) product liability claims; (v) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (vi) claims arising under consumer protection, privacy, or similar legislation. You and ShapeShift acknowledge that, if any third-party claim that the App or your possession and use of the App infringes that third-party’s intellectual property rights, ShapeShift, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claim to the extent required by these Terms. You shall comply with any applicable third-party terms of agreement when using the App. You and ShapeShift acknowledge that Apple is a third-party beneficiary of these Terms as relates to your license of the App, and that, upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms as relates to your license of the App against you as a third-party beneficiary of these Terms."
							}
						</li>
						<li>
							<strong>{'Google Play Store Terms. '}</strong>
							{
								"If you downloaded the App from Google's Play Store and a conflict arises between Google's Play Store terms and these Terms, then you acknowledge that Google's Play Store terms will prevail."
							}
						</li>
					</ol>
				</li>

				{/* vi. Our Proprietary Rights */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'Our Proprietary Rights'}</h2>
					<p>
						{
							'Subject to article IV, the Service, and all materials contained in the Service or transferred to or from the Service, including software, images, text, graphics, illustrations, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music, and content belonging to other Users (“'
						}
						<strong>{'ShapeShift Content'}</strong>
						{
							'”) and all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights and other intellectual property rights that may now exist or later come into existence, and any related applications and registrations, renewals and extensions, under the laws of any jurisdiction underlying any of the foregoing items (“'
						}
						<strong>{'Intellectual Property Rights'}</strong>
						{
							'”) are the exclusive property of ShapeShift and its licensors. Except as provided in these Terms or in any other applicable terms, nothing in these Terms will be deemed to create a license in or under any such Intellectual Property Rights, and you shall not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any ShapeShift Content, without our prior written consent. Use of the ShapeShift Content for any purpose not expressly permitted by these Terms is prohibited.'
						}
					</p>
				</li>

				{/* vii. Privacy & Security */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'Privacy & Security'}</h2>
					<div>
						{
							'ShapeShift respects the privacy of its Users and will not request any information beyond what is necessary for the use of the Service or to comply with our obligations under applicable law. ShapeShift also does not obscure the blockchain information that it does request or obtain. '
						}
						<p>
							<strong>
								{
									'You acknowledge that due to the inherent transparent nature of blockchains, Transactions are public and easily correlated.'
								}
							</strong>
						</p>
						{
							" Attempting to utilize ShapeShift to obscure Transactions or assets will be pointless and ineffective, and is ill-advised. Law enforcement has full access to blockchain information that goes in or out of ShapeShift's system. You acknowledge that ShapeShift will comply willingly with all valid legal requests for information. We reserve the right to provide information to law enforcement personnel and other third-parties to answer inquiries, participate in investigations, respond to legal process, respond to the order of a court of competent jurisdiction and those exercising the court’s authority, and to protect ShapeShift and our Users. By using the Service you are consenting to our "
						}
						<a
							target={'_blank'}
							className={'text-blue underline'}
							href={'/privacy-policy'}>
							{'Privacy Policy'}
						</a>
						{
							', which allows us, among other things, to collect, use, and disclose your personally identifiable information and aggregate data.'
						}
					</div>
					<p>
						{
							'ShapeShift cares about the integrity and security of your personal information, and stores all personal information provided by Users in an encrypted fashion. However, we cannot guarantee that unauthorized third-parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that by providing your personal information to us, you are doing so at your own risk. For more information about how ShapeShift keeps your data safe, see '
						}
						<a
							target={'_blank'}
							className={'text-blue underline'}
							href={'https://shapeshift.com/library/how-shapeshift-protects-your-data'}>
							{'here'}
						</a>
					</p>
				</li>

				{/* viii. Returns and Refunds Policy */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'Returns and Refunds Policy'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'Refunds Generally. '}</strong>
							{
								'Refunds Generally. Generally, this article viii will not apply to any transaction after April 13, 2021. You acknowledge that ShapeShift does not and cannot issue refunds in connection with any Transaction initiated or completed on a DEX. If your Transaction where ShapeShift is the counterparty is prevented from completing, the “Order Status” page will indicate whether or not the failed Transaction will result in a refund of the User’s deposited digital asset or the outgoing digital asset which you sought to purchase. In nearly all cases where a Transaction where we are the counterparty fails, the digital asset sold by the User will automatically be refunded to the User if the Order Status page indicates the Transaction failed by displaying “failed,” or the Transaction is stuck in “awaiting” “pending confirms,” or “awaiting” stages. In nearly all other cases, the outgoing digital asset will be sent to the User if the Order Status indicates a successful Transaction by displaying “Done” or “Completed.” We will use reasonable efforts to make refunds in the form that they were sent to us, however, you acknowledge and accept that any refunds may be paid out in a different cryptocurrency of the same value as the original asset at the time the Transaction was attempted. ShapeShift will handle all refund requests for Transactions where we are the counterparty from Users on a case-by-case basis. You acknowledge that any decisions by ShapeShift with respect to refunds or related exchanges are final.'
							}
						</li>
						<li>
							<strong>{'Seeking a Refund Manually. '}</strong>
							{
								'If you need to seek a refund for a failed Transaction where ShapeShift is the counterparty, you must submit a refund request by promptly emailing our customer support '
							}
							<a
								href={'mailto:support@shapeshift.com'}
								className={'text-blue underline'}>
								{'here'}
							</a>
							{' or making a support request '}
							<a
								href={'https://shapeshift.zendesk.com/hc/en-us/requests/new'}
								className={'text-blue underline'}>
								{'here'}
							</a>
							{
								' after the Transaction is initiated through the Service. ShapeShift will send any approved refund to the refund address that you provide us at the initiation of a Transaction. ShapeShift does not guarantee that it will be able to fulfill your refund request. If you do not timely submit a refund request to us promptly after becoming aware of an issue with a Transaction or if you do not include a refund address in the request, your refund may be delayed or we may not be able to fulfill it entirely.'
							}
						</li>
						<li>
							<strong>{'Refund Fees. '}</strong>
							{
								"All Transactions from ShapeShift to a User's outgoing digital asset wallet are subject to all posted fees, including incoming and outgoing Miner Fees, which may be deducted from any refund."
							}
						</li>
						<li className={'border p-2'}>
							<strong>{'Refund Period. '}</strong>
							{
								"YOU ACKNOWLEDGE THAT, IN CONNECTION WITH A FAILED TRANSACTION OR OTHERWISE, WE HAVE NO DUTY TO RETURN ANY DIGITAL ASSET IF YOU REQUEST THE RETURN OF SUCH DIGITAL ASSET AFTER 90 DAYS OF THAT TRANSACTION'S INITIATION."
							}
						</li>
						<li>
							<strong>{'Unsupported Digital Assets. '}</strong>
							{
								"Any digital assets that we do not support that are sent to unrelated or inaccurate wallets through the Service cannot be extracted or returned. ShapeShift reserves the right to determine whether to assist or attempt to remedy effects of the foregoing sentence's scenario on a case-by-case basis. Any such decision by ShapeShift is final. If a particular digital asset for which a refund is requested is not offered on the Service at the time of a refund request, we cannot and will not process a refund or return until the digital asset returns to the Service, which may never occur."
							}
						</li>
						<li>
							<strong>{'Minimum Refund Amounts. '}</strong>
							{
								'Transactions under the amount posted on the fee schedule on the Website are too small to be refunded due to the Miner Fee and administrative costs and ShapeShift has no obligation to honor any such related refund request. ShapeShift will not refund any digital assets that are worth less than the posted amount. You are advised not to use the Service for orders under this size.'
							}
						</li>
						<li>
							<strong>{'Cross-Chain Recovery Program. '}</strong>
							{
								'Please use extreme caution when sending digital assets to ShapeShift or the Service and make sure to confirm that you are sending the correct type of digital asset to the correct address. A transfer of digital assets to ShapeShift that is mistakenly sent to an address of a different digital asset is a “'
							}
							<strong>{'Cross-Chain Transaction'}</strong>
							{
								'”. Recovery of Cross-Chain Transactions is a risky and time-consuming process. The level of complexity and risk depends both on the type of digital asset and the address used for the Transaction. Not all Cross-Chain Transactions are recoverable, and digital assets sent to the wrong address are at risk of recovery by bad actors not associated with ShapeShift.'
							}
							<p className={'my-4'}>
								{
									'Cross-Chain Recovery Program. Please use extreme caution when sending digital assets to ShapeShift or the Service and make sure to confirm that you are sending the correct type of digital asset to the correct address. A transfer of digital assets to ShapeShift that is mistakenly sent to an address of a different digital asset is a “Cross-Chain Transaction”. Recovery of Cross-Chain Transactions is a risky and time-consuming process. The level of complexity and risk depends both on the type of digital asset and the address used for the Transaction. Not all Cross-Chain Transactions are recoverable, and digital assets sent to the wrong address are at risk of recovery by bad actors not associated with ShapeShift.'
								}
							</p>
							<p>
								{
									'If you would like to ask ShapeShift to attempt to recover your digital assets from a Cross-Chain Transaction that you initiated, please reach out to our support team with the details of the Transaction by emailing our customer support '
								}
								<a
									href={'mailto:support@shapeshift.com'}
									className={'text-blue underline'}>
									{'here'}
								</a>
								{' or making a support request '}
								<a
									href={'https://shapeshift.zendesk.com/hc/en-us/requests/new'}
									className={'text-blue underline'}>
									{'here'}
								</a>

								{
									'. Please include your Account email address, digital asset name, address, and transaction ID. ShapeShift will evaluate your request and determine in its sole discretion whether to initiate recovery procedures. You acknowledge that even if ShapeShift decides to attempt a Cross-Chain Transaction recovery on your behalf, we make no guarantee that any such attempted recovery will ultimately be successful.'
								}
							</p>
						</li>
					</ol>
				</li>

				{/* ix. FOX Tokens */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'FOX Tokens'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'FOX Token Basics. '}</strong>
							{
								'We created a standard ERC-20 token on the Ethereum blockchain that can be accessed through most wallets that support Ethereum called the FOX token (each a “'
							}
							<strong>{'FOX Token'}</strong>
							{
								'"). ShapeShift intends to use FOX Tokens to provide loyalty benefits in connection with a User\'s use of the Service, such as commission-free trading or other enhanced features on the Service. ShapeShift may change, add, or remove any benefits associated with FOX Tokens at any time, in its sole discretion. Each User’s FOX Token balance will be displayed in the Service’s Account portal. ShapeShift may place any restrictions on FOX Tokens’ interaction with the Service, including minimum use or withdrawal limits.'
							}
						</li>
						<li>
							<p className={'pb-4'}>
								<strong>{'How to Obtain FOX Tokens. '}</strong>
								{
									'ShapeShift does not presently sell FOX Tokens. ShapeShift distributes FOX Tokens to verified Users in a variety of amounts based on various promotions or for completing certain actions including:'
								}
							</p>

							{'(i). Successfully passing our verification process;'}
							<br />
							{'(ii). Successfully executing a trade through the Service;'}
							<br />
							{'(iii). Referring a new User to the Service; and'}
							<br />
							{'(iv). Trying new features of the Service and providing related Ideas to ShapeShift.'}

							<p className={'mt-4'}>
								{
									'Users may receive different amounts of FOX Tokens for completing the same actions and ShapeShift retains sole discretion in determining whether a User will receive FOX Tokens for certain activities and how many FOX Tokens will be allocated to each User based on the details of each FOX Tokens offering or promotion. By entering an Ethereum address for ShapeShift to send any applicable FOX Tokens to, you thereby represent that you control that Ethereum address. By redeeming and receiving a FOX Tokens, you consent to us sending you email and other communications related to FOX Tokens.'
								}
							</p>
						</li>
						<li>
							<strong>{'Commission-Free Trading. '}</strong>
							{
								"For each FOX Token held in a digital wallet linked to your Account, we will waive our normal commissions or trading spreads on the Service up to US$10 of your trade volume per rolling 30-day period (in total, a User's “"
							}
							<strong>{'Commission-Free Trading'}</strong>
							{'”. Notwithstanding the foregoing sentence, '}
							<strong>{'STANDARD MINER FEES APPLY TO ALL COMMISSION FREE TRADING.'}</strong>
							{
								' For example, 100 FOX Tokens allows you up to US$1,000 of Commission-Free Trading in a 30-day period. Utilizing the Commission-Free Trading does not require the FOX Tokens to be burned, spent, or locked up. If a User performs a Transaction that is only partially covered by the User’s Commission-Free Trading for that 30-day period, then the rate will be a pro-rated blend of the commission-free rate and the traditional retail commission rate. A User utilizing the Service through one of our API partners will receive the same Commission-Free Trading benefits as long as that User holds the FOX Tokens in a wallet connected to the Service.'
							}
						</li>
						<li>
							<strong>{'The "FOX Back" Program. '}</strong>
							{
								'For a limited time, we will distribute FOX Tokens to Users who complete our verification process or perform certain trades on the Service. The amount of FOX Tokens awarded through this program will be specified in the associated promotional materials or otherwise displayed on the Service before you initiate a qualifying Transaction. Transactions that include an asset that does not have sufficient price discovery information (i.e., does not have price information on CoinCap.io) may not qualify for this program.'
							}
						</li>
						<li>
							<strong>{'FOX Fuel. '}</strong>
							{'At the time you exchange a digital asset on our Service (such exchange, a “'}
							<strong>{'Qualifying Trade'}</strong>

							{'"), the total market value (based on '}
							<a
								href={'https://coincap.io/'}
								className={'underline'}>
								{'CoinCap.io'}
							</a>
							{
								'\'s pricing of FOX Tokens at that time) of all FOX Tokens you own (meaning FOX Tokens held in any wallet registered with your Account, as long as you are the most recently active User associated with such wallet; and any FOX Tokens awarded by ShapeShift that you have not yet claimed) divided by 10 is deemed your "'
							}
							<strong>{'FOX Fuel Balance'}</strong>
							{
								'”. Your FOX Fuel Balance will decrease by: (i) the amount of any decreases of your FOX Token holdings decrease; or (ii) the amount actually reimbursed by ShapeShift in the past 30 days (the resulting balance, your “'
							}
							<strong>{'FOX Fuel Available Balance'}</strong>
							{
								'”). ShapeShift will reimburse you in FOX Tokens for Miner Fees you actually incurred in connection your Qualifying Trade up to your FOX Fuel Available Balance. Any reimbursements from FOX Fuel that are earned after September 17, 2021 and are not claimed by October 31, 2021 will be deemed forfeited.'
							}
						</li>
						<li>
							<strong>{'FOX Airdrop. '}</strong>
							{'The FOX Tokens from the FOX Token airdrop of July 2021 ("'}
							<strong>{'Airdrop'}</strong>
							{
								'") are distributed entirely by a decentralized smart contract. All FOX Tokens sent to addresses for the Airdrop are not sent by ShapeShift directly. If you did not receive FOX Tokens as part of the Airdrop, you were not eligible or the wallet that stores the address that was eligible was not used to check eligibility. All addresses were pre-programmed prior to the Airdrop, and accordingly, you acknowledge that ShapeShift will not: review past transactions for eligibility for the Airdrop, consider other addresses for inclusion, or redirect any FOX Tokens already programmed into the Airdrop smart contract to a different ETH address. Further, you acknowledge that ShapeShift\'s decisions regarding the Airdrop are final and that ShapeShift will have no liability for unsent, unclaimed, or misdirected FOX Tokens from the Airdrop. You will have 90 days to claim eligible FOX Tokens from the Airdrop and after that 90 day period, such FOX Tokens will be deemed forfeited.'
							}
						</li>
						<li>
							<strong>{'No Resale Value. '}</strong>
							{
								'FOX TOKENS ARE SOLELY PROVIDED TO CREATE A LOYALTY PROGRAM FOR VERIFIED USERS. FOX TOKENS ARE NOT INTENDED TO BE AN INVESTMENT AND THERE IS NO EXPECTATION THAT FOX TOKENS WILL EVER HAVE LIQUIDITY, ANY MEASURABLE VALUE, OR APPRECIATE IN VALUE. SHAPESHIFT WILL NOT ADVOCATE OR PROMOTE THE RESALE OF FOX TOKENS TO ANY OTHER PERSON OR OTHERWISE SUPPORT THE CREATION OF ANY BENEFITS IN THE SECONDARY MARKET FOR FOX TOKENS.'
							}
						</li>
						<li>
							<strong>{'Legal Risks. '}</strong>
							{
								'You acknowledge that current or future regulations could make ShapeShift or FOX Tokens illegal in some jurisdictions, or for some categories of Users, which could possibly result our winding down of ShapeShift, the Service, or FOX Tokens, or a decrease in value of ShapeShift or the FOX Tokens. Because FOX Tokens have not been formally classified by or registered with any regulatory agency, subsequent determinations by any regulator may: prevent certain persons from using or holding FOX Tokens in the future or cause the functionality, access to, or demand for the FOX Tokens could be reduced materially.'
							}
						</li>
						<li>
							<p className={'pb-4'}>
								{
									'Your Additional Acknowledgments. By redeeming, earning, receiving, or holding a FOX Token, you acknowledge that:'
								}
							</p>
							<br />
							{
								'(i). FOX Tokens are not an investment and that you have no expectation of economic benefit or profit (other than the benefits of specific ShapeShift loyalty programs);'
							}
							<br />
							{
								'(ii). You will hold FOX Tokens solely for the loyalty program benefits, for your own use, and not with an intention to sell or otherwise distribute any FOX Tokens;'
							}
							<br />
							{
								'(iii). By virtue of your ownership of FOX Tokens, you will have no equity or other ownership interest in ShapeShift or the Service and will not have any voting rights with respect to any matters relating to either; and'
							}
							<br />
							{
								'(iv). You have no expectations that there is or ever will be any market for transfer or resale of the FOX Tokens, that ShapeShift has not represented that there will ever be such a market, and that ShapeShift will not help create or support such a market.'
							}
						</li>
					</ol>
				</li>

				{/* x. Promotional Terms */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'Promotional Terms'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'Sponsorship and Eligibility. '}</strong>
							{
								'ShapeShift runs various promotions or giveaways from time to time, including directly through the Service or via email (each a “'
							}
							<strong>{'ShapeShift Promotion'}</strong>
							{
								'”). All ShapeShift Promotions are sponsored by ShapeShift. Except where expressly stated in any ShapeShift Promotion marketing materials, there is no purchase necessary to enter or win for all ShapeShift Promotions.'
							}
							<p className={'mt-4'}>
								{
									'ShapeShift Promotions are only open to legal residents of the United States and certain other jurisdictions who are also 18 years or older at the time of entry. A ShapeShift Promotion is void where prohibited or restricted by law. Employees of ShapeShift and the immediate family members of ShapeShift employees are not eligible to enter or win any ShapeShift Promotion. ShapeShift may disqualify any participant who, in its sole discretion, tampers with the entry process, violates the spirit of a Promotion, submits more than a single entry where prohibited, or acts in an unsportsmanlike or disruptive manner, or otherwise attempts to violate these Terms. The type, value, form, or other details of an award for a ShapeShift Promotion (each, an “'
								}
								<strong>{'Award'}</strong>
								{
									'”) will be specified in the associated marketing materials for such ShapeShift Promotion.'
								}
							</p>
						</li>
						<li>
							<strong>{'Qualification Period. '}</strong>
							{
								'We will state the qualification period and any applicable timelines or deadlines for each ShapeShift Promotion in the associated marketing messaging that we send to you.'
							}
						</li>
						<li>
							<strong>{'Entry Procedures. '}</strong>
							{
								'Only verified Users will be permitted to enter any ShapeShift Promotion and no mechanically reproduced entries will be accepted for any ShapeShift Promotion. For any ShapeShift Promotion associated with the App, for a valid entry or Award claim you may be required to download the App, create an Account, sign-in to the App, or any combination of the foregoing items. Additional procedures may be required for further Awards. All additional eligibility procedures will be stated in the applicable ShapeShift Promotion or associated messaging.'
							}
						</li>

						<li>
							<strong>{'Duties of Participants. '}</strong>
							{
								'By entering a ShapeShift Promotion you acknowledge that any decisions made by ShapeShift related to the ShapeShift Promotion are final. ShapeShift, its employees, officers, directors, shareholders, agents, and representatives will not responsible or liable for: (i) late, lost, delayed, damaged, misdirected, incomplete, illegible, or unintelligible entries for a ShapeShift Promotion; (ii) telephone, electronic, hardware, or software program, network, Internet, or computer malfunctions, failures, or difficulties affecting or delaying your entry in a ShapeShift Promotion; (iii) any condition caused by events beyond the reasonable control of ShapeShift that may cause the ShapeShift Promotion to be disrupted or corrupted; (iv) any injuries, losses, or damages caused by a KeepKey device or resulting from acceptance, possession, or use of a KeepKey device, or from participation in the ShapeShift Promotion; or (v) any printing, typographical, or transmission errors in any materials associated with the ShapeShift Promotion.'
							}
						</li>
						<li>
							<strong>{'Award and Selection of Winners. '}</strong>
							{
								'ShapeShift will determine the method for awarding or selecting winners for any Award (each a “'
							}
							<strong>{'Winner'}</strong>
							{
								'”) in its sole discretion and will specify such method in any related marketing materials associated with that ShapeShift Promotion.'
							}
						</li>
						<li>
							<strong>{'Notification of Winners; Substitution of Awards. '}</strong>
							{
								'Winners will be notified by electronic mail with any additional instructions for receiving the applicable Award, including any appropriate discount code or link. If any Winner does not redeem the applicable Award, use the code, or link within a reasonable time, or if the email is returned as undeliverable after three email send attempts, we will deem the Award as forfeited. We will not allow any Winners to substitute another person for any Award. ShapeShift reserves the right to substitute an Award of equal or greater value in the event an Award is unavailable. Awards are not redeemable for cash from us. All taxes on an Award is the responsibility of the respective Winner.'
							}
						</li>
						<li>
							<strong>{'Award Limitations. '}</strong>
							{
								"By participating in a ShapeShift Promotion, you acknowledge that you may be required to complete ShapeShift's an identity verification process in order to claim an Award. For any Awards in the form of a digital asset, ShapeShift will send applicable Awards to the applicable digital asset address associated with a Winner’s Account no later than 14 days of selecting the Winner. You acknowledge that each Award has a 30-day expiration date, and that if you do not complete any requirements requested by ShapeShift within 30 days after being notified that you are a Winner, your Award will be cancelled without compensation or further notice to you. Notwithstanding the foregoing sentences, any Award awarded after September 15, 2021, must be claimed prior to October 31, 2021, otherwise, it will be deemed forfeited."
							}
						</li>
						<li>
							<strong>{'Miscellaneous Rules. '}</strong>
							{
								'Except for a ShapeShift Promotion where we expressly state otherwise, each Award is limited to one per User or device ID. Duplicate Accounts associated with the same household or device ID are not eligible for any additional Awards under the same ShapeShift Promotion. ShapeShift reserves the right to review all Awards before sending, and participants will not be eligible for any Award if remitting such Award would violate the Terms, internal policies, or applicable law. ShapeShift reserves the right to change or amend the terms associated with any ShapeShift Promotion or to cancel a ShapeShift Promotion early or at any time without notice and for any reason, including if the amount of prizes or awards becomes exhausted.'
							}
						</li>
						<li>
							<strong>{'Inquiries or Questions. '}</strong>
							{
								'Any inquiries or questions regarding any ShapeShift Promotion may be sent by e-mail to foxes@foxfoundation.io.'
							}
						</li>
					</ol>
				</li>

				{/* xi. Miscellaneous */}
				<li>
					<h2 className={'mb-2 text-2xl font-semibold'}>{'Miscellaneous'}</h2>
					<ol className={'list-latin space-y-4 pl-6'}>
						<li>
							<strong>{'Indemnification. '}</strong>
							{
								'You shall indemnify ShapeShift and our agents or licensors, and any employees, contractors, agents, officers, and directors of ShapeShift, our agents or licensors, against any damages related to: (i) your use of and access to the Service, including any data or content transmitted or received by you; (ii) noncompliance with any part of these Terms, including any inaccuracies of representations or statements made by you; (iii) your violation of any third-party right, including any right of privacy or Intellectual Property Rights; (iv) your violation of any applicable law, rule or regulation; (v) any content that is submitted by your Account including misleading, false, or inaccurate information; (vi) your willful misconduct; or (vii) any other person’s access and use of the Service with your Account information.'
							}
						</li>
						<li>
							<strong>{'Limitation of Liability. '}</strong>
							{
								'You acknowledge that ShapeShift will not be liable for any damages caused to you related to: (i) any hacking, tampering, or other unauthorized access or use of the Service, your Account, or the information contained in your Account; (ii) errors, mistakes, or inaccuracies of content on the Service; (iii) personal injury or property damage, of any nature, resulting from your access to or use of the Service; (iv) any interruption or cessation of transmission to or from the Service; (v) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service by any third-party; or (vi) the defamatory, offensive, or illegal conduct of any third-party. In no event will ShapeShift, its agents, directors, employees, suppliers, or licensors be liable to you for any damages exceeding the greater of: the amount you paid to ShapeShift in connection with the Services; or US$100.00. The foregoing limitations and exclusions will apply whether the alleged or actual liability is based on contract, tort, negligence, strict liability, or any other basis, even if ShapeShift has been advised of the possibility of such damage. The foregoing limitation of liability is intended to apply to the fullest extent permitted by law in the applicable jurisdiction. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the limitations or exclusions in this section may not apply to you. These Terms give you specific legal rights, and you may also have other rights which vary from state to state or jurisdiction. The disclaimers, exclusions, and limitations of liability under these Terms will not apply to the extent prohibited by applicable law.'
							}
						</li>
						<li>
							<strong>{'Governing Law. '}</strong>
							{
								'These Terms will be governed by the internal substantive laws of the United Kingdom, without respect to its conflict of laws principles. Notwithstanding the preceding sentence with respect to the substantive law, any arbitration conducted pursuant to these Terms will be governed by the applicable rules of arbitration in the United Kingdom. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. You consent to submit to the personal jurisdiction of the federal and state courts located in the United Kingdom for any actions for which may bring against you. We retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of a our copyrights, trademarks, trade secrets, patents, or other Intellectual Property Rights, as set forth in section XI.D., including any provisional relief required to prevent irreparable harm. You consent to London, England being the proper forum for any appeals of an arbitration award or for trial court proceedings if the arbitration provision in section XI.D. is found to be unenforceable.'
							}
						</li>

						<li>
							<strong>{'Arbitration. '}</strong>
							{
								'READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES YOU AND US TO ARBITRATE ANY DISPUTES IN CONNECTION WITH THESE TERMS AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US. If you have a dispute with ShapeShift in connection with these Terms or your use of the Service, you shall first contact us via email at foxes@foxfoundation.io and attempt to resolve the dispute with us informally. If you and ShapeShift cannot resolve any dispute after 60 days from your initial email notifying us of the dispute, you and ShapeShift each consent to resolve any related claim, dispute, or controversy (excluding any claims for injunctive or other equitable relief) arising out of or in connection with or relating to these Terms, or the breach or alleged breach of these Terms, exclusively by binding arbitration in accordance with the applicable rules of arbitration in the United Kingdom. The arbitration will be conducted in London, England, in English. If you are using the Service for commercial purposes, each party will be responsible for paying any arbitration fees, administrative, and arbitrator fees in accordance with applicable arbitration rules, and the award rendered by the arbitrator will include costs of arbitration, reasonable attorneys’ fees, and reasonable costs for expert and other witnesses. If you are an individual using the Service for non-commercial purposes: (i) the arbitration organization may require you to pay a fee for the initiation of your case, unless you apply for and successfully obtain a fee waiver from such arbitration organization; (ii) the award rendered by the arbitrator may include your costs of arbitration, your reasonable attorney’s fees, and your reasonable costs for expert and other witnesses; and (iii) you may sue in a small claims court of competent jurisdiction without first engaging in arbitration, but this does not absolve you of your commitment to engage in the informal dispute resolution process with us described in this section. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this section will be deemed as preventing ShapeShift from seeking injunctive or other equitable relief from any applicable court as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, Intellectual Property Rights, or other proprietary rights.'
							}
						</li>
						<li>
							<strong>{'Assignment. '}</strong>
							{
								'You shall not assign or transfer these Terms or any rights and licenses granted under these Terms. Any attempted assignment or transfer in violation of this section will be void and of no legal effect.'
							}
						</li>
						<li>
							<strong>{'Notice. '}</strong>
							{
								'ShapeShift may notify you as required by law or are for marketing or other business-related purposes via email, a tangible written notice, or through posting of such notice on our Website. ShapeShift reserves the right to determine the form and means of providing notifications to you or other Users, provided that you may opt out of certain means of notification as described in these Terms. ShapeShift will not be liable for any damages or delays caused by any automatic filtering you or your network provider applies to emails.'
							}
						</li>

						<li>
							<strong>{'Entire Agreement/Severability. '}</strong>
							{
								'These Terms, together with any additional terms, amendments, and any additional agreements you may enter into with ShapeShift in connection with the Service, constitute the entire agreement between you and ShapeShift concerning the Service. If any portion of these Terms is deemed invalid by a court of competent jurisdiction, the invalidity of such portion will not affect the validity of the remaining provisions of these Terms, which will remain in full force and effect.'
							}
						</li>
						<li>
							<strong>{'No Waiver. '}</strong>
							{
								"No waiver of any term of these Terms will be deemed a further or continuing waiver of such term or any other term, and ShapeShift's failure to assert any right or provision under these Terms will not constitute a waiver of such right or provision."
							}
						</li>
						<li>
							<strong>{'Contact. '}</strong>
							{
								'If you have any questions regarding these Terms, you may contact us at: foxes@foxfoundation.io'
							}
						</li>
					</ol>
				</li>
			</ol>
		</main>
	);
}
