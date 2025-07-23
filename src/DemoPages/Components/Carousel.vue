<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="content">
      <b-card title="BootstrapVueNext Carousel" class="main-card mb-3">
        <b-carousel
          v-model="currentSlide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333"
        >
          <b-carousel-slide
            v-for="(slide, index) in slides"
            :key="index"
            :img-src="slide.image"
            :caption="slide.caption"
            :text="slide.text"
            :alt="slide.alt"
          >
            <div v-if="slide.customContent" v-html="slide.customContent"></div>
          </b-carousel-slide>
        </b-carousel>

        <div class="divider"></div>
        <p class="mt-4">
          Current Slide: {{ currentSlide + 1 }} of {{ slides.length }}<br />
          Auto-play: On (4 second interval)
        </p>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'Carousel',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Carousels & Slideshows',
      subheading: 'Create easy and beautiful slideshows with these BootstrapVueNext components.',
      icon: 'pe-7s-album icon-gradient bg-sunny-morning',
      currentSlide: 0,
      slides: [
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          caption: 'First slide',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          alt: 'First slide'
        },
        {
          image: 'https://picsum.photos/1024/480/?image=54',
          caption: 'Hello world!',
          text: '',
          customContent: '<h1>Hello world!</h1>',
          alt: 'Second slide'
        },
        {
          image: 'https://picsum.photos/1024/480/?image=58',
          caption: '',
          text: '',
          alt: 'Third slide'
        },
        {
          image: 'https://picsum.photos/1024/480/?image=55',
          caption: 'Image slot example',
          text: 'Example using direct image slot',
          alt: 'Fourth slide'
        },
        {
          image: 'https://picsum.photos/1024/480/?image=60',
          caption: 'Fifth Slide',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
          alt: 'Fifth slide'
        }
      ]
    }
  }
}
</script>
