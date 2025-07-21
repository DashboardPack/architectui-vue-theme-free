<template>
  <div class="app-page-title">
    <div class="page-title-wrapper">
      <div class="page-title-heading">
        <div>
          {{ heading }}
          <div class="page-title-subheading">
            {{ subheading }}
          </div>
        </div>
      </div>
      <div class="page-title-actions">
        <b-button variant="dark" class="btn-shadow" style="margin-right: 0.375rem !important">
          <font-awesome-icon icon="star" />
        </b-button>
        <b-button variant="success" class="btn-shadow d-inline-flex align-items-center">
          <font-awesome-icon class="me-2" icon="plus" />
          Create New
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar, faPlus)

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    icon: String,
    heading: String,
    subheading: String
  }
}
</script>
