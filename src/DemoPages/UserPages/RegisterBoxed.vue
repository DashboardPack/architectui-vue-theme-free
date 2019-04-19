<template>
    <div>
        <div class="h-100 bg-premium-dark">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100">
                        <div class="modal-content">
                            <div class="modal-body">
                                <h5 class="modal-title">
                                    <h4 class="mt-2">
                                        <div>Welcome,</div>
                                        <span>It only takes a <span class="text-success">few seconds</span> to create your account</span>
                                    </h4>
                                </h5>
                                <div class="divider"/>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                              description="We'll never share your email with anyone else.">
                                    <b-form-input id="exampleInput1"
                                                  type="email"
                                                  required
                                                  placeholder="Enter email...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup12"
                                              label-for="exampleInput12">
                                    <b-form-input id="exampleInput12"
                                                  type="text"
                                                  required
                                                  placeholder="Enter username...">
                                    </b-form-input>
                                </b-form-group>
                                <div class="row">
                                    <div class="col-md-6">
                                        <b-form-group id="exampleInputGroup2"
                                                      label-for="exampleInput2">
                                            <b-form-input id="exampleInput2"
                                                          type="password"
                                                          required
                                                          placeholder="Enter password...">
                                            </b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-group id="exampleInputGroup2"
                                                      label-for="exampleInput2">
                                            <b-form-input id="exampleInput2"
                                                          type="password"
                                                          required
                                                          placeholder="Repeat password...">
                                            </b-form-input>
                                        </b-form-group>
                                    </div>
                                </div>
                                <b-form-checkbox name="check" id="exampleCheck">
                                    Accept our <a href="javascript:void(0);">Terms and Conditions</a>.
                                </b-form-checkbox>
                                <div class="divider"/>
                                <h6 class="mb-0">
                                    Already have an account?
                                    <a href="javascript:void(0);" class="text-primary">Sign in</a>
                                    |
                                    <a href="javascript:void(0);" class="text-primary">Recover
                                        Password</a>
                                </h6>
                            </div>
                            <div class="modal-footer d-block text-center">
                                <b-button color="primary" class="btn-wide btn-pill btn-shadow btn-hover-shine"
                                          size="lg">Create Account
                                </b-button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; ArchitectUI 2019
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>
