<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Basic" class="mb-3">
          <b-progress :value="counter" :max="max" show-progress animated></b-progress>
          <b-progress class="mt-1" :max="max" show-value>
            <b-progress-bar :value="counter*(6/10)" variant="success"></b-progress-bar>
            <b-progress-bar :value="counter*(2.5/10)" variant="warning"></b-progress-bar>
            <b-progress-bar :value="counter*(1.5/10)" variant="danger"></b-progress-bar>
          </b-progress>
          <b-btn class="mt-4" @click="clicked">Click me</b-btn>
        </b-card>
        <b-card title="Colors" class="mb-3">
          <div v-for="bar in bars" class="row mb-1">
            <div class="col-sm-2">{{ bar.variant }}:</div>
            <div class="col-sm-10 pt-1">
              <b-progress :value="bar.value"
                          :variant="bar.variant"
                          :key="bar.variant"
              ></b-progress>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Sizing" class="mb-3">
          <b-progress :value="value" show-progress class="mb-3"></b-progress>
          <b-progress height="2rem" :value="value" show-progress class="mb-2"></b-progress>
          <b-progress height="20px" :value="value" show-progress class="mb-2"></b-progress>
          <b-progress height="2px" :value="value"></b-progress>
        </b-card>
        <b-card title="Striped" class="mb-3">
          <b-progress :value="25" variant="success" :striped="striped" class="mb-2"></b-progress>
          <b-progress :value="50" variant="info" :striped="striped" class="mb-2"></b-progress>
          <b-progress :value="75" variant="warning" :striped="striped" class="mb-2"></b-progress>
          <b-progress :value="100" variant="danger" :striped="striped" class="mb-2"></b-progress>
          <b-button variant="secondary" @click="striped = !striped">
            {{ striped ? 'Remove' : 'Add'}} Striped
          </b-button>
        </b-card>
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
      heading: 'Progress Bar',
      subheading: 'You can use the progress bars on their own or in combination with other widgets.',
      icon: 'pe-7s-filter icon-gradient bg-grow-early',

      counter: 45,
      max: 100,
      bars: [
        {variant: 'success', value: 75},
        {variant: 'info', value: 75},
        {variant: 'warning', value: 75},
        {variant: 'danger', value: 75},
        {variant: 'primary', value: 75},
        {variant: 'secondary', value: 75},
        {variant: 'dark', value: 75},
        {variant: 'alternate', value: 75},
        {variant: 'focus', value: 75}
      ],
      timer: null,
      striped: true,
      value: 75
    }),

    methods: {
      clicked () {
        this.counter = Math.random() * this.max
        console.log('Change progress to ' +
          Math.round(this.counter * 100) / 100)
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        this.bars.forEach(bar => bar.value = 25 + (Math.random() * 75))
      }, 2000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>
