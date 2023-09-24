<script>
    import {ref} from 'vue';
    import FundCard from 'FundCard.vue';

    export default {
        data() {
            return {
            funds: []
            }
        },
        async created() {
            const response = await fetch('/api/funds')
            this.funds = await response.json()
            console.log(this.funds)
        },
        components: {
            FundCard,
        }
    }
</script>

<template>
    <div class="fund-view__wrapper">
        <!-- should loop through data and show FundCard for each -->
        <div v-for="product in datas" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.name">
            <h2>{{ product.name }}</h2>
            <p>{{ product.price }}</p>
        </div>
    </div>
</template>
