import { VueConstructor } from 'vue';
import Button from './src/main.vue';

Button.install = function(Vue: VueConstructor) {
    Vue.component(Button.name, Button);
}

export default Button;