<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Sizing" class="main-card mb-3">
          <!-- Medium size pagination -->
          <nav aria-label="Medium pagination">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="page in getVisiblePages()" :key="page" class="page-item" :class="{ active: page === currentPage }">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="divider"></div>
          
          <!-- Small size pagination -->
          <nav aria-label="Small pagination">
            <ul class="pagination pagination-sm">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="page in getVisiblePages()" :key="page" class="page-item" :class="{ active: page === currentPage }">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="divider"></div>
          
          <!-- Large size pagination -->
          <nav aria-label="Large pagination">
            <ul class="pagination pagination-lg">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="page in getVisiblePages()" :key="page" class="page-item" :class="{ active: page === currentPage }">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="divider"></div>
          <div class="text-center">
            Current Page: {{currentPage}}
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Navigation" class="main-card mb-3">
          <h6>Default</h6>
          <nav aria-label="Default navigation">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: navCurrentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changeNavPage(navCurrentPage - 1)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="page in getNavVisiblePages()" :key="page" class="page-item" :class="{ active: page === navCurrentPage }">
                <a class="page-link" :href="'#page/' + page" @click.prevent="changeNavPage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: navCurrentPage === navTotalPages }">
                <a class="page-link" href="#" @click.prevent="changeNavPage(navCurrentPage + 1)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <h6 class="mt-4">With link generator function</h6>
          <nav aria-label="Custom navigation">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: navCurrentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changeNavPage(navCurrentPage - 1)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="page in getNavVisiblePages()" :key="page" class="page-item" :class="{ active: page === navCurrentPage }">
                <a class="page-link" :href="linkGen(page)" @click.prevent="changeNavPage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: navCurrentPage === navTotalPages }">
                <a class="page-link" href="#" @click.prevent="changeNavPage(navCurrentPage + 1)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="divider"></div>
          <div class="text-center">
            Current Page: {{navCurrentPage}}
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-card title="Alignments" class="main-card mb-3">
      <h6>Left alignment (default)</h6>
      <nav aria-label="Left aligned pagination">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: alignCurrentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(alignCurrentPage - 1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="page in getAlignVisiblePages()" :key="page" class="page-item" :class="{ active: page === alignCurrentPage }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: alignCurrentPage === alignTotalPages }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(alignCurrentPage + 1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <br>

      <h6>Center alignment</h6>
      <nav aria-label="Center aligned pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: alignCurrentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(alignCurrentPage - 1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="page in getAlignVisiblePages()" :key="page" class="page-item" :class="{ active: page === alignCurrentPage }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: alignCurrentPage === alignTotalPages }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(alignCurrentPage + 1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <br>

      <h6>Right (end) alignment</h6>
      <nav aria-label="Right aligned pagination">
        <ul class="pagination justify-content-end">
          <li class="page-item" :class="{ disabled: alignCurrentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(alignCurrentPage - 1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="page in getAlignVisiblePages()" :key="page" class="page-item" :class="{ active: page === alignCurrentPage }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: alignCurrentPage === alignTotalPages }">
            <a class="page-link" href="#" @click.prevent="changeAlignPage(alignCurrentPage + 1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="divider"></div>
      <div class="text-center">
        Current Page: {{alignCurrentPage}}
      </div>
    </b-card>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";

export default {
  name: 'Pagination',
  components: {
    PageTitle,
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
      navTotalPages: 10,
      
      // Alignment pagination
      alignCurrentPage: 3,
      alignTotalRows: 100,
      alignPerPage: 10
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalRows / this.perPage);
    },
    alignTotalPages() {
      return Math.ceil(this.alignTotalRows / this.alignPerPage);
    }
  },
  methods: {
    // Sizing pagination methods
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    getVisiblePages() {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];
      
      for (let i = Math.max(2, this.currentPage - delta); 
           i <= Math.min(this.totalPages - 1, this.currentPage + delta); 
           i++) {
        range.push(i);
      }

      if (this.currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (this.currentPage + delta < this.totalPages - 1) {
        rangeWithDots.push('...', this.totalPages);
      } else if (this.totalPages > 1) {
        rangeWithDots.push(this.totalPages);
      }

      return rangeWithDots.filter(page => page !== '...' || rangeWithDots.indexOf(page) !== rangeWithDots.lastIndexOf(page));
    },
    
    // Navigation pagination methods
    changeNavPage(page) {
      if (page >= 1 && page <= this.navTotalPages) {
        this.navCurrentPage = page;
      }
    },
    getNavVisiblePages() {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];
      
      for (let i = Math.max(2, this.navCurrentPage - delta); 
           i <= Math.min(this.navTotalPages - 1, this.navCurrentPage + delta); 
           i++) {
        range.push(i);
      }

      if (this.navCurrentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (this.navCurrentPage + delta < this.navTotalPages - 1) {
        rangeWithDots.push('...', this.navTotalPages);
      } else if (this.navTotalPages > 1) {
        rangeWithDots.push(this.navTotalPages);
      }

      return rangeWithDots.filter(page => page !== '...' || rangeWithDots.indexOf(page) !== rangeWithDots.lastIndexOf(page));
    },
    
    // Alignment pagination methods
    changeAlignPage(page) {
      if (page >= 1 && page <= this.alignTotalPages) {
        this.alignCurrentPage = page;
      }
    },
    getAlignVisiblePages() {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];
      
      for (let i = Math.max(2, this.alignCurrentPage - delta); 
           i <= Math.min(this.alignTotalPages - 1, this.alignCurrentPage + delta); 
           i++) {
        range.push(i);
      }

      if (this.alignCurrentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (this.alignCurrentPage + delta < this.alignTotalPages - 1) {
        rangeWithDots.push('...', this.alignTotalPages);
      } else if (this.alignTotalPages > 1) {
        rangeWithDots.push(this.alignTotalPages);
      }

      return rangeWithDots.filter(page => page !== '...' || rangeWithDots.indexOf(page) !== rangeWithDots.lastIndexOf(page));
    },
    
    // Link generator function
    linkGen(pageNum) {
      return '#page/' + pageNum + '/foobar';
    }
  }
}
</script>
