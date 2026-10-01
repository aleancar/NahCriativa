import{At as e,B as t,D as n,H as r,I as i,Ot as a,S as o,U as s,V as c,X as l,Y as u,ct as d,d as f,f as p,jt as m,kt as h,p as g,r as _,u as v,v as y,z as b}from"./LD8_IYgO.js";import{a as x,t as S}from"./B3iE1oVL.js";import{At as C,H as w,N as T,X as E,gt as D,kt as O,n as k,ut as A,wt as j,xt as M}from"./EUCZpDVQ.js";import{t as N}from"./1d7j-Dyg.js";import{t as P}from"./C5PlsQHH.js";import{t as F}from"./liTNUue3.js";import{t as I}from"./CYQGXbIo.js";import{t as L}from"./lckmOw2m.js";import{t as R}from"./wOBw2cOi.js";var z=k.extend({name:`megamenu`,style:`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        font-weight: dt('megamenu.item.label.font.weight');
        font-size: dt('megamenu.item.label.font.size');
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
        font-size: dt('megamenu.item.icon.size');
        width: dt('megamenu.item.icon.size');
        height: dt('megamenu.item.icon.size');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
        will-change: transform;
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        font-size: dt('megamenu.submenu.label.font.size');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`,classes:{root:function(e){var t=e.instance;return[`p-megamenu p-component`,{"p-megamenu-mobile":t.queryMatches,"p-megamenu-mobile-active":t.mobileActive,"p-megamenu-horizontal":t.horizontal,"p-megamenu-vertical":t.vertical}]},start:`p-megamenu-start`,button:`p-megamenu-button`,rootList:`p-megamenu-root-list`,submenuLabel:function(e){var t=e.instance,n=e.processedItem;return[`p-megamenu-submenu-label`,{"p-disabled":t.isItemDisabled(n)}]},item:function(e){var t=e.instance,n=e.processedItem;return[`p-megamenu-item`,{"p-megamenu-item-active":t.isItemActive(n),"p-focus":t.isItemFocused(n),"p-disabled":t.isItemDisabled(n)}]},itemContent:`p-megamenu-item-content`,itemLink:`p-megamenu-item-link`,itemIcon:`p-megamenu-item-icon`,itemLabel:`p-megamenu-item-label`,submenuIcon:`p-megamenu-submenu-icon`,overlay:`p-megamenu-overlay`,grid:`p-megamenu-grid`,column:function(e){var t=e.instance,n=e.processedItem,r=t.isItemGroup(n)?n.items.length:0,i;if(t.$parentInstance.queryMatches)i=`p-megamenu-col-12`;else switch(r){case 2:i=`p-megamenu-col-6`;break;case 3:i=`p-megamenu-col-4`;break;case 4:i=`p-megamenu-col-3`;break;case 6:i=`p-megamenu-col-2`;break;default:i=`p-megamenu-col-12`}return i},submenu:`p-megamenu-submenu`,separator:`p-megamenu-separator`,end:`p-megamenu-end`},inlineStyles:{rootList:function(e){return{"max-height":e.props.scrollHeight,overflow:`auto`}}}}),B={name:`BaseMegaMenu`,extends:P,props:{model:{type:Array,default:null},orientation:{type:String,default:`horizontal`},breakpoint:{type:String,default:`960px`},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:`20rem`},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:z,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},V={name:`MegaMenuSub`,hostName:`MegaMenu`,extends:P,emits:[`item-click`,`item-mouseenter`],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return`${this.getItemId(e)}_list`},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return`${this.menuId}_${e.key}`},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,n){return e&&e.item?O(e.item[t],n):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getPTOptions:function(e,t,n){return this.ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return M(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return M(e.items)},onItemClick:function(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.$emit(`item-click`,{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit(`item-mouseenter`,{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,`separator`)}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(e){return t.isItemVisible(e)&&t.getItemProp(e,`separator`)}).length+1},getMenuItemProps:function(e,t){return{action:n({class:this.cx(`itemLink`),tabindex:-1},this.getPTOptions(e,t,`itemLink`)),icon:n({class:[this.cx(`itemIcon`),D(this.getItemProp(e,`icon`))?this.getItemProp(e,`icon`):void 0]},this.getPTOptions(e,t,`itemIcon`)),label:n({class:this.cx(`label`)},this.getPTOptions(e,t,`label`)),submenuicon:n({class:this.cx(`submenuIcon`)},this.getPTOptions(e,t,`submenuIcon`))}},resolveIcon:function(e){return D(e)?e:d(e)},isComponentIcon:function(e){return!!e&&!D(e)}},components:{AngleRight:I,AngleDown:L},directives:{ripple:F}},H=[`tabindex`],U=[`id`,`aria-label`,`aria-disabled`,`aria-expanded`,`aria-haspopup`,`aria-level`,`aria-setsize`,`aria-posinset`,`data-p-active`,`data-p-focused`,`data-p-disabled`],W=[`onClick`,`onMouseenter`],G=[`href`,`target`],K=[`id`];function q(t,o,d,h,C,w){var T=c(`MegaMenuSub`,!0),E=r(`ripple`);return i(),g(`ul`,n({class:d.level===0?t.cx(`rootList`):t.cx(`submenu`),tabindex:d.tabindex},d.level===0?t.ptm(`rootList`):t.ptm(`submenu`)),[d.submenu?(i(),g(`li`,n({key:0,class:[t.cx(`submenuLabel`,{submenu:d.submenu}),w.getItemProp(d.submenu,`class`)],style:w.getItemProp(d.submenu,`style`),role:`presentation`},t.ptm(`submenuLabel`)),m(w.getItemLabel(d.submenu)),17)):p(``,!0),(i(!0),g(_,null,b(d.items,function(r,c){return i(),g(_,{key:w.getItemKey(r)},[w.isItemVisible(r)&&!w.getItemProp(r,`separator`)?(i(),g(`li`,n({key:0,id:w.getItemId(r),style:w.getItemProp(r,`style`),class:[t.cx(`item`,{processedItem:r}),w.getItemProp(r,`class`)],role:`menuitem`,"aria-label":w.getItemLabel(r),"aria-disabled":w.isItemDisabled(r)||void 0,"aria-expanded":w.isItemGroup(r)?w.isItemActive(r):void 0,"aria-haspopup":w.isItemGroup(r)&&!w.getItemProp(r,`to`)?`menu`:void 0,"aria-level":d.level+1,"aria-setsize":w.getAriaSetSize(),"aria-posinset":w.getAriaPosInset(c)},{ref_for:!0},w.getPTOptions(r,c,`item`),{"data-p-active":w.isItemActive(r),"data-p-focused":w.isItemFocused(r),"data-p-disabled":w.isItemDisabled(r)}),[v(`div`,n({class:t.cx(`itemContent`),onClick:function(e){return w.onItemClick(e,r)},onMouseenter:function(e){return w.onItemMouseEnter(e,r)}},{ref_for:!0},w.getPTOptions(r,c,`itemContent`)),[d.templates.item?(i(),f(s(d.templates.item),{key:1,item:r.item,icon:w.getItemProp(r,`icon`)?w.resolveIcon(w.getItemProp(r,`icon`)):void 0,hasSubmenu:w.isItemGroup(r),label:w.getItemLabel(r),props:w.getMenuItemProps(r,c)},null,8,[`item`,`icon`,`hasSubmenu`,`label`,`props`])):l((i(),g(`a`,n({key:0,href:w.getItemProp(r,`url`),class:t.cx(`itemLink`),target:w.getItemProp(r,`target`),tabindex:`-1`},{ref_for:!0},w.getPTOptions(r,c,`itemLink`)),[d.templates.itemicon?(i(),f(s(d.templates.itemicon),{key:0,item:r.item,class:a(t.cx(`itemIcon`))},null,8,[`item`,`class`])):w.isComponentIcon(w.getItemProp(r,`icon`))?(i(),f(s(w.resolveIcon(w.getItemProp(r,`icon`))),n({key:1,class:t.cx(`itemIcon`)},{ref_for:!0},w.getPTOptions(r,c,`itemIcon`)),null,16,[`class`])):w.getItemProp(r,`icon`)?(i(),g(`span`,n({key:2,class:[t.cx(`itemIcon`),w.getItemProp(r,`icon`)]},{ref_for:!0},w.getPTOptions(r,c,`itemIcon`)),null,16)):p(``,!0),v(`span`,n({class:t.cx(`itemLabel`)},{ref_for:!0},w.getPTOptions(r,c,`itemLabel`)),m(w.getItemLabel(r)),17),w.isItemGroup(r)?(i(),g(_,{key:3},[d.templates.submenuicon?(i(),f(s(d.templates.submenuicon),n({key:0,active:w.isItemActive(r),class:t.cx(`submenuIcon`)},{ref_for:!0},w.getPTOptions(r,c,`submenuIcon`)),null,16,[`active`,`class`])):(i(),f(s(d.horizontal||d.mobileActive?`AngleDown`:`AngleRight`),n({key:1,class:t.cx(`submenuIcon`)},{ref_for:!0},w.getPTOptions(r,c,`submenuIcon`)),null,16,[`class`]))],64)):p(``,!0)],16,G)),[[E]])],16,W),y(S,{name:`p-anchored-overlay`},{default:u(function(){return[w.isItemVisible(r)&&w.isItemGroup(r)?l((i(),g(`div`,n({key:0,class:t.cx(`overlay`)},{ref_for:!0},t.ptm(`overlay`)),[v(`div`,n({class:t.cx(`grid`)},{ref_for:!0},t.ptm(`grid`)),[(i(!0),g(_,null,b(r.items,function(a){return i(),g(`div`,n({key:w.getItemKey(a),class:t.cx(`column`,{processedItem:r})},{ref_for:!0},t.ptm(`column`)),[(i(!0),g(_,null,b(a,function(n){return i(),f(T,{key:w.getSubListKey(n),id:w.getSubListId(n),style:e(t.sx(`submenu`,!0,{processedItem:r})),role:`menu`,menuId:d.menuId,focusedItemId:d.focusedItemId,submenu:n,items:n.items,templates:d.templates,level:d.level+1,mobileActive:d.mobileActive,pt:t.pt,unstyled:t.unstyled,onItemClick:o[0]||=function(e){return t.$emit(`item-click`,e)},onItemMouseenter:o[1]||=function(e){return t.$emit(`item-mouseenter`,e)}},null,8,[`id`,`style`,`menuId`,`focusedItemId`,`submenu`,`items`,`templates`,`level`,`mobileActive`,`pt`,`unstyled`])}),128))],16)}),128))],16)],16)),[[x,w.isItemActive(r)]]):p(``,!0)]}),_:2},1024)],16,U)):p(``,!0),w.isItemVisible(r)&&w.getItemProp(r,`separator`)?(i(),g(`li`,n({key:1,id:w.getItemId(r),class:[t.cx(`separator`),w.getItemProp(r,`class`)],style:w.getItemProp(r,`style`),role:`separator`},{ref_for:!0},t.ptm(`separator`)),null,16,K)):p(``,!0)],64)}),128))],16,H)}V.render=q;var J={name:`MegaMenu`,extends:B,inheritAttrs:!1,emits:[`focus`,`blur`],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:``,parentKey:``},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{activeItem:function(e){M(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,t){return e?O(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemGroup:function(e){return M(this.getItemProp(e,`items`))},isItemSeparator:function(e){return this.getItemProp(e,`separator`)},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&M(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,N.clear(this.menubar),this.hide()):(this.mobileActive=!0,N.set(`menu`,this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:``},w(this.menubar)},hide:function(e,t){var n=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){w(n.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:``,parentKey:``},t&&w(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var t=this.findFirstFocusedItemIndex(),n=this.findVisibleItem(t);this.focusedItemInfo={index:t,key:n.key,parentKey:n.parentKey}}this.$emit(`focus`,e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:``,parentKey:``},this.searchValue=``,this.dirty=!1,this.$emit(`blur`,e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&A(e.key)&&this.searchItems(e,e.key)}},onItemChange:function(e){var t=e.processedItem,n=e.isFocus;if(!j(t)){var r=t.index,i=t.key,a=t.parentKey,o=t.items,s=M(o);s&&(this.activeItem=t),this.focusedItemInfo={index:r,key:i,parentKey:a},s&&(this.dirty=!0),n&&w(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,n=e.processedItem,r=this.isProccessedItemGroup(n),i=j(n.parent);if(this.isSelected(n)){var a=n.index,o=n.key,s=n.parentKey;this.activeItem=null,this.focusedItemInfo={index:a,key:o,parentKey:s},this.dirty=!i,this.mobileActive||w(this.menubar,{preventScroll:!0})}else r?this.onItemChange(e):this.hide(t)},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal){if(M(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:``,parentKey:this.activeItem.key};else{var t=this.findVisibleItem(this.focusedItemInfo.index);this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,key:t.key,parentKey:t.parentKey},this.searchValue=``)}}var n=this.focusedItemInfo.index===-1?this.findFirstFocusedItemIndex():this.findNextItemIndex(this.focusedItemInfo.index);this.changeFocusedItemInfo(e,n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index);!this.isProccessedItemGroup(t)&&M(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var n=this.focusedItemInfo.index===-1?this.findLastFocusedItemIndex():this.findPrevItemIndex(this.focusedItemInfo.index);this.changeFocusedItemInfo(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index);if(this.isProccessedItemGroup(t)){if(this.horizontal){var n=this.focusedItemInfo.index===-1?this.findLastFocusedItemIndex():this.findPrevItemIndex(this.focusedItemInfo.index);this.changeFocusedItemInfo(e,n)}}else{this.vertical&&M(this.activeItem)&&t.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var r=t.columnIndex-1,i=this.visibleItems.findIndex(function(e){return e.columnIndex===r});i!==-1&&this.changeFocusedItemInfo(e,i)}e.preventDefault()},onArrowRightKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index);if(this.isProccessedItemGroup(t)){if(this.vertical){if(M(this.activeItem)&&this.activeItem.key===t.key)this.focusedItemInfo={index:-1,key:``,parentKey:this.activeItem.key};else{var n=this.findVisibleItem(this.focusedItemInfo.index);this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue=``)}}var r=this.focusedItemInfo.index===-1?this.findFirstFocusedItemIndex():this.findNextItemIndex(this.focusedItemInfo.index);this.changeFocusedItemInfo(e,r)}else{var i=t.columnIndex+1,a=this.visibleItems.findIndex(function(e){return e.columnIndex===i});a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=T(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),n=t&&T(t,`a[data-pc-section="itemlink"]`);n?n.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){M(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index);!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!e.target||e.target!==t.target&&!e.target.contains(t.target);n&&r&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){E()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener(`change`,this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&=(this.query.removeEventListener(`change`,this.matchMediaListener),null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e)?.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return M(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return C(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(e){return t.isValidItem(e)}):-1;return n>-1?n+e+1:e},findPrevItemIndex:function(e){var t=this,n=e>0?C(this.visibleItems.slice(0,e),function(e){return t.isValidItem(e)}):-1;return n>-1?n:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return M(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r=-1,i=!1;return this.focusedItemInfo.index===-1?r=this.visibleItems.findIndex(function(e){return n.isItemMatched(e)}):(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}):r+this.focusedItemInfo.index),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemInfo(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,t){var n=this.findVisibleItem(t);this.focusedItemInfo.index=t,this.focusedItemInfo.key=M(n)?n.key:``,this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e===-1?this.focusedItemId:`${this.$id}_${e}`,n=t===null&&this.queryMatches?this.$refs.menubutton:T(this.menubar,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:`nearest`,inline:`nearest`,behavior:`smooth`})},createProcessedItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:``,a=arguments.length>4?arguments[4]:void 0,o=[];return e&&e.forEach(function(e,s){var c=(i===``?``:i+`_`)+(a===void 0?``:a+`_`)+s,l={item:e,index:s,level:n,key:c,parent:r,parentKey:i,columnIndex:a===void 0?r.columnIndex===void 0?s:r.columnIndex:a};l.items=n===0&&e.items&&e.items.length>0?e.items.map(function(e,r){return t.createProcessedItems(e,n+1,l,c,r)}):t.createProcessedItems(e.items,n+1,l,c),o.push(l)}),o},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=M(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(e,t){return t.forEach(function(t){t.items.forEach(function(t){e.push(t)})}),e},[]):this.processedItems},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},focusedItemId:function(){return M(this.focusedItemInfo.key)?`${this.$id}_${this.focusedItemInfo.key}`:null}},components:{MegaMenuSub:V,Bars:R}},Y=[`id`],X=[`aria-haspopup`,`aria-expanded`,`aria-controls`,`aria-label`];function Z(r,s,d,f,m,_){var v=c(`Bars`),b=c(`MegaMenuSub`);return i(),g(`div`,n({ref:_.containerRef,id:r.$id,class:r.cx(`root`)},r.ptmi(`root`)),[r.$slots.start?(i(),g(`div`,n({key:0,class:r.cx(`start`)},r.ptm(`start`)),[t(r.$slots,`start`)],16)):p(``,!0),t(r.$slots,`button`,{id:r.$id,class:a(r.cx(`button`)),toggleCallback:function(e){return _.menuButtonClick(e)}},function(){return[r.model&&r.model.length>0?(i(),g(`a`,n({key:0,ref:`menubutton`,role:`button`,tabindex:`0`,class:r.cx(`button`),"aria-haspopup":!!(r.model.length&&r.model.length>0),"aria-expanded":m.mobileActive,"aria-controls":r.$id,"aria-label":r.$primevue.config.locale.aria?.navigation,onClick:s[0]||=function(e){return _.menuButtonClick(e)},onKeydown:s[1]||=function(e){return _.menuButtonKeydown(e)}},r.ptm(`button`)),[t(r.$slots,`buttonicon`,{},function(){return[y(v,h(o(r.ptm(`buttonIcon`))),null,16)]})],16,X)):p(``,!0)]}),y(S,{name:`p-anchored-overlay`},{default:u(function(){return[l(y(b,{ref:_.menubarRef,id:r.$id+`_list`,tabindex:r.disabled?-1:r.tabindex,role:`menubar`,"aria-label":r.ariaLabel,"aria-labelledby":r.ariaLabelledby,"aria-disabled":r.disabled||void 0,"aria-orientation":r.orientation,"aria-activedescendant":m.focused?_.focusedItemId:void 0,menuId:r.$id,focusedItemId:m.focused?_.focusedItemId:void 0,items:_.processedItems,horizontal:_.horizontal,templates:r.$slots,activeItem:m.activeItem,mobileActive:m.mobileActive,level:0,style:e(r.sx(`rootList`)),pt:r.pt,unstyled:r.unstyled,onFocus:_.onFocus,onBlur:_.onBlur,onKeydown:_.onKeyDown,onItemClick:_.onItemClick,onItemMouseenter:_.onItemMouseEnter},null,8,[`id`,`tabindex`,`aria-label`,`aria-labelledby`,`aria-disabled`,`aria-orientation`,`aria-activedescendant`,`menuId`,`focusedItemId`,`items`,`horizontal`,`templates`,`activeItem`,`mobileActive`,`style`,`pt`,`unstyled`,`onFocus`,`onBlur`,`onKeydown`,`onItemClick`,`onItemMouseenter`]),[[x,!m.queryMatches||m.mobileActive]])]}),_:1}),r.$slots.end?(i(),g(`div`,n({key:1,class:r.cx(`end`)},r.ptm(`end`)),[t(r.$slots,`end`)],16)):p(``,!0)],16,Y)}J.render=Z;export{J as default};