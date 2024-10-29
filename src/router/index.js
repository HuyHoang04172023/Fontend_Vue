import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChangeTitle from '@/components/day3/ChangeTitle.vue'
import InputDisplay from '@/components/day3/InputDisplay.vue'
import ItemListDay3 from '@/components/day3/ItemList.vue'
import SimpleCaculator from '@/components/day3/SimpleCaculator.vue'
import TodoListDay3 from '@/components/day3/TodoList.vue'
import CounterComponent from '@/components/day4/CounterComponent.vue'
import FormComponent from '@/components/day4/FormComponent.vue'
import ItemListDay4 from '@/components/day4/ItemList.vue'
import LifecycleDemo from '@/components/day4/LifecycleDemo.vue'
import TodoListDay4 from '@/components/day4/TodoList.vue'
import RouterLink from '@/components/day5/RouterLink.vue'
import CounterDisplay from '@/components/day5/CounterDisplay.vue'
import MyDashboard from '@/components/day5/bt3/MyDashboard.vue'
import MyProfile from '@/components/day5/bt3/MyProfile.vue'
import MySettings from '@/components/day5/bt3/MySettings.vue'
import MyNavbar from '@/components/day5/bt3/MyNavbar.vue'
import AllTodos from '@/components/day5/bt4/AllTodos.vue'
import CompletedTodos from '@/components/day5/bt4/CompletedTodos.vue'
import IncompleteTodos from '@/components/day5/bt4/IncompleteTodos.vue'
import NavbarB4 from '@/components/day5/bt4/NavbarB4.vue'
import ItemList from '@/components/day5/bt5/ItemList.vue'
import ItemDetail from '@/components/day5/bt5/ItemDetail.vue'




const routes = [
  {path: '/',name: 'home',component: HomeView},
  //Day 3
  {path: '/day3/changeTitle',name: 'day3_changeTitle',component: ChangeTitle},
  {path: '/day3/inputDisplay',name: 'day3_inputDisplay',component: InputDisplay},
  {path: '/day3/itemList',name: 'day3_itemList',component: ItemListDay3},
  {path: '/day3/caculator',name: 'day3_simpleCalculator',component: SimpleCaculator},
  {path: '/day3/toDoList',name: 'day3_toDoList',component: TodoListDay3},
  
  //Day 4
  {path: '/day4/counter',name: 'day4_counter',component: CounterComponent},
  {path: '/day4/form',name: 'day4_form',component: FormComponent},
  {path: '/day4/itemList',name: 'day4_itemList',component: ItemListDay4},
  {path: '/day4/lifecycle',name: 'day4_lifecycle',component: LifecycleDemo},
  {path: '/day4/toDoList',name: 'day4_toDoList',component: TodoListDay4},


  //Day 5
  {path: '/day5/routerLink',name: 'day5_routerLink',component: RouterLink},
  {path: '/day5/counter',name: 'day5_counter',component: CounterDisplay},
  { path: '/day5/dashboard', name: 'day5_dashboard', component: MyDashboard },
  { path: '/day5/profile', name: 'day5_profile', component: MyProfile },
  { path: '/day5/settings', name: 'day5_settings', component: MySettings },
  { path: '/day5/navbar', name: 'day5_navbar', component: MyNavbar },

  { path: '/day5/todoList', name: 'day5_toDoList', component: AllTodos },
  { path: '/day5/completed', name: 'day5_completedTodos', component: CompletedTodos },
  { path: '/day5/incomplete', name: 'day5_incompleteTodos', component: IncompleteTodos },
  { path: '/day5/navbarB4', name: 'day5_navbarB4', component: NavbarB4 },

  { path: '/day5/itemList', name: 'ItemList', component: ItemList },
  { path: '/day5/item/:id', name: 'ItemDetail', component: ItemDetail, props: true },








  



  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
