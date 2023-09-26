<script>
    import {ref} from 'vue';

    export default {
        name: 'FundCard',
        prop: {
            fund: {
                type: Object
            }
        },
        created() {
            console.log('nested child',this.fund)
        }
    }
</script>

<template>
    <div class="fund-card__wrapper w-full">
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
                <!-- details (name, description, investment type, performance, current asset value) -->
            </div>
        </div>
        <div class="fund-card__footer">
            <button class="button-invest rounded-full">Invest Now</button>
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
