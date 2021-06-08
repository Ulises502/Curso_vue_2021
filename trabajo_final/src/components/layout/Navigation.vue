<template>
  <v-navigation-drawer class="dark accent-4" dark app>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn class="deep-orange" block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard", link:"/" },
        { title: "Datos", icon: "mdi-access-point", link:"/api" },
        { title: "Formulario", icon: "mdi-information" , link:"/form" },
      ],
      right: null,
    };
  },
};
</script>