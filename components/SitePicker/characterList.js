import bh from './images/cover_bh.jpg'
import hp from './images/cover_hp.jpg'
import hawes from './images/dead_hawes.jpg'
import steve from './images/dead_steve.jpg'
import tifa from './images/dead_tifa.jpg'
import turgle from './images/dead_turgle.jpg'
import vlade from './images/dead_vlade.jpg'
import will from './images/dead_will.jpg'
// import hawes from './images/dHawes.png'
// import steve from './images/dSteve.png'
// import tifa from './images/dTifa.png'
// import turgle from './images/dTurgle.png'
// import vlade from './images/dVlade.png'
// import will from './images/dWill.png'

const characterArray = {
	dead1: {
		name: 'dead1',
		id: 'dead1',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/akuma.png',
		imgSrc: turgle,
		disabled: true,
	},
	BlueHarvest: {
		name: 'Blue Harvest',
		id: 'bh',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/balrog.png',
		imgSrc: bh,
	},
	HighPotion: {
		name: 'High Potion',
		id: 'hp',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/bison.png',
		imgSrc: hp,
	},
	dead4: {
		name: 'dead4',
		id: 'dead4',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/blanka.png',
		imgSrc: will,
		disabled: true,
	},
	dead5: {
		name: 'dead5',
		id: 'dead5',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/cammy.png',
		imgSrc: hawes,
		disabled: true,
	},
	dead6: {
		name: 'dead6',
		id: 'dead6',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/chunli.png',
		imgSrc: vlade,
		disabled: true,
	},
	dead7: {
		name: 'dead7',
		id: 'dead7',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/dhalsim.png',
		imgSrc: steve,
		disabled: true,
	},
	dead8: {
		name: 'dead8',
		id: 'dead8',
		// imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ehonda.png',
		imgSrc: tifa,
		disabled: true,
	},
}

export default characterArray
