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
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Colorful Dots</h5>
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
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Basic</h5>
                <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-success"></i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p>
                        <span class="vertical-timeline-element-date">10:30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-warning"> </i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p>
                        <span class="vertical-timeline-element-date">12:25 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-danger"> </i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                        <span class="vertical-timeline-element-date">15:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-primary"> </i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title text-success">Something not important</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                        <span class="vertical-timeline-element-date">15:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-success"> </i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p>
                        <span class="vertical-timeline-element-date">10:30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-warning"> </i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p>
                        <span class="vertical-timeline-element-date">12:25 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-danger"> </i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                        <span class="vertical-timeline-element-date">15:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                                                <span class="vertical-timeline-element-icon bounce-in">
                                                    <i class="badge badge-dot badge-dot-xl badge-primary"> </i>
                                                </span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title text-success">Something not important</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                        <span class="vertical-timeline-element-date">15:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date">10:30 PM</span></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date">12:25 PM</span></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Simple Dots</h5>
                <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span class="text-success">15:00 PM</span></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Without Time</h5>
                <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p></div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                      <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p></div>
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
              <div class="card-body"><h5 class="card-title">Basic</h5>
                <div class="vertical-time-icons vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="vertical-timeline-element">
                    <div>
                      <div class="vertical-timeline-element-icon bounce-in">
                        <div class="timeline-icon border-primary">
                          <i class="lnr-license icon-gradient bg-night-fade"></i>
                        </div>
                      </div>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p>

                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <div class="vertical-timeline-element-icon bounce-in">
                        <div class="timeline-icon border-warning">
                          <i class="lnr-cog fa-spin icon-gradient bg-happy-itmeo"></i>
                        </div>
                      </div>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-success">15:00 PM</span></p>

                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <div class="vertical-timeline-element-icon bounce-in">
                        <div class="timeline-icon border-success"><i class="lnr-cloud-upload icon-gradient bg-plum-plate"></i></div>
                      </div>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>

                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <div class="vertical-timeline-element-icon bounce-in">
                        <div class="timeline-icon border-primary">
                          <i class="lnr-license text-primary"></i>
                        </div>
                      </div>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                        <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p>

                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <div class="vertical-timeline-element-icon bounce-in">
                        <div class="timeline-icon border-success bg-success">
                          <i class="fa fa-coffee text-white"></i>
                        </div>
                      </div>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title text-success">FontAwesome Icons</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>

                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <div class="vertical-timeline-element-icon bounce-in">
                        <div class="timeline-icon border-warning bg-warning">
                          <i class="fa fa-archive fa-w-16 text-white"></i>
                        </div>
                      </div>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                        <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>

                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon bg-danger border-danger"><i class="pe-7s-cloud-upload text-white"></i></div></span>
                      <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-warning">12:00 PM</b></p>
                        <p>Yet another one, at <span class="text-dark">15:00 PM</span></p></div>
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
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Scrollable Small</h5>
                <div class="scroll-area-sm">
                  <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date">10:30 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date">12:25 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                              class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date">10:30 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date">12:25 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                              class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date">10:30 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date">12:25 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                              class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                    </div>
                  </VuePerfectScrollbar>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Scrollable Medium</h5>
                <div class="scroll-area">
                  <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date">10:30 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date">12:25 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                              class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date">10:30 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date">12:25 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                              class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-success"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span class="vertical-timeline-element-date">10:30 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-success">15:00 PM</span></p><span class="vertical-timeline-element-date">12:25 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                              class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><i class="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">Something not important</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span class="vertical-timeline-element-date">15:00 PM</span></div>
                        </div>
                      </div>
                    </div>
                  </VuePerfectScrollbar>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Scrollable Large</h5>
                <div class="scroll-area-lg">
                  <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="vertical-time-icons vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon border-primary"><i class="lnr-license icon-gradient bg-night-fade"></i></div></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon border-warning"><i class="lnr-cog fa-spin icon-gradient bg-happy-itmeo"></i></div></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-danger">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-success">15:00 PM</span></p></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon border-success"><i class="lnr-cloud-upload icon-gradient bg-plum-plate"></i></div></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                          </div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon border-primary"><i class="lnr-license text-primary"></i></div></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">All Hands Meeting</h4>
                            <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon border-success bg-success"><svg aria-hidden="true" data-prefix="fas" data-icon="coffee"
                                                                                                                                              class="fa fa-coffee text-white"
                                                                                                                                              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path
                          fill="currentColor"
                          d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path></svg></div></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title text-success">FontAwesome Icons</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p></div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon border-warning bg-warning"><svg aria-hidden="true" data-prefix="fas" data-icon="archive"
                                                                                                                                              class="fa fa-archive fa-w-16 text-white"
                                                                                                                                              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                          fill="currentColor"
                          d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"></path></svg></div></span>
                          <div class="vertical-timeline-element-content bounce-in"><h4 class="timeline-title">Build the production release</h4>
                            <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                          </div>
                        </div>
                      </div>
                      <div class="vertical-timeline-element">
                        <div><span class="vertical-timeline-element-icon bounce-in"><div class="timeline-icon bg-danger border-danger"><i class="pe-7s-cloud-upload text-white"></i></div></span>
                          <div class="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b class="text-warning">12:00 PM</b></p>
                            <p>Yet another one, at <span class="text-dark">15:00 PM</span></p></div>
                        </div>
                      </div>
                    </div>
                  </VuePerfectScrollbar>
                </div>
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

  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  const TABS = [{
    title: 'Dot Badges',
    value: 'tab1',
  }, {
    title: 'Icon Badges',
    value: 'tab2',
  }, {
    title: 'Scrollable Timelines',
    value: 'tab3',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
      VuePerfectScrollbar
    },
    data: () => ({
      heading: 'Timelines',
      subheading: 'Timelines are used to show lists of notifications, tasks or actions in a beautiful way.',
      icon: 'pe-7s-light icon-gradient bg-malibu-beach',

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
