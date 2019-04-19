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
              <div class="card-header">Header</div>
              <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p></div>
              <div class="d-block text-right card-footer">
                <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                <button class="btn btn-success btn-lg">Save</button>
              </div>
            </div>
            <div class="mb-3 text-white card-border bg-dark card">
              <div class="card-header"><i class="header-icon lnr-screen icon-gradient bg-warm-flame"> </i>Without Shadow
                <div class="btn-actions-pane-right">
                  <button class="btn btn-light btn-sm">Actions</button>
                </div>
              </div>
              <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p></div>
              <div class="d-block text-right card-footer">
                <button class="mr-2 text-white btn btn-link btn-sm">No</button>
                <button class="btn btn-warning btn-lg">Yes</button>
              </div>
            </div>
            <div class="mb-3 card text-white bg-success">
              <div class="card-header">Header</div>
              <div class="card-body">With supporting text below as a natural lead-in to additional content.</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-hover-shadow-2x mb-3 card">
              <div class="card-header">Shadow Hover Card</div>
              <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p></div>
              <div class="d-block text-right card-footer">
                <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                <button class="btn-shadow-primary btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
            <div class="card-hover-shadow card-border mb-3 card">
              <div class="card-header">Card Hover Shadow</div>
              <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p></div>
              <div class="d-block text-right card-footer">
                <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                <button class="btn-shadow-primary btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
            <div class="mb-3 text-dark card-border card text-white bg-light">
              <div class="card-header">Header</div>
              <div class="card-body">With supporting text below as a natural lead-in to additional content.</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-header"><i class="header-icon lnr-laptop-phone icon-gradient bg-plum-plate"> </i>Header Menu
                <div class="btn-actions-pane-right actions-icon-btn">
                  <b-dropdown id="ddown1" text="Actions">
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p></div>
              <div class="d-block text-right card-footer">
                <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                <button class="btn btn-success btn-lg">Save</button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-header">
                <i class="header-icon lnr-bicycle icon-gradient bg-love-kiss"> </i>
                Header with Buttons
                <div class="btn-actions-pane-right actions-icon-btn">
                  <div role="group" class="btn-group-sm nav btn-group">
                    <a data-toggle="tab" href="#tab-eg3-0" class="btn-shadow active btn btn-dark">Btn 1</a>
                    <a data-toggle="tab" href="#tab-eg3-1" class="btn-shadow  btn btn-dark">Btn 2</a>
                    <a data-toggle="tab" href="#tab-eg3-2" class="btn-shadow  btn btn-dark">Btn 3</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-eg3-0" role="tabpanel">
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                      publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.</p></div>
                  <div class="tab-pane" id="tab-eg3-1" role="tabpanel"><p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p></div>
                  <div class="tab-pane" id="tab-eg3-2" role="tabpanel"><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p></div>
                </div>
              </div>
              <div class="d-block text-right card-footer">
                <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>
                <button class="btn-wide btn btn-success">Save</button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-header"><i class="header-icon lnr-gift icon-gradient bg-mixed-hopes"> </i>Alternate Buttons
                <div class="btn-actions-pane-right actions-icon-btn">
                  <div role="group" class="btn-group-sm nav btn-group">
                    <a data-toggle="tab" href="#tab-eg2-0" class="btn-pill pl-3 active btn btn-focus">Btn 1</a>
                    <a data-toggle="tab" href="#tab-eg2-1" class="btn btn-focus">Btn 2</a>
                    <a data-toggle="tab" href="#tab-eg2-2" class="btn-pill pr-3  btn btn-focus">Btn 3</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-eg2-0" role="tabpanel"><p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p></div>
                  <div class="tab-pane" id="tab-eg2-1" role="tabpanel"><p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p></div>
                  <div class="tab-pane" id="tab-eg2-2" role="tabpanel"><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p></div>
                </div>
              </div>
            </div>
            <b-card class="mb-3" no-body>
              <b-tabs pills card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-header"><i class="header-icon lnr-graduation-hat icon-gradient bg-happy-itmeo"> </i>Header Menu
                <div class="btn-actions-pane-right actions-icon-btn">
                  <div role="group" class="btn-group-sm btn-group">
                    <button class="pl-3 btn-pill btn btn-warning">Left</button>
                    <button class="btn btn-warning">Middle</button>
                    <button class="btn-pill pr-3 btn btn-warning">Right</button>
                  </div>
                </div>
              </div>
              <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p></div>
              <div class="d-block text-right card-footer">
                <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                <button class="btn-wide btn-shadow btn btn-primary">Submit</button>
              </div>
            </div>
            <b-card class="mb-3" no-body>
              <b-tabs card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
            <b-card class="mb-3 nav-justified" no-body>
              <b-tabs card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
            <b-card class="mb-3 nav-justified" no-body>
              <b-tabs pills card>
                <b-tab title="Tab 1" active>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</p>
                </b-tab>
                <b-tab title="Tab 2">
                  <p>Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </p>
                </b-tab>
                <b-tab title="Tab 3">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class="row">
          <div class="col-md-4">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Basic Example</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p></div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Card with Subtitle</h5><h6 class="card-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h6>
                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis eni</p></div>
            </div>
            <div class="mb-3 card card-body"><h5 class="card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.
              <button class="btn btn-primary mt-2">Go somewhere</button>
            </div>
            <div class="mb-3 text-center card card-body"><h5 class="card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.
              <button class="btn btn-danger mt-2">Go somewhere</button>
            </div>
            <div class="mb-3 text-right card card-body"><h5 class="card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.
              <button class="btn btn-outline-focus mt-2">Go somewhere</button>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-header">Header</div>
              <div class="card-body"><h5 class="card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.
                <button class="btn btn-warning mt-2">Go somewhere</button>
              </div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="main-card mb-3 card"><img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=318%C3%97180&amp;w=318&amp;h=180" alt="Card image cap" class="card-img-top">
              <div class="card-body"><h5 class="card-title">Card title</h5><h6 class="card-subtitle">Card subtitle</h6>Some quick example text to build on the card title and make up the bulk of the card's content.
                <br><br>
                <button class="btn btn-secondary">Button</button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Card Title</h5>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                <br><br>
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=318%C3%97180&amp;w=318&amp;h=180" alt="Card image cap" class="card-img-bottom"></div>
          </div>
          <div class="col-md-4">
            <div class="main-card mb-3 card">
              <div class="card-body"><h5 class="card-title">Card title</h5><h6 class="mb-0 card-subtitle">Card subtitle</h6></div>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=318%C3%97180&amp;w=318&amp;h=180" alt="Card image cap">
              <div class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.<br><br><a href="javascript:void(0);" class="card-link">Card Link</a><a href="javascript:void(0);"
                                                                                                                                                                                                           class="card-link">Another
                Link</a></div>
            </div>
            <div class="main-card mb-3 card"><img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=318%C3%97180&amp;w=318&amp;h=180" alt="Card image cap" class="card-img-top">
              <div class="card-body"><h5 class="card-title">Card Title</h5>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                <br><br>
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab3'">
        <div class="row">
          <div class="col-md-4">
            <div class="card-shadow-primary border mb-3 card card-body border-primary"><h5 class="card-title">Primary Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-shadow-secondary border mb-3 card card-body border-secondary"><h5 class="card-title">Secondary Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-shadow-warning border mb-3 card card-body border-warning"><h5 class="card-title">Warning Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-shadow-danger border mb-3 card card-body border-danger"><h5 class="card-title">Danger Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-shadow-success border mb-3 card card-body border-success"><h5 class="card-title">Success Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-shadow-info border mb-3 card card-body border-info"><h5 class="card-title">Info Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-shadow-focus border mb-3 card card-body border-focus"><h5 class="card-title">Focus Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-shadow-alternate border mb-3 card card-body border-alternate"><h5 class="card-title">Alternate Card Shadow</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="mb-3 card text-white"><img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=318%C3%97270&amp;w=318&amp;h=270&amp;bg=333333&amp;txtclr=666666" alt="Card image cap" class="card-img">
              <div class="card-img-overlay"><h5 class="text-white card-title">Card Title</h5>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                <br><br>
                <small class="text-white">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-border mb-3 card card-body border-primary"><h5 class="card-title">Primary Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-border mb-3 card card-body border-secondary"><h5 class="card-title">Secondary Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-border mb-3 card card-body border-warning"><h5 class="card-title">Warning Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-border mb-3 card card-body border-danger"><h5 class="card-title">Danger Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-border mb-3 card card-body border-success"><h5 class="card-title">Success Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-border mb-3 card card-body border-info"><h5 class="card-title">Info Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-border mb-3 card card-body border-focus"><h5 class="card-title">Focus Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="card-border mb-3 card card-body border-alternate"><h5 class="card-title">Alternate Card Border</h5>With supporting text below as a natural lead-in to additional content.</div>
          </div>
          <div class="col-md-4">
            <div class="mb-3 card text-white bg-primary">
              <div class="card-header">Header</div>
              <div class="card-body">With supporting text below as a natural lead-in to additional content.</div>
              <div class="card-footer">Footer</div>
            </div>
            <div class="mb-3 card text-white card-body" style="background-color: rgb(51, 51, 51); border-color: rgb(51, 51, 51);"><h5 class="text-white card-title">Special Title Treatment</h5>With supporting text below as a
              natural lead-in to additional content.
            </div>
            <div class="mb-3 card text-white card-body bg-primary"><h5 class="text-white card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="mb-3 card text-white card-body bg-success"><h5 class="text-white card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="mb-3 card text-white card-body bg-danger"><h5 class="text-white card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="mb-3 card text-white card-body bg-info"><h5 class="text-white card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.</div>
            <div class="mb-3 card text-white card-body bg-warning"><h5 class="text-white card-title">Special Title Treatment</h5>With supporting text below as a natural lead-in to additional content.</div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab4'">

        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="card-title">Elements Block Loading</div>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <button @click="show1 = !show1" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Spinner Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show1" spinner="bar-fade-scale" color="var(--primary)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="d-block text-right card-footer">
                        <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-success btn-lg">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show2 = !show2" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Ring Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show2" spinner="ring" color="var(--success)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="d-block text-right card-footer">
                        <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-success btn-lg">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show3 = !show3" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Bar Fade Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show3" spinner="bar-fade" color="var(--danger)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p></div>
                    <div class="d-block text-right card-footer">
                      <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                      <button class="btn btn-success btn-lg">Save</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show4 = !show4" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Line Scale Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show4" spinner="line-scale" color="var(--info)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p></div>
                    <div class="d-block text-right card-footer">
                      <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                      <button class="btn btn-success btn-lg">Save</button>
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
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";


  const TABS = [{
    title: 'Advanced',
    value: 'tab1',
  }, {
    title: 'Basic',
    value: 'tab2',
  }, {
    title: 'Color States',
    value: 'tab3',
  }, {
    title: 'Block Loading',
    value: 'tab4',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
    },
    data: () => ({
      heading: 'Cards',
      subheading: 'Wide selection of cards with multiple styles, borders, actions and hover effects.',
      icon: 'pe-7s-stopwatch icon-gradient bg-amy-crisp',

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
