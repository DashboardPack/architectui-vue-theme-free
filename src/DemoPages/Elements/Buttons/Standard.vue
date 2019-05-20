<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <div class="content">
        <b-row>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Solid</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-button class="mr-2 mb-2" :variant="variant">
                    {{variant}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Color Transition</h5>
                <template v-for="variant in ['outline-primary','outline-secondary','outline-success','outline-info','outline-warning','outline-danger','outline-focus','outline-alternate','outline-light','outline-dark','outline-link']">
                  <b-button class="mr-2 mb-2 btn-transition" :variant="variant">
                    {{variant}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Color Transition no Borders</h5>
                <template v-for="variant in ['outline-primary','outline-secondary','outline-success','outline-info','outline-warning','outline-danger','outline-focus','outline-alternate','outline-light','outline-dark','outline-link']">
                  <b-button class="mr-2 mb-2 border-0 btn-transition" :variant="variant">
                    {{variant}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Hover Shine</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-button class="mr-2 mb-2 btn-hover-shine btn-transition" :variant="variant">
                    {{variant}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Active State</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-button :pressed="true" class="mr-2 mb-2" :variant="variant">
                    {{variant}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Disabled</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-button disabled class="mr-2 mb-2" :variant="variant">
                    {{variant}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Block Level</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-button block class="mr-2 mb-2" variant="primary" :size="size">
                    Block {{size}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Wider</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-button class="btn-wide mr-2 mb-2" variant="primary" :size="size">
                    Wider {{size}}
                  </b-button>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Sizing</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-button class="mr-2 mb-2" variant="primary" :size="size">
                    Button {{size}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Checkbox Buttons</h5>
                <template>
                  <div class="text-center">
                    <b-form-checkbox-group buttons v-model="selected" name="butons1" :options="options"></b-form-checkbox-group>
                    <div class="divider"/>
                    <b-form-checkbox-group v-model="selected"
                                           buttons
                                           button-variant="primary"
                                           size="lg"
                                           name="buttons2"
                                           :options="options">
                    </b-form-checkbox-group>
                    <div class="divider"/>
                    <b-form-checkbox-group buttons v-model="selected" stacked :options="options"></b-form-checkbox-group>
                  </div>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Radio Buttons</h5>
                <template>
                  <div class="text-center">
                    <b-form-radio-group id="btnradios1"
                                        buttons
                                        v-model="selected2"
                                        :options="options2"
                                        name="radiosBtnDefault"/>
                    <div class="divider"/>
                    <b-form-radio-group id="btnradios2"
                                        buttons
                                        button-variant="outline-primary"
                                        size="lg"
                                        v-model="selected2"
                                        :options="options2"
                                        name="radioBtnOutline"/>
                    <div class="divider"/>
                    <b-form-radio-group id="btnradios3"
                                        buttons
                                        stacked
                                        v-model="selected2"
                                        :options="options2"
                                        name="radioBtnStacked"/>
                  </div>
                </template>
              </div>
            </div>
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../../Layout/Components/PageTitle.vue";

  export default {
    components: {
      PageTitle,
    },
    data: () => ({
      heading: 'Standard Buttons',
      subheading: 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!',
      icon: 'pe-7s-plane icon-gradient bg-tempting-azure',

      selected: [], // Must be an array reference!
      options: [
        {text: 'Orange', value: 'orange'},
        {text: 'Apple', value: 'apple'},
        {text: 'Pineapple', value: 'pineapple'},
        {text: 'Grape', value: 'grape'}
      ],
      selected2: 'radio1',
      options2: [
        {text: 'Radio 1', value: 'radio1'},
        {text: 'Radio 3', value: 'radio2'},
        {text: 'Radio 3 (disabled)', value: 'radio3', disabled: true},
        {text: 'Radio 4', value: 'radio4'}
      ]
    })
  }
</script>
