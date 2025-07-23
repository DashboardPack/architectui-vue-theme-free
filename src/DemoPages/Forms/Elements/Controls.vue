<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Controls Types</h5>
            <b-form>
              <div class="mb-3">
                <label for="exampleEmail" class="form-label">Email</label>
                <b-form-input id="exampleEmail" type="email" placeholder="with a placeholder"></b-form-input>
              </div>
              <div class="mb-3">
                <label for="examplePassword" class="form-label">Password</label>
                <b-form-input id="examplePassword" type="password" placeholder="password placeholder"></b-form-input>
              </div>
              <div class="mb-3">
                <label for="exampleSelect" class="form-label">Select</label>
                <b-form-select id="exampleSelect" :options="['1', '2', '3', '4', '5']"></b-form-select>
              </div>
              <div class="mb-3">
                <label for="exampleSelectMulti" class="form-label">Select Multiple</label>
                <b-form-select id="exampleSelectMulti" multiple :options="['1', '2', '3', '4', '5']"></b-form-select>
              </div>
              <div class="mb-3">
                <label for="exampleText" class="form-label">Text Area</label>
                <b-form-textarea id="exampleText" rows="3"></b-form-textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFile" class="form-label">File</label>
                <b-form-file id="exampleFile"></b-form-file>
                <small class="form-text text-muted">
                  This is some placeholder block-level help text for the above input. It's a bit lighter and easily
                  wraps to a new line.
                </small>
              </div>
              <b-button variant="primary" type="submit" class="mt-1">Submit</b-button>
            </b-form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Sizing</h5>
            <b-form>
              <b-form-input size="lg" placeholder="Large input" class="mb-2"></b-form-input>
              <b-form-input placeholder="Default input" class="mb-2"></b-form-input>
              <b-form-input size="sm" placeholder="Small input" class="mb-2"></b-form-input>
              <div class="divider"></div>
              <b-form-select size="lg" :options="['Large Select']" class="mb-2"></b-form-select>
              <b-form-select :options="['Default Select']" class="mb-2"></b-form-select>
              <b-form-select size="sm" :options="['Small Select']"></b-form-select>
            </b-form>
          </div>
        </div>
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Checkboxes &amp; Radios</h5>
            <b-form>
              <b-form-radio-group
                v-model="formData.radio"
                :options="[
                  { text: 'Option one is this and that—be sure to include why it\'s great', value: 'option1' },
                  {
                    text: 'Option two can be something else and selecting it will deselect option one',
                    value: 'option2'
                  },
                  { text: 'Option three is disabled', value: 'option3', disabled: true }
                ]"
                name="radio1"
                class="mb-3"
              ></b-form-radio-group>

              <b-form-checkbox v-model="formData.checkbox"> Check me out </b-form-checkbox>
            </b-form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Checkboxes</h5>
            <b-form-checkbox-group
              v-model="formData.checkboxGroup"
              :options="[
                { text: 'Check this custom checkbox', value: 'option1' },
                { text: 'Or this one', value: 'option2' },
                { text: 'But not this disabled one', value: 'option3', disabled: true }
              ]"
            ></b-form-checkbox-group>
          </div>
        </div>
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Inline</h5>
            <b-form-checkbox-group
              v-model="formData.inlineCheckboxes"
              :options="[
                { text: 'An inline custom input', value: 'inline1' },
                { text: 'and another one', value: 'inline2' }
              ]"
              stacked="false"
            ></b-form-checkbox-group>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Radios</h5>
            <b-form-radio-group
              v-model="formData.customRadio"
              :options="[
                { text: 'Select this custom radio', value: 'radio1' },
                { text: 'Or this one', value: 'radio2' },
                { text: 'But not this disabled one', value: 'radio3', disabled: true }
              ]"
              name="customRadio"
            ></b-form-radio-group>
          </div>
        </div>
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Form Select</h5>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleCustomSelect" class="form-label">Form Select</label>
                  <b-form-select
                    id="exampleCustomSelect"
                    v-model="formData.customSelect"
                    :options="[
                      { value: '', text: 'Select' },
                      { value: 'value1', text: 'Value 1' },
                      { value: 'value2', text: 'Value 2' },
                      { value: 'value3', text: 'Value 3' },
                      { value: 'value4', text: 'Value 4' },
                      { value: 'value5', text: 'Value 5' }
                    ]"
                  ></b-form-select>
                </div>
                <div class="mb-3">
                  <label for="exampleCustomMutlipleSelect" class="form-label">Form Multiple Select</label>
                  <b-form-select
                    id="exampleCustomMutlipleSelect"
                    v-model="formData.customMultiSelect"
                    multiple
                    :options="[
                      { value: '', text: 'Select' },
                      { value: 'value1', text: 'Value 1' },
                      { value: 'value2', text: 'Value 2' },
                      { value: 'value3', text: 'Value 3' },
                      { value: 'value4', text: 'Value 4' },
                      { value: 'value5', text: 'Value 5' }
                    ]"
                  ></b-form-select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleCustomSelectDisabled" class="form-label">Form Select Disabled</label>
                  <b-form-select
                    id="exampleCustomSelectDisabled"
                    disabled
                    :options="[
                      { value: '', text: 'Select' },
                      { value: 'value1', text: 'Value 1' },
                      { value: 'value2', text: 'Value 2' },
                      { value: 'value3', text: 'Value 3' },
                      { value: 'value4', text: 'Value 4' },
                      { value: 'value5', text: 'Value 5' }
                    ]"
                  ></b-form-select>
                </div>
                <div class="mb-3">
                  <label for="exampleCustomMutlipleSelectDisabled" class="form-label"
                    >Form Multiple Select Disabled</label
                  >
                  <b-form-select
                    id="exampleCustomMutlipleSelectDisabled"
                    disabled
                    multiple
                    :options="[
                      { value: '', text: 'Select' },
                      { value: 'value1', text: 'Value 1' },
                      { value: 'value2', text: 'Value 2' },
                      { value: 'value3', text: 'Value 3' },
                      { value: 'value4', text: 'Value 4' },
                      { value: 'value5', text: 'Value 5' }
                    ]"
                  ></b-form-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-md-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Basic Input Groups</h5>

              <!-- Basic prepend -->
              <b-input-group class="mb-3" prepend="@">
                <b-form-input placeholder="Username"></b-form-input>
              </b-input-group>

              <!-- Basic append -->
              <b-input-group class="mb-3" append="@example.com">
                <b-form-input placeholder="Recipient's username"></b-form-input>
              </b-input-group>

              <!-- With both prepend and append -->
              <b-input-group class="mb-3" prepend="$" append=".00">
                <b-form-input placeholder="Amount" type="number"></b-form-input>
              </b-input-group>

              <!-- With prepend slot -->
              <label for="website-input" class="form-label">Your website URL</label>
              <b-input-group class="mb-3">
                <template #prepend>
                  <b-input-group-text>https://</b-input-group-text>
                </template>
                <b-form-input id="website-input" placeholder="example.com"></b-form-input>
              </b-input-group>

              <!-- With textarea -->
              <b-input-group prepend="Comment">
                <b-form-textarea rows="3"></b-form-textarea>
              </b-input-group>
            </div>
          </div>
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Input Groups with Checkboxes & Radios</h5>

              <!-- Checkbox example -->
              <b-input-group class="mb-3">
                <template #prepend>
                  <b-input-group-text>
                    <input
                      class="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </b-input-group-text>
                </template>
                <b-form-input
                  placeholder="Text input with checkbox"
                  aria-label="Text input with checkbox"
                ></b-form-input>
              </b-input-group>

              <!-- Radio example -->
              <b-input-group>
                <template #prepend>
                  <b-input-group-text>
                    <input
                      class="form-check-input mt-0"
                      type="radio"
                      value=""
                      aria-label="Radio button for following text input"
                    />
                  </b-input-group-text>
                </template>
                <b-form-input
                  placeholder="Text input with radio button"
                  aria-label="Text input with radio button"
                ></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Input Group Buttons</h5>

              <!-- Button on left -->
              <b-input-group class="mb-3">
                <template #prepend>
                  <b-button variant="outline-secondary">Button</b-button>
                </template>
                <b-form-input placeholder="Input with button"></b-form-input>
              </b-input-group>

              <!-- Button on right -->
              <b-input-group class="mb-3">
                <b-form-input placeholder="Input with button"></b-form-input>
                <template #append>
                  <b-button variant="outline-secondary">Button</b-button>
                </template>
              </b-input-group>

              <!-- Multiple buttons prepend -->
              <b-input-group class="mb-3">
                <template #prepend>
                  <b-button variant="outline-secondary">Button</b-button>
                  <b-button variant="outline-secondary">Button</b-button>
                </template>
                <b-form-input placeholder="Input with multiple buttons"></b-form-input>
              </b-input-group>

              <!-- Buttons on both sides -->
              <b-input-group>
                <template #prepend>
                  <b-button variant="outline-secondary">Left</b-button>
                </template>
                <b-form-input placeholder="Input with buttons on both sides"></b-form-input>
                <template #append>
                  <b-button variant="outline-secondary">Right</b-button>
                </template>
              </b-input-group>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Input Group Sizing</h5>

              <!-- Large input group -->
              <b-input-group size="lg" prepend="Large" class="mb-3">
                <b-form-input placeholder="Large input group"></b-form-input>
              </b-input-group>

              <!-- Default input group -->
              <b-input-group prepend="Default" class="mb-3">
                <b-form-input placeholder="Default input group"></b-form-input>
              </b-input-group>

              <!-- Small input group -->
              <b-input-group size="sm" prepend="Small" class="mb-3">
                <b-form-input placeholder="Small input group"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Input Groups with Dropdowns</h5>

              <!-- Dropdown prepend -->
              <b-input-group class="mb-3">
                <template #prepend>
                  <b-dropdown text="Dropdown" variant="outline-secondary">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                  </b-dropdown>
                </template>
                <b-form-input placeholder="Input with dropdown"></b-form-input>
              </b-input-group>

              <!-- Dropdown append -->
              <b-input-group class="mb-3">
                <b-form-input placeholder="Input with dropdown"></b-form-input>
                <template #append>
                  <b-dropdown text="Dropdown" variant="outline-secondary">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-input-group>

              <!-- Multiple addons -->
              <b-input-group>
                <template #prepend>
                  <b-input-group-text>$</b-input-group-text>
                  <b-input-group-text>0.00</b-input-group-text>
                </template>
                <b-form-input placeholder="Amount" type="number"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Select Input Groups</h5>

              <!-- Select with prepend text -->
              <b-input-group prepend="Options" class="mb-3">
                <b-form-select :options="['Choose...', 'One', 'Two', 'Three']"></b-form-select>
              </b-input-group>

              <!-- Select with append text -->
              <b-input-group append="Options" class="mb-3">
                <b-form-select :options="['Choose...', 'One', 'Two', 'Three']"></b-form-select>
              </b-input-group>

              <!-- Select with button -->
              <b-input-group class="mb-3">
                <b-form-select :options="['Choose...', 'One', 'Two', 'Three']"></b-form-select>
                <template #append>
                  <b-button variant="outline-secondary">Button</b-button>
                </template>
              </b-input-group>

              <!-- Button with select -->
              <b-input-group>
                <template #prepend>
                  <b-button variant="outline-secondary">Button</b-button>
                </template>
                <b-form-select :options="['Choose...', 'One', 'Two', 'Three']"></b-form-select>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../../Layout/Components/PageTitle.vue'

