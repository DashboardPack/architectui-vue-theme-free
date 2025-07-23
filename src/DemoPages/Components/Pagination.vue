<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <!-- Basic Pagination Examples -->
    <b-row>
      <b-col md="6">
        <b-card title="Pagination Sizing" class="main-card mb-3">
          <div class="mb-4">
            <h6 class="mb-2">Default Size</h6>
            <b-pagination
              v-model="basicPage"
              :total-rows="basicRows"
              :per-page="basicPerPage"
              align="center"
              class="mb-3"
            ></b-pagination>
            <p class="text-center mb-0">Page {{ basicPage }} of {{ Math.ceil(basicRows / basicPerPage) }}</p>
          </div>

          <div class="mb-4">
            <h6 class="mb-2">Small Size</h6>
            <b-pagination
              v-model="smallPage"
              :total-rows="basicRows"
              :per-page="basicPerPage"
              size="sm"
              align="center"
              class="mb-3"
            ></b-pagination>
            <p class="text-center mb-0">Page {{ smallPage }} of {{ Math.ceil(basicRows / basicPerPage) }}</p>
          </div>

          <div class="mb-0">
            <h6 class="mb-2">Large Size</h6>
            <b-pagination
              v-model="largePage"
              :total-rows="basicRows"
              :per-page="basicPerPage"
              size="lg"
              align="center"
              class="mb-3"
            ></b-pagination>
            <p class="text-center mb-0">Page {{ largePage }} of {{ Math.ceil(basicRows / basicPerPage) }}</p>
          </div>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card title="Pagination Alignment" class="main-card mb-3">
          <div class="mb-4">
            <h6 class="mb-2">Left Alignment (default)</h6>
            <b-pagination
              v-model="leftPage"
              :total-rows="alignRows"
              :per-page="alignPerPage"
              align="start"
              class="mb-3"
            ></b-pagination>
          </div>

          <div class="mb-4">
            <h6 class="mb-2">Center Alignment</h6>
            <b-pagination
              v-model="centerPage"
              :total-rows="alignRows"
              :per-page="alignPerPage"
              align="center"
              class="mb-3"
            ></b-pagination>
          </div>

          <div class="mb-0">
            <h6 class="mb-2">Right Alignment</h6>
            <b-pagination
              v-model="rightPage"
              :total-rows="alignRows"
              :per-page="alignPerPage"
              align="end"
              class="mb-3"
            ></b-pagination>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <!-- Advanced Pagination Examples -->
    <b-card title="Advanced Pagination Features" class="main-card mb-3">
      <b-row>
        <b-col md="6">
          <div class="mb-4">
            <h6 class="mb-2">Limited Page Buttons</h6>
            <b-pagination
              v-model="limitedPage"
              :total-rows="largeRows"
              :per-page="largePerPage"
              :limit="5"
              align="center"
              class="mb-3"
            ></b-pagination>
            <div class="text-center">
              <small class="text-muted">
                Showing {{ (limitedPage - 1) * largePerPage + 1 }} -
                {{ Math.min(limitedPage * largePerPage, largeRows) }} of {{ largeRows }} items
              </small>
            </div>
          </div>

          <div class="mb-4">
            <h6 class="mb-2">Hide Goto End Buttons</h6>
            <b-pagination
              v-model="noEndPage"
              :total-rows="largeRows"
              :per-page="largePerPage"
              :limit="3"
              hide-goto-end-buttons
              align="center"
              class="mb-3"
            ></b-pagination>
          </div>

          <div class="mb-0">
            <h6 class="mb-2">Hide Ellipsis</h6>
            <b-pagination
              v-model="noEllipsisPage"
              :total-rows="largeRows"
              :per-page="largePerPage"
              :limit="4"
              hide-ellipsis
              align="center"
              class="mb-3"
            ></b-pagination>
          </div>
        </b-col>

        <b-col md="6">
          <div class="mb-4">
            <h6 class="mb-2">Custom Button Content</h6>
            <b-pagination
              v-model="customPage"
              :total-rows="customRows"
              :per-page="customPerPage"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
              align="center"
              class="mb-3"
            ></b-pagination>
          </div>

          <div class="mb-4">
            <h6 class="mb-2">With Icons</h6>
            <b-pagination
              v-model="iconPage"
              :total-rows="customRows"
              :per-page="customPerPage"
              first-text="⏮"
              prev-text="⏴"
              next-text="⏵"
              last-text="⏭"
              align="center"
              class="mb-3"
            ></b-pagination>
          </div>

          <div class="mb-0">
            <h6 class="mb-2">Pills Style</h6>
            <b-pagination
              v-model="pillsPage"
              :total-rows="customRows"
              :per-page="customPerPage"
              pills
              align="center"
              class="mb-3"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <!-- Interactive Pagination with Data -->
    <b-card title="Interactive Pagination with Sample Data" class="main-card mb-3">
      <div class="mb-3">
        <b-row>
          <b-col sm="6">
            <label for="per-page-select">Items per page:</label>
            <b-form-select
              id="per-page-select"
              v-model="interactivePerPage"
              :options="perPageOptions"
              size="sm"
              class="w-auto"
            ></b-form-select>
          </b-col>
          <b-col sm="6" class="text-sm-end">
            <span class="text-muted"> Total {{ sampleData.length }} items </span>
          </b-col>
        </b-row>
      </div>

      <b-pagination
        v-model="interactivePage"
        :total-rows="sampleData.length"
        :per-page="interactivePerPage"
        align="center"
        class="mb-3"
      ></b-pagination>

      <!-- Sample data table -->
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in paginatedData" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <span
                  class="badge"
                  :class="
                    item.status === 'Active' ? 'bg-success' : item.status === 'Inactive' ? 'bg-secondary' : 'bg-warning'
                  "
                >
                  {{ item.status }}
                </span>
              </td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">
          Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ sampleData.length }} entries
        </small>
        <b-pagination
          v-model="interactivePage"
          :total-rows="sampleData.length"
          :per-page="interactivePerPage"
          size="sm"
          class="mb-0"
        ></b-pagination>
      </div>
    </b-card>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'Pagination',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Pagination',
      subheading: 'Bootstrap-Vue-Next pagination components for navigating through pages of content.',
      icon: 'pe-7s-notebook icon-gradient bg-mixed-hopes',

      // Basic pagination
      basicPage: 3,
      basicRows: 100,
      basicPerPage: 10,

      // Size variations
      smallPage: 2,
      largePage: 4,

      // Alignment examples
      leftPage: 1,
      centerPage: 2,
      rightPage: 3,
      alignRows: 80,
      alignPerPage: 10,

      // Advanced pagination
      limitedPage: 5,
      noEndPage: 7,
      noEllipsisPage: 8,
      largeRows: 500,
      largePerPage: 20,

      // Custom styling
      customPage: 1,
      iconPage: 2,
      pillsPage: 3,
      customRows: 60,
      customPerPage: 10,

      // Interactive pagination
      interactivePage: 1,
      interactivePerPage: 5,
      perPageOptions: [
        { value: 5, text: '5 per page' },
        { value: 10, text: '10 per page' },
        { value: 15, text: '15 per page' },
        { value: 20, text: '20 per page' }
      ],

      // Sample data for interactive example
      sampleData: [
        { id: 1, name: 'John Doe', status: 'Active', date: '2024-01-15' },
        { id: 2, name: 'Jane Smith', status: 'Inactive', date: '2024-01-14' },
        { id: 3, name: 'Bob Johnson', status: 'Pending', date: '2024-01-13' },
        { id: 4, name: 'Alice Brown', status: 'Active', date: '2024-01-12' },
        { id: 5, name: 'Charlie Wilson', status: 'Active', date: '2024-01-11' },
        { id: 6, name: 'Diana Miller', status: 'Inactive', date: '2024-01-10' },
        { id: 7, name: 'Edward Davis', status: 'Pending', date: '2024-01-09' },
        { id: 8, name: 'Fiona Garcia', status: 'Active', date: '2024-01-08' },
        { id: 9, name: 'George Martinez', status: 'Active', date: '2024-01-07' },
        { id: 10, name: 'Helen Rodriguez', status: 'Inactive', date: '2024-01-06' },
        { id: 11, name: 'Ian Lopez', status: 'Active', date: '2024-01-05' },
        { id: 12, name: 'Julia Hernandez', status: 'Pending', date: '2024-01-04' },
        { id: 13, name: 'Kevin Lee', status: 'Active', date: '2024-01-03' },
        { id: 14, name: 'Lisa Walker', status: 'Active', date: '2024-01-02' },
        { id: 15, name: 'Michael Hall', status: 'Inactive', date: '2024-01-01' },
        { id: 16, name: 'Nancy Allen', status: 'Active', date: '2023-12-31' },
        { id: 17, name: 'Oscar Young', status: 'Pending', date: '2023-12-30' },
        { id: 18, name: 'Paula King', status: 'Active', date: '2023-12-29' },
        { id: 19, name: 'Quinn Wright', status: 'Inactive', date: '2023-12-28' },
        { id: 20, name: 'Rachel Green', status: 'Active', date: '2023-12-27' },
        { id: 21, name: 'Steve Baker', status: 'Active', date: '2023-12-26' },
        { id: 22, name: 'Tina Adams', status: 'Pending', date: '2023-12-25' },
        { id: 23, name: 'Victor Nelson', status: 'Active', date: '2023-12-24' },
        { id: 24, name: 'Wendy Carter', status: 'Inactive', date: '2023-12-23' },
        { id: 25, name: 'Xavier Mitchell', status: 'Active', date: '2023-12-22' }
      ]
    }
  },
  computed: {
    paginatedData() {
      const start = (this.interactivePage - 1) * this.interactivePerPage
      const end = start + this.interactivePerPage
      return this.sampleData.slice(start, end)
    },
    startIndex() {
      return (this.interactivePage - 1) * this.interactivePerPage
    },
    endIndex() {
      return Math.min(this.startIndex + this.interactivePerPage, this.sampleData.length)
    }
  },
  watch: {
    interactivePerPage() {
      // Reset to page 1 when changing items per page
      this.interactivePage = 1
    }
  }
}
</script>

