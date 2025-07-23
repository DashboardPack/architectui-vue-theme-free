<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row mt-4">
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
          <div class="widget-content-wrapper">
            <div class="widget-content-left">
              <div class="widget-heading">Total Orders</div>
              <div class="widget-subheading">Last year expenses</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-success"><span>1896</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
          <div class="widget-content-wrapper">
            <div class="widget-content-left">
              <div class="widget-heading">Clients</div>
              <div class="widget-subheading">Total Clients Profit</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-primary"><span>$ 568</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
          <div class="widget-content-wrapper">
            <div class="widget-content-left">
              <div class="widget-heading">Products Sold</div>
              <div class="widget-subheading">Total revenue streams</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-warning"><span>$14M</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
          <div class="widget-content-wrapper">
            <div class="widget-content-left">
              <div class="widget-heading">Followers</div>
              <div class="widget-subheading">People Interested</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-danger"><span>46%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider mt-0" style="margin-bottom: 30px"></div>
    <div class="row">
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content bg-night-fade">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Total Orders</div>
              <div class="widget-subheading">Last year expenses</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white"><span>1896</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content bg-arielle-smile">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Clients</div>
              <div class="widget-subheading">Total Clients Profit</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white"><span>$ 568</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content bg-premium-dark">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Products Sold</div>
              <div class="widget-subheading">Total revenue streams</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-warning"><span>$14M</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content bg-happy-green">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Followers</div>
              <div class="widget-subheading">People Interested</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-dark"><span>46%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider mt-0" style="margin-bottom: 30px"></div>
    <div class="row">
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
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
            <div class="widget-progress-wrapper">
              <div class="progress progress-bar-xs">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 65%"
                ></div>
              </div>
              <div class="progress-sub-label">
                <div class="sub-label-left">YoY Growth</div>
                <div class="sub-label-right">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
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
            <div class="widget-progress-wrapper">
              <div class="progress progress-bar-lg progress-bar-animated">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="47"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 47%"
                ></div>
              </div>
              <div class="progress-sub-label">
                <div class="sub-label-left">Retention</div>
                <div class="sub-label-right">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
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
            <div class="widget-progress-wrapper">
              <div class="progress progress-bar-xs progress-bar-animated-alt">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 85%"
                ></div>
              </div>
              <div class="progress-sub-label">
                <div class="sub-label-left">Sales</div>
                <div class="sub-label-right">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4">
        <div class="card mb-3 widget-content">
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
            <div class="widget-progress-wrapper">
              <div class="progress progress-bar-sm progress-bar-animated-alt">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 65%"
                ></div>
              </div>
              <div class="progress-sub-label">
                <div class="sub-label-left">Twitter Progress</div>
                <div class="sub-label-right">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider mt-0" style="margin-bottom: 30px"></div>
    <div class="main-card mb-3 card">
      <div class="row g-0">
        <div class="col-md-4">
          <div class="widget-content">
            <div class="widget-content-wrapper">
              <div class="widget-content-right ms-0 me-3">
                <div class="widget-numbers text-success">1896</div>
              </div>
              <div class="widget-content-left">
                <div class="widget-heading">Total Orders</div>
                <div class="widget-subheading">Last year expenses</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="widget-content">
            <div class="widget-content-wrapper">
              <div class="widget-content-right ms-0 me-3">
                <div class="widget-numbers text-warning">$ 14M</div>
              </div>
              <div class="widget-content-left">
                <div class="widget-heading">Products Sold</div>
                <div class="widget-subheading">Total revenue streams</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="widget-content">
            <div class="widget-content-wrapper">
              <div class="widget-content-right ms-0 me-3">
                <div class="widget-numbers text-danger">45.9%</div>
              </div>
              <div class="widget-content-left">
                <div class="widget-heading">Followers</div>
                <div class="widget-subheading">People Interested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider mt-0" style="margin-bottom: 30px"></div>
    <div class="main-card mb-3 card">
      <div class="row g-0">
        <div class="col-md-4">
          <div class="pt-0 pb-0 card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
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
              <li class="list-group-item">
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
        <div class="col-md-4">
          <div class="pt-0 pb-0 card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
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
              <li class="list-group-item">
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
        </div>
        <div class="col-md-4">
          <div class="pt-0 pb-0 card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
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
              <li class="list-group-item">
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
    <div class="divider mt-0" style="margin-bottom: 30px"></div>
    <div class="main-card mb-3 card">
      <div class="row">
        <div class="col-lg-6 col-xl-4">
          <div class="widget-content">
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
              <div class="widget-progress-wrapper">
                <div class="progress progress-bar-sm progress-bar-animated-alt">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow="43"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 43%"
                  ></div>
                </div>
                <div class="progress-sub-label">
                  <div class="sub-label-left">YoY Growth</div>
                  <div class="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="widget-content">
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
              <div class="widget-progress-wrapper">
                <div class="progress progress-bar-sm progress-bar-animated-alt">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    aria-valuenow="47"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 47%"
                  ></div>
                </div>
                <div class="progress-sub-label">
                  <div class="sub-label-left">Retention</div>
                  <div class="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="widget-content">
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
              <div class="widget-progress-wrapper">
                <div class="progress progress-bar-sm progress-bar-animated-alt">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="77"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 77%"
                  ></div>
                </div>
                <div class="progress-sub-label">
                  <div class="sub-label-left">Sales</div>
                  <div class="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="widget-content">
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
              <div class="widget-progress-wrapper">
                <div class="progress progress-bar-sm progress-bar-animated-alt">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 65%"
                  ></div>
                </div>
                <div class="progress-sub-label">
                  <div class="sub-label-left">Twitter Progress</div>
                  <div class="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider mt-0" style="margin-bottom: 30px"></div>
    <div class="main-card mb-3 card">
      <div class="row">
        <div class="col-md-4">
          <div class="widget-content">
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
              <div class="widget-progress-wrapper">
                <div class="progress progress-bar-sm progress-bar-animated-alt">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow="43"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 43%"
                  ></div>
                </div>
                <div class="progress-sub-label">
                  <div class="sub-label-left">YoY Growth</div>
                  <div class="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="widget-content">
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
              <div class="widget-progress-wrapper">
                <div class="progress progress-bar-sm progress-bar-animated-alt">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="77"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 77%"
                  ></div>
                </div>
                <div class="progress-sub-label">
                  <div class="sub-label-left">Sales</div>
                  <div class="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="widget-content">
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
              <div class="widget-progress-wrapper">
                <div class="progress progress-bar-sm progress-bar-animated-alt">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 65%"
                  ></div>
                </div>
                <div class="progress-sub-label">
                  <div class="sub-label-left">Twitter Progress</div>
                  <div class="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider mt-0" style="margin-bottom: 30px"></div>
    <div class="row">
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
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
                  <div class="widget-progress-wrapper">
                    <div class="progress progress-bar-xs">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 65%"
                      ></div>
                    </div>
                    <div class="progress-sub-label">
                      <div class="sub-label-left">YoY Growth</div>
                      <div class="sub-label-right">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
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
                  <div class="widget-progress-wrapper">
                    <div class="progress progress-bar-lg progress-bar-animated">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow="47"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 47%"
                      ></div>
                    </div>
                    <div class="progress-sub-label">
                      <div class="sub-label-left">Retention</div>
                      <div class="sub-label-right">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
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
                  <div class="widget-progress-wrapper">
                    <div class="progress progress-bar-sm progress-bar-animated-alt">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 65%"
                      ></div>
                    </div>
                    <div class="progress-sub-label">
                      <div class="sub-label-left">Twitter Progress</div>
                      <div class="sub-label-right">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
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
                  <div class="widget-progress-wrapper">
                    <div class="progress progress-bar-xs progress-bar-animated-alt">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 85%"
                      ></div>
                    </div>
                    <div class="progress-sub-label">
                      <div class="sub-label-left">Sales</div>
                      <div class="sub-label-right">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
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
              <li class="list-group-item">
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
              <li class="list-group-item">
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
              <li class="list-group-item">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  name: 'ChartBoxes3',
  components: {
    PageTitle
  },
  data() {
    return {
      heading: 'Chart Boxes III',
      subheading: 'Highly configurable boxes best used for showing numbers in an user friendly way.',
      icon: 'pe-7s-wallet icon-gradient bg-plum-plate',
      // Sample data for dynamic content
      metrics: {
        totalOrders: {
          value: 1896,
          growth: 65,
          label: 'Total Orders',
          subtitle: 'Last year expenses'
        },
        clients: {
          value: '$12.6k',
          growth: 47,
          label: 'Clients',
          subtitle: 'Total Clients Profit'
        },
        productsSold: {
          value: '$3M',
          growth: 85,
          label: 'Products Sold',
          subtitle: 'Total revenue streams'
        },
        followers: {
          value: '45.9%',
          growth: 65,
          label: 'Followers',
          subtitle: 'People Interested'
        }
      }
    }
  },
  mounted() {
    // Initialize any animations or dynamic behaviors
    this.initializeAnimations()
  },
  methods: {
    initializeAnimations() {
      // Add smooth animations to progress bars
      setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-bar')
        progressBars.forEach(bar => {
          bar.classList.add('animate')
        })
      }, 500)
    },
    formatNumber(value) {
      if (typeof value === 'number') {
        return value.toLocaleString()
      }
      return value
    }
  }
}
</script>

