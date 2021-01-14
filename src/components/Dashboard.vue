<template>
  <v-container fluid>
    <v-row class="">
      <v-col class="content">
        <div class="loading">Loading&#8230;</div>
        <v-row>
          <v-col class="md-6 dashboard">
            <h6 class="greeting">
              Hello,<span class="user-name">Emerald</span>
            </h6>
            <p class="wellcome-text">
              wellcome to your dashboard, kindly sort through the user base.
            </p>
            <v-text-field
              v-model="search"
              class="search-user"
              placeholder="Find a user"
              filled
              rounded
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>

            <p class="find-user-text">show users</p>

            <v-btn
              v-on:click="getUsers"
              class="mx-2 btn-icon"
              dark
              large
              color="#F935A9"
            >
              <v-icon large dark> mdi-account-group </v-icon>
            </v-btn>

            <v-btn
              v-on:click="getMales"
              class="mx-2 btn-icon"
              dark
              large
              color="#30BBB5"
            >
              <v-icon large dark> mdi-human-male</v-icon>
            </v-btn>

            <v-btn
              v-on:click="getFemales"
              class="mx-2 btn-icon"
              dark
              large
              color="#7946C1"
            >
              <v-icon large dark> mdi-human-female </v-icon>
            </v-btn>
          </v-col>

          <v-col class="md-6 users">
            <h4 class="users-heading mb-4">{{ title }}</h4>
            <span class="filter-search-text">Filter by</span>
            <v-row>
              <v-col class="md-4 sm-4">
                <v-text-field
                  v-model="searchList"
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
                  @change="findCountry"
                  v-model="selectedCountry"
                  :items="items"
                  filled
                  rounded
                  dense
                  solo-inverted
                  label="country"
                ></v-select>
              </v-col>
              <v-col class="md-4 sm-4">
                <v-switch
                  v-model="showCountry"
                  inset
                  label="show country"
                ></v-switch>
              </v-col>
            </v-row>
            <transition
              v-if="users.length > 0"
              enter-active-class="animate__animated animate__bounceInUp"
              leave-active-class="animate__animated animate__bounceOutDown"
            >
              <Users
                v-bind:users="users"
                v-bind:showCountry="showCountry"
                v-on:userList="createUserList"
                v-if="$store.getters.showUsers && users.length > 0"
              />
            </transition>

            <div v-else>No user found</div>

            <UserList v-bind:user="user" v-if="$store.getters.showUser" />

            <v-row class="mt-4">
              <v-col class="md-6 sm-6">
                <v-btn
                  :disabled="$store.getters.disabled"
                  v-on:click="downloadResults"
                  class="download-btn"
                  elevation="2"
                  rounded
                  color="#7946C1"
                  dark
                >
                  <v-icon> mdi-cloud-download </v-icon>
                  <span class="btn-download-text"> download results </span>
                </v-btn>
              </v-col>
              <v-col class="pagination md-6 sm-6">
                <v-btn
                  :style="[
                    isActive
                      ? { background: '#262a41' }
                      : { background: '#2e2ea' },
                  ]"
                  :disabled="$store.getters.disabled"
                  v-on:click="prevPage"
                  class="pagination-btn"
                >
                  <v-icon small color="white" light> mdi-arrow-left </v-icon>
                </v-btn>

                <v-btn
                  :disabled="$store.getters.disabled"
                  v-on:click="nextPage"
                  class="pagination-btn pagination-btn-right"
                >
                  <v-icon small color="white" light> mdi-arrow-right </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserList from "./UserList";
import axios from "axios";
import Users from "./Users";

