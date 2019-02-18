<template>
    <div class="sxg-banner" ref="bannerSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" v-bind:key="index">
                <a :href="item.href" class="banner_btn">
                    <img :src="item.src">
                </a>
            </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export default {
    data: function () {
        return {
            items: [
                {
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                },
                {
                    href: '#',
                    src: 'http://localhost:8000/imgs/11.jpg'
                }
            ]
        };
    },
    mounted: function () {
        this.action();
    },
    methods: {
        action: function () {
            let self = this;
            self.$nextTick(function () {
                /* eslint-disable */
                new Swiper(self.$refs.bannerSwiper, {
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    loop: true
                });
                /* eslint-enable */
            });
        }
    }
};
</script>
<style lang="scss">
.sxg-banner {
    position: relative;
    height: 2rem;
    overflow: hidden;
    .swiper-pagination {
        bottom: 0;
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