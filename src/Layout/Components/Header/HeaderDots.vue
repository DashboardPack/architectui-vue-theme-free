<template>
    <div class="header-dots">
        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-xl" variant="link" no-caret right>
            <span slot="button-content">
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                    <div class="icon-wrapper-bg bg-primary"></div>
                    <i class="lnr-menu text-primary"></i>
                </div>
            </span>
        </b-dropdown>
        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-xl" variant="link" no-caret right>
            <span slot="button-content">
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                    <div class="icon-wrapper-bg bg-danger"></div>
                    <i class="lnr-bullhorn text-danger"></i>
                    <div class="badge badge-dot badge-dot-sm badge-danger">Notifications</div>
                </div>
            </span>
        </b-dropdown>
        <b-dropdown toggle-class="p-0" menu-class="dropdown-menu-xl" variant="link" no-caret right>
            <span slot="button-content">
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                    <div class="icon-wrapper-bg bg-success"></div>
                    <i class="lnr-pie-chart text-success"></i>
                </div>
            </span>
        </b-dropdown>
    </div>
</template>

<script>

    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faArrowUp,
        faCog,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faArrowUp,
        faCog,
    );

    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },
        data: () => ({}),
        methods: {}
    }
</script>

