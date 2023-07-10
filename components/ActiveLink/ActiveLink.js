'use client'

import React, { Children } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ActiveLink = ({ children, activeClassName, ...props }) => {
	const currentRoute = usePathname()
	const child = Children.only(children)
	const childClassName = child.props.className || ''

	const linkPathname = new URL(props.as || props.href, location.href).pathname

	const newClassName = linkPathname === currentRoute ? `${childClassName} ${activeClassName}`.trim() : childClassName

	console.log({
		currentRoute,
		linkPathname,
	})

	return (
		<Link passHref {...props}>
			{React.cloneElement(child, {
				className: newClassName || null,
			})}
		</Link>
	)
}

export default ActiveLink