export default {
  name: 'FormControls',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Form Controls',
      subheading: 'Wide selection of forms controls, using the Bootstrap 5 code base, but built with Vue.',
      icon: 'pe-7s-display1 icon-gradient bg-premium-dark',
      // Sample form data
      formData: {
        email: '',
        password: '',
        select: '',
        selectMulti: [],
        textarea: '',
        file: null,
        checkbox: false,
        radio: '',
        customRadio: '',
        customSelect: '',
        checkboxGroup: [],
        inlineCheckboxes: [],
        customMultiSelect: []
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      alert('Form submitted! Check console for data.')
    },
    handleFileChange(event) {
      this.formData.file = event.target.files[0]
    }
  }
}
</script>

<style>
/* Bootstrap 5 Input Group Fixes for BootstrapVueNext */

/* Override Bootstrap 4 input groups with Bootstrap 5 behavior */
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
}

/* Focus states - bring focused element to top */
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 5;
}

.input-group .btn:focus {
  z-index: 5;
}

/* Size variations */
.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  border-radius: 0.5rem;
}

/* Bootstrap 5 form-check styling - comprehensive fix for alignment and spacing */

/* Bootstrap 5 Form check container - minimal left spacing */
.form-check {
  display: block;
  min-height: 1.25rem;
  padding-left: 1.125em;
  margin-bottom: 0.25rem;
}

