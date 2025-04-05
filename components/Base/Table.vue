<template>
  <q-table
    v-bind="$attrs"
    :rows="rows"
    :columns="computedColumns"
    row-key="id"
    class="sticky-header-table"
  >
    <!-- Dynamically create slots for each column -->
    <template
      v-for="col in columns"
      :key="col.name"
      v-slot:[`body-cell-${col.name}`]="props"
    >
      <slot :name="col.name" v-bind="props">
        <!-- Default rendering if no slot is provided -->
        <!-- {{ props.row[col.field] }} -->
        {{
          col.format
            ? col.format(props.row[col.field], props.row)
            : props.row[col.field]
        }}
      </slot>
    </template>

    <!-- Actions Column -->
    <template v-if="showActions" v-slot:body-cell-actions="props">
      <q-td>
        <q-btn flat round dense icon="more_vert">
          <q-menu>
            <q-list dense>
              <q-item clickable @click="emitAction('add', props.row)">
                <q-item-section>Add</q-item-section>
              </q-item>
              <q-item clickable @click="emitAction('edit', props.row)">
                <q-item-section>Edit</q-item-section>
              </q-item>
              <q-item clickable @click="emitAction('delete', props.row)">
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-td>
    </template>
  </q-table>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  columns: Array,
  rows: Array,
  showActions: Boolean,
});

const emit = defineEmits(["action"]);

const computedColumns = computed(() =>
  props.showActions
    ? [
        { name: "actions", label: "Actions", align: "right", field: "id" },
        ...props.columns,
      ]
    : [...props.columns]
);

function emitAction(action, row) {
  emit("action", { action, row });
}
</script>
<style>
.sticky-header-table thead tr th {
  position: sticky;
  top: 0;
  background: white; /* or match your table's background */
  z-index: 1;
}
</style>
