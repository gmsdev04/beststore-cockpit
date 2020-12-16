import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Agora from '../views/Agora.vue'
import Estoque from '../views/Estoque.vue'
import Vendas from '../views/Vendas.vue'
import GruposDeAcessos from '../views/GruposDeAcessos.vue'
import Utilizado from '../views/Utilizado.vue'
import CriarNovoUsuario from '../views/usuarios/CriarNovoUsuario.vue'
import ConsultarUsuarios from '../views/usuarios/ConsultarUsuarios.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Agora
  },
  {
    path: '/estoque',
    component: Estoque
  },
  {
    path: '/vendas',
    component: Vendas
  },
  {
    path: '/utilizado',
    component: Utilizado
  },
  {
    path: '/grupos-de-acessos',
    component: GruposDeAcessos
  },
  {
    path: '/consultar-usuarios',
    component: ConsultarUsuarios
  },
  {
    path: '/criar-novo',
    component: CriarNovoUsuario
  },
  {
    path: '/helloWorld',
    component: HelloWorld 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
