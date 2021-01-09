
<template>
  <div>
    <v-card class="user-row mt-4">
      <v-card-actions>
        <v-list-item class="">
          <v-list-item-avatar class="card-img" color="">
            <v-img src="https://homepages.cae.wisc.edu/~ece533/images/girl.png">
            </v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="user-n">Shalom Chioma</v-list-item-title>
            <v-list-item-text class="user-address">
              57 new road kilcoole, waterford
            </v-list-item-text>
            <v-row>
              <v-col class="md-4 sm-4 user-email">
                <v-icon small> mdi-email-outline </v-icon>
                bradgibson@example.com
              </v-col>

              <v-col class="md-4 sm-4 user-phone">
                <v-icon small> mdi-phone-in-talk-outline </v-icon>
                011-762-7195
              </v-col>

              <v-col class="md-4 sm-4 show-user">
                  <router-link to="/user-list/1">
                <v-btn class="show-user-btn" elevation="2" color="#30BBB5">
                    <v-icon small color="white" light> mdi-arrow-right </v-icon>
                </v-btn>
                 </router-link>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-card class="user-row mt-4">
      <v-card-actions>
        <v-list-item class="">
          <v-list-item-avatar class="card-img" color="">
            <v-img src="https://homepages.cae.wisc.edu/~ece533/images/girl.png">
            </v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="user-n">Shalom Chioma</v-list-item-title>
            <v-list-item-text class="user-address">
              57 new road kilcoole, waterford
            </v-list-item-text>
            <v-row>
              <v-col class="md-4 sm-4 user-email">
                <v-icon small> mdi-email-outline </v-icon>
                bradgibson@example.com
              </v-col>

              <v-col class="md-4 sm-4 user-phone">
                <v-icon small> mdi-phone-in-talk-outline </v-icon>
                011-762-7195
              </v-col>

              <v-col class="md-4 sm-4 show-user">
                  <router-link to="/user-list/1">
                  
                <v-btn class="show-user-btn" elevation="2" color="#30BBB5">
                    <v-icon small color="white" light> mdi-arrow-right </v-icon>
                      </v-btn>
                  </router-link>
              
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-card class="user-row mt-4">
      <v-card-actions>
        <v-list-item class="">
          <v-list-item-avatar class="card-img" color="">
            <v-img src="https://homepages.cae.wisc.edu/~ece533/images/girl.png">
            </v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="user-n">Shalom Chioma</v-list-item-title>
            <v-list-item-text class="user-address">
              57 new road kilcoole, waterford
            </v-list-item-text>
            <v-row>
              <v-col class="md-4 sm-4 user-email">
                <v-icon small> mdi-email-outline </v-icon>
                bradgibson@example.com
              </v-col>

              <v-col class="md-4 sm-4 user-phone">
                <v-icon small> mdi-phone-in-talk-outline </v-icon>
                011-762-7195
              </v-col>

              <v-col class="md-4 sm-4 show-user">
                     <router-link to="/user-list/1">
                     
                <v-btn class="show-user-btn" elevation="2" color="#30BBB5">
                  <v-icon small color="white" light> mdi-arrow-right </v-icon>
                   </v-btn>
                   </router-link>
               
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-row class="mt-4">
      <v-col class="md-6 sm-6">
        <v-btn class="download-btn" elevation="2" rounded color="#7946C1" dark>
          <v-icon> mdi-cloud-download </v-icon>
          <span class="btn-download-text"> download results </span>
        </v-btn>
      </v-col>
      <v-col class="pagination md-6 sm-6">
        
          
        <v-btn class="pagination-btn">
            <v-icon small color="white" light> mdi-arrow-right </v-icon>
            </v-btn>
    
        

        <v-btn class="pagination-btn pagination-btn-right">
            <v-icon small color="white" light> mdi-arrow-right </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "Users",

  data: () => ({}),
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
  width: 182px;
  height: 31px;
  text-align: left;
  font: normal normal bold 22px/79px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 1;
}

.user-address {
  width: 310px;
  height: 25px;
  text-align: left;
  font: italic normal medium 18px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.69;
}
.user-email {
  width: 246px;
  height: 25px;
  font: normal normal 100 11px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.52;
}

.user-phone {
  width: 111px;
  height: 24px;
  text-align: left;
  font: normal normal 12px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.52;
}

.show-user {
  text-align: right !important;
}

.show-user-btn {
  width: 61px;
  height: 54px;
  border-radius: 13px !important;
  opacity: 1;
  box-shadow: 1px 1px 1px #30bbb574;
}
.download-btn {
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}

.btn-download-text {
  margin-left: 10px;
  text-align: left;
  font: normal normal 600 17px Poppins;
  letter-spacing: -0.19px;
  text-transform: lowercase;
  opacity: 1;
}
.pagination {
  text-align: right !important;
}
.pagination-btn {
  width: 51px;
  height: 48px;
  background: #e2e2ea 0% 0% no-repeat padding-box !important;
  border-radius: 11px;
  opacity: 1;
}
.pagination-btn:active {
  width: 51px;
  height: 48px;
  background: #262a41 0% 0% no-repeat padding-box !important;
  box-shadow: 4px 5px 20px #0000001a;
  border-radius: 11px;
  opacity: 1;
}

.pagination-btn-right {
  width: 51px;
  height: 48px;
  background: #262a41 0% 0% no-repeat padding-box !important;
  box-shadow: 4px 5px 20px #0000001a;
  border-radius: 11px;
  opacity: 1;
}
</style>