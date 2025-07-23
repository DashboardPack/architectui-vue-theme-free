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
              <div class="progress" style="height: 1rem">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                  role="progressbar"
                  :style="{ width: basicValue + '%' }"
                  :aria-valuenow="basicValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ basicValue }}%
                </div>
              </div>
              <small class="text-muted">{{ basicValue }}% Complete</small>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Stacked Progress Bar</h6>
              <div class="progress" style="height: 1rem">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  :style="{ width: Math.round(stackedValue * 0.6) + '%' }"
                  :aria-valuenow="Math.round(stackedValue * 0.6)"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ Math.round(stackedValue * 0.6) }}%
                </div>
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  :style="{ width: Math.round(stackedValue * 0.25) + '%' }"
                  :aria-valuenow="Math.round(stackedValue * 0.25)"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ Math.round(stackedValue * 0.25) }}%
                </div>
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  :style="{ width: Math.round(stackedValue * 0.15) + '%' }"
                  :aria-valuenow="Math.round(stackedValue * 0.15)"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ Math.round(stackedValue * 0.15) }}%
                </div>
              </div>
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
              <div class="progress" style="height: 1rem">
                <div
                  :class="`progress-bar progress-bar-striped progress-bar-animated bg-${bar.variant}`"
                  role="progressbar"
                  :style="{ width: bar.value + '%' }"
                  :aria-valuenow="bar.value"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ bar.value }}%
                </div>
              </div>
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
              <div class="progress mb-2" style="height: 1rem">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  :style="{ width: sizeValue + '%' }"
                  :aria-valuenow="sizeValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ sizeValue }}%
                </div>
              </div>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Large (2rem)</h6>
              <div class="progress mb-2" style="height: 2rem">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  :style="{ width: sizeValue + '%' }"
                  :aria-valuenow="sizeValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ sizeValue }}%
                </div>
              </div>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Small (20px)</h6>
              <div class="progress mb-2" style="height: 20px">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  :style="{ width: sizeValue + '%' }"
                  :aria-valuenow="sizeValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ sizeValue }}%
                </div>
              </div>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Thin (4px)</h6>
              <div class="progress" style="height: 4px">
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  :style="{ width: sizeValue + '%' }"
                  :aria-valuenow="sizeValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="mb-3">
              <h6 class="mb-2">Extra Thin (2px)</h6>
              <div class="progress" style="height: 2px">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  :style="{ width: sizeValue + '%' }"
                  :aria-valuenow="sizeValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
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
              <div class="progress" style="height: 1rem">
                <div
                  :class="`progress-bar bg-${bar.variant} ${bar.striped ? 'progress-bar-striped' : ''} ${bar.animated ? 'progress-bar-animated' : ''}`"
                  role="progressbar"
                  :style="{ width: bar.value + '%' }"
                  :aria-valuenow="bar.value"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ bar.value }}%
                </div>
              </div>
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
                  <div class="progress" style="height: 1rem">
                    <div
                      :class="`progress-bar progress-bar-striped progress-bar-animated ${uploadFile.progress === 100 ? 'bg-success' : 'bg-info'}`"
                      role="progressbar"
                      :style="{ width: uploadFile.progress + '%' }"
                      :aria-valuenow="uploadFile.progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ uploadFile.progress }}%
                    </div>
                  </div>
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
                      <span class="text-muted">{{ Math.round(systemResources.cpu) }}%</span>
                    </div>
                    <div class="progress" style="height: 8px">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        :style="{ width: systemResources.cpu + '%' }"
                        :aria-valuenow="systemResources.cpu"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <span><i class="fas fa-memory text-warning me-1"></i>Memory</span>
                      <span class="text-muted">{{ Math.round(systemResources.memory) }}%</span>
                    </div>
                    <div class="progress" style="height: 8px">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        :style="{ width: systemResources.memory + '%' }"
                        :aria-valuenow="systemResources.memory"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <span><i class="fas fa-hdd text-danger me-1"></i>Disk Usage</span>
                      <span class="text-muted">{{ Math.round(systemResources.disk) }}%</span>
                    </div>
                    <div class="progress" style="height: 8px">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        :style="{ width: systemResources.disk + '%' }"
                        :aria-valuenow="systemResources.disk"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
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

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import PageTitle from '../../Layout/Components/PageTitle.vue'

// Component data
const heading = 'Progress Bar'
const subheading = 'You can use the progress bars on their own or in combination with other widgets.'
const icon = 'pe-7s-filter icon-gradient bg-grow-early'

// Progress values
const basicValue = ref(45)
const stackedValue = ref(80)
const sizeValue = ref(65)

