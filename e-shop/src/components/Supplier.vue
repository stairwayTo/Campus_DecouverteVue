<script>
import { format } from 'timeago.js';
export default {

  name: "Supplier",
  props: {
    name: String,
    status: Boolean,
    checkedAt: Date
  },
  computed: {
    timeAgo() {
      return format(this.checkedAt);
    }
  }
}
</script>

<template>
  <div class="supplier-card">
    <h1 class="supplier-name">Fournisseur : {{ name }}</h1>
    <h3 :class="status ? 'in-stock' : 'out-of-stock'">
      A du stock ? {{ status ? 'Oui' : 'Non' }}
    </h3>

    <h5>Date de dernière relevé des stocks : {{ timeAgo }}</h5>
  </div>

</template>

<style scoped>
</style>
