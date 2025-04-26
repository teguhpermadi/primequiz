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

const props = defineProps({
    students: Array,
});

const students = ref(props.students);
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
                <Column field="photo_url" header="Photo"></Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button
                            icon="pi pi-pencil"
                            outlined
                            rounded
                            class="mr-2"
                            @click="editProduct(slotProps.data)"
                        />
                        <Button
                            icon="pi pi-trash"
                            outlined
                            rounded
                            severity="danger"
                            @click="confirmDeleteProduct(slotProps.data)"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>
    </AppLayout>
</template>