<style scoped>
/* Enhanced progress bar animations */
.progress-bar {
  transition: width 0.8s ease-in-out;
}

.progress-bar.animate {
  animation: progressAnimation 1.2s ease-out;
}

@keyframes progressAnimation {
  0% {
    width: 0% !important;
  }
  100% {
    width: var(--target-width);
  }
}

/* Widget hover effects */
.widget-content {
  transition: all 0.3s ease;
}

.card:hover .widget-content {
  transform: translateY(-2px);
}

.card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Enhanced number animations */
.widget-numbers {
  transition: all 0.3s ease;
}

.card:hover .widget-numbers {
  transform: scale(1.05);
}

/* Progress bar size variations */
.progress-bar-xs {
  height: 4px;
}

.progress-bar-sm {
  height: 6px;
}

.progress-bar-lg {
  height: 10px;
}

/* Improved responsive behavior */
@media (max-width: 768px) {
  .widget-content-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .widget-content-left,
  .widget-content-right {
    margin-bottom: 1rem;
  }

  .widget-numbers {
    font-size: 1.5rem;
  }
}

/* Enhanced color variants */
.bg-night-fade {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-arielle-smile {
  background: linear-gradient(135deg, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
}

.bg-premium-dark {
  background: linear-gradient(135deg, #434343 0%, #000000 100%);
}

.bg-happy-green {
  background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
}

/* List group enhancements */
.list-group-item {
  border: none;
  padding: 1.25rem;
}

.list-group-item:not(:last-child) {
  border-bottom: 1px solid #e9ecef;
}

/* Progress animation for different sizes */
.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

.progress-bar-animated-alt {
  animation: progress-bar-stripes 1s linear infinite reverse;
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}

/* Widget content alignment improvements */
.widget-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.widget-heading {
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.25rem;
}

.widget-subheading {
  color: #6c757d;
  font-size: 0.875rem;
}

.widget-numbers {
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1;
}
</style>
