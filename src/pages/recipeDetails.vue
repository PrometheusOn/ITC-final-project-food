<template>
    <div class="wrapper" v-if="foodItem">
        <div class="food-title">{{ foodItem.title }}</div>
        <div class="content">
            <div class="first-half">
                <img :src=foodItem.image class='food-image' alt="receptImage">
                <div class="other-info">
                    <div class="readyTime"><el-icon><Timer /></el-icon>Cooking time: {{ foodItem.readyInMinutes }} min</div>
                    <div class="dishType">Dish type:<div v-for="dish of foodItem.dishTypes">{{ dish }}</div></div>
                </div>
                <div class="desc" v-html="foodItem.summary"></div>
            </div>
            <div class="second-half">
                <ul class="UList">
                    <li>Necessary ingredients</li>
                    <li class="ingredients" v-for="(ingredient, index) of foodItem.extendedIngredients">
                        {{ index }} - {{ ingredient.name }}
                    </li>   
                </ul>
                <ul class="UList">
                    <li>Steps:</li>
                    <li class="steps" v-for="(step, index) of foodItem.analyzedInstructions[0].steps">
                        {{ index }} - {{ step.step }}
                    </li>   
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { recipesArr } from '../store/fakeApi.ts'

const props = defineProps<{
    id: string;
}>()

const foodItem: Ref<FoodDetail | null> = ref(null)

interface FoodDetail {
    id: number
    title: string
    readyInMinutes: number
    image: string
    dishTypes: object
    analyzedInstructions: {
        steps: {
            step:string
        }[]
    }[]
    summary: string
    extendedIngredients: {
        name: string
    }[]
}

const findFood = (id: string) => {
    for (const food of recipesArr){
        if (food.id === Number(id)) {
            foodItem.value = food
        }
    }
} 

onMounted(() => {
    findFood(props.id)
})
</script>
  
<style lang="scss" scoped>
.wrapper{
    height: calc(100% - 50px);
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.food-title{
    height: 15%;
    width: 100%;
    font-size:larger;
    text-align: center;
}

.content{
    height: 85%;
    width: 100%;
    display:flex;
    justify-content: space-between;
}

.first-half{
    display: flex;
    flex-direction: column;
    width: 49%;
    height: 100%;
    padding:10px;
    // justify-content: center;
    // align-items: center;
}

.second-half{
    display: flex;
    flex-direction: column;
    width: 49%;
    height: 100%;
    padding: 10px;
}
.other-info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0px;
}

.desc{
    padding:10px;
}
.UList{
    list-style-type: none;
    margin-bottom: 10%;
}
.food-image{
    align-self: center;
    height: 60%;
    width: 90%;
}
</style>
  