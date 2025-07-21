<template>
  <div>
    <div class="search-wrapper" v-bind:class="{ active: searchOpen() }">
      <div class="input-holder">
        <input
          type="text"
          class="search-input"
          placeholder="Type to search"
          v-model="searchQuery"
          @keyup.enter="handleSearch"
        />
        <button class="search-icon" @click="toggleSearch"><span /></button>
      </div>
      <div v-if="searchOpen()" class="close" @click="toggleSearch"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useUIStore } from '@/stores/ui'

export default defineComponent({
  name: 'SearchBox',
  setup() {
    const uiStore = useUIStore()
    const searchQuery = ref('')

    const toggleSearch = () => {
      uiStore.toggleHeaderSearch()
    }

    const handleSearch = event => {
      // Implement search functionality here
      event.preventDefault()
    }

    return {
      searchOpen: () => uiStore.headerSearchOpen,
      searchQuery,
      toggleSearch,
      handleSearch
    }
  }
})
</script>
