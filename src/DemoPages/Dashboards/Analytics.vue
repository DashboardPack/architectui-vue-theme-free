<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="mb-3 card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                    Portfolio Performance
                </div>
                <div class="btn-actions-pane-right text-capitalize">
                    <button class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm">View All</button>
                </div>
            </div>
            <div class="no-gutters row">
                <div class="col-sm-6 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-10 bg-warning"></div>
                            <i class="lnr-laptop-phone text-dark opacity-8"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Cash Deposits</div>
                            <div class="widget-numbers">1,7M</div>
                            <div class="widget-description opacity-8 text-focus">
                                <div class="d-inline text-danger pr-1">
                                    <font-awesome-icon icon="angle-down"/>
                                    <span class="pl-1">54.1%</span>
                                </div>
                                less earnings
                            </div>
                        </div>
                    </div>
                    <div class="divider m-0 d-md-none d-sm-block"></div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-9 bg-danger"></div>
                            <i class="lnr-graduation-hat text-white"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Invested Dividents</div>
                            <div class="widget-numbers"><span>9M</span></div>
                            <div class="widget-description opacity-8 text-focus">
                                Grow Rate:
                                <span class="text-info pl-1">
                                    <font-awesome-icon icon="angle-down"/>
                                    <span class="pl-1">14.1%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="divider m-0 d-md-none d-sm-block"></div>
                </div>
                <div class="col-sm-12 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-9 bg-success"></div>
                            <i class="lnr-apartment text-white"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Capital Gains</div>
                            <div class="widget-numbers text-success"><span>$563</span></div>
                            <div class="widget-description text-focus">
                                Increased by
                                <span class="text-warning pl-1">
                                    <font-awesome-icon icon="angle-up"/>
                                    <span class="pl-1">7.35%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center d-block p-3 card-footer">
                <button class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg">
                  <span class="mr-2 opacity-7">
                      <i class="icon icon-anim-pulse ion-ios-analytics-outline"></i>
                  </span>
                    <span class="mr-1">View Complete Report</span>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <div class="mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i class="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"> </i>
                            Technical Support
                        </div>
                        <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
                            <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" no-caret>
                                <span slot="button-content"><i class="pe-7s-menu btn-icon-wrapper"></i></span>
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
                    <div class="p-0 card-body">
                        <div class="p-1 slick-slider-sm mx-auto">
                            <slick ref="slick" :options="slickOptions2">
                                <div class="widget-chart widget-chart2 text-left p-0">
                                    <div class="widget-chat-wrapper-outer">
                                        <div class="widget-chart-content widget-chart-content-lg pb-0">
                                            <div class="widget-chart-flex">
                                                <div class="widget-title opacity-5 text-muted text-uppercase">Helpdesk Tickets</div>
                                            </div>
                                            <div class="widget-numbers">
                                                <div class="widget-chart-flex">
                                                    <div>
                                                        <span class="text-warning">34</span>
                                                    </div>
                                                    <div class="widget-title ml-2 font-size-lg font-weight-normal text-dark">
                                                        <span class="opacity-5 text-muted pl-2 pr-1">5%</span>
                                                        increase
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-chart-wrapper he-auto opacity-10 m-0">
                                            <chart1 :height="145"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-chart widget-chart2 text-left p-0">
                                    <div class="widget-chat-wrapper-outer">
                                        <div class="widget-chart-content widget-chart-content-lg pb-0">
                                            <div class="widget-chart-flex">
                                                <div class="widget-title opacity-5 text-muted text-uppercase">New Accounts since 2018</div>
                                            </div>
                                            <div class="widget-numbers">
                                                <div class="widget-chart-flex">
                                                    <div>
                                                        <span class="opacity-10 text-success pr-2">
                                                            <font-awesome-icon icon="angle-up"/>
                                                        </span>
                                                        <span>78</span>
                                                        <small class="opacity-5 pl-1">%</small>
                                                    </div>
                                                    <div class="widget-title ml-2 font-size-lg font-weight-normal text-muted">
                                                        <span class="text-success pl-2">+14</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-chart-wrapper he-auto opacity-10 m-0">
                                            <chart2 :height="145"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="widget-chart widget-chart2 text-left p-0">
                                    <div class="widget-chat-wrapper-outer">
                                        <div class="widget-chart-content widget-chart-content-lg pb-0">
                                            <div class="widget-chart-flex">
                                                <div class="widget-title opacity-5 text-muted text-uppercase">Last Year Total Sales</div>
                                            </div>
                                            <div class="widget-numbers">
                                                <div class="widget-chart-flex">
                                                    <div>
                                                        <small class="opacity-3 pr-1">$</small>
                                                        <span>629</span>
                                                        <span class="text-primary pl-3">
                                                            <font-awesome-icon icon="angle-down"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-chart-wrapper he-auto opacity-10 m-0">
                                            <chart3 :height="145"/>
                                        </div>
                                    </div>
                                </div>

                            </slick>
                        </div>

                        <h6 class="text-muted text-uppercase font-size-md opacity-5 pl-3 pr-3 pb-1 font-weight-normal">Sales Progress</h6>
                        <ul class="list-group list-group-flush">
                            <li class="p-3 bg-transparent list-group-item">
                                <div class="widget-content p-0">
                                    <div class="widget-content-outer">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Total Orders</div>
                                                <div class="widget-subheading">Last year expenses</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-success">
                                                    <small>$</small>
                                                    1896
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-progress-wrapper">
                                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                            </div>
                                            <div class="progress-sub-label">
                                                <div class="sub-label-left">YoY Growth</div>
                                                <div class="sub-label-right">100%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-6">
                <div class="card-hover-shadow-2x mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i class="header-icon lnr-lighter icon-gradient bg-amy-crisp"> </i>
                            Timeline Example
                        </div>
                        <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
                            <b-dropdown toggle-class="btn-icon btn-icon-only" right variant="link" no-caret>
                                <span slot="button-content"><i class="pe-7s-menu btn-icon-wrapper"></i></span>
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
                    <div class="scroll-area-lg">
                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                            <div class="p-4">
                                <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                    <div class="dot-danger vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">All Hands Meeting</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-warning vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <p>Yet another one, at <span class="text-success">15:00 PM</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-success vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">Build the production release
                                                    <div class="badge badge-danger ml-2">NEW</div>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-primary vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">
                                                    Something not important
                                                    <div class="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/1.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/2.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/3.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/4.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/5.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/9.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/7.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/8.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                            <div class="avatar-icon"><i>+</i></div>
                                                        </div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-warning vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <p>Yet another one, at <span class="text-success">15:00 PM</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-success vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">Build the production release
                                                    <div class="badge badge-danger ml-2">NEW</div>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-info vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">This dot has an info state</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-dark vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">This dot has a dark state</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-danger vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">All Hands Meeting</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-warning vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <p>Yet another one, at <span class="text-success">15:00 PM</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-success vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">Build the production release
                                                    <div class="badge badge-danger ml-2">NEW</div>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dot-primary vertical-timeline-element">
                                        <div>
                                            <span class="vertical-timeline-element-icon bounce-in"></span>
                                            <div class="vertical-timeline-element-content bounce-in">
                                                <h4 class="timeline-title">
                                                    Something not important
                                                    <div class="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/1.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/2.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/3.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/4.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/5.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/9.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/7.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                                            <div class="avatar-icon"><img
                                                                src="@/assets/images/avatars/8.jpg"
                                                                alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                            <div class="avatar-icon"><i>+</i></div>
                                                        </div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VuePerfectScrollbar>
                    </div>
                    <div class="d-block text-center card-footer">
                        <button class="btn-shadow btn-wide btn-pill btn btn-focus">
                            <span class="badge badge-dot badge-dot-lg badge-warning badge-pulse">Badge</span>
                            View All Messages
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <div class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <small class="opacity-5">$</small>
                                            <span>874</span></div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">sales last month</h6>
                        </div>
                        <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                            <div class="col-md-12">
                                <trend
                                    :data="[0, 8, 5, 7, 7, 8, 5, 2, 7, 8]"
                                    :gradient="['var(--success)']"
                                    stroke-width="3"
                                    :height="80"
                                    stroke-linecap="round"
                                    auto-draw
                                    smooth>
                                </trend>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <small class="opacity-5">$</small>
                                            <span>1283</span></div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">sales Income</h6>
                        </div>
                        <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                            <div class="col-md-12">
                                <trend
                                    :data="[2,8,3,6,8,4,3,6,8,4]"
                                    :gradient="['var(--primary)']"
                                    stroke-width="3"
                                    :height="80"
                                    stroke-linecap="round"
                                    auto-draw
                                    smooth>
                                </trend>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <small class="opacity-5">$</small>
                                            <span>1286</span></div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">last month sales</h6>
                        </div>
                        <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                            <div class="col-md-12">
                                <trend
                                    :data="[5,8,3,6,8,5,3,8,5,3,8]"
                                    :gradient="['var(--warning)']"
                                    stroke-width="3"
                                    :height="80"
                                    stroke-linecap="round"
                                    auto-draw
                                    smooth>
                                </trend>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <small class="opacity-5">$</small>
                                            <span>564</span></div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">total revenue</h6>
                        </div>
                        <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                            <div class="col-md-12">
                                <trend
                                    :data="[5,7,8,2,5,7,4,2,4,9]"
                                    :gradient="['var(--danger)']"
                                    stroke-width="3"
                                    :height="80"
                                    stroke-linecap="round"
                                    auto-draw
                                    smooth>
                                </trend>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"> </i>
                    Easy Dynamic Tables
                </div>
                <div class="btn-actions-pane-right actions-icon-btn">
                </div>
            </div>
            <div class="card-body">
                <b-table bordered class="mb-0" striped hover :items="items" :fields="fields"></b-table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <div class="card-hover-shadow-2x mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="header-icon lnr-database icon-gradient bg-malibu-beach"> </i>Tasks List</div>
                        <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
                            <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" right>
                                <span slot="button-content"><font-awesome-icon icon="th"/></span>
                                <div>
                                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-inbox"> </i><span>Menus</span></button>
                                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i><span>Settings</span></button>
                                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-book"> </i><span>Actions</span></button>
                                    <div tabindex="-1" class="dropdown-divider"></div>
                                    <div class="p-1 text-right">
                                        <button class="mr-2 btn-shadow btn-sm btn btn-link">View Details</button>
                                        <button class="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                                    </div>
                                </div>
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="scroll-area-lg">
                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                            <ul class="todo-list-wrapper list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-warning"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox12" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                    for="exampleCustomCheckbox12">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Wash the car
                                                    <div class="badge badge-danger ml-2">Rejected</div>
                                                </div>
                                                <div class="widget-subheading"><i>Written by Bob</i></div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check"/>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <font-awesome-icon icon="trash-alt"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-focus"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                   for="exampleCustomCheckbox1">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Task with hover dropdown menu</div>
                                                <div class="widget-subheading">
                                                    <div>By Johnny
                                                        <div class="badge badge-pill badge-info ml-2">NEW</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <div class="d-inline-block">
                                                    <b-dropdown toggle-class="btn-icon btn-icon-only" right variant="link" no-caret>
                                                        <span slot="button-content"><i class="pe-7s-menu btn-icon-wrapper"></i></span>
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
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-primary"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox4" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                   for="exampleCustomCheckbox4">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Badge on the right task</div>
                                                <div class="widget-subheading">This task has show on hover actions!</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check"/>
                                                </button>
                                            </div>
                                            <div class="widget-content-right ml-3">
                                                <div class="badge badge-pill badge-success">Latest Task</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-info"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                   for="exampleCustomCheckbox2">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="42" class="rounded" src="@/assets/images/avatars/1.jpg" alt="">
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Go grocery shopping</div>
                                                <div class="widget-subheading">A short description for this todo item</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check"/>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <font-awesome-icon icon="trash-alt"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-warning"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox12" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                    for="exampleCustomCheckbox12">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Wash the car
                                                    <div class="badge badge-danger ml-2">Rejected</div>
                                                </div>
                                                <div class="widget-subheading"><i>Written by Bob</i></div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check"/>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <font-awesome-icon icon="trash-alt"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-focus"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                   for="exampleCustomCheckbox1">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Task with hover dropdown menu</div>
                                                <div class="widget-subheading">
                                                    <div>By Johnny
                                                        <div class="badge badge-pill badge-info ml-2">NEW</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <div class="d-inline-block">
                                                    <b-dropdown toggle-class="btn-icon btn-icon-only" right variant="link" no-caret>
                                                        <span slot="button-content"><i class="pe-7s-menu btn-icon-wrapper"></i></span>
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
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-primary"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox4" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                   for="exampleCustomCheckbox4">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Badge on the right task</div>
                                                <div class="widget-subheading">This task has show on hover actions!</div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check"/>
                                                </button>
                                            </div>
                                            <div class="widget-content-right ml-3">
                                                <div class="badge badge-pill badge-success">Latest Task</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-success"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox3" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                   for="exampleCustomCheckbox3">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Development Task</div>
                                                <div class="widget-subheading">Finish Vue ToDo List App</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="badge badge-warning mr-2">69</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <font-awesome-icon icon="check"/>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <font-awesome-icon icon="trash-alt"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </VuePerfectScrollbar>
                    </div>
                    <div class="d-block text-right card-footer">
                        <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-primary">Add Task</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-6">
                <div class="card-hover-shadow-2x mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i class="header-icon lnr-printer icon-gradient bg-ripe-malin"> </i>
                            Chat Box
                        </div>
                        <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
                            <b-dropdown toggle-class="btn-icon btn-icon-only" no-caret variant="link" right>
                                <span slot="button-content"><font-awesome-icon icon="th"/></span>
                                <div>
                                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-inbox"> </i><span>Menus</span></button>
                                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i><span>Settings</span></button>
                                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-book"> </i><span>Actions</span></button>
                                    <div tabindex="-1" class="dropdown-divider"></div>
                                    <div class="p-1 text-right">
                                        <button class="mr-2 btn-shadow btn-sm btn btn-link">View Details</button>
                                        <button class="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                                    </div>
                                </div>
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="scroll-area-lg">
                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                            <div class="chat-wrapper p-1">
                                <div class="chat-box-wrapper">
                                    <div>
                                        <div class="avatar-icon-wrapper mr-1">
                                            <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                                            <div class="avatar-icon avatar-icon-lg rounded">
                                                <img src="@/assets/images/avatars/2.jpg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="chat-box">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                                        <small class="opacity-6">
                                            <font-awesome-icon icon="calendar-alt" class="mr-1"/>
                                            11:01 AM | Yesterday
                                        </small>
                                    </div>
                                </div>
                                <div class="float-right">
                                    <div class="chat-box-wrapper chat-box-wrapper-right">
                                        <div>
                                            <div class="chat-box">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</div>
                                            <small class="opacity-6">
                                                <font-awesome-icon icon="calendar-alt" class="mr-1"/>
                                                11:01 AM | Yesterday
                                            </small>
                                        </div>
                                        <div>
                                            <div class="avatar-icon-wrapper ml-1">
                                                <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                                                <div class="avatar-icon avatar-icon-lg rounded">
                                                    <img src="@/assets/images/avatars/3.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-box-wrapper">
                                    <div>
                                        <div class="avatar-icon-wrapper mr-1">
                                            <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                                            <div class="avatar-icon avatar-icon-lg rounded">
                                                <img src="@/assets/images/avatars/2.jpg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="chat-box">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                                        <small class="opacity-6">
                                            <font-awesome-icon icon="calendar-alt" class="mr-1"/>
                                            11:01 AM | Yesterday
                                        </small>
                                    </div>
                                </div>
                                <div class="float-right">
                                    <div class="chat-box-wrapper chat-box-wrapper-right">
                                        <div>
                                            <div class="chat-box">Denouncing pleasure and praising pain was born and I will give you a complete account.</div>
                                            <small class="opacity-6">
                                                <font-awesome-icon icon="calendar-alt" class="mr-1"/>
                                                11:01 AM | Yesterday
                                            </small>
                                        </div>
                                        <div>
                                            <div class="avatar-icon-wrapper ml-1">
                                                <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                                                <div class="avatar-icon avatar-icon-lg rounded">
                                                    <img src="@/assets/images/avatars/2.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="float-right">
                                    <div class="chat-box-wrapper chat-box-wrapper-right">
                                        <div>
                                            <div class="chat-box">The master-builder of human happiness.</div>
                                            <small class="opacity-6">
                                                <font-awesome-icon icon="calendar-alt" class="mr-1"/>
                                                11:01 AM | Yesterday
                                            </small>
                                        </div>
                                        <div>
                                            <div class="avatar-icon-wrapper ml-1">
                                                <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                                                <div class="avatar-icon avatar-icon-lg rounded">
                                                    <img src="@/assets/images/avatars/2.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VuePerfectScrollbar>
                    </div>
                    <div class="card-footer">
                        <input placeholder="Write here and hit enter to send..." type="text" class="form-control-sm form-control">
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="no-gutters row">
                <div class="col-md-12 col-lg-4">
                    <ul class="list-group list-group-flush">
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Total Orders</div>
                                            <div class="widget-subheading">Last year expenses</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-success">1896</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Clients</div>
                                            <div class="widget-subheading">Total Clients Profit</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-primary">$12.6k</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12 col-lg-4">
                    <ul class="list-group list-group-flush">
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Followers</div>
                                            <div class="widget-subheading">People Interested</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-danger">45,9%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Products Sold</div>
                                            <div class="widget-subheading">Total revenue streams</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-warning">$3M</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12 col-lg-4">
                    <ul class="list-group list-group-flush">
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Total Orders</div>
                                            <div class="widget-subheading">Last year expenses</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-success">1896</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Clients</div>
                                            <div class="widget-subheading">Total Clients Profit</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-primary">$12.6k</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitle.vue";
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import chart1 from './Analytics/chart1';
    import chart2 from './Analytics/chart2';
    import chart3 from './Analytics/chart3';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faTrashAlt,
        faCheck,
        faCalendarAlt,
        faAngleDown,
        faAngleUp,
        faTh,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faTrashAlt,
        faCheck,
        faAngleDown,
        faAngleUp,
        faTh,
        faCalendarAlt,
    );

    export default {
        components: {
            PageTitle,
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
            chart1,
            chart2,
            chart3,

        },
        data: () => ({
            heading: 'Analytics Dashboard',
            subheading: 'This is an example dashboard created using build-in elements and components.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
        }),

        methods: {
        },

    }


</script>
