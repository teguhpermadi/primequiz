<script setup>
import 'primeicons/primeicons.css';

import AppLayout from '@/layouts/AppLayout.vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import ColumnGroup from 'primevue/columngroup'; // optional
import Row from 'primevue/row'; // optional
import Avatar from 'primevue/avatar';
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import { edit } from '@/actions/App/Http/Controllers/StudentController';
import { useToast } from 'primevue/usetoast';
import { destroy } from '@/actions/App/Http/Controllers/StudentController';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    students: Array,
});

const toast = useToast();
const students = ref(props.students);
const deleteStudentDialog = ref(false);
const student = ref({});

const confirmDeleteStudent = (std) => {
    student.value = std;
    deleteStudentDialog.value = true;
};

const deleteStudent = () => {
    // products.value = products.value.filter(val => val.id !== product.value.id);
    deleteStudentDialog.value = false;
    router.delete(destroy.delete(student.value.id).url, {
        preserveScroll: true,
        onSuccess: () => {
            students.value = students.value.filter(
                (std) => std.id !== student.value.id
            );
            toast.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Student ' + student.value.name + ' Deleted',
                life: 3000,
            });
            student.value = {};
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
};
</script>

<template>
    <AppLayout>
        <InertiaHead title="Student" />

        <Card>
            <template #content>
                <p class="m-0">Student</p>
            </template>
        </Card>

        <div class="card">
            <DataTable
                :value="students"
                paginator
                :rows="5"
                :rowsPerPageOptions="[5, 10, 20, 50]"
                tableStyle="min-width: 50rem"
            >
                <Column :exportable="false">
                    <template #body="slotProps">
                        <Avatar
                            :image="slotProps.data.photo_url"
                            size="large"
                            shape="circle"
                        />
                    </template>
                </Column>
                <Column field="name" header="Name"></Column>
                <Column field="nisn" header="NISN"></Column>
                <Column field="nis" header="NIS"></Column>
                <Column
                    :exportable="false"
                    style="min-width: 12rem"
                    class="flex space-x-3"
                >
                    <template #body="slotProps">
                        <Button
                            icon="pi pi-pencil"
                            outlined
                            rounded
                            severity="warn"
                            @click="$inertia.visit(edit(slotProps.data.id).url)"
                        />
                        <Button
                            icon="pi pi-trash"
                            outlined
                            rounded
                            severity="danger"
                            @click="confirmDeleteStudent(slotProps.data)"
                        />
                    </template>
                </Column>
            </DataTable>

            <Dialog
                v-model:visible="deleteStudentDialog"
                :style="{ width: '450px' }"
                header="Confirm"
                :modal="true"
            >
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="student"
                        >Are you sure you want to delete
                        <b>{{ student.name }}</b
                        >?</span
                    >
                </div>
                <template #footer>
                    <Button
                        label="No"
                        icon="pi pi-times"
                        text
                        @click="deleteStudentDialog = false"
                    />
                    <Button
                        label="Yes"
                        icon="pi pi-check"
                        @click="deleteStudent"
                    />
                </template>
            </Dialog>
        </div>
    </AppLayout>
</template>
