<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <!-- Table Options Card -->
    <b-card title="Bootstrap 5 Table Options" class="main-card mb-4">
      <b-row>
        <b-col md="6">
          <div class="form-check-group">
            <b-form-checkbox v-model="striped" class="mb-2">Striped Rows</b-form-checkbox>
            <b-form-checkbox v-model="bordered" class="mb-2">Bordered</b-form-checkbox>
            <b-form-checkbox v-model="hover" class="mb-2">Hover Effect</b-form-checkbox>
            <b-form-checkbox v-model="small" class="mb-2">Small Size</b-form-checkbox>
          </div>
        </b-col>
        <b-col md="6">
          <div class="form-check-group">
            <b-form-checkbox v-model="dark" class="mb-2">Dark Theme</b-form-checkbox>
            <b-form-checkbox v-model="responsive" class="mb-2">Responsive</b-form-checkbox>
            <b-form-checkbox v-model="showEmpty" class="mb-2">Show Empty State</b-form-checkbox>
            <b-form-checkbox v-model="sortable" class="mb-2">Sortable Columns</b-form-checkbox>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <!-- Interactive Table Card -->
    <b-card title="Interactive Data Table" class="main-card mb-4">
      <div class="table-controls mb-3">
        <b-row class="align-items-center">
          <b-col md="6">
            <div class="d-flex align-items-center">
              <label class="form-label me-2 mb-0">Show:</label>
              <b-form-select
                v-model="perPage"
                :options="[
                  { value: 5, text: '5' },
                  { value: 10, text: '10' },
                  { value: 25, text: '25' },
                  { value: 50, text: '50' }
                ]"
                size="sm"
                style="width: auto"
              ></b-form-select>
              <span class="ms-2 text-muted">entries</span>
            </div>
          </b-col>
          <b-col md="6">
            <div class="d-flex justify-content-end">
              <b-form-input
                v-model="filter"
                type="text"
                size="sm"
                placeholder="Search..."
                style="width: 200px"
              ></b-form-input>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-table
        :items="paginatedItems"
        :fields="tableFields"
        :striped="striped"
        :bordered="bordered"
        :hover="hover"
        :small="small"
        :dark="dark"
        :responsive="responsive"
        :show-empty="showEmpty"
        empty-text="No data available"
        class="mb-0"
      >
        <!-- Custom slot for status column -->
        <template #cell(status)="data">
          <span :class="getStatusClass(data.value)" class="badge">
            {{ data.value }}
          </span>
        </template>

        <!-- Custom slot for actions column -->
        <template #cell(actions)="data">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-primary btn-sm" @click="editItem(data.item)">
              <font-awesome-icon icon="edit" />
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="deleteItem(data.item)">
              <font-awesome-icon icon="trash" />
            </button>
          </div>
        </template>
      </b-table>

      <!-- Pagination -->
      <div v-if="totalRows > perPage" class="d-flex justify-content-between align-items-center mt-3">
        <div class="text-muted">
          Showing {{ (currentPage - 1) * perPage + 1 }} to {{ Math.min(currentPage * perPage, totalRows) }} of
          {{ totalRows }} entries
        </div>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          size="sm"
          class="mb-0"
          aria-label="Table pagination"
        ></b-pagination>
      </div>
    </b-card>

    <!-- Basic Examples Card -->
    <b-card title="Basic Table Examples" class="main-card mb-4">
      <h6 class="mb-3">Simple Table with Custom Styling</h6>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Department</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in employees" :key="employee.id">
              <td>{{ index + 1 }}</td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar-sm me-2">
                    <div class="avatar-title bg-primary text-white rounded-circle">
                      {{ employee.name.charAt(0) }}
                    </div>
                  </div>
                  {{ employee.name }}
                </div>
              </td>
              <td>{{ employee.position }}</td>
              <td>{{ employee.department }}</td>
              <td class="text-end">${{ employee.salary.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'RegularTables',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Regular Tables',
      subheading: 'Tables are the backbone of almost all web applications.',
      icon: 'pe-7s-drawer icon-gradient bg-happy-itmeo',

      // Table styling options
      striped: true,
      bordered: false,
      hover: true,
      small: false,
      dark: false,
      responsive: true,
      showEmpty: true,
      sortable: true,

      // Pagination and filtering
      currentPage: 1,
      perPage: 10,
      filter: '',
      sortBy: 'name',
      sortDesc: false,

      // Table fields
      tableFields: [
        { key: 'id', label: 'ID', sortable: true, class: 'text-center' },
        { key: 'name', label: 'Full Name', sortable: true },
        { key: 'email', label: 'Email', sortable: true },
        { key: 'department', label: 'Department', sortable: true },
        { key: 'role', label: 'Role', sortable: true },
        { key: 'status', label: 'Status', sortable: true, class: 'text-center' },
        { key: 'joinDate', label: 'Join Date', sortable: true, class: 'text-center' },
        { key: 'actions', label: 'Actions', class: 'text-center' }
      ],

      // Enhanced sample data
      items: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@company.com',
          department: 'Engineering',
          role: 'Senior Developer',
          status: 'Active',
          joinDate: '2022-01-15'
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane.smith@company.com',
          department: 'Design',
          role: 'UI/UX Designer',
          status: 'Active',
          joinDate: '2022-03-20'
        },
        {
          id: 3,
          name: 'Mike Johnson',
          email: 'mike.johnson@company.com',
          department: 'Marketing',
          role: 'Marketing Manager',
          status: 'Inactive',
          joinDate: '2021-11-10'
        },
        {
          id: 4,
          name: 'Sarah Wilson',
          email: 'sarah.wilson@company.com',
          department: 'Engineering',
          role: 'DevOps Engineer',
          status: 'Active',
          joinDate: '2023-02-01'
        },
        {
          id: 5,
          name: 'David Brown',
          email: 'david.brown@company.com',
          department: 'Sales',
          role: 'Sales Representative',
          status: 'Pending',
          joinDate: '2023-05-15'
        },
        {
          id: 6,
          name: 'Emily Davis',
          email: 'emily.davis@company.com',
          department: 'HR',
          role: 'HR Specialist',
          status: 'Active',
          joinDate: '2022-08-12'
        },
        {
          id: 7,
          name: 'Tom Anderson',
          email: 'tom.anderson@company.com',
          department: 'Engineering',
          role: 'Frontend Developer',
          status: 'Active',
          joinDate: '2023-01-20'
        },
        {
          id: 8,
          name: 'Lisa Miller',
          email: 'lisa.miller@company.com',
          department: 'Design',
          role: 'Product Designer',
          status: 'Inactive',
          joinDate: '2021-09-05'
        }
      ],

      // Simple employee data for basic table
      employees: [
        { id: 1, name: 'Alice Johnson', position: 'Software Engineer', department: 'Engineering', salary: 95000 },
        { id: 2, name: 'Bob Smith', position: 'Product Manager', department: 'Product', salary: 110000 },
        { id: 3, name: 'Carol Williams', position: 'Designer', department: 'Design', salary: 75000 },
        { id: 4, name: 'David Chen', position: 'Data Analyst', department: 'Analytics', salary: 85000 },
        { id: 5, name: 'Eva Rodriguez', position: 'Marketing Specialist', department: 'Marketing', salary: 65000 }
      ]
    }
  },
  computed: {
    filteredItems() {
      if (!this.filter || !Array.isArray(this.items)) {
        return this.items || []
      }
      const filterLower = this.filter.toLowerCase()
      return this.items.filter(item => {
        if (!item || typeof item !== 'object') return false
        return Object.values(item).some(value => {
          if (value === null || value === undefined) return false
          return String(value).toLowerCase().includes(filterLower)
        })
      })
    },
    paginatedItems() {
      const filtered = this.filteredItems
      if (!Array.isArray(filtered)) return []

      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return filtered.slice(start, end)
    },
    totalRows() {
      return Array.isArray(this.filteredItems) ? this.filteredItems.length : 0
    }
  },
  mounted() {
    // Ensure data is properly initialized
    if (!Array.isArray(this.items)) {
      this.items = []
    }
  },
  methods: {
    getStatusClass(status) {
      const statusClasses = {
        Active: 'bg-success',
        Inactive: 'bg-danger',
        Pending: 'bg-warning text-dark'
      }
      return statusClasses[status] || 'bg-secondary'
    },
    editItem(item) {
      // Handle edit action
      alert(`Edit item: ${item.name}`)
    },
    deleteItem(item) {
      // Handle delete action
      if (confirm(`Are you sure you want to delete ${item.name}?`)) {
        const index = this.items.findIndex(i => i.id === item.id)
        if (index > -1) {
          this.items.splice(index, 1)
          // Reset to first page if current page is now empty
          if (this.paginatedItems.length === 0 && this.currentPage > 1) {
            this.currentPage = 1
          }
        }
      }
    }
  }
}
</script>

