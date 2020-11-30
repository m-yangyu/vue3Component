<template>
  <div>
    <div>{{ buttonObject.text }}</div>
  </div>
</template>
<script lang="ts">
import { reactive } from 'vue';

export default {
	name: 'Button',
	setup() {
		const buttonObject = reactive({
			text: '1',
			number: 2,
		});
		return {
			buttonObject,
		};
	},
};
</script>
