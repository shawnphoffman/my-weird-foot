import { memo } from 'react'
// import { LazyMotion } from 'framer-motion'
// import { styled } from 'linaria/react'

// import Header from 'components/Header/Header'
// import NavBar from 'components/NavBar/NavBar'
// const loadMotion = () => import('config/motion.js').then(res => res.default)

// const Details = styled.div`
// 	text-align: center;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `

const HighPotionLayout = ({ children }) => {
	return (
		// <ThemeContainer>
		// 	<LazyMotion features={loadMotion} strict>
		// 		<Container>
		// 			<Details>
		// 				<Header />
		// 				<NavBar />
		// 				<div>{children}</div>
		// 			</Details>
		// 		</Container>
		// 	</LazyMotion>
		// </ThemeContainer>
		<div>{children}</div>
	)
}
// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	max-width: 900px;
// 	width: 100%;
// 	background-attachment: fixed;
// 	background-size: 700px;
// 	padding-bottom: 0px;
// 	min-height: 100vh;
// `
// const ThemeContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	max-width: 1200px;
// 	width: 100%;
// 	margin-left: auto;
// 	margin-right: auto;
// `

export default memo(HighPotionLayout)
