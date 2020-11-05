import { VueConstructor } from 'vue';
import Button from '@packages/button';

const components = [
    Button,
]

const install = function(Vue: VueConstructor) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

export default {
    version: '1.0.0',
    install,
    Button,
}