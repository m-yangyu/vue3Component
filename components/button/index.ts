import { ComponentOptions } from 'vue';
import Button from '@components/button/src/main.vue';

Button.install = (Vue: ComponentOptions) => {
    Vue.component(Button.name, Button);
}

export default Button;