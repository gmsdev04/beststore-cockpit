<template>
  <v-navigation-drawer permanent absolute :dark="darkTheme" expand-on-hover>

    <div class="navigation-white-filler"></div>

    <v-divider />
    <!-- OPÇÕES SEM SUB ITEMS -->
    <v-list dense nav>
      <v-list-item v-for="item in itemsWithoutSubItems" :key="item.title" :to="item.to" link>

        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title  >{{ item.title }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>

    <!-- OPÇÕES COM SUB ITEMS -->
      <v-list-group 
        v-for="item in itemsWithSubItems" :key="item.title" 
        no-action
        >
        <template v-slot:prependIcon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </template>

        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="leftMenuGroupItem" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="subItem in item.subItems" :key="subItem.title" dense  :to="subItem.to" link>
          <v-list-item-icon class="ml-0">
            <v-icon :color="subItem.color">{{ subItem.icon }}</v-icon>
          </v-list-item-icon>   
          <v-list-item-content link>
            <router-link></router-link>
            <v-list-item-title class="leftMenuGroupSubItem" v-text="subItem.title" >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

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
    computed : {
      itemsWithSubItems(){
        const hasSubItems = function(data){
          return data.subItems != undefined;
        }
        return this.items.filter(hasSubItems)
      },
      itemsWithoutSubItems(){
        const hasSubItems = function(data){
          return data.subItems == undefined;
        }
        return this.items.filter(hasSubItems)
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
                    subItems:[
                        {
                          title: 'Criar novo',
                          icon: 'mdi-account-plus-outline',
                          color: 'green darken-2',
                          to: '/criar-novo'
                        },
                        {
                          title: 'Consultar',
                          icon: 'mdi-account-search-outline',
                          color: 'green darken-2',
                          to: '/consultar-usuarios'
                        }    
                    ]
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