import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [
        {
          "title": "Ilene Savage",
          "organisation_name": "STREZZO Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": true,
          "location": "485 Pierrepont Street, Cucumber, Virginia, 5213",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Hebert Hicks",
          "organisation_name": "EXIAND Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "748 Ruby Street, Hollins, Pennsylvania, 7339",
          "link": "DigitalSpy.com",
          "category": "seminar"
        },
        {
          "title": "Lillian Reeves",
          "organisation_name": "LIQUICOM Ltd",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": true,
          "location": "282 Beekman Place, Crawfordsville, Kansas, 5336",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Ursula Kline",
          "organisation_name": "PORTICA Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "515 Sutter Avenue, Lavalette, Washington, 886",
          "link": "DigitalSpy.com",
          "category": "concert"
        },
        {
          "title": "Pollard Blanchard",
          "organisation_name": "QUINEX Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": true,
          "location": "978 Elmwood Avenue, Dowling, South Dakota, 7751",
          "link": "DigitalSpy.com",
          "category": "concert"
        },
        {
          "title": "Battle Miranda",
          "organisation_name": "SNOWPOKE Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "751 Kansas Place, Blairstown, Oklahoma, 8260",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Freda Singleton",
          "organisation_name": "OHMNET Ltd",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "157 Humboldt Street, Eagletown, Missouri, 760",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Joy Nielsen",
          "organisation_name": "OVERFORK Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "607 Bridgewater Street, Bowden, Palau, 2541",
          "link": "DigitalSpy.com",
          "category": "concert"
        },
        {
          "title": "Peterson Hudson",
          "organisation_name": "EARTHPURE Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "963 Folsom Place, Osage, Wyoming, 4091",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Lakeisha Alexander",
          "organisation_name": "AQUAFIRE Ltd",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "759 Robert Street, Richmond, Tennessee, 7053",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Benjamin Mitchell",
          "organisation_name": "DIGIGENE Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "987 Forrest Street, Martinez, Federated States Of Micronesia, 1344",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Alyssa Glenn",
          "organisation_name": "TRANSLINK Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "920 Metropolitan Avenue, Barclay, Nebraska, 3729",
          "link": "DigitalSpy.com",
          "category": "concert"
        },
        {
          "title": "Shannon Jacobson",
          "organisation_name": "ZOLAVO Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "183 Perry Place, Dodge, North Carolina, 4183",
          "link": "DigitalSpy.com",
          "category": "seminar"
        },
        {
          "title": "Harriet Buck",
          "organisation_name": "EGYPTO Ltd",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "958 Montgomery Place, Coventry, Utah, 6718",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Stacey Andrews",
          "organisation_name": "ACRODANCE Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "660 Butler Street, Washington, Delaware, 3707",
          "link": "DigitalSpy.com",
          "category": "seminar"
        },
        {
          "title": "Gretchen Ayers",
          "organisation_name": "TROPOLIS Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "483 Bergen Street, Watchtower, Hawaii, 9338",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Laurie Hobbs",
          "organisation_name": "RETROTEX Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "652 Thames Street, Springhill, New Jersey, 8382",
          "link": "DigitalSpy.com",
          "category": "seminar"
        },
        {
          "title": "Harding Ellis",
          "organisation_name": "ELPRO Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "690 Union Street, Tilleda, Maryland, 8344",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Mayer Adkins",
          "organisation_name": "APPLICA Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "565 Irving Street, Oneida, Virgin Islands, 6423",
          "link": "DigitalSpy.com",
          "category": "concert"
        },
        {
          "title": "Rose Keith",
          "organisation_name": "EVENTIX Ltd",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "424 Arlington Avenue, Hobucken, Texas, 7325",
          "link": "DigitalSpy.com",
          "category": "seminar"
        },
        {
          "title": "Golden Buckner",
          "organisation_name": "AQUAMATE Ltd",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "183 Rock Street, Flintville, Ohio, 4446",
          "link": "DigitalSpy.com",
          "category": "seminar"
        },
        {
          "title": "Herring Mcgowan",
          "organisation_name": "HAWKSTER Ltd",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "687 Billings Place, Falmouth, Rhode Island, 7094",
          "link": "DigitalSpy.com",
          "category": "seminar"
        },
        {
          "title": "Best Faulkner",
          "organisation_name": "MAGMINA Stc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "971 Sands Street, Morningside, Guam, 7739",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Morales Luna",
          "organisation_name": "GEEKFARM Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "796 Henderson Walk, Maplewood, Louisiana, 1879",
          "link": "DigitalSpy.com",
          "category": "performance"
        },
        {
          "title": "Willie Waller",
          "organisation_name": "INTERLOO Inc.",
          "start_datetime": new Date(2018, 5, 13, 17, 0),
          "end_datetime": new Date(2018, 5, 16, 17, 0),
          "saved": false,
          "location": "911 Degraw Street, Walton, Minnesota, 2670",
          "link": "DigitalSpy.com",
          "category": "performance"
        }
      ]
  },
  getters: {
    getAllCards(state) {
      return state.cards;
    },
    getSavedCards(state) {
      return state.saved_cards;
    }
  },
  mutations: {
    set(state, {
      type,
      items
    }) {
      state[type] = items;
    },
    saveCard(state, saved_card) {
      console.log('store save card');
      state.saved_cards.push(saved_card);
    },

  }
});

export default store;
