<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

    <div class="content">
        <b-row>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Basic</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-dropdown no-flip :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Split Dropdowns</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-dropdown no-flip split :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Split Outline Dropdowns</h5>
                <template v-for="variant in ['outline-primary','outline-secondary','outline-success','outline-info','outline-warning','outline-danger','outline-focus','outline-alternate','outline-light','outline-dark','outline-link']">
                  <b-dropdown no-flip split :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Outline</h5>
                <template v-for="variant in ['outline-primary','outline-secondary','outline-success','outline-info','outline-warning','outline-danger','outline-focus','outline-alternate','outline-light','outline-dark','outline-link']">
                  <b-dropdown no-flip :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Sizing</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-dropdown no-flip :text="'Button ' + size" class="mb-2 mr-2" variant="outline-primary" :size="size">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Split Sizing</h5>
                <b-dropdown no-flip id="ddown-lg" size="lg" text="Large" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                </b-dropdown>
                <b-dropdown no-flip id="ddown-lg-split" size="lg" split text="Large Split" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
                <br>
                <b-dropdown no-flip id="ddown-sm" size="sm" text="Small" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
                <b-dropdown no-flip id="ddown-sm-split" size="sm" split text="Small Split" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
          </b-col>
        </b-row>
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
      heading: 'Dropdowns',
      subheading: 'Multiple styles, actions and effects are available for the Archited Framework dropdown buttons.\n',
      icon: 'pe-7s-umbrella icon-gradient bg-sunny-morning',



    }),


  }
</script>
