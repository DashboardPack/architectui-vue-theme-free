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
        <b-row>
          <b-col md="6">
            <b-card title="Doughnut" class="main-card mb-3">
              <doughnut></doughnut>
            </b-card>
            <b-card title="Radar" class="main-card mb-3">
              <radar></radar>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card title="Polar Area" class="main-card mb-3">
              <polar></polar>
            </b-card>
            <b-card title="Pie Chart" class="main-card mb-3">
              <pie></pie>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab2'">
        <b-row>
          <b-col md="6">
            <b-card title="Line Chart" class="main-card mb-3">
              <lineeg></lineeg>
            </b-card>
            <b-card title="Area Chart" class="main-card mb-3">
              <areaeg></areaeg>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card title="Vertical Bar Chart" class="main-card mb-3">
              <bar></bar>
            </b-card>
            <b-card title="Horizontal Bar Chart" class="main-card mb-3">
              <barhoriz></barhoriz>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  import doughnut from './Chartjs/Doughnut'
  import radar from './Chartjs/Radar'
  import polar from './Chartjs/Polar'
  import pie from './Chartjs/Pie'
  import lineeg from './Chartjs/Line'
  import areaeg from './Chartjs/Area'
  import bar from './Chartjs/Bar'
  import barhoriz from './Chartjs/BarHoriz'

  const TABS = [{
    title: 'Circular Charts',
    value: 'tab1',
  }, {
    title: 'Lines & Bars Charts',
    value: 'tab2',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,

      doughnut,
      radar,
      polar,
      pie,
      lineeg,
      areaeg,
      bar,
      barhoriz,

    },
    data: () => ({
      heading: 'ChartJS',
      subheading: 'Huge selection of charts created with the Vue ChartJS Plugin',
      icon: 'pe-7s-bandaid icon-gradient bg-amy-crisp',

      tabs: TABS,
      currentTab: 'tab2',
    }),

    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }
</script>
