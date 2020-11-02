import Button from '../packages/button/index';

const components = [
    Button,
]

const install = function(Vue) {
    components.forEach(compoennt => {
        Vue.component(compoennt.name, compoennt);
    })
}

export default {
    version: '1.0.0',
    install,
    Button,
}