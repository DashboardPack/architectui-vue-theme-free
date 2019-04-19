<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'"
      :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="card-title">
              Gradient Icons
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-filter icon-gradient bg-warm-flame"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-help1 icon-gradient bg-night-fade"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-moon icon-gradient bg-sunny-morning"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-plane icon-gradient bg-tempting-azure"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-box2 icon-gradient bg-amy-crisp"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-lock icon-gradient bg-malibu-beach"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-monitor icon-gradient bg-mean-fruit"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-mouse icon-gradient bg-heavy-rain"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-paint icon-gradient bg-arielle-smile"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-menu icon-gradient bg-ripe-malin"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-wristwatch icon-gradient bg-deep-blue"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-volume2 icon-gradient bg-happy-itmeo"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-video icon-gradient bg-happy-fisher"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-wallet icon-gradient bg-plum-plate"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-paint-bucket icon-gradient bg-grow-early"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-diamond icon-gradient bg-strong-bliss"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-magic-wand icon-gradient bg-mixed-hopes"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-arc icon-gradient bg-premium-dark"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="pe-7s-hourglass icon-gradient bg-love-kiss"> </i>
            </div>
          </div>
        </div>
        <div class="main-card mb-3 card">
          <div class="card-body">
            <b-row>
              <template v-for="iconName in ['pe-7s-album', 'pe-7s-arc', 'pe-7s-back-2', 'pe-7s-bandaid', 'pe-7s-car',
