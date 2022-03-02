<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nom">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          required
          v-model="vetement.nom"
          name="nom"
        />
      </div>

      <div class="form-group">
        <label for="categorie">Categorie</label>
        <input
          type="text"
          class="form-control"
          id="categorie"
          required
          v-model="vetement.categorie"
          name="categorie"
        />
      </div>

      <div class="form-group">
        <label for="matiere">Matiere</label>
        <input
          type="text"
          class="form-control"
          id="matiere"
          required
          v-model="vetement.matiere"
          name="matiere"
        />
      </div>

      <div class="form-group">
        <label for="couleur">Couleur</label>
        <input
          type="text"
          class="form-control"
          id="couleur"
          required
          v-model="vetement.couleur"
          name="couleur"
        />
      </div>

      <div class="form-group">
        <label for="programMachine">Programme Machine</label>
        <input
          type="text"
          class="form-control"
          id="programMachine"
          required
          v-model="vetement.programMachine"
          name="programMachine"
        />
      </div>

      <button @click="saveVetement" class="btn btn-success">Enregistrer</button>
    </div>

    <div v-else>
      <h4>Enregistrement réussit!</h4>
      <button class="btn btn-success" @click="newVetement">Ajouter</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VetementDataService from "@/services/VetementDataService";
import Vetement from "@/models/Vetement";
import ResponseData from "@/models/ResponseData";
export default defineComponent({
  name: "add-vetement",
  data() {
    return {
      vetement: {
        id: null,
        nom: "",
        categorie: "",
        matiere: "",
        couleur: "",
        programMachine: "",
        published: false,
      } as Vetement,
      submitted: false,
    };
  },
  methods: {
    saveVetement() {
      let data = {
        nom: this.vetement.nom,
        categorie: this.vetement.categorie,
        matiere: this.vetement.matiere,
        couleur: this.vetement.couleur,
        programMachine: this.vetement.programMachine,
      };
      VetementDataService.create(data)
        .then((response: ResponseData) => {
          this.vetement.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    newVetement() {
      this.submitted = false;
      this.vetement = {} as Vetement;
    },
  },
});
</script>


<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
