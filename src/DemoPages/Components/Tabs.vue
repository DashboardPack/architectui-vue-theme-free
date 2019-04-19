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
            <b-card class="mb-3" no-body>
              <b-tabs card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
            <b-card class="mb-3" no-body>
              <b-tabs pills card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card class="mb-3 nav-justified" no-body>
              <b-tabs card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
            <b-card class="mb-3 nav-justified" no-body>
              <b-tabs pills card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab2'">
        <b-row>
          <b-col md="6">
            <b-card class="mb-3" no-body>
              <b-tabs class="card-header-tab-animation" card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card class="mb-3 nav-justified" no-body>
              <b-tabs class="card-header-tab-animation" card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";


  const TABS = [{
    title: 'Advanced',
    value: 'tab1',
  }, {
    title: 'Animated',
    value: 'tab2',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
    },
    data: () => ({
      heading: 'Tabs',
      subheading: 'Tabs are used to split content between multiple sections. Wide variety available.',
      icon: 'pe-7s-drawer icon-gradient bg-happy-itmeo',

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
