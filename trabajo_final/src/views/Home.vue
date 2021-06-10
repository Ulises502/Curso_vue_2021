<template>
  <div>
    <v-alert border="top" colored-border type="info" dark elevation="2">
      Hola {{ usuario }}. Queremos desearte un buen día. Que difrutes de la
      aplicación.
    </v-alert>
    <v-btn @click="consola"> Apretame </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      usuario: "usuario",
    };
  },
  methods: {
    consola() {
      console.log(this.usuario);
    },
  },
  mounted() {
    this.usuario =
      localStorage.getItem("nombre") + " " + localStorage.getItem("apellido");
  },
};
</script>
