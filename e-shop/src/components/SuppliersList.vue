<script>
import Supplier from "@/components/Supplier.vue";

export default {
  name: "suppliers-list",
  components: {Supplier},

  props: {
    suppliers: Array,
    loading: Boolean,
    error: String,
  },
  data() {
    return {
      sortOptions: 'all'
    }
  },
  computed: {
    sortedSuppliers() {
      if (this.sortOptions === 'all') {
        return this.suppliers;
      } else if (this.sortOptions === 'oui') {
        return this.suppliers.filter(supplier => supplier.status === 1);
      } else if (this.sortOptions === 'non') {
        return this.suppliers.filter(supplier => supplier.status === 0);
      }
    }
  }
}
</script>

<template>
  <h1>Liste des Fournisseurs</h1>
  <div id="newSupplier">
    <h2>Add Supplier</h2>
    <form action="">
      <div>
      <p>Nom du fournisseur</p>
      <input type="text">
      </div>

      <p>Stock ?</p>
      <input type="radio" name="stock"> Oui <input type="radio" name="stock"> Non
      <br>
      <p>Date enregistrement</p>
      <input type="date" name="" id="">
      <br>
      <br>
      <button type="submit">Enregistrement</button>
    </form>
  </div>
  <div>
    <h2>Sort Options</h2>
    <p>A du stock ?</p>
    <input type="radio" name="stocks" value="all" v-model="sortOptions"> All
    <input type="radio" name="stocks" value="oui" v-model="sortOptions"> Oui
    <input type="radio" name="stocks" value="non" v-model="sortOptions"> Non
  </div>

  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="loading">Chargement des fournisseurs...</div>

  <supplier

      v-for="supplier in sortedSuppliers"
      :key="supplier.id"
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
  />
</template>

<style>
</style>
