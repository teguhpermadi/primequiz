<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { ref, watch } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import { index, store } from '@/actions/App/Http/Controllers/StudentController';
import Card from 'primevue/card';
import { Form, FormField } from '@primevue/forms';
import { reactive } from 'vue';
import { router } from '@inertiajs/vue3';

const toast = useToast();

const initialValues = ref({
    name: '',
    nisn: '',
    nis: '',
});

const resolver = ref(
    zodResolver(
        z.object({
            name: z.string().min(1, 'Name is required'),
            nisn: z.string().min(1, 'NISN is required').length(10, 'NISN must be 10 characters long').regex(/^\d+$/, 'NISN must be numeric'),
            nis: z.string().min(1, 'NIS is required').regex(/^\d+$/, 'NIS must be numeric'),
        })
    )
);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        router.post(store().url, initialValues.value, {
            preserveScroll: true,
            onSuccess: () => {
                toast.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Student ' + initialValues.value.name + ' Created',
                    life: 3000,
                });
            },
            onError: (error) => {
                toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.response.data.message,
                    life: 3000,
                });
            },
        });
    }
};
</script>

<template>
    <AppLayout>
        <InertiaHead title="Create Student" />
        <Card>
            <template #title>Create Student</template>
            <template #content>
                <Form v-slot="$form" :initialValues :resolver="resolver" @submit="onFormSubmit"
                    class="flex flex-col gap-4 w-full">
                    <input type="hidden" name="id" v-model="initialValues.id" />
                    <FormField v-slot="$field" name="name" :initialValue="initialValues.name"
                        class="flex flex-col gap-1">
                        <InputText type="text" v-model="initialValues.name" placeholder="Enter Name" variant="filled" />
                        <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">{{
                            $form.name.error.message }}</Message>
                    </FormField>
                    <FormField v-slot="$field" name="nisn" :initialValue="initialValues.nisn"
                        class="flex flex-col gap-1">
                        <InputText type="text" v-model="initialValues.nisn" placeholder="NISN" variant="filled" />
                        <Message v-if="$form.nisn?.invalid" severity="error" size="small" variant="simple">
                            <ul class="my-0 px-4 flex flex-col gap-1">
                                <li v-for="(error, index) of $form.nisn.errors" :key="index">{{ error.message }}
                                </li>
                            </ul>
                        </Message>
                    </FormField>
                    <FormField v-slot="$field" name="nis" :initialValue="initialValues.nis" class="flex flex-col gap-1">
                        <InputText type="text" v-model="initialValues.nis" placeholder="NIS" variant="filled" />
                        <Message v-if="$form.nis?.invalid" severity="error" size="small" variant="simple">
                            <ul class="my-0 px-4 flex flex-col gap-1">
                                <li v-for="(error, index) of $form.nis.errors" :key="index">{{ error.message }}
                                </li>
                            </ul>
                        </Message>
                    </FormField>

                    <div class="flex gap-4 mt-1">
                        <Button label="Cancel" severity="secondary" outlined class="w-full"
                            @click="$inertia.visit(index.url())" />
                        <Button label="Save" class="w-full" type="submit" />
                    </div>
                </Form>
            </template>
        </Card>
    </AppLayout>
</template>
