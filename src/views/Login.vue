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
                <h2 class="text-center text-3xl font-bold text-gray-900 mb-2">Sign in to your
                    account</h2>
                    
                <p class="text-center text-gray-600 mt-0 mb-2">
                    Or
                    <router-link to="/register" class="no-underline">
                        <span class="font-medium text-indigo-600 hover:text-indigo-500">join on our
                            community</span>
                    </router-link>
                </p>
                <p class="mb-0">Join with</p>
                <div class="card">
                    <div class="flex justify-content-between flex-wrap card-container purple-container">
                        <div class="border-solid border-1 border-blue-500 cursor-pointer flex align-items-center justify-content-center w-5rem h-2rem bg-white border-round-2xl m-2">
                            <i class="pi pi-facebook" style="font-size: 1.25rem"></i>
                        </div>
                        <div class="border-solid border-1 border-blue-500 cursor-pointer flex align-items-center justify-content-center w-5rem h-2rem bg-white border-round-2xl m-2">
                            <i class="pi pi-github" style="font-size: 1.25rem"></i>
                        </div>
                        <div class="border-solid border-1 border-blue-500 cursor-pointer flex align-items-center justify-content-center w-5rem h-2rem bg-white border-round-2xl m-2">
                            <i class="pi pi-google" style="font-size: 1.25rem"></i>
                        </div>
                        <div class="border-solid border-1 border-blue-500 cursor-pointer flex align-items-center justify-content-center w-5rem h-2rem bg-white border-round-2xl m-2">
                            <i class="pi pi-twitter" style="font-size: 1.25rem"></i>
                        </div>
                    </div>
                </div>
                <Divider class="mb-0" align="center" type="dashed" >
                    <b >

                        Or continue with
                    </b>
                </Divider>
    
                
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
                        <div class="p-float-label">
                            <Password id="password" v-model="v$.password.$model"
                                :class="{ 'p-invalid': v$.password.$invalid && submitted }" toggleMask>
                                
                            </Password>
                            <label for="password"
                                :class="{ 'p-error': v$.password.$invalid && submitted }">Password*</label>
                        </div>
                        <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response"
                            class="p-error">{{ v$.password.required.$message.replace('Value', 'Password') }}</small>
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
            password: '',
        });

        const rules = {
            name: { required },
            password: { required },
        };

        const submitted = ref(false);
        const showMessage = ref(false);

        const v$ = useVuelidate(rules, state);

        const handleSubmit = (isFormValid) => {
            submitted.value = true;

            if (!isFormValid) {
                return;
            }

            console.log(state)

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
            state.password = '';
            submitted.value = false;
        }

        return { state, v$, handleSubmit, toggleDialog, submitted, showMessage }
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