'pe-7s-diamond', 'pe-7s-door-lock', 'pe-7s-eyedropper', 'pe-7s-female', 'pe-7s-gym',
'pe-7s-hammer', 'pe-7s-headphones',
'pe-7s-helm', 'pe-7s-hourglass', 'pe-7s-leaf', 'pe-7s-magic-wand', 'pe-7s-male',
'pe-7s-map-2', 'pe-7s-next-2', 'pe-7s-paint-bucket',
'pe-7s-pendrive', 'pe-7s-photo', 'pe-7s-piggy', 'pe-7s-plugin', 'pe-7s-refresh-2',
'pe-7s-rocket', 'pe-7s-settings', 'pe-7s-shield', 'pe-7s-smile',
'pe-7s-usb', 'pe-7s-vector', 'pe-7s-wine', 'pe-7s-cloud-upload', 'pe-7s-cash',
'pe-7s-close', 'pe-7s-bluetooth', 'pe-7s-cloud-download', 'pe-7s-way',
'pe-7s-close-circle', 'pe-7s-id', 'pe-7s-angle-up', 'pe-7s-wristwatch', 'pe-7s-angle-up-circle',
'pe-7s-world', 'pe-7s-angle-right', 'pe-7s-volume',
'pe-7s-angle-right-circle', 'pe-7s-users', 'pe-7s-angle-left', 'pe-7s-user-female',
'pe-7s-angle-left-circle', 'pe-7s-up-arrow', 'pe-7s-angle-down', 'pe-7s-switch',
'pe-7s-angle-down-circle', 'pe-7s-scissors', 'pe-7s-wallet', 'pe-7s-safe', 'pe-7s-volume2',
'pe-7s-volume1', 'pe-7s-voicemail', 'pe-7s-video', 'pe-7s-user', 'pe-7s-upload',
'pe-7s-unlock', 'pe-7s-umbrella', 'pe-7s-trash', 'pe-7s-tools', 'pe-7s-timer',
'pe-7s-ticket', 'pe-7s-target', 'pe-7s-sun', 'pe-7s-study', 'pe-7s-stopwatch', 'pe-7s-star', 'pe-7s-speaker',
'pe-7s-signal', 'pe-7s-shuffle', 'pe-7s-shopbag', 'pe-7s-share', 'pe-7s-server',
'pe-7s-search', 'pe-7s-film', 'pe-7s-science', 'pe-7s-disk', 'pe-7s-ribbon', 'pe-7s-repeat', 'pe-7s-refresh',
'pe-7s-add-user', 'pe-7s-refresh-cloud', 'pe-7s-paperclip', 'pe-7s-radio', 'pe-7s-note2',
'pe-7s-print', 'pe-7s-network', 'pe-7s-prev', 'pe-7s-mute', 'pe-7s-power', 'pe-7s-medal',
'pe-7s-portfolio', 'pe-7s-like2', 'pe-7s-plus', 'pe-7s-left-arrow', 'pe-7s-play',
'pe-7s-key', 'pe-7s-plane', 'pe-7s-joy', 'pe-7s-photo-gallery', 'pe-7s-pin', 'pe-7s-phone', 'pe-7s-plug',
'pe-7s-pen', 'pe-7s-right-arrow', 'pe-7s-paper-plane', 'pe-7s-delete-user', 'pe-7s-paint',
'pe-7s-bottom-arrow', 'pe-7s-notebook', 'pe-7s-note', 'pe-7s-next', 'pe-7s-news-paper',
'pe-7s-musiclist', 'pe-7s-music', 'pe-7s-mouse', 'pe-7s-more', 'pe-7s-moon', 'pe-7s-monitor',
'pe-7s-micro', 'pe-7s-menu', 'pe-7s-map', 'pe-7s-map-marker', 'pe-7s-mail', 'pe-7s-mail-open',
'pe-7s-mail-open-file', 'pe-7s-magnet', 'pe-7s-loop', 'pe-7s-look', 'pe-7s-lock',
'pe-7s-lintern', 'pe-7s-link', 'pe-7s-like', 'pe-7s-light', 'pe-7s-less', 'pe-7s-keypad', 'pe-7s-junk',
'pe-7s-info', 'pe-7s-home', 'pe-7s-help2', 'pe-7s-help1', 'pe-7s-graph3',
'pe-7s-graph2', 'pe-7s-graph1', 'pe-7s-graph', 'pe-7s-global', 'pe-7s-gleam', 'pe-7s-glasses',
'pe-7s-gift', 'pe-7s-folder',
'pe-7s-flag', 'pe-7s-filter', 'pe-7s-file', 'pe-7s-expand1', 'pe-7s-exapnd2',
'pe-7s-edit', 'pe-7s-drop', 'pe-7s-drawer', 'pe-7s-download', 'pe-7s-display2',
'pe-7s-display1', 'pe-7s-diskette',
'pe-7s-date', 'pe-7s-cup', 'pe-7s-culture', 'pe-7s-crop', 'pe-7s-credit',
'pe-7s-copy-file', 'pe-7s-config', 'pe-7s-compass', 'pe-7s-comment', 'pe-7s-coffee',
'pe-7s-cloud', 'pe-7s-clock',
'pe-7s-check', 'pe-7s-chat', 'pe-7s-cart', 'pe-7s-camera', 'pe-7s-call', 'pe-7s-calculator',
'pe-7s-browser', 'pe-7s-box2', 'pe-7s-box1', 'pe-7s-bookmarks', 'pe-7s-bicycle', 'pe-7s-bell',
'pe-7s-battery', 'pe-7s-ball', 'pe-7s-back', 'pe-7s-attention', 'pe-7s-anchor', 'pe-7s-albums',
'pe-7s-alarm', 'pe-7s-airplay']">
                <b-col md="2">
                  <div class="font-icon-wrapper">
                    <i :class=iconName> </i>
                    <p>{{iconName}}</p>
                  </div>
                </b-col>
              </template>
            </b-row>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <b-row>
              <b-col md="2">
                <div class="font-icon-wrapper text-primary">
                  <font-awesome-icon icon="coffee" size="4x"/>
                  <p>size="4x"</p>
                </div>
              </b-col>
              <b-col md="2">
                <div class="font-icon-wrapper text-success">
                  <font-awesome-icon icon="cog" size="4x"/>
                  <p>faCoffee</p>
                </div>
              </b-col>
              <b-col md="2">
                <div class="font-icon-wrapper text-success">
                  <font-awesome-icon icon="cog" size="4x"/>
                  <p>faCalendarAlt</p>
                </div>
              </b-col>
              <b-col md="2">
                <div class="font-icon-wrapper text-danger">
                  <font-awesome-icon icon="spinner" spin fixedWidth size="4x"/>
                  <p>spin fixedWidth size="4x"</p>
                </div>
              </b-col>
              <b-col md="2">
                <div class="font-icon-wrapper text-info">
                  <font-awesome-icon icon="check-square" pulse fixedWidth size="4x"/>
                  <p>pulse fixedWidth size="4x"</p>
                </div>
              </b-col>
              <b-col md="2">
                <div class="font-icon-wrapper text-warning">
                  <font-awesome-icon icon='archive' flip="both" size="4x"/>
                  <p>flip="both" size="4x"</p>
                </div>
              </b-col>
              <b-col md="2">
                <div class="font-icon-wrapper text-dark">
                  <font-awesome-icon icon="angry" size="4x" transform="left-1 rotate-15"/>
                  <p>size="4x" transform="left-1 rotate-15"</p>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab3'">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="card-title">
              Gradient Icons
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-star icon-gradient bg-warm-flame"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-database icon-gradient bg-night-fade"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-apartment icon-gradient bg-sunny-morning"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-cog icon-gradient bg-tempting-azure"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-trash icon-gradient bg-amy-crisp"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-lock icon-gradient bg-malibu-beach"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-screen icon-gradient bg-mean-fruit"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-laptop-phone icon-gradient bg-heavy-rain"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-calendar-full icon-gradient bg-arielle-smile"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-user icon-gradient bg-ripe-malin"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-film-play icon-gradient bg-deep-blue"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-graduation-hat icon-gradient bg-happy-itmeo"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-eye icon-gradient bg-happy-fisher"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-hand icon-gradient bg-plum-plate"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-camera-video icon-gradient bg-grow-early"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-diamond icon-gradient bg-strong-bliss"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-magic-wand icon-gradient bg-mixed-hopes"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-heart icon-gradient bg-premium-dark"> </i>
            </div>
            <div class="font-icon-wrapper font-icon-lg">
              <i class="lnr-hourglass icon-gradient bg-love-kiss"> </i>
            </div>
          </div>
        </div>
        <div class="main-card mb-3 card">
          <div class="card-body">
            <b-row>
              <template
                v-for="iconName in ['lnr-apartment', 'lnr-pencil', 'lnr-magic-wand', 'lnr-drop', 'lnr-lighter', 'lnr-poop', 'lnr-sun', 'lnr-moon', 'lnr-cloud', 'lnr-cloud-upload', 'lnr-cloud-download', 'lnr-cloud-sync', 'lnr-cloud-check', 'lnr-database', 'lnr-lock', 'lnr-cog', 'lnr-trash', 'lnr-dice', 'lnr-heart', 'lnr-star', 'lnr-star-half', 'lnr-star-empty', 'lnr-flag', 'lnr-envelope', 'lnr-paperclip', 'lnr-inbox', 'lnr-eye', 'lnr-printer', 'lnr-file-empty', 'lnr-file-add', 'lnr-enter', 'lnr-exit', 'lnr-graduation-hat', 'lnr-license', 'lnr-music-note', 'lnr-film-play', 'lnr-camera-video', 'lnr-camera', 'lnr-picture', 'lnr-book', 'lnr-bookmark', 'lnr-user', 'lnr-users', 'lnr-shirt', 'lnr-store', 'lnr-cart', 'lnr-tag', 'lnr-phone-handset', 'lnr-phone', 'lnr-pushpin', 'lnr-map-marker', 'lnr-map', 'lnr-location', 'lnr-calendar-full', 'lnr-keyboard', 'lnr-spell-check', 'lnr-screen', 'lnr-smartphone', 'lnr-tablet', 'lnr-laptop', 'lnr-laptop-phone', 'lnr-power-switch', 'lnr-bubble', 'lnr-heart-pulse', 'lnr-construction', 'lnr-pie-chart', 'lnr-chart-bars', 'lnr-gift', 'lnr-diamond', 'lnr-linearicons', 'lnr-dinner', 'lnr-coffee-cup', 'lnr-leaf', 'lnr-paw', 'lnr-rocket', 'lnr-briefcase', 'lnr-bus', 'lnr-car', 'lnr-train', 'lnr-bicycle', 'lnr-wheelchair', 'lnr-select', 'lnr-earth', 'lnr-smile', 'lnr-sad', 'lnr-neutral', 'lnr-mustache', 'lnr-alarm', 'lnr-bullhorn', 'lnr-volume-high', 'lnr-volume-medium', 'lnr-volume-low', 'lnr-volume', 'lnr-mic', 'lnr-hourglass', 'lnr-undo', 'lnr-redo', 'lnr-sync', 'lnr-history', 'lnr-clock', 'lnr-download', 'lnr-upload', 'lnr-enter-down', 'lnr-exit-up', 'lnr-bug', 'lnr-code', 'lnr-link', 'lnr-unlink', 'lnr-thumbs-up', 'lnr-thumbs-down', 'lnr-magnifier', 'lnr-cross', 'lnr-menu', 'lnr-list', 'lnr-chevron-up', 'lnr-chevron-down', 'lnr-chevron-left', 'lnr-chevron-right', 'lnr-arrow-up', 'lnr-arrow-down', 'lnr-arrow-left', 'lnr-arrow-right', 'lnr-move', 'lnr-warning', 'lnr-question-circle', 'lnr-menu-circle', 'lnr-checkmark-circle', 'lnr-cross-circle', 'lnr-plus-circle', 'lnr-circle-minus', 'lnr-arrow-up-circle', 'lnr-arrow-down-circle', 'lnr-arrow-left-circle', 'lnr-arrow-right-circle', 'lnr-chevron-up-circle', 'lnr-chevron-down-circle', 'lnr-chevron-left-circle', 'lnr-chevron-right-circle', 'lnr-crop', 'lnr-frame-expand', 'lnr-frame-contract', 'lnr-layers', 'lnr-funnel', 'lnr-text-format', 'lnr-text-format-remove', 'lnr-text-size', 'lnr-bold', 'lnr-italic', 'lnr-underline', 'lnr-strikethrough', 'lnr-highlight', 'lnr-text-align-left', 'lnr-text-align-center', 'lnr-text-align-right', 'lnr-text-align-justify', 'lnr-line-spacing', 'lnr-indent-increase', 'lnr-indent-decrease', 'lnr-pilcrow', 'lnr-direction-ltr', 'lnr-direction-rtl', 'lnr-page-break', 'lnr-sort-alpha-asc', 'lnr-sort-amount-asc', 'lnr-hand', 'lnr-pointer-up', 'lnr-pointer-right', 'lnr-pointer-down', 'lnr-pointer-left']">
                <b-col md="2">
                  <div class="font-icon-wrapper">
                    <i :class=iconName> </i>
                    <p>{{iconName}}</p>
                  </div>
                </b-col>
              </template>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";


  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faAngleLeft,
    faCalendarAlt,
    faAngleRight,
    faAngleUp,
    faAngry,
    faAnkh,
    faAppleAlt,
    faArchive,
    faArchway,
    faArrowAltCircleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faArrowAltCircleUp,
    faArrowCircleDown,
    faArrowCircleLeft,
    faArrowCircleRight,
    faArrowCircleUp,
    faArrowDown,
    faArrowLeft,
  } from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faAngleLeft,
    faCalendarAlt,
    faAngleRight,
    faAngleUp,
    faAngry,
    faAnkh,
    faAppleAlt,
    faArchive,
    faArchway,
    faArrowAltCircleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faArrowAltCircleUp,
    faArrowCircleDown,
    faArrowCircleLeft,
    faArrowCircleRight,
    faArrowCircleUp,
    faArrowDown,
    faArrowLeft,
  );

  const TABS = [{
    title: 'Pe7 Icons',
    value: 'tab1',
  }, {
    title: 'FontAwesome',
    value: 'tab2',
  }, {
    title: 'Linecons',
    value: 'tab3',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
      'font-awesome-icon': FontAwesomeIcon,
    },
    data: () => ({
      heading: 'Icons',
      subheading: 'Wide icons selection including from flag icons to FontAwesome and other icons libraries.',
      icon: 'pe-7s-phone icon-gradient bg-night-fade',

      tabs: TABS,
      currentTab: 'tab1',
    }),

    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }
</script>
