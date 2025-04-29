<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { ref, watch } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import { index, update } from '@/actions/App/Http/Controllers/TeacherController';
import Card from 'primevue/card';
import { Form, FormField } from '@primevue/forms';
import { reactive } from 'vue';
import { router } from '@inertiajs/vue3';

const toast = useToast();

const props = defineProps({
    teacher: {
        type: Object,
        required: true,
    },
});

const initialValues = ref({
    name: props.teacher.name,
    nuptk: props.teacher.nuptk,
    nip: props.teacher.nip,
});

const resolver = ref(
    zodResolver(
        z.object({
            name: z.string().min(1, 'Name is required'),
            nuptk: z.string().regex(/^\d+$/, 'NUPTK must be numeric').optional(),
            nip: z.string().regex(/^[0-9-]+$/, 'NIP must be numeric or write "-" if you dont have it').optional(),
        })
    )
);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        router.put(update(props.teacher.id).url, initialValues.value, {
            preserveScroll: true,
            onSuccess: () => {
                toast.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Teacher ' + initialValues.value.name + ' Updated',
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
        <InertiaHead title="Edit Teacher" />
        <Card>
            <template #title>Edit Teacher</template>
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
                    <FormField v-slot="$field" name="nuptk" :initialValue="initialValues.nuptk"
                        class="flex flex-col gap-1">
                        <InputText type="text" v-model="initialValues.nuptk" placeholder="NUPTK" variant="filled" />
                        <Message v-if="$form.nuptk?.invalid" severity="error" size="small" variant="simple">
                            <ul class="my-0 px-4 flex flex-col gap-1">
                                <li v-for="(error, index) of $form.nuptk.errors" :key="index">{{ error.message }}
                                </li>
                            </ul>
                        </Message>
                    </FormField>
                    <FormField v-slot="$field" name="nip" :initialValue="initialValues.nip" class="flex flex-col gap-1">
                        <InputText type="text" v-model="initialValues.nip" placeholder="NIP" variant="filled" />
                        <Message v-if="$form.nip?.invalid" severity="error" size="small" variant="simple">
                            <ul class="my-0 px-4 flex flex-col gap-1">
                                <li v-for="(error, index) of $form.nip.errors" :key="index">{{ error.message }}
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
