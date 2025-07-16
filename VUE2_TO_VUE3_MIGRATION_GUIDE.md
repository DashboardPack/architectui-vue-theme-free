# Vue 2 to Vue 3 Migration Guide for ArchitectUI Template

This is a comprehensive step-by-step guide for migrating Vue 2 ArchitectUI templates to Vue 3 with Bootstrap 5, Vite, and modern dependencies. This guide is designed to be followed by Claude Code autonomously.

## Pre-Migration Assessment

Before starting the migration, assess the current project:

1. **Check current versions**:
   - Vue 2.x → Vue 3.x
   - Bootstrap 4.x → Bootstrap 5.x
   - Webpack/Vue CLI → Vite
   - BootstrapVue → Bootstrap-Vue-Next

2. **Identify breaking changes needed**:
   - Vue 2 Options API → Vue 3 Composition API (optional but recommended)
   - Bootstrap 4 class changes → Bootstrap 5 equivalents
   - Webpack config → Vite config
   - vue-perfect-scrollbar → vue3-perfect-scrollbar

## Phase 1: Dependency Updates

### 1.1 Update package.json dependencies

Replace the dependencies section with Vue 3 equivalents:

```json
{
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.7.2",
    "@fortawesome/free-solid-svg-icons": "^6.7.2",
    "@fortawesome/vue-fontawesome": "^3.0.8",
    "@googlemaps/js-api-loader": "^1.16.10",
    "@popperjs/core": "^2.11.8",
    "@vue/compat": "^3.5.17",
    "animate-sass": "^0.8.2",
    "bootstrap": "^5.3.7",
    "bootstrap-vue-next": "^0.30.4",
    "chart.js": "^4.5.0",
    "core-js": "^3.44.0",
    "es6-promise": "^4.2.6",
    "leaflet": "^1.9.4",
    "pe7-icon": "^1.0.4",
    "perfect-scrollbar": "^1.4.0",
    "pinia": "^3.0.3",
    "regenerator-runtime": "^0.14.1",
    "vue": "^3.5.17",
    "vue-chartjs": "^5.3.2",
    "vue-router": "^4.5.1",
    "vue-sidebar-menu": "^5.7.0",
    "vue3-perfect-scrollbar": "^2.0.0"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.28.0",
    "@babel/preset-env": "^7.28.0",
    "@eslint/js": "^9.31.0",
    "@typescript-eslint/eslint-plugin": "^8.37.0",
    "@typescript-eslint/parser": "^8.37.0",
    "@vitejs/plugin-vue": "^6.0.0",
    "@vitejs/plugin-vue-jsx": "^5.0.1",
    "@vitest/ui": "^3.2.4",
    "@vue/test-utils": "^2.4.6",
    "@vue/typescript": "^1.8.20",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.31.0",
    "eslint-plugin-vue": "^10.3.0",
    "husky": "^9.1.7",
    "jsdom": "^26.1.0",
    "lint-staged": "^16.1.2",
    "postcss": "^8.4.47",
    "prettier": "^3.6.2",
    "sass": "^1.89.2",
    "typescript": "^5.8.3",
    "vite": "^7.0.4",
    "vitest": "^3.2.4",
    "vue-tsc": "^3.0.1"
  }
}
```

### 1.2 Update package.json scripts