<style scoped>
/* Custom table styling */
.table-controls {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #dee2e6;
}

/* Avatar styling */
.avatar-sm {
  width: 32px;
  height: 32px;
}

.avatar-title {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
}

/* Form check group styling */
.form-check-group {
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 0.375rem;
  border: 1px solid #e9ecef;
}

/* Status badge custom styling */
.badge {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
}

/* Action buttons */
.btn-group-sm .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

/* Custom pagination styling */
.pagination-sm .page-link {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

/* Responsive table adjustments */
@media (max-width: 768px) {
  .table-controls .d-flex {
    flex-direction: column;
    gap: 1rem;
  }

  .table-controls .justify-content-end {
    justify-content: start !important;
  }

  .btn-group {
    flex-direction: column;
  }

  .btn-group .btn {
    border-radius: 0.375rem !important;
    margin-bottom: 0.25rem;
  }
}

/* Table row hover effect enhancement */
:deep(.table-hover tbody tr:hover) {
  background-color: rgba(0, 123, 255, 0.1);
  transition: background-color 0.15s ease-in-out;
}

/* Custom sorting icons */
:deep(.table th.sortable) {
  cursor: pointer;
  user-select: none;
}

:deep(.table th.sortable:hover) {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Enhanced border styling */
.table-bordered {
  border: 2px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

/* Dark theme enhancements */
:deep(.table-dark) {
  --bs-table-bg: #212529;
  --bs-table-striped-bg: #2c3034;
  --bs-table-hover-bg: #323539;
}
</style>
