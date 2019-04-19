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
          <div class="col-lg-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Nav Menus</h5>
                <b-dropdown no-flip text="Dropdown Basic" class="mb-2 mr-2" variant="primary">
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
                <b-dropdown no-flip text="Dropdown Large" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
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
                <b-dropdown no-flip text="Dropdown Extra Large" class="mb-2 mr-2" menu-class="dropdown-menu-xl" variant="primary">
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
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Scrollable Dropdown Menus</h5>
                <b-dropdown no-flip text="Bottom Header Buttons" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-primary">
                      <div class="menu-header-image dd-header-bg-1"></div>
                      <div class="menu-header-content">
                        <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                        <div class="menu-header-btn-pane">
                          <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                          <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="scroll-area-xs">
                    <VuePerfectScrollbar class="scrollbar-container" v-once>
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
                    </VuePerfectScrollbar>
                  </div>
                </b-dropdown>

                <b-dropdown no-flip text="Left Aligned Header" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-success">
                      <div class="menu-header-image opacity-1 dd-header-bg-2"></div>
                      <div class="menu-header-content text-left"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6>
                        <div class="menu-header-btn-pane">
                          <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                          <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="scroll-area-xs">
                    <VuePerfectScrollbar class="scrollbar-container" v-once>
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
                    </VuePerfectScrollbar>
                  </div>
                </b-dropdown>
                <b-dropdown no-flip text="Left Aligned Header Buttons" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-secondary">
                      <div class="menu-header-image opacity-5 dd-header-bg-3"></div>
                      <div class="menu-header-content btn-pane-right">
                        <div><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                        <div class="menu-header-btn-pane">
                          <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="scroll-area-xs">
                    <VuePerfectScrollbar class="scrollbar-container" v-once>
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
                    </VuePerfectScrollbar>
                  </div>
                </b-dropdown>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Extra Large Menu without Subtitles</h5>
                <b-dropdown no-flip text="Primary" class="mb-2 mr-2" menu-class="dropdown-menu-xl" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-primary">
                      <div class="menu-header-image dd-header-bg-4"></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5></div>
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
          <div class="col-lg-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Dropdown Menu Headers</h5>
                <b-dropdown no-flip text="Primary" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
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
                    <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Logs</a></li>
                    <li class="nav-item-divider nav-item"></li>
                    <li class="nav-item-btn nav-item">
                      <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                    </li>
                  </ul>
                </b-dropdown>
                <b-dropdown no-flip text="Danger" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="danger">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-danger">
                      <div class="menu-header-image dd-header-bg-6"></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                    </div>
                  </div>
                  <ul class="nav flex-column">
                    <li class="nav-item-header nav-item">Activity</li>
                    <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Chat
                      <div class="ml-auto badge badge-pill badge-info">8</div>
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
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Dropdown Menu Header Buttons</h5>
                <b-dropdown no-flip text="Bottom Header Buttons" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-primary">
                      <div class="menu-header-image dd-header-bg-1"></div>
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
                <b-dropdown no-flip text="Left Aligned Header" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="success">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-success">
                      <div class="menu-header-image opacity-1 dd-header-bg-4"></div>
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
                <b-dropdown no-flip text="Left Aligned Header Buttons" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="secondary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-secondary">
                      <div class="menu-header-image opacity-5 dd-header-bg-1"></div>
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
        <div class="row">
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Dropdown Standard Menu with Headers</h5>
                <b-dropdown dropup no-flip text="Basic" class="mb-2 mr-2" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-success">
                      <div class="menu-header-image opacity-1 dd-header-bg-6"></div>
                      <div class="menu-header-content text-left"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6>
                        <div class="menu-header-btn-pane">
                          <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                          <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 tabindex="-1" class="dropdown-header">Header</h6>
                  <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                  <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                  <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Rounded" class="mb-2 mr-2 dropdown-menu-lg dropdown-menu-rounded" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-secondary">
                      <div class="menu-header-image opacity-5 dd-header-bg-2"></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                    </div>
                  </div>
                  <h6 tabindex="-1" class="dropdown-header">Header</h6>
                  <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                  <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                  <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Shadow" class="mb-2 mr-2 dropdown-menu-shadow" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-success">
                      <div class="menu-header-image opacity-1 dd-header-bg-6"></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                    </div>
                  </div>
                  <h6 tabindex="-1" class="dropdown-header">Header</h6>
                  <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                  <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                  <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Hover Link" class="mb-2 mr-2 dropdown-menu-hover-link" menu-class="dropdown-menu-xl" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-info">
                      <div class="menu-header-image opacity-5 dd-header-bg-3"></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                    </div>
                  </div>
                  <h6 tabindex="-1" class="dropdown-header">Header</h6>
                  <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                  <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                  <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Hover Background" class="mb-2 mr-2 dropdown-menu-hover-primary" menu-class="dropdown-menu-lg" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-warning">
                      <div class="menu-header-image opacity-1 dd-header-bg-4 "></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                    </div>
                  </div>
                  <h6 tabindex="-1" class="dropdown-header">Header</h6>
                  <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                  <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                  <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                </b-dropdown>
                <b-dropdown dropup  no-flip text="Icons" class="mb-2 mr-2" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-focus">
                      <div class="menu-header-image opacity-8 dd-header-bg-6"></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                    </div>
                  </div>
                  <h6 tabindex="-1" class="dropdown-header">Header</h6>
                  <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-inbox"> </i><span>Menus</span></button>
                  <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i><span>Settings</span></button>
                  <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-book"> </i><span>Actions</span></button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-picture"> </i><span>Dividers</span></button>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Right Aligned" class="mb-2 mr-2" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-dark">
                      <div class="menu-header-image opacity-1 dd-header-bg-3"></div>
                      <div class="menu-header-content"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
                    </div>
                  </div>
                  <h6 tabindex="-1" class="dropdown-header">Header</h6>
                  <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                  <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                  <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Dropdown Grid Menus</h5>
                <b-dropdown dropup no-flip text="Three Column Grid Menu" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-love-kiss">
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
                    <li class="nav-item-btn text-center nav-item">
                      <button class="btn-shadow btn btn-primary btn-sm">Submit</button>
                    </li>
                  </ul>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Three Column Bigger Menu" class="mb-2 mr-2" menu-class="dropdown-menu-xl" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-sunny-morning">
                      <div class="menu-header-image dd-header-bg-2"></div>
                      <div class="menu-header-content text-dark"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
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
                    <li class="nav-item-btn text-center nav-item">
                      <button class="btn-shadow btn btn-primary btn-sm">Submit</button>
                    </li>
                  </ul>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Two Columns Grid Menu" class="mb-2 mr-2" menu-class="dropdown-menu-lg" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-happy-itmeo">
                      <div class="menu-header-image dd-header-bg-2"></div>
                      <div class="menu-header-content">
                        <h5 class="menu-header-title">Settings</h5>
                        <h6 class="menu-header-subtitle">Manage all of your options</h6>
                      </div>
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
                    <li class="nav-item-btn text-center nav-item">
                      <button class="btn-shadow btn btn-primary btn-sm">Submit</button>
                    </li>
                  </ul>
                </b-dropdown>
                <b-dropdown dropup no-flip text="Two Column Bigger Menu" class="mb-2 mr-2" menu-class="dropdown-menu-xl" variant="primary">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-night-fade">
                      <div class="menu-header-image opacity-1 dd-header-bg-6"></div>
                      <div class="menu-header-content text-dark"><h5 class="menu-header-title">Settings</h5><h6 class="menu-header-subtitle">Manage all of your options</h6></div>
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
                    <li class="nav-item-btn text-center nav-item">
                      <button class="btn-shadow btn btn-primary btn-sm">Submit</button>
                    </li>
                  </ul>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class="main-card mb-3 card">
          <div class="card-body"><h5 class="card-title">Dropdown Standard Menu with Headers</h5>
            <b-dropdown no-flip text="Basic" class="mb-2 mr-2" variant="primary">
              <h6 class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">Menus</button>
              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item">Dividers</button>
            </b-dropdown>
            <b-dropdown no-flip text="Rounded" class="mb-2 mr-2 dropdown-menu-rounded" variant="primary">
              <h6 class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">Menus</button>
              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item">Dividers</button>
            </b-dropdown>
            <b-dropdown no-flip text="Shadow" class="mb-2 mr-2 dropdown-menu-shadow" variant="primary">
              <h6 class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">Menus</button>
              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item">Dividers</button>
            </b-dropdown>
            <b-dropdown no-flip text="Hover Link" class="mb-2 mr-2 dropdown-menu-hover-link" variant="primary">
              <h6 class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">Menus</button>
              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item">Dividers</button>
            </b-dropdown>
            <b-dropdown no-flip text="Hover Background" class="mb-2 mr-2 dropdown-menu-hover-primary" variant="primary">
              <h6 class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">Menus</button>
              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item">Dividers</button>
            </b-dropdown>
            <b-dropdown no-flip text="Icons" class="mb-2 mr-2" variant="primary">
              <h6 class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">Menus</button>
              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item">Dividers</button>
            </b-dropdown>
            <b-dropdown no-flip text="Right Aligned" class="mb-2 mr-2" variant="primary">
              <h6 class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">Menus</button>
              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item">Dividers</button>
            </b-dropdown>
          </div>
        </div>
        <b-row>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Basic</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-dropdown no-flip :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Split Dropdowns</h5>
                <template v-for="variant in ['primary','secondary','success','info','warning','danger','focus','alternate','light','dark','link']">
                  <b-dropdown no-flip split :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Split Outline Dropdowns</h5>
                <template v-for="variant in ['outline-primary','outline-secondary','outline-success','outline-info','outline-warning','outline-danger','outline-focus','outline-alternate','outline-light','outline-dark','outline-link']">
                  <b-dropdown no-flip split :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Outline</h5>
                <template v-for="variant in ['outline-primary','outline-secondary','outline-success','outline-info','outline-warning','outline-danger','outline-focus','outline-alternate','outline-light','outline-dark','outline-link']">
                  <b-dropdown no-flip :text="variant" class="mb-2 mr-2" :variant="variant">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Sizing</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-dropdown no-flip :text="'Button ' + size" class="mb-2 mr-2" variant="outline-primary" :size="size">
                    <button type="button" tabindex="0" class="dropdown-item">Menus</button>
                    <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                    <h6 tabindex="-1" class="dropdown-header">Header</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                  </b-dropdown>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Split Sizing</h5>
                <b-dropdown no-flip id="ddown-lg" size="lg" text="Large" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                </b-dropdown>
                <b-dropdown no-flip id="ddown-lg-split" size="lg" split text="Large Split" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
                <br>
                <b-dropdown no-flip id="ddown-sm" size="sm" text="Small" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
                <b-dropdown no-flip id="ddown-sm-split" size="sm" split text="Small Split" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  const TABS = [{
    title: 'Advanced Menus',
    value: 'tab1',
  }, {
    title: 'Regular Dropdowns',
    value: 'tab2',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
      VuePerfectScrollbar
    },
    data: () => ({
      heading: 'Dropdowns',
      subheading: 'Multiple styles, actions and effects are available for the Archited Framework dropdown buttons.\n',
      icon: 'pe-7s-umbrella icon-gradient bg-sunny-morning',

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
