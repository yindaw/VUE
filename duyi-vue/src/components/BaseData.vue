<script>
import BaseChild from "./BaseChild";
import BaseIfFor from "./BaseIfFor";
import BaseModel from "./BaseModel";
export default {
    data () {
        return {
            content: "shanshan"
        }
    },
    components: {
        BaseChild,
        BaseIfFor,
        BaseModel,
    },
    directives: {
       slice: {
            bind (el, binding, vnode) {
                const vm = vnode.context;
                let { value, expression, arg, modifiers } = binding;

                if(modifiers.number) {
                value = value.replace(/[^0-9]/g, '');
                }

                
                // el.value = value.slice(0, arg);
                vm[expression] = value.slice(0, arg);

                el.oninput = function (e) {
                let inputVal = el.value;

                if(modifiers.number) {
                    inputVal = inputVal.replace(/[^0-9]/g, '');
                }

                el.value = inputVal.slice(0, arg);
                vm[expression] = inputVal.slice(0, arg);
                }
            },
            update (el, binding, vnode) {
                const vm = vnode.context;
                let { value, arg, expression, modifiers } = binding;

                if(modifiers.number) {
                value = value.replace(/[^0-9]/g, '');
                }

                el.value = value.slice(0, arg);
                vm[expression] = value.slice(0, arg);
           },
        }
    },
    render (createElment) {
        return createElment("div", {
            class: {
                foo: true,
                bar: false
            },
            style: {
                color: "red",
                fontSize: "14px"
            },
            attrs: {
                id: "data",
                index: 1
            }
        }, [
            "xxx",
            createElment("base-child", {
                props: {
                   name: "base-child组件" 
                },
                navtiveOn: {
                    click: function () {
                        console.log("base-child click");
                    }
                }
            }, 
            [
                createElment("p", {
                    slot: "default"
                }, "默认插槽"),
                createElment("div", {
                    slot: "header"
                }, "具名插槽--header"),
            ]
            ),
            createElment("p", {
                domProps: {
                   innerHTML: "<span>innerHTML</span>" 
                },
                on: {
                    click: function () {
                        console.log("p");
                    }
                },
            }),
            createElment("input", {
               directives: [
                   {
                     name: "slice",
                     value: this.content,
                     expression: "content",
                     arg: 5,
                     modifiers: {
                         number: true
                      }  
                   }
               ]
            }),
            this.content,
            createElment("base-if-for", {
                props: {
                    items: [1, 2, 3, 4],
                }
            }),
            createElment("base-model")
        ]);
    }
}
</script>