<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="content">
      <!-- Grid Rows Layout -->
      <div class="main-card mb-3 card">
        <div class="card-header">
          <div class="card-header-title font-size-lg text-capitalize fw-normal">
            <i class="header-icon pe-7s-albums icon-gradient bg-love-kiss"></i>
            Grid Rows Layout
          </div>
        </div>
        <div class="card-body">
          <p class="text-muted mb-4">Form fields arranged in a grid layout with responsive columns.</p>

          <form @submit.prevent="submitGridForm">
            <b-row>
              <b-col md="6">
                <div class="position-relative mb-3">
                  <label for="gridEmail" class="form-label">Email Address</label>
                  <b-form-input
                    id="gridEmail"
                    v-model="gridForm.email"
                    type="email"
                    placeholder="Enter your email"
                    :state="getValidationState('email')"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback> Please enter a valid email address. </b-form-invalid-feedback>
                </div>
              </b-col>
              <b-col md="6">
                <div class="position-relative mb-3">
                  <label for="gridPassword" class="form-label">Password</label>
                  <b-form-input
                    id="gridPassword"
                    v-model="gridForm.password"
                    type="password"
                    placeholder="Enter password"
                    :state="getValidationState('password')"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback> Password must be at least 6 characters. </b-form-invalid-feedback>
                </div>
              </b-col>
            </b-row>

            <div class="position-relative mb-3">
              <label for="gridAddress" class="form-label">Address</label>
              <b-form-input
                id="gridAddress"
                v-model="gridForm.address"
                placeholder="1234 Main St"
                required
              ></b-form-input>
            </div>

            <div class="position-relative mb-3">
              <label for="gridAddress2" class="form-label">Address 2</label>
              <b-form-input
                id="gridAddress2"
                v-model="gridForm.address2"
                placeholder="Apartment, studio, or floor"
              ></b-form-input>
            </div>

            <b-row>
              <b-col md="6">
                <div class="position-relative mb-3">
                  <label for="gridCity" class="form-label">City</label>
                  <b-form-input id="gridCity" v-model="gridForm.city" required></b-form-input>
                </div>
              </b-col>
              <b-col md="4">
                <div class="position-relative mb-3">
                  <label for="gridState" class="form-label">State</label>
                  <b-form-select
                    id="gridState"
                    v-model="gridForm.state"
                    :options="stateOptions"
                    required
                  ></b-form-select>
                </div>
              </b-col>
              <b-col md="2">
                <div class="position-relative mb-3">
                  <label for="gridZip" class="form-label">Zip</label>
                  <b-form-input id="gridZip" v-model="gridForm.zip" placeholder="12345" required></b-form-input>
                </div>
              </b-col>
            </b-row>

            <div class="position-relative mb-3">
              <b-form-checkbox id="gridCheck" v-model="gridForm.acceptTerms" required>
                I agree to the terms and conditions
              </b-form-checkbox>
            </div>

            <div class="d-flex flex-wrap justify-content-between">
              <b-button type="submit" variant="primary" class="mb-2">
                <i class="fas fa-user-plus me-2"></i>
                Create Account
              </b-button>
              <b-button type="button" variant="outline-secondary" @click="resetGridForm" class="mb-2">
                <i class="fas fa-undo me-2"></i>
                Reset
              </b-button>
            </div>
          </form>
        </div>
      </div>

      <!-- Inline Layout -->
      <div class="main-card mb-3 card">
        <div class="card-header">
          <div class="card-header-title font-size-lg text-capitalize fw-normal">
            <i class="header-icon pe-7s-albums icon-gradient bg-amy-crisp"></i>
            Inline Layout
          </div>
        </div>
        <div class="card-body">
          <p class="text-muted mb-4">Form fields arranged horizontally in a single row.</p>

          <form @submit.prevent="submitInlineForm" class="mb-4">
            <div class="row align-items-end">
              <div class="col-md-5">
                <label for="inlineEmail" class="form-label">Email</label>
                <b-form-input
                  id="inlineEmail"
                  v-model="inlineForm.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </div>
              <div class="col-md-5">
                <label for="inlinePassword" class="form-label">Password</label>
                <b-form-input
                  id="inlinePassword"
                  v-model="inlineForm.password"
                  type="password"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </div>
              <div class="col-md-2">
                <b-button type="submit" variant="primary" class="w-100">
                  <i class="fas fa-sign-in-alt me-2"></i>
                  Sign In
                </b-button>
              </div>
            </div>
          </form>

          <div class="divider mb-4"></div>

          <div class="mb-4">
            <h6 class="mb-3">Inline Checkboxes</h6>
            <div class="row">
              <div class="col-12">
                <b-form-checkbox v-model="inlineForm.newsletter" inline class="me-3">
                  Subscribe to newsletter
                </b-form-checkbox>
                <b-form-checkbox v-model="inlineForm.notifications" inline class="me-3">
                  Enable notifications
                </b-form-checkbox>
                <b-form-checkbox v-model="inlineForm.marketing" inline class="me-3"> Marketing emails </b-form-checkbox>
              </div>
            </div>
          </div>

          <div class="divider mb-4"></div>

          <form @submit.prevent="submitQuickForm">
            <div class="row align-items-center">
              <div class="col-md-4">
                <b-form-input v-model="quickForm.email" type="email" placeholder="Email" required></b-form-input>
              </div>
              <div class="col-md-4">
                <b-form-input
                  v-model="quickForm.password"
                  type="password"
                  placeholder="Password"
                  required
                ></b-form-input>
              </div>
              <div class="col-md-4">
                <b-button type="submit" variant="success" class="w-100">
                  <i class="fas fa-rocket me-2"></i>
                  Quick Submit
                </b-button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Horizontal Layout -->
      <div class="main-card mb-3 card">
        <div class="card-header">
          <div class="card-header-title font-size-lg text-capitalize fw-normal">
            <i class="header-icon pe-7s-albums icon-gradient bg-happy-fisher"></i>
            Horizontal Layout
          </div>
        </div>
        <div class="card-body">
          <p class="text-muted mb-4">Form fields with labels positioned to the left of inputs.</p>

          <form @submit.prevent="submitHorizontalForm">
            <b-row class="mb-3">
              <label for="horizontalEmail" class="col-sm-3 col-form-label">Email Address</label>
              <b-col sm="9">
                <b-form-input
                  id="horizontalEmail"
                  v-model="horizontalForm.email"
                  type="email"
                  placeholder="Enter your email"
                  :state="getHorizontalValidationState('email')"
                  required
                ></b-form-input>
                <b-form-invalid-feedback> Please enter a valid email address. </b-form-invalid-feedback>
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label for="horizontalPassword" class="col-sm-3 col-form-label">Password</label>
              <b-col sm="9">
                <b-form-input
                  id="horizontalPassword"
                  v-model="horizontalForm.password"
                  type="password"
                  placeholder="Enter password"
                  :state="getHorizontalValidationState('password')"
                  required
                ></b-form-input>
                <b-form-invalid-feedback> Password must be at least 6 characters. </b-form-invalid-feedback>
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label for="horizontalSelect" class="col-sm-3 col-form-label">Department</label>
              <b-col sm="9">
                <b-form-select
                  id="horizontalSelect"
                  v-model="horizontalForm.department"
                  :options="departmentOptions"
                  required
                ></b-form-select>
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label for="horizontalSelectMulti" class="col-sm-3 col-form-label">Skills</label>
              <b-col sm="9">
                <b-form-select
                  id="horizontalSelectMulti"
                  v-model="horizontalForm.skills"
                  :options="skillOptions"
                  multiple
                  :select-size="4"
                ></b-form-select>
                <small class="form-text text-muted">Hold Ctrl/Cmd to select multiple options</small>
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label for="horizontalTextarea" class="col-sm-3 col-form-label">Bio</label>
              <b-col sm="9">
                <b-form-textarea
                  id="horizontalTextarea"
                  v-model="horizontalForm.bio"
                  placeholder="Tell us about yourself..."
                  rows="4"
                ></b-form-textarea>
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label for="horizontalFile" class="col-sm-3 col-form-label">Resume</label>
              <b-col sm="9">
                <b-form-file
                  id="horizontalFile"
                  v-model="horizontalForm.file"
                  accept=".pdf,.doc,.docx"
                  placeholder="Choose file or drop here..."
                ></b-form-file>
                <small class="form-text text-muted">Upload your resume (PDF, DOC, or DOCX format)</small>
              </b-col>
            </b-row>

            <fieldset class="mb-3">
              <b-row>
                <legend class="col-form-label col-sm-3 pt-0">Experience Level</legend>
                <b-col sm="9">
                  <b-form-radio-group
                    v-model="horizontalForm.experience"
                    :options="experienceOptions"
                    stacked
                  ></b-form-radio-group>
                </b-col>
              </b-row>
            </fieldset>

            <b-row class="mb-3">
              <b-col sm="9" offset-sm="3">
                <b-form-checkbox v-model="horizontalForm.available">
                  I am available for immediate hire
                </b-form-checkbox>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="9" offset-sm="3">
                <div class="d-flex flex-wrap">
                  <b-button type="submit" variant="primary" class="me-2 mb-2">
                    <i class="fas fa-paper-plane me-2"></i>
                    Submit Application
                  </b-button>
                  <b-button type="button" variant="outline-secondary" @click="resetHorizontalForm" class="mb-2">
                    <i class="fas fa-undo me-2"></i>
                    Reset
                  </b-button>
                </div>
              </b-col>
            </b-row>
          </form>
        </div>
      </div>

      <!-- Advanced Layout Examples -->
      <div class="main-card mb-3 card">
        <div class="card-header">
          <div class="card-header-title font-size-lg text-capitalize fw-normal">
            <i class="header-icon pe-7s-albums icon-gradient bg-plum-plate"></i>
            Advanced Layout Examples
          </div>
        </div>
        <div class="card-body">
          <b-row>
            <b-col md="6">
              <div class="mb-4">
                <h6 class="mb-3">Input Groups</h6>
                <div class="mb-3">
                  <label for="websiteInput" class="form-label">Website</label>
                  <b-input-group>
                    <template #prepend>
                      <b-input-group-text>https://</b-input-group-text>
                    </template>
                    <b-form-input
                      id="websiteInput"
                      v-model="advancedForm.website"
                      placeholder="example.com"
                    ></b-form-input>
                  </b-input-group>
                </div>

                <div class="mb-3">
                  <label for="priceInput" class="form-label">Price</label>
                  <b-input-group>
                    <template #prepend>
                      <b-input-group-text>$</b-input-group-text>
                    </template>
                    <b-form-input
                      id="priceInput"
                      v-model="advancedForm.price"
                      type="number"
                      placeholder="0.00"
                    ></b-form-input>
                    <template #append>
                      <b-input-group-text>.00</b-input-group-text>
                    </template>
                  </b-input-group>
                </div>

                <div class="mb-3">
                  <label for="searchInput" class="form-label">Search</label>
                  <b-input-group>
                    <b-form-input id="searchInput" v-model="advancedForm.search" placeholder="Search..."></b-form-input>
                    <template #append>
                      <b-button variant="outline-secondary" class="search-button">
                        <font-awesome-icon icon="search" />
                      </b-button>
                    </template>
                  </b-input-group>
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="mb-4">
                <h6 class="mb-3">Form Controls</h6>
                <div class="mb-3">
                  <label for="rangeInput" class="form-label">Range: {{ advancedForm.range }}</label>
                  <b-form-input
                    id="rangeInput"
                    v-model="advancedForm.range"
                    type="range"
                    min="0"
                    max="100"
                  ></b-form-input>
                </div>

                <div class="mb-3">
                  <label for="colorInput" class="form-label">Color</label>
                  <b-form-input id="colorInput" v-model="advancedForm.color" type="color"></b-form-input>
                </div>

                <div class="mb-3">
                  <label for="dateInput" class="form-label">Date</label>
                  <b-form-input id="dateInput" v-model="advancedForm.date" type="date"></b-form-input>
                </div>
              </div>
            </b-col>
          </b-row>

          <div class="alert alert-info">
            <h6 class="mb-2">💡 Form Layout Tips:</h6>
            <ul class="mb-0">
              <li><strong>Grid Layout:</strong> Use rows and columns for complex forms</li>
              <li><strong>Inline Layout:</strong> Best for simple forms with few fields</li>
              <li><strong>Horizontal Layout:</strong> Professional look for detailed forms</li>
              <li><strong>Validation:</strong> Always provide clear feedback to users</li>
              <li><strong>Mobile First:</strong> Design forms to work on all screen sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../Layout/Components/PageTitle.vue'

