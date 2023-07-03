import { defineStore } from 'pinia'
import makeRequest from '../services/http'

const dishTypes = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink'
]

export const useFoodsStore = defineStore('foodsStore', {
    state: () => ({
        dishTypes,
    }),
    actions: {
        async getAll(params: { type: string, titleMatch: string, number: number, offset: number }) {
            const result = await makeRequest({
                url: '/recipes/complexSearch/',
                params,
            })

            return { 
                items: result.results, 
                total: result.totalResults 
            }
        },
        async getOne(id: number | string) {
            return await makeRequest({
                url: `/recipes/${ id }/information`,
            })
        },
    },
})
