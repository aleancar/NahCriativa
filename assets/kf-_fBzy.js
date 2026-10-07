import{B as e,D as t,I as n,Ot as r,U as i,Y as a,d as o}from"./C59ukViC.js";import{n as s,q as c}from"./GUbs_UsO.js";import{t as l}from"./D5ph-QdN.js";var u=s.extend({name:`scrollarea`,style:`
    .p-scrollarea {
        display: block;
        background: dt('scrollarea.background');
        border: 1px solid dt('scrollarea.border.color');
        border-radius: dt('scrollarea.border.radius');
    }

    .p-scrollarea:has(> .p-scrollarea-viewport:focus-visible) {
        box-shadow: dt('scrollarea.focus.ring.shadow');
        outline: dt('scrollarea.focus.ring.width') dt('scrollarea.focus.ring.style') dt('scrollarea.focus.ring.color');
        outline-offset: dt('scrollarea.focus.ring.offset');
    }

    .p-scrollarea-viewport {
        display: block;
        width: 100%;
        height: 100%;
        outline: none;
        padding: dt('scrollarea.viewport.padding');
    }

    .p-scrollarea-mask .p-scrollarea-viewport[data-scroll-y-after] {
        mask-image: linear-gradient(
            to bottom,
            black,
            black calc(100% - dt('scrollarea.mask.fade.size')),
            transparent
        );
    }

    .p-scrollarea-mask .p-scrollarea-viewport[data-scroll-y-before] {
        mask-image: linear-gradient(
            to bottom,
            transparent,
            black dt('scrollarea.mask.fade.size'),
            black
        );
    }

    .p-scrollarea-mask .p-scrollarea-viewport[data-scroll-y-before][data-scroll-y-after] {
        mask-image: linear-gradient(
            to bottom,
            transparent,
            black dt('scrollarea.mask.fade.size'),
            black calc(100% - dt('scrollarea.mask.fade.size')),
            transparent
        );
    }

    .p-scrollarea-mask .p-scrollarea-viewport[data-scroll-x-after] {
        mask-image: linear-gradient(
            to right,
            black,
            black calc(100% - dt('scrollarea.mask.fade.size')),
            transparent
        );
    }

    .p-scrollarea-mask .p-scrollarea-viewport[data-scroll-x-before] {
        mask-image: linear-gradient(
            to right,
            transparent,
            black dt('scrollarea.mask.fade.size'),
            black
        );
    }

    .p-scrollarea-mask .p-scrollarea-viewport[data-scroll-x-before][data-scroll-x-after] {
        mask-image: linear-gradient(
            to right,
            transparent,
            black dt('scrollarea.mask.fade.size'),
            black calc(100% - dt('scrollarea.mask.fade.size')),
            transparent
        );
    }

    .p-scrollarea-scrollbar {
        display: block;
        margin: dt('scrollarea.scrollbar.margin');
        background: dt('scrollarea.scrollbar.background');
        border-radius: dt('scrollarea.border.radius');
        z-index: 50;
        transition: opacity dt('scrollarea.scrollbar.transition.duration') ease;
    }

    .p-scrollarea-scrollbar::before {
        content: '';
        position: absolute;
        inset: 0;
    }

    .p-scrollarea-scrollbar[data-orientation='vertical'] {
        width: dt('scrollarea.scrollbar.size');
    }

    .p-scrollarea-scrollbar[data-orientation='horizontal'] {
        height: dt('scrollarea.scrollbar.size');
    }

    .p-scrollarea-scrollbar[data-orientation='vertical']::before {
        width: 1.25rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .p-scrollarea-scrollbar[data-orientation='horizontal']::before {
        height: 1.25rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .p-scrollarea[data-variant='auto'] .p-scrollarea-scrollbar {
        opacity: 0;
    }

    .p-scrollarea[data-variant='auto'] .p-scrollarea-scrollbar:is([data-hovering], [data-scrolling]) {
        opacity: 1;
    }

    .p-scrollarea[data-variant='hover'] .p-scrollarea-scrollbar {
        opacity: 0;
    }

    .p-scrollarea[data-variant='hover'] .p-scrollarea-scrollbar[data-hovering] {
        opacity: 1;
    }

    .p-scrollarea[data-variant='scroll'] .p-scrollarea-scrollbar {
        opacity: 0;
    }

    .p-scrollarea[data-variant='scroll'] .p-scrollarea-scrollbar[data-scrolling] {
        opacity: 1;
    }

    .p-scrollarea[data-variant='hidden'] .p-scrollarea-scrollbar {
        opacity: 0;
        pointer-events: none;
    }

    .p-scrollarea-content {
        display: block;
    }

    .p-scrollarea-corner {
        display: block;
    }

    .p-scrollarea[data-variant='hidden'] .p-scrollarea-corner {
        display: none;
    }

    .p-scrollarea-handle {
        display: block;
        background: dt('scrollarea.handle.background');
        border-radius: dt('scrollarea.border.radius');
    }

    .p-scrollarea-handle[data-orientation='vertical'] {
        width: 100%;
    }

    .p-scrollarea-handle[data-orientation='horizontal'] {
        height: 100%;
    }
`,classes:{root:function(e){return[`p-scrollarea p-component`,{"p-scrollarea-mask":e.props.mask}]}},inlineStyles:{root:{position:`relative`}}}),d={name:`BaseScrollArea`,extends:l,props:{variant:{type:String,default:`auto`},mask:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},style:u,provide:function(){return{$pcScrollArea:this,$parentInstance:this}}},f=500,p=20,m={name:`ScrollArea`,extends:d,inheritAttrs:!1,resizeObserver:null,resizeObserverRaf:null,rafId:null,scrollXTimeout:null,scrollYTimeout:null,isDragging:!1,dragOrientation:null,dragStart:{pointerPos:0,scrollPos:0},prevScroll:{top:0,left:0},data:function(){return{viewportEl:null,scrollbarYEl:null,scrollbarXEl:null,hovering:!1,scrollingX:!1,scrollingY:!1,scrollMeta:{hiddenX:!0,hiddenY:!0,cornerWidth:0,cornerHeight:0,xBefore:!1,xAfter:!1,yBefore:!1,yAfter:!1}}},watch:{viewportEl:function(e,t){t&&t!==e&&this.unbindResizeObserver(),e?(this.bindResizeObserver(),this.$nextTick(this.computeHandle)):this.unbindResizeObserver()}},beforeUnmount:function(){this.unbindResizeObserver(),this.scrollXTimeout&&=(clearTimeout(this.scrollXTimeout),null),this.scrollYTimeout&&=(clearTimeout(this.scrollYTimeout),null),this.rafId&&=(cancelAnimationFrame(this.rafId),null)},methods:{setViewportEl:function(e){this.viewportEl=c(e)?e:null},setScrollbarEl:function(e,t){var n=c(e)?e:null;t===`vertical`?this.scrollbarYEl=n:this.scrollbarXEl=n,this.viewportEl&&this.$nextTick(this.computeHandle)},getHandleSize:function(e,t){if(!e)return 0;var n=e.style.getPropertyValue(t?`--px-handle-height`:`--px-handle-width`);return parseFloat(n)||0},bindResizeObserver:function(){var e=this;this.viewportEl&&typeof ResizeObserver<`u`&&(this.unbindResizeObserver(),this.resizeObserver=new ResizeObserver(function(){e.resizeObserverRaf||=requestAnimationFrame(function(){e.resizeObserverRaf=null,e.computeHandle()})}),this.resizeObserver.observe(this.viewportEl),this.viewportEl.firstElementChild&&this.resizeObserver.observe(this.viewportEl.firstElementChild))},unbindResizeObserver:function(){this.resizeObserverRaf&&=(cancelAnimationFrame(this.resizeObserverRaf),null),this.resizeObserver&&=(this.resizeObserver.disconnect(),null)},computeHandle:function(){var e=this.viewportEl;if(e){var t=e.scrollHeight,n=e.scrollWidth,r=e.clientHeight,i=e.clientWidth,a=e.scrollTop,o=e.scrollLeft,s=r>=t,c=i>=n,l=this.scrollbarYEl,u=this.scrollbarXEl,d=!s&&!c&&l?l.offsetWidth:0,f=!s&&!c&&u?u.offsetHeight:0,m=l&&!s?l.offsetHeight:0,h=u&&!c?u.offsetWidth:0,g={hiddenX:c,hiddenY:s,cornerWidth:d,cornerHeight:f,xBefore:!c&&o>0,xAfter:!c&&n-i-o>1,yBefore:!s&&a>0,yAfter:!s&&t-r-a>1},_=this.scrollMeta;if((_.hiddenX!==g.hiddenX||_.hiddenY!==g.hiddenY||_.cornerWidth!==g.cornerWidth||_.cornerHeight!==g.cornerHeight||_.xBefore!==g.xBefore||_.xAfter!==g.xAfter||_.yBefore!==g.yBefore||_.yAfter!==g.yAfter)&&(this.scrollMeta=g,(_.hiddenX!==g.hiddenX||_.hiddenY!==g.hiddenY)&&this.$nextTick(this.computeHandle)),l&&!s&&m>0){var v=r/t,y=Math.max(v*m,p),b=m-y,x=t-r,S=(x>0?a/x:0)*b;l.style.setProperty(`--px-handle-height`,`${y}px`),l.style.setProperty(`--px-handle-offset`,`${S}px`)}else l&&(l.style.removeProperty(`--px-handle-height`),l.style.removeProperty(`--px-handle-offset`));if(u&&!c&&h>0){var C=i/n,w=Math.max(C*h,p),T=h-w,E=n-i,D=(E>0?o/E:0)*T;u.style.setProperty(`--px-handle-width`,`${w}px`),u.style.setProperty(`--px-handle-offset`,`${D}px`)}else u&&(u.style.removeProperty(`--px-handle-width`),u.style.removeProperty(`--px-handle-offset`))}},onScroll:function(){var e=this;this.rafId||=requestAnimationFrame(function(){e.rafId=null,e.computeHandle()});var t=this.viewportEl;if(t){var n=t.scrollTop,r=t.scrollLeft;this.prevScroll||={top:0,left:0};var i=this.prevScroll;n!==i.top&&(this.scrollingY=!0,this.scrollYTimeout&&clearTimeout(this.scrollYTimeout),this.scrollYTimeout=setTimeout(function(){e.scrollingY=!1},f)),r!==i.left&&(this.scrollingX=!0,this.scrollXTimeout&&clearTimeout(this.scrollXTimeout),this.scrollXTimeout=setTimeout(function(){e.scrollingX=!1},f)),i.top=n,i.left=r}},onPointerEnter:function(e){e.pointerType!==`touch`&&(this.hovering=!0)},onPointerLeave:function(){this.hovering=!1},onScrollbarPointerDown:function(e,t){if(e.pointerType!==`mouse`||e.button===0){e.preventDefault();var n=t===`vertical`,r=n?this.scrollbarYEl:this.scrollbarXEl,i=this.viewportEl;if(r&&i){r.setPointerCapture&&e.pointerId!=null&&r.setPointerCapture(e.pointerId),this.isDragging=!0,this.dragOrientation=t;var a=r.getBoundingClientRect(),o=this.getHandleSize(r,n),s=(n?a.height:a.width)-o;if(s>0){var c=(n?e.clientY-a.top:e.clientX-a.left)-o/2,l=Math.max(0,Math.min(1,c/s)),u=n?i.scrollHeight-i.clientHeight:i.scrollWidth-i.clientWidth;n?i.scrollTop=l*u:i.scrollLeft=l*u}this.dragStart={pointerPos:n?e.clientY:e.clientX,scrollPos:n?i.scrollTop:i.scrollLeft}}}},onScrollbarPointerMove:function(e){if(this.isDragging){e.preventDefault();var t=this.dragOrientation===`vertical`,n=this.viewportEl,r=t?this.scrollbarYEl:this.scrollbarXEl;if(n&&r){var i=r.getBoundingClientRect(),a=this.getHandleSize(r,t),o=(t?i.height:i.width)-a;if(!(o<=0)){var s=(t?e.clientY:e.clientX)-this.dragStart.pointerPos,c=t?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,l=s/o*c;t?n.scrollTop=this.dragStart.scrollPos+l:n.scrollLeft=this.dragStart.scrollPos+l}}}},onScrollbarPointerUp:function(e){var t,n;this.isDragging&&(e.preventDefault(),(t=e.currentTarget)!=null&&(n=t.hasPointerCapture)!=null&&n.call(t,e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),this.isDragging=!1,this.dragOrientation=null)},onScrollbarWheel:function(e,t){var n=this.viewportEl;n&&!e.ctrlKey&&(e.preventDefault(),t===`vertical`?n.scrollTop+=e.deltaY:n.scrollLeft+=e.deltaX||e.deltaY)},onHandlePointerDown:function(e,t){if(e.pointerType!==`mouse`||e.button===0){e.preventDefault(),e.stopPropagation();var n=t===`vertical`,r=n?this.scrollbarYEl:this.scrollbarXEl,i=this.viewportEl;r&&i&&(r.setPointerCapture&&e.pointerId!=null&&r.setPointerCapture(e.pointerId),this.isDragging=!0,this.dragOrientation=t,this.dragStart={pointerPos:n?e.clientY:e.clientX,scrollPos:n?i.scrollTop:i.scrollLeft})}}},computed:{rootStyle:function(){return{"--px-corner-height":`${this.scrollMeta.cornerHeight}px`,"--px-corner-width":`${this.scrollMeta.cornerWidth}px`}},hasOverflowX:function(){return!this.scrollMeta.hiddenX},hasOverflowY:function(){return!this.scrollMeta.hiddenY},attrs:function(){return t(this.a11yAttrs,this.ptmi(`root`))},a11yAttrs:function(){return{"data-variant":this.variant,"data-mask":this.mask?``:void 0,"data-scrolling":this.scrollingX||this.scrollingY?``:void 0,"data-has-overflow-x":this.hasOverflowX?``:void 0,"data-has-overflow-y":this.hasOverflowY?``:void 0,"data-scroll-x-before":this.scrollMeta.xBefore?``:void 0,"data-scroll-x-after":this.scrollMeta.xAfter?``:void 0,"data-scroll-y-before":this.scrollMeta.yBefore?``:void 0,"data-scroll-y-after":this.scrollMeta.yAfter?``:void 0,role:`presentation`,style:this.rootStyle,onPointerenter:this.onPointerEnter,onPointerleave:this.onPointerLeave}}}};function h(s,c,l,u,d,f){return s.asChild?e(s.$slots,`default`,{class:r(s.cx(`root`)),a11yAttrs:f.a11yAttrs},void 0,void 0,1):(n(),o(i(s.as),t({key:0,class:s.cx(`root`),style:s.sx(`root`)},f.attrs),{default:a(function(){return[e(s.$slots,`default`)]}),_:3},16,[`class`,`style`]))}m.render=h;export{m as default};