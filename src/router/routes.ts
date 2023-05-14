import { RouteRecordRaw } from 'vue-router'
import recipes from '../pages/recipes.vue'
import recipeDetails from '../pages/recipeDetails.vue'

const routes: readonly RouteRecordRaw[] = [
    { path: '/', component: recipes },
    { path: '/recipeDetails', component: recipeDetails },
]

export default routes