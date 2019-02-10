<template>
<div class="sxg-cat">
    <li v-for="cat in cats">
        <a class="img" :href="cat.href">
            <img :src="cat.src" :alt="cat.ttl" />
            <h4 v-text="cat.ttl"></h4>
        </a>
    </li>
</div>
</template>

<script>
export default {
    data: function () {
        return {
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
    methods: {}
}
</script>
<style lang="scss">
.sxg-cat{ 
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