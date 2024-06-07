import './hp_global.css'

import { Metadata } from 'next'
import Image from 'next/image'

import { applePodcastId } from '@/app/data/links'
import { siteDescription, siteTitle, siteUrl } from '@/app/data/meta'
import highPotionLogo from '@/app/images/high-potion.png'
import ActiveLink from '@/components/core/ActiveLink'

export const metadata: Metadata = {
	title: {
		template: `%s | ${siteTitle}`,
		default: siteTitle,
	},
	description: siteDescription,
	metadataBase: siteUrl,
	openGraph: {
		title: {
			template: `%s | ${siteTitle}`,
			default: siteTitle,
		},
		description: siteDescription,
		siteName: siteTitle,
		url: siteUrl,
		locale: 'en_US',
		type: 'website',
	},
	itunes: {
		appId: applePodcastId,
	},
}

export default async function HighPotionLayout({ children }) {
	return (
		// WRAPPER
		<div className="flex flex-col items-center w-full max-w-screen-xl mx-auto">
			<div className="flex flex-col w-full max-w-4xl gap-2">
				{/* HEADER */}
				<div className="flex flex-col items-center gap-0 text-center">
					{/* IMAGE */}
					<h1 className="sr-only">{siteTitle}</h1>
					<Image className="w-full max-w-md" alt="" src={highPotionLogo} width={448} priority />

					{/* NAV */}
					<nav className="flex flex-row flex-wrap justify-center px-4 py-1 sm:py-3 gap-y-1 gap-x-4 bg-black/50 rounded-xl">
						<ActiveLink href="/home">Links</ActiveLink>
						<ActiveLink href="/episodes">Episodes</ActiveLink>
						{!process.env.VERCEL_ENV && (
							<ActiveLink href="/updates" fuzzy>
								Updates
							</ActiveLink>
						)}
						<ActiveLink href="/listen-now">Listen Now</ActiveLink>
						<ActiveLink href="/adventure">Adventure</ActiveLink>
					</nav>
				</div>
				{/* PAGE CONTENT */}
				<main className="flex flex-col items-center flex-1 gap-4 text-center">{children}</main>
			</div>
		</div>
	)
}
