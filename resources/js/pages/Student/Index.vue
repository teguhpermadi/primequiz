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
import { create, edit, destroy } from '@/actions/App/Http/Controllers/StudentController';
import { useToast } from 'primevue/usetoast';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    students: Array,
});

const toast = useToast();
const students = ref(props.students);
const deleteStudentDialog = ref(false);
const deleteSelectedStudentsDialog = ref(false)
const student = ref({});
const selectedStudents = ref();

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

const newStudent = () => {
    router.get(create().url);
};

const confirmDeleteSelected = () => {
    deleteSelectedStudentsDialog.value = true;
};

const deleteSelectedStudents = () => {
    // kirim data hanya id student saja
    const ids = selectedStudents.value.map((std) => std.id);
    // hitung jumlah ids
    const count = ids.length;
    router.delete(destroy.delete(ids).url, {
        preserveScroll: true,
        onSuccess: () => {
            students.value = students.value.filter(
                (std) => !ids.includes(std.id)
            );
            toast.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Deleted ' + count + ' students',
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
        }
    });
    deleteSelectedStudentsDialog.value = false;
    selectedStudents.value = null;
}
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
            <Toolbar class="mb-6">
                <template #start>
                    <Button label="New" icon="pi pi-plus" class="mr-2" @click="newStudent" />
                    <Button label="Delete" icon="pi pi-trash" severity="danger" outlined @click="confirmDeleteSelected"
                        :disabled="!selectedStudents || !selectedStudents.length" />
                </template>

                <!-- <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" customUpload chooseLabel="Import" class="mr-2" auto :chooseButtonProps="{ severity: 'secondary' }" />
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template> -->
            </Toolbar>
            <DataTable :value="students" paginator dataKey="id" v-model:selection="selectedStudents" :rows="5"
                :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column :exportable="false">
                    <template #body="slotProps">
                        <Avatar :image="slotProps.data.photo_url" size="large" shape="circle" />
                    </template>
                </Column>
                <Column field="name" header="Name"></Column>
                <Column field="nisn" header="NISN"></Column>
                <Column field="nis" header="NIS"></Column>
                <Column :exportable="false">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded severity="warn"
                            @click="$inertia.visit(edit(slotProps.data.id).url)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger"
                            @click="confirmDeleteStudent(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>

            <Dialog v-model:visible="deleteStudentDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="student">Are you sure you want to delete
                        <b>{{ student.name }}</b>?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" text @click="deleteStudentDialog = false" />
                    <Button label="Yes" icon="pi pi-check" @click="deleteStudent" />
                </template>
            </Dialog>

            <Dialog v-model:visible="deleteSelectedStudentsDialog" :style="{ width: '450px' }" header="Confirm"
                :modal="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="selectedStudents">Are you sure you want to delete the selected students?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" text @click="deleteSelectedStudentsDialog = false" />
                    <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedStudents" />
                </template>
            </Dialog>
        </div>
    </AppLayout>
</template>
