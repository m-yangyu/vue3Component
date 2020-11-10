import { mount } from '@vue/test-utils';
import Button from '../components/button/src/main.vue';

describe('button', () => {
	test('is a Vue instance', () => {
		const wrapper = mount(Button);
		expect(wrapper.find('div').exists()).toBeTruthy();
	});
});
