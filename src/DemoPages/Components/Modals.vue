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
        <b-card class="main-card mb-3 text-center">
            <b-button class="mr-2" v-b-modal.modal1>Launch demo modal</b-button>
            <b-button  class="mr-2" v-b-modal.modallg variant="primary">Large modal</b-button>
          <b-button  class="mr-2" v-b-modal.modalsm variant="primary">Small modal</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";


  const TABS = [{
    title: 'Basic',
    value: 'tab1',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
    },
    data: () => ({
      heading: 'Modals',
      subheading: 'Wide selection of modal dialogs styles and animations available.',
      icon: 'pe-7s-phone icon-gradient bg-premium-dark',

      tabs: TABS,
      currentTab: 'tab1',
    }),

    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }
</script>
