<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="content">
      <b-row>
        <b-col md="6">
          <b-card class="main-card mb-4">
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-map icon-gradient bg-love-kiss"></i>
                Live Demo Map
              </div>
            </b-card-header>
            <b-card-body>
              <div id="maps-root">
                <!-- Demo Map with OpenStreetMap -->
                <div id="demo-map" style="width: 100%; height: 400px; border-radius: 8px; position: relative"></div>

                <!-- Watermark overlay -->
                <div class="map-watermark">
                  <small class="text-muted">Demo Map - OpenStreetMap</small>
                </div>

                <!-- Google Maps Status -->
                <div v-if="!mapLoaded && !mapError" class="alert alert-info mt-3">
                  <h6>Google Maps Integration</h6>
                  <p class="mb-0">Google Maps is ready for configuration with your API key.</p>
                  <small class="text-muted">Configure your Google Maps API key in the environment variables.</small>
                </div>
                <div v-if="mapError" class="alert alert-warning mt-3">
                  <h6>Google Maps Configuration Required</h6>
                  <p class="mb-0">Please configure your Google Maps API key to enable full map functionality.</p>
                  <small class="text-muted">Add your API key to the environment configuration.</small>
                </div>
                <div v-if="mapLoaded" class="alert alert-success mt-3">
                  <h6>Google Maps Active</h6>
                  <p class="mb-0">Google Maps is successfully configured and ready to use.</p>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card class="main-card mb-4">
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-layers icon-gradient bg-amy-crisp"></i>
                Mapping Solutions
              </div>
            </b-card-header>
            <b-card-body>
              <div class="list-group list-group-flush">
                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="mb-1">OpenStreetMap + Leaflet</h6>
                    <small class="text-muted">Free, open-source mapping solution</small>
                  </div>
                  <span class="badge bg-success rounded-pill">Active</span>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="mb-1">Google Maps</h6>
                    <small class="text-muted">Commercial mapping with API key</small>
                  </div>
                  <span class="badge bg-warning rounded-pill">Config</span>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="mb-1">Interactive Features</h6>
                    <small class="text-muted">Zoom, pan, markers, and popups</small>
                  </div>
                  <span class="badge bg-primary rounded-pill">Both</span>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="mb-1">Vue 3 Compatible</h6>
                    <small class="text-muted">Works with current Vue architecture</small>
                  </div>
                  <span class="badge bg-info rounded-pill">Ready</span>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6">
          <b-card class="main-card mb-4">
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-leaf icon-gradient bg-happy-green"></i>
                OpenStreetMap + Leaflet
              </div>
            </b-card-header>
            <b-card-body>
              <div class="alert alert-success">
                <h6 class="mb-1">✅ Currently Active</h6>
                <small>This demo is using OpenStreetMap with Leaflet</small>
              </div>

              <h6 class="mb-3">Setup Steps:</h6>
              <ol class="ps-3 mb-4">
                <li>Install Leaflet: <code>npm install leaflet</code></li>
                <li>Import Leaflet in your component</li>
                <li>Initialize map and add tiles</li>
                <li>Add markers and controls</li>
              </ol>

              <h6 class="mb-3">Advantages:</h6>
              <ul class="ps-3 mb-4">
                <li>✅ Free and open-source</li>
                <li>✅ No API key required</li>
                <li>✅ Works immediately</li>
                <li>✅ Lightweight and fast</li>
                <li>✅ Large community support</li>
              </ul>

              <h6 class="mb-3">Code Example:</h6>
              <pre class="bg-light p-3 rounded small"><code>import L from 'leaflet';

// Initialize map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add marker
L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('A pretty CSS3 popup.');</code></pre>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col md="6">
          <b-card class="main-card mb-4">
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-earth icon-gradient bg-google-blue"></i>
                Google Maps
              </div>
            </b-card-header>
            <b-card-body>
              <div class="alert alert-warning">
                <h6 class="mb-1">⚙️ Configuration Required</h6>
                <small>Add your Google Maps API key to activate</small>
              </div>

              <h6 class="mb-3">Setup Steps:</h6>
              <ol class="ps-3 mb-4">
                <li>Get API key from Google Cloud Console</li>
                <li>Enable Maps JavaScript API</li>
                <li>Add key to environment variables</li>
                <li>Install: <code>npm install @googlemaps/js-api-loader</code></li>
              </ol>

              <h6 class="mb-3">Advantages:</h6>
              <ul class="ps-3 mb-4">
                <li>🚀 Advanced features (Street View, Places)</li>
                <li>🎯 High-quality satellite imagery</li>
                <li>📱 Mobile-optimized</li>
                <li>🌐 Global coverage</li>
                <li>🔧 Extensive customization</li>
              </ul>

              <h6 class="mb-3">Environment Setup:</h6>
              <pre class="bg-light p-3 rounded small"><code>// .env file
VUE_APP_GOOGLE_MAPS_API_KEY=your_api_key_here</code></pre>

              <h6 class="mb-3">Code Example:</h6>
              <pre class="bg-light p-3 rounded small"><code>import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
  version: "weekly"
});

