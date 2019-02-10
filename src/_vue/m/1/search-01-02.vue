<template>
<div class="sxgSearch">
    <a class="logo">
        <img src="http://localhost:8000/imgs/11.jpg" />
    </a>
    <form>
        <input type="text" class="keyword" name="keyword" placeholder="..." />
        <input type="submit" class="submit" value=">" />
    </form>
</div>
    
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style>
.p-search-010{ position:relative; width:200px; height:40px;}
.p-search-010 .keyword{ width:163px; height:34px; line-height:36px; padding:2px 3px; border-right:none;}
.p-search-010 .submit{ position:absolute; top:0; right:0; width:30px; height:40px; background: red; cursor:pointer;}
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
