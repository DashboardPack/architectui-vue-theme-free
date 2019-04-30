<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <b-row>
      <b-col md="6">
        <b-card class="main-card mb-3" title="Collapse">
          <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
          <b-collapse id="collapse1" class="mt-2">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
              <b-collapse id=collapse1_inner class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card class="main-card mb-3" title="Collapse">
          <b-btn v-b-toggle.collapseA.collapseB>Toggle Both Collapse A and B</b-btn>

          <!-- elements to collapse -->
          <b-collapse id="collapseA" class="mt-2">
            <b-card>
              I am collapsable content A!
            </b-card>
          </b-collapse>
          <b-collapse id="collapseB" class="mt-2">
            <b-card>
              I am collapsable content B!
            </b-card>
          </b-collapse>
        </b-card>

        <b-card class="main-card mb-3" title="Collapse">
          <b-btn v-b-toggle.collapse3 class="m-1">Toggle Collapse</b-btn>
          <b-collapse visible id="collapse3">
            <b-card>
              I should start open!
            </b-card>
          </b-collapse>
        </b-card>
      </b-col>
      <b-col md="6">
        <template>
          <div role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" v-b-toggle.accordion1 class="p-1" role="tab">
                <div class="pl-2 pr-2 d-block">
                  Accordion 1
                </div>
              </b-card-header>
              <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">
                    I start opened because <code>visible</code> is <code>true</code>
                  </p>
                  <p class="card-text">
                    {{ text }}
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" v-b-toggle.accordion2 class="p-1" role="tab">
                <div class="pl-2 pr-2 d-block">
                  Accordion 2
                </div>
              </b-card-header>
              <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">
                    {{ text }}
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" v-b-toggle.accordion3 class="p-1" role="tab">
                <div class="pl-2 pr-2 d-block">
                  Accordion 3
                </div>
              </b-card-header>
              <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">
                    {{ text }}
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </template>

      </b-col>
    </b-row>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  export default {
    components: {
      PageTitle,
    },
    data: () => ({
      heading: 'Accordions',
      subheading: 'Accordions represent collapsable component with extended functionality.',
      icon: 'pe-7s-diamond icon-gradient bg-warm-flame',
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }),
  }
</script>