const { Map } = await loader.importLibrary("maps");
const map = new Map(document.getElementById("map"), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8
});</code></pre>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="12">
          <b-card class="main-card mb-4">
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-chart-bars icon-gradient bg-plum-plate"></i>
                Comparison & Recommendations
              </div>
            </b-card-header>
            <b-card-body>
              <div class="table-responsive">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th class="text-center">OpenStreetMap + Leaflet</th>
                      <th class="text-center">Google Maps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cost</strong></td>
                      <td class="text-center"><span class="badge bg-success">Free</span></td>
                      <td class="text-center"><span class="badge bg-warning">Pay per use</span></td>
                    </tr>
                    <tr>
                      <td><strong>API Key Required</strong></td>
                      <td class="text-center"><span class="badge bg-success">No</span></td>
                      <td class="text-center"><span class="badge bg-warning">Yes</span></td>
                    </tr>
                    <tr>
                      <td><strong>Setup Time</strong></td>
                      <td class="text-center"><span class="badge bg-success">5 minutes</span></td>
                      <td class="text-center"><span class="badge bg-warning">30 minutes</span></td>
                    </tr>
                    <tr>
                      <td><strong>Customization</strong></td>
                      <td class="text-center"><span class="badge bg-primary">High</span></td>
                      <td class="text-center"><span class="badge bg-success">Very High</span></td>
                    </tr>
                    <tr>
                      <td><strong>Data Quality</strong></td>
                      <td class="text-center"><span class="badge bg-primary">Good</span></td>
                      <td class="text-center"><span class="badge bg-success">Excellent</span></td>
                    </tr>
                    <tr>
                      <td><strong>Performance</strong></td>
                      <td class="text-center"><span class="badge bg-success">Fast</span></td>
                      <td class="text-center"><span class="badge bg-success">Fast</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="row mt-4">
                <div class="col-md-6">
                  <div class="alert alert-info">
                    <h6 class="mb-2">🎯 Use OpenStreetMap + Leaflet when:</h6>
                    <ul class="mb-0 ps-3">
                      <li>Building prototypes or demos</li>
                      <li>Working with limited budget</li>
                      <li>Need quick implementation</li>
                      <li>Open-source requirement</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="alert alert-primary">
                    <h6 class="mb-2">🚀 Use Google Maps when:</h6>
                    <ul class="mb-0 ps-3">
                      <li>Building production applications</li>
                      <li>Need advanced features</li>
                      <li>Require high-quality satellite imagery</li>
                      <li>Global commercial project</li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'
import L from 'leaflet'

export default {
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Maps',
      subheading: 'Implement Google Maps or other mapping solutions in your applications.',
      icon: 'pe-7s-map icon-gradient bg-premium-dark',
      mapLoaded: false,
      mapError: false,
      demoMap: null,

      // Map configuration
      mapConfig: {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
        zoom: 12,
        mapTypeId: 'roadmap'
      },

      // Sample markers for demonstration
      sampleMarkers: [
        {
          position: { lat: 37.7749, lng: -122.4194 },
          title: 'San Francisco',
          info: 'Beautiful city by the bay'
        },
        {
          position: { lat: 37.7849, lng: -122.4094 },
          title: 'Sample Location 2',
          info: 'Another interesting location'
        }
      ]
    }
  },

  mounted() {
    // Initialize demo map first
    this.initializeDemoMap()
    // Initialize Google Maps if API key is available
    this.initializeMap()
  },

  beforeUnmount() {
    // Clean up maps
    if (this.demoMap) {
      this.demoMap.remove()
    }
  },

  methods: {
    initializeDemoMap() {
      // Initialize OpenStreetMap with Leaflet
      this.demoMap = L.map('demo-map').setView([37.7749, -122.4194], 13)

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(this.demoMap)

      // Add sample markers
      const markers = [
        {
          lat: 37.7749,
          lng: -122.4194,
          title: 'San Francisco',
          description: 'Beautiful city by the bay'
        },
        {
          lat: 37.7849,
          lng: -122.4094,
          title: 'Sample Location',
          description: 'Another interesting location'
        }
      ]

      markers.forEach(marker => {
        L.marker([marker.lat, marker.lng])
          .addTo(this.demoMap)
          .bindPopup(`<b>${marker.title}</b><br>${marker.description}`)
      })

      // Add a custom watermark control
      const watermarkControl = L.control({ position: 'bottomright' })
      watermarkControl.onAdd = function () {
        const div = L.DomUtil.create('div', 'leaflet-control-watermark')
        div.innerHTML =
          '<div style="background: rgba(255,255,255,0.8); padding: 2px 5px; border-radius: 3px; font-size: 11px; color: #666;">Demo Map</div>'
        return div
      }
      watermarkControl.addTo(this.demoMap)
    },

    async initializeMap() {
      const apiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY

      if (!apiKey) {
        this.mapError = true
        return
      }

      try {
        // Dynamic import of Google Maps loader
        const { Loader } = await import('@googlemaps/js-api-loader')

        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['maps', 'marker']
        })

        const { Map } = await loader.importLibrary('maps')
        const { AdvancedMarkerElement } = await loader.importLibrary('marker')

        const map = new Map(document.getElementById('google-map'), {
          center: this.mapConfig.center,
          zoom: this.mapConfig.zoom,
          mapId: 'DEMO_MAP_ID'
        })

        // Add sample markers
        this.sampleMarkers.forEach(markerData => {
          new AdvancedMarkerElement({
            map: map,
            position: markerData.position,
            title: markerData.title
          })
        })

        this.mapLoaded = true
        this.mapError = false
      } catch (_error) {
        this.mapError = true
        this.mapLoaded = false
      }
    }
  }
}
</script>

<style scoped>
@import 'leaflet/dist/leaflet.css';

.map-watermark {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#demo-map {
  border: 2px solid #e9ecef;
}

.leaflet-control-watermark {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* Custom gradient for Google Maps */
.bg-google-blue {
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
}

/* Code block styling */
pre {
  font-size: 0.85rem;
  line-height: 1.4;
}

pre code {
  color: #2d3748;
}

/* Table styling */
.table th {
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
}

.table td {
  vertical-align: middle;
}

/* Alert styling */
.alert h6 {
  margin-bottom: 0.5rem;
}

/* Badge styling */
.badge {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
}
</style>
