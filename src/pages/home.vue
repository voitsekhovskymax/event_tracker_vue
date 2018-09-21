<template>
    <div class="home"> 
        <div class="hidden">
            <div class="container">
                <div class="mobile-search-item">
                    <form action="http://lab.jamesgillen.co.uk/action_page.php">
                        <input type="text" placeholder="Search for an event" name="search" id="search">
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <header>
                <div class="container">
                    <div class="navigation">
                        <div class="logo">Event Jumbler</div>
                        <div class="mobile-menu">
                            <span></span>
                        </div>
                        <div class="mobile-search">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 19.1 18.8" style="enable-background:new 0 0 19.1 18.8;" xml:space="preserve">
                                <defs>
                                </defs>
                                <g>
                                    <circle cx="7.5" cy="7.5" r="7" />
                                    <line x1="18.8" y1="18.4" x2="12.6" y2="12.3" />
                                </g>
                            </svg>
                        </div>

                        <div class="main-nav">
                            <div class="left">
                                <nav>
                                    <li>
                                        <a href="#">Feeds</a>
                                    </li>
                                    <li>
                                        <a href="#">Edit</a>
                                    </li>
                                </nav>
                            </div>
                            <div class="right">
                                <div class="search-container">
                                    <form action="http://lab.jamesgillen.co.uk/action_page.php">
                                        <input type="text" placeholder="Search for an event" name="search">
                                        <button type="submit">
                                            <SvgSearch></SvgSearch>
                                        </button>
                                    </form>
                                </div>
                                <div class="saved">
                <div class="star">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 28.6 27.2"
                    style="enable-background:new 0 0 28.6 27.2;" xml:space="preserve">
                    <defs>
                    </defs>
                    <polygon points="14.3,0 18.7,9 28.6,10.4 21.5,17.4 23.2,27.2 14.3,22.6 5.5,27.2 7.2,17.4 0,10.4 9.9,9 " />
                  </svg>
                  <div class="amount">13</div>
                </div>
              </div>
                                <div class="user-area">
                                    <div class="avatar">
                                        <img src="./../assets/img/james-gillen.jpg" alt="user name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section class="saved-wrap">
                    <div class="container">
                        <div class="title-area">
                            <h3>
                              Your upcoming events
                            
                            </h3>
                            <a class="standard" href="#">All saved events</a>
                        </div>
                    </div>
                    <div class="container">
                      <transition name="bounce">
                        <div :class="[{ hide_saved: !hide_saved_wrap }, 'event-day']" >
                            <div class="ecard  col-lg-4 col-ms-4 col-sm-6 col-xs-12" v-for="(card_data, index) in cards" :key="index" v-if="card_data.saved == true">
                                <div class="content">
                                    <div class="main-info">
                                        <div v-bind:class="{  'saved-star': card_data.saved, 'star' :true }" @click="toogleCard(card_data)">
                                            <SvgStar></SvgStar>
                                        </div>
                                        <a href="#">
                                            <h5 class="public-name">{{ card_data.organisation_name }}</h5>
                                        </a>
                                        <h5 class="time">
                                            <span class="start-time" v-html="getTimeFromData(card_data.start_datetime)"></span> - <span class="end-time" v-html="getTimeFromData(card_data.end_datetime)"></span>
                                        </h5>
                                        <a href="#">
                                            <h3 class="ecard-title">{{ card_data.title }}</h3>
                                        </a>
                                        <a href="#">
                                            <h5 class="location">{{ card_data.location }}</h5>
                                        </a>
                                    </div>
                                    <div class="actions">
                                        <a href="#" class="source">
                                            {{card_data.link}}
                                            <SvgLink></SvgLink>
                                        </a>
                                        <a href="#" class="calendar">Add to calendar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </transition>
                        <div class="col-lg-12 hide-saved-wrap text-right" v-if="saved_cards_count > 3">
                                <span v-show="hide_saved_wrap" @click="hide_saved_wrap = false">Hide</span>
                                <span v-show="!hide_saved_wrap" @click="hide_saved_wrap = true">Show</span> 
                              </div>
                    </div>
                </section>

                <section class="location-filter">
                      <!-- main list -->
                      <div class="container filters-wrap">
                        <div class="filters">
                          <select name="filter" id="filter">
                              <option value="filter1">filter 1</option>
                              <option value="filter2">filter 2</option>
                              <option value="filter3">filter 3</option>
                          </select>
                        </div>
                      </div>
                </section>
                <section class="owl-carousel owl-theme">
                    <div class="category-01" data-dot="<button>Concert</button>">
                        <div class="date-list">
                            <div class="container">
                                <div class="date-controls-content">
                                    <h2>May 2018</h2>
                                </div>
                                <div class="ecard-wrapper">
                                    <div class="event-day">
                                        <div class="ecard col col-lg-4 col-ms-4 col-sm-6 col-xs-12" v-for="(card_data, index) in cards" :key="index" v-if="card_data.category == 'concert'">
                                            <div class="content">
                                                <div class="main-info">
                                                    <div v-bind:class="{'saved-star': card_data.saved, 'star':true }" @click="toogleCard(card_data)">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 28.6 27.2" style="enable-background:new 0 0 28.6 27.2;" xml:space="preserve">
                                                            <defs>
                                                            </defs>
                                                            <polygon points="14.3,0 18.7,9 28.6,10.4 21.5,17.4 23.2,27.2 14.3,22.6 5.5,27.2 7.2,17.4 0,10.4 9.9,9 " />
                                                        </svg>
                                                    </div>
                                                    <a href="#">
                                                        <h5 class="public-name">{{ card_data.organisation_name }}</h5>
                                                    </a>
                                                    <h5 class="time">
                                                      <span class="start-time" v-html="getTimeFromData(card_data.start_datetime)"></span> - <span class="end-time" v-html="getTimeFromData(card_data.end_datetime)"></span>
                                                    </h5>
                                                    <a href="#">
                                                        <h3 class="ecard-title">{{ card_data.title }}</h3>
                                                    </a>
                                                    <a href="#">
                                                        <h5 class="location">{{ card_data.location }}</h5>
                                                    </a>
                                                </div>
                                                <div class="actions">
                                                    <a href="#" class="source">
                                                      {{card_data.link}}
                                                      <SvgLink></SvgLink>
                                                    </a>
                                                    <a href="#" class="calendar">Add to calendar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category-02" data-dot="<button>performance</button>">
                        <div class="date-list">
                            <div class="container">
                                <div class="date-controls-content">
                                    <h2>May 2018</h2>
                                </div>
                                <div class="ecard-wrapper">
                                    <div class="event-day">
                                        <div class="ecard col col-lg-4 col-ms-4 col-sm-6 col-xs-12" v-for="(card_data, index) in cards" :key="index" v-if="card_data.category == 'performance'">
                                            <div class="content">
                                                <div class="main-info">
                                                    <div v-bind:class="{'saved-star': card_data.saved, 'star':true }" @click="toogleCard(card_data)">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 28.6 27.2" style="enable-background:new 0 0 28.6 27.2;" xml:space="preserve">
                                                            <defs>
                                                            </defs>
                                                            <polygon points="14.3,0 18.7,9 28.6,10.4 21.5,17.4 23.2,27.2 14.3,22.6 5.5,27.2 7.2,17.4 0,10.4 9.9,9 " />
                                                        </svg>
                                                    </div>
                                                    <a href="#">
                                                        <h5 class="public-name">{{ card_data.organisation_name }}</h5>
                                                    </a>
                                                    <h5 class="time">
                                                      <span class="start-time" v-html="getTimeFromData(card_data.start_datetime)"></span> - <span class="end-time" v-html="getTimeFromData(card_data.end_datetime)"></span>
                                                    </h5>
                                                    <a href="#">
                                                        <h3 class="ecard-title">{{ card_data.title }}</h3>
                                                    </a>
                                                    <a href="#">
                                                        <h5 class="location">{{ card_data.location }}</h5>
                                                    </a>
                                                </div>
                                                <div class="actions">
                                                    <a href="#" class="source">
                                                      {{card_data.link}}
                                                      <SvgLink></SvgLink>
                                                    </a>
                                                    <a href="#" class="calendar">Add to calendar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category-03" data-dot="<button>Seminar</button>">
                        <div class="date-list">
                            <div class="container">
                                <div class="date-controls-content">
                                    <h2>May 2018</h2>
                                </div>
                                <div class="ecard-wrapper">
                                    <div class="event-day">
                                        <div class="ecard col col-lg-4 col-ms-4 col-sm-6 col-xs-12" v-for="(card_data, index) in cards" :key="index" v-if="card_data.category == 'seminar'">
                                            <div class="content">
                                                <div class="main-info">
                                                    <div v-bind:class="{'saved-star': card_data.saved, 'star':true }" @click="toogleCard(card_data)">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 28.6 27.2" style="enable-background:new 0 0 28.6 27.2;" xml:space="preserve">
                                                            <defs>
                                                            </defs>
                                                            <polygon points="14.3,0 18.7,9 28.6,10.4 21.5,17.4 23.2,27.2 14.3,22.6 5.5,27.2 7.2,17.4 0,10.4 9.9,9 " />
                                                        </svg>
                                                    </div>
                                                    <a href="#">
                                                        <h5 class="public-name">{{ card_data.organisation_name }}</h5>
                                                    </a>
                                                    <h5 class="time">
                                                      <span class="start-time" v-html="getTimeFromData(card_data.start_datetime)"></span> - <span class="end-time" v-html="getTimeFromData(card_data.end_datetime)"></span>
                                                    </h5>
                                                    <a href="#">
                                                        <h3 class="ecard-title">{{ card_data.title }}</h3>
                                                    </a>
                                                    <a href="#">
                                                        <h5 class="location">{{ card_data.location }}</h5>
                                                    </a>
                                                </div>
                                                <div class="actions">
                                                    <a href="#" class="source">
                                                      {{card_data.link}}
                                                      <SvgLink></SvgLink>
                                                    </a>
                                                    <a href="#" class="calendar">Add to calendar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </main>

            <footer>
                <!-- footer -->
            </footer>

        </div>
    </div>
