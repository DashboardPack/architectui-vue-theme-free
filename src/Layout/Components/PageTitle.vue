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
        <button type="button" class="btn-shadow me-3 btn btn-dark">
          <font-awesome-icon icon="star" />
        </button>
        <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
          <font-awesome-icon icon="plus" class="me-2" />
          Create New
        </button>
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
