

<template>
  <v-container fluid>
    <v-row class="">
      <v-col class="content">
        <v-row>
          <v-col class="md-6 dashboard">
            <h6 class="greeting">
              Hello,<span class="user-name">Emerald</span>
            </h6>
            <p class="wellcome-text ">
              wellcome to your dashboard, kindly sort through the user base.
            </p>
            <v-text-field
              class="search-user"
              placeholder="Find a user"
              filled
              rounded
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>

            <p class="find-user-text">show users</p>

            <v-btn class="mx-2 btn-icon" dark large color="#F935A9">
              <v-icon large dark> mdi-account-group </v-icon>
            </v-btn>

            <v-btn class="mx-2 btn-icon" dark large color="#30BBB5">
              <v-icon large dark> mdi-human-male</v-icon>
            </v-btn>

            <v-btn class="mx-2 btn-icon" dark large color="#7946C1">
              <v-icon large dark> mdi-human-female </v-icon>
            </v-btn>
          </v-col>

          <v-col class="md-6 users">
            <h4 class="users-heading mb-4">All users</h4>
            <span class="filter-search-text">Filter by</span>
            <v-row>
              <v-col class="md-4 sm-4">
                <v-text-field
                  placeholder="Find in list"
                  filled
                  rounded
                  dense
                  prepend-inner-icon="mdi-magnify"
                  color="blue darken-2"
                ></v-text-field>
              </v-col>
              <v-col class="md-4 sm-4">
                <v-select
                  filled
                  rounded
                  dense
                  solo-inverted
                  label="country"
                ></v-select>
              </v-col>
              <v-col class="md-4 sm-4">
                <v-switch inset label="show country"></v-switch>
              </v-col>
            </v-row>
 <div class="back-btn">
      <v-icon color="#30BBB5"> mdi-arrow-left </v-icon> results
    </div>

    <v-list-item class="">
      <v-list-item-avatar class="card-img" color="">
        <v-img src="https://homepages.cae.wisc.edu/~ece533/images/girl.png">
        </v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="user-n">Shalom Chioma <span class="age">25</span></v-list-item-title>
        <v-list-item-text class="user-address">
          57 new road kilcoole, waterford
        </v-list-item-text>

        <v-list-item-text class="user-email mt-2 ">
          <v-btn filled rounded dense class="contact-btn" >
            <v-icon small> mdi-email-outline </v-icon>
            bradgibson@example.com
          </v-btn>
        </v-list-item-text>

           <v-list-item-text class="user-joined-date mt-2 mb-4">
          <v-btn filled rounded dense class="joined-btn">
           <span class="joined-date">joined 2002-05-01</span>
          </v-btn>
        </v-list-item-text>

        <v-list-item-text class="user-phone">
          <v-icon small> mdi-phone-in-talk-outline </v-icon>
          011-762-7195
        </v-list-item-text>
        
        <v-list-item-text class="user-phone">
          <v-icon small> mdi-cellphone-iphone </v-icon>
          011-762-7195
        </v-list-item-text>

      </v-list-item-content>
    </v-list-item>
 
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "UserList",
  data: () => ({}),
};
</script>

<style scoped>
.users-heading {
  text-align: left;
  font: normal normal bold 37px/122px Poppins;
  letter-spacing: -0.04px;
  color: #262a41;
  opacity: 1;
}

.filter-search-text {
  text-align: left;
  font: normal normal 300 18px/79px Poppins;
  letter-spacing: -0.02px;
  color: #262a41;
  opacity: 0.9;
}

.btn-icon {
  padding: 30px 10px 30px 10px !important;
  box-shadow: 0px 3px 30px #00000029;
  opacity: 1;
  border-radius: 20px;
  height: 70px !important;
}
.find-user-text {
  text-align: left;
  font: normal normal 600 22px/79px Poppins;
  letter-spacing: -0.02px;
  color: #ffffff;
  opacity: 0.7;
}
.search-user {
  opacity: 1;
  background: #3c3f54 0% 0% no-repeat padding-box;
  border: 1px solid #3c3f54;
  height: 55px;
}

.search-user input {
  color: rgb(230, 230, 236) !important;
}

.wellcome-text {
  font: normal normal 300 18px/40px Poppins;
  letter-spacing: 0.23px;
  color: #ffffff;
  opacity: 0.66;
}

.greeting {
  font: normal normal 200 49px/120px Poppins;
  letter-spacing: -0.05px;
  color: #ffffff;
  opacity: 1;
}
.content {
  margin: 20px 10px 20px 10px;
  top: 0px;
  left: 0px;
  padding: 30px;

  width: 1920px;
  height: 100%;
  background: #262a41 0% 0% no-repeat padding-box;
  opacity: 1;
}
.user-name {
  font: normal normal bold 37px/122px Poppins;
  letter-spacing: -0.04px;
  color: #ffffff;
  opacity: 1;
}

.users {
  top: 20px;
  left: 938px;
  width: 961px;
  height: auto;
  background: #f7f7ff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 28px;
  opacity: 1;
  padding: 10px 40px 10px 40px;
}
.dashboard {
  margin: 120px 60px 120px 60px;
}

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