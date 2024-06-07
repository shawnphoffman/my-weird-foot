'use client'

import { ReactNode } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	children: ReactNode
	href: string
	className?: string
	fuzzy?: boolean
}

const ActiveLink = ({ children, href, fuzzy, className, ...rest }: Props) => {
	const currentRoute = usePathname()
	const isActive = fuzzy ? currentRoute.toLowerCase().startsWith(href) : currentRoute === href

	const conditionalClasses = classnames(
		className,
		isActive ? 'underline underline-offset-[6px] decoration-2 decoration-boba-red' : 'text-white hover:text-boba-green'
	)

	return (
		<Link {...rest} href={href} className={`text-md text-white font-bold whitespace-nowrap cursor-pointer pb-0.5 ${conditionalClasses}`}>
			{children}
		</Link>
	)
}

export default ActiveLink