.form-check .form-check-input {
  float: left;
  margin-left: -1.125em;
}

/* Fix for BootstrapVueNext form-radio wrapper */
.form-radio {
  margin-bottom: 0;
}

.form-radio .form-check {
  margin-bottom: 0.25rem;
}

.form-radio .form-check:last-child {
  margin-bottom: 0;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.125em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  print-color-adjust: exact;
}

.form-check-label {
  color: #212529;
  cursor: pointer;
}

/* BootstrapVueNext specific fixes */
.form-check-input[type='checkbox'] {
  border-radius: 0.25em;
}

.form-check-input[type='radio'] {
  border-radius: 50%;
}

/* Input group specific overrides */
.input-group-text .form-check-input {
  margin-top: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  position: static !important;
  float: none !important;
}

.input-group-text .form-check-input[type='checkbox'],
.form-check-input[type='checkbox'] {
  border-radius: 0.25em;
}

.input-group-text .form-check-input[type='radio'],
.form-check-input[type='radio'] {
  border-radius: 50%;
}

.input-group-text .form-check-input:active,
.form-check-input:active {
  filter: brightness(90%);
}

.input-group-text .form-check-input:focus,
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.input-group-text .form-check-input:checked,
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.input-group-text .form-check-input:checked[type='checkbox'],
.form-check-input:checked[type='checkbox'] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}

