<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <b-row>
      <b-col md="6">
        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-chart-bars icon-gradient bg-love-kiss"></i>
              Basic Progress Bars
            </div>
          </b-card-header>
          <b-card-body>
            <div class="mb-3">
              <h6 class="mb-2">Standard Progress Bar</h6>
              <b-progress :value="basicValue" :max="100" show-progress animated></b-progress>
              <small class="text-muted">{{ basicValue }}% Complete</small>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Stacked Progress Bar</h6>
              <b-progress :max="100" show-value>
                <b-progress-bar :value="stackedValue * 0.6" variant="success"></b-progress-bar>
                <b-progress-bar :value="stackedValue * 0.25" variant="warning"></b-progress-bar>
                <b-progress-bar :value="stackedValue * 0.15" variant="danger"></b-progress-bar>
              </b-progress>
              <small class="text-muted"
                >Success: {{ Math.round(stackedValue * 0.6) }}%, Warning: {{ Math.round(stackedValue * 0.25) }}%,
                Danger: {{ Math.round(stackedValue * 0.15) }}%</small
              >
            </div>

            <div class="text-center">
              <b-button variant="primary" @click="randomizeBasic" class="me-2">
                <i class="fas fa-random me-1"></i>
                Randomize
              </b-button>
              <b-button variant="success" @click="resetProgress">
                <i class="fas fa-undo me-1"></i>
                Reset
              </b-button>
            </div>
          </b-card-body>
        </b-card>

        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-layers icon-gradient bg-amy-crisp"></i>
              Color Variants
            </div>
          </b-card-header>
          <b-card-body>
            <div v-for="bar in colorBars" :key="bar.variant" class="mb-3">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-capitalize fw-medium">{{ bar.variant }}</span>
                <span class="badge bg-light text-dark">{{ bar.value }}%</span>
              </div>
              <b-progress :value="bar.value" :variant="bar.variant" animated></b-progress>
            </div>

            <div class="text-center mt-3">
              <b-button variant="outline-primary" @click="animateColors">
                <i class="fas fa-play me-1"></i>
                Animate Colors
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-layers icon-gradient bg-happy-fisher"></i>
              Sizes & Styles
            </div>
          </b-card-header>
          <b-card-body>
            <div class="mb-3">
              <h6 class="mb-2">Default Size</h6>
              <b-progress :value="sizeValue" show-progress class="mb-2"></b-progress>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Large (2rem)</h6>
              <b-progress height="2rem" :value="sizeValue" show-progress class="mb-2"></b-progress>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Small (20px)</h6>
              <b-progress height="20px" :value="sizeValue" show-progress class="mb-2"></b-progress>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Thin (4px)</h6>
              <b-progress height="4px" :value="sizeValue" variant="info"></b-progress>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Extra Thin (2px)</h6>
              <b-progress height="2px" :value="sizeValue" variant="success"></b-progress>
            </div>

            <div class="text-center">
              <b-button variant="info" @click="randomizeSizes">
                <i class="fas fa-arrows-alt me-1"></i>
                Change Value
              </b-button>
            </div>
          </b-card-body>
        </b-card>

        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-layers icon-gradient bg-plum-plate"></i>
              Striped & Animated
            </div>
          </b-card-header>
          <b-card-body>
            <div v-for="(bar, index) in stripedBars" :key="index" class="mb-3">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-capitalize fw-medium">{{ bar.variant }} {{ bar.striped ? '(Striped)' : '' }}</span>
                <span class="badge bg-light text-dark">{{ bar.value }}%</span>
              </div>
              <b-progress :value="bar.value" :variant="bar.variant" :striped="bar.striped" :animated="bar.animated">
              </b-progress>
            </div>

            <div class="text-center mt-3">
              <b-button :variant="allStriped ? 'outline-warning' : 'warning'" @click="toggleStriped" class="me-2">
                <i :class="allStriped ? 'fas fa-eye-slash' : 'fas fa-eye'" class="me-1"></i>
                {{ allStriped ? 'Remove' : 'Add' }} Stripes
              </b-button>
              <b-button :variant="allAnimated ? 'outline-success' : 'success'" @click="toggleAnimated">
                <i :class="allAnimated ? 'fas fa-pause' : 'fas fa-play'" class="me-1"></i>
                {{ allAnimated ? 'Stop' : 'Start' }} Animation
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="12">
        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-chart-bars icon-gradient bg-strong-bliss"></i>
              Live Demo & Usage Examples
            </div>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-col md="6">
                <div class="mb-4">
                  <h6 class="mb-3">File Upload Simulation</h6>
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span>{{ uploadFile.name }}</span>
                    <span class="text-muted">{{ uploadFile.progress }}%</span>
                  </div>
                  <b-progress
                    :value="uploadFile.progress"
                    :variant="uploadFile.progress === 100 ? 'success' : 'info'"
                    animated
                    striped
                  >
                  </b-progress>
                  <div class="mt-2">
                    <b-button variant="primary" size="sm" @click="simulateUpload" :disabled="uploadFile.uploading">
                      <i :class="uploadFile.uploading ? 'fas fa-spinner fa-spin' : 'fas fa-upload'" class="me-1"></i>
                      {{ uploadFile.uploading ? 'Uploading...' : 'Start Upload' }}
                    </b-button>
                    <b-button variant="outline-secondary" size="sm" @click="resetUpload" class="ms-2">
                      <i class="fas fa-redo me-1"></i>
                      Reset
                    </b-button>
                  </div>
                </div>
              </b-col>

              <b-col md="6">
                <div class="mb-4">
                  <h6 class="mb-3">System Resources</h6>

                  <div class="mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <span><i class="fas fa-microchip text-info me-1"></i>CPU Usage</span>
                      <span class="text-muted">{{ systemResources.cpu }}%</span>
                    </div>
                    <b-progress :value="systemResources.cpu" variant="info" height="8px"></b-progress>
                  </div>

                  <div class="mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <span><i class="fas fa-memory text-warning me-1"></i>Memory</span>
                      <span class="text-muted">{{ systemResources.memory }}%</span>
                    </div>
                    <b-progress :value="systemResources.memory" variant="warning" height="8px"></b-progress>
                  </div>

                  <div class="mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <span><i class="fas fa-hdd text-danger me-1"></i>Disk Usage</span>
                      <span class="text-muted">{{ systemResources.disk }}%</span>
                    </div>
                    <b-progress :value="systemResources.disk" variant="danger" height="8px"></b-progress>
                  </div>
                </div>
              </b-col>
            </b-row>

            <div class="alert alert-info mt-3">
              <h6 class="mb-2">💡 Progress Bar Features:</h6>
              <ul class="mb-0">
                <li><strong>Variants:</strong> primary, secondary, success, info, warning, danger, dark</li>
                <li><strong>Sizes:</strong> Custom height with <code>height</code> prop</li>
                <li><strong>Animations:</strong> <code>animated</code> and <code>striped</code> props</li>
                <li><strong>Stacked:</strong> Multiple progress bars in one container</li>
                <li><strong>Labels:</strong> <code>show-progress</code> and <code>show-value</code> props</li>
              </ul>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'ProgressBar',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Progress Bar',
      subheading: 'You can use the progress bars on their own or in combination with other widgets.',
      icon: 'pe-7s-filter icon-gradient bg-grow-early',

      basicValue: 45,
      stackedValue: 80,
      sizeValue: 65,

      colorBars: [
        { variant: 'success', value: 75 },
        { variant: 'info', value: 60 },
        { variant: 'warning', value: 45 },
        { variant: 'danger', value: 30 },
        { variant: 'primary', value: 85 },
        { variant: 'secondary', value: 50 }
      ],

      stripedBars: [
        { variant: 'success', value: 25, striped: true, animated: true },
        { variant: 'info', value: 50, striped: true, animated: true },
        { variant: 'warning', value: 75, striped: true, animated: true },
        { variant: 'danger', value: 100, striped: true, animated: true }
      ],

      uploadFile: {
        name: 'document.pdf',
        progress: 0,
        uploading: false
      },

      systemResources: {
        cpu: 45,
        memory: 68,
        disk: 32
      },

      colorTimer: null,
      resourceTimer: null,
      uploadTimer: null,

      allStriped: true,
      allAnimated: true
    }
  },

  mounted() {
    // Start system resource monitoring
    this.startResourceMonitoring()
  },

  beforeUnmount() {
    // Clear all timers
    if (this.colorTimer) clearInterval(this.colorTimer)
    if (this.resourceTimer) clearInterval(this.resourceTimer)
    if (this.uploadTimer) clearInterval(this.uploadTimer)
  },

  methods: {
    randomizeBasic() {
      this.basicValue = Math.floor(Math.random() * 100)
      this.stackedValue = Math.floor(Math.random() * 100)
    },

    resetProgress() {
      this.basicValue = 45
      this.stackedValue = 80
    },

    randomizeSizes() {
      this.sizeValue = Math.floor(Math.random() * 100)
    },

    animateColors() {
      if (this.colorTimer) clearInterval(this.colorTimer)

      this.colorTimer = setInterval(() => {
        this.colorBars.forEach(bar => {
          bar.value = Math.floor(Math.random() * 100)
        })
      }, 500)

      // Stop animation after 5 seconds
      setTimeout(() => {
        if (this.colorTimer) {
          clearInterval(this.colorTimer)
          this.colorTimer = null
        }
      }, 5000)
    },

    toggleStriped() {
      this.allStriped = !this.allStriped
      this.stripedBars.forEach(bar => {
        bar.striped = this.allStriped
      })
    },

    toggleAnimated() {
      this.allAnimated = !this.allAnimated
      this.stripedBars.forEach(bar => {
        bar.animated = this.allAnimated
      })
    },

    simulateUpload() {
      if (this.uploadFile.uploading) return

      this.uploadFile.uploading = true
      this.uploadFile.progress = 0

      this.uploadTimer = setInterval(() => {
        this.uploadFile.progress += Math.floor(Math.random() * 10) + 1

        if (this.uploadFile.progress >= 100) {
          this.uploadFile.progress = 100
          this.uploadFile.uploading = false
          clearInterval(this.uploadTimer)
        }
      }, 200)
    },

    resetUpload() {
      if (this.uploadTimer) clearInterval(this.uploadTimer)
      this.uploadFile.progress = 0
      this.uploadFile.uploading = false
    },

    startResourceMonitoring() {
      this.resourceTimer = setInterval(() => {
        // Simulate realistic resource usage changes
        this.systemResources.cpu = Math.max(10, Math.min(95, this.systemResources.cpu + (Math.random() - 0.5) * 20))
        this.systemResources.memory = Math.max(
          20,
          Math.min(90, this.systemResources.memory + (Math.random() - 0.5) * 15)
        )
        this.systemResources.disk = Math.max(15, Math.min(85, this.systemResources.disk + (Math.random() - 0.5) * 5))
      }, 2000)
    }
  }
}
</script>

<style scoped>
/* Custom progress bar styling */
.progress {
  border-radius: 0.375rem;
  overflow: hidden;
}

/* Badge styling */
.badge {
  font-size: 0.75rem;
  font-weight: 500;
}

/* Button spacing */
.btn + .btn {
  margin-left: 0.5rem;
}

/* Alert list styling */
.alert ul {
  padding-left: 1.25rem;
  margin-bottom: 0;
}

.alert li {
  margin-bottom: 0.25rem;
}

/* Code styling */
code {
  background-color: #f8f9fa;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: #e83e8c;
}

/* Icon spacing */
.fas {
  width: 1em;
  text-align: center;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .btn {
    margin-bottom: 0.5rem;
  }

  .d-flex .btn {
    margin-left: 0;
    margin-right: 0.5rem;
  }
}
</style>
