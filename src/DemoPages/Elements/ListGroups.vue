<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

    <div class="content">
        <div class="row">
          <div class="col-lg-6">
            <div class="main-card mb-3 card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="">
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Alina Mcloughlin</div>
                        <div class="widget-subheading">A short profile description</div>
                      </div>
                      <div class="widget-content-right">
                        <div role="group" class="btn-group-sm btn-group">
                          <button type="button" class="btn-shadow btn btn-primary">Hire</button>
                          <button type="button" class="btn-shadow btn btn-primary">Fire</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <img width="42" class="rounded" src="@/assets/images/avatars/2.jpg" alt="">
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Ruben Tillman</div>
                        <div class="widget-subheading">Etiam sit amet orci eget eros faucibus</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="badge badge-danger">NEW</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <img width="42" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt="">
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Vinnie Wagstaff</div>
                      </div>
                      <div class="widget-content-right">
                        <button class="btn-pill btn-hover-shine btn btn-focus btn-sm">Details</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <img width="42" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt="">
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Ella-Rose Henry</div>
                        <div class="widget-subheading">Lorem ipsum dolor sit amet, consectetuer</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-primary"><span class="count-up-wrapper">
                          <ICountUp
                            :startVal="startVal"
                            :endVal="endVal"
                            :decimals="decimals"
                            :duration="duration"
                            :options="options"
                            @ready="onReady"
                          />
                        </span></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <img width="42" class="rounded-circle" src="@/assets/images/avatars/5.jpg" alt="">
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Eliot Huber</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="ml-auto badge badge-pill badge-warning">43</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <div class="widget-content-left">
                          <img width="42" class="rounded" src="@/assets/images/avatars/1.jpg" alt="">
                        </div>
                      </div>
                      <div class="widget-content-left flex2">
                        <div class="widget-heading">Product Sales</div>
                        <div class="widget-subheading opacity-10">
                          <span class="pr-2">
                            <b>43</b> Sales
                          </span>
                          <span>
                              <b class="text-success">$156,24</b> Totals
                          </span>
                        </div>
                      </div>
                      <div class="widget-content-right text-right mr-3">
                        <div><b>52,5%</b></div>
                        YoY Growth
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Product Sales</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <div class="icon-wrapper border-light rounded m-0">
                          <div class="icon-wrapper-bg bg-light"></div>
                          <i class="lnr-cog icon-gradient bg-happy-itmeo"></i></div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Hidden Actions Pane</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="btn-pill btn btn-outline-primary">Follow</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left center-elem mr-2"><i class="pe-7s-file text-muted fsize-2"></i></div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Example file 1</div>
                      </div>
                      <div class="widget-content-right">
                        <button class="btn-icon btn-icon-only btn btn-link"><i class="pe-7s-download fsize-2 btn-icon-wrapper"> </i></button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-header">ToDo List</div>
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
              <div class="d-block text-right card-footer">
                <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                <button class="btn btn-success btn-lg">Save</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Alina Mcloughlin</div>
                          <div class="widget-subheading">A short profile description</div>
                        </div>
                        <div class="widget-content-right">
                          <div role="group" class="btn-group-sm btn-group">
                            <button type="button" class="btn-shadow btn btn-primary">Hire</button>
                            <button type="button" class="btn-shadow btn btn-primary">Fire</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded" src="@/assets/images/avatars/5.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Ruben Tillman</div>
                          <div class="widget-subheading">Etiam sit amet orci eget eros faucibus</div>
                        </div>
                        <div class="widget-content-right">
                          <div class="badge badge-danger">NEW</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Vinnie Wagstaff</div>
                        </div>
                        <div class="widget-content-right">
                          <button class="btn-pill btn-hover-shine btn btn-focus btn-sm">Details</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Ella-Rose Henry</div>
                          <div class="widget-subheading">Lorem ipsum dolor sit amet, consectetuer</div>
                        </div>
                        <div class="widget-content-right">
                          <div class="widget-numbers text-primary"><span>$ 568</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Eliot Huber</div>
                        </div>
                        <div class="widget-content-right">
                          <div class="ml-auto badge badge-pill badge-warning">43</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img width="42" class="rounded" src="@/assets/images/avatars/4.jpg" alt="">
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Product Sales</div>
                          <div class="widget-subheading opacity-10">
                            <span class="pr-2"><b>43</b> Sales</span>
                            <span><b class="text-success">$156,24</b> Totals</span>
                          </div>
                        </div>
                        <div class="widget-content-right text-right mr-3">
                          <div><b>52,5%</b></div>
                          YoY Growth
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left">
                          <div class="widget-heading">Product Sales</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper border-light rounded m-0">
                            <div class="icon-wrapper-bg bg-light"></div>
                            <i class="lnr-cog icon-gradient bg-happy-itmeo"></i></div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Hidden Actions Pane</div>
                        </div>
                        <div class="widget-content-right widget-content-actions">
                          <button class="btn-pill btn btn-outline-primary">Follow</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left center-elem mr-2"><i class="pe-7s-file text-muted fsize-2"></i></div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Example file 1</div>
                        </div>
                        <div class="widget-content-right">
                          <button class="btn-icon btn-icon-only btn btn-link"><i class="pe-7s-download fsize-2 btn-icon-wrapper"> </i></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">List group</h5>
                <ul class="list-group">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">List group buttons</h5>
                <div>
                  <ul class="list-group">
                    <button class="active list-group-item-action list-group-item">Cras justo odio</button>
                    <button class="list-group-item-action list-group-item">Dapibus ac facilisis in</button>
                    <button class="list-group-item-action list-group-item">Morbi leo risus</button>
                    <button class="list-group-item-action list-group-item">Porta ac consectetur ac</button>
                    <button class="disabled list-group-item-action list-group-item">Vestibulum at eros</button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">List group badges</h5>
                <ul class="list-group">
                  <li class="justify-content-between list-group-item">Cras justo odio <span class="badge badge-secondary badge-pill">14</span></li>
                  <li class="justify-content-between list-group-item">Dapibus ac facilisis in <span class="badge badge-secondary badge-pill">2</span></li>
                  <li class="justify-content-between list-group-item">Morbi leo risus <span class="badge badge-secondary badge-pill">1</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">List group contextual classes</h5>
                <ul class="list-group">
                  <li class="list-group-item-success list-group-item">Cras justo odio</li>
                  <li class="list-group-item-info list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item-warning list-group-item">Morbi leo risus</li>
                  <li class="list-group-item-danger list-group-item">Porta ac consectetur ac</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">List group custom content</h5>
                <ul class="list-group">
                  <li class="active list-group-item"><h5 class="list-group-item-heading">List group item heading</h5>
                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p></li>
                  <li class="list-group-item"><h5 class="list-group-item-heading">List group item heading</h5>
                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p></li>
                  <li class="list-group-item"><h5 class="list-group-item-heading">List group item heading</h5>
                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">List group disabled items</h5>
                <ul class="list-group"><a href="javascript:void(0);" class="disabled list-group-item">Cras justo odio</a><a href="javascript:void(0);" class="list-group-item">Dapibus ac facilisis in</a><a
                  href="javascript:void(0);" class="list-group-item">Morbi leo risus</a><a href="javascript:void(0);" class="list-group-item">Porta ac consectetur ac</a><a href="javascript:void(0);" class="list-group-item">Vestibulum
                  at eros</a></ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">List group without border</h5>
                <ul class="list-group list-group-flush"><a href="javascript:void(0);" class="disabled list-group-item">Cras justo odio</a><a href="javascript:void(0);" class="list-group-item">Dapibus ac facilisis in</a><a
                  href="javascript:void(0);" class="list-group-item">Morbi leo risus</a><a href="javascript:void(0);" class="list-group-item">Porta ac consectetur ac</a><a href="javascript:void(0);" class="list-group-item">Vestibulum
                  at eros</a></ul>
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

  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faTrashAlt,
    faCheck
  } from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
    faTrashAlt,
    faCheck
  );

  export default {
    components: {
      PageTitle,

      VuePerfectScrollbar,
      'font-awesome-icon': FontAwesomeIcon,
    },
    data: () => ({
      heading: 'List Groups',
      subheading: 'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
      icon: 'pe-7s-paint icon-gradient bg-sunny-morning',

    }),


  }
</script>
