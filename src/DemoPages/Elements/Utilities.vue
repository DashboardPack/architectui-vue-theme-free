<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-warning fade show" role="alert">
          <h5>Bootstrap Helpers</h5>
          <p class="mb-0">
            All Bootstrap 5 helper classes available in the official Bootstrap documentation are also available in
            ArchitectUI Framework: Spacing, resets, typography utilities, sizing and others.
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Opacity</h5>
            <table class="mb-0 table table-bordered">
              <tbody>
                <tr>
                  <th scope="row"><b>.opacity-01 </b> - <b>.opacity-09</b></th>
                  <td>Adding this class to any element sets the opacity to <b>1% ... 9%</b></td>
                </tr>
                <tr>
                  <th scope="row"><b>.opacity-2 </b> - <b>.opacity-10</b></th>
                  <td>Adding this class to any element sets the opacity to <b>10% ... 100%</b></td>
                </tr>
                <tr>
                  <th scope="row"><b>.opacity-01</b></th>
                  <td>Adding this class to any element sets the opacity to <b>10%</b></td>
                </tr>
                <tr>
                  <th scope="row"><b>.opacity-15</b></th>
                  <td>Adding this class to any element sets the opacity to <b>15%</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Breadcrumbs</h5>
            <div>
              <nav class="" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="active breadcrumb-item" aria-current="page">Home</li>
                </ol>
              </nav>
              <nav class="" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                  <li class="active breadcrumb-item" aria-current="page">Library</li>
                </ol>
              </nav>
              <nav class="" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>
                  <li class="active breadcrumb-item" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card main-card mb-3">
      <div class="card-header">Height</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm">
            <div class="clearfix">
              <div
                class="d-inline-block float-start p-2 me-5 mb-5 text-white"
                style="height: 50px; background-color: #007bff"
              >
                50px
              </div>
              <div
                class="d-inline-block float-start p-2 me-5 mb-5 text-white"
                style="height: 75px; background-color: #28a745"
              >
                75px
              </div>
              <div
                class="d-inline-block float-start p-2 me-5 mb-5 text-white"
                style="height: 100px; background-color: #dc3545"
              >
                100px
              </div>
              <div
                class="d-inline-block float-start p-2 me-5 mb-5 text-white"
                style="height: 125px; background-color: #ffc107; color: #212529"
              >
                125px
              </div>
            </div>
            <div class="mt-5">
              <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th style="width: 35%">Class</th>
                    <th style="width: 65%">Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="bg-transparent p-0">class="h-[value]p"</code></td>
                    <td class="fs-6">25 / 30 / 35 / 40 / 45 / 50 ... / 800 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="mh-[value]p"</code></td>
                    <td class="fs-6">
                      100 / 125 / 150 / 200 / 225 ... / 800 (step of 25)<br />Set max-height of an element
                    </td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="mnh-[value]p"</code></td>
                    <td class="fs-6">
                      100 / 125 / 150 / 200 / 225 ... / 800 (step of 25)<br />Set min-height of an element
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card main-card mb-3">
      <div class="card-header">Height in percentage</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm">
            <div class="d-flex flex-wrap" style="height: 200px">
              <div class="h-auto p-2 me-5 mb-2 text-white" style="background-color: #6c757d">auto</div>
              <div class="h-25 p-2 me-5 mb-2 text-white" style="background-color: #007bff">25%</div>
              <div class="h-50 p-2 me-5 mb-2 text-white" style="background-color: #28a745">50%</div>
              <div class="h-75 p-2 me-5 mb-2 text-white" style="background-color: #dc3545">75%</div>
              <div class="h-100 p-2 me-5 mb-2 text-white" style="background-color: #17a2b8">100%</div>
            </div>
            <div class="mt-5">
              <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th style="width: 35%">Class</th>
                    <th style="width: 65%">Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="bg-transparent p-0">class="h-[value]"</code></td>
                    <td class="fs-6">25 / 30 / 35 / 40 / 45 / 50 ... / 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="h-auto"</code></td>
                    <td class="fs-6">Set the height to auto</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="mh-100"</code></td>
                    <td class="fs-6">Set max-height of an element to 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card main-card mb-3">
      <div class="card-header">Width</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm">
            <div class="d-flex flex-column">
              <div class="p-2 me-5 mb-2 text-white" style="width: 50px; background-color: #007bff">50px</div>
              <div class="p-2 me-5 mb-2 text-white" style="width: 75px; background-color: #28a745">75px</div>
              <div class="p-2 me-5 mb-2 text-white" style="width: 100px; background-color: #dc3545">100px</div>
              <div class="p-2 me-5 mb-2 text-white" style="width: 150px; background-color: #17a2b8">150px</div>
            </div>
            <div class="mt-5">
              <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th style="width: 35%">Class</th>
                    <th style="width: 65%">Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code class="d-block bg-transparent pa-0">class="w-[value]p"</code>
                      <code class="d-block bg-transparent pa-0">class="w-sm-[value]p"</code>
                      <code class="d-block bg-transparent pa-0">class="w-md-[value]p"</code>
                      <code class="d-block bg-transparent pa-0">class="w-lg-[value]p"</code>
                      <code class="d-block bg-transparent pa-0">class="w-xl-[value]p"</code>
                      <code class="d-block bg-transparent pa-0">class="w-xxl-[value]p"</code>
                    </td>
                    <td class="fs-6">25 / 30 / 35 / 40 / 45 / 50 ... / 800 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="mw-[value]p"</code></td>
                    <td class="fs-6">
                      25 / 50 / 75 / 100 / 125 / 150 / 200 / 225 ... / 800 (step of 25)<br />Set max-width of an element
                    </td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="mnw-[value]p"</code></td>
                    <td class="fs-6">
                      25 / 50 / 75 / 100 / 125 / 150 / 200 / 225 ... / 800 (step of 25)<br />Set min-width of an element
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card main-card mb-3">
      <div class="card-header">Width in percentage</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm">
            <div class="d-flex flex-column">
              <div class="w-25 p-5 me-5 mb-2 text-white" style="background-color: #007bff">25%</div>
              <div class="w-50 p-5 me-5 mb-2 text-white" style="background-color: #28a745">50%</div>
              <div class="w-75 p-5 me-5 mb-2 text-white" style="background-color: #dc3545">75%</div>
              <div class="w-100 p-5 me-5 mb-2 text-white" style="background-color: #17a2b8">100%</div>
              <div class="w-auto p-5 me-5 mb-2 text-white" style="background-color: #6c757d">auto</div>
            </div>
            <div class="mt-5">
              <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th style="width: 35%">Class</th>
                    <th style="width: 65%">Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code class="d-block bg-transparent pa-0">class="w-[value]"</code>
                      <code class="d-block bg-transparent pa-0">class="w-sm-[value]"</code>
                      <code class="d-block bg-transparent pa-0">class="w-md-[value]"</code>
                      <code class="d-block bg-transparent pa-0">class="w-lg-[value]"</code>
                      <code class="d-block bg-transparent pa-0">class="w-xl-[value]"</code>
                      <code class="d-block bg-transparent pa-0">class="w-xxl-[value]"</code>
                    </td>
                    <td class="fs-6">5 / 10 / 15 / 20 / 25 / 30 / 35 / 40 / 45 / 50 ... / 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="w-auto"</code></td>
                    <td class="fs-6">Set the width to auto</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="mw-100"</code></td>
                    <td class="fs-6">Set max-width of an element to 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card main-card mb-3">
      <div class="card-header">Equal Height &amp; Width</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm">
            <div class="d-flex flex-wrap">
              <div
                class="me-5 mb-5 d-flex justify-content-center align-items-center text-white"
                style="width: 46px; height: 46px; background-color: #007bff"
              >
                d-46
              </div>
              <div
                class="me-5 mb-5 d-flex justify-content-center align-items-center text-white"
                style="width: 74px; height: 74px; background-color: #28a745"
              >
                d-74
              </div>
              <div
                class="me-5 mb-5 d-flex justify-content-center align-items-center text-white"
                style="width: 100px; height: 100px; background-color: #dc3545"
              >
                d-100
              </div>
            </div>
            <div class="mt-5">
              <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th style="width: 35%">Class</th>
                    <th style="width: 65%">Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="bg-transparent p-0">class="d-[value]"</code></td>
                    <td class="fs-6">8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 ... / 50 (step of 2)</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="d-[value]"</code></td>
                    <td class="fs-6">54 / 58 / 62 / 66 / 70 / 74 / 78 / 82 / 86 / 90 / 94 / 98 (step of 4)</td>
                  </tr>
                  <tr>
                    <td><code class="bg-transparent p-0">class="d-[value]"</code></td>
                    <td class="fs-6">100 / 110 / 120 / 130 / 140 / 150 (step of 10)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: 'Utilities',
    subheading: 'These are helpers that speed up the dev time for various components and effects.',
    icon: 'pe-7s-wristwatch icon-gradient bg-deep-blue'
  })
}
</script>
