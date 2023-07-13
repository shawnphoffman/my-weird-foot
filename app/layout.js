import 'styles/globals.css'

import { Open_Sans } from 'next/font/google'
import Script from 'next/script'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				{/* Normalize */}
				<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" defer />

				{/* <!-- FontAwesome Icons --> */}
				<Script src="https://kit.fontawesome.com/d7ccc5bb1a.js" strategy="afterInteractive" crossOrigin="anonymous" />
			</head>
			<body>
				<div className="scroller">{children}</div>
			</body>
		</html>
	)
}
