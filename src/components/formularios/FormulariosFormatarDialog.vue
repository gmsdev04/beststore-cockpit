<template>
  <div class="formularios-formatar-dialog">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
        persistent
      >
        <v-card tile >
          <v-toolbar
            flat
            dark
            color="green"
     
            absolute
            width="100%"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Formatar formulário</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="dialog = false"
              >
                Salvar
              </v-btn>
            </v-toolbar-items>
          
          </v-toolbar>

            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
          
        </v-card>

        
      </v-dialog>
      
  </div>
</template>

<script>
export default {
    props : {
        show : {
            type: Boolean,
            required: true,
            default: true
        }
    },
    data(){
        return {
            dialog: this.show
        }
    }
}
</script>

<style scoped>
.box {
    border: solid;
    width: 300px;
    height: 300px;
}
</style>