Replace the scripts section with Vite equivalents:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "serve": "vite",
    "lint": "eslint . --fix",
    "type-check": "vue-tsc --noEmit",
    "format": "prettier --write \"src/**/*.{js,ts,vue,json,css,scss,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,vue,json,css,scss,md}\"",
    "test": "vitest",
    "test:run": "vitest run",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage",
    "prepare": "husky"
  }
}
```

## Phase 2: Vite Configuration

### 2.1 Create vite.config.js

Replace webpack config with Vite configuration:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue': '@vue/compat'
    }
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/utils.scss";`
      }
    }
  },
  server: {
    port: 8080,
    open: true
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          bootstrap: ['bootstrap', 'bootstrap-vue-next'],
          charts: ['chart.js', 'vue-chartjs']
        }
      }
    }
  }
})
```

### 2.2 Create tsconfig.json

Add TypeScript support:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Phase 3: Main Entry Point Migration

### 3.1 Update src/main.js

Replace Vue 2 main.js with Vue 3 equivalent:

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Bootstrap 5 imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

// Bootstrap Vue Next
import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUser, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons'

// Perfect Scrollbar
import 'vue3-perfect-scrollbar/style.css'

// Theme styles
import './assets/base.scss'

// Add icons to library
library.add(faHome, faUser, faChartBar, faCog)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(BootstrapVueNext)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
```

## Phase 4: Router Migration

### 4.1 Update router/index.js

Replace Vue Router 3 with Vue Router 4:

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboards/analytics'
  },
  {
    path: '/dashboards/analytics',
    name: 'Analytics',
    component: () => import('../DemoPages/Dashboards/Analytics.vue'),
    meta: {
      layout: 'default-layout'
    }
  },
  // Add all other routes here...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

## Phase 5: Bootstrap Migration

### 5.1 Component Updates

Replace BootstrapVue components with Bootstrap-Vue-Next equivalents:

**Before (Vue 2 + BootstrapVue):**
```vue
<template>
  <b-container>
    <b-row>
      <b-col md="6">
        <b-card>
          <b-card-header>Header</b-card-header>
          <b-card-body>Content</b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
```

**After (Vue 3 + Bootstrap-Vue-Next):**
```vue
<template>
  <b-container>
    <b-row>
      <b-col md="6">
        <b-card>
          <b-card-header>Header</b-card-header>
          <b-card-body>Content</b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
```

### 5.2 CSS Class Updates

Update Bootstrap 4 classes to Bootstrap 5:

- `ml-*` → `ms-*` (margin-left)
- `mr-*` → `me-*` (margin-right)
- `pl-*` → `ps-*` (padding-left)
- `pr-*` → `pe-*` (padding-right)
- `text-left` → `text-start`
- `text-right` → `text-end`
- `float-left` → `float-start`
- `float-right` → `float-end`

## Phase 6: Component-Specific Migrations

### 6.1 Perfect Scrollbar Migration

**Before:**
```vue
<script>
import 'vue-perfect-scrollbar/dist/vue-perfect-scrollbar.css'
import PerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: {
    PerfectScrollbar
  }
}
</script>
```

**After:**
```vue
<script>
import 'vue3-perfect-scrollbar/style.css'
import PerfectScrollbar from 'vue3-perfect-scrollbar'

export default {
  components: {
    PerfectScrollbar
  }
}
</script>
```

### 6.2 Chart.js Migration

**Before (Chart.js 2.x):**
```vue
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
```

**After (Chart.js 4.x):**
```vue
<template>
  <Bar :data="chartData" :options="options" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
```

### 6.3 Modal Migration

**Before (BootstrapVue):**
```vue
<template>
  <b-modal id="modal1" title="Modal Title">
    <p>Modal content</p>
  </b-modal>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$bvModal.show('modal1')
    }
  }
}
</script>
```

**After (Bootstrap 5 Native):**
```vue
<template>
  <div class="modal fade" id="modal1" tabindex="-1" ref="modal1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal Title</h5>
          <button type="button" class="btn-close" @click="hideModal"></button>
        </div>
        <div class="modal-body">
          <p>Modal content</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  data() {
    return {
      modalInstance: null
    }
  },
  mounted() {
    this.modalInstance = new Modal(this.$refs.modal1)
  },
  methods: {
    showModal() {
      this.modalInstance.show()
    },
    hideModal() {
      this.modalInstance.hide()
    }
  }
}
</script>
```

## Phase 7: State Management Migration

### 7.1 Add Pinia Store

Replace Vuex with Pinia:

