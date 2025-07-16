<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="content">
      <b-row>
        <b-col md="6">
          <b-card class="mb-3" no-body>
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-layers icon-gradient bg-love-kiss"></i>
                Pills Tabs
              </div>
            </b-card-header>
            <b-tabs pills card>
              <b-tab title="Tab 1" active>
                <p>
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </b-tab>
              <b-tab title="Tab 2">
                <p>
                  Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </b-tab>
              <b-tab title="Tab 3">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card class="mb-3" no-body>
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-layers icon-gradient bg-amy-crisp"></i>
                Justified Tabs
              </div>
            </b-card-header>
            <b-tabs pills card nav-class="nav-justified">
              <b-tab title="Tab 1" active>
                <p>
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </b-tab>
              <b-tab title="Tab 2">
                <p>
                  Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </b-tab>
              <b-tab title="Tab 3">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6">
          <b-card class="mb-3" no-body>
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-layers icon-gradient bg-happy-fisher"></i>
                Standard Tabs
              </div>
            </b-card-header>
            <b-tabs card>
              <b-tab title="Home" active>
                <p>
                  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                  synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                </p>
              </b-tab>
              <b-tab title="Profile">
                <p>
                  Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation
                  +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan.
                </p>
              </b-tab>
              <b-tab title="Messages">
                <p>
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                  fanny pack lo-fi farm-to-table readymade.
                </p>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card class="mb-3" no-body>
            <b-card-header>
              <div class="card-header-title font-size-lg text-capitalize fw-normal">
                <i class="header-icon lnr-layers icon-gradient bg-plum-plate"></i>
                Vertical Tabs
              </div>
            </b-card-header>
            <b-tabs pills card vertical>
              <b-tab title="First" active>
                <p>Vertical tabs are useful when you have limited horizontal space but sufficient vertical space.</p>
                <p>This is the content of the first tab in vertical orientation.</p>
              </b-tab>
              <b-tab title="Second">
                <p>
                  Second tab content goes here. The vertical layout makes it easy to add more tabs without worrying
                  about horizontal space constraints.
                </p>
              </b-tab>
              <b-tab title="Third">
                <p>
                  Third tab with some different content. Vertical tabs provide a clean and organized way to present
                  tabbed content.
                </p>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: 'Tabs',
    subheading: 'Tabs are used to split content between multiple sections. Wide variety available.',
    icon: 'pe-7s-drawer icon-gradient bg-happy-itmeo'
  })
}
</script>
