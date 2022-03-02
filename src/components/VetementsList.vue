<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by nom"
          v-model="nom"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchNom"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Liste de vetements</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(vetement, index) in vetements"
          :key="index"
          @click="setActiveVetement(vetement, index)"
        >
          {{ vetement.nom }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllVetements">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentVetement.id">
        <h4>Vetement</h4>
        <div>
          <label><strong>Nom:</strong></label> {{ currentVetement.nom }}
        </div>
        <div>
          <label><strong>Categorie:</strong></label> {{ currentVetement.categorie }}
        </div>
        <div>
          <label><strong>Matiere:</strong></label> {{ currentVetement.matiere }}
        </div>
        <div>
          <label><strong>Couleur:</strong></label>
          {{ currentVetement.couleur }}
        </div>
        <div>
          <label><strong>Programme Machine:</strong></label> {{ currentVetement.programMachine }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentVetement.published ? "Published" : "Pending" }}
        </div>

        <router-link
          :to="'/vetements/' + currentVetement.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Clicker sur un vetement</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VetementDataService from "@/services/VetementDataService";
import Vetement from "@/models/Vetement";
import ResponseData from "@/models/ResponseData";
export default defineComponent({
  name: "vetements-list",
  data() {
    return {
      vetements: [] as Vetement[],
      currentVetement: {} as Vetement,
      currentIndex: -1,
      nom: "",
    };
  },
  methods: {
    retrieveVetements() {
      VetementDataService.getAll()
        .then((response: ResponseData) => {
          this.vetements = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveVetements();
      this.currentVetement = {} as Vetement;
      this.currentIndex = -1;
    },
    setActiveVetement(vetement: Vetement, index = -1) {
      this.currentVetement = vetement;
      this.currentIndex = index;
    },
    
    mounted() {
    this.retrieveVetements();
    },
  }
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>