<template>
  <div v-if="item.type === 'header'" class="vsm-item">
    <div class="vsm-header">
      {{ item.title }}
    </div>
  </div>

  <div v-else-if="item.type === 'link'" class="vsm-item" :class="{ 'active-item': isActiveRoute(item.route) }">
    <router-link :to="item.route" class="vsm-link">
      <i :class="`vsm-icon ${item.icon}`"></i>
      <span class="vsm-title">{{ item.title }}</span>
    </router-link>
  </div>

  <div
    v-else-if="item.type === 'submenu'"
    class="vsm-item"
    :class="{ 'parent-active-item': isParentActive, 'open-item': isSubmenuOpen }"
  >
    <div
      class="vsm-link"
      @click="toggleSubmenu"
      role="button"
      tabindex="0"
      @keydown.enter="toggleSubmenu"
      @keydown.space.prevent="toggleSubmenu"
    >
      <i :class="`vsm-icon ${item.icon}`"></i>
      <span class="vsm-title">{{ item.title }}</span>
      <i class="vsm-arrow" :class="{ 'open-arrow': isSubmenuOpen }"></i>
    </div>

    <transition name="expand" appear>
      <div v-show="isSubmenuOpen" class="vsm-dropdown">
        <div class="vsm-list">
          <div
            v-for="child in item.children"
            :key="child.id"
            class="vsm-item"
            :class="{ 'active-item': isActiveRoute(child.route) }"
          >
            <router-link :to="child.route" class="vsm-link">
              <i class="vsm-icon"></i>
              <span class="vsm-title">{{ child.title }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const route = useRoute()
const sidebarStore = useSidebarStore()

const isActiveRoute = routePath => {
  return route.path === routePath
}

const isParentActive = computed(() => {
  if (props.item.type !== 'submenu') return false
  return props.item.children?.some(child => isActiveRoute(child.route))
})

const isSubmenuOpen = computed(() => {
  return sidebarStore.isSubmenuActive(props.item.id)
})

const toggleSubmenu = () => {
  sidebarStore.toggleSubmenu(props.item.id)
}
</script>

<style scoped>
/* No custom styles needed - using existing CSS classes */
</style>