export default {
  name: "Dashboard",
  data() {
    return {
      users: [],
      user: [],
      items: [
        "AU",
        "BR",
        "CA",
        "CH",
        "DE",
        "DK",
        "ES",
        "FI",
        "FR",
        "GB",
        "IE",
        "IR",
        "NL",
        "NZ",
        "TR",
        "US",
      ],
      page: 1,
      results: 5,
      seed: "xyz",
      gender: "",
      showCountry: false,
      selectedCountry: "",
      search: "",
      awaitingSearch: false,
      searchList: "",
      isActive: false,
      title: "All Users",
    };
  },
  components: {
    Users,
    UserList,
  },

  mounted() {
    if (this.users.length == 0) {
      axios
        .get(
          `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}`
        )
        .then(
          function (response) {
            document.querySelector(".loading").remove();
            this.title = "All Users";
            this.users = response.data.results;
            console.log(this.users);
            this.commitUsers();
          }.bind(this)
        );
    }
  },
  methods: {

    getUsers: function () {
      axios
        .get(
          `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}&gender=${this.gender}`
        )
        .then(
          function (response) {
            this.title = "All Users";
            this.users = response.data.results;
            this.commitUsers();
          }.bind(this)
        );
    },
    getMales: function () {
      this.seed = "";
      this.gender = "male";
      axios
        .get(
          `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}&gender=${this.gender}`
        )
        .then(
          function (response) {
            this.title = "Males";
            this.users = response.data.results;
            this.commitUsers();
          }.bind(this)
        );
    },
    getFemales: function () {
      this.seed = "";
      this.gender = "female";
      axios
        .get(
          `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}&gender=${this.gender}`
        )
        .then(
          function (response) {
            this.title = "Females";
            this.users = response.data.results;
             this.commitUsers();
          }.bind(this)
        );
    },
commitUsers: function(){
            this.$store.commit("users", true);
            this.$store.commit("userList", false);
},
commitUserList: function(){

      this.$store.commit("users", false);
      this.$store.commit("userList", true);
},
    findCountry: function () {
      this.seed = "";
      axios
        .get(
          `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}&nat=${this.selectedCountry}`
        )
        .then(
          function (response) {
            this.users = response.data.results;
            this.commitUsers();
          }.bind(this)
        );
    },

    createUserList: function (index) {
      this.user = this.users[index];
      this.commitUserList();
      this.$store.commit("disabled", true);
    },

    nextPage: function () {
      this.page = this.page + 1;
      axios
        .get(
          `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}&gender=${this.gender}`
        )
        .then(
          function (response) {
            this.users = response.data.results;
          }.bind(this)
        );
    },

    prevPage: function () {
      if (this.page > 0) {
        this.page = this.page - 1;
        this.isActive = true;

        axios
          .get(
            `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}&gender=${this.gender}`
          )
          .then(
            function (response) {
              this.users = response.data.results;
            }.bind(this)
          );
      } else {
        this.isActive = false;
      }
    },
    downloadResults: function () {
      axios
        .get(
          `https://randomuser.me/api/?page=${this.page}&results=${this.results}&seed=${this.seed}&gender=${this.gender}&format=csv&dl`
        )
        .then(
function (response) {
            let csvContent = "data:text/csv;charset=utf-8," + response.data;
            let encodedUri = encodeURI(csvContent);
            let link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "results.csv");
            document.body.appendChild(link); // Required for FF

            link.click(); // This will download the data file named "results.csv".
          }.bind(this)
        );
    },
  },

  watch: {
    search: function () {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          axios.get(`https://randomuser.me/api/?seed=${this.seed}`).then(
            function (response) {
              this.users = response.data.results.filter((obj) => {
                let name = `${obj.name.first} ${obj.name.last}`;
                 this.commitUsers();
                return name.includes(this.search);
              });
            }.bind(this)
          );
          this.awaitingSearch = false;
        }, 3000); // 3 sec delay
      }
      this.awaitingSearch = true;
    },

    searchList: function () {
      // handle stuff, call search API etc.
      if (!this.awaitingSearch) {
        setTimeout(() => {
          this.users = this.users.filter(
            function (obj) {
              let name = `${obj.name.first} ${obj.name.last}`;
               this.commitUsers();
              return name.includes(this.searchList);
            }.bind(this)
          );

          this.awaitingSearch = false;
        }, 3000); // 3 sec delay
      }
      this.awaitingSearch = true;
    },
  },
};
</script>


<style scoped>
.users-heading {
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
  cursor: pointer;
}

.btn-icon:hover {
  width: 100px !important;
  height: 100px !important;
  z-index: 100;
  padding: 0px 5px 5px 0px;
  box-shadow: 4px 5px 20px #eee2e21a;
}

.find-user-text {
  margin-top: 10px;
  font: normal normal 600 22px/79px Poppins;
  letter-spacing: -0.02px;
  color: #ffffff;
  opacity: 0.7;
}
.search-user {
  opacity: 1;
  background: #3c3f54 0% 0% no-repeat padding-box;
  border: 1px solid #3c3f54;
  height: 50px;
}

.search-user input {
  color: rgb(230, 230, 236) !important;
}

.wellcome-text {
  text-align: left;
  font: normal normal 300 18px/40px Poppins;
  letter-spacing: 0.23px;
  color: #ffffff;
  opacity: 0.66;
}

.greeting {
  text-align: left;
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

  height: 100%;
  background: #262a41 0% 0% no-repeat padding-box;
  opacity: 1;
}
.user-name {
  text-align: left;
  font: normal normal bold 37px/122px Poppins;
  letter-spacing: -0.04px;
  color: #ffffff;
  opacity: 1;
}

.users {
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
.pagination-btn:hover {
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

/* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: "";
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>