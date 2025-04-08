<template>
  <q-table
    v-bind="props"
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
            ? col.format(props.row[col.field as string], props.row)
            : props.row[col.field as string]
        }}
      </slot>
    </template>

    <!-- Actions Column -->
    <template v-if="showActions" v-slot:body-cell-actions="props">
      <q-td>
        <q-btn flat round dense icon="more_vert">
          <q-menu>
            <q-list dense>
              <q-item clickable @click="emitAction('Add', props.row)">
                <q-item-section>Add</q-item-section>
              </q-item>
              <q-item clickable @click="emitAction('Edit', props.row)">
                <q-item-section>Edit</q-item-section>
              </q-item>
              <q-item clickable @click="emitAction('Delete', props.row)">
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts" setup generic="T">
import type { QTableColumn, QTableProps } from "quasar";
import { computed, defineProps, defineEmits } from "vue";
import type { TableActionType } from "~/common/common-types";

interface ITablePropType<RowType> {
  // columns: Array<QTableColumn>;
  // rows: Array<RowType>;
  showActions?: boolean;
}

const props = defineProps<QTableProps & ITablePropType<T>>();
//   {
//   columns: {
//     type: Array<QTableColumn>,
//     required: false,
//   },
//   rows: {
//     type: Array<T>,
//     required: true,
//   },
//   showActions: Boolean,
// }

// const emit = defineEmits(["action"]);
const emit = defineEmits<{
  (event: "action", action: TableActionType, row: any): void;
}>();

const computedColumns: ComputedRef<Array<QTableColumn>> = computed(() =>
  props.showActions
    ? [
        { name: "actions", label: "Actions", align: "right", field: "id" },
        ...(props.columns ?? []),
      ]
    : [...(props.columns ?? [])]
);

function emitAction(action: TableActionType, row: any) {
  emit("action", action, row);
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
