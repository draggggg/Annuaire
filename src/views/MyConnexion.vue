<template>
<v-form class="form-signin rounded-lg mt-12" >       
      <input type="text" mb="80 px " class="form-control my-3" name="username" placeholder="Adresse Email" required="" autofocus="" />
      <v-btn to="/ytest" class=" btn-lg my-2" color="white" type="submit">Connexion</v-btn>   
    </v-form>
    


</template>

<style scoped>





.form-signin {
  max-width: 380px;
  padding: 15px 35px 35px;
  margin: 0 auto;
  background-color: #e1eaef;
  border: 3px solid rgba(0,0,0,0.1);  
}

</style>