export default {
  name: 'FormLayouts',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Form Layouts',
      subheading: 'Build whatever layout you need with our comprehensive form components.',
      icon: 'pe-7s-graph text-success',

      // Grid Form Data
      gridForm: {
        email: '',
        password: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        acceptTerms: false
      },

      // Inline Form Data
      inlineForm: {
        email: '',
        password: '',
        newsletter: false,
        notifications: true,
        marketing: false
      },

      // Quick Form Data
      quickForm: {
        email: '',
        password: ''
      },

      // Horizontal Form Data
      horizontalForm: {
        email: '',
        password: '',
        department: '',
        skills: [],
        bio: '',
        file: null,
        experience: '',
        available: false
      },

      // Advanced Form Data
      advancedForm: {
        website: '',
        price: '',
        search: '',
        range: 50,
        color: '#007bff',
        date: ''
      },

      // Form Options
      stateOptions: [
        { value: '', text: 'Choose state...' },
        { value: 'ca', text: 'California' },
        { value: 'ny', text: 'New York' },
        { value: 'tx', text: 'Texas' },
        { value: 'fl', text: 'Florida' },
        { value: 'wa', text: 'Washington' }
      ],

      departmentOptions: [
        { value: '', text: 'Select department...' },
        { value: 'engineering', text: 'Engineering' },
        { value: 'design', text: 'Design' },
        { value: 'marketing', text: 'Marketing' },
        { value: 'sales', text: 'Sales' },
        { value: 'support', text: 'Support' }
      ],

      skillOptions: [
        { value: 'vue', text: 'Vue.js' },
        { value: 'react', text: 'React' },
        { value: 'angular', text: 'Angular' },
        { value: 'node', text: 'Node.js' },
        { value: 'python', text: 'Python' },
        { value: 'java', text: 'Java' },
        { value: 'php', text: 'PHP' },
        { value: 'design', text: 'UI/UX Design' }
      ],

      experienceOptions: [
        { text: 'Entry Level (0-2 years)', value: 'entry' },
        { text: 'Mid Level (3-5 years)', value: 'mid' },
        { text: 'Senior Level (6+ years)', value: 'senior' },
        { text: 'Lead/Manager (8+ years)', value: 'lead' }
      ]
    }
  },

  methods: {
    // Grid Form Methods
    submitGridForm() {
      if (this.validateGridForm()) {
        alert('Grid form submitted successfully!')
        // Handle form submission
        // Form data available in this.gridForm
      }
    },

    validateGridForm() {
      return (
        this.gridForm.email &&
        this.gridForm.password.length >= 6 &&
        this.gridForm.address &&
        this.gridForm.city &&
        this.gridForm.state &&
        this.gridForm.zip &&
        this.gridForm.acceptTerms
      )
    },

    getValidationState(field) {
      if (field === 'email') {
        return this.gridForm.email ? (this.isValidEmail(this.gridForm.email) ? true : false) : null
      }
      if (field === 'password') {
        return this.gridForm.password ? (this.gridForm.password.length >= 6 ? true : false) : null
      }
      return null
    },

    resetGridForm() {
      this.gridForm = {
        email: '',
        password: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        acceptTerms: false
      }
    },

    // Inline Form Methods
    submitInlineForm() {
      if (this.inlineForm.email && this.inlineForm.password) {
        alert('Inline form submitted successfully!')
        // Form data available in this.inlineForm
      }
    },

    submitQuickForm() {
      if (this.quickForm.email && this.quickForm.password) {
        alert('Quick form submitted successfully!')
        // Form data available in this.quickForm
      }
    },

    // Horizontal Form Methods
    submitHorizontalForm() {
      if (this.validateHorizontalForm()) {
        alert('Horizontal form submitted successfully!')
        // Form data available in this.horizontalForm
      }
    },

    validateHorizontalForm() {
      return (
        this.horizontalForm.email &&
        this.horizontalForm.password.length >= 6 &&
        this.horizontalForm.department &&
        this.horizontalForm.experience
      )
    },

    getHorizontalValidationState(field) {
      if (field === 'email') {
        return this.horizontalForm.email ? (this.isValidEmail(this.horizontalForm.email) ? true : false) : null
      }
      if (field === 'password') {
        return this.horizontalForm.password ? (this.horizontalForm.password.length >= 6 ? true : false) : null
      }
      return null
    },

    resetHorizontalForm() {
      this.horizontalForm = {
        email: '',
        password: '',
        department: '',
        skills: [],
        bio: '',
        file: null,
        experience: '',
        available: false
      }
    },

    // Utility Methods
    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
  }
}
</script>

