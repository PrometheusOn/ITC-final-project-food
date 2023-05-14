<template>
  <div class="bedding"></div>
  <el-menu
    class="el-menu-demo nav"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <el-icon size="50px">
        <ForkSpoon />
      </el-icon>
    </el-menu-item>
    <div 
    class="input"
    v-if="route.name === 'home'"
    >
      <el-input class='input-find' v-model="input" placeholder="Please input" />
      <el-button
      >
        Find
      </el-button>
    </div>
    
    <el-button 
      class="btnBack"
      v-if="route.name !== 'home'"
    >
      Back
    </el-button>
  </el-menu>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const input = ref('')

</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0px;
  width:100%;
  height: 50px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}
.bedding{
  height: 50px;
  position: relative;
}

.input{
  width: 30%;
  display: flex;
  gap: 10px;
  margin: auto
}

.btnBack{
  width: 5%;
  margin-right: 10px;
}
</style>
