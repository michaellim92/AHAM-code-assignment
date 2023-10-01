<script>
    import {ref} from 'vue';
    import { RouterLink } from 'vue-router'

    export default {
        name: 'FundCard',
        prop: {
            id: {
                type: Number
            },
            name: {
                type: String
            },
            currentNetAssetValue: {
                type: Number
            },
            description: {
                type: String
            },
            performanceHistory: {
                type: Number
            },
        },
        created() {
            console.log('nested child', this.fund)
        },
        data() {
            return {
                fund: null
            }
        }
    }
</script>

<template>
    <div class="fund-card__wrapper w-9/12 mb-3 px-5">
        <div class="fund-card__header">
            <div class="fund-card__title">
                <!-- fund title -->
                <!-- {{ fund.name }} -->
                fund name
            </div>
        </div>
        <div class="fund-card__body">
            <div class="fund-card__details">
                <!-- <div class="text-2xl">{{ fund.description }}</div> -->
                <div>description</div>
                <div>investment type</div>
                <!-- details (name, description, investment type, performance, current asset value) -->
            </div>
        </div>
        <div class="fund-card__footer justify-items-center">
            <router-link to="/payments">
                Invest Now
            </router-link>
        </div>
    </div>
</template>

<style>
    .fund-card__wrapper {
        background-color: #c2c5cb;
        border-radius: 5px;
        padding: 14px 28px;
        color: black;
    }
    .button-invest {
        background-color: red;
        color: white;
        padding: 8px 10px;
    }
</style>
