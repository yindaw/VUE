<template>
  <div class="student">
    学员展示
  </div>
</template>
<script>
export default {
    beforeRouteEnter (to, from, next) {
        next(vm => {
            console.log(vm.name);
        });
    },
    beforeRouteUpdate (to, from,next) {
            console.log("update");
            console.log(this);
            next();
    },
    beforeRouteLeave (to, from, next) {
           console.log("beforeRouteLeave");
           next();
    },
    data () {
        return {
            name: "student",
        }
    }
}
</script> 