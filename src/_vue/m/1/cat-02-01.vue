<template>
    <div class="sxg-cat">
        <div class="tabs" ref="catSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :class="{on: indexOn === index}" @click="switchTab(index)" v-for="(item, index) in items" v-bind:key="index">
                    <a class="cat_btn">
                        <h3>{{item.ttl}}</h3>
                    </a>
                </div>
            </div>
        </div>
        <div class="key" @click="drop()">下拉</div>
        <div class="drop" v-if="dropFlag">
            <a v-for="(item,index) in items" :class="{on: indexOn === index}" v-bind:key="index" @click="switchTab(index)">{{item.ttl}}</a>
        </div>
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
                    ttl: '栏目1'
                },
                {
                    ttl: '栏目2'
                },
                {
                    ttl: '栏目3'
                },
                {
                    ttl: '栏目4'
                },
                {
                    ttl: '栏目5'
                },
                {
                    ttl: '栏目6'
                },
                {
                    ttl: '栏目7'
                },
                {
                    ttl: '栏目8'
                },
                {
                    ttl: '栏目9'
                },
                {
                    ttl: '栏目10'
                },
                {
                    ttl: '栏目11'
                },
                {
                    ttl: '栏目12'
                }
            ],
            indexOn: 0,
            mySwiper: null,
            dropFlag: false
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
                this.mySwiper = new Swiper(self.$refs.catSwiper, {
                    slidesPerView: 5.5
                });
                /* eslint-enable */
            });
        },
        switchTab (index) {
            if (this.dropFlag) {
                this.mySwiper.slideTo(index);
            }
            this.indexOn = index;
            this.dropFlag = false;
            this.handle(index);
        },
        handle (index) {
            console.log('正在处理的tab序号为' + index);
        },
        drop () {
            this.dropFlag = !this.dropFlag;
        }
    }
};
</script>
<style lang="scss">
.sxg-cat {
    position: relative;
    height: .36rem;
    line-height: .36rem;
    text-align: center;
    border-bottom: #eee .01rem solid;
    .tabs {
        width: 3.31rem;
        height: .36rem;
        overflow: hidden;
    }
    .swiper-slide {
        border-right: #eee .01rem solid;
        &.on {
            border-bottom: red .02rem solid;
        }
    }
    .key {
        z-index: 99;
        position: absolute;
        top: 0;
        right: 0;
        width: .44rem;
        height: .35rem;
        line-height: .35rem;
        text-align: center;
        background: #fff;
        border-left: #eee .01rem solid;
        cursor: pointer;
    }
    .drop {
        overflow: hidden;
        background: #eee;
        a {
            float: left;
            width: 20%;
            border-right: #eee .01rem solid;
            border-bottom: #eee .01rem solid;
        }
        a.on {
            color: red;
        }
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
