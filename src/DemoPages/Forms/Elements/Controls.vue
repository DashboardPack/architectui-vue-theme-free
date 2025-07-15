<template>
    <div>
        <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
        <div class="row">
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Controls Types</h5>
                        <form class="">
                            <div class="position-relative mb-3"><label for="exampleEmail"
                                                                             class="">Email</label><input name="email"
                                                                                                          id="exampleEmail"
                                                                                                          placeholder="with a placeholder"
                                                                                                          type="email"
                                                                                                          class="form-control">
                            </div>
                            <div class="position-relative mb-3"><label for="examplePassword"
                                                                             class="">Password</label><input
                                name="password" id="examplePassword" placeholder="password placeholder" type="password"
                                class="form-control"></div>
                            <div class="position-relative mb-3"><label for="exampleSelect" class="">Select</label><select
                                name="select" id="exampleSelect" class="form-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select></div>
                            <div class="position-relative mb-3"><label for="exampleSelectMulti" class="">Select
                                Multiple</label><select multiple="" name="selectMulti" id="exampleSelectMulti"
                                                        class="form-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select></div>
                            <div class="position-relative mb-3"><label for="exampleText" class="">Text
                                Area</label><textarea name="text" id="exampleText" class="form-control"></textarea>
                            </div>
                            <div class="position-relative mb-3"><label for="exampleFile"
                                                                             class="">File</label><input name="file"
                                                                                                         id="exampleFile"
                                                                                                         type="file"
                                                                                                         class="form-control">
                                <small class="form-text text-muted">This is some placeholder block-level help text for
                                    the above input. It's a bit lighter and easily wraps to a new line.
                                </small>
                            </div>
                            <button class="mt-1 btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Sizing</h5>
                        <form class=""><input placeholder="lg" type="text"
                                              class="mb-2 form-control-lg form-control"><input placeholder="default"
                                                                                               type="text"
                                                                                               class="mb-2 form-control"><input
                            placeholder="sm" type="text"
                            class="mb-2 form-control-sm form-control">
                            <div class="divider"></div>
                            <select class="mb-2 form-select form-select-lg">
                                <option>Large Select</option>
                            </select><select class="mb-2 form-select">
                                <option>Default Select</option>
                            </select><select class="form-select form-select-sm">
                                <option>Small Select</option>
                            </select></form>
                    </div>
                </div>
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Checkboxes &amp; Radios</h5>
                        <form class="">
                            <fieldset class="position-relative mb-3">
                                <div class="position-relative form-check"><label class="form-check-label"><input
                                    name="radio1" type="radio" class="form-check-input"> Option one is this and that—be
                                    sure to include why it's great</label></div>
                                <div class="position-relative form-check"><label class="form-check-label"><input
                                    name="radio1" type="radio" class="form-check-input"> Option two can be something
                                    else and selecting it will deselect option one</label></div>
                                <div class="position-relative form-check disabled"><label
                                    class="form-check-label"><input name="radio1" disabled type="radio"
                                                                    class="form-check-input"> Option three is
                                    disabled</label></div>
                            </fieldset>
                            <div class="position-relative form-check"><label class="form-check-label"><input
                                type="checkbox" class="form-check-input"> Check me out</label></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <form class="">
            <div class="row">
                <div class="col-md-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Checkboxes</h5>
                            <div class="position-relative mb-3">
                                <div>
                                    <div class="form-check"><input type="checkbox"
                                                                                       id="exampleCustomCheckbox"
                                                                                       class="form-check-input"><label
                                        class="form-check-label" for="exampleCustomCheckbox">Check this custom
                                        checkbox</label>
                                    </div>
                                    <div class="form-check"><input type="checkbox"
                                                                                       id="exampleCustomCheckbox2"
                                                                                       class="form-check-input"><label
                                        class="form-check-label" for="exampleCustomCheckbox2">Or this one</label>
                                    </div>
                                    <div class="form-check"><input type="checkbox"
                                                                                       id="exampleCustomCheckbox3"
                                                                                       disabled
                                                                                       class="form-check-input"><label
                                        class="form-check-label"
                                        for="exampleCustomCheckbox3">But not this disabled one</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Inline</h5>
                            <div class="position-relative mb-3">
                                <div>
                                    <div class="form-check form-check-inline"><input
                                        type="checkbox" id="exampleCustomInline" class="form-check-input"><label
                                        class="form-check-label" for="exampleCustomInline">An inline custom
                                        input</label>
                                    </div>
                                    <div class="form-check form-check-inline"><input
                                        type="checkbox" id="exampleCustomInline2" class="form-check-input"><label
                                        class="form-check-label"
                                        for="exampleCustomInline2">and another one</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Radios</h5>
                            <div class="position-relative mb-3">
                                <div>
                                    <div class="form-check"><input type="radio" id="exampleCustomRadio"
                                                                                    name="customRadio"
                                                                                    class="form-check-input"><label
                                        class="form-check-label" for="exampleCustomRadio">Select this custom
                                        radio</label>
                                    </div>
                                    <div class="form-check"><input type="radio"
                                                                                    id="exampleCustomRadio2"
                                                                                    name="customRadio"
                                                                                    class="form-check-input"><label
                                        class="form-check-label" for="exampleCustomRadio2">Or this one</label></div>
                                    <div class="form-check"><input type="radio"
                                                                                    id="exampleCustomRadio3" disabled
                                                                                    class="form-check-input"><label
                                        class="form-check-label" for="exampleCustomRadio3">But not this disabled
                                        one</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Form Select</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="position-relative mb-3"><label for="exampleCustomSelect" class="">Form
                                        Select</label><select type="select" id="exampleCustomSelect" name="customSelect"
                                                              class="form-select">
                                        <option value="">Select</option>
                                        <option>Value 1</option>
                                        <option>Value 2</option>
                                        <option>Value 3</option>
                                        <option>Value 4</option>
                                        <option>Value 5</option>
                                    </select></div>
                                    <div class="position-relative mb-3"><label for="exampleCustomMutlipleSelect"
                                                                                     class="">Form Multiple
                                        Select</label><select multiple="" type="select" id="exampleCustomMutlipleSelect"
                                                              name="customSelect"
                                                              class="form-select">
                                        <option value="">Select</option>
                                        <option>Value 1</option>
                                        <option>Value 2</option>
                                        <option>Value 3</option>
                                        <option>Value 4</option>
                                        <option>Value 5</option>
                                    </select></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="position-relative mb-3"><label for="exampleCustomSelectDisabled"
                                                                                     class="">Form Select
                                        Disabled</label><select type="select" id="exampleCustomSelectDisabled"
                                                                name="customSelect" disabled
                                                                class="form-select">
                                        <option value="">Select</option>
                                        <option>Value 1</option>
                                        <option>Value 2</option>
                                        <option>Value 3</option>
                                        <option>Value 4</option>
                                        <option>Value 5</option>
                                    </select></div>
                                    <div class="position-relative mb-3"><label
                                        for="exampleCustomMutlipleSelectDisabled" class="">Form Multiple Select
                                        Disabled</label><select multiple="" type="select"
                                                                id="exampleCustomMutlipleSelectDisabled"
                                                                name="customSelect" disabled class="form-select">
                                        <option value="">Select</option>
                                        <option>Value 1</option>
                                        <option>Value 2</option>
                                        <option>Value 3</option>
                                        <option>Value 4</option>
                                        <option>Value 5</option>
                                    </select></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div>
            <div class="row">
                <div class="col-md-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Input Groups</h5>
                            <div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">@</span>
                                    <input placeholder="username" type="text" class="form-control">
                                </div>
                                
                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                        <input aria-label="Checkbox for following text input" type="checkbox" class="">
                                    </div>
                                    <input placeholder="Check it out" type="text" class="form-control">
                                </div>
                                
                                <div class="input-group mb-3">
                                    <input placeholder="username" type="text" class="form-control">
                                    <span class="input-group-text">@example.com</span>
                                </div>
                                
                                <div class="input-group mb-3">
                                    <span class="input-group-text">$</span>
                                    <span class="input-group-text">$</span>
                                    <input placeholder="Dolla dolla billz yo!" type="text" class="form-control">
                                    <span class="input-group-text">$</span>
                                    <span class="input-group-text">$</span>
                                </div>
                                
                                <div class="input-group mb-3">
                                    <span class="input-group-text">$</span>
                                    <input placeholder="Amount" step="1" type="number" class="form-control">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Input Group Button Dropdown</h5>
                            <div class="input-group mb-3">
                                <b-dropdown text="Dropdown" variant="info" class="me-0">
                                    <b-dropdown-item>Action A</b-dropdown-item>
                                    <b-dropdown-item>Action B</b-dropdown-item>
                                </b-dropdown>
                                <input type="text" class="form-control" placeholder="Input with dropdowns">
                                <b-dropdown text="Dropdown" variant="outline-secondary" class="ms-0">
                                    <b-dropdown-item>Action C</b-dropdown-item>
                                    <b-dropdown-item>Action D</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Input Group Button Shorthand</h5>
                            <div>
                                <div class="input-group mb-3">
                                    <button class="btn btn-secondary" type="button">To the Left!</button>
                                    <input type="text" class="form-control" placeholder="Input with left button">
                                </div>
                                
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Input with right button">
                                    <button class="btn btn-secondary" type="button">To the Right!</button>
                                </div>
                                
                                <div class="input-group mb-3">
                                    <button class="btn btn-danger" type="button">Left Button</button>
                                    <input type="text" class="form-control" placeholder="Both sides">
                                    <button class="btn btn-success" type="button">Right Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Input Group Sizing</h5>
                            <div>
                                <div class="input-group input-group-lg mb-3">
                                    <span class="input-group-text">@lg</span>
                                    <input type="text" class="form-control" placeholder="Large input group">
                                </div>
                                
                                <div class="input-group mb-3">
                                    <span class="input-group-text">@normal</span>
                                    <input type="text" class="form-control" placeholder="Default input group">
                                </div>
                                
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text">@sm</span>
                                    <input type="text" class="form-control" placeholder="Small input group">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Input Group Addon</h5>
                            <div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">To the Left!</span>
                                    <input type="text" class="form-control" placeholder="Input with left addon">
                                </div>
                                
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Input with right addon">
                                    <span class="input-group-text">To the Right!</span>
                                </div>
                                
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Left Addon</span>
                                    <input type="text" class="form-control" placeholder="Both sides">
                                    <span class="input-group-text">Right Addon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Input Group Button</h5>
                            <div>
                                <div class="input-group mb-3">
                                    <button class="btn btn-secondary" type="button">I'm a button</button>
                                    <input type="text" class="form-control" placeholder="Input with left button">
                                </div>
                                
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Input with right dropdown">
                                    <b-dropdown text="Dropdown" variant="secondary" class="ms-0">
                                        <b-dropdown-item>Action C</b-dropdown-item>
                                        <b-dropdown-item>Action D</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                                
                                <div class="input-group mb-3">
                                    <button class="btn btn-info" type="button">Search</button>
                                    <input type="text" class="form-control" placeholder="Enter search term">
                                    <button class="btn btn-success" type="button">Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";