// Color variant bars
const colorBars = reactive([
  { variant: 'success', value: 75 },
  { variant: 'info', value: 60 },
  { variant: 'warning', value: 45 },
  { variant: 'danger', value: 30 },
  { variant: 'primary', value: 85 },
  { variant: 'secondary', value: 50 }
])

// Striped/animated bars
const stripedBars = reactive([
  { variant: 'success', value: 25, striped: true, animated: true },
  { variant: 'info', value: 50, striped: true, animated: true },
  { variant: 'warning', value: 75, striped: true, animated: true },
  { variant: 'danger', value: 100, striped: true, animated: true }
])

// Upload simulation
const uploadFile = reactive({
  name: 'document.pdf',
  progress: 0,
  uploading: false
})

// System resources
const systemResources = reactive({
  cpu: 45,
  memory: 68,
  disk: 32
})

// Timer references
let colorTimer = null
let resourceTimer = null
let uploadTimer = null

// Toggle states
const allStriped = ref(true)
const allAnimated = ref(true)

// Methods
const randomizeBasic = () => {
  basicValue.value = Math.floor(Math.random() * 100)
  stackedValue.value = Math.floor(Math.random() * 100)
}

const resetProgress = () => {
  basicValue.value = 45
  stackedValue.value = 80
}

const randomizeSizes = () => {
  sizeValue.value = Math.floor(Math.random() * 100)
}

const animateColors = () => {
  if (colorTimer) clearInterval(colorTimer)

  colorTimer = setInterval(() => {
    colorBars.forEach(bar => {
      bar.value = Math.floor(Math.random() * 100)
    })
  }, 500)

  // Stop animation after 5 seconds
  setTimeout(() => {
    if (colorTimer) {
      clearInterval(colorTimer)
      colorTimer = null
    }
  }, 5000)
}

const toggleStriped = () => {
  allStriped.value = !allStriped.value
  stripedBars.forEach(bar => {
    bar.striped = allStriped.value
  })
}

const toggleAnimated = () => {
  allAnimated.value = !allAnimated.value
  stripedBars.forEach(bar => {
    bar.animated = allAnimated.value
  })
}

const simulateUpload = () => {
  if (uploadFile.uploading) return

  uploadFile.uploading = true
  uploadFile.progress = 0

  uploadTimer = setInterval(() => {
    uploadFile.progress += Math.floor(Math.random() * 10) + 1

    if (uploadFile.progress >= 100) {
      uploadFile.progress = 100
      uploadFile.uploading = false
      clearInterval(uploadTimer)
    }
  }, 200)
}

const resetUpload = () => {
  if (uploadTimer) clearInterval(uploadTimer)
  uploadFile.progress = 0
  uploadFile.uploading = false
}

const startResourceMonitoring = () => {
  resourceTimer = setInterval(() => {
    // Simulate realistic resource usage changes
    systemResources.cpu = Math.max(10, Math.min(95, systemResources.cpu + (Math.random() - 0.5) * 20))
    systemResources.memory = Math.max(20, Math.min(90, systemResources.memory + (Math.random() - 0.5) * 15))
    systemResources.disk = Math.max(15, Math.min(85, systemResources.disk + (Math.random() - 0.5) * 5))
  }, 2000)
}

// Lifecycle hooks
onMounted(() => {
  startResourceMonitoring()
})

onUnmounted(() => {
  if (colorTimer) clearInterval(colorTimer)
  if (resourceTimer) clearInterval(resourceTimer)
  if (uploadTimer) clearInterval(uploadTimer)
})
</script>

<style scoped>
/* Bootstrap 5 Progress Bar Styling - Guaranteed Visibility */
.progress {
  position: relative;
  display: flex;
  height: 1rem;
  overflow: hidden;
  background-color: #e9ecef;
  border-radius: 0.375rem;
}

.progress .progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
  font-size: 0.75rem;
  line-height: 1;
}

/* Ensure Bootstrap 5 variant colors are properly applied */
.progress-bar.bg-primary {
  background-color: #0d6efd !important;
}

.progress-bar.bg-secondary {
  background-color: #6c757d !important;
}

.progress-bar.bg-success {
  background-color: #198754 !important;
}

.progress-bar.bg-danger {
  background-color: #dc3545 !important;
}

.progress-bar.bg-warning {
  background-color: #ffc107 !important;
  color: #000 !important; /* Dark text for yellow background */
}

.progress-bar.bg-info {
  background-color: #0dcaf0 !important;
  color: #000 !important; /* Dark text for cyan background */
}

/* Striped progress bars */
.progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}

/* Animated striped progress bars */
.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

/* Ensure progress bars are always visible when they have a value */
.progress .progress-bar {
  min-width: 0;
}

.progress .progress-bar[aria-valuenow]:not([aria-valuenow='0']) {
  min-width: 0.25rem; /* Minimum visibility for non-zero values */
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
