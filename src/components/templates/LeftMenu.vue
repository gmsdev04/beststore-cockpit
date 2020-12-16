<template>
  <v-navigation-drawer app permanent absolute :dark="darkTheme" expand-on-hover clipped >

   
    <!-- OPÇÕES SEM SUB ITEMS -->
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>

        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title  >{{ item.title }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>

    <v-divider />
    <!-- CONFIGURACOES -->
    <v-list dense nav>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon color="green darken-2">mdi-cogs</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Configurações da loja</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
    props : {
        darkTheme: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            items: [
                {
                    title: 'Agora',
                    icon: 'mdi-chart-areaspline-variant',
                    color: 'green darken-2',
                    to: '/'
                },
                {
                    title: 'Usuários',
                    icon: 'mdi-account-supervisor-outline',
                    color: 'green darken-2',
                    to:'/usuarios'
                },
                {
                    title: 'Estoque',
                    icon: 'mdi-dresser-outline',
                    color: 'green darken-2',
                    to: '/estoque'
                },
                {
                    title: 'Vendas',
                    icon: 'mdi-cart',
                    color: 'green darken-2',
                    to: '/vendas'
                },
                {
                    title: 'Utilizado',
                    icon: 'mdi-cash-usd',
                    color: 'green darken-2',
                    to: '/utilizado'
                },
                {
                    title: 'Grupos de acessos',
                    icon: 'mdi-account-group',
                    color: 'green darken-2',
                    to: '/grupos-de-acessos'
                },
                {
                    title: 'Negócios',
                    icon: 'mdi-head-cog-outline',
                    color: 'green darken-2',
                    to: '/negocios'
                },
            ]
        }
    }
}
</script>

<style scoped>
.mainSpace{
  background-color: lightgreen;
}

.right-align{
  float: right;
  display: block;

}

.cockpit-text{
  color: black;
}

.navigation-white-filler{
  width: 10px;
  height: 47px;
}

.leftMenuGroupItem{
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1rem;
}

.leftMenuGroupSubItem{
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1rem;
  
}

.v-list-item-x{
  height: 1px;
}
</style>