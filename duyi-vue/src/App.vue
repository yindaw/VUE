<template>
    <div id="app">
        app
        <base-level :level="2" @click="handleClick">
            

            <!-- <template #default>
                标题
            </template>

            <template #header>
                标题
            </template>

            <div>div</div>
            <p>p</p> -->



            <template v-slot:header>
                <p>first</p>
            </template>
            <p>scoped</p>
        标题</base-level>
    </div>
</template>
<script>
import BaseLevel from "./components/BaseLevel";
export default {
    name: "app",
    provide () {
        return {
            name: "shanshan"
        }
    },
    components: {
        BaseLevel,
    },
    methods: {
        handleClick () {
          console.log("xxxx");  
        } 
    }
}
</script>