<template>
  <div class="app-page-title">
    <div class="page-title-wrapper">
      <div class="page-title-heading">
        <div class="page-title-icon">
          <i :class="icon"></i>
        </div>
        <div>
          {{ heading }}
          <div class="page-title-subheading">
            {{ subheading }}
          </div>
        </div>
      </div>
      <div class="page-title-actions">
        <b-button
          variant="dark"
          class="btn-shadow"
          style="min-width: 38px; min-height: 38px; margin-right: 0.375rem !important"
        >
          <font-awesome-icon :icon="['fas', 'star']" style="font-size: 1rem" />
        </b-button>
        <b-button
          variant="success"
          class="btn-shadow d-inline-flex align-items-center"
          style="min-height: 38px; padding: 0.375rem 0.75rem"
        >
          <font-awesome-icon :icon="['fas', 'plus']" class="me-2" style="font-size: 1rem" />
          Create New
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageTitle',
  props: {
    icon: {
      type: String,
      default: 'pe-7s-home'
    },
    heading: {
      type: String,
      default: 'Dashboard'
    },
    subheading: {
      type: String,
      default: 'Welcome to ArchitectUI'
    }
  }
})
</script>