<style>
/* Global CSS to fix BootstrapVueNext BFormFile component styling - Bootstrap 5 compliant */

/* Target all file input pseudo-elements with comprehensive browser support */
input[type='file']::file-selector-button,
input[type='file']::-webkit-file-upload-button,
input[type='file']::-moz-file-upload-button {
  padding: 0.375rem 0.75rem !important;
  margin: -0.375rem -0.75rem !important;
  margin-inline-end: 0.75rem !important;
  color: #212529 !important;
  background-color: #e9ecef !important;
  border: 1px solid #ced4da !important;
  border-right: 1px solid #ced4da !important;
  border-radius: 0.375rem 0 0 0.375rem !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
  font-size: 1rem !important;
  font-family: inherit !important;
  cursor: pointer !important;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out !important;
}

/* Hover effects for file input buttons */
input[type='file']:hover::file-selector-button,
input[type='file']:hover::-webkit-file-upload-button {
  background-color: #ddd6fe !important;
}

/* Ensure the file input itself has proper Bootstrap 5 styling */
input[type='file'] {
  border: 1px solid #ced4da !important;
  border-radius: 0.375rem !important;
  padding: 0.375rem 0.75rem !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  color: #212529 !important;
  background-color: #fff !important;
}

/* Specific targeting for the horizontal file input */
#horizontalFile {
  border: 1px solid #ced4da !important;
  border-radius: 0.375rem !important;
  padding: 0.375rem 0.75rem !important;
}
</style>

