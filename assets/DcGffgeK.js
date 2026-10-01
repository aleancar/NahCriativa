import{D as e,I as t,U as n,d as r,f as i,p as a,r as o,u as s,z as c}from"./LD8_IYgO.js";import{J as l,at as u,n as d,xt as f}from"./EUCZpDVQ.js";import{t as p}from"./CEAV8Kzl.js";import{t as m}from"./C5PlsQHH.js";import{r as h}from"./De87BZP-.js";var g=d.extend({name:`splitter`,style:`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
        position: relative;
    }

    .p-splitter-gutter::before {
        content: '';
        position: absolute;
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter:focus-visible {
        outline: none;
    }

    .p-splitter-gutter:focus-visible > .p-splitter-gutter-handle {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter[data-orientation='horizontal'][data-resizing] {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter[data-orientation='vertical'][data-resizing] {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter[data-orientation='horizontal'] > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter[data-orientation='vertical'] > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-panel:has(> .p-splitter) {
        display: flex;
    }

    .p-splitter-panel > .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }

    .p-splitter-gutter[data-orientation='horizontal']{
        width: 1px;
        cursor: col-resize;
    }

    .p-splitter-gutter[data-orientation='horizontal']::before {
        content: '';
        width: 5px;
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        transform: translateX(-50%);
    }

    .p-splitter-gutter[data-orientation='vertical']{
        height: 1px;
        cursor: row-resize;
    }

    .p-splitter-gutter[data-orientation='vertical']::before {
        content: '';
        height: 5px;
        position: absolute;
        left: 0;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }

    .p-splitter-gutter[data-disabled] {
        cursor: default;
        pointer-events: none;
        opacity: 0.4;
    }
`,classes:{root:function(e){return[`p-splitter p-component`,`p-splitter-`+e.props.layout]},gutter:`p-splitter-gutter`,gutterHandle:`p-splitter-gutter-handle`}}),_={name:`BaseSplitter`,extends:m,props:{layout:{type:String,default:`horizontal`},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:`session`},step:{type:Number,default:5},disabled:{type:Boolean,default:!1},sizes:{type:Array,default:null}},style:g,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},v(e)}function y(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=x(e,`string`);return v(t)==`symbol`?t:t+``}function x(e,t){if(v(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(v(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function S(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=T(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function C(e){return D(e)||E(e)||T(e)||w()}function w(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,t){if(e){if(typeof e==`string`)return O(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function E(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function D(e){if(Array.isArray(e))return O(e)}function O(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var k={name:`Splitter`,extends:_,inheritAttrs:!1,emits:[`resizestart`,`resizeend`,`resize`,`collapse`,`update:sizes`],pointerMoveListener:null,pointerUpListener:null,size:null,gutterMidpoint:null,initialSizes:[],initialCollapsed:[],reportedCollapsed:[],initialTotal:100,timer:null,data:function(){return{panelSizes:[],panelRegistry:[],resizing:!1,prevPanelIndex:null}},mounted:function(){this.initializePanels()},watch:{panelSizeConfig:function(){this.initializePanels()},sizes:{deep:!0,handler:function(e,t){if(!this.resizing&&e&&this.panels.length&&!(t&&t.length===e.length&&t.every(function(t,n){return t===e[n]}))&&!(this.panelSizes.length===e.length&&this.panelSizes.every(function(t,n){return t===e[n]}))){for(var n=0;n<this.panelRegistry.length;n++){var r=this.panelRegistry[n];r!=null&&r.collapsible&&(r.collapsed=e[n]<=(r.collapsedSize??0))}this.panelSizes=C(e),this.applyPanelStyles()}}}},beforeUnmount:function(){this.clearTimer(),this.unbindPointerListeners()},methods:{isSplitterPanel:function(e){return e.type.name===`SplitterPanel`},getPanelSize:function(e){return(e.props&&f(e.props.size)?e.props.size:null)??100/this.panels.length},buildPanelRegistry:function(){var e=this.panelRegistry??[];this.panelRegistry=this.panels.map(function(t,n){var r=e[n],i=h(t,`minSize`),a=h(t,`maxSize`),o=h(t,`collapsible`),s=h(t,`collapsedSize`);return{index:n,minSize:i??0,maxSize:a??100,collapsible:o??!1,collapsedSize:s??0,collapsed:r?.collapsed??!1}})},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){this.buildPanelRegistry();var t=!1;if(this.isStateful()&&(t=this.restoreState()),!t){var n=this.sizes??null,r=[];this.panels.forEach(function(t,i){r[i]=n?.[i]??e.getPanelSize(t)});for(var i=0;i<this.panelRegistry.length;i++){var a=this.panelRegistry[i];a!=null&&a.collapsible&&r[i]<=(a.collapsedSize??0)&&(a.collapsed=!0)}this.panelSizes=r}this.$nextTick(function(){return e.applyPanelStyles()})}},getPanelChildren:function(){return C(this.$el.children).filter(function(e){return e.getAttribute(`data-pc-name`)===`splitterpanel`})},applyPanelStyles:function(){var e=this,t=this.getPanelChildren();this.panels.forEach(function(n,r){var i=t[r];if(i){var a=e.panelSizes[r]??100/e.panels.length;i.style.flex=`${a} 1 0px`,i.style.overflow=`hidden`,e.horizontal?(i.style.minWidth=`0`,i.style.minHeight=``):(i.style.minHeight=`0`,i.style.minWidth=``),i.id||=e.panelIds[r],i.setAttribute(`data-index`,r),i.setAttribute(`data-orientation`,e.layout);var o=e.panelRegistry[r];o!=null&&o.collapsed?i.setAttribute(`data-collapsed`,``):i.removeAttribute(`data-collapsed`),e.resizing?i.setAttribute(`data-resizing`,``):i.removeAttribute(`data-resizing`)}})},getPanelMinSize:function(e){var t;return((t=this.panelRegistry)==null||(t=t[e])==null?void 0:t.minSize)??0},ariaControlsFor:function(e){var t=[this.panelIds[e],this.panelIds[e+1]].filter(Boolean);return t.length?t.join(` `):void 0},getPanelMaxSize:function(e){var t;return((t=this.panelRegistry)==null||(t=t[e])==null?void 0:t.maxSize)??100},isGutterDisabled:function(){return this.disabled},validatePanelSize:function(e,t,n,r){if(!(t!=null&&t.collapsible))return{size:Math.max(e,n),collapsed:!1};var i=t.collapsedSize??0;return e>=n?{size:e,collapsed:!1}:r||e<=(i+n)/2?{size:i,collapsed:!0}:{size:n,collapsed:!1}},getTotalPanelPx:function(){var e=this.getPanelChildren(),t=0,n=S(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value.getBoundingClientRect();t+=this.horizontal?i.width:i.height}}catch(e){n.e(e)}finally{n.f()}return t},onResizeStart:function(e,t,n){this.size=this.getTotalPanelPx(),n||(this.gutterMidpoint=this.horizontal?e.clientX:e.clientY),this.resizing=!0,this.prevPanelIndex=t,this.initialSizes=C(this.panelSizes),this.initialCollapsed=this.panelRegistry.map(function(e){return e.collapsed}),this.reportedCollapsed=this.panelRegistry.map(function(e){return e.collapsed}),this.initialTotal=this.initialSizes.reduce(function(e,t){return e+t},0)||100,this.applyPanelStyles(),n||this.$emit(`resizestart`,{originalEvent:e,sizes:C(this.initialSizes)})},onResize:function(e,t,n){if(this.size!==null&&this.prevPanelIndex!==null&&this.initialSizes.length!==0){var r=this.prevPanelIndex,i=this.initialTotal,a;if(n)a=i*t/this.size;else{if(this.gutterMidpoint===null)return;a=this.horizontal?l(this.$el)?(this.gutterMidpoint-e.clientX)*i/this.size:(e.clientX-this.gutterMidpoint)*i/this.size:(e.clientY-this.gutterMidpoint)*i/this.size}for(var o=C(this.initialSizes),s=0;s<this.panelRegistry.length;s++)this.initialCollapsed[s]!==void 0&&(this.panelRegistry[s].collapsed=this.initialCollapsed[s]);a>0?this.distribute(o,r,a,n,`forward`):a<0&&this.distribute(o,r+1,-a,n,`backward`);for(var c=0;c<this.panelRegistry.length;c++){var u=this.panelRegistry[c];u.collapsed!==this.reportedCollapsed[c]&&(this.reportedCollapsed[c]=u.collapsed,this.$emit(`collapse`,{index:c,collapsed:u.collapsed,sizes:C(o)}))}this.panelSizes=C(o),this.applyPanelStyles(),this.$emit(`update:sizes`,C(o)),this.$emit(`resize`,{originalEvent:e,sizes:C(o)})}},distribute:function(e,t,n,r,i){var a=this.panelRegistry[t],o=this.getPanelMaxSize(t),s=Math.min(n,Math.max(0,o-e[t]));if(a!=null&&a.collapsible&&a.collapsed){var c=this.getPanelMinSize(t)-a.collapsedSize,l=c/2;r?(s=Math.max(s,c),s=Math.min(s,Math.max(0,o-e[t]))):s<l?s=0:(s=Math.max(s,c),s=Math.min(s,Math.max(0,o-e[t])))}var u=0,d=S(i===`forward`?this.range(t+1,e.length,1):this.range(t-1,-1,-1)),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;if(u>=s)break;var m=this.panelRegistry[p],h=this.getPanelMinSize(p);if(!(m!=null&&m.collapsed)){var g=m!=null&&m.collapsible?m.collapsedSize??0:h,_=Math.max(0,e[p]-g),v=Math.min(s-u,_),y=e[p]-v,b=this.validatePanelSize(y,m,h,r),x=e[p]-b.size;e[p]=b.size,u+=x,m&&(m.collapsed=b.collapsed)}}}catch(e){d.e(e)}finally{d.f()}e[t]+=u,a!=null&&a.collapsible&&a.collapsed&&e[t]>=this.getPanelMinSize(t)&&(a.collapsed=!1)},range:function(e,t,n){for(var r=[],i=e;n>0?i<t:i>t;i+=n)r.push(i);return r},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.resizing=!1,this.$emit(`resizeend`,{originalEvent:e,sizes:C(this.panelSizes)}),this.applyPanelStyles(),this.clear()},repeat:function(e,t,n){this.onResizeStart(e,t,!0),this.onResize(e,n,!0)},setTimer:function(e,t,n){var r=this;this.timer||=(this.$emit(`resizestart`,{originalEvent:e,sizes:C(this.panelSizes)}),this.repeat(e,t,n),setInterval(function(){r.repeat(e,t,n)},40))},clearTimer:function(){this.timer&&=(clearInterval(this.timer),null)},onGutterKeyUp:function(){this.timer&&(this.clearTimer(),this.onResizeEnd())},onGutterKeyDown:function(e,t){if(!this.disabled)switch(e.code){case`ArrowLeft`:this.horizontal&&this.setTimer(e,t,this.step*-1),e.preventDefault();break;case`ArrowRight`:this.horizontal&&this.setTimer(e,t,this.step),e.preventDefault();break;case`ArrowDown`:this.horizontal||this.setTimer(e,t,this.step),e.preventDefault();break;case`ArrowUp`:this.horizontal||this.setTimer(e,t,this.step*-1),e.preventDefault()}},onGutterPointerDown:function(e,t){this.disabled||(this.onResizeStart(e,t),this.bindPointerListeners())},bindPointerListeners:function(){var e=this;this.pointerMoveListener||(this.pointerMoveListener=function(t){return e.onResize(t)},document.addEventListener(`pointermove`,this.pointerMoveListener)),this.pointerUpListener||(this.pointerUpListener=function(t){e.onResizeEnd(t),e.unbindPointerListeners()},document.addEventListener(`pointerup`,this.pointerUpListener))},unbindPointerListeners:function(){this.pointerMoveListener&&=(document.removeEventListener(`pointermove`,this.pointerMoveListener),null),this.pointerUpListener&&=(document.removeEventListener(`pointerup`,this.pointerUpListener),null)},clear:function(){this.size=null,this.gutterMidpoint=null,this.initialSizes=[],this.initialCollapsed=[],this.reportedCollapsed=[],this.initialTotal=100,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case`local`:return window.localStorage;case`session`:return window.sessionStorage;default:throw Error(this.stateStorage+` is not a valid value for the state storage, supported values are "local" and "session".`)}},saveState:function(){u(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this.getStorage().getItem(this.stateKey);return e?(this.panelSizes=JSON.parse(e),!0):!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e,t,n=this,r=[];return(e=(t=this.$slots).default)==null||e.call(t).forEach(function(e){n.isSplitterPanel(e)?r.push(e):e.children instanceof Array&&e.children.forEach(function(e){n.isSplitterPanel(e)&&r.push(e)})}),r},panelSizeConfig:function(){var e=this;return this.panels.map(function(t){return e.getPanelSize(t)}).join(`,`)},panelIds:function(){var e=this;return this.panels.map(function(t,n){return`${e.$id}_panel_${n}`})},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+`px`}:{height:this.gutterSize+`px`}},horizontal:function(){return this.layout===`horizontal`},getPTOptions:function(){return{context:{nested:this.$parentInstance?.nestedState}}},dataP:function(){return p(y(y(y(y({},this.layout,this.layout),`nested`,this.$parentInstance?.nestedState!=null),`resizing`,this.resizing),`disabled`,this.disabled))}}},A=[`data-orientation`,`data-resizing`,`data-disabled`,`data-p`],j=[`tabindex`,`aria-orientation`,`aria-valuenow`,`aria-valuemin`,`aria-valuemax`,`aria-controls`,`aria-disabled`,`onPointerdown`,`onKeydown`,`data-orientation`,`data-resizing`,`data-disabled`,`data-p`],M=[`data-orientation`,`data-p`];function N(l,u,d,f,p,m){return t(),a(`div`,e({class:l.cx(`root`),"data-orientation":l.layout,"data-resizing":p.resizing?``:void 0,"data-disabled":l.disabled?``:void 0},l.ptmi(`root`,m.getPTOptions),{"data-p":m.dataP}),[(t(!0),a(o,null,c(m.panels,function(c,d){return t(),a(o,{key:d},[(t(),r(n(c),{tabindex:`-1`})),d===m.panels.length-1?i(``,!0):(t(),a(`div`,e({key:0,ref_for:!0,ref:`gutter`,class:l.cx(`gutter`),style:{touchAction:`none`,userSelect:`none`},role:`separator`,tabindex:m.isGutterDisabled(d)?-1:0,"aria-orientation":l.layout,"aria-valuenow":Math.round(p.panelSizes[d]??0),"aria-valuemin":Math.round(m.getPanelMinSize(d)),"aria-valuemax":Math.round(100-m.getPanelMinSize(d+1)),"aria-controls":m.ariaControlsFor(d),"aria-disabled":m.isGutterDisabled(d)||void 0,onPointerdown:function(e){return m.onGutterPointerDown(e,d)},onKeydown:function(e){return m.onGutterKeyDown(e,d)},onKeyup:u[0]||=function(){return m.onGutterKeyUp&&m.onGutterKeyUp.apply(m,arguments)},"data-orientation":l.layout,"data-resizing":p.resizing&&p.prevPanelIndex===d?``:void 0,"data-disabled":m.isGutterDisabled(d)?``:void 0,"data-p":m.dataP},{ref_for:!0},l.ptm(`gutter`)),[s(`div`,e({class:l.cx(`gutterHandle`),style:[m.gutterStyle],"data-orientation":l.layout,"data-p":m.dataP},{ref_for:!0},l.ptm(`gutterHandle`)),null,16,M)],16,j))],64)}),128))],16,A)}k.render=N;export{k as default};