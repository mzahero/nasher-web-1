import Vue from "vue";
import UUID from 'vue-uuid';
import * as VueGoogleMaps from "@/node_modules/vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: { key: 'AIzaSyA9tpXS3PKeW6qlzMekUVSLCtoTzLLjWRI' }
});
Vue.use(UUID)
