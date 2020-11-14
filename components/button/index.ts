import { ComponentOptions } from 'vue';
import Button from './src/main.vue';

console.log(Button);

Button.install = (Vue: ComponentOptions) => {
	Vue.component(Button.name, Button);
};

export default Button;
