import api from 'ApiHelper'
import * as types from 'ActionType'

export const getFirstList = (firstList) => {
	return {
		type: types.TEST,
		firstList
	}
}