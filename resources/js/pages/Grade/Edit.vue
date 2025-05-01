<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { ref, watch } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import { index, update } from '@/actions/App/Http/Controllers/GradeController';
import Card from 'primevue/card';
import { Form, FormField } from '@primevue/forms';
import { reactive } from 'vue';
import { router } from '@inertiajs/vue3';
import Select from 'primevue/select';

const toast = useToast();

const props = defineProps({
    grade: {
        type: Object,
        required: true,
    },
    levels: {
        type: Array,
        required: true,
    },
});

const initialValues = ref({
    name: props.grade.name,
    level: props.grade.level,
});

const resolver = ref(
    zodResolver(
        z.object({
            name: z.string().min(1, 'Name is required'),
            level: z.string().min(1, 'Level is required'),
        })
    )
);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        router.put(update(props.grade.id).url, initialValues.value, {
            preserveScroll: true,
            onSuccess: () => {
                toast.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Grade ' + initialValues.value.name + ' Updated',
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
        <InertiaHead title="Edit Grade" />
        <Card>
            <template #title>Edit Grade</template>
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
                    <FormField v-slot="$field" name="level" :initialValue="initialValues.level"
                        class="flex flex-col gap-1">
                        <Select v-model="initialValues.level" :options="levels" optionLabel="name" optionValue="code"
                             placeholder="Select a Level" class="w-full" fluid />
                        <Message v-if="$form.level?.invalid" severity="error" size="small" variant="simple">
                            <ul class="my-0 px-4 flex flex-col gap-1">
                                <li v-for="(error, index) of $form.level.errors" :key="index">{{ error.message }}
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
