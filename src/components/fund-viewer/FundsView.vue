<script>
    import {ref} from 'vue';
    import FundCard from './FundCard.vue';

    export default {
        name: 'FundView',
        data() {
            return {
                funds: []
            }
        },
        methods: {
           async getFunds() {
                try {
                    const fetchFundsData = await fetch('/api/funds');
                    const response = await fetchFundsData.json();
                    console.log('response', response)
                    this.funds = JSON.parse(JSON.stringify(response));
                    console.log('funds', this.funds)
                } catch (error) {
                    console.error(error);
                }
           }
        },
        components: {
            FundCard,
        },
        created() {
            this.getFunds();
        }
    }
</script>

<template>
    <div class="fund-view__wrapper w-full mb-1.5 px-10">
        <!-- should loop through data and show FundCard for each -->
        <div>
            <div class="text-2xl">
                <strong>{{ funds.length || 0 }}&nbsp;</strong>
                <span>available for investing.</span>
            </div>
        </div>
        <div class="">
            <div v-for="product in funds" :key="product.id" class="product-card">
                <FundCard v-bind="product"/>
            </div>
        </div>
    </div>
</template>