.input-group-text .form-check-input:checked[type='radio'],
.form-check-input:checked[type='radio'] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}

.input-group-text .form-check-input[type='checkbox']:indeterminate,
.form-check-input[type='checkbox']:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}

.input-group-text .form-check-input:disabled,
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}

/* Bootstrap 5 File Input Styling */
.form-control[type='file']:not(:disabled):not([readonly]) {
  cursor: pointer;
}

.form-control[type='file'] {
  overflow: hidden;
}

.form-control[type='file']:not(:disabled):not([readonly])::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.form-control[type='file']:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #ddd6fe;
}

.form-control[type='file']::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
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

/* Firefox file upload button styling */
.form-control[type='file']::-moz-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
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

/* BootstrapVueNext component specific fixes */

/* Fix spacing for BootstrapVueNext form checkboxes and radios */
.form-check,
.form-radio {
  margin-bottom: 0.5rem;
}

/* Fix spacing between checkbox/radio and text - Bootstrap 5 standard */
.form-check-label {
  margin-bottom: 0;
  cursor: pointer;
}

/* Ensure proper spacing when input is floated left - reduced padding */
.form-check .form-check-input + .form-check-label {
  padding-left: 0.25rem;
}

.form-radio .form-check .form-check-input + .form-check-label {
  padding-left: 0.25rem;
}

/* Inline checkboxes/radios spacing - reduced spacing */
.form-check-inline {
  display: inline-block;
  margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0.125em;
  margin-right: 0.25rem;
  margin-left: 0;
}

.form-check-inline .form-check-label {
  padding-left: 0;
}

/* Inline radio groups */
.form-radio-inline {
  margin-right: 0.75rem;
}

.form-radio-inline .form-check-input {
  margin-right: 0.25rem;
  margin-left: 0;
  margin-top: 0.125em;
}

/* BootstrapVueNext group components */
.form-group .form-check:last-child,
.form-group .form-radio:last-child {
  margin-bottom: 0;
}

/* Ensure consistent vertical alignment - improved alignment */
.form-check-input,
.form-radio-input {
  margin-top: 0.125em;
}

/* Fix for disabled state text color */
.form-check-input:disabled + .form-check-label,
.form-radio-input:disabled + .form-check-label {
  opacity: 0.5;
  color: #6c757d;
}
</style>

<style scoped>
/* Component specific styling */
.main-card {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
}
</style>
