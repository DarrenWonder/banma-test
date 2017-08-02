<template>
  <div class="scroll-wrapper" :style="styles">
    <div class="scroller">
      <slot name="pullDown" >
        <div class="pulldown-container">{{ content.pullDown }}</div>
      </slot>
      <slot></slot>
      <slot name="pullUp" >
        <div class="pullup-container">{{ content.pullUp }}</div>
      </slot>
    </div>
  </div>
</template>
<script>
  const status = {
    DEFAULT: Symbol('DEFAULT'),
    WAIT: Symbol('WAIT'),
    LOADING: Symbol('LOADING')
  };
  import IScroll from 'iscroll/build/iscroll-probe';
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
            probeType: 3
          };
        }
      },
      height: {
        type: String
      }
    },
    data() {
      return {
        styles: {
          height: this.height || '100%'
        },
        content: {
          pullDown: '下拉刷新',
          pullUp: '上拉加载'
        },
        status: status
      };
    },
    methods: {
      refresh() {
        this.$nextTick(() => this.iscroll.refresh());
      }
    },
    mounted() {
      this.iscroll = new IScroll('.scroll-wrapper', this.options);
      this.iscroll.on('scroll', function() {
        if (this.y > 60) {
        }
      });
      this.iscroll.on('scrollEnd', function() {
        console.log(this);
        if (this.y > 60) {

          this.enabled = false;
          setTimeout(() => {
            this.enabled = true;
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
  }
  .scroller {
    position: relative;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    transform: translateZ(0);
  }
  .pulldown-container, .pullup-container {
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
</style>