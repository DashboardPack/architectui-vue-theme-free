<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-layers icon-gradient bg-love-kiss"></i>
              Simple Collapse
            </div>
          </b-card-header>
          <b-card-body>
            <p class="text-muted mb-3">Basic collapse functionality with toggle buttons.</p>
            <b-button @click="toggleCollapse('collapse1')" variant="primary" class="mb-3">
              <i class="fas fa-chevron-down" :class="{ 'fa-rotate-180': collapseStates.collapse1 }"></i>
              Toggle Collapse
            </b-button>
            <b-collapse :visible="collapseStates.collapse1" id="collapse1">
              <b-card class="border-primary">
                <p class="card-text">
                  This is a collapsible content area. You can put any content here including text, images, forms, or
                  other components.
                </p>
                <b-button @click="toggleCollapse('collapse1_inner')" size="sm" variant="outline-primary">
                  <i class="fas fa-chevron-down" :class="{ 'fa-rotate-180': collapseStates.collapse1_inner }"></i>
                  Toggle Nested Collapse
                </b-button>
                <b-collapse :visible="collapseStates.collapse1_inner" id="collapse1_inner" class="mt-2">
                  <b-card class="border-success">
                    <small class="text-muted">Nested collapse content - collapsible components can be nested!</small>
                  </b-card>
                </b-collapse>
              </b-card>
            </b-collapse>
          </b-card-body>
        </b-card>

        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-layers icon-gradient bg-amy-crisp"></i>
              Multiple Collapse
            </div>
          </b-card-header>
          <b-card-body>
            <p class="text-muted mb-3">Control multiple collapse elements simultaneously.</p>
            <b-button @click="toggleMultipleCollapse(['collapseA', 'collapseB'])" variant="success" class="mb-3">
              <i class="fas fa-expand-alt"></i>
              Toggle Both Sections
            </b-button>
            <b-collapse :visible="collapseStates.collapseA" id="collapseA" class="mb-2">
              <b-card class="border-success">
                <b-card-header class="py-2">
                  <h6 class="mb-0">Section A</h6>
                </b-card-header>
                <b-card-body>
                  <p class="mb-0">
                    Content for section A. This demonstrates how multiple collapse elements can be controlled together.
                  </p>
                </b-card-body>
              </b-card>
            </b-collapse>
            <b-collapse :visible="collapseStates.collapseB" id="collapseB">
              <b-card class="border-success">
                <b-card-header class="py-2">
                  <h6 class="mb-0">Section B</h6>
                </b-card-header>
                <b-card-body>
                  <p class="mb-0">
                    Content for section B. Both sections will toggle together when using the button above.
                  </p>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card-body>
        </b-card>

        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-layers icon-gradient bg-happy-fisher"></i>
              Initially Open
            </div>
          </b-card-header>
          <b-card-body>
            <p class="text-muted mb-3">Collapse element that starts in the open state.</p>
            <b-button @click="toggleCollapse('collapse3')" variant="warning" class="mb-3">
              <i class="fas fa-chevron-down" :class="{ 'fa-rotate-180': collapseStates.collapse3 }"></i>
              Toggle (Starts Open)
            </b-button>
            <b-collapse :visible="collapseStates.collapse3" id="collapse3">
              <b-card class="border-warning">
                <div class="alert alert-warning mb-0">
                  <h6 class="mb-1">👋 Initially Visible</h6>
                  <p class="mb-0">
                    This collapse element starts in the open state by default. The <code>visible</code> prop was set to
                    <code>true</code> initially.
                  </p>
                </div>
              </b-card>
            </b-collapse>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-accordion icon-gradient bg-plum-plate"></i>
              Accordion Behavior
            </div>
          </b-card-header>
          <b-card-body>
            <p class="text-muted mb-3">
              True accordion behavior - only one panel open at a time.
              <strong>Click the headers below to toggle panels.</strong>
            </p>
            <div role="tablist" class="accordion-container">
              <b-card no-body class="mb-1 accordion-item">
                <b-card-header class="p-0" role="tab">
                  <b-button
                    @click="toggleAccordion('accordion1')"
                    class="accordion-header w-100 text-start"
                    :class="{ 'accordion-active': accordionStates.accordion1 }"
                    variant="light"
                  >
                    <div class="ps-3 pe-3 py-2 d-flex justify-content-between align-items-center">
                      <div>
                        <i class="fas fa-star text-warning me-2"></i>
                        <strong>Getting Started</strong>
                      </div>
                      <i
                        class="fas fa-chevron-down accordion-arrow"
                        :class="{ 'fa-rotate-180': accordionStates.accordion1 }"
                      ></i>
                    </div>
                  </b-button>
                </b-card-header>
                <b-collapse :visible="accordionStates.accordion1" id="accordion1" role="tabpanel">
                  <b-card-body>
                    <div class="alert alert-info">
                      <h6 class="mb-2">🚀 Welcome to Accordions!</h6>
                      <p class="mb-0">
                        This panel starts open by default. Accordions are perfect for organizing content in a
                        space-efficient way.
                      </p>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1 accordion-item">
                <b-card-header class="p-0" role="tab">
                  <b-button
                    @click="toggleAccordion('accordion2')"
                    class="accordion-header w-100 text-start"
                    :class="{ 'accordion-active': accordionStates.accordion2 }"
                    variant="light"
                  >
                    <div class="ps-3 pe-3 py-2 d-flex justify-content-between align-items-center">
                      <div>
                        <i class="fas fa-cog text-primary me-2"></i>
                        <strong>Configuration</strong>
                      </div>
                      <i
                        class="fas fa-chevron-down accordion-arrow"
                        :class="{ 'fa-rotate-180': accordionStates.accordion2 }"
                      ></i>
                    </div>
                  </b-button>
                </b-card-header>
                <b-collapse :visible="accordionStates.accordion2" id="accordion2" role="tabpanel">
                  <b-card-body>
                    <h6>Configuration Options</h6>
                    <ul class="mb-0">
                      <li><code>visible</code> - Controls open/closed state</li>
                      <li><code>accordion</code> - Enables accordion behavior</li>
                      <li><code>animation</code> - Smooth transitions</li>
                      <li><code>appear</code> - Animation on initial render</li>
                    </ul>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1 accordion-item">
                <b-card-header class="p-0" role="tab">
                  <b-button
                    @click="toggleAccordion('accordion3')"
                    class="accordion-header w-100 text-start"
                    :class="{ 'accordion-active': accordionStates.accordion3 }"
                    variant="light"
                  >
                    <div class="ps-3 pe-3 py-2 d-flex justify-content-between align-items-center">
                      <div>
                        <i class="fas fa-code text-success me-2"></i>
                        <strong>Code Example</strong>
                      </div>
                      <i
                        class="fas fa-chevron-down accordion-arrow"
                        :class="{ 'fa-rotate-180': accordionStates.accordion3 }"
                      ></i>
                    </div>
                  </b-button>
                </b-card-header>
                <b-collapse :visible="accordionStates.accordion3" id="accordion3" role="tabpanel">
                  <b-card-body>
                    <h6>Basic Implementation</h6>
                    <pre class="bg-light p-3 rounded small"><code>&lt;b-collapse :visible="isOpen" id="my-collapse"&gt;
  &lt;b-card&gt;
    Collapsible content here
  &lt;/b-card&gt;
