import { ComponentOptions } from 'vue';
import Button from '@components/button';

const components = [
	Button,
];

const install = function (Vue: ComponentOptions): void {
	components.forEach((component) => {
		Vue.component(component.name, component);
	});
};

export default {
	version: '1.0.0',
	install,
	Button,
};
