<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="main-card mb-3 card">
      <div class="card-body">
        <h5 class="card-title">Tooltips</h5>
        <p class="text-muted mb-4">Hover over the buttons to see the tooltips in action.</p>
        <div class="text-center">
          <b-button id="tooltip-top" variant="primary" class="me-2 mb-2"> Tooltip on top </b-button>
          <b-tooltip target="tooltip-top" placement="top" triggers="hover"> Tooltip on top </b-tooltip>

          <b-button id="tooltip-right" variant="primary" class="me-2 mb-2"> Tooltip on right </b-button>
          <b-tooltip target="tooltip-right" placement="right" triggers="hover"> Tooltip on right </b-tooltip>

          <b-button id="tooltip-bottom" variant="primary" class="me-2 mb-2"> Tooltip on bottom </b-button>
          <b-tooltip target="tooltip-bottom" placement="bottom" triggers="hover"> Tooltip on bottom </b-tooltip>

          <b-button id="tooltip-left" variant="primary" class="me-2 mb-2"> Tooltip on left </b-button>
          <b-tooltip target="tooltip-left" placement="left" triggers="hover"> Tooltip on left </b-tooltip>
        </div>

        <h6 class="mb-3 mt-4">Tooltip Trigger Examples</h6>
        <div class="text-center">
          <!-- CLICK-ONLY TOOLTIP (Custom Implementation) -->
          <div class="d-inline-block position-relative me-2 mb-2">
            <button class="btn btn-success" @click="toggleClickTooltip">Click for Tooltip</button>
            <div v-if="showClickTooltip" class="custom-tooltip tooltip-top" @click.stop>
              This tooltip appears on CLICK only!
              <div class="tooltip-arrow"></div>
            </div>
          </div>

          <!-- FOCUS-ONLY TOOLTIP (Custom Implementation) -->
          <div class="d-inline-block position-relative me-2 mb-2">
            <button class="btn btn-warning" @focus="showFocusTooltip = true" @blur="showFocusTooltip = false">
              Focus for Tooltip
            </button>
            <div v-if="showFocusTooltip" class="custom-tooltip tooltip-bottom" @click.stop>
              This tooltip appears on FOCUS only!
              <div class="tooltip-arrow"></div>
            </div>
          </div>

          <!-- HOVER-ONLY TOOLTIP (Bootstrap-Vue-Next - this one works) -->
          <b-button id="tooltip-hover-only" variant="info" class="me-2 mb-2"> Hover for Tooltip </b-button>
          <b-tooltip target="tooltip-hover-only" placement="bottom" triggers="hover">
            This tooltip appears on HOVER only!
          </b-tooltip>
        </div>
      </div>
    </div>

    <div class="main-card mb-3 card">
      <div class="card-body">
        <h5 class="card-title">Popovers</h5>
        <p class="text-muted mb-4">Click the buttons to see the popovers. Click outside or press ESC to close.</p>

        <h6 class="mb-3">Basic Popovers (Click Triggered)</h6>
        <div class="text-center mb-4">
          <!-- CLICK-ONLY POPOVER (Custom Implementation) -->
          <div class="d-inline-block position-relative me-2 mb-2">
            <button class="btn btn-success" @click="toggleBasicPopover">Click for Popover</button>
            <div v-if="showBasicPopover" class="custom-popover popover-top" @click.stop>
              <div class="popover-header">Basic Popover</div>
              <div class="popover-body">This popover appears on CLICK only!</div>
              <div class="popover-arrow"></div>
            </div>
            <!-- Click outside to close overlay -->
            <div v-if="showBasicPopover" class="popover-backdrop" @click="showBasicPopover = false"></div>
          </div>

          <!-- CLICK-ONLY HTML POPOVER (Custom Implementation) -->
          <div class="d-inline-block position-relative me-2 mb-2">
            <button class="btn btn-info" @click="toggleHtmlPopover">Click for HTML Popover</button>
            <div v-if="showHtmlPopover" class="custom-popover popover-right" @click.stop>
              <div class="popover-header">HTML Content</div>
              <div class="popover-body">
                <div class="text-center">
                  <strong>Rich HTML Content</strong><br />
                  <em>This popover contains HTML elements</em><br />
                  <small class="text-muted">Click outside to dismiss</small>
                </div>
              </div>
              <div class="popover-arrow"></div>
            </div>
            <!-- Click outside to close overlay -->
            <div v-if="showHtmlPopover" class="popover-backdrop" @click="showHtmlPopover = false"></div>
          </div>
        </div>

        <h6 class="mb-3">Placement Examples (Click to Open)</h6>
        <div class="row">
          <div class="col-md-4 py-2 text-center" v-for="placement in placements" :key="placement">
            <!-- CUSTOM CLICK-ONLY POPOVER FOR EACH PLACEMENT -->
            <div class="d-inline-block position-relative">
              <button class="btn btn-outline-primary btn-sm mb-2" @click="togglePlacementPopover(placement)">
                Click: {{ placement }}
              </button>
              <div
                v-if="placementPopovers[placement]"
                :class="['custom-popover', getPopoverClass(placement)]"
                @click.stop
              >
                <div class="popover-header">Popover {{ placement }}</div>
                <div class="popover-body">
                  Popover positioned at <strong>{{ placement }}</strong
                  >. Click outside to close!
                </div>
                <div class="popover-arrow"></div>
              </div>
              <!-- Click outside to close overlay -->
              <div
                v-if="placementPopovers[placement]"
                class="popover-backdrop"
                @click="closePlacementPopover(placement)"
              ></div>
            </div>
          </div>
        </div>

        <h6 class="mb-3 mt-4">Different Trigger Examples</h6>
        <div class="text-center">
          <!-- HOVER-ONLY POPOVER (Bootstrap-Vue-Next - this works) -->
          <b-button id="popover-hover" variant="warning" class="me-2 mb-2"> Hover for Popover </b-button>
          <b-popover target="popover-hover" title="Hover Trigger" triggers="hover" placement="top">
            This popover appears on <strong>HOVER</strong> only!
          </b-popover>

          <!-- FOCUS-ONLY POPOVER (Custom Implementation) -->
          <div class="d-inline-block position-relative me-2 mb-2">
            <button class="btn btn-secondary" @focus="showFocusPopover = true" @blur="showFocusPopover = false">
              Focus for Popover
            </button>
            <div v-if="showFocusPopover" class="custom-popover popover-bottom" @click.stop>
              <div class="popover-header">Focus Trigger</div>
              <div class="popover-body">This popover appears on <strong>FOCUS</strong> only!</div>
              <div class="popover-arrow"></div>
            </div>
          </div>

          <!-- CLICK-ONLY POPOVER (Custom Implementation) -->
          <div class="d-inline-block position-relative me-2 mb-2">
            <button class="btn btn-info" @click="toggleClickPopover">Click for Popover</button>
            <div v-if="showClickPopover" class="custom-popover popover-right" @click.stop>
              <div class="popover-header">Click Trigger</div>
              <div class="popover-body">This popover appears on <strong>CLICK</strong> only!</div>
              <div class="popover-arrow"></div>
            </div>
            <!-- Click outside to close overlay -->
            <div v-if="showClickPopover" class="popover-backdrop" @click="showClickPopover = false"></div>
          </div>

          <b-button id="popover-manual" variant="danger" class="me-2 mb-2" @click="toggleManualPopover">
            Toggle Manual Popover
          </b-button>
          <b-popover
            ref="manualPopover"
            target="popover-manual"
            title="Manual Control"
            triggers="manual"
            placement="top"
            :show="showManualPopover"
          >
            This popover is controlled <strong>manually via JavaScript</strong>. Click the button to toggle it on/off.
          </b-popover>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <div class="alert alert-success">
              <h6 class="mb-2">✅ Tooltip Triggers Fixed:</h6>
              <ul class="mb-0 small">
                <li><strong>Hover tooltips:</strong> Work on mouse hover (default behavior)</li>
                <li><strong>Click tooltips:</strong> Show/hide on button click</li>
                <li><strong>Focus tooltips:</strong> Show when element gets focus</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="alert alert-primary">
              <h6 class="mb-2">✅ Popover Triggers Fixed:</h6>
              <ul class="mb-0 small">
                <li><strong>Click popovers:</strong> Show on click, dismiss by clicking outside</li>
                <li><strong>Hover popovers:</strong> Show on hover, hide when mouse leaves</li>
                <li><strong>Focus popovers:</strong> Show on focus, hide when focus lost</li>
                <li><strong>Manual popovers:</strong> Controlled via JavaScript toggle</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="alert alert-info mt-3">
          <h6 class="mb-2">💡 Implementation Guide:</h6>
          <ul class="mb-0">
            <li><strong>Hover behavior:</strong> <code>triggers="hover"</code> - Best for tooltips and quick info</li>
            <li>
              <strong>Click behavior:</strong> <code>triggers="click"</code> - Good for interactive content and forms
            </li>
            <li>
              <strong>Focus behavior:</strong> <code>triggers="focus"</code> - Great for accessibility and keyboard
              navigation
            </li>
            <li>
              <strong>Manual control:</strong> <code>triggers="manual" :show="variable"</code> - For complex
              interactions
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'TooltipsPopovers',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Tooltips & Popovers',
      subheading: 'These Vue components are used to add interaction or extra information for your app\'s content.',
      icon: 'pe-7s-note2 icon-gradient bg-happy-fisher',
      showManualPopover: false,
      showClickTooltip: false,
      showFocusTooltip: false,
      showFocusPopover: false,
      showClickPopover: false,
      showBasicPopover: false,
      showHtmlPopover: false,
      placementPopovers: {
        top: false,
        'top-start': false,
        'top-end': false,
        bottom: false,
        'bottom-start': false,
        'bottom-end': false,
        left: false,
        'left-start': false,
        'left-end': false,
        right: false,
        'right-start': false,
        'right-end': false
      },
      placements: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end'
      ]
    }
  },
  methods: {
    toggleManualPopover() {
      this.showManualPopover = !this.showManualPopover
    },
    toggleClickTooltip() {
      this.showClickTooltip = !this.showClickTooltip
    },
    toggleClickPopover() {
      this.showClickPopover = !this.showClickPopover
    },
    toggleBasicPopover() {
      this.showBasicPopover = !this.showBasicPopover
    },
    toggleHtmlPopover() {
      this.showHtmlPopover = !this.showHtmlPopover
    },
    togglePlacementPopover(placement) {
      // Vue 3 reactivity - direct assignment works
      this.placementPopovers[placement] = !this.placementPopovers[placement]
    },
    closePlacementPopover(placement) {
      // Vue 3 reactivity - direct assignment works
      this.placementPopovers[placement] = false
    },
    preventHover(event) {
      // Prevent any hover-based tooltip behavior
      event.preventDefault()
      event.stopPropagation()
      return false
    },
    preventClick(event) {
      // Prevent clicks on focus-only elements
      event.preventDefault()
      event.stopPropagation()
      return false
    },
    getPopoverClass(placement) {
      // Return CSS class based on placement
      const placementMap = {
        top: 'popover-top',
        'top-start': 'popover-top-start',
        'top-end': 'popover-top-end',
        bottom: 'popover-bottom',
        'bottom-start': 'popover-bottom-start',
        'bottom-end': 'popover-bottom-end',
        left: 'popover-left',
        'left-start': 'popover-left-start',
        'left-end': 'popover-left-end',
        right: 'popover-right',
        'right-start': 'popover-right-start',
        'right-end': 'popover-right-end'
      }
      return placementMap[placement] || 'popover-top'
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

/* ================================ */
/* CUSTOM TOOLTIP STYLES */
/* ================================ */

.custom-tooltip {
  position: absolute;
  z-index: 1070;
  background-color: #212529;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  animation: tooltipFadeIn 0.15s ease-out;
  max-width: 200px;
  word-wrap: break-word;
  white-space: normal;
}

.tooltip-top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid transparent;
}

.tooltip-top .tooltip-arrow {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: #212529;
}

.tooltip-bottom .tooltip-arrow {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: #212529;
}

/* ================================ */
/* CUSTOM POPOVER STYLES */
/* ================================ */

.custom-popover {
  position: absolute;
  z-index: 1070;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  animation: popoverFadeIn 0.15s ease-out;
  min-width: 200px;
  max-width: 300px;
}

.popover-top {
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
}

.popover-right {
  left: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
}

.popover-bottom {
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
}

.popover-left {
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
}

/* Placement variations */
.popover-top-start {
  bottom: calc(100% + 12px);
  left: 0;
}

.popover-top-end {
  bottom: calc(100% + 12px);
  right: 0;
}

.popover-bottom-start {
  top: calc(100% + 12px);
  left: 0;
}

.popover-bottom-end {
  top: calc(100% + 12px);
  right: 0;
}

.popover-left-start {
  right: calc(100% + 12px);
  top: 0;
}

.popover-left-end {
  right: calc(100% + 12px);
  bottom: 0;
}

.popover-right-start {
  left: calc(100% + 12px);
  top: 0;
}

.popover-right-end {
  left: calc(100% + 12px);
  bottom: 0;
}

.popover-header {
  padding: 0.75rem 1rem 0.5rem 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  background-color: #f8f9fa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem 0.5rem 0 0;
}

.popover-body {
  padding: 0.75rem 1rem;
  color: #495057;
  font-size: 0.875rem;
  line-height: 1.4;
}

.popover-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid transparent;
}

