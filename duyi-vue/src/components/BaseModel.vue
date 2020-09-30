<script>
export default {
    data () {
        return {
            value: "shanshan"
        }
    },
    render (h) {
        var self = this;
        return h('div', {}, [
            h("input", {
                attrs: {
                    value: this.value,
                },
                on: {
                    input (e) {
                        self.value = e.target.value;
                    }
                }
            }),
            this.value,
        ]);
    }
}
</script>