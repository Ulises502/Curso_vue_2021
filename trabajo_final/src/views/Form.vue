<template>
  <div>
    <v-alert border="left" colored-border type="info" dark elevation="2">
      Si nos das tu nombre y apellido, te saludamos!
    </v-alert>
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nombre"
              :rules="nameRules"
              :counter="10"
              label="Tu Nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="apellido"
              :rules="nameRules"
              :counter="10"
              label="Tu Apellido"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <br />
        <v-btn class="mr-4" :disabled="!valid" @click="submit"> Enviar </v-btn>
        <v-btn @click="clear"> Borrar Todo </v-btn>
      </v-container>
    </v-form>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :value="true"
      absolute
      shaped
      bottom
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <VIcon color="orange" medium>mdi-close-box-outline</VIcon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { VIcon } from "vuetify";
export default {
  components: {
    // the components which get used
    VIcon,
  },
  name: "Form",
  data: () => ({
    snackbar: false,
    text: "Los datos fueron enviados correctamente!",
    timeout: 4000,
    valid: false,
    nombre: "",
    apellido: "",
    nameRules: [
      (v) => !!v || "El campo es obligatorio",
      (v) => v.length <= 10 || "El campo debe contener menos de 10 caracteres",
      (v) => v.length >= 1 || "El campo no puede quedar vacío",
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      this.snackbar = true;
      localStorage.setItem("nombre", this.nombre);
      localStorage.setItem("apellido", this.apellido);
      console.log(
        localStorage.getItem("nombre") + " " + localStorage.getItem("apellido")
      );
      // se muestran en Home.vue, en la consola al apretar el boton del Home y sobre el icono de profile
      this.resetValidation();
    },

    clear() {
      this.nombre = "";
      this.apellido = "";
    },
  },
};
</script>