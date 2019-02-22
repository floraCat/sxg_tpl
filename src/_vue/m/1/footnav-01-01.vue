<template>
<footer class="sxg-footnav">
    <ul>
        <li v-for="col in cols" :class="[col.name,{on: col.on}]" v-bind:key="col.id">
            <a :href="col.href">
                <span class="icon" v-show="!col.on"><img :src="col.icon" /></span>
                <span class="iconOn" v-show="col.on"><img :src="col.iconOn" /></span>
                <p v-text="col.ttl"></p>
            </a>
            <em v-if="'cart' === col.name && cart_nums" class="num" v-text="cart_nums"></em>
        </li>
    </ul>
</footer>
</template>

<script>
export default {
    data () {
        return {
            cols: [
                {
                    id: 1,
                    name: 'index',
                    ttl: '首页',
                    on: true,
                    href: '#',
                    icon: 'http://localhost:8000/imgs/circle.png',
                    iconOn: 'http://localhost:8000/imgs/circle_on.png'
                },
                {
                    id: 2,
                    name: 'cat',
                    ttl: '分类',
                    on: false,
                    href: '#',
                    icon: 'http://localhost:8000/imgs/circle.png',
                    iconOn: 'http://localhost:8000/imgs/circle_on.png'
                },
                {
                    id: 3,
                    name: 'cart',
                    ttl: '购物车',
                    on: false,
                    href: '#',
                    icon: 'http://localhost:8000/imgs/circle.png',
                    iconOn: 'http://localhost:8000/imgs/circle_on.png'
                },
                {
                    id: 4,
                    name: 'center',
                    ttl: '个人中心',
                    on: false,
                    href: '#',
                    icon: 'http://localhost:8000/imgs/circle.png',
                    iconOn: 'http://localhost:8000/imgs/circle_on.png'
                }
            ],
            cart_nums: 1
        };
    },
    methods: {}
};
</script>
<style lang="scss">
.sxg-footnav {
    z-index: 1000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    ul {
        display: flex;
        width: 100%;
        height: 52px;
        padding: 6px 0;
        background: #fff;
        box-shadow: 1px 5px 15px rgba(50, 50, 50, 0.3);
    }
    li {
        position: relative;
        flex: 1;
        text-align: center;
        border-right: #eee 1px solid;
        &.on p {
            color: #ec5151;
        }
    }
    a {
        color: #aaa;
        &.router-link-exact-active p {
            color: #ec5151;
        }
    }
    span {
        display: block;
        height: 25px;
        img {
            position: absolute;
            width: 20px;
            left: 50%;
            top: 10%;
            margin-left: -10px;
        }
    }
    p {
        font-size: 11px;
        line-height: 20px;
    }
    .num {
        position: absolute;
        top: -8px;
        left: 30%;
        width: 20px;
        height: 20px;
        line-height: 20px;
        color: #fff;
        font-style: normal;
        background: #ec5151;
        border-radius: 10px;
    }
}
</style>

<!--
<dataTool>[
    {"label":"左边宽","tpl":"toolTop","TorB":"50px","left":"120px","lineHeight":"10px"},
    {"label":"右边宽","tpl":"toolBtm","TorB":"50px","left":"210px","lineHeight":"10px"},
    {"label":"整体高","tpl":"toolRt","TorB":"","left":"310px","lineHeight":"10px"}
]</dataTool>
<dataMod>[
    {"cls":[".keyword"],"prop":"width","val":"163px"},
    {"cls":[".submit"],"prop":"width","val":"30px"},
    {"cls":[".keyword",".submit"],"prop":"height","val":"40px"}
]</dataMod>
-->