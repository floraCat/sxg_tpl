<template>
<div class="sxg-head">
  <a href="#" class="lt"><img class="icon" src="http://localhost:8000/imgs/11.jpg" /></a>
  <h2 v-text="pageTitle"></h2>
  <a href="#" class="rt"><img class="icon" src="http://localhost:8000/imgs/11.jpg" /></a>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            pageTitle: '页面标题'
        };
    },
    methods: {}
};
</script>
<style lang="scss">
.sxg-head {
    z-index: 100;
    position: relative;
    border-bottom: #ddd 1px solid;
    height: 42px;
    background: #fff;
    h2 {
        line-height: 42px;
        font-size: 18px;
        text-align: center;
        color: #4A4A4A;
    }
    .lt {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 20px;
        color: #454553;
    }
    .rt {
        position: absolute;
        top: 0;
        right: 0;
        width: 44px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 1.6rem;
        color: #44A0FF;
    }
    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
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
