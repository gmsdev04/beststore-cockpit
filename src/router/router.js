import Vue from 'vue'
import VueRouter from 'vue-router'
import Agora from '../views/Agora.vue'
import Estoque from '../views/Estoque.vue'
import Vendas from '../views/Vendas.vue'
import GruposDeAcessos from '../views/GruposDeAcessos.vue'
import Utilizado from '../views/Utilizado.vue'
import NovoUsuario from '../views/usuarios/NovoUsuario.vue'
import ConsultarUsuarios from '../views/usuarios/ConsultarUsuarios.vue'
import ConsultarNegocios from '../views/negocios/ConsultarNegocios.vue'
import NegociosDetalhes from '../views/negocios/detalhes/NegociosDetalhes.vue'
import NegociosNovo from '../views/negocios/novo/NegociosNovo.vue'
import ConsultarCamposPadroes from '../views/campos-padroes/ConsultarCamposPadroes.vue'
import CamposPadroesDetalhes from '../views/campos-padroes/detalhes/CamposPadroesDetalhes.vue'
import CamposPadroesNovo from '../views/campos-padroes/novo/CamposPadroesNovo.vue'

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
    path: '/usuarios',
    component: ConsultarUsuarios
  },
  {
    path: '/criar-novo',
    component: NovoUsuario
  },
  {
    path: '/negocios',
    component: ConsultarNegocios
  },
  {
    name: 'detalharNegocio',
    path: '/negocios/:id/detalhes',
    component: NegociosDetalhes,
    props: true
  },
  {
    name: 'novoNegocio',
    path: '/negocios/novo',
    component: NegociosNovo,
    props: true
  },
  {
    name: 'camposPadroes',
    path: '/campos-padroes',
    component: ConsultarCamposPadroes,
  },
  {
    name: 'camposPadroes.novo',
    path: '/campos-padroes/novo',
    component: CamposPadroesNovo,
  },
  {
    name:'camposPadroes.detalhes',
    path:"/campos-padroes/:id", 
    component:CamposPadroesDetalhes, 
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
