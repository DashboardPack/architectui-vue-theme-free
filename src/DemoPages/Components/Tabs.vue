<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

    <div class="content">
        <b-row>
          <b-col md="6">
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
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  export default {
    components: {
      PageTitle,

    },
    data: () => ({
      heading: 'Tabs',
      subheading: 'Tabs are used to split content between multiple sections. Wide variety available.',
      icon: 'pe-7s-drawer icon-gradient bg-happy-itmeo',



    }),


  }
</script>