**stores/index.js:**
```javascript
import { createPinia } from 'pinia'

export default createPinia()
```

**stores/dashboard.js:**
```javascript
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    statistics: {
      cashDeposits: {
        value: 1896,
        change: 43,
        trend: 'up'
      },
      investedDividends: {
        value: 2467,
        change: 18,
        trend: 'up'
      },
      capitalGains: {
        value: 3251,
        change: 12,
        trend: 'down'
      }
    }
  }),
  
  getters: {
    getStatistic: (state) => (key) => {
      return state.statistics[key] || { value: 0, change: 0, trend: 'neutral' }
    }
  },
  
  actions: {
    updateStatistic(key, data) {
      if (this.statistics[key]) {
        this.statistics[key] = { ...this.statistics[key], ...data }
      }
    }
  }
})
```

### 7.2 Use Pinia in Components

**Before (Vuex):**
```vue
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getStatistic'])
  }
}
</script>
```

**After (Pinia):**
```vue
<script>
import { useDashboardStore } from '@/stores/dashboard'

export default {
  setup() {
    const dashboardStore = useDashboardStore()
    
    return {
      dashboardStore
    }
  }
}
</script>
```

## Phase 8: Development Tools Setup

### 8.1 ESLint Configuration

Create `eslint.config.js`:

```javascript
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import typescript from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      vue
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
]
```

### 8.2 Prettier Configuration

Create `.prettierrc`:

```json
{
  "semi": false,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false
}
```

### 8.3 Husky Setup

Create `.husky/pre-commit`:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

## Phase 9: Testing Setup

### 9.1 Vitest Configuration

Create `vitest.config.js`:

```javascript
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
```

### 9.2 Sample Test

Create `src/components/__tests__/example.test.js`:

```javascript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from '../MyComponent.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.text()).toContain('Hello')
  })
})
```

## Phase 10: Common Issues and Solutions

### 10.1 FontAwesome Issues

**Problem:** Icons not displaying
**Solution:** Update FontAwesome imports:

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUser)

app.component('font-awesome-icon', FontAwesomeIcon)
```

### 10.2 Perfect Scrollbar CSS Import

**Problem:** CSS import error
**Solution:** Update import path:

```javascript
import 'vue3-perfect-scrollbar/style.css'
```

### 10.3 Chart.js Registration

**Problem:** Chart not rendering
**Solution:** Register Chart.js components:

```javascript
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
```

## Phase 11: Final Steps

### 11.1 Clean Up

1. Remove `vue.config.js` (replaced by `vite.config.js`)
2. Remove `babel.config.js` (not needed with Vite)
3. Update `.gitignore` to include Vite-specific files
4. Remove unused dependencies

### 11.2 Testing

1. Run `npm run dev` to test development server
2. Run `npm run build` to test production build
3. Run `npm run lint` to check code quality
4. Run `npm run test` to run tests

### 11.3 Documentation Updates

Update the following files:
- `README.md` - Update installation and usage instructions
- `CLAUDE.md` - Update project overview and commands
- `CHANGELOG.md` - Document migration changes

## Execution Order

When implementing this migration, follow this exact order:

1. **Phase 1**: Update dependencies
2. **Phase 2**: Create Vite configuration
3. **Phase 3**: Update main.js
4. **Phase 4**: Update router
5. **Phase 5**: Bootstrap component updates
6. **Phase 6**: Component-specific migrations
7. **Phase 7**: State management migration
8. **Phase 8**: Development tools setup
9. **Phase 9**: Testing setup
10. **Phase 10**: Fix common issues
11. **Phase 11**: Final cleanup and testing

## Success Criteria

The migration is complete when:
- All components render correctly
- All routes work properly
- Charts display data correctly
- Modals function properly
- Maps component works with both OpenStreetMap and Google Maps
- Build process completes without errors
- Tests pass
- Code quality checks pass

This guide ensures a systematic approach to migrating Vue 2 ArchitectUI templates to Vue 3 with modern tooling and best practices.