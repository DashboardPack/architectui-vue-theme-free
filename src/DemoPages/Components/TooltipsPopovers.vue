<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    
    <div class="main-card mb-3 card">
      <div class="card-body">
        <h5 class="card-title">Tooltips</h5>
        <p class="text-muted mb-4">Hover over the buttons to see the tooltips in action.</p>
        <div class="text-center">
          <b-button 
            id="tooltip-top"
            variant="primary" 
            class="me-2 mb-2">
            Tooltip on top
          </b-button>
          <b-tooltip target="tooltip-top" placement="top">
            Tooltip on top
          </b-tooltip>
          
          <b-button 
            id="tooltip-right"
            variant="primary" 
            class="me-2 mb-2">
            Tooltip on right
          </b-button>
          <b-tooltip target="tooltip-right" placement="right">
            Tooltip on right
          </b-tooltip>
          
          <b-button 
            id="tooltip-bottom"
            variant="primary" 
            class="me-2 mb-2">
            Tooltip on bottom
          </b-button>
          <b-tooltip target="tooltip-bottom" placement="bottom">
            Tooltip on bottom
          </b-tooltip>
          
          <b-button 
            id="tooltip-left"
            variant="primary" 
            class="mb-2">
            Tooltip on left
          </b-button>
          <b-tooltip target="tooltip-left" placement="left">
            Tooltip on left
          </b-tooltip>
        </div>
      </div>
    </div>
    
    <div class="main-card mb-3 card">
      <div class="card-body">
        <h5 class="card-title">Popovers</h5>
        <p class="text-muted mb-4">Click the buttons to see the popovers. Click outside or press ESC to close.</p>
        
        <h6 class="mb-3">Basic Popovers</h6>
        <div class="text-center mb-4">
          <b-button 
            id="popover-basic"
            variant="success" 
            class="me-2 mb-2">
            Click for Popover
          </b-button>
          <b-popover 
            target="popover-basic" 
            title="Basic Popover" 
            triggers="click"
            placement="top">
            This is a basic popover with some content. You can put any HTML content here.
          </b-popover>
          
          <b-button 
            id="popover-html"
            variant="info" 
            class="me-2 mb-2">
            HTML Popover
          </b-button>
          <b-popover 
            target="popover-html" 
            title="HTML Content" 
            triggers="click"
            placement="right">
            <div class="text-center">
              <strong>Rich HTML Content</strong><br>
              <em>This popover contains HTML elements</em><br>
              <small class="text-muted">Including styled text</small>
            </div>
          </b-popover>
        </div>
        
        <h6 class="mb-3">Placement Examples</h6>
        <b-row>
          <b-col md="4" class="py-2 text-center" v-for="placement in placements" :key="placement">
            <b-button 
              :id="'popover-' + placement"
              variant="outline-primary" 
              size="sm"
              class="mb-2">
              {{ placement }}
            </b-button>
            <b-popover 
              :target="'popover-' + placement"
              :title="'Popover ' + placement"
              triggers="click"
              :placement="placement">
              Popover content for <strong>{{ placement }}</strong> placement.
            </b-popover>
          </b-col>
        </b-row>
        
        <h6 class="mb-3 mt-4">Trigger Examples</h6>
        <div class="text-center">
          <b-button 
            id="popover-hover"
            variant="warning" 
            class="me-2 mb-2">
            Hover Trigger
          </b-button>
          <b-popover 
            target="popover-hover" 
            title="Hover Trigger" 
            triggers="hover"
            placement="top">
            This popover appears on hover and disappears when you move the mouse away.
          </b-popover>
          
          <b-button 
            id="popover-focus"
            variant="secondary" 
            class="me-2 mb-2">
            Focus Trigger
          </b-button>
          <b-popover 
            target="popover-focus" 
            title="Focus Trigger" 
            triggers="focus"
            placement="bottom">
            This popover appears on focus (click or tab) and disappears when focus is lost.
          </b-popover>
          
          <b-button 
            id="popover-manual"
            variant="danger" 
            class="me-2 mb-2"
            @click="toggleManualPopover">
            Manual Trigger
          </b-button>
          <b-popover 
            ref="manualPopover"
            target="popover-manual" 
            title="Manual Control" 
            triggers="manual"
            placement="top"
            :show="showManualPopover">
            This popover is controlled manually via JavaScript. Click the button to toggle.
          </b-popover>
        </div>
        
        <div class="alert alert-info mt-4">
          <h6 class="mb-2">💡 Tips:</h6>
          <ul class="mb-0">
            <li>Popovers are dismissed by clicking outside or pressing ESC</li>
            <li>Use <code>triggers="click"</code> for click-to-show popovers</li>
            <li>Use <code>triggers="hover"</code> for hover-to-show popovers</li>
            <li>Use <code>triggers="focus"</code> for focus-to-show popovers</li>
            <li>Use <code>triggers="manual"</code> for programmatic control</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";

export default {
  name: 'TooltipsPopovers',
  components: {
    PageTitle,
  },
  data() {
    return {
      heading: 'Tooltips & Popovers',
      subheading: 'These Vue components are used to add interaction or extra information for your app\'s content.',
      icon: 'pe-7s-note2 icon-gradient bg-happy-fisher',
      showManualPopover: false,
      placements: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end'
      ]
    }
  },
  methods: {
    toggleManualPopover() {
      this.showManualPopover = !this.showManualPopover;
    }
  }
}
</script>

<style scoped>
/* Custom button spacing */
.btn {
  margin: 0.25rem;
}

/* Ensure proper spacing on mobile */
@media (max-width: 768px) {
  .text-center .btn {
    margin-bottom: 0.5rem;
  }
}

/* Alert styling */
.alert ul {
  padding-left: 1.2rem;
}

.alert li {
  margin-bottom: 0.25rem;
}

/* Code styling */
code {
  background-color: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: #e83e8c;
}
</style>