<template>
    <div class="filterForm">
        <el-input 
            class='input-find' 
            v-model="nameField" 
            placeholder="Please input dish name" 
            clearable 
            @clear="search" 
        />

        <el-select
            v-model="typeField"
            placeholder="Select type of dish"
            clearable 
            @clear="search"   
        >
            <el-option
                v-for="(item, index) in typeOfDish"
                :key="index"
                :label="item"
                :value="item"
            />
        </el-select>

        <el-button @click="search">
            Find
        </el-button>
    </div>
    <el-row>
        <el-col
            v-for="(food, index) of foods"
            :key="index"
            :span="7"
        >
            <el-card :body-style="{ padding: '0px' }">
                <img
                    :src=food.image
                    class="image"
                />
                <div style="padding: 14px">
                    <span class="title">{{ food.title }}</span>
                    <div class="bottom">
                        <el-button
                            text 
                            class="button" 
                            @click="router.push({ name: 'recipeDetails', params: { id: food.id }})"
                        >
                            More
                        </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { recipesArr, dishTypesArr } from '../store/fakeApi.ts' 

interface Food {
    id: number,
    title: string, 
    image: string,
    dishTypes: string[],
}

const router = useRouter()
const foods = ref<Food[]>(recipesArr)
const typeOfDish= ref<string[]>(dishTypesArr)

const nameField = ref('')
const typeField = ref('')

interface Food {
    id: number,
    title: string, 
    image: string,
    dishTypes: string[],
}

const filterByTitle = () => {
    return recipesArr.filter(food => {
        return food.title.toLowerCase().includes(nameField.value.toLowerCase())
    })
}

const filterByType = () => {
    if (!typeField.value)
        return recipesArr
    else {
        return recipesArr.filter(food => food.dishTypes.includes(typeField.value))
    }
}

const search = () => {
    const filteredByTitleFoods = filterByTitle()
    const filterByTypeFoods = filterByType()
    const filterResult = filteredByTitleFoods.filter( obj => filterByTypeFoods.indexOf(obj) !== -1)
    foods.value = filterResult
}

// onMounted(async () => {
//     // await getAllFoods()
//     foods.value = [
//         { }
//     ]
// })
</script>
  
<style lang="scss" scoped>
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 100%;
  display: block;
}
.button {
  padding: 0;
  min-height: auto;
}
.el-row{
    display: flex;
    justify-content: center;
    gap: 3%;
    width: 100%;
}

.el-col{
    margin:20px 0px;
}

.el-card{
    height: 100%;
}

.filterForm{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    gap: 10px;
}
.input-find{
    width: 40%;
}

</style>
  