export default {
    name: 'FormControls',
    components: {
        PageTitle,
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
                customSelect: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            // Handle form submission
            alert('Form submitted! Check console for data.');
        },
        handleFileChange(event) {
            this.formData.file = event.target.files[0];
        }
    }
}
</script>

<style scoped>
/* Enhanced form styling */
.form-control:focus,
.form-select:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

/* Input group improvements */
.input-group > .form-control:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.input-group > .form-control:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

/* Custom spacing for input groups */
.input-group {
    margin-bottom: 1rem;
}

.input-group:last-child {
    margin-bottom: 0;
}

/* Form control sizing consistency */
.form-control-lg {
    min-height: calc(3rem + 2px);
    padding: 0.75rem 1rem;
    font-size: 1.125rem;
}

.form-control-sm {
    min-height: calc(2rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
}

/* Enhanced card styling */
.main-card {
    transition: all 0.3s ease;
}

.main-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Form check improvements */
.form-check {
    margin-bottom: 0.75rem;
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.form-check-input:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Inline form checks */
.form-check-inline {
    margin-right: 1.5rem;
}

/* Input group text styling */
.input-group-text {
    background-color: #f8f9fa;
    border-color: #ced4da;
}

/* Disabled state styling */
.form-control:disabled,
.form-select:disabled {
    background-color: #e9ecef;
    opacity: 1;
}

/* File input specific styling */
input[type="file"].form-control {
    padding: 0.375rem 0.75rem;
}

/* Button group in input groups */
.input-group .btn-group {
    position: relative;
    display: flex;
    vertical-align: middle;
}

/* Responsive improvements */
@media (max-width: 768px) {
    .input-group {
        flex-wrap: wrap;
    }
    
    .input-group .form-control {
        flex: 1 1 auto;
        min-width: 0;
    }
    
    .input-group .btn {
        flex: 0 0 auto;
    }
}

/* Enhanced dropdown styling in input groups */
.input-group .dropdown {
    position: relative;
    display: flex;
}

.input-group .dropdown .btn {
    border-radius: 0;
}

.input-group .dropdown:first-child .btn {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
}

.input-group .dropdown:last-child .btn {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
}
</style>