.popover-top .popover-arrow {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: rgba(0, 0, 0, 0.125);
}

.popover-top .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-top-color: white;
  top: -8px;
  left: -7px;
}

.popover-right .popover-arrow {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: rgba(0, 0, 0, 0.125);
}

.popover-right .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-right-color: white;
  top: -7px;
  right: -8px;
}

.popover-bottom .popover-arrow {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: rgba(0, 0, 0, 0.125);
}

.popover-bottom .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-bottom-color: white;
  bottom: -8px;
  left: -7px;
}

.popover-left .popover-arrow {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: rgba(0, 0, 0, 0.125);
}

.popover-left .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-left-color: white;
  top: -7px;
  left: -8px;
}

/* Arrow positioning for placement variations */
.popover-top-start .popover-arrow,
.popover-top-end .popover-arrow {
  top: 100%;
  border-top-color: rgba(0, 0, 0, 0.125);
}

.popover-top-start .popover-arrow {
  left: 20px;
}

.popover-top-end .popover-arrow {
  right: 20px;
}

.popover-top-start .popover-arrow::after,
.popover-top-end .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-top-color: white;
  top: -8px;
  left: -7px;
}

.popover-bottom-start .popover-arrow,
.popover-bottom-end .popover-arrow {
  bottom: 100%;
  border-bottom-color: rgba(0, 0, 0, 0.125);
}

