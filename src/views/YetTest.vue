<template>
<v-card>
  <v-sheet class="pa-7 ma-3 mx-12 text-h5 ">
  <v-card-title>
      <v-col
        class="mx-auto"
          cols="12"
          sm="16"
        >
          <v-text-field 
            v-model="search"
            append-icon="mdi-magnify"
            label="Recherche"
            single-line
            hide-details
            flat
            dark
            solo-inverted
          ></v-text-field>
        </v-col>
    </v-card-title>
<v-data-table
    :headers="bddHeaders"
    :items="bdd"
    :search="search"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="matricule"
    show-expand
    class="elevation-1"
  >
    <template v-slot:no-results>
    <v-alert
  color="red"
  outlined
  type="error"
  >Cette personne est introuvable</v-alert>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-row
              class="text-left"
              tag="v-card-text"
            >
              <v-col
                class="text-right"
                tag="strong"
                cols="6"
              >
                Matricule:
              </v-col>
              <v-col>{{ item.matricule }}</v-col>
              <v-col
                class="text-right"
                tag="strong"
                cols="6"
              >
                Nom:
              </v-col>
              <v-col>{{ item.nom }}</v-col>
              <v-col
                class="text-right"
                tag="strong"
                cols="6"
              >
                Prenom :
              </v-col>
              <v-col>{{ item.prenom }}</v-col>
               <v-col
                class="text-right"
                tag="strong"
                cols="6"
              >
                Date de Naissance :
              </v-col>
              <v-col>{{ item.date }}</v-col>
               <v-col
                class="text-right"
                tag="strong"
                cols="6"
              >
                Fonction :
              </v-col>
              <v-col>{{ item.fonction }}</v-col>
            </v-row>

      </td>
    </template>
  </v-data-table>
  </v-sheet>
</v-card>
  
</template>

<style scoped>
.v-sheet{
  background-color: #006A9E;
}
</style><script>
  export default {
    data () {
      return {
        search: '',
        expanded: [],
        singleExpand: true,
        bddHeaders: [
          {
            text: 'Matricule',
            align: 'start',
            sortable: false,
            value: 'matricule',
          },
          { text: 'Nom', value: 'nom' },
          { text: 'Prénom', value: 'prenom' },
          { text: '', value: 'data-table-expand' },
        ],
        bdd: [
          {
            matricule: '001',
            nom: "Branger",
            prenom: "Simon",
            date: "05/05/82",
            fonction: "directeur DNI",
          },
          {
            matricule: '002',
            nom: "Dorido",
            prenom: "Margaux",
            date: "05/05/82",
            fonction: "Chef de projet",
          },
          {
            matricule: '003',
            nom: "Diaby",
            prenom: "Mahawa",
            date: "05/05/83",
            fonction: "Assitante Innovation",
          },
          {
            matricule: '004',
            nom: "Khalifa",
            prenom: "Zahra",
            date: "05/05/82",
            fonction: "Assistante dev",
          },
          {
            matricule: '005',
            nom: "Fortin",
            prenom: "Maxence",
            date: "05/05/82",
            fonction: "Assistant dev",
          },
          {
           matricule: '006',
            nom: "Daoud",
            prenom: "Mouloud",
            date: "05/05/82",
            fonction: "Assistant Innovation",
          },
          {
            matricule: '007',
            nom: "Bayeulle",
            prenom: "Adrien",
            date: "05/05/82",
            fonction: "Assistant",
          },
          {
           matricule: '008',
            nom: "Gautier",
            prenom: "Paul",
            date: "05/05/82",
            fonction: "Chef de projet",
          },
          {
           matricule: '009',
            nom: "Hamadache",
            prenom: "Kamel",
            date: "05/05/82",
            fonction: "Gestionnaire",
          },
          {
           matricule: '0010',
            nom: "Brice",
            prenom: "Benjamin",
            date: "05/05/82",
            fonction: "Assistant Sécurité",
          },
        ],
      }
    },
  }
</script>