<style scoped>
/* Custom form styling */
.form-label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  min-height: 2.25rem;
}

.divider {
  height: 1px;
  background-color: #e9ecef;
  margin: 1rem 0;
}

/* Input group styling */
.input-group-text {
  background-color: #f8f9fa;
  border-color: #ced4da;
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.5;
  min-height: 2.25rem;
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
}

/* Form validation styling */
.is-invalid {
  border-color: #dc3545;
}

.is-valid {
  border-color: #28a745;
}

/* Button spacing */
.btn + .btn {
  margin-left: 0.5rem;
}

/* Enhanced form layout styling */
.row {
  margin-bottom: 1rem;
}

.row:last-child {
  margin-bottom: 0;
}

/* Advanced Layout Examples specific styling */
.main-card .card-body h6 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;
}

/* Ensure form controls in Advanced Layout have consistent height */
.form-control,
.form-select,
.input-group .form-control {
  min-height: 2.25rem;
  font-size: 1rem;
}

/* Bootstrap 5 Input Group Fixes - consistent with Controls.vue */
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

/* Fix double borders by using negative margins (Bootstrap 5 approach) */
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}

/* Use negative margins to overlap borders and eliminate double borders */
.input-group > .form-control + .form-control,
.input-group > .form-control + .form-select,
.input-group > .form-control + .input-group-text,
.input-group > .form-control + .btn,
.input-group > .form-select + .form-control,
.input-group > .form-select + .form-select,
.input-group > .form-select + .input-group-text,
.input-group > .form-select + .btn,
.input-group > .input-group-text + .form-control,
.input-group > .input-group-text + .form-select,
.input-group > .input-group-text + .input-group-text,
.input-group > .input-group-text + .btn,
.input-group > .btn + .form-control,
.input-group > .btn + .form-select,
.input-group > .btn + .input-group-text,
.input-group > .btn + .btn {
  margin-left: -1px;
}

