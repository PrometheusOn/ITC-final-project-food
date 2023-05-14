<template>
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
                <span>{{ food.title }}</span>
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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { recipesArr } from '../store/fakeApi.ts' 
// const { getAllFoods } = useFoodStore()

const router = useRouter()
const foods = ref<Food[]>(recipesArr)
interface Food{
    id: number,
    title: string, 
    image: string,
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
    display:flex;
    justify-content: space-evenly;
    width: 100%;
    height: 40%;
}

.el-col{
    margin:20px 0px;
}
</style>
  