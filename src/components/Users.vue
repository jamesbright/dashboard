<template>
  <v-main>
    <v-card v-for="(user,index) in users" :key="index"  class="user-row mt-4">
      <v-card-actions>
        <v-list-item class="">
          <v-list-item-avatar class="card-img" color="">
            <v-img :src="user.picture.medium"> </v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="user-n">{{ user.name.first}} {{ user.name.last}}</v-list-item-title>
            <div class="user-address">
              {{ user.location.street.number }} {{ user.location.street.name }} {{ user.location.city }}, {{ user.location.state }}
            </div>
            <v-row>
              <v-col class="md-4 sm-4 user-email">
                <v-icon small> mdi-email-outline </v-icon>
               {{ user.email }}
              </v-col>

              <v-col class="md-4 sm-4 user-phone">
                <v-icon small> mdi-phone-in-talk-outline </v-icon>
               {{ user.phone }}
              </v-col>

              <v-col class="md-4 sm-4 show-user">
                  <v-btn v-on:click="passUser(index)" class="show-user-btn" elevation="2" color="#30BBB5">
                    <v-icon small color="white" light> mdi-arrow-right </v-icon>
                  </v-btn>
              
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>

  </v-main>
</template>


<script>
export default {
  name: "Users",
  props: ["users"],
  data() {
    return{

    }
  },
methods: {
passUser: function(index) {
this.$emit('userList', index)
}
}

};
</script>


<style scoped>
.user-row {
  background: #fcfcff 0% 0% no-repeat padding-box !important;
  box-shadow: 10px 10px 40px #0000000d !important;
  border-radius: 18px !important;
  opacity: 1 !important;
}

.card-img {
  width: 80px !important;
  height: 80px !important;
  border: 8px solid #75d6d1 !important;
  opacity: 1;
}

.user-n {
  font: normal normal bold 22px/79px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 1;
}

.user-address {
  font: italic normal small 14px Poppins;
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

.user-phone {
  font: normal normal 12px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.52;
}

.show-user {
  text-align: right !important;
}

.show-user-btn {
 
  border-radius: 13px !important;
  opacity: 1;
  box-shadow: 1px 1px 1px #30bbb574;
}
</style>