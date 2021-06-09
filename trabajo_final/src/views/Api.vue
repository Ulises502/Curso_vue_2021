<template>
  <div>
    <v-card elevation="2" outlined class="mx-auto" max-width="500">
      <v-card-text>
        <v-img
          class="white--text align-end"
          height="100"
          src="@/../public/economy.jpg"
          gradient="to left, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-card-title class="text--dark">Dolar del Día</v-card-title>
        </v-img>
        <br />
        <p>Dolar Solidario</p>
        <div class="text--primary">
          Seguí la cotización del dólar minuto a minuto, <br />
          conocé el precio del dólar.
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn text color="orange accent-4"> Dolar Compra </v-btn>
        <v-btn text color="orange accent-4"> Dolar Venta </v-btn>
      </v-card-actions>
    </v-card>
    <br />
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Tipo</th>
            <th class="text-left">Precio [Pesos Arg.]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dolar Compra</td>
            <td>${{ compra }}</td>
          </tr>
          <tr>
            <td>Dolar Venta</td>
            <td>${{ venta }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "Api",
  data() {
    return {
      compra: "0.00",
      venta: "0.00",
    };
  },

};
</script>