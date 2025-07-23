<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="content">
      <b-card class="main-card mb-3 text-center">
        <b-button class="me-2" @click="$refs.modal1.show()">Launch demo modal</b-button>
        <b-button class="me-2" @click="$refs.modallg.show()" variant="primary">Large modal</b-button>
        <b-button class="me-2" @click="$refs.modalsm.show()" variant="primary">Small modal</b-button>
      </b-card>

      <!-- BootstrapVueNext Modals -->
      <!-- Default Modal -->
      <b-modal ref="modal1" id="modal1" title="BootstrapVueNext Modal" hide-footer :z-index="1055">
        <p class="my-4">Hello from BootstrapVueNext modal!</p>
        <template #modal-footer>
          <div class="w-100">
            <div class="float-end">
              <b-button variant="secondary" size="sm" class="me-2" @click="$refs.modal1.hide()"> Close </b-button>
              <b-button variant="primary" size="sm">Save changes</b-button>
            </div>
          </div>
        </template>
      </b-modal>

      <!-- Large Modal -->
      <b-modal ref="modallg" id="modallg" title="Large Modal" hide-footer size="lg" :z-index="1055">
        <p>Hello Large Modal!</p>
        <p>This is a large modal with more content space. You can add forms, tables, or any other content here.</p>
        <template #modal-footer>
          <div class="w-100">
            <div class="float-end">
              <b-button variant="secondary" size="sm" class="me-2" @click="$refs.modallg.hide()"> Close </b-button>
              <b-button variant="primary" size="sm">Save changes</b-button>
            </div>
          </div>
        </template>
      </b-modal>

      <!-- Small Modal -->
      <b-modal ref="modalsm" id="modalsm" title="Small Modal" hide-footer size="sm" :z-index="1055">
        <p>Hello Small Modal!</p>
        <template #modal-footer>
          <div class="w-100">
            <div class="float-end">
              <b-button variant="secondary" size="sm" class="me-2" @click="$refs.modalsm.hide()"> Close </b-button>
              <b-button variant="primary" size="sm">Save</b-button>
            </div>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'Modals',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Modals',
      subheading: 'Wide selection of modal dialogs styles and animations available.',
      icon: 'pe-7s-phone icon-gradient bg-premium-dark'
    }
  }
}
</script>

<style>
/* Bootstrap 5 close button styles for BootstrapVueNext modals */
.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: 0.5;
}

.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}

.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}

.btn-close:disabled,
.btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}
</style>

<style scoped>
/* BootstrapVueNext modal styling */
.main-card {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
}

.float-end {
  float: right !important;
}
</style>
