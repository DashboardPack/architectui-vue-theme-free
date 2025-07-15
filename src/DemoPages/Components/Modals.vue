<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

    <div class="content">
        <b-card class="main-card mb-3 text-center">
            <b-button class="me-2" @click="showModal('modal1')">Launch demo modal</b-button>
            <b-button class="me-2" @click="showModal('modallg')" variant="primary">Large modal</b-button>
            <b-button class="me-2" @click="showModal('modalsm')" variant="primary">Small modal</b-button>
        </b-card>

        <!-- Bootstrap 5 Native Modals -->
        <!-- Default Modal -->
        <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true" ref="modal1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal1Label">Bootstrap 5 Modal</h5>
                <button type="button" class="btn-close" @click="hideModal('modal1')" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p class="my-4">Hello from Bootstrap 5 modal!</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="hideModal('modal1')">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Large Modal -->
        <div class="modal fade" id="modallg" tabindex="-1" aria-labelledby="modallgLabel" aria-hidden="true" ref="modallg">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modallgLabel">Large Modal</h5>
                <button type="button" class="btn-close" @click="hideModal('modallg')" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Hello Large Modal!</p>
                <p>This is a large modal with more content space. You can add forms, tables, or any other content here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="hideModal('modallg')">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Small Modal -->
        <div class="modal fade" id="modalsm" tabindex="-1" aria-labelledby="modalsmLabel" aria-hidden="true" ref="modalsm">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalsmLabel">Small Modal</h5>
                <button type="button" class="btn-close" @click="hideModal('modalsm')" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Hello Small Modal!</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="hideModal('modalsm')">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import { Modal } from 'bootstrap';

export default {
  name: 'Modals',
  components: {
    PageTitle,
  },
  data() {
    return {
      heading: 'Modals',
      subheading: 'Wide selection of modal dialogs styles and animations available.',
      icon: 'pe-7s-phone icon-gradient bg-premium-dark',
      modalInstances: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initializeModals();
      }, 300);
    });
  },
  beforeUnmount() {
    this.destroyModals();
  },
  methods: {
    initializeModals() {
      const modalIds = ['modal1', 'modallg', 'modalsm'];
      
      modalIds.forEach(modalId => {
        const element = this.$refs[modalId];
        if (element) {
          try {
            // Remove any existing modal instance first
            const existingModal = Modal.getInstance(element);
            if (existingModal) {
              existingModal.dispose();
            }
            
            const modal = new Modal(element, {
              backdrop: true,
              keyboard: true,
              focus: true
            });
            this.modalInstances[modalId] = modal;
          } catch (error) {
            // Silently handle modal initialization errors
          }
        }
      });
    },
    destroyModals() {
      Object.values(this.modalInstances).forEach(modal => {
        if (modal) {
          modal.dispose();
        }
      });
      this.modalInstances = {};
    },
    showModal(modalId) {
      const modal = this.modalInstances[modalId];
      if (modal) {
        // Ensure body scroll is managed properly
        document.body.style.overflow = 'hidden';
        modal.show();
      }
    },
    hideModal(modalId) {
      const modal = this.modalInstances[modalId];
      if (modal) {
        modal.hide();
        // Restore body scroll
        setTimeout(() => {
          document.body.style.overflow = '';
        }, 150);
      }
    }
  }
}
</script>

<style scoped>
/* Ensure modals have proper z-index and are interactive */
:deep(.modal) {
  z-index: 1055;
}

:deep(.modal-backdrop) {
  z-index: 1050;
}

/* Ensure modal content is above backdrop */
:deep(.modal-dialog) {
  position: relative;
  z-index: 1056;
}

/* Ensure modal content is clickable */
:deep(.modal-content) {
  position: relative;
  z-index: 1;
  pointer-events: auto;
}

/* Fix any potential overlay issues */
:deep(.modal.show) {
  display: block !important;
}

:deep(.modal-backdrop.show) {
  opacity: 0.5;
}
</style>
