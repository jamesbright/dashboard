import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import UserList from './components/UserList';

Vue.use(VueRouter)
export default new VueRouter({
routes: [
{ path: '',  component: Dashboard },
{ path: '/users', name: 'users', component: Users },
{ path: '/user-list/:id', component: UserList }
]
})