<template>
  <div>
    <div>{{ buttonObject.text }}</div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const buttonObject = reactive({
	text: '1',
	number: 2,
});
</script>
