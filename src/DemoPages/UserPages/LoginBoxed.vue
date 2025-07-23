<template>
  <div class="min-vh-100 d-flex">
    <!-- Left Panel - Brand/Marketing -->
    <div class="d-none d-lg-flex col-lg-6 bg-dark position-relative overflow-hidden">
      <div
        class="position-absolute w-100 h-100"
        style="background: linear-gradient(135deg, #69aa8a 0%, #5a9677 100%)"
      ></div>
      <div
        class="d-flex flex-column justify-content-center align-items-center text-white p-5 position-relative"
        style="z-index: 2"
      >
        <div class="mb-4">
          <div class="bg-white bg-opacity-10 rounded-4 p-4">
            <i class="pe-7s-home text-white" style="font-size: 3rem"></i>
          </div>
        </div>
        <h2 class="text-white text-center mb-3 fw-bold">Welcome to ArchitectUI</h2>
        <p class="text-white-50 text-center mb-0 fs-5">
          The modern admin dashboard template built with Vue 3 and Bootstrap 5
        </p>
      </div>
    </div>

    <!-- Right Panel - Login Form -->
    <div class="col-12 col-lg-6 bg-white d-flex align-items-center justify-content-center p-4">
      <div class="w-100" style="max-width: 420px">
        <!-- Mobile Logo -->
        <div class="d-lg-none text-center mb-5">
          <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-3 p-3 mb-3">
            <i class="pe-7s-home text-white" style="font-size: 2rem"></i>
          </div>
          <h4 class="text-primary fw-bold mb-0">ArchitectUI</h4>
        </div>

        <!-- Login Header -->
        <div class="text-center mb-5">
          <h2 class="fw-bold text-dark mb-2">Sign in to your account</h2>
          <p class="text-secondary mb-0">Welcome back! Please enter your details.</p>
        </div>

        <!-- Login Form -->
        <form>
          <div class="mb-4">
            <label for="email" class="form-label text-dark fw-medium mb-2">Email address</label>
            <b-form-input id="email" type="email" size="lg" placeholder="Enter your email" class="py-3" required />
          </div>

          <div class="mb-4">
            <label for="password" class="form-label text-dark fw-medium mb-2">Password</label>
            <b-form-input
              id="password"
              type="password"
              size="lg"
              placeholder="Enter your password"
              class="py-3"
              required
            />
          </div>

          <div class="d-flex justify-content-between align-items-center mb-4">
            <b-form-checkbox id="remember" class="text-secondary"> Remember me </b-form-checkbox>
            <b-link href="javascript:void(0);" class="text-primary text-decoration-none fw-medium">
              Forgot password?
            </b-link>
          </div>

          <div class="d-grid mb-4">
            <b-button variant="primary" size="lg" class="fw-medium py-3"> Sign in to Dashboard </b-button>
          </div>

          <div class="text-center">
            <span class="text-secondary">Don't have an account? </span>
            <b-link href="javascript:void(0);" class="text-primary text-decoration-none fw-medium">
              Sign up now
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
  name: 'LoginBoxed'
}
</script>
