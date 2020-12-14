<template>
  <v-navigation-drawer  
      permanent 
      absolute 
      :dark="darkTheme" 
      expand-on-hover>

      <div class="navigation-white-filler"></div>

      <v-divider/>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
            items: [{
                    title: 'Usuarios',
                    icon: 'mdi-account-supervisor-outline',
                    color: 'green darken-2'
                },
                {
                    title: 'Estoque',
                    icon: 'mdi-dresser-outline',
                    color: 'green darken-2'
                },
                {
                    title: 'Agora',
                    icon: 'mdi-chart-areaspline-variant',
                    color: 'green darken-2'
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

.store-name{
	
}
</style>