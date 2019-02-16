<template>
<div class="sxg-_test">
    <div v-text="test1.b" @click="fun1(test1.a)"></div>
    <div v-if="'222' === test1.b && test3">has-v-if</div>
    <div v-if="test3" @click="fun2()">has-v-if-2</div>
    <div :class="{on:cls.on, on2:cls.on2}">{{test1.a}}</div>
    <li v-for="cat in cats">
        <a class="img" :href="cat.href">
            <img :src="cat.src" :alt="cat.ttl" />
            <h4 v-text="cat.ttl"></h4>
        </a>
    </li>
    <p v-for="col in cols">
        <h4 v-text="col.ttl"></h4>
    </p>
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
    data () {
        return {
            test1: {
                a: 111,
                b: '222'
            },
            cls: {
                on: true,
                on2: false
            },
            test2: 22222,
            test3: true,
            test4: {
                test5: {
                    test6: 66666
                }
            },
            cols: [
                {
                    ttl: '栏目1'
                },
                {
                    ttl: '栏目2'
                }
            ],
            cats: [
                {
                    ttl: '分类1',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '分类2',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '分类3',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '分类4',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '分类5',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '分类6',
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                }
            ]
        }
    },
    mounted () {
        console.log('mounted');
    },
    methods: {
        fun1 () {
            console.log(11111);
        },
        fun2 () {
            console.log(22222);
        },
    }
}
</script>
<style lang="scss">
.sxg-_test{ 
    overflow:hidden; 
    width:240px;
    li{ 
        float:left;  
        padding:5px 10px;
    }
    .img img{ 
        width:60px; 
        height:60px;
    }
    h4{ 
        overflow: hidden; 
        height: 21px; 
        font-size:12px; 
        font-weight:normal;
        text-align:center;
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