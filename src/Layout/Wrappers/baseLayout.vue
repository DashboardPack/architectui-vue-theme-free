<template>
  <div class="app-container app-theme-white">
    <Header />
    <SidebarNav />
    <div class="app-main__outer">
      <div class="app-main__inner">
        <slot></slot>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../Components/Header.vue'
import SidebarNav from '../../components/SidebarNav.vue'
import Footer from '../Components/Footer.vue'

export default defineComponent({
  name: 'BaseLayout',
  components: {
    Header,
    SidebarNav,
    Footer
  }
})
</script>
