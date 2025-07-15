<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

    <div class="content">
        <b-card title="Bootstrap 5 Carousel" class="main-card mb-3">
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <!-- Carousel indicators -->
            <div class="carousel-indicators">
              <button 
                v-for="(slide, index) in slides" 
                :key="index"
                type="button" 
                :data-bs-target="'#carouselExample'" 
                :data-bs-slide-to="index" 
                :class="{ active: index === currentSlide }"
                :aria-current="index === currentSlide ? 'true' : 'false'"
                :aria-label="'Slide ' + (index + 1)"
                @click="goToSlide(index)">
              </button>
            </div>
            
            <!-- Carousel slides -->
            <div class="carousel-inner">
              <div 
                v-for="(slide, index) in slides" 
                :key="index"
                :class="['carousel-item', { active: index === currentSlide }]">
                <img :src="slide.image" class="d-block w-100" :alt="slide.alt" style="height: 400px; object-fit: cover;">
                <div v-if="slide.caption || slide.text" class="carousel-caption d-none d-md-block" style="text-shadow: 1px 1px 2px #333;">
                  <h5 v-if="slide.caption">{{ slide.caption }}</h5>
                  <p v-if="slide.text">{{ slide.text }}</p>
                  <div v-if="slide.customContent" v-html="slide.customContent"></div>
                </div>
              </div>
            </div>
            
            <!-- Carousel controls -->
            <button class="carousel-control-prev" type="button" @click="previousSlide">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" @click="nextSlide">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          
          <div class="divider"></div>
          <p class="mt-4">
            Current Slide: {{ currentSlide + 1 }} of {{ slides.length }}<br>
            Auto-play: {{ isAutoPlaying ? 'On' : 'Off' }}
          </p>
        </b-card>
      </div>
    </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";

export default {
  name: 'Carousel',
  components: {
    PageTitle,
  },
  data() {
    return {
      heading: 'Carousels & Slideshows',
      subheading: 'Create easy and beautiful slideshows with these Vue components.',
      icon: 'pe-7s-album icon-gradient bg-sunny-morning',
      currentSlide: 0,
      isAutoPlaying: true,
      autoPlayInterval: null,
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
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
      this.restartAutoPlay();
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.restartAutoPlay();
    },
    previousSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
      this.restartAutoPlay();
    },
    startAutoPlay() {
      if (this.isAutoPlaying) {
        this.autoPlayInterval = setInterval(() => {
          this.nextSlide();
        }, 4000);
      }
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    },
    restartAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
}
</script>
