import { VueConstructor } from 'vue';
import Button from '@packages/button';

const components = [
    Button,
]

const install = function(Vue: VueConstructor) {
    components.forEach(compoennt => {
        Vue.component(compoennt.name, compoennt);
    })
}

export default {
    version: '1.0.0',
    install,
    Button,
}