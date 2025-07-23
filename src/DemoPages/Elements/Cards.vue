<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="content">
      <div class="row">
        <div class="col-md-4">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Basic Example</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa.
              </p>
            </div>
          </div>
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Card with Subtitle</h5>
              <h6 class="card-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h6>
              <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis eni</p>
            </div>
          </div>
          <b-card class="mb-3">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button
                variant="primary"
                @click="handleCardAction('primary')"
                :class="{ active: cardActions.primaryClicked }"
              >
                Go somewhere
              </b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 text-center">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button
                variant="danger"
                @click="handleCardAction('danger')"
                :class="{ active: cardActions.dangerClicked }"
              >
                Go somewhere
              </b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 text-end">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="outline-dark">Go somewhere</b-button>
            </b-card-body>
          </b-card>
          <b-card class="main-card mb-3">
            <b-card-header>Header</b-card-header>
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button
                variant="warning"
                @click="handleCardAction('warning')"
                :class="{ active: cardActions.warningClicked }"
              >
                Go somewhere
              </b-button>
            </b-card-body>
            <b-card-footer>Footer</b-card-footer>
          </b-card>
        </div>
        <div class="col-md-4">
          <div class="main-card mb-3 card">
            <img
              width="100%"
              src="@/assets/images/placeholders/card-image.svg"
              alt="Card image cap"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              Some quick example text to build on the card title and make up the bulk of the card's content.
              <br /><br />
              <button
                class="btn btn-secondary"
                @click="handleCardAction('secondary')"
                :class="{ active: cardActions.secondaryClicked }"
              >
                <i class="fa fa-heart me-1"></i>Like ({{ cardStats.likes }})
              </button>
            </div>
          </div>
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer. <br /><br />
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            <img
              width="100%"
              src="@/assets/images/placeholders/sample-image.svg"
              alt="Card image cap"
              class="card-img-bottom"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="mb-0 card-subtitle">Card subtitle</h6>
            </div>
            <img width="100%" src="@/assets/images/placeholders/demo-photo.svg" alt="Card image cap" />
            <div class="card-body">
              Some quick example text to build on the card title and make up the bulk of the card's content.<br /><br />
              <a href="#" @click.prevent="handleCardLink('Card')" class="card-link">Card Link</a>
              <a href="#" @click.prevent="handleCardLink('Another')" class="card-link">Another Link</a>
            </div>
          </div>
          <div class="main-card mb-3 card">
            <img
              width="100%"
              src="@/assets/images/placeholders/card-header.svg"
              alt="Card image cap"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer. <br /><br />
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card-shadow-primary border mb-3 card card-body border-primary">
            <h5 class="card-title">Primary Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="card-shadow-secondary border mb-3 card card-body border-secondary">
            <h5 class="card-title">Secondary Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="card-shadow-warning border mb-3 card card-body border-warning">
            <h5 class="card-title">Warning Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="card-shadow-danger border mb-3 card card-body border-danger">
            <h5 class="card-title">Danger Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="card-shadow-success border mb-3 card card-body border-success">
            <h5 class="card-title">Success Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="card-shadow-info border mb-3 card card-body border-info">
            <h5 class="card-title">Info Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="card-shadow-dark border mb-3 card card-body border-dark">
            <h5 class="card-title">Dark Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="card-shadow-light border mb-3 card card-body border-light">
            <h5 class="card-title">Light Card Shadow</h5>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <div class="mb-3 card text-white">
            <img width="100%" src="@/assets/images/placeholders/overlay-bg.svg" alt="Card image cap" class="card-img" />
            <div class="card-img-overlay">
              <h5 class="text-white card-title">Card Title</h5>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer. <br /><br />
              <small class="text-white">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <b-card class="mb-3 border-primary" border-variant="primary">
            <b-card-body>
              <h5 class="card-title">Primary Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="primary" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 border-secondary" border-variant="secondary">
            <b-card-body>
              <h5 class="card-title">Secondary Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="secondary" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 border-warning" border-variant="warning">
            <b-card-body>
              <h5 class="card-title">Warning Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="warning" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 border-danger" border-variant="danger">
            <b-card-body>
              <h5 class="card-title">Danger Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="danger" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 border-success" border-variant="success">
            <b-card-body>
              <h5 class="card-title">Success Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="success" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 border-info" border-variant="info">
            <b-card-body>
              <h5 class="card-title">Info Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="info" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 border-dark" border-variant="dark">
            <b-card-body>
              <h5 class="card-title">Dark Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="dark" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 border-light" border-variant="light">
            <b-card-body>
              <h5 class="card-title">Light Card Border</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <b-button variant="outline-dark" size="sm">Go somewhere</b-button>
            </b-card-body>
          </b-card>
        </div>
        <div class="col-md-4">
          <div class="mb-3 card text-white bg-primary">
            <div class="card-header">Header</div>
            <div class="card-body">With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-footer">Footer</div>
          </div>
          <b-card class="mb-3 text-white" style="background-color: rgb(51, 51, 51); border-color: rgb(51, 51, 51)">
            <b-card-body>
              <h5 class="text-white card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 text-bg-primary">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 text-bg-success">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 text-bg-danger">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 text-bg-info">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </b-card-body>
          </b-card>

          <b-card class="mb-3 text-bg-warning">
            <b-card-body>
              <h5 class="card-title">Special Title Treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'Cards',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Cards',
      subheading: 'Wide selection of cards with multiple styles, borders, actions and hover effects.',
      icon: 'pe-7s-stopwatch icon-gradient bg-amy-crisp',
      cardStats: {
        likes: 42,
        shares: 15,
        views: 1234
      },
      cardActions: {
        primaryClicked: false,
        secondaryClicked: false,
        warningClicked: false,
        dangerClicked: false
      }
    }
  },
  methods: {
    handleCardAction(type) {
      this.cardActions[type + 'Clicked'] = true
      setTimeout(() => {
        this.cardActions[type + 'Clicked'] = false
      }, 1500)

      switch (type) {
      case 'primary':
        alert('Primary action triggered!')
        break
      case 'secondary':
        this.cardStats.likes++
        break
      case 'warning':
        this.cardStats.shares++
        break
      case 'danger':
        this.cardStats.views++
        break
      default:
        break
      }
    },
    handleCardLink(linkType) {
      alert(`${linkType} link clicked!`)
    }
  }
}
</script>

