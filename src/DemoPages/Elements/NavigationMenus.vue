<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

    <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Vertical Menu</h5>
                <div class="row">
                  <div class="col">
                    <ul class="nav flex-column">
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Link</a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Link
                        <div class="ml-auto badge badge-success">New</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Another Link
                        <div class="ml-auto badge badge-warning">512</div>
                      </a></li>
                      <li class="nav-item"><a disabled href="javascript:void(0);" class="nav-link disabled">Disabled Link</a></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="nav flex-column">
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon lnr-inbox"> </i><span>Inbox</span>
                        <div class="ml-auto badge badge-pill badge-secondary">86</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon lnr-book"> </i><span>Book</span>
                        <div class="ml-auto badge badge-pill badge-danger">5</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon lnr-picture"> </i><span>Picture</span></a></li>
                      <li class="nav-item"><a disabled href="javascript:void(0);" class="nav-link disabled"><i class="nav-link-icon lnr-file-empty"> </i><span>File Disabled</span></a></li>
                    </ul>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Basic Dropdown" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="secondary">
                    <ul class="nav flex-column">
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Link</a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Link
                        <div class="ml-auto badge badge-success">New</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Another Link
                        <div class="ml-auto badge badge-warning">512</div>
                      </a></li>
                      <li class="nav-item"><a disabled href="javascript:void(0);" class="nav-link disabled">Disabled Link</a></li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Horizontal Menu</h5>
                <ul class="nav"><a href="javascript:void(0);" class="nav-link active">Link</a><a href="javascript:void(0);" class="nav-link">Link</a><a href="javascript:void(0);" class="nav-link">Another Link</a>
                  <a disabled
                     href="javascript:void(0);"
                     class="nav-link disabled">Disabled
                    Link</a></ul>
                <div class="divider"></div>
                <div class="nav">
                  <a href="javascript:void(0);" class="nav-link active"><i class="nav-link-icon pe-7s-settings"> </i><span>Link</span></a>
                  <a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-wallet"> </i><span>Link</span>
                    <div class="badge badge-pill badge-danger">12</div>
                  </a>
                  <a href="javascript:void(0);" class="nav-link"><span>Another Link</span></a>
                  <a disabled href="javascript:void(0);" class="nav-link disabled"><i class="nav-link-icon pe-7s-box1"> </i><span>Disabled Link</span></a>
                </div>
                <div class="divider"></div>
                <ul class="nav nav-justified">
                  <li class="nav-item"><a href="javascript:void(0);" class="nav-link active"><i class="nav-link-icon pe-7s-settings"> </i><span>Justified</span></a></li>
                  <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i><span>Link</span>
                    <div class="badge badge-success">NEW</div>
                  </a></li>
                  <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><span>Another Link</span></a></li>
                  <li class="nav-item"><a disabled href="javascript:void(0);" class="nav-link disabled"><i class="nav-link-icon pe-7s-box1"> </i><span>Disabled Link</span></a></li>
                </ul>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Active Links</h5>
                <div class="nav nav-pills"><a href="javascript:void(0);" class="nav-link active">Link</a><a href="javascript:void(0);" class="nav-link">Link</a><a href="javascript:void(0);" class="nav-link">Another Link</a><a disabled
                                                                                                                                                                                                                                  href="javascript:void(0);"
                                                                                                                                                                                                                                  class="nav-link disabled">Disabled Link</a>
                </div>
                <div class="divider"></div>
                <div class="nav nav-pills"><a href="javascript:void(0);" class="nav-link active"><i class="nav-link-icon pe-7s-settings"> </i><span>Link</span></a><a href="javascript:void(0);" class="nav-link"><i
                  class="nav-link-icon pe-7s-wallet"> </i><span>Link</span>
                  <div class="badge badge-pill badge-danger">12</div>
                </a><a href="javascript:void(0);" class="nav-link"><span>Another Link</span></a><a disabled href="javascript:void(0);" class="nav-link disabled"><i class="nav-link-icon pe-7s-box1"> </i><span>Disabled Link</span></a></div>
                <div class="divider"></div>
                <ul class="nav nav-pills nav-justified">
                  <li class="nav-item"><a href="javascript:void(0);" class="nav-link active"><i class="nav-link-icon pe-7s-settings"> </i>Justified</a></li>
                  <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i>Link
                    <div class="badge badge-success">NEW</div>
                  </a></li>
                  <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Another Link</a></li>
                  <li class="nav-item"><a disabled href="javascript:void(0);" class="nav-link disabled"><i class="nav-link-icon pe-7s-box1"> </i>Disabled Link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  export default {
    components: {
      PageTitle,

    },
    data: () => ({
      heading: 'Navigation Menus',
      subheading: 'Navigation menus are one of the basic building blocks for any web or mobile app.',
      icon: 'pe-7s-photo-gallery icon-gradient bg-mean-fruit',



    }),


  }
</script>
