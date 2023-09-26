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
                    const response = await fetch('/api/funds');
                    this.funds = await response.json();
                    console.log(this.funds)
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
    <div class="fund-view__wrapper w-full mb-1.5">
        <!-- should loop through data and show FundCard for each -->
        <div> I am fund view</div>
        <div class="">
            <div v-for="product in funds" :key="product.id" class="product-card"
                <FundCard :fund="product"/>
            </div>
        </div>
    </div>
</template>
