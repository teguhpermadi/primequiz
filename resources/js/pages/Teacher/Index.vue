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
import { create, edit, destroy } from '@/actions/App/Http/Controllers/TeacherController';
import { useToast } from 'primevue/usetoast';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    teachers: Array,
});

const toast = useToast();
const teachers = ref(props.teachers);
const deleteTeacherDialog = ref(false);
const deleteSelectedTeachersDialog = ref(false)
const teacher = ref({});
const selectedTeachers = ref();

const confirmDeleteTeacher = (std) => {
    teacher.value = std;
    deleteTeacherDialog.value = true;
};

const deleteTeacher = () => {
    // products.value = products.value.filter(val => val.id !== product.value.id);
    deleteTeacherDialog.value = false;
    router.delete(destroy.delete(teacher.value.id).url, {
        preserveScroll: true,
        onSuccess: () => {
            teachers.value = teachers.value.filter(
                (std) => std.id !== teacher.value.id
            );
            toast.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Teacher ' + teacher.value.name + ' Deleted',
                life: 3000,
            });
            teacher.value = {};
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

const newTeacher = () => {
    router.get(create().url);
};

const confirmDeleteSelected = () => {
    deleteSelectedTeachersDialog.value = true;
};

const deleteSelectedTeachers = () => {
    // kirim data hanya id teacher saja
    const ids = selectedTeachers.value.map((std) => std.id);
    // hitung jumlah ids
    const count = ids.length;
    router.delete(destroy.delete(ids).url, {
        preserveScroll: true,
        onSuccess: () => {
            teachers.value = teachers.value.filter(
                (std) => !ids.includes(std.id)
            );
            toast.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Deleted ' + count + ' teachers',
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
    deleteSelectedTeachersDialog.value = false;
    selectedTeachers.value = null;
}
</script>

<template>
    <AppLayout>
        <InertiaHead title="Teacher" />

        <Card>
            <template #content>
                <p class="m-0">Teacher</p>
            </template>
        </Card>

        <div class="card">
            <Toolbar class="mb-6">
                <template #start>
                    <Button label="New" icon="pi pi-plus" class="mr-2" @click="newTeacher" />
                    <Button label="Delete" icon="pi pi-trash" severity="danger" outlined @click="confirmDeleteSelected"
                        :disabled="!selectedTeachers || !selectedTeachers.length" />
                </template>

                <!-- <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" customUpload chooseLabel="Import" class="mr-2" auto :chooseButtonProps="{ severity: 'secondary' }" />
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template> -->
            </Toolbar>
            <DataTable :value="teachers" paginator dataKey="id" v-model:selection="selectedTeachers" :rows="5"
                :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column :exportable="false">
                    <template #body="slotProps">
                        <Avatar :image="slotProps.data.photo_url" size="large" shape="circle" />
                    </template>
                </Column>
                <Column field="name" header="Name"></Column>
                <Column field="nuptk" header="NUPTK"></Column>
                <Column field="nip" header="NIP"></Column>
                <Column :exportable="false">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded severity="warn"
                            @click="$inertia.visit(edit(slotProps.data.id).url)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger"
                            @click="confirmDeleteTeacher(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>

            <Dialog v-model:visible="deleteTeacherDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="teacher">Are you sure you want to delete
                        <b>{{ teacher.name }}</b>?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" text @click="deleteTeacherDialog = false" />
                    <Button label="Yes" icon="pi pi-check" @click="deleteTeacher" />
                </template>
            </Dialog>

            <Dialog v-model:visible="deleteSelectedTeachersDialog" :style="{ width: '450px' }" header="Confirm"
                :modal="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="selectedTeachers">Are you sure you want to delete the selected teachers?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" text @click="deleteSelectedTeachersDialog = false" />
                    <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedTeachers" />
                </template>
            </Dialog>
        </div>
    </AppLayout>
</template>
