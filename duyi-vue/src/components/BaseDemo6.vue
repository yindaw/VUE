<template>
    <div class="demo">
        <button @click="show = !show">click</button>
        <transition
        :duration="1000" 
        enter-active-class="animated data v-enter-active"
        leave-active-class="animated data v-leave-active">
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>
</template>
<script>
export default {
    data () {
        return {
            show: true
        }
    }
}
</script>
<style scoped>
    button {
        margin-bottom: 10px;
    }

    .box {
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border: 1px solid red;
        color: red;
        margin-bottom: 10px;
    }

    .v-enter,
    .v-leave-to {
        opacity: 0;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 3s;
    }

    .v-enter-to,
    .v-leave {
        opacity: 1;
    }
</style>