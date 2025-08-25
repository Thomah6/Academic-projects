<script setup>
import { ref,defineEmits } from 'vue'

const emit = defineEmits(["select-tab"]);
function selectTab(tabName) {
  emit("select-tab", tabName); // on envoie la valeur au parent
}
</script>
<template>
    <header>

    <h1>animations</h1>
    <nav>
      <ul>
        <li  @click="selectTab('Scrolling')">
          Scrolling
        </li>
        <li  @click="selectTab('Transition')">
          Transition
        </li>
        <li @click="selectTab('Transform')">
          Transform
        </li >
        <li  @click="selectTab('Animation')">
          Animation
        </li>
        <li  @click="selectTab('Loading')">
          Loading
        </li>
        
      </ul>
    </nav>
  </header>
</template>