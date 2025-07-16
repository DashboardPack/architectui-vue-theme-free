# Vue 3 Migration Guide

This guide documents the migration from Vue 2.6 to Vue 3.5.17 and provides instructions for developers working with this modernized template.

## 📋 **Migration Overview**

The ArchitectUI Vue template has been completely migrated from Vue 2.6 to Vue 3.5.17 with modern tooling and best practices. This migration includes:

- ✅ **Framework**: Vue 2.6 → Vue 3.5.17
- ✅ **Build System**: Vue CLI → Vite 7.x
- ✅ **State Management**: Vuex → Pinia 3.x
- ✅ **UI Framework**: Bootstrap 4 → Bootstrap 5
- ✅ **Components**: BootstrapVue → BootstrapVueNext
- ✅ **Charts**: Chart.js 3.x → Chart.js 4.x
- ✅ **Icons**: Legacy FontAwesome → FontAwesome Vue 3
- ✅ **Security**: 21 vulnerabilities → 0 vulnerabilities

## 🚀 **What's New in Vue 3**

### **Composition API**
The template now uses Vue 3's Composition API for better code organization and reusability.

#### **Before (Vue 2 Options API)**
```javascript
export default {
  name: 'MyComponent',
  data() {
    return {
      count: 0,
      message: 'Hello'
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
```

#### **After (Vue 3 Composition API)**
```javascript
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const count = ref(0)
    const message = ref('Hello')
    
    const doubleCount = computed(() => count.value * 2)
    
    const increment = () => {
      count.value++
    }
    
    return {
      count,
      message,
      doubleCount,
      increment
    }
  }
})
```

### **Pinia Store Management**
Replaced Vuex with Pinia for better Vue 3 integration and developer experience.

#### **Before (Vuex)**
```javascript
// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  }
})

// In component
this.$store.dispatch('increment')
```

#### **After (Pinia)**
```javascript
// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  const increment = () => {
    count.value++
  }
  
  return { count, increment }
})

// In component
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
counterStore.increment()
```

## 🏗️ **New Architecture**

### **Store Structure**
The template now includes three main stores:

```
src/stores/
├── index.js           # Store configuration
├── dashboard.js       # Analytics and dashboard data
├── ui.js             # UI state and preferences
└── notifications.js   # System notifications
```

### **Component Structure**
```
src/components/
├── DashboardWidget.vue  # Reusable widget component
└── StoreDemo.vue       # Store usage examples
```

### **Updated Layout Components**
All layout components have been converted to Vue 3 Composition API:
- `Header.vue` - Mobile menu and search functionality
- `Sidebar.vue` - Navigation with store integration
- `PageTitle.vue` - Page header component
- `SearchBox.vue` - Reactive search component
- `HeaderUserArea.vue` - User profile area

## 🔧 **Breaking Changes**

### **1. Component Registration**
#### **Before (Vue 2)**
```javascript
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
```

#### **After (Vue 3)**
```javascript
import { createApp } from 'vue'
import { BButton, BCard, BModal } from 'bootstrap-vue-next'

const app = createApp(App)
app.component('b-button', BButton)
app.component('b-card', BCard)
app.component('b-modal', BModal)
```

### **2. State Management Access**
#### **Before (Vuex)**
```javascript
// In component
computed: {
  count() {
    return this.$store.state.count
  }
}
```

#### **After (Pinia)**
```javascript
// In component
import { useCounterStore } from '@/stores/counter'

setup() {
  const counterStore = useCounterStore()
  return { counterStore }
}
```

### **3. Event Handling**
#### **Before (Vue 2)**
```javascript
methods: {
  handleClick() {
    this.$emit('click', this.data)
  }
}
```

#### **After (Vue 3)**
```javascript
setup(props, { emit }) {
  const handleClick = () => {
    emit('click', props.data)
  }
  
  return { handleClick }
}
```

## 🎨 **Bootstrap 5 Changes**

### **Class Updates**
Common class name changes that have been applied:

| Bootstrap 4 | Bootstrap 5 |
|-------------|-------------|
| `badge-danger` | `badge bg-danger` |
| `badge-success` | `badge bg-success` |
| `badge-warning` | `badge bg-warning` |
| `badge-info` | `badge bg-info` |
| `btn-outline-dark` | `btn-outline-dark` |
| `text-left` | `text-start` |
| `text-right` | `text-end` |
| `float-left` | `float-start` |
| `float-right` | `float-end` |
| `ml-*` | `ms-*` |
| `mr-*` | `me-*` |
| `pl-*` | `ps-*` |
| `pr-*` | `pe-*` |

### **Component Updates**
Bootstrap components have been updated to use BootstrapVueNext:

```javascript
// Updated imports
import { BButton, BCard, BModal, BDropdown } from 'bootstrap-vue-next'

// Usage remains mostly the same
<b-button variant="primary">Click me</b-button>
<b-card title="Card Title">Card content</b-card>
```

## 📊 **Chart.js 4.x Updates**

### **New Chart Configuration**
Chart.js has been updated to version 4.x with improved API:

#### **Before (Chart.js 3.x)**
```javascript
const chartConfig = {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}
```

#### **After (Chart.js 4.x)**
```javascript
const chartConfig = {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}
```

## 🚀 **Development Setup**

### **Prerequisites**
- Node.js 18+
- npm 9+ or yarn 1.22+

### **Installation**
```bash
# Install dependencies
npm install

# Start development server
npm run serve

# Build for production
npm run build

# Run linter
npm run lint
```

### **Development Commands**
```bash
npm run serve     # Start Vite dev server (localhost:8080)
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🔍 **Code Examples**

### **Using Dashboard Store**
```vue
<template>
  <div>
    <h1>{{ dashboardStore.pageTitle }}</h1>
    <div class="stats">
      <div v-for="stat in dashboardStore.statsWithTrends" :key="stat.key">
        <span>{{ stat.label }}: {{ stat.value }}</span>
      </div>
    </div>
    <button @click="dashboardStore.refreshDashboard()">
      Refresh Data
    </button>
  </div>
</template>

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

### **Using UI Store**
```vue
<template>
  <div>
    <button @click="uiStore.toggleSidebar()">
      {{ uiStore.sidebarCollapsed ? 'Expand' : 'Collapse' }} Sidebar
    </button>
    <button @click="toggleTheme">
      Switch to {{ uiStore.theme === 'light' ? 'Dark' : 'Light' }} Theme
    </button>
  </div>
</template>

<script>
import { useUIStore } from '@/stores/ui'

export default {
  setup() {
    const uiStore = useUIStore()
    
    const toggleTheme = () => {
      const newTheme = uiStore.theme === 'light' ? 'dark' : 'light'
      uiStore.setTheme(newTheme)
    }
    
    return {
      uiStore,
      toggleTheme
    }
  }
}
</script>
```

### **Creating Reusable Components**
```vue
<!-- DashboardWidget.vue -->
<template>
  <div class="card">
    <div class="card-body">
      <h5>{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="value">{{ value }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardWidget',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
})
</script>
```

## 🛡️ **Security Improvements**

### **Vulnerability Resolution**
All 21 security vulnerabilities have been resolved by:
- Updating all dependencies to latest secure versions
- Removing deprecated packages
- Implementing modern security practices
- Using Vite's secure build process

### **Dependency Updates**
Major security-related updates:
- Node.js packages updated to latest versions
- Removed insecure legacy dependencies
- Implemented package-lock.json for deterministic builds
- Added security scanning in build process

## 📦 **Bundle Optimization**

### **Tree-shaking**
The template now uses tree-shaking to eliminate unused code:
- FontAwesome reduced from 1MB+ to 88KB
- Bootstrap components only include what's used
- Chart.js optimized for production builds

### **Code Splitting**
- Lazy-loaded routes for better performance
- Dynamic imports for heavy components
- Optimized chunk sizes for faster loading

## 🎯 **Best Practices**

### **Component Development**
1. Use `defineComponent` for TypeScript support
2. Implement proper prop validation
3. Use Composition API for complex logic
4. Leverage Pinia stores for state management
5. Follow Vue 3 style guide conventions

### **Store Management**
1. Create focused stores for specific domains
2. Use `ref()` for simple values, `reactive()` for objects
3. Implement proper error handling
4. Use computed properties for derived state
5. Persist important state to localStorage

### **Performance**
1. Use `v-memo` for expensive list rendering
2. Implement proper key attributes for lists
3. Use `defineAsyncComponent` for heavy components
4. Optimize images and assets
5. Implement proper loading states

## 🔮 **Future Enhancements**

### **Planned Features**
- TypeScript integration
- Vitest testing framework
- PWA capabilities
- Advanced theming system
- Component library extraction

### **Upgrade Path**
This template provides a solid foundation for:
- TypeScript migration
- Advanced state management patterns
- Micro-frontend architecture
- Modern testing practices
- CI/CD integration

## 🤝 **Contributing**

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make changes following Vue 3 patterns
4. Run `npm run lint` to ensure code quality
5. Test changes thoroughly
6. Submit a pull request

### **Code Standards**
- Follow Vue 3 Composition API patterns
- Use ESLint configuration provided
- Write clear, descriptive commit messages
- Include proper documentation
- Follow security best practices

---

## 🎉 **Ready to Build**

This Vue 3 modernized template provides everything needed to build modern, secure, and performant admin dashboards. The migration maintains all original functionality while adding modern development practices and performance optimizations.

**Happy coding!** 🚀