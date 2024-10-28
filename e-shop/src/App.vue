<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const suppliers = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(() => {
  const page1 = axios.get('https://suppliers.depembroke.fr/api/suppliers?page=1');
  const page2 = axios.get('https://suppliers.depembroke.fr/api/suppliers?page=2');

  Promise.all([page1, page2])
      .then((response) => {
        suppliers.value = [
          ...response[0].data.data,
          ...response[1].data.data
        ];
      })
      .catch((err) => {
        error.value = "Erreur lors du chargement des fournisseurs : " + err.message; // Gestion des erreurs
      })
      .finally(() => {
        loading.value = false; // La requête est terminée
      });
});
</script>

<template>

  <header>
    <div class="wrapper">
      <router-link to="/">Home page</router-link>

      <router-link to="/map">Map</router-link>

      <router-link to="/suppliers">Suppliers</router-link>

    </div>
  </header>
  <main>
    <router-view :suppliers="suppliers" :loading="loading" :error="error" />
  </main>
</template>

<style>
</style>

