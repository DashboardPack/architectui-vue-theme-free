<template>
    <div class="app-container app-theme-white">
        <transition name="fade" mode="out-in" appear>
            <Header />
        </transition>
        <transition name="fade" mode="out-in" appear>
            <Sidebar />
        </transition>
        <div class="app-main__outer">
            <div class="app-main__inner">
                <slot></slot>
            </div>
            <transition name="fade" mode="out-in" appear>
                <Footer/>
            </transition>
        </div>
        <!-- Modal Component -->
        <b-modal id="modal1" title="Bootstrap-Vue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        <b-modal id="modallg" size="lg" title="Large Modal">
            Hello Modal!
        </b-modal>
        <b-modal id="modalsm" size="sm" title="Small Modal">
            Hello Modal!
        </b-modal>
    </div>
</template>

<script>
    import Header from "../Components/Header";
    import Sidebar from "../Components/Sidebar";
    import Footer from "../Components/Footer";
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faCog,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCog,
    );
    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
            Footer,
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },
        methods: {
        },
    }
</script>
