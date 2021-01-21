

<template>


      <v-container fluid>
        
 <v-list-item  class="back-btn">
      <v-icon @click="goBack" color="#30BBB5"> mdi-arrow-left </v-icon> results

        </v-list-item>
        <v-row>
          <v-col class="md-6 sm-6" >
        <v-list-item-avatar class="card-img" >
        <v-img :src="user.picture.large">
        </v-img>
        </v-list-item-avatar>
    
          </v-col>
          <v-col class="md-6 sm-6">
      <v-list-item-content>
        <v-list-item-title class="user-n">{{ user.name.first }} {{ user.name.last }} <span class="age">{{ user.registered.age }}</span></v-list-item-title>
        <v-list-item class="user-address">
         {{ user.location.street.number }} {{ user.location.street.name }} {{ user.location.city }}, {{ user.location.state }}
          
        </v-list-item>

        <v-list-item class="user-email mt-2 ">
          <v-btn filled rounded dense class="contact-btn" >
            <v-icon small> mdi-email-outline </v-icon>
           {{ user.email }}
          </v-btn>
        </v-list-item>

           <v-list-item class="user-joined-date mt-2 mb-4">
          <v-btn filled rounded dense class="joined-btn">
           <span class="joined-date">joined {{ user.registered.date }}</span>
          </v-btn>
           </v-list-item>

        <v-list-item class="user-phone">
          <v-icon small> mdi-phone-in-talk-outline </v-icon>
          {{ user.phone }}
           </v-list-item>
        
        <v-list-item class="user-phone">
          <v-icon small> mdi-cellphone-iphone </v-icon>
          {{ user.phone }}
           </v-list-item>
      </v-list-item-content>
          </v-col>
        </v-row>
      </v-container>
 
       
</template>


<script>
export default {
  name: "UserList",
  props:['user'],
  data: () => ({}),
methods:{
  goBack: function(){
this.$store.commit('userList', false)
this.$store.commit('users', true)
this.$store.commit('disabled', false)
  }
}
};
</script>

<style scoped>
.back-btn {
  text-transform: uppercase;
}

.card-img {
  width: 200px !important;
  height: 200px !important;
  border: 8px solid #75d6d1 !important;
  
  opacity: 1;
}

.user-n {
  text-align: left;
  font: normal normal bold 22px/79px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 1;
}

.user-address {
  font: italic normal medium 18px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.69;
}
.user-email {
  font: normal normal 100 11px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.52;
}
.contact-btn {
  text-transform: lowercase;
background: #c9c9dd 0% 0% no-repeat padding-box !important;
box-shadow: 10px 10px 40px #0000000D;
border-radius: 18px;
text-align: left;
font: normal normal medium 18px/68px Poppins;
letter-spacing: -0.02px;
color: #262A41;
overflow-x: scroll;
}

::-webkit-scrollbar {
display: none;
}
.user-phone {
  text-align: left;
  font: normal normal 12px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.52;
}

.joined-btn{
background: #dda6c7 0% 0% no-repeat padding-box !important;
opacity:0.9 ;
}

.joined-date{
font: normal normal 600 13px Poppins;
letter-spacing: -0.18px;
color: #3c3f47;
opacity: 1;
}

.age{
font: normal normal 200 20px Poppins;
letter-spacing: -0.03px;
color: #262A41;
opacity: 0.8;
}
</style>