<template>
  <div class="pro-detail">
    <div >
      <slider v-bind="setting"></slider>
    </div>
    <div class="pro-detail-h-c">
        <div class="d-one">
            <div class="f-20-b title1 pro-biaoti">【第一次，就泰国】曼谷+芭堤雅家庭游 | 6日5晚私家团</div>
            <div class="f-14-g title2">8.18机票升级包 · 海景酒店 · 送当地玩乐</div>
            <div class="star">
                <div class="xingji-box">

                </div>
                <span class="star-score f-14-m">5.0<span style="color:#c3c3c3">&nbsp;分</span></span>
            </div>
            <span class="pro-idtext khpj-btn"><span style="color:#f96868;">103</span>  条评价</span>
            <span class="pro-idtext">产品ID：497</span>
        </div>
        <div class="d-two">
            <em><strong><span style="color:#666666;">产品经理推荐：</span><br></strong></em><br>
            <span style="color: rgb(0, 0, 0);"><span style="color: rgb(102, 102, 102);">★ 【斑马暑期特供机票】，选择</span></span>
            <span style="color: rgb(229, 51, 51);">8月18日</span>
            <span style="color: rgb(102, 102, 102);">为出发日期的客人，有机票升级包可以选择哦！五星航空国泰国际航空的白天直飞航班，上海出发，带孩子出游更轻松！</span><br>
            <span style="color: rgb(229, 51, 51);">★</span>
            <strong><span style="color: rgb(229, 51, 51);"> 【多人立减</span></strong>
            <strong><span style="color: rgb(229, 51, 51);">】4人立减700/人,6人立减900/人</span></strong><br>
            <span style="color: rgb(102, 102, 102);">★ 【经典曼芭】曼谷奢享市区希尔顿，芭提雅入住一线海景五星！大皇宫、玉佛寺走近泰国皇室；东芭乐园、真理寺徜徉芭提雅无边自然风光！</span><br>
            <span style="color: rgb(102, 102, 102);">★ 【饕餮泰餐】经典升级新增曼谷蓝象餐厅 · 创意plus泰式米其林别样体验！全程包含酒店成人早餐，祝您充沛活力每一天！</span><br>
        </div>
    </div>?
  </div>
</template>

<script>
  import slider from 'vue-image-scroll';
  import 'whatwg-fetch';
  import axios from 'axios';
  export default {
    name: 'app',
    data() {
      return {
        setting: {
          styleObject: {
            width: '750',
            height: '500'
          },
          image: [0, 0, 0]
        }
      };
    },
    created() {
      axios.get('/api?m=APIV1&c=Public&a=getNewestRequestToken')
        .then(function(response) {
          console.log(response);
        }).catch(function(err) {
          console.log(err);
        });

    },
    components: {
      slider
    }
  };
</script>
<style lang="scss">

@mixin font-dpr($font-size){
  font-size: $font-size;
  line-height: $font-size;
  [data-dpr="2"] & { font-size: $font-size * 1.5; line-height: $font-size * 1.5;}
  [data-dpr="3"] & { font-size: $font-size * 2; line-height: $font-size * 1.5; }
}
.pro-detail {
  height: 32px;
  @include font-dpr(24px)
 }

a {
    background : linear-gradient(to top, black, white);
    display : flex
}
::placeholder {
    color : #ccc
}
.pro-detail-h-c {
  padding: .56rem .4rem 0 .4rem;
}

.f-24-b{
    @include font-dpr(24px);
    color:#444444;
    /*line-height: 24px;*/
    font-weight: bold;
}
.f-22-b{
    @include font-dpr(22px);
    color:#444444;
    font-weight: bold;
}
.f-20-b{
    @include font-dpr(20px);
    color:#1e1e1e;
    line-height: 20px;
}
.f-18-b{
    @include font-dpr(18px);
    color:#1e1e1e;
    line-height: 20px;
}
.f-16-m{
    @include font-dpr(16px);
    color:#f96868;
    line-height: 20px;
}
.f-16-g-p{
    @include font-dpr(16px);
    color:#74777E;
    line-height: 28px;
}
.f-16-g{
    @include font-dpr(16px);
    color:#74777E;
    line-height: 20px;
}
.f-16-b-p{
    @include font-dpr(16px);
    color:#1e1e1e;
    line-height: 28px;
}
.f-16-b{
    @include font-dpr(16px);
    color:#1e1e1e;
    line-height: 20px;
}
.f-14-s{
    @include font-dpr(14px);
    line-height: 20px;
    color:#62A8EA;
}
.f-14-m{
    @include font-dpr(14px);
    color:#f96868;
    line-height: 20px;
}
.f-14-m-p{
    @include font-dpr(14px);
    color:#f96868;
    line-height: 28px;
}
.f-14-g-p{
    @include font-dpr(14px);
    color:#74777E;
    line-height: 28px;
}
.f-14-g2{
  @include font-dpr(14px);
  color:#c3c3c3;
  line-height: 28px;
}
.f-14-g{
    @include font-dpr(14px);
    color:#75777E;
    line-height: 20px;
}
.f-14-b{
    @include font-dpr(14px);
    color:#1e1e1e;
    line-height: 20px;
}
.f-12-g{
    @include font-dpr(12px);
    color:#74777E;
    line-height: 20px;
}
.c-m{
    color:#f96868;
}

.pro-detail .d-two {
    padding: 1.5rem 0 1rem 0;
    @include font-dpr(14px);
    color: #75777E;
    line-height: 42px !important;
}
</style>
