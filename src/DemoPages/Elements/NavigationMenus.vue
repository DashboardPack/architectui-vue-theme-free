<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'"
      :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <div class="row">
          <div class="col-lg-12 col-xl-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Grid Menu Hover Color</h5>
                <div class="grid-menu grid-menu-3col">
                  <div class="no-gutters row">
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-primary"><i class="lnr-license btn-icon-wrapper"> </i>Primary</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-secondary"><i class="lnr-map btn-icon-wrapper"> </i>Secondary</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-success"><i class="lnr-music-note btn-icon-wrapper"> </i>Success</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-info"><i class="lnr-heart btn-icon-wrapper"> </i>Info</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-warning"><i class="lnr-magic-wand btn-icon-wrapper"> </i>Warning</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-danger"><i class="lnr-lighter btn-icon-wrapper"> </i>Danger</button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Grid Menu Inside Dropdown" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image dd-header-bg-1"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-3col">
                      <div class="no-gutters row">
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-primary"><i class="lnr-license btn-icon-wrapper"> </i>Primary</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-secondary"><i class="lnr-map btn-icon-wrapper"> </i>Secondary</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-success"><i class="lnr-music-note btn-icon-wrapper"> </i>Success</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-info"><i class="lnr-heart btn-icon-wrapper"> </i>Info</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-warning"><i class="lnr-magic-wand btn-icon-wrapper"> </i>Warning</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-danger"><i class="lnr-lighter btn-icon-wrapper"> </i>Danger</button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-right nav-item">
                        <button class="btn-pill btn btn-success btn-sm">Save</button>
                      </li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-xl-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Grid Menu Two Columns</h5>
                <div class="grid-menu grid-menu-2col overflow-hidden">
                  <div class="no-gutters row">
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-primary"><i class="lnr-license btn-icon-wrapper"> </i>Primary</button>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-secondary"><i class="lnr-map btn-icon-wrapper"> </i>Secondary</button>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-success"><i class="lnr-music-note btn-icon-wrapper"> </i>Success</button>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-info"><i class="lnr-heart btn-icon-wrapper"> </i>Info</button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Grid Menu Inside Dropdown" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image dd-header-bg-2"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-2col overflow-hidden">
                      <div class="no-gutters row">
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-primary"><i class="lnr-license btn-icon-wrapper"> </i>Primary</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-secondary"><i class="lnr-map btn-icon-wrapper"> </i>Secondary</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-success"><i class="lnr-music-note btn-icon-wrapper"> </i>Success</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-transition btn btn-outline-info"><i class="lnr-heart btn-icon-wrapper"> </i>Info</button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-right nav-item">
                        <button class="btn-pill btn btn-success btn-sm">Save</button>
                      </li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-xl-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Grid Menu Bigger</h5>
                <div class="grid-menu grid-menu-3col">
                  <div class="no-gutters row">
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> </i>Primary</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> </i>Secondary</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> </i>Success</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> </i>Info</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-magic-wand btn-icon-wrapper btn-icon-lg mb-3"> </i>Warning</button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-lighter btn-icon-wrapper btn-icon-lg mb-3"> </i>Danger</button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Grid Menu Inside Dropdown" class="mb-2 mr-2" menu-class="dropdown-menu-xl" variant="primary">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image dd-header-bg-3"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-xl grid-menu-3col">
                      <div class="no-gutters row">
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> </i>Primary</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> </i>Secondary</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> </i>Success</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> </i>Info</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-magic-wand btn-icon-wrapper btn-icon-lg mb-3"> </i>Warning</button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-lighter btn-icon-wrapper btn-icon-lg mb-3"> </i>Danger</button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-right nav-item">
                        <button class="btn-pill btn btn-success btn-sm">Save</button>
                      </li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-xl-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Grid Menu Bigger Two Columns</h5>
                <div class="grid-menu grid-menu-2col overflow-hidden">
                  <div class="no-gutters row">
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> </i>Primary</button>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> </i>Secondary</button>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> </i>Success</button>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> </i>Info</button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Grid Menu Inside Dropdown" class="mb-2 mr-2" menu-class="dropdown-menu-xl" variant="primary">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image dd-header-bg-4"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-xl grid-menu-2col">
                      <div class="no-gutters row">
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> </i>Primary</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> </i>Secondary</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> </i>Success</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"><i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> </i>Info</button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-right nav-item">
                        <button class="btn-pill btn btn-success btn-sm">Save</button>
                      </li>
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
              <div class="card-body"><h5 class="pb-3 card-title">Menu Headers</h5>
                <div class="row">
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image dd-header-bg-6"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-header nav-item">Activity</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Chat
                        <div class="ml-auto badge badge-pill badge-info">8</div>
                      </a></li>
                      <li class="nav-item-header nav-item">My Account</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Settings
                        <div class="ml-auto badge badge-success">New</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Messages
                        <div class="ml-auto badge badge-warning">512</div>
                      </a></li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-danger">
                        <div class="menu-header-image opacity-2 dd-header-bg-5"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <li class="nav-item-header nav-item">Activity</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i><span>Chat</span>
                          <div class="ml-auto badge badge-pill badge-info">8</div>
                        </a></li>
                        <li class="nav-item-header nav-item">My Account</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-config"> </i><span>Settings</span>
                          <div class="ml-auto badge badge-success">New</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                          <div class="ml-auto badge badge-warning">512</div>
                        </a></li>
                      </ul>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-success">
                        <div class="menu-header-image opacity-1 dd-header-bg-4"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <li class="nav-item-header nav-item">Activity</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i><span>Chat</span>
                          <div class="ml-auto badge badge-pill badge-info">8</div>
                        </a></li>
                        <li class="nav-item-header nav-item">My Account</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-config"> </i><span>Settings</span>
                          <div class="ml-auto badge badge-success">New</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                          <div class="ml-auto badge badge-warning">512</div>
                        </a></li>
                      </ul>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-dark">
                        <div class="menu-header-image opacity-1 dd-header-bg-3"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <li class="nav-item-header nav-item">Activity</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i><span>Chat</span>
                          <div class="ml-auto badge badge-pill badge-info">8</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-config"> </i><span>Settings</span>
                          <div class="ml-auto badge badge-success">New</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                          <div class="ml-auto badge badge-warning">512</div>
                        </a></li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Primary" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image dd-header-bg-5"></div>
                        <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-header nav-item">Activity</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Chat
                        <div class="ml-auto badge badge-pill badge-info">8</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Recover Password</a></li>
                      <li class="nav-item-header nav-item">My Account</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Settings
                        <div class="ml-auto badge badge-success">New</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Messages
                        <div class="ml-auto badge badge-warning">512</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Logs</a></li>
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn nav-item">
                        <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                      </li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="pb-3 card-title">Menu Header Buttons Solid Backgrounds</h5>
                <div class="row">
                  <div class="col-md-4">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-warning">
                        <div class="menu-header-content">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                          <div class="menu-header-btn-pane">
                            <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                            <button class="btn-icon btn-icon-only btn btn-primary btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-wallet"> </i><span>Recover Password</span></a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                          <div class="ml-auto badge badge-warning">512</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-box2"> </i><span>Logs</span></a></li>
                      </ul>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-focus">
                        <div class="menu-header-content text-left"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6>
                          <div class="menu-header-btn-pane">
                            <button class="mr-2 btn btn-primary btn-sm">Settings</button>
                            <button class="btn-icon btn-icon-only btn btn-danger btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <ul class="nav flex-column">
                          <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-wallet"> </i><span>Recover Password</span></a></li>
                          <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                            <div class="ml-auto badge badge-warning">512</div>
                          </a></li>
                          <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-box2"> </i><span>Logs</span></a></li>
                        </ul>
                      </ul>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-light">
                        <div class="menu-header-content text-dark btn-pane-right">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                          <div class="menu-header-btn-pane">
                            <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-wallet"> </i><span>Recover Password</span></a></li>
                        <li class="nav-item-header nav-item">My Account</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                          <div class="ml-auto badge badge-warning">512</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-box2"> </i><span>Logs</span></a></li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Bottom Header Buttons" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-content">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                          <div class="menu-header-btn-pane">
                            <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                            <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-header nav-item">Activity</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Chat
                        <div class="ml-auto badge badge-pill badge-info">8</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Recover Password</a></li>
                      <li class="nav-item-header nav-item">My Account</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Settings
                        <div class="ml-auto badge badge-success">New</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Messages
                        <div class="ml-auto badge badge-warning">512</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Logs</a></li>
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn nav-item">
                        <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                      </li>
                    </ul>
                  </b-dropdown>
                  <b-dropdown text="Left Aligned Header" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="success">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-success">
                        <div class="menu-header-content text-left"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6>
                          <div class="menu-header-btn-pane">
                            <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                            <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <li class="nav-item-header nav-item">Activity</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i><span>Chat</span>
                          <div class="ml-auto badge badge-pill badge-info">8</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-wallet"> </i><span>Recover Password</span></a></li>
                        <li class="nav-item-header nav-item">My Account</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-config"> </i><span>Settings</span>
                          <div class="ml-auto badge badge-success">New</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                          <div class="ml-auto badge badge-warning">512</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-box2"> </i><span>Logs</span></a></li>
                        <li class="nav-item-divider nav-item"></li>
                        <li class="nav-item-btn text-right nav-item">
                          <button class="btn-pill btn btn-success btn-sm">Save</button>
                        </li>
                      </ul>
                    </ul>
                  </b-dropdown>
                  <b-dropdown text="Left Aligned Header Buttons" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="secondary">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-secondary">
                        <div class="menu-header-content btn-pane-right">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                          <div class="menu-header-btn-pane">
                            <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <ul class="nav flex-column">
                        <li class="nav-item-header nav-item">Activity</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i><span>Chat</span>
                          <div class="ml-auto badge badge-pill badge-info">8</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-wallet"> </i><span>Recover Password</span></a></li>
                        <li class="nav-item-header nav-item">My Account</li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-config"> </i><span>Settings</span>
                          <div class="ml-auto badge badge-success">New</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                          <div class="ml-auto badge badge-warning">512</div>
                        </a></li>
                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-box2"> </i><span>Logs</span></a></li>
                        <li class="nav-item-divider nav-item"></li>
                        <li class="nav-item-btn text-right nav-item">
                          <button class="btn-pill btn btn-success btn-sm">Save</button>
                        </li>
                      </ul>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="pb-3 card-title">Headers Gradient Background with Images</h5>
                <div class="row">
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-mean-fruit">
                        <div class="menu-header-image dd-header-bg-5"></div>
                        <div class="menu-header-content">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-amy-crisp">
                        <div class="menu-header-image dd-header-bg-3"></div>
                        <div class="menu-header-content">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-arielle-smile">
                        <div class="menu-header-image dd-header-bg-1"></div>
                        <div class="menu-header-content">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-grow-early">
                        <div class="menu-header-image dd-header-bg-4"></div>
                        <div class="menu-header-content">
                          <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab2'">
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
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Separators &amp; Headers</h5>
                <div class="row">
                  <div class="col">
                    <ul class="nav flex-column">
                      <li class="nav-item-header nav-item">Activity</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Chat
                        <div class="ml-auto badge badge-pill badge-info">8</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Recover Password</a></li>
                      <li class="nav-item-header nav-item">My Account</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Settings
                        <div class="ml-auto badge badge-success">New</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Messages
                        <div class="ml-auto badge badge-warning">512</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Logs</a></li>
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn nav-item">
                        <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="nav flex-column">
                      <li class="nav-item-header nav-item">Activity</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-chat"> </i><span>Chat</span>
                        <div class="ml-auto badge badge-pill badge-info">8</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-wallet"> </i><span>Recover Password</span></a></li>
                      <li class="nav-item-header nav-item">My Account</li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-config"> </i><span>Settings</span>
                        <div class="ml-auto badge badge-success">New</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-coffee"> </i><span>Messages</span>
                        <div class="ml-auto badge badge-warning">512</div>
                      </a></li>
                      <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon pe-7s-box2"> </i><span>Logs</span></a></li>
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn nav-item">
                        <button class="btn-pill btn btn-success btn-sm">Save</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Menu Hover Styles</h5>
                <div class="row">
                  <div class="col-md-3">
                    <div class="p-1 mb-2 card-border card">
                      <div class="dropdown-menu dropdown-menu-inline"><h6 tabindex="-1" class="dropdown-header">Header</h6>
                        <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                        <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                        <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                        <div tabindex="-1" class="dropdown-divider"></div>
                        <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="p-1 mb-2 card-border card dropdown-menu-rounded">
                      <div class="dropdown-menu dropdown-menu-inline"><h6 tabindex="-1" class="dropdown-header">Header</h6>
                        <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                        <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                        <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                        <div tabindex="-1" class="dropdown-divider"></div>
                        <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="p-1 mb-2 card-border card dropdown-menu-shadow">
                      <div class="dropdown-menu dropdown-menu-inline"><h6 tabindex="-1" class="dropdown-header">Header</h6>
                        <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                        <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                        <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                        <div tabindex="-1" class="dropdown-divider"></div>
                        <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="p-1 mb-2 card-border card dropdown-menu-hover-link">
                      <div class="dropdown-menu dropdown-menu-inline"><h6 tabindex="-1" class="dropdown-header">Header</h6>
                        <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                        <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                        <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                        <div tabindex="-1" class="dropdown-divider"></div>
                        <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="p-1 mb-2 card-border card dropdown-menu-hover-primary">
                      <div class="dropdown-menu dropdown-menu-inline"><h6 tabindex="-1" class="dropdown-header">Header</h6>
                        <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                        <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                        <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                        <div tabindex="-1" class="dropdown-divider"></div>
                        <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="p-1 mb-2 card-border card dropdown-menu-hover-link">
                      <div class="dropdown-menu dropdown-menu-inline"><h6 tabindex="-1" class="dropdown-header">Header</h6>
                        <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-inbox"> </i><span>Menus</span></button>
                        <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i><span>Settings</span></button>
                        <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-book"> </i><span>Actions</span></button>
                        <div tabindex="-1" class="dropdown-divider"></div>
                        <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-picture"> </i><span>Dividers</span></button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="p-1 mb-2 card-border card dropdown-menu-rounded dropdown-menu-hover-primary">
                      <div class="dropdown-menu dropdown-menu-inline"><h6 tabindex="-1" class="dropdown-header">Header</h6>
                        <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                        <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                        <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                        <div tabindex="-1" class="dropdown-divider"></div>
                        <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab3'">
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
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";


  const TABS = [{
    title: 'Grid Menus',
    value: 'tab1',
  }, {
    title: 'Vertical Menus',
    value: 'tab2',
  }, {
    title: 'Horizontal Menus',
    value: 'tab3',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
    },
    data: () => ({
      heading: 'Navigation Menus',
      subheading: 'Navigation menus are one of the basic building blocks for any web or mobile app.',
      icon: 'pe-7s-photo-gallery icon-gradient bg-mean-fruit',

      tabs: TABS,
      currentTab: 'tab1',
    }),

    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }
</script>
