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
import { create, edit, destroy } from '@/actions/App/Http/Controllers/GradeController';
import { useToast } from 'primevue/usetoast';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    grades: Array,
});

const toast = useToast();
const grades = ref(props.grades);
const deleteGradeDialog = ref(false);
const deleteSelectedGradesDialog = ref(false)
const grade = ref({});
const selectedGrades = ref();

const confirmDeleteGrade = (grd) => {
    grade.value = grd;
    deleteGradeDialog.value = true;
};

const deleteGrade = () => {
    // products.value = products.value.filter(val => val.id !== product.value.id);
    deleteGradeDialog.value = false;
    router.delete(destroy.delete(grade.value.id).url, {
        preserveScroll: true,
        onSuccess: () => {
            grades.value = grades.value.filter(
                (std) => std.id !== grade.value.id
            );
            toast.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Grade ' + grade.value.name + ' Deleted',
                life: 3000,
            });
            grade.value = {};
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

const newGrade = () => {
    router.get(create().url);
};

const confirmDeleteSelected = () => {
    deleteSelectedGradesDialog.value = true;
};

const deleteSelectedGrades = () => {
    // kirim data hanya id grade saja
    const ids = selectedGrades.value.map((std) => std.id);
    // hitung jumlah ids
    const count = ids.length;
    router.delete(destroy.delete(ids).url, {
        preserveScroll: true,
        onSuccess: () => {
            grades.value = grades.value.filter(
                (std) => !ids.includes(std.id)
            );
            toast.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Deleted ' + count + ' grades',
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
    deleteSelectedGradesDialog.value = false;
    selectedGrades.value = null;
}
</script>

<template>
    <AppLayout>
        <InertiaHead title="Grade" />

        <Toolbar class="mb-6">
                    <template #start>
                        <Button label="New" icon="pi pi-plus" class="mr-2" @click="newGrade" />
                        <Button label="Delete" icon="pi pi-trash" severity="danger" outlined
                            @click="confirmDeleteSelected" :disabled="!selectedGrades || !selectedGrades.length
                                " />
                    </template>

                    <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" customUpload chooseLabel="Import" class="mr-2" auto :chooseButtonProps="{ severity: 'secondary' }" />
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
                </Toolbar>

        <Card>
            <template #content>
                
                <DataTable :value="grades" paginator dataKey="id" v-model:selection="selectedGrades" :rows="5"
                    :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="level" header="Level"></Column>
                    <Column :exportable="false">
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" outlined rounded severity="warn" @click="
                                $inertia.visit(edit(slotProps.data.id).url)
                                " />
                            <Button icon="pi pi-trash" outlined rounded severity="danger"
                                @click="confirmDeleteGrade(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>

        <Dialog v-model:visible="deleteGradeDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="grade">Are you sure you want to delete
                        <b>{{ grade.name }}</b>?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" text @click="deleteGradeDialog = false" />
                    <Button label="Yes" icon="pi pi-check" @click="deleteGrade" />
                </template>
            </Dialog>

            <Dialog v-model:visible="deleteSelectedGradesDialog" :style="{ width: '450px' }" header="Confirm"
                :modal="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="selectedGrades">Are you sure you want to delete the selected grades?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" text @click="deleteSelectedGradesDialog = false" />
                    <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedGrades" />
                </template>
            </Dialog>
    </AppLayout>
</template>
