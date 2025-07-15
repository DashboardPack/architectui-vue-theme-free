<template>
    <div class="app-container app-theme-white">
        <Header />
        <Sidebar />
        <div class="app-main__outer">
            <div class="app-main__inner">
                <slot></slot>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
    import Header from "../Components/Header";
    import Sidebar from "../Components/Sidebar";
    import Footer from "../Components/Footer";
    // import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faCog,
    } from '@fortawesome/free-solid-svg-icons'
    // import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCog,
    );
    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
            Footer,
        },
        methods: {
        },
    }
</script>