<style scoped>
/* Enhanced card styling */
.card {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Card image styling */
.card-img-top,
.card-img-bottom,
.card-img {
  transition: all 0.3s ease;
}

.card:hover .card-img-top,
.card:hover .card-img-bottom,
.card:hover .card-img {
  transform: scale(1.02);
}

/* Card shadow variants */
.card-shadow-primary {
  box-shadow: 0 4px 15px rgba(13, 110, 253, 0.25);
}

.card-shadow-secondary {
  box-shadow: 0 4px 15px rgba(108, 117, 125, 0.25);
}

.card-shadow-success {
  box-shadow: 0 4px 15px rgba(25, 135, 84, 0.25);
}

.card-shadow-warning {
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.25);
}

.card-shadow-danger {
  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.25);
}

.card-shadow-info {
  box-shadow: 0 4px 15px rgba(13, 202, 240, 0.25);
}

.card-shadow-dark {
  box-shadow: 0 4px 15px rgba(33, 37, 41, 0.25);
}

.card-shadow-light {
  box-shadow: 0 4px 15px rgba(248, 249, 250, 0.5);
}

/* Card border variants - Bootstrap-Vue-Next */
.card.border-primary,
.card.border-secondary,
.card.border-success,
.card.border-danger,
.card.border-warning,
.card.border-info,
.card.border-dark,
.card.border-light {
  border-width: 2px;
  transition: all 0.3s ease;
}

.card.border-primary:hover,
.card.border-secondary:hover,
.card.border-success:hover,
.card.border-danger:hover,
.card.border-warning:hover,
.card.border-info:hover,
.card.border-dark:hover,
.card.border-light:hover {
  border-width: 3px;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Ensure border colors are distinct */
.card.border-primary {
  border-color: #0d6efd !important;
}

.card.border-secondary {
  border-color: #6c757d !important;
}

.card.border-success {
  border-color: #198754 !important;
}

.card.border-danger {
  border-color: #dc3545 !important;
}

.card.border-warning {
  border-color: #ffc107 !important;
}

.card.border-info {
  border-color: #0dcaf0 !important;
}

.card.border-dark {
  border-color: #212529 !important;
}

.card.border-light {
  border-color: #f8f9fa !important;
}

/* Button interactions */
.btn.active {
  transform: scale(0.95);
  transition: transform 0.15s ease;
}

/* Card subtitle styling */
.card-subtitle {
  color: #6c757d;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

/* Card link styling */
.card-link {
  color: #0d6efd;
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.15s ease;
}

.card-link:hover {
  color: #0a58ca;
  text-decoration: underline;
}

/* Image overlay enhancements */
.card-img-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
}

/* Enhanced background cards */
.bg-primary.card:hover,
.text-bg-primary.card:hover {
  background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%) !important;
}

.bg-success.card:hover,
.text-bg-success.card:hover {
  background: linear-gradient(135deg, #198754 0%, #146c43 100%) !important;
}

.bg-danger.card:hover,
.text-bg-danger.card:hover {
  background: linear-gradient(135deg, #dc3545 0%, #b02a37 100%) !important;
}

.bg-warning.card:hover,
.text-bg-warning.card:hover {
  background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%) !important;
}

.bg-info.card:hover,
.text-bg-info.card:hover {
  background: linear-gradient(135deg, #0dcaf0 0%, #31d2f2 100%) !important;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .card {
    margin-bottom: 1.5rem;
  }

  .card:hover {
    transform: translateY(-2px);
  }

  .btn {
    width: 100%;
    margin-top: 0.5rem;
  }
}

/* Animation for card stats */
@keyframes bounce {
  0%,
  20%,
  60%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
}

.btn.active {
  animation: bounce 0.6s ease;
}

/* Enhanced card header and footer */
.card-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-bottom: 1px solid #dee2e6;
  font-weight: 600;
}

.card-footer {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-top: 1px solid #dee2e6;
  color: #6c757d;
}

/* Card title enhancements */
.card-title {
  color: #212529;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

/* Special treatment for center and end aligned cards */
.text-center .card-title,
.text-end .card-title {
  position: relative;
}

.text-center .card-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: #0d6efd;
}

.text-end .card-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  right: 0;
  width: 50px;
  height: 2px;
  background: #6c757d;
}
</style>
