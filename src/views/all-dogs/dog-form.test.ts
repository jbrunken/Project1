import { expect, test, describe, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useDogsStore } from '../../stores'
import SignUpForm from '../SignUpForm.vue'

const wrapper = mount(SignUpForm, {
    global: {
        plugins: [createTestingPinia({ createSpy: vitest.fn }),],
    }});

    const store = useDogsStore()
    store.name = 'dogStore'

////////////////////testing the submit button on form

test('object created with submit button', async () => {

    await wrapper.find('[data-test="dog-name"]').setValue('Fido')
    await wrapper.find('[data-test="dog-breed"]').setValue('Poodle')
    await wrapper.find('[data-test="dog-age"]').setValue('3')
    await wrapper.find('[data-test="dog-gender"]').setValue('Male')
    
    describe('index', () => {
        test('should render add-dog event on button click', async () => {
            await wrapper.find('button').trigger('click')
            expect(wrapper.emitted('add-dog')).toBeTruthy()
        })
        });
        
});
    


///////////////testing alert message when no dog info is entered


test('alert message when no dog info is entered', async () => {
    
    describe('sign up form', () => {
        test('should render alert message on button click', async () => {
            await wrapper.find('button').trigger('click')
            expect(wrapper.emitted('alert')).toBeTruthy()
        })
        });
})








    