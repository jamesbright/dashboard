import { shallowMount } from '@vue/test-utils'
import Users from '@/components/Users.vue'

describe('Users.vue', () => {
    const wrapper = shallowMount(Users)
    // checks Users is a component.
    it('Users is a component', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})