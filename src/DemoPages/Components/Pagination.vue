<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Sizing" class="main-card mb-3">
          <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10">
          </b-pagination>
          <div class="divider"></div>
          <b-pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10">
          </b-pagination>
          <div class="divider"></div>
          <b-pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10">
          </b-pagination>
          <div class="divider"></div>
          <div class="text-center">
            Current Page: {{currentPage}}
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Navigation" class="main-card mb-3">
          <h6>Default</h6>
          <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />
          <h6 class="mt-4">With link generator function</h6>
          <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" v-model="currentPage" />
          <div class="divider"></div>
          <div class="text-center">
            Current Page: {{currentPage}}
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-card title="Alignments" class="main-card mb-3">
      <h6>Left alignment (default)</h6>
      <b-pagination :total-rows="100" v-model="currentPage" :per-page="10">
      </b-pagination>
      <br>

      <h6>Center alignment</h6>
      <b-pagination align="center" :total-rows="100" v-model="currentPage" :per-page="10">
      </b-pagination>
      <br>

      <h6>Right (end) alignment</h6>
      <b-pagination align="right" :total-rows="100" v-model="currentPage" :per-page="10">
      </b-pagination>
      <div class="divider"></div>
      <div class="text-center">
        Current Page: {{currentPage}}
      </div>
    </b-card>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  export default {
    components: {
      PageTitle,
    },
    data: () => ({
      heading: 'Pagination',
      subheading: 'Basic and dynamic pagination for use in your next awesome application.',
      icon: 'pe-7s-notebook icon-gradient bg-mixed-hopes',

      currentPage: 3
    }),
    methods: {
      linkGen (pageNum) {
        return '#page/' + pageNum + '/foobar'
      }
    }
  }
</script>
