<template>
    <div>
        <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
        <div class="mb-3 card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize fw-normal">
                    <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                    Data Statistics
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm-6 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-start">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-10 bg-warning"></div>
                            <i class="pe-7s-scissors text-white opacity-8"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Cash Deposits</div>
                            <div class="widget-numbers">1,7M</div>
                            <div class="widget-description opacity-8 text-focus">
                                <div class="d-inline text-danger pe-1">
                                    <i class="fas fa-angle-down"></i>
                                    <span class="ps-1">54.1%</span>
                                </div>
                                less earnings
                            </div>
                        </div>
                    </div>
                    <div class="divider m-0 d-md-none d-sm-block"></div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-start">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-9 bg-danger"></div>
                            <i class="pe-7s-radio text-white"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Invested Dividents</div>
                            <div class="widget-numbers"><span>9M</span></div>
                            <div class="widget-description opacity-8 text-focus">
                                Grow Rate:
                                <span class="text-info ps-1">
                                    <i class="fas fa-angle-down"></i>
                                    <span class="ps-1">14.1%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="divider m-0 d-md-none d-sm-block"></div>
                </div>
                <div class="col-sm-12 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-start">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-9 bg-success"></div>
                            <i class="pe-7s-musiclist text-white"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Capital Gains</div>
                            <div class="widget-numbers text-success"><span>$563</span></div>
                            <div class="widget-description text-focus">
                                Increased by
                                <span class="text-warning ps-1">
                                    <i class="fas fa-angle-up"></i>
                                    <span class="ps-1">7.35%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center d-block p-3 card-footer">
                <button class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg">
                  <span class="me-2 opacity-7">
                      <i class="icon icon-anim-pulse ion-ios-analytics-outline"></i>
                  </span>
                    <span class="me-1">View Complete Report</span>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <div class="mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize fw-normal">
                            <i class="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"> </i>
                            Technical Support
                        </div>
                    </div>
                    <div class="p-0 card-body">
                        <div class="p-1 slick-slider-sm mx-auto">
                            <div class="widget-chart widget-chart2 text-start p-0">
                                <div class="widget-chat-wrapper-outer">
                                    <div class="widget-chart-content widget-chart-content-lg pb-0">
                                        <div class="widget-chart-flex">
                                            <div class="widget-title opacity-5 text-muted text-uppercase">Helpdesk
                                                Tickets
                                            </div>
                                        </div>
                                        <div class="widget-numbers">
                                            <div class="widget-chart-flex">
                                                <div>
                                                    <span class="text-warning">34</span>
                                                </div>
                                                <div
                                                    class="widget-title ms-2 font-size-lg fw-normal text-dark">
                                                    <span class="opacity-5 text-muted ps-2 pe-1">5%</span>
                                                    increase
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget-chart-wrapper he-auto opacity-10 m-0">
                                        <!-- chart1 :height="145" / -->
                                        <div class="chart-placeholder bg-light p-3 text-center">
                                            <small class="text-muted">Chart component currently disabled (Vue 2 project)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h6 class="text-muted text-uppercase font-size-md opacity-5 ps-3 pe-3 pb-1 fw-normal">
                            Sales Progress</h6>
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
                                                <div class="progress-bar bg-primary" role="progressbar"
                                                     aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"
                                                     style="width: 43%;"></div>
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
                        <div class="card-header-title font-size-lg text-capitalize fw-normal">
                            <i class="header-icon lnr-lighter icon-gradient bg-amy-crisp"> </i>
                            Timeline Example
                        </div>
                    </div>
                    <div class="scroll-area-lg">
                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                            <div class="p-4">
                                <div
                                    class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
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
                                                    <div class="badge badge-danger ms-2">NEW</div>
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
                                                    <div class="badge badge-danger ms-2">NEW</div>
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
                                                    <div class="badge badge-danger ms-2">NEW</div>
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
                            View All Messages
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-success border-success">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 ps-3 pb-1">
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
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-primary border-primary">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 ps-3 pb-1">
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
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-warning border-warning">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 ps-3 pb-1">
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
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-danger border-danger">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 ps-3 pb-1">
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
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <div class="card-hover-shadow-2x mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize fw-normal"><i
                            class="header-icon lnr-database icon-gradient bg-malibu-beach"> </i>Tasks List
                        </div>
                    </div>
                    <div class="scroll-area-lg">
                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                            <ul class="todo-list-wrapper list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-warning"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox12"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox12">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Wash the car
                                                    <div class="badge badge-danger ms-2">Rejected</div>
                                                </div>
                                                <div class="widget-subheading"><i>Written by Bob</i></div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <i class="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-focus"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox1"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox1">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Task with hover dropdown menu</div>
                                                <div class="widget-subheading">
                                                    <div>By Johnny
                                                        <div class="badge rounded-pill badge-info ms-2">NEW</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-primary"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox4"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox4">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Badge on the right task</div>
                                                <div class="widget-subheading">This task has show on hover actions!
                                                </div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                            </div>
                                            <div class="widget-content-right ms-3">
                                                <div class="badge rounded-pill badge-success">Latest Task</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-info"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox2"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox2">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left me-3">
                                                <div class="widget-content-left">
                                                    <img width="42" class="rounded" src="@/assets/images/avatars/1.jpg"
                                                         alt="">
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Go grocery shopping</div>
                                                <div class="widget-subheading">A short description for this todo item
                                                </div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <i class="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-warning"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox12"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox12">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Wash the car
                                                    <div class="badge badge-danger ms-2">Rejected</div>
                                                </div>
                                                <div class="widget-subheading"><i>Written by Bob</i></div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <i class="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-focus"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox1"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox1">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Task with hover dropdown menu</div>
                                                <div class="widget-subheading">
                                                    <div>By Johnny
                                                        <div class="badge rounded-pill badge-info ms-2">NEW</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <i class="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-primary"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox4"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox4">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Badge on the right task</div>
                                                <div class="widget-subheading">This task has show on hover actions!
                                                </div>
                                            </div>
                                            <div class="widget-content-right widget-content-actions">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                            </div>
                                            <div class="widget-content-right ms-3">
                                                <div class="badge rounded-pill badge-success">Latest Task</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="todo-indicator bg-success"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left me-2">
                                                <div class="form-check"><input type="checkbox"
                                                                                                   id="exampleCustomCheckbox3"
                                                                                                   class="form-check-input"><label
                                                    class="form-check-label"
                                                    for="exampleCustomCheckbox3">&nbsp;</label>
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Development Task</div>
                                                <div class="widget-subheading">Finish Vue ToDo List App</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="badge badge-warning me-2">69</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <button class="border-0 btn-transition btn btn-outline-success">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                                <button class="border-0 btn-transition btn btn-outline-danger">
                                                    <i class="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </VuePerfectScrollbar>
                    </div>
                    <div class="d-block text-end card-footer">
                        <button class="me-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-primary">Add Task</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-6">
                <div class="card-hover-shadow-2x mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize fw-normal">
                            <i class="header-icon lnr-laptop-phone me-3 text-muted opacity-6"> </i>
                            Tables Examples
                        </div>
                    </div>
                    <div class="card-body">
                        <table aria-busy="false" aria-colcount="3"
                               class="table b-table table-striped table-hover table-bordered border mb-0">
                            <!----><!---->
                            <thead role="rowgroup" class=""><!---->
                            <tr role="row">
                                <th role="columnheader" scope="col" aria-colindex="1" class="">First Name</th>
                                <th role="columnheader" scope="col" aria-colindex="2" class="">Last Name</th>
                                <th role="columnheader" scope="col" aria-colindex="3" class="">Age</th>
                            </tr>
                            </thead>
                            <tfoot role="rowgroup" class="">
                            <tr role="row">
                                <th role="columnheader" scope="col" aria-colindex="1" class="">First Name</th>
                                <th role="columnheader" scope="col" aria-colindex="2" class="">Last Name</th>
                                <th role="columnheader" scope="col" aria-colindex="3" class="">Age</th>
                            </tr>
                            </tfoot>
                            <tbody role="rowgroup" class=""><!---->
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Dickerson</td>
                                <td role="cell" aria-colindex="2" class="">Macdonald</td>
                                <td role="cell" aria-colindex="3" class="">40</td>
                            </tr>
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Larsen</td>
                                <td role="cell" aria-colindex="2" class="">Shaw</td>
                                <td role="cell" aria-colindex="3" class="">21</td>
                            </tr>
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Geneva</td>
                                <td role="cell" aria-colindex="2" class="">Wilson</td>
                                <td role="cell" aria-colindex="3" class="">89</td>
                            </tr>
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Dickerson</td>
                                <td role="cell" aria-colindex="2" class="">Macdonald</td>
                                <td role="cell" aria-colindex="3" class="">40</td>
                            </tr>
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Larsen</td>
                                <td role="cell" aria-colindex="2" class="">Shaw</td>
                                <td role="cell" aria-colindex="3" class="">21</td>
                            </tr>
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Geneva</td>
                                <td role="cell" aria-colindex="2" class="">Wilson</td>
                                <td role="cell" aria-colindex="3" class="">89</td>
                            </tr><tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Dickerson</td>
                                <td role="cell" aria-colindex="2" class="">Macdonald</td>
                                <td role="cell" aria-colindex="3" class="">40</td>
                            </tr>
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Larsen</td>
                                <td role="cell" aria-colindex="2" class="">Shaw</td>
                                <td role="cell" aria-colindex="3" class="">21</td>
                            </tr>
                            <tr role="row" class="">
                                <td role="cell" aria-colindex="1" class="">Geneva</td>
                                <td role="cell" aria-colindex="2" class="">Wilson</td>
                                <td role="cell" aria-colindex="3" class="">89</td>
                            </tr><!----><!----></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="row g-0">
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

    // import chart1 from './Analytics/chart1.vue';
    // import chart2 from './Analytics/chart2.vue';
    // import chart3 from './Analytics/chart3.vue';

    // FontAwesome temporarily replaced with CSS classes
    // import {library} from '@fortawesome/fontawesome-svg-core'
    // import {
    //     faTrashAlt,
    //     faCheck,
    //     faCalendarAlt,
    //     faAngleDown,
    //     faAngleUp,
    //     faTh,
    // } from '@fortawesome/free-solid-svg-icons'
    // import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    // library.add(
    //     faTrashAlt,
    //     faCheck,
    //     faAngleDown,
    //     faAngleUp,
    //     faTh,
    //     faCalendarAlt,
    // );

    export default {
        components: {
            PageTitle,
            VuePerfectScrollbar,
            // 'font-awesome-icon': FontAwesomeIcon,
            // chart1,
            // chart2,
            // chart3,

        },
        data: () => ({
            heading: 'Analytics Dashboard',
            subheading: 'This is an example dashboard created using build-in elements and components.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
        }),

        methods: {},

    }


</script>
