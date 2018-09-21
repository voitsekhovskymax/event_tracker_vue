<template>
  <div class="date-list">
    <div class="container">
      <div class="date-controls-content">
        <h2>{{ this.week_str }}</h2>
      </div>
      <div class="ecard-wrapper">
            <EventCard v-for="(card_data, index) in cards" :key="index" :card_data="card_data" />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard";

export default {
  name: "EventCardGroup",
  props: ["cards_by_month", "monthKey"],
  components: {
    EventCard
  },
  computed: {
    week_str: function() {
      return this.$props.cards_by_month["card_groups"][this.$props.monthKey][
        "week_str"
      ];
    },
    cards: function() {
      return this.$props.cards_by_month["card_groups"][this.$props.monthKey][
        "cards"
      ];
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
}
.container:after {
  content: "";
  display: table;
  clear: both;
}
.container.no-p {
  padding: 0;
}

.date-list {
  position: relative;
  padding: 0 0 60px 0;
}
.date-list .card-wrapper {
  width: 100%;
}
@media screen and (min-width: 650px) {
  .date-list .card-wrapper {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: end;
    align-items: flex-end;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
@media screen and (min-width: 1065px) {
  .date-list .card-wrapper {
    display: unset;
    -ms-flex-align: unset;
    align-items: unset;
    overflow: auto;
    margin-bottom: 0;
  }
}
.date-list .card:nth-of-type(3n + 1) {
  clear: both;
  float: left;
  direction: ltr;
  padding-left: 7.5px;
  padding-right: 7.5px;
  width: 100%;
}
@media screen and (min-width: 481px) {
  .date-list .card:nth-of-type(3n + 1) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 1065px) {
  .date-list .card:nth-of-type(3n + 1) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 650px) {
  .date-list .card:nth-of-type(3n + 1) {
    width: 50%;
  }
}
@media screen and (min-width: 1065px) {
  .date-list .card:nth-of-type(3n + 1) {
    width: 28.57143%;
  }
}
@media screen and (min-width: 1065px) {
  .date-list .card:nth-of-type(3n + 1) {
    margin-left: 7.14286%;
  }
}

.date-controls-content h2 {
  float: left;
  float: left;
  direction: ltr;
  padding-left: 7.5px;
  padding-right: 7.5px;
  width: 100%;
}
@media screen and (min-width: 481px) {
  .date-controls-content h2 {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 1065px) {
  .date-controls-content h2 {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 650px) {
  .date-controls-content h2 {
    width: 50%;
  }
}
@media screen and (min-width: 1065px) {
  .date-controls-content h2 {
    width: 28.57143%;
  }
}
@media screen and (min-width: 1065px) {
  .date-controls-content h2 {
    margin-left: 7.14286%;
  }
}

@media screen and (min-width: 650px) {
  .space-adjustment {
    position: relative;
    top: 40px;
  }
}
</style>