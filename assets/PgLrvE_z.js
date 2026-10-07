import{D as e,H as t,I as n,Ot as r,U as i,V as a,X as o,ct as s,d as c,f as l,p as u,r as d,u as f,v as p,z as m}from"./C59ukViC.js";import{$ as h,N as g,gt as _,kt as v,n as y}from"./GUbs_UsO.js";import{t as b}from"./D5ph-QdN.js";import{t as x}from"./60TiK-mC.js";import{t as S}from"./5X71kreE.js";var C=y.extend({name:`dock`,style:`
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
        background: dt('dock.background');
        border: 1px solid dt('dock.border.color');
        padding: dt('dock.padding');
        border-radius: dt('dock.border.radius');
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0 none;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        padding: dt('dock.item.padding');
        border-radius: dt('dock.item.border.radius');
    }

    .p-dock-item.p-focus {
        box-shadow: dt('dock.item.focus.ring.shadow');
        outline: dt('dock.item.focus.ring.width') dt('dock.item.focus.ring.style') dt('dock.item.focus.ring.color');
        outline-offset: dt('dock.item.focus.ring.offset');
    }

    .p-dock-item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
        width: dt('dock.item.size');
        height: dt('dock.item.size');
    }

    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container {
        overflow-x: auto;
        width: 100%;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
        margin: 0 auto;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container,
    .p-dock-mobile.p-dock-right .p-dock-list-container {
        overflow-y: auto;
        height: 100%;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
        margin: auto 0;
    }

    .p-dock-mobile .p-dock-list .p-dock-item {
        transform: none;
        margin: 0;
    }
`,classes:{root:function(e){var t=e.instance;return[`p-dock p-component`,`p-dock-${e.props.position}`,{"p-dock-mobile":t.queryMatches}]},listContainer:`p-dock-list-container`,list:`p-dock-list`,item:function(e){var t=e.instance,n=e.processedItem,r=e.id;return[`p-dock-item`,{"p-focus":t.isItemActive(r),"p-disabled":t.disabled(n)}]},itemContent:`p-dock-item-content`,itemLink:`p-dock-item-link`,itemIcon:`p-dock-item-icon`}}),w={name:`BaseDock`,extends:b,props:{position:{type:String,default:`bottom`},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:`960px`},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:C,provide:function(){return{$pcDock:this,$parentInstance:this}}};function T(e){return k(e)||O(e)||D(e)||E()}function E(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(e,t){if(e){if(typeof e==`string`)return A(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function O(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function k(e){if(Array.isArray(e))return A(e)}function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var j={name:`DockSub`,hostName:`Dock`,extends:b,emits:[`focus`,`blur`],props:{position:{type:String,default:`bottom`},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:function(){return{currentIndex:-3,focused:!1,focusedOptionIndex:-1}},methods:{getItemId:function(e){return`${this.idx}_${e}`},getItemProp:function(e,t){return e&&e.item?v(e.item[t]):void 0},getPTOptions:function(e,t,n){return this.ptm(e,{context:{index:n,item:t,active:this.isItemActive(this.getItemId(n))}})},isSameMenuItem:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest(`[data-pc-section="item"]`)))},isItemActive:function(e){return e===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(e){this.currentIndex=e},onItemClick:function(e,t){if(this.isSameMenuItem(e)){var n=this.getItemProp(t,`command`);n&&n({originalEvent:e,item:t.item})}},onListFocus:function(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:(this.position===`left`||this.position===`right`)&&this.onArrowDownKey(),e.preventDefault();break;case`ArrowUp`:(this.position===`left`||this.position===`right`)&&this.onArrowUpKey(),e.preventDefault();break;case`ArrowRight`:(this.position===`top`||this.position===`bottom`)&&this.onArrowDownKey(),e.preventDefault();break;case`ArrowLeft`:(this.position===`top`||this.position===`bottom`)&&this.onArrowUpKey(),e.preventDefault();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Enter`:case`NumpadEnter`:case`Space`:this.onSpaceKey(e),e.preventDefault()}},onArrowDownKey:function(){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onArrowUpKey:function(){var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(h(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1)},onSpaceKey:function(){var e=g(this.$refs.list,`li[id="${`${this.focusedOptionIndex}`}"]`),t=e&&g(e,`[data-pc-section="itemlink"]`);t?t.click():e&&e.click()},findNextOptionIndex:function(e){var t=T(h(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=T(h(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=h(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;this.focusedOptionIndex=t[n].getAttribute(`id`)},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},getMenuItemProps:function(t,n){return{action:e({tabindex:-1,class:this.cx(`itemLink`)},this.getPTOptions(`itemLink`,t,n)),icon:e({class:[this.cx(`itemIcon`),_(t.icon)?t.icon:void 0]},this.getPTOptions(`itemIcon`,t,n))}},resolveIcon:function(e){return _(e)?e:s(e)},isComponentIcon:function(e){return!!e&&!_(e)}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},idx:function(){return this.menuId||this.$id}},directives:{ripple:x,tooltip:S}},M=[`id`,`aria-orientation`,`aria-activedescendant`,`tabindex`,`aria-label`,`aria-labelledby`],N=[`id`,`aria-label`,`aria-disabled`,`onClick`,`onMouseenter`,`data-p-focused`,`data-p-disabled`],P=[`href`,`target`];function F(a,s,p,h,g,_){var v=t(`ripple`),y=t(`tooltip`);return n(),u(`div`,e({class:a.cx(`listContainer`)},a.ptm(`listContainer`)),[f(`ul`,e({ref:`list`,id:_.idx,class:a.cx(`list`),role:`menu`,"aria-orientation":p.position===`bottom`||p.position===`top`?`horizontal`:`vertical`,"aria-activedescendant":g.focused?_.focusedOptionId:void 0,tabindex:p.tabindex,"aria-label":p.ariaLabel,"aria-labelledby":p.ariaLabelledby,onFocus:s[0]||=function(){return _.onListFocus&&_.onListFocus.apply(_,arguments)},onBlur:s[1]||=function(){return _.onListBlur&&_.onListBlur.apply(_,arguments)},onKeydown:s[2]||=function(){return _.onListKeyDown&&_.onListKeyDown.apply(_,arguments)},onMouseleave:s[3]||=function(){return _.onListMouseLeave&&_.onListMouseLeave.apply(_,arguments)}},a.ptm(`list`)),[(n(!0),u(d,null,m(p.model,function(t,s){return n(),u(`li`,e({key:s,id:_.getItemId(s),class:a.cx(`item`,{processedItem:t,id:_.getItemId(s)}),role:`menuitem`,"aria-label":t.label,"aria-disabled":_.disabled(t),onClick:function(e){return _.onItemClick(e,t)},onMouseenter:function(e){return _.onItemMouseEnter(s)}},{ref_for:!0},_.getPTOptions(`item`,t,s),{"data-p-focused":_.isItemActive(_.getItemId(s)),"data-p-disabled":_.disabled(t)||!1}),[f(`div`,e({class:a.cx(`itemContent`)},{ref_for:!0},_.getPTOptions(`itemContent`,t,s)),[p.templates.item?(n(),c(i(p.templates.item),{key:1,item:t,icon:t.icon?_.resolveIcon(t.icon):void 0,index:s,label:t.label,props:_.getMenuItemProps(t,s)},null,8,[`item`,`icon`,`index`,`label`,`props`])):o((n(),u(`a`,e({key:0,href:t.url,class:a.cx(`itemLink`),target:t.target,tabindex:`-1`},{ref_for:!0},_.getPTOptions(`itemLink`,t,s)),[p.templates.itemicon?(n(),c(i(p.templates.itemicon),{key:1,item:t,class:r(a.cx(`itemIcon`))},null,8,[`item`,`class`])):(n(),u(d,{key:0},[_.isComponentIcon(t.icon)?o((n(),c(i(_.resolveIcon(t.icon)),e({key:0,class:a.cx(`itemIcon`)},{ref_for:!0},_.getPTOptions(`itemIcon`,t,s)),null,16,[`class`])),[[v]]):t.icon?o((n(),u(`span`,e({key:1,class:[a.cx(`itemIcon`),t.icon]},{ref_for:!0},_.getPTOptions(`itemIcon`,t,s)),null,16)),[[v]]):l(``,!0)],64))],16,P)),[[y,{value:t.label,disabled:!p.tooltipOptions},p.tooltipOptions]])],16)],16,N)}),128))],16,M)],16)}j.render=F;var I={name:`Dock`,extends:w,inheritAttrs:!1,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener(`change`,this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&=(this.query.removeEventListener(`change`,this.matchMediaListener),null)}},computed:{containerClass:function(){return[this.class,this.cx(`root`)]}},components:{DockSub:j}};function L(t,r,i,o,s,c){var l=a(`DockSub`);return n(),u(`div`,e({class:c.containerClass,style:t.style},t.ptmi(`root`)),[p(l,{model:t.model,templates:t.$slots,tooltipOptions:t.tooltipOptions,position:t.position,menuId:t.menuId,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,tabindex:t.tabindex,pt:t.pt,unstyled:t.unstyled},null,8,[`model`,`templates`,`tooltipOptions`,`position`,`menuId`,`aria-label`,`aria-labelledby`,`tabindex`,`pt`,`unstyled`])],16)}I.render=L;export{I as default};