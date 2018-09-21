<template>
    <section class="saved-events-section">
        <h3>Saved events</h3>
            <EventCardSaved v-for="(card_data, index) in saved_cards" :key="index" :card_data="card_data" />
    </section>
</template>

<script>
    import EventCardSaved from "./EventCardSaved";

    export default {
        name: "SavedEventSection",
        props: ['saved_cards'],
        components: {
            EventCardSaved
        }
    }
</script>

<style scoped>

</style>