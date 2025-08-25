<script setup>
import { ref } from 'vue'
import MyStyle from './styles/Style.vue'
import Transform from './Transform.vue'
import Transitionn from './Transition.vue'
import Animation from './Animation.vue'
import Loading from './Loading.vue'
import Scrolling from './Scrolling.vue'
import MyHead from './Header.vue'
const activeTab = ref("");
function handleSelectTab(tabName) {
  activeTab.value = tabName;
}
</script>

<template>
  <MyStyle />
  <MyHead @select-tab="handleSelectTab" />
  <Transform v-if="activeTab == 'Transform'" />
  <Transitionn v-else-if="activeTab == 'Transition'" />
  <Animation v-else-if="activeTab == 'Animation'" />
  <Loading v-else-if="activeTab == 'Loading'" />
  <Scrolling v-else />
</template>

<style scoped>
</style>
