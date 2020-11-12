import { mount } from '@vue/test-utils';
import Button from '../components/button/src/main.vue';

describe('button', () => {
	test('Vue component has div tag', () => {
		const wrapper = mount(Button);
		expect(wrapper.find('div').exists()).toBeTruthy();
	});
});