<style scoped>
/* Custom pagination enhancements */
.table th {
  background-color: #f8f9fa;
  font-weight: 600;
  border-top: none;
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 123, 255, 0.05);
}

.badge {
  font-size: 0.75em;
}

/* ======================================
   PAGINATION BASE AND RESPONSIVE FIXES
   ====================================== */

/* Base pagination styles with responsive behavior */
.pagination {
  margin-bottom: 0;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
}

/* Large pagination responsive fixes */
.pagination-lg {
  flex-wrap: wrap;
}

.pagination-lg .page-item .page-link {
  min-width: 48px;
  text-align: center;
}

/* Medium screens - reduce large pagination size */
@media (max-width: 992px) {
  .pagination-lg .page-item .page-link {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    min-width: 42px;
  }
}

/* Tablet screens - further reduce pagination */
@media (max-width: 768px) {
  /* Convert large pagination to default size on tablets */
  .pagination-lg .page-item .page-link {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    min-width: 38px;
  }

  /* Ensure pagination wraps and centers */
  .pagination {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  /* Stack pagination controls vertically if needed */
  .d-flex.justify-content-between {
    flex-direction: column;
    gap: 1rem;
  }

  .text-sm-end {
    text-align: left !important;
  }
}

/* Mobile screens - compact pagination */
@media (max-width: 576px) {
  /* Force all pagination to small size on mobile */
  .pagination-lg .page-item .page-link,
  .pagination .page-item .page-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    min-width: 32px;
  }

  /* Limit visible page numbers on mobile */
  .pagination {
    max-width: 100%;
    overflow-x: auto;
    justify-content: center;
    padding: 0.5rem 0;
  }

  /* Reduce card padding on mobile */
  .card-body {
    padding: 1rem 0.75rem;
  }

  /* Stack columns on mobile */
  .col-md-6 {
    margin-bottom: 1rem;
  }
}

/* Very small screens - minimal pagination */
@media (max-width: 400px) {
  .pagination .page-item .page-link {
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
    min-width: 28px;
  }
}

/* ======================================
   CONTAINER AND LAYOUT FIXES
   ====================================== */

/* Ensure cards don't overflow */
.card {
  overflow: hidden;
}

.card-body {
  overflow-x: auto;
}
</style>
