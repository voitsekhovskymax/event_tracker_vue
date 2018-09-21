<template>
  <div class="ecard col col-lg-4 col-ms-4 col-sm-6 col-xs-12">
    <div class="content">
      <div class="main-info">
        <div class="star">
            <SvgStar @click="saveCard(card_data)"></SvgStar> 
        </div>
        <a href="#">
          <h5 class="public-name">{{ card_data.organisation_name }}</h5>
        </a>
        <h5 class="time"><span class="start-time" v-html="getTimeFromData(card_data.start_datetime)"></span> - <span class="end-time" v-html="getTimeFromData(card_data.end_datetime)"></span></h5>
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
</template>

 
<script>
import SvgStar from "./icons/star";
import SvgLink from "./icons/link";
export default {
  name: "EventCard",
  props: ["card_data"],
  components: {
    SvgStar,
    SvgLink
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
    saveCard(card_data) {
      console.log("component save card");

      this.$store.commit("saveCard", card_data);
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
    }
  }
};
</script>

<style scoped>
</style>
