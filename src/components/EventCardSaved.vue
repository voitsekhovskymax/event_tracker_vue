<template>
    <!-- event-day groups cards by the day of the event / needs to be added -->
    <div class="event-day">
      <div class="card saved-card">
        <div class="saved-date">
          <h4>Tuesday, 1 May</h4>
        </div>
        <!-- second card -->
        <div class="content">
          <div class="main-info">
            <div class="star saved-star">
              <!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 28.6 27.2" style="enable-background:new 0 0 28.6 27.2;" xml:space="preserve">-->
                <!--<defs>-->
                <!--</defs>-->
                <!--<polygon points="14.3,0 18.7,9 28.6,10.4 21.5,17.4 23.2,27.2 14.3,22.6 5.5,27.2 7.2,17.4 0,10.4 9.9,9 "></polygon>-->
            <!--</svg>-->
            </div>
            <a href="">
              <h5 class="public-name">The University of Oxford</h5>
            </a>
            <h5 class="time">16:45 - 17.45</h5>
            <a href="">
              <h3 class="card-title">Should you open a business, go freelance or stay full time?</h3>
            </a>
          </div>
        </div>
      </div>
      <div class="card saved-card">
        <div class="saved-date">
          <!-- even if the event falls in another event day we need to keep markup for alignmnet -->
          <h4></h4>
        </div>
        <!-- third card -->
        <div class="content">
          <div class="main-info">
            <div class="star saved-star">
              <!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 28.6 27.2" style="enable-background:new 0 0 28.6 27.2;" xml:space="preserve">-->
                <!--<defs>-->
                <!--</defs>-->
                <!--<polygon points="14.3,0 18.7,9 28.6,10.4 21.5,17.4 23.2,27.2 14.3,22.6 5.5,27.2 7.2,17.4 0,10.4 9.9,9 "></polygon>-->
            <!--</svg>-->
            </div>
            <a href="">
              <h5 class="public-name">UCL - Anthropology Department</h5>
            </a>
            <h5 class="time">18:45 - 19.45</h5>
            <a href="">
              <h3 class="card-title">Showcasing brand new tech that will change your life</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "EventCardSaved",
        props: ['card_data']
    }
</script>

<style scoped>

</style>