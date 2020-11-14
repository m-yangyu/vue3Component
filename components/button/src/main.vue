<template>
  <div>{{ buttonObject.text }}</div>
</template>
<script setup="props" lang="ts">
import { reactive } from 'vue';

console.log(123);

export const buttonObject = reactive({
	text: '1',
	number: 2,
});

</script>
