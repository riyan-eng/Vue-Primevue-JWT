<template>
    <div class="flex flex-row flex-wrap min-h-screen">
        <div class="bg-white w-6 flex justify-content-center align-content-center flex-wrap">
            <div >

            </div>
            <div class="geeks">
                <img src="src/assets/image1.jpg" alt="ss">
            </div>
            
        </div>
        <div class="bg-white w-6 flex justify-content-center flex-wrap align-content-center">
            <div class="card w-7 flex flex-column card-container">
                <div class="flex justify-content-center ">
                    <Image src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Image" width="150" />

                </div>
                <h2 class="text-center text-3xl font-bold text-gray-900 mb-2">Join our community</h2>
                    
                <p class="text-center text-gray-600 mt-0 mb-2">
                    Or
                    <router-link to="/login" class="no-underline">
                        <span class="font-medium text-indigo-600 hover:text-indigo-500">already have an account</span>
                    </router-link>
                </p>
                <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid mt-5">
                    <div class="mb-4">
                        <div class="p-float-label">
                            <InputText id="name" v-model="v$.name.$model"
                                :class="{ 'p-invalid': v$.name.$invalid && submitted }" />
                            <label for="name" :class="{ 'p-error': v$.name.$invalid && submitted }">Name*</label>
                        </div>
                        <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{
                                v$.name.required.$message.replace('Value', 'Name')
                        }}</small>
                    </div>
                    <div class="mb-4">
                        <div class="p-float-label p-input-icon-right">
                            <i class="pi pi-envelope" />
                            <InputText id="email" v-model="v$.email.$model"
                                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                                aria-describedby="email-error" />
                            <label for="email" :class="{ 'p-error': v$.email.$invalid && submitted }">Email*</label>
                        </div>
                        <span v-if="v$.email.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                                <small class="p-error">{{ error.$message }}</small>
                            </span>
                        </span>
                        <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response"
                            class="p-error">{{ v$.email.required.$message.replace('Value', 'Email') }}</small>
                    </div>
                    <div class="mb-4">
                        <div class="p-float-label">
                            <Password id="password" v-model="v$.password.$model"
                                :class="{ 'p-invalid': v$.password.$invalid && submitted }" toggleMask>
                                <template #header>
                                    <h6>Pick a password</h6>
                                </template>
                                <template #footer="sp">
                                    {{ sp.level }}
                                    <Divider />
                                    <p class="mt-2">Suggestions</p>
                                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                        <li>At least one lowercase</li>
                                        <li>At least one uppercase</li>
                                        <li>At least one numeric</li>
                                        <li>Minimum 8 characters</li>
                                    </ul>
                                </template>
                            </Password>
                            <label for="password"
                                :class="{ 'p-error': v$.password.$invalid && submitted }">Password*</label>
                        </div>
                        <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response"
                            class="p-error">{{ v$.password.required.$message.replace('Value', 'Password') }}</small>
                    </div>
                    
                    <div class="field-checkbox">
                        <Checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model"
                            :class="{ 'p-invalid': v$.accept.$invalid && submitted }" />
                        <label for="accept" :class="{ 'p-error': v$.accept.$invalid && submitted }">I agree to the terms
                            and conditions*</label>
                    </div>
                    <Button type="submit" label="Submit" class="mt-2" />
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import Password from 'primevue/password'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Image from 'primevue/image';

export default {
    components: {
        Button, Dialog, InputText, Divider, Password, Calendar, Dropdown, Checkbox, Image
    },
    setup() {
        const state = reactive({
            name: '',
            email: '',
            password: '',
            accept: null
        });

        const rules = {
            name: { required },
            email: { required, email },
            password: { required },
            accept: { required }
        };

        const submitted = ref(false);
        const countries = ref();
        const showMessage = ref(false);
        const date = ref();
        const country = ref();

        const v$ = useVuelidate(rules, state);

        const handleSubmit = (isFormValid) => {
            submitted.value = true;

            if (!isFormValid) {
                return;
            }

            toggleDialog();
        }
        const toggleDialog = () => {
            showMessage.value = !showMessage.value;

            if (!showMessage.value) {
                resetForm();
            }
        }
        const resetForm = () => {
            state.name = '';
            state.email = '';
            state.password = '';
            state.date = null;
            state.country = null;
            state.accept = null;
            submitted.value = false;
        }

        return { state, v$, handleSubmit, toggleDialog, submitted, countries, showMessage, date, country }
    }
}
</script>

<style lang="scss" scoped>
.geeks {
    width:100%;
    height:98vh;
}
img {
    width:100%;
    height:100%;
    object-fit:cover;
}
</style>