<script>
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { defineProps } from 'vue';

export default {
  name: "suppliers-map",
  components: { LTileLayer, LMarker, LMap },

  props: {
    suppliers: Array,
    loading: Boolean,
    error: String
  },

  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 6,
      center: [0, 0],
      bounds: null,

    };
  },
created(){
  navigator.geolocation.getCurrentPosition((position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.center =[this.latitude, this.longitude];
  });
},
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
}
</script>

<template>
  <h1>Carte des fournisseurs</h1>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="loading">Chargement des fournisseurs...</div>
  <div style="height: 800px; width: 800px" v-if="!loading && !error">
    <l-map
        style="height: 100%; width: 100%"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
          v-for="supplier in suppliers"
          :key="supplier.id"
          :lat-lng="[supplier.latitude, supplier.longitude]"
      >
      </l-marker>
    </l-map>
  </div>
</template>

<style scoped>
</style>
