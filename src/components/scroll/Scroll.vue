<template>
  <div class="scroll-wrapper" :style="styles">
    <div class="scroller">
      <slot name="pullDown" :pullDownStatus="pullDownStatus">
        <div class="pulldown-container">{{ pullDownConfig[pullDownStatus+'Content'] }}</div>
      </slot>
      <slot></slot>
      <slot name="pullUp" :pullUpStatus = "pullUpStatus" >
        <div class="pullup-container">{{ pullUpConfig[pullUpStatus+'Content'] }}</div>
      </slot>
    </div>
  </div>
</template>
<script>
  import IScroll from './iscroll';
  export default {
    props: {
      options: {
        type: Object,
        default() {
          return {
            scrollbars: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            probeType: 2
          };
        }
      },
      height: {
        type: String
      },
      pullDownConfig: {
        type: Object,
        default() {
          return {
            defaultContent: '下拉刷新',
            downContent: '下拉刷新',
            upContent: '释放开始刷新',
            loadContent: '正在刷新'
          };
        }
      },
      pullUpConfig: {
        type: Object,
        default() {
          return {
            defaultContent: '上拉加载',
            downContent: '上拉加载',
            upContent: '释放开始加载',
            loadContent: '正在加载'
          };
        }
      }
    },
    data() {
      return {
        styles: {
          height: this.height || '100%'
        },
        pullDownStatus: 'default',
        pullUpStatus: 'default'
      };
    },
    methods: {
      refresh() {
        this.$nextTick(() => this.iscroll.refresh());
      }
    },
    mounted() {
      const $vm = this;
      let maxY;
      this.iscroll = new IScroll('.scroll-wrapper', this.options);
      this.iscroll.on('scroll', function() {
        maxY = this.maxScrollY;
        if (this.y > 5 && this.y < 60) {
          $vm.pullDownStatus = 'down';
        } else if (this.y >= 60) {
          $vm.pullDownStatus = 'up';
        } else if ((this.y < maxY - 5) && (this.y > maxY - 60)) {
          $vm.pullUpStatus = 'down';
        } else if (this.y <= maxY - 60) {
          $vm.pullUpStatus = 'up';
        }
      });
      this.iscroll.on('touchEnd', function() {
        if (this.y >= 60) {
          this.expandTo(0, 60);
          $vm.pullDownStatus = 'load';
          setTimeout(() => {
            $vm.pullUpStatus = 'default';
            this.reset();
          }, 2000);
        } else if (this.y < 60 && this.y > 5) {
          $vm.pullUpStatus = 'default';
        } else if (this.y <= maxY - 60) {
          this.expandTo(0, maxY - 60);
          $vm.pullUpStatus = 'load';
          setTimeout(() => {
            $vm.pullUpStatus = 'default';
            this.reset();
          }, 2000);
        }
      });
      document.addEventListener('touchmove', function(e) { e.preventDefault(); }, isPassive() ? {
        capture: false,
        passive: false
      } : false);
    },
    beforeDestory() {
      this.iscroll.destroy();
      this.iscroll = null;
    }
  };
  function isPassive() {
    let supportsPassiveOption = false;
    try {
      addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: function() {
          supportsPassiveOption = true;
        }
      }));
    } catch (e) {}
    return supportsPassiveOption;
  }
</script>
<style>
  .scroll-wrapper {
    touch-action: none;
    -webkit-touch-callout: none;
    user-select: none;
    text-size-adjust: none;
    background: #ccc;
    overflow: hidden;
    position: relative;
  }
  .scroller {
    position: relative;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    transform: translateZ(0);
  }
  .pulldown-container, .pullup-container {
    position: absolute;
    width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .pulldown-container {
    top: -60px;
  }
</style>
