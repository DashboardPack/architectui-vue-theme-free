<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

    <div class="content">
        <div class="row">
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Colorful Dots</h5>
                <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="dot-danger vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                      </div>
                    </div>
                  </div>
                  <div class="dot-warning vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="dot-success vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release
                          <div class="badge badge-danger ml-2">NEW</div>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="dot-primary vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">
                          Something not important
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="dot-info vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">This dot has an info state</h4>
                      </div>
                    </div>
                  </div>
                  <div class="dot-dark vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">This dot has a dark state</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Simple Dots</h5>
                <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span class="text-success">15:00 PM</span></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  export default {
    components: {
      PageTitle,

      VuePerfectScrollbar
    },
    data: () => ({
      heading: 'Timelines',
      subheading: 'Timelines are used to show lists of notifications, tasks or actions in a beautiful way.',
      icon: 'pe-7s-light icon-gradient bg-malibu-beach',



    }),


  }
</script>
