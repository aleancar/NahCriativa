import{B as e,D as t,I as n,Ot as r,U as i,Y as a,d as o}from"./LD8_IYgO.js";import{n as s,q as c}from"./EUCZpDVQ.js";import{t as l}from"./C5PlsQHH.js";var u=s.extend({name:`gallery`,style:`
    .p-gallery {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .p-gallery-backdrop {
        position: absolute;
        inset: 0;
        z-index: 0;
        background-color: dt('gallery.backdrop.background');
    }

    .p-gallery-header {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        padding: dt('gallery.header.padding');
        background-color: dt('gallery.header.background');
    }

    .p-gallery-footer {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('gallery.footer.padding');
        background-color: dt('gallery.footer.background');
        border-top: 1px solid dt('gallery.footer.border.color');
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .p-gallery-content {
        position: relative;
        z-index: 1;
        flex: 1;
        min-height: 0;
    }

    .p-gallery-item {
        --px-position-x: 0px;
        --px-position-y: 0px;
        --px-scale: 1;
        --px-rotation: 0deg;
        --px-flip-x: 1;
        --px-flip-y: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: center;
        user-select: none;
        touch-action: none;
        align-items: center;
        justify-content: center;
        transform: translate(calc(-50% + var(--px-position-x)), calc(-50% + var(--px-position-y))) scale(var(--px-scale)) rotate(calc(var(--px-rotation))) scaleX(var(--px-flip-x)) scaleY(var(--px-flip-y));
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
        z-index: 0;
        display: none;
        cursor: pointer;
        transition: transform dt('gallery.item.transition.duration') ease, opacity dt('gallery.item.transition.duration') ease;
    }

    .p-gallery-item[data-active] {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
        z-index: 1;
        display: flex;
        cursor: zoom-in;
        will-change: transform;
    }

    .p-gallery-item[data-rotating] {
        transition: none !important;
    }

    .p-gallery-action {
        cursor: pointer;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        width: dt('gallery.action.size');
        height: dt('gallery.action.size');
        border-radius: dt('gallery.action.border.radius');
        color: dt('gallery.action.color');
        transition: background-color dt('gallery.action.transition.duration') ease, color dt('gallery.action.transition.duration') ease;
    }

    .p-gallery-action svg,
    .p-gallery-action i {
        font-size: dt('gallery.action.icon.size');
        width: dt('gallery.action.icon.size');
        height: dt('gallery.action.icon.size');
    }

    .p-gallery-action:hover {
        background: dt('gallery.action.hover.background');
        color: dt('gallery.action.hover.color');
    }

    .p-gallery-action:disabled,
    .p-gallery-action[disabled] {
        opacity: dt('gallery.action.disabled.opacity');
        cursor: default;
        pointer-events: none;
    }

    .p-gallery-next,
    .p-gallery-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
        cursor: pointer;
        background: dt('gallery.navigation.background');
        display: flex;
        align-items: center;
        justify-content: center;
        width: dt('gallery.navigation.size');
        height: dt('gallery.navigation.size');
        border-radius: dt('gallery.navigation.border.radius');
        color: dt('gallery.navigation.color');
        transition: background-color dt('gallery.navigation.transition.duration') ease, color dt('gallery.navigation.transition.duration') ease;
    }

    .p-gallery-next:hover,
    .p-gallery-prev:hover {
        background: dt('gallery.navigation.hover.background');
        color: dt('gallery.navigation.hover.color');
    }

    .p-gallery-next {
        right: dt('gallery.navigation.offset');
    }

    .p-gallery-prev {
        left: dt('gallery.navigation.offset');
    }

    .p-gallery-next svg,
    .p-gallery-next i,
    .p-gallery-prev svg,
    .p-gallery-prev i {
        font-size: dt('gallery.navigation.icon.size');
        width: dt('gallery.navigation.icon.size');
        height: dt('gallery.navigation.icon.size');
    }

    .p-gallery-thumbnail {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
    }

    .p-gallery-thumbnail-content {
        padding: dt('gallery.thumbnail.content.padding');
    }

    .p-gallery-thumbnail-item {
        aspect-ratio: 1 / 1;
        cursor: pointer;
        overflow: hidden;
        display: flex;
        background-color: dt('gallery.thumbnail.background');
        padding: dt('gallery.thumbnail.padding');
        height: dt('gallery.thumbnail.size');
        width: dt('gallery.thumbnail.size');
        border-radius: dt('gallery.thumbnail.border.radius');
        transition: scale dt('gallery.thumbnail.transition.duration') ease;
    }

    .p-gallery-thumbnail-item img {
        border-radius: dt('gallery.thumbnail.border.radius');
    }

    .p-gallery-thumbnail-item:hover {
        outline: dt('gallery.thumbnail.border.width') solid dt('gallery.thumbnail.hover.border.color');
    }

    .p-gallery-thumbnail-item[data-active] {
        outline: dt('gallery.thumbnail.border.width') solid dt('gallery.thumbnail.active.border.color');
        scale: dt('gallery.thumbnail.active.scale');
    }

    .p-gallery[data-zoomed] .p-gallery-footer {
        transform: translateY(100%);
        opacity: 0;
        pointer-events: none;
    }

    .p-gallery[data-zoomed] .p-gallery-next,
    .p-gallery[data-zoomed] .p-gallery-prev {
        opacity: 0;
        pointer-events: none;
    }

    .p-gallery[data-fullscreen]:not(:fullscreen) {
        position: fixed;
        inset: 0;
        width: 100dvw;
        height: 100dvh;
        z-index: 9999;
    }

    .p-gallery-item[data-rotating] {
        transition:
            transform 0.3s ease,
            width 0.3s ease,
            height 0.3s ease,
            opacity 0.3s ease !important;
    }

    .p-gallery-item[data-rotating] > * {
        transition:
            width 0.3s ease,
            height 0.3s ease;
    }
`,classes:{root:`p-gallery p-component`}}),d={name:`Gallery`,extends:{name:`BaseGallery`,extends:l,props:{activeIndex:{type:Number,default:0},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:void 0},closeOnEscape:{type:Boolean,default:!0}},style:u,provide:function(){return{$pcGallery:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:activeIndex`,`update:fullscreen`,`zoom-change`,`rotate-change`,`flip-change`],fullscreenResizeTimeout:null,rootEl:null,prevReported:null,data:function(){return{d_activeIndex:this.activeIndex??0,isFullscreenInternal:!1,pendingAction:null,activeItemTransform:{zoomed:!1,rotated:!1,flipped:!1},contentEl:null,registeredItemCount:0}},watch:{activeIndex:function(e){e!=null&&(this.d_activeIndex=e)},fullscreen:function(e){e!=null&&this.setFullScreen(e)}},mounted:function(){var e=this;typeof document<`u`&&document.addEventListener(`fullscreenchange`,this.onDocumentFullscreenChange),this.fullscreen&&this.$nextTick(function(){return e.setFullScreen(!0)})},beforeUnmount:function(){if(this.registeredItemCount=0,this.fullscreenResizeTimeout&&=(clearTimeout(this.fullscreenResizeTimeout),null),typeof document<`u`&&(document.removeEventListener(`fullscreenchange`,this.onDocumentFullscreenChange),document.fullscreenElement===this.rootEl)){var e,t,n;(e=(t=document).exitFullscreen)==null||(e=e.call(t))==null||(n=e.catch)==null||n.call(e,function(){})}},methods:{setRef:function(e){var t=c(e)?e:e?.$el??null;this.rootEl=c(t)?t:null},setContentEl:function(e){this.contentEl=c(e)?e:null},getItemCount:function(){return this.registeredItemCount},registerItem:function(e){if(e!=null)return e>=this.registeredItemCount&&(this.registeredItemCount=e+1),e;var t=this.registeredItemCount;return this.registeredItemCount+=1,t},handleNext:function(){var e=this.registeredItemCount;if(!(e<=0)){var t=(this.d_activeIndex+1)%e;this.updateActiveIndex(t)}},handlePrev:function(){var e=this.registeredItemCount;if(!(e<=0)){var t=(this.d_activeIndex-1+e)%e;this.updateActiveIndex(t)}},selectItem:function(e){var t=this.registeredItemCount;e<0||e>=t||this.updateActiveIndex(e)},updateActiveIndex:function(e){this.d_activeIndex=e,this.$emit(`update:activeIndex`,e)},dispatchAction:function(e){this.pendingAction={type:e,timestamp:Date.now()}},clearPendingAction:function(){this.pendingAction=null},reportItemState:function(e){this.activeItemTransform={zoomed:e.zoomed,rotated:e.rotated,flipped:e.flipped};var t=this.prevReported;(!t||t.scale!==e.scale)&&this.$emit(`zoom-change`,e.scale),(!t||t.rotation!==e.rotation)&&this.$emit(`rotate-change`,e.rotation),(!t||t.flip.x!==e.flip.x||t.flip.y!==e.flip.y)&&this.$emit(`flip-change`,e.flip),this.prevReported={scale:e.scale,rotation:e.rotation,flip:e.flip}},isItemActive:function(e){return this.d_activeIndex===e},setFullScreen:function(e){if(!(typeof document>`u`)){var t=this.rootEl;if(t){var n=document.fullscreenElement===t;if(e&&!n){var r,i;(r=t.requestFullscreen)==null||(r=r.call(t))==null||(i=r.catch)==null||i.call(r,function(){})}else if(!e&&document.fullscreenElement){var a,o,s;(a=(o=document).exitFullscreen)==null||(a=a.call(o))==null||(s=a.catch)==null||s.call(a,function(){})}}}},toggleFullScreen:function(){this.setFullScreen(!this.isFullscreen)},onDocumentFullscreenChange:function(){var e=this,t=typeof document<`u`&&document.fullscreenElement===this.rootEl;t!==this.isFullscreenInternal&&(this.isFullscreenInternal=t,this.$emit(`update:fullscreen`,t)),this.fullscreenResizeTimeout&&clearTimeout(this.fullscreenResizeTimeout),this.fullscreenResizeTimeout=setTimeout(function(){typeof window<`u`&&window.dispatchEvent(new Event(`resize`)),e.fullscreenResizeTimeout=null},100)},onClickAction:function(e){var t=this,n={zoomIn:function(){return t.dispatchAction(`zoom-in`)},zoomOut:function(){return t.dispatchAction(`zoom-out`)},rotateLeft:function(){return t.dispatchAction(`rotate-left`)},rotateRight:function(){return t.dispatchAction(`rotate-right`)},flipX:function(){return t.dispatchAction(`flip-x`)},flipY:function(){return t.dispatchAction(`flip-y`)},download:function(){return t.dispatchAction(`download`)},next:function(){return t.handleNext()},prev:function(){return t.handlePrev()},toggleFullScreen:function(){return t.toggleFullScreen()}};e&&n[e]&&n[e]()},onKeyDown:function(e){e.key===`ArrowRight`?(e.preventDefault(),this.handleNext()):e.key===`ArrowLeft`?(e.preventDefault(),this.handlePrev()):e.key===`Escape`&&this.closeOnEscape&&this.isFullscreen&&(e.preventDefault(),this.toggleFullScreen())}},computed:{attrs:function(){return t(this.a11yAttrs,this.ptmi(`root`))},isFullscreen:function(){return this.fullscreen??this.isFullscreenInternal},a11yAttrs:function(){return{ref:this.setRef,tabindex:0,"data-pc-name":`gallery`,"data-fullscreen":this.isFullscreen?``:void 0,"data-zoomed":this.activeItemTransform.zoomed?``:void 0,"data-rotated":this.activeItemTransform.rotated?``:void 0,"data-flipped":this.activeItemTransform.flipped?``:void 0,onKeydown:this.onKeyDown}}}};function f(s,c,l,u,d,f){return s.asChild?e(s.$slots,`default`,{a11yAttrs:f.a11yAttrs,class:r(s.cx(`root`))},void 0,void 0,1):(n(),o(i(s.as),t({key:0,class:s.cx(`root`)},f.attrs),{default:a(function(){return[e(s.$slots,`default`)]}),_:3},16,[`class`]))}d.render=f;export{d as default};