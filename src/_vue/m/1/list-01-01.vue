<template>
<ul class="sxg-list">
    <li v-for="(item,index) in items" v-bind:key="index">
        <a class="img" :href="item.href">
            <img :src="item.src">
        </a>
        <div class="info">
            <a class="ttl" :href="item.href" v-text="item.ttl"></a>
            <p class="price" v-text="item.price"></p>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    data: function () {
        return {
            items: [
                {
                    ttl: '图片标题1',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg',
                    price: '￥10.50'
                },
                {
                    ttl: '图片标题2图片标题2图片标题2',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg',
                    price: '￥10.50'
                },
                {
                    ttl: '图片标题3',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg',
                    price: '￥10.50'
                },
                {
                    ttl: '图片标题4',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg',
                    price: '￥10.50'
                },
                {
                    ttl: '图片标题5',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg',
                    price: '￥10.50'
                },
                {
                    ttl: '图片标题6',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg',
                    price: '￥10.50'
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang="scss">
.sxg-list {
    overflow: hidden;
    padding: .1rem 0 0 2.33%;
    li {
        float: left;
        width: 31%;
        margin: 0 2.33% .1rem 0;
        border: #eee .01rem solid;
    }
    .img {
        display: block;
    }
    .info {
        padding: .05rem .05rem 0;
    }
    .ttl {
        display: block;
        height: .4rem;
        line-height: .2rem;
        overflow: hidden;
    }
    .price {
        color: #cf5d4e;
        font-weight: bold;
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