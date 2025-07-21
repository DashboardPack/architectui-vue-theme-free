<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Sizing" class="main-card mb-3">
          <!-- Medium size pagination -->
          <h6 class="mb-2">Default Size</h6>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="center"
            aria-label="Medium pagination"
            class="mb-3"
          ></b-pagination>

          <!-- Small size pagination -->
          <h6 class="mb-2">Small Size</h6>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            size="sm"
            align="center"
            aria-label="Small pagination"
            class="mb-3"
          ></b-pagination>

          <!-- Large size pagination -->
          <h6 class="mb-2">Large Size</h6>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            size="lg"
            align="center"
            aria-label="Large pagination"
            class="mb-3"
          ></b-pagination>

          <div class="text-center">Current Page: {{ currentPage }}</div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Navigation" class="main-card mb-3">
          <h6 class="mb-2">Default Navigation</h6>
          <b-pagination
            v-model="navCurrentPage"
            :total-rows="navTotalRows"
            :per-page="navPerPage"
            align="center"
            aria-label="Default navigation"
            class="mb-3"
          ></b-pagination>

          <h6 class="mb-2">With Link Generator Function</h6>
          <b-pagination
            v-model="navCurrentPage"
            :total-rows="navTotalRows"
            :per-page="navPerPage"
            align="center"
            :link-gen="linkGen"
            aria-label="Custom navigation"
            class="mb-3"
          ></b-pagination>

          <div class="text-center">Current Page: {{ navCurrentPage }}</div>
        </b-card>
      </b-col>
    </b-row>
    <b-card title="Alignments" class="main-card mb-3">
      <h6 class="mb-2">Left Alignment (default)</h6>
      <b-pagination
        v-model="alignCurrentPage"
        :total-rows="alignTotalRows"
        :per-page="alignPerPage"
        align="left"
        aria-label="Left aligned pagination"
        class="mb-3"
      ></b-pagination>

      <h6 class="mb-2">Center Alignment</h6>
      <b-pagination
        v-model="alignCurrentPage"
        :total-rows="alignTotalRows"
        :per-page="alignPerPage"
        align="center"
        aria-label="Center aligned pagination"
        class="mb-3"
      ></b-pagination>

      <h6 class="mb-2">Right (end) Alignment</h6>
      <b-pagination
        v-model="alignCurrentPage"
        :total-rows="alignTotalRows"
        :per-page="alignPerPage"
        align="right"
        aria-label="Right aligned pagination"
        class="mb-3"
      ></b-pagination>

      <div class="text-center">Current Page: {{ alignCurrentPage }}</div>
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
      subheading: 'Basic and dynamic pagination for use in your next awesome application.',
      icon: 'pe-7s-notebook icon-gradient bg-mixed-hopes',

      // Sizing pagination
      currentPage: 3,
      totalRows: 100,
      perPage: 10,

      // Navigation pagination
      navCurrentPage: 3,
      navTotalRows: 100,
      navPerPage: 10,

      // Alignment pagination
      alignCurrentPage: 3,
      alignTotalRows: 100,
      alignPerPage: 10
    }
  },
  methods: {
    // Link generator function for demonstration
    linkGen(pageNum) {
      return '#page/' + pageNum + '/foobar'
    }
  }
}
</script>