&lt;/b-collapse&gt;</code></pre>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-card-body>
        </b-card>

        <b-card class="main-card mb-3">
          <b-card-header>
            <div class="card-header-title font-size-lg text-capitalize fw-normal">
              <i class="header-icon lnr-question-circle icon-gradient bg-strong-bliss"></i>
              FAQ Style
            </div>
          </b-card-header>
          <b-card-body>
            <p class="text-muted mb-3">Frequently Asked Questions style accordion.</p>
            <div role="tablist" class="faq-container">
              <div class="faq-item mb-2" v-for="(faq, index) in faqs" :key="index">
                <div
                  @click="toggleFaq(index)"
                  class="faq-question p-3 border rounded cursor-pointer d-flex justify-content-between align-items-center"
                  :class="{ 'faq-active': faq.isOpen }"
                >
                  <div class="faq-question-text">
                    <strong>{{ faq.question }}</strong>
                  </div>
                  <div class="faq-arrow-container">
                    <i class="pe-7s-angle-down faq-arrow" :class="{ 'faq-arrow-open': faq.isOpen }"></i>
                  </div>
                </div>
                <b-collapse :visible="faq.isOpen" :id="'faq-' + index">
                  <div class="faq-answer p-3 border-start border-end border-bottom rounded-bottom">
                    {{ faq.answer }}
                  </div>
                </b-collapse>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: 'Accordions',
    subheading: 'Accordions represent collapsable component with extended functionality.',
    icon: 'pe-7s-diamond icon-gradient bg-warm-flame',
    collapseStates: {
      collapse1: false,
      collapse1_inner: false,
      collapseA: false,
      collapseB: false,
      collapse3: true // starts opened
    },
    accordionStates: {
      accordion1: true, // starts opened
      accordion2: false,
      accordion3: false
    },
    faqs: [
      {
        question: 'What are Bootstrap Vue accordions?',
        answer:
          'Bootstrap Vue accordions are collapsible components that allow you to organize content in a space-efficient way. They consist of headers that can be clicked to show or hide associated content panels.',
        isOpen: false
      },
      {
        question: 'How do I implement accordion behavior?',
        answer:
          'To implement true accordion behavior (where only one panel can be open at a time), you need to manage the state of all panels and ensure that when one opens, all others close. This is typically done in the toggle method.',
        isOpen: false
      },
      {
        question: 'Can I have multiple accordions on the same page?',
        answer:
          'Yes, you can have multiple accordion components on the same page. Each accordion group should have its own state management to avoid conflicts between different accordion sections.',
        isOpen: false
      },
      {
        question: 'Are accordions mobile-friendly?',
        answer:
          'Yes, Bootstrap Vue accordions are fully responsive and work well on mobile devices. They provide an excellent way to save space on smaller screens while maintaining full functionality.',
        isOpen: false
      },
      {
        question: 'Can I customize the accordion appearance?',
        answer:
          'Absolutely! You can customize accordions using CSS classes, custom styling, icons, colors, and animations. Bootstrap Vue provides many built-in options, and you can also add your own custom styles.',
        isOpen: false
      }
    ]
  }),
  methods: {
    toggleCollapse(collapseId) {
      this.collapseStates[collapseId] = !this.collapseStates[collapseId]
    },
    toggleMultipleCollapse(collapseIds) {
      collapseIds.forEach(id => {
        this.collapseStates[id] = !this.collapseStates[id]
      })
    },
    toggleAccordion(accordionId) {
      // For accordion behavior, close all others and open the clicked one
      const wasOpen = this.accordionStates[accordionId]

      // Close all accordion panels first
      Object.keys(this.accordionStates).forEach(key => {
        this.accordionStates[key] = false
      })

      // If the clicked panel was closed, open it
      if (!wasOpen) {
        this.accordionStates[accordionId] = true
      }
    },
    toggleFaq(index) {
      // Toggle the specific FAQ item
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>

<style scoped>
/* Accordion styling */
.accordion-container .accordion-item {
  border: 1px solid #e9ecef;
  border-radius: 0.375rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.accordion-header {
  cursor: pointer;
  transition: all 0.3s ease;
  border: none !important;
  border-bottom: 1px solid #e9ecef !important;
  background-color: #f8f9fa !important;
  user-select: none;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.accordion-header:hover {
  background-color: #e9ecef !important;
  border-bottom-color: #adb5bd !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}

.accordion-header.accordion-active {
  background-color: #e7f3ff !important;
  border-bottom-color: #b3d9ff !important;
  box-shadow: 0 1px 3px rgba(0, 123, 255, 0.1) !important;
}

.accordion-header.accordion-active:hover {
  background-color: #cce7ff !important;
}

.accordion-header:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
}

.accordion-arrow {
  transition: transform 0.3s ease;
}

/* FAQ styling */
.faq-container .faq-item {
  margin-bottom: 0.75rem;
}

.faq-question {
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef !important;
  background-color: #f8f9fa;
}

.faq-question:hover {
  background-color: #e9ecef;
  border-color: #dee2e6 !important;
}

.faq-question.faq-active {
  background-color: #e7f3ff;
  border-color: #b3d9ff !important;
}

.faq-answer {
  background-color: #fff;
  color: #6c757d;
  border-color: #e9ecef !important;
  border-top: none !important;
}

.faq-icon {
  transition: transform 0.3s ease;
  font-size: 0.875rem;
}

.faq-arrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
}

.faq-question:hover .faq-arrow-container {
  transform: scale(1.1);
}

.faq-arrow {
  transition: transform 0.3s ease;
  font-size: 1rem;
  color: #6c757d;
  display: inline-block;
}

.faq-arrow-open {
  transform: rotate(180deg);
}

.faq-question:hover .faq-arrow {
  color: #495057;
}

.faq-question.faq-active .faq-arrow {
  color: #0d6efd;
}

.cursor-pointer {
  cursor: pointer;
}

/* Collapse animation enhancements */
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Enhanced visual feedback */
.accordion-item:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-item:hover .faq-question {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
