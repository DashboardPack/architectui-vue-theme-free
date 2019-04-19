<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <div class="main-card mb-3 card">
      <div class="card-body">
        <h5 class="card-title">Tooltips</h5>
        <div class="text-center">
          <b-btn class="mr-2" id="exButton1" variant="primary">
            Tooltip on top
          </b-btn>
          <b-btn class="mr-2" id="exButton2" variant="primary">
            Tooltip on right
          </b-btn>
          <b-btn class="mr-2" id="exButton3" variant="primary">
            Tooltip on bottom
          </b-btn>
          <b-btn id="exButton4" variant="primary">
            Tooltip on left
          </b-btn>

          <b-tooltip target="exButton1" placement="top" title="Tooltip on top"></b-tooltip>
          <b-tooltip target="exButton2" placement="right" title="Tooltip on right"></b-tooltip>
          <b-tooltip target="exButton3" placement="bottom" title="Tooltip on bottom"></b-tooltip>
          <b-tooltip target="exButton4" placement="left" title="Tooltip on left"></b-tooltip>

        </div>
      </div>
    </div>
    <div class="main-card mb-3 card">
      <div class="card-body">
        <h5 class="card-title">Popovers</h5>

        <h5 class="my-3">Placement</h5>
        <b-row>
          <b-col md="4" class="py-4 text-center"
                 v-for="placement in placements" :key="placement">
            <b-btn :id="'exPopover1-'+placement" variant="primary">
              {{ placement }}
            </b-btn>
            <b-popover :target="'exPopover1-'+placement"
                       :placement="placement"
                       title="Popover!"
                       triggers="hover focus"
                       :content="`Placement ${placement}`">
            </b-popover>
          </b-col>
        </b-row>
      </div>
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
      heading: 'Tooltips & Popovers',
      subheading: 'These Vue components are used to add interaction or extra information for your app\'s content.',
      icon: 'pe-7s-note2 icon-gradient bg-happy-fisher',
      placements: [
        'topright', 'top', 'topleft',
        'bottomright', 'bottom', 'bottomleft',
        'righttop', 'right', 'lefttop',
        'rightbottom', 'left', 'leftbottom'
      ]
    }),
  }
</script>
