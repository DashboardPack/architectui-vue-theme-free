<template>
  <div>
    <div class="h-100 bg-plum-plate bg-animation">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <b-col md="8" class="mx-auto app-login-box">
          <div class="app-logo-inverse mx-auto mb-3" />

          <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
              <div class="modal-body">
                <div class="h5 modal-title text-center">
                  <h4 class="mt-2">
                    <div>Welcome back,</div>
                    <span>Please sign in to your account below.</span>
                  </h4>
                </div>
                <div
                  class="mb-3"
                  id="exampleInputGroup1"
                  label-for="exampleInput1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input id="exampleInput1" type="email" required placeholder="Enter email..."> </b-form-input>
                </div>
                <div class="mb-3" id="exampleInputGroup2" label-for="exampleInput2">
                  <b-form-input id="exampleInput2" type="password" required placeholder="Enter password...">
                  </b-form-input>
                </div>
                <b-form-checkbox name="check" id="exampleCheck"> Keep me logged in </b-form-checkbox>
                <div class="divider" />
                <h6 class="mb-0">
                  No account?
                  <a href="javascript:void(0);" class="text-primary">Sign up now</a>
                </h6>
              </div>
              <div class="modal-footer clearfix">
                <div class="float-start">
                  <b-button variant="link" size="lg" href="javascript:void(0);">Recover Password</b-button>
                </div>
                <div class="float-end">
                  <b-button variant="primary" size="lg">Login to Dashboard</b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center text-white opacity-8 mt-3">Copyright &copy; ArchitectUI 2025</div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginBoxed'
}
</script>
