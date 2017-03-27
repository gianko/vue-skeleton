import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import filter from 'filter';
import directive from 'directive';
import component from 'component';
import router from 'router';
import store from 'store';
import App from './App';

// import polyfills
import './polyfill';

// import styles
import './style/screen.scss';

// register filters globally
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));

// register directives globally
Object.keys(directive).forEach(key => Vue.directive(key, directive[key]));

// register components globally
Object.keys(component).forEach(key => Vue.component(key, component[key]));

// sync router data to store
sync(store, router);

const app = new Vue({
	...App,
	router,
	store,
});

app.$mount('#app');