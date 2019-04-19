<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'"
      :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-card class="main-card mb-4">
          <div id="maps-root">
            <google-map :center="center" :zoom="7" style="width: 100%; height: 500px">
              <google-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></google-marker>
            </google-map>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc'
    },
    // Demonstrating how we can customize the name of the components
    installComponents: false,
  });

  const TABS = [{
    title: 'Google Maps',
    value: 'tab1',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,

      'google-map': VueGoogleMaps.Map,
      'google-marker': VueGoogleMaps.Marker
    },
    data: () => ({
      heading: 'Maps',
      subheading: 'Implement in your applications Google or vector maps.',
      icon: 'pe-7s-map icon-gradient bg-premium-dark',

      tabs: TABS,
      currentTab: 'tab1',

      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 3,
      center2: [47.413220, -1.219482],
      bounds: null,

      center: {
        lat: 4.0,
        lng: 4.0
      },
      markers: [{
        position: {
          lat: 3.0,
          lng: 3.0
        }
      }, {
        position: {
          lat: 18.0,
          lng: 18.0
        }
      }]
    }),

    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }
</script>
