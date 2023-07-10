import { memo } from 'react'

import { PageDescription, PageDetails } from 'styles/common'

const Home = ({}) => {
	return (
		<>
			<PageDetails>
				<PageDescription>High Potion Home</PageDescription>
			</PageDetails>
		</>
	)
}

export default memo(Home)