/* Remove border radius from middle elements */
.input-group > .form-control:not(:first-child):not(:last-child),
.input-group > .form-select:not(:first-child):not(:last-child),
.input-group > .input-group-text:not(:first-child):not(:last-child),
.input-group > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}

/* Remove right border radius from first element when not last */
.input-group > .form-control:not(:last-child),
.input-group > .form-select:not(:last-child),
.input-group > .input-group-text:not(:last-child),
.input-group > .btn:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

/* Remove left border radius from last element when not first */
.input-group > .form-control:not(:first-child),
.input-group > .form-select:not(:first-child),
.input-group > .input-group-text:not(:first-child),
.input-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Input group text styling with Bootstrap 5 defaults */
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
}

/* Button styling in input groups */
.input-group > .btn {
  position: relative;
  z-index: 2;
  min-height: 2.25rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
}

/* Focus states - bring focused element to top */
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 5;
}

.input-group .btn:focus {
  z-index: 5;
}

/* Search button specific styling */
.search-button {
  min-width: 2.25rem;
  min-height: 2.25rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0.375rem 0.75rem !important;
}

.search-button svg,
.search-button i {
  font-size: 0.875rem;
  width: 0.875rem;
  height: 0.875rem;
  color: #6c757d;
}

.search-button:hover svg,
.search-button:hover i {
  color: #495057;
}

/* Bootstrap 5 File Input Styling - BootstrapVueNext compatible */
.form-control[type='file']:not(:disabled):not([readonly]) {
  cursor: pointer;
}

.form-control[type='file'] {
  overflow: hidden;
}

