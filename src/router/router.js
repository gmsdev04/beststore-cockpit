import Vue from 'vue'
import VueRouter from 'vue-router'
import Cognito from '../plugins/CognitoAdapter'
import Agora from '../views/agora/Agora.vue'
import Estoque from '../views/estoque/Estoque.vue'
import Vendas from '../views/vendas/Vendas.vue'
import GruposDeAcessos from '../views/grupos-de-acessos/GruposDeAcessos.vue'
import Utilizado from '../views/utilizado/Utilizado.vue'
import ConsultarUsuarios from '../views/usuarios/ConsultarUsuarios.vue'
import ConsultarNegocios from '../views/negocios/ConsultarNegocios.vue'
import NegociosDetalhes from '../views/negocios/detalhes/NegociosDetalhes.vue'
import NegociosNovo from '../views/negocios/novo/NegociosNovo.vue'
import ConsultarCamposPadroes from '../views/campos-padroes/ConsultarCamposPadroes.vue'
import CamposPadroesDetalhes from '../views/campos-padroes/detalhes/CamposPadroesDetalhes.vue'
import CamposPadroesNovo from '../views/campos-padroes/novo/CamposPadroesNovo.vue'
import Cockpit from '../views/Cockpit.vue'
import PrimeiroAcesso from '../views/primeiro-acesso/PrimeiroAcesso.vue'
import Cadastros from '../views/cadastros/Cadastros.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Cockpit,
    children : [
      { path: 'agora', component: Agora },
      { path: 'estoque', component: Estoque },
      { path: 'vendas', component: Vendas},
      { path: 'utilizado', component: Utilizado },
      { path: 'grupos-de-acessos', component: GruposDeAcessos},
      { path: 'utilizado', component: Utilizado },
      { path: 'grupos-de-acessos', component: GruposDeAcessos },
      { path: 'cadastros', component: Cadastros },
      { path: 'usuarios', component: ConsultarUsuarios },
      { path: 'negocios', component: ConsultarNegocios},
      { path: 'negocios/:id/detalhes', name: 'detalharNegocio', component: NegociosDetalhes, props: true},
      { path: 'negocios/novo', name: 'novoNegocio', component: NegociosNovo, props: true },
      { path: 'campos-padroes', name: 'camposPadroes', component: ConsultarCamposPadroes},
      { path: 'campos-padroes/novo', name: 'camposPadroes.novo', component: CamposPadroesNovo},
      { path: "campos-padroes/:id",  name:'camposPadroes.detalhes', component:CamposPadroesDetalhes, props: true},

    ]
  },
  {
    path : '/primeiroacesso',
    component: PrimeiroAcesso,
  },
  {
    path : '*',
    redirect : '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  console.log(from);
    Cognito.retrieveUser()
    .then(attributes => {
      
      //SE NÃO POSSUI LOJA PADRÃO É PRIMEIRO ACESSO
      if(attributes.some(e => e.Name === 'custom:lojapadrao')){
        console.log('possui sobrenome')
        return;
      }

      console.log(attributes)
      next()
    }
    )
    .catch(error => {
      switch (error){
        case 'UsuarioNaoLogado': window.location.href = 'http://localhost:8081/login?redirect_uri='+window.location.origin+from.path;  break;
        default: break;
      }
    });
})

export default router