</template>

<script>
import SvgStar from "./../components/icons/star.vue";
import SvgSearch from "./../components/icons/search.vue";
import SvgLink from "./../components/icons/link";
import EventCard from "./../components/EventCard";
import { CARDS, SAVED } from "./../data.js";

export default {
  name: "home",
  components: {
    SvgStar,
    SvgSearch,
    SvgLink,
    EventCard
  },
  data() {
    return {
      data: [],
      cards: [],
      hide_saved_wrap: true,
      showFilter: false
    };
  },
  created: function() {
    console.log("created");
  },
  mounted() {
    this.cards = this.$store.getters.getAllCards;
    console.log("mounted");
    this.initJQUERY();
  },
  computed: {
    saved_cards_count() {
      let count = 0;
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].saved == true) {
          count++;
        }
      }
      return count;
    }
  },
  methods: {
    toogleCard(card_data) {
      console.log("toogleCard save card");
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i] == card_data) {
          console.log("save card");
          console.log(this.cards[i]);
          if (this.cards[i].saved) {
            console.log("save = false");

            this.cards[i].saved = false;
            console.log(this.cards[i]);
          } else {
            console.log("save =  true");
            this.cards[i].saved = true;
            console.log(this.cards[i]);
          }
        }
      }
    },
    getTimeFromData(datetime) {
      var h, m;
      if (datetime.getHours() < 10) {
        h = "0" + datetime.getHours();
      } else {
        h = datetime.getHours();
      }

      if (datetime.getMinutes() < 10) {
        m = "0" + datetime.getMinutes();
      } else {
        m = datetime.getMinutes();
      }
      return h + ":" + m;
    },
    initJQUERY() {
      // mobile menu
      $(".mobile-menu").on("click", function() {
        $(".mobile-menu").toggleClass("active");
        $(".main-nav").toggleClass("active");
      });

      // mobile serach
      $(".mobile-search").on("click", function() {
        $(".mobile-search-item").toggleClass("active");
        $(".mobile-search-item input#search").focus();
      });

      // owl
      $(".owl-carousel").owlCarousel({
        autoHeight: true,
        items: 1,
        singleItem: true,
        loop: true,
        dotData: true,
        merge: true,
        center: true,
        smartSpeed: 500,
        dotsData: true
      });

      // wrap owl dots in fixed
      $(".owl-dots").wrap("<div class='fixed-dots'></div>");

      // show filters
      $(".filters").click(function() {
        var el = $(".filter-options"),
          curHeight = el.height(),
          autoHeight = el.css("height", "auto").height();
        el.height(curHeight).animate(
          {
            height: autoHeight == curHeight ? "0" : autoHeight
          },
          500
        );
      });

      // filter swap
      $(".filters").on("click", function() {
        $(".filters").toggleClass("swap");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>