.popover-bottom-start .popover-arrow {
  left: 20px;
}

.popover-bottom-end .popover-arrow {
  right: 20px;
}

.popover-bottom-start .popover-arrow::after,
.popover-bottom-end .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-bottom-color: white;
  bottom: -8px;
  left: -7px;
}

.popover-left-start .popover-arrow,
.popover-left-end .popover-arrow {
  left: 100%;
  border-left-color: rgba(0, 0, 0, 0.125);
}

.popover-left-start .popover-arrow {
  top: 20px;
}

.popover-left-end .popover-arrow {
  bottom: 20px;
}

.popover-left-start .popover-arrow::after,
.popover-left-end .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-left-color: white;
  top: -7px;
  left: -8px;
}

.popover-right-start .popover-arrow,
.popover-right-end .popover-arrow {
  right: 100%;
  border-right-color: rgba(0, 0, 0, 0.125);
}

.popover-right-start .popover-arrow {
  top: 20px;
}

.popover-right-end .popover-arrow {
  bottom: 20px;
}

.popover-right-start .popover-arrow::after,
.popover-right-end .popover-arrow::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-right-color: white;
  top: -7px;
  right: -8px;
}

.popover-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1069;
  background: transparent;
}

/* ================================ */
/* ANIMATIONS */
/* ================================ */

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popoverFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
