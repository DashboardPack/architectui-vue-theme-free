<template>
  <div class="min-vh-100 d-flex">
    <!-- Left Panel - Brand/Marketing -->
    <div class="d-none d-lg-flex col-lg-5 bg-dark position-relative overflow-hidden">
      <div
        class="position-absolute w-100 h-100"
        style="background: linear-gradient(135deg, #69aa8a 0%, #17a2b8 100%)"
      ></div>
      <div
        class="d-flex flex-column justify-content-center align-items-center text-white p-5 position-relative"
        style="z-index: 2"
      >
        <div class="mb-4">
          <div class="bg-white bg-opacity-10 rounded-4 p-4">
            <i class="pe-7s-add-user text-white" style="font-size: 3rem"></i>
          </div>
        </div>
        <h2 class="text-white text-center mb-3 fw-bold">Join ArchitectUI</h2>
        <p class="text-white-50 text-center mb-0 fs-5">
          Create your account and start building amazing dashboards in minutes
        </p>
        <div class="mt-4">
          <div class="d-flex flex-column gap-3 text-white-50">
            <div class="d-flex align-items-center">
              <i class="pe-7s-check text-success me-3" style="font-size: 1.2rem"></i>
              <span>Modern Vue 3 & Bootstrap 5</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="pe-7s-check text-success me-3" style="font-size: 1.2rem"></i>
              <span>Zero security vulnerabilities</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="pe-7s-check text-success me-3" style="font-size: 1.2rem"></i>
              <span>Production-ready components</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Panel - Register Form -->
    <div class="col-12 col-lg-7 bg-white d-flex align-items-center justify-content-center p-4">
      <div class="w-100" style="max-width: 480px">
        <!-- Mobile Logo -->
        <div class="d-lg-none text-center mb-5">
          <div class="d-inline-flex align-items-center justify-content-center bg-success rounded-3 p-3 mb-3">
            <i class="pe-7s-add-user text-white" style="font-size: 2rem"></i>
          </div>
          <h4 class="text-success fw-bold mb-0">Join ArchitectUI</h4>
        </div>

        <!-- Register Header -->
        <div class="text-center mb-4">
          <h2 class="fw-bold text-dark mb-2">Create your account</h2>
          <p class="text-secondary mb-0">
            It only takes a <span class="text-success fw-medium">few seconds</span> to get started
          </p>
        </div>

        <!-- Register Form -->
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="email" class="form-label text-dark fw-medium mb-2">Email address</label>
              <b-form-input id="email" type="email" size="lg" placeholder="Enter your email" class="py-3" required />
            </div>
            <div class="col-md-6 mb-3">
              <label for="username" class="form-label text-dark fw-medium mb-2">Username</label>
              <b-form-input id="username" type="text" size="lg" placeholder="Choose username" class="py-3" required />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="password" class="form-label text-dark fw-medium mb-2">Password</label>
              <b-form-input
                id="password"
                type="password"
                size="lg"
                placeholder="Create password"
                class="py-3"
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="confirm-password" class="form-label text-dark fw-medium mb-2">Confirm Password</label>
              <b-form-input
                id="confirm-password"
                type="password"
                size="lg"
                placeholder="Confirm password"
                class="py-3"
                required
              />
            </div>
          </div>

          <div class="mb-4">
            <b-form-checkbox id="terms" class="text-secondary" required>
              I agree to the
              <b-link href="javascript:void(0);" class="text-success text-decoration-none fw-medium"
                >Terms and Conditions</b-link
              >
            </b-form-checkbox>
          </div>

          <div class="d-grid mb-4">
            <b-button variant="success" size="lg" class="fw-medium py-3"> Create Account </b-button>
          </div>

          <div class="text-center">
            <span class="text-secondary">Already have an account? </span>
            <b-link href="javascript:void(0);" class="text-success text-decoration-none fw-medium"> Sign in </b-link>
            <span class="text-secondary mx-2">|</span>
            <b-link href="javascript:void(0);" class="text-primary text-decoration-none fw-medium">
              Forgot password?
            </b-link>
          </div>
        </form>

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
  name: 'RegisterBoxed'
}
</script>
