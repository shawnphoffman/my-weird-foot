import bh from './images/cover_bh.jpg'
import hp from './images/cover_hp.jpg'
import hawes from './images/psd/alt_dead_hawes.png'
import steve from './images/psd/alt_dead_steve.png'
import tifa from './images/psd/alt_dead_tifa.png'
import turgle from './images/psd/alt_dead_turgle.png'
import vlade from './images/psd/alt_dead_vlade.png'
import will from './images/psd/alt_dead_will.png'

const characterArray = {
	dead1: {
		name: 'dead1',
		id: 'dead1',
		imgSrc: turgle,
		disabled: true,
	},
	BlueHarvest: {
		name: 'Blue Harvest',
		id: 'bh',
		imgSrc: bh,
	},
	HighPotion: {
		name: 'High Potion',
		id: 'hp',
		imgSrc: hp,
	},
	dead4: {
		name: 'dead4',
		id: 'dead4',
		imgSrc: will,
		disabled: true,
	},
	dead5: {
		name: 'dead5',
		id: 'dead5',
		imgSrc: hawes,
		disabled: true,
	},
	dead6: {
		name: 'dead6',
		id: 'dead6',
		imgSrc: vlade,
		disabled: true,
	},
	dead7: {
		name: 'dead7',
		id: 'dead7',
		imgSrc: steve,
		disabled: true,
	},
	dead8: {
		name: 'dead8',
		id: 'dead8',
		imgSrc: tifa,
		disabled: true,
	},
}

export default characterArray
