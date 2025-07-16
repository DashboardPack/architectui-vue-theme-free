<template>
  <div class="app-container app-theme-white">
    <Header />
    <Sidebar />
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
import Sidebar from '../Components/Sidebar.vue'
import Footer from '../Components/Footer.vue'

export default defineComponent({
  name: 'BaseLayout',
  components: {
    Header,
    Sidebar,
    Footer
  }
})
</script>
