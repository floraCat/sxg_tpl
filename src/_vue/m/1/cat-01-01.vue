<template>
<ul class="sxg-cat">
    <li v-for="(cat,index) in cats" v-bind:key="index">
        <a :href="cat.href">
            <img :src="cat.src" :alt="cat.ttl" />
            <h4 v-text="cat.ttl"></h4>
        </a>
    </li>
</ul>
</template>

<script>
export default {
    data: function () {
        return {
            cats: [
                {
                    ttl: '栏目1',
                    href: '#1',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目2',
                    href: '#2',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目3',
                    href: '#3',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目4',
                    href: '#4',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目5',
                    href: '#5',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目6',
                    href: '#6',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目7',
                    href: '#7',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目8',
                    href: '#8',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目9',
                    href: '#9',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    ttl: '栏目10',
                    href: '#10',
                    src: 'http://localhost:8000/imgs/11.jpg'
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang="scss">
.sxg-cat {
    overflow: hidden;
    li {
        float: left;
        width: 20%;
    }
    a {
        display: block;
        width: .65rem;
        padding: .05rem 0;
        margin: 0 auto;
    }
    img {
        width: .36rem;
        height: .36rem;
        margin: 0 auto;
        border-radius: 50%;
    }
    h4 {
        text-align: center;
        line-height: .26rem;
    }
}
</style>
