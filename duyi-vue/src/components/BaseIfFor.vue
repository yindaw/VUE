<script>
export default {
    props: {
        items: Array,
    },
    render (h) {
       if (this.items.length) {
           return h("ul", this.items.map(item => h("li", {
               key: item,
               ref: "li",
               refInFor: true
           }, item)));
       } else {
           return h("p", "No items found.");
       }
    }
}
</script>