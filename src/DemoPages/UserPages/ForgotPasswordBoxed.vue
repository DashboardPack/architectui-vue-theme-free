<template>
  <div class="min-vh-100 d-flex">
    <!-- Left Panel - Brand/Help -->
    <div class="d-none d-lg-flex col-lg-6 bg-dark position-relative overflow-hidden">
      <div
        class="position-absolute w-100 h-100"
        style="background: linear-gradient(135deg, #fd7e14 0%, #ffc107 100%)"
      ></div>
      <div
        class="d-flex flex-column justify-content-center align-items-center text-white p-5 position-relative"
        style="z-index: 2"
      >
        <div class="mb-4">
          <div class="bg-white bg-opacity-10 rounded-4 p-4">
            <i class="pe-7s-key text-white" style="font-size: 3rem"></i>
          </div>
        </div>
        <h2 class="text-white text-center mb-3 fw-bold">Password Recovery</h2>
        <p class="text-white-50 text-center mb-0 fs-5">
          Don't worry, we'll help you get back into your ArchitectUI account
        </p>
        <div class="mt-4">
          <div class="bg-white bg-opacity-10 rounded-3 p-4">
            <div class="d-flex flex-column gap-3 text-white-50">
              <div class="d-flex align-items-start">
                <i class="pe-7s-mail text-warning me-3 mt-1" style="font-size: 1.2rem"></i>
                <div>
                  <div class="text-white fw-medium mb-1">Check your email</div>
                  <small>We'll send recovery instructions to your email address</small>
                </div>
              </div>
              <div class="d-flex align-items-start">
                <i class="pe-7s-shield text-warning me-3 mt-1" style="font-size: 1.2rem"></i>
                <div>
                  <div class="text-white fw-medium mb-1">Secure process</div>
                  <small>Your account security is our top priority</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Panel - Recovery Form -->
    <div class="col-12 col-lg-6 bg-white d-flex align-items-center justify-content-center p-4">
      <div class="w-100" style="max-width: 400px">
        <!-- Mobile Logo -->
        <div class="d-lg-none text-center mb-5">
          <div class="d-inline-flex align-items-center justify-content-center bg-warning rounded-3 p-3 mb-3">
            <i class="pe-7s-key text-white" style="font-size: 2rem"></i>
          </div>
          <h4 class="text-warning fw-bold mb-0">Password Recovery</h4>
        </div>

        <!-- Recovery Header -->
        <div class="text-center mb-5">
          <h2 class="fw-bold text-dark mb-2">Forgot your password?</h2>
          <p class="text-secondary mb-0">Enter your email address and we'll send you recovery instructions.</p>
        </div>

        <!-- Recovery Form -->
        <form>
          <div class="mb-4">
            <label for="recovery-email" class="form-label text-dark fw-medium mb-2">Email address</label>
            <b-form-input
              id="recovery-email"
              type="email"
              size="lg"
              placeholder="Enter your email address"
              class="py-3"
              required
            />
          </div>

          <div class="d-grid mb-4">
            <b-button variant="warning" size="lg" class="fw-medium py-3"> Send Recovery Instructions </b-button>
          </div>

          <div class="text-center">
            <span class="text-secondary">Remember your password? </span>
            <b-link href="javascript:void(0);" class="text-primary text-decoration-none fw-medium"> Sign in </b-link>
          </div>

          <div class="text-center mt-3">
            <span class="text-secondary">Don't have an account? </span>
            <b-link href="javascript:void(0);" class="text-success text-decoration-none fw-medium">
              Sign up now
            </b-link>
          </div>
        </form>

        <!-- Help Text -->
        <div class="mt-5 p-4 bg-light rounded-3">
          <div class="d-flex align-items-start">
            <i class="pe-7s-info text-warning me-3 mt-1" style="font-size: 1.2rem"></i>
            <div>
              <h6 class="text-dark mb-2">Still having trouble?</h6>
              <p class="text-secondary small mb-0">
                If you don't receive the email within a few minutes, please check your spam folder or
                <b-link href="javascript:void(0);" class="text-warning text-decoration-none fw-medium"
                  >contact support</b-link
                >.
              </p>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center mt-5">
          <p class="text-secondary small mb-0">© 2025 ArchitectUI. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordBoxed'
}
</script>