/* Modern browsers (Chrome 89+, Firefox 82+) - NEW STANDARD - High Specificity */
.form-control[type='file']::file-selector-button,
input.form-control[type='file']::file-selector-button {
  padding: 0.375rem 0.75rem !important;
  margin: -0.375rem -0.75rem !important;
  margin-inline-end: 0.75rem !important;
  color: #212529 !important;
  background-color: #e9ecef !important;
  cursor: pointer !important;
  border: 0 !important;
  border-inline-end: 1px solid #ced4da !important;
  border-radius: 0 !important;
  transition: background-color 0.15s ease-in-out !important;
  font-size: 1rem !important;
  font-family: inherit !important;
}

.form-control[type='file']:hover::file-selector-button,
input.form-control[type='file']:hover::file-selector-button {
  background-color: #ddd6fe !important;
}

.form-control[type='file']:not(:disabled):not([readonly])::-webkit-file-upload-button,
input.form-control[type='file']:not(:disabled):not([readonly])::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem !important;
  margin: -0.375rem -0.75rem !important;
  margin-inline-end: 0.75rem !important;
  color: #212529 !important;
  background-color: #e9ecef !important;
  cursor: pointer !important;
  border: 0 !important;
  border-inline-end: 1px solid #ced4da !important;
  border-radius: 0 !important;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out !important;
  font-size: 1rem !important;
  font-family: inherit !important;
}

.form-control[type='file']:hover:not(:disabled):not([readonly])::-webkit-file-upload-button,
input.form-control[type='file']:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #ddd6fe !important;
}

.form-control[type='file']::-webkit-file-upload-button,
input.form-control[type='file']::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem !important;
  margin: -0.375rem -0.75rem !important;
  margin-inline-end: 0.75rem !important;
  color: #212529 !important;
  background-color: #e9ecef !important;
  cursor: pointer !important;
  border: 0 !important;
  border-inline-end: 1px solid #ced4da !important;
  border-radius: 0 !important;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out !important;
  font-size: 1rem !important;
  font-family: inherit !important;
}

.form-control-sm[type='file']::-webkit-file-upload-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg[type='file']::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

/* Modern browser size variants for file selector button */
.form-control-sm[type='file']::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg[type='file']::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

/* Firefox file upload button styling - High Specificity */
.form-control[type='file']::-moz-file-upload-button,
input.form-control[type='file']::-moz-file-upload-button {
  padding: 0.375rem 0.75rem !important;
  margin: -0.375rem -0.75rem !important;
  margin-inline-end: 0.75rem !important;
  color: #212529 !important;
  background-color: #e9ecef !important;
  cursor: pointer !important;
  border: 0 !important;
  border-inline-end: 1px solid #ced4da !important;
  border-radius: 0 !important;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out !important;
  font-size: 1rem !important;
  font-family: inherit !important;
}

/* BootstrapVueNext specific file input fixes */
.form-file .form-file-button {
  padding: 0.375rem 0.75rem;
  margin-left: -1px;
  color: #212529;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.375rem 0 0 0.375rem;
}

.form-file .form-control {
  border-radius: 0 0.375rem 0.375rem 0;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .col-md-5,
  .col-md-4,
  .col-md-2 {
    margin-bottom: 1rem;
  }

  .offset-sm-3 {
    margin-left: 0;
  }

  .d-flex.justify-content-between {
    flex-direction: column;
  }

  .d-flex.justify-content-between .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

/* Alert styling */
.alert ul {
  padding-left: 1.25rem;
  margin-bottom: 0;
}

.alert li {
  margin-bottom: 0.25rem;
}

/* Range input styling */
input[type='range'] {
  width: 100%;
}

/* Color input styling */
input[type='color'] {
  width: 100%;
  height: 38px;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
}

/* File input styling */
.form-file-input {
  cursor: pointer;
}

/* Multi-select styling */
select[multiple] {
  height: auto;
}

/* Form check spacing */
.form-check {
  margin-bottom: 0.5rem;
}

/* Legend styling */
legend {
  font-size: 1rem;
  font-weight: 500;
  color: #495057;
}

/* Inline checkbox improvements */
.form-check-inline {
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

/* Input group styling */
.input-group {
  margin-bottom: 1rem;
}

.input-group:last-child {
  margin-bottom: 0;
}

/* Horizontal form improvements */
.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-weight: 500;
}

/* Button group alignment */
.d-flex.flex-wrap .btn {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.d-flex.flex-wrap .btn:last-child {
  margin-right: 0;
}
</style>
