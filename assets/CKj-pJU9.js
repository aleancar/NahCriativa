import{D as e,H as t,I as n,Ot as r,U as i,V as a,X as o,Y as s,ct as c,d as l,f as u,jt as d,p as f,r as p,u as m,v as h,z as g}from"./C59ukViC.js";import{t as _}from"./CjgVaOcC.js";import{At as v,F as y,H as b,L as x,N as S,R as C,X as w,Z as T,c as E,gt as D,kt as O,n as k,ut as A,wt as j,xt as M}from"./GUbs_UsO.js";import{t as N}from"./1d7j-Dyg.js";import{t as P}from"./D5ph-QdN.js";import{t as F}from"./60TiK-mC.js";import{t as I}from"./CSEOBWRs.js";import{t as L}from"./DtthVMjZ.js";var R=k.extend({name:`contextmenu`,style:`
    .p-contextmenu {
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        min-width: 12.5rem;
        will-change: transform;
    }

    .p-contextmenu-root-list,
    .p-contextmenu-submenu {
        margin: 0;
        padding: dt('contextmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('contextmenu.list.gap');
    }

    .p-contextmenu-submenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        z-index: 1;
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        will-change: transform;
    }

    .p-contextmenu-item {
        position: relative;
    }

    .p-contextmenu-item-content {
        transition:
            background dt('contextmenu.transition.duration'),
            color dt('contextmenu.transition.duration');
        border-radius: dt('contextmenu.item.border.radius');
        color: dt('contextmenu.item.color');
    }

    .p-contextmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('contextmenu.item.padding');
        gap: dt('contextmenu.item.gap');
        user-select: none;
    }

    .p-contextmenu-item-label {
        font-weight: dt('contextmenu.item.label.font.weight');
        font-size: dt('contextmenu.item.label.font.size');
    }

    .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.color');
        font-size: dt('contextmenu.item.icon.size');
        width: dt('contextmenu.item.icon.size');
        height: dt('contextmenu.item.icon.size');
    }

    .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('contextmenu.submenu.icon.size');
        width: dt('contextmenu.submenu.icon.size');
        height: dt('contextmenu.submenu.icon.size');
    }

    .p-contextmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content {
        color: dt('contextmenu.item.active.color');
        background: dt('contextmenu.item.active.background');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.active.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.active.color');
    }

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('contextmenu.separator.border.color');
    }

    .p-contextmenu-mobile .p-contextmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,classes:{root:function(e){return[`p-contextmenu p-component`,{"p-contextmenu-mobile":e.instance.queryMatches}]},rootList:`p-contextmenu-root-list`,item:function(e){var t=e.instance,n=e.processedItem;return[`p-contextmenu-item`,{"p-contextmenu-item-active":t.isItemActive(n),"p-focus":t.isItemFocused(n),"p-disabled":t.isItemDisabled(n)}]},itemContent:`p-contextmenu-item-content`,itemLink:`p-contextmenu-item-link`,itemIcon:`p-contextmenu-item-icon`,itemLabel:`p-contextmenu-item-label`,submenuIcon:`p-contextmenu-submenu-icon`,submenu:`p-contextmenu-submenu`,separator:`p-contextmenu-separator`}}),z={name:`BaseContextMenu`,extends:P,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:`960px`},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:R,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},B={name:`ContextMenuSub`,hostName:`ContextMenu`,extends:P,emits:[`item-click`,`item-mouseenter`,`item-mousemove`],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return`${this.menuId}_${e.key}`},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,n){return e&&e.item?O(e.item[t],n):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getItemLabelId:function(e){return`${this.menuId}_${e.key}_label`},getPTOptions:function(e,t,n){return this.ptm(e,{context:{item:t.item,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:n}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return M(e.items)},onItemClick:function(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.$emit(`item-click`,{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit(`item-mouseenter`,{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit(`item-mousemove`,{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,`separator`)}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(e){return t.isItemVisible(e)&&t.getItemProp(e,`separator`)}).length+1},onEnter:function(){x(this.$refs.container,this.level)},getMenuItemProps:function(t,n){return{action:e({class:this.cx(`itemLink`),tabindex:-1},this.getPTOptions(`itemLink`,t,n)),icon:e({class:[this.cx(`itemIcon`),D(this.getItemProp(t,`icon`))?this.getItemProp(t,`icon`):void 0]},this.getPTOptions(`itemIcon`,t,n)),label:e({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`,t,n)),submenuicon:e({class:this.cx(`submenuIcon`)},this.getPTOptions(`submenuicon`,t,n))}},resolveIcon:function(e){return D(e)?e:c(e)},isComponentIcon:function(e){return!!e&&!D(e)}},components:{AngleRight:L},directives:{ripple:F}},V=[`tabindex`],H=[`id`,`aria-label`,`aria-disabled`,`aria-expanded`,`aria-haspopup`,`aria-level`,`aria-setsize`,`aria-posinset`,`data-p-active`,`data-p-focused`,`data-p-disabled`],U=[`onClick`,`onMouseenter`,`onMousemove`],W=[`href`,`target`],G=[`id`],K=[`id`];function q(c,h,v,y,b,x){var S=a(`AngleRight`),C=a(`ContextMenuSub`,!0),w=t(`ripple`);return n(),l(_,e({name:`p-anchored-overlay`,onEnter:x.onEnter},c.ptm(`menu.transition`)),{default:s(function(){return[v.root||v.visible?(n(),f(`ul`,e({key:0,ref:`container`,tabindex:v.tabindex},c.ptm(`rootList`)),[(n(!0),f(p,null,g(v.items,function(t,a){return n(),f(p,{key:x.getItemKey(t)},[x.isItemVisible(t)&&!x.getItemProp(t,`separator`)?(n(),f(`li`,e({key:0,id:x.getItemId(t),style:x.getItemProp(t,`style`),class:[c.cx(`item`,{processedItem:t}),x.getItemProp(t,`class`)],role:`menuitem`,"aria-label":x.getItemLabel(t),"aria-disabled":x.isItemDisabled(t)||void 0,"aria-expanded":x.isItemGroup(t)?x.isItemActive(t):void 0,"aria-haspopup":x.isItemGroup(t)&&!x.getItemProp(t,`to`)?`menu`:void 0,"aria-level":v.level+1,"aria-setsize":x.getAriaSetSize(),"aria-posinset":x.getAriaPosInset(a)},{ref_for:!0},x.getPTOptions(`item`,t,a),{"data-p-active":x.isItemActive(t),"data-p-focused":x.isItemFocused(t),"data-p-disabled":x.isItemDisabled(t)}),[m(`div`,e({class:c.cx(`itemContent`),onClick:function(e){return x.onItemClick(e,t)},onMouseenter:function(e){return x.onItemMouseEnter(e,t)},onMousemove:function(e){return x.onItemMouseMove(e,t)}},{ref_for:!0},x.getPTOptions(`itemContent`,t,a)),[v.templates.item?(n(),l(i(v.templates.item),{key:1,item:t.item,hasSubmenu:!!x.getItemProp(t,`items`),label:x.getItemLabel(t),icon:x.getItemProp(t,`icon`)?x.resolveIcon(x.getItemProp(t,`icon`)):void 0,props:x.getMenuItemProps(t,a)},null,8,[`item`,`hasSubmenu`,`label`,`icon`,`props`])):o((n(),f(`a`,e({key:0,href:x.getItemProp(t,`url`),class:c.cx(`itemLink`),target:x.getItemProp(t,`target`),tabindex:`-1`},{ref_for:!0},x.getPTOptions(`itemLink`,t,a)),[v.templates.itemicon?(n(),l(i(v.templates.itemicon),{key:0,item:t.item,class:r(c.cx(`itemIcon`))},null,8,[`item`,`class`])):x.isComponentIcon(x.getItemProp(t,`icon`))?(n(),l(i(x.resolveIcon(x.getItemProp(t,`icon`))),e({key:1,class:c.cx(`itemIcon`)},{ref_for:!0},x.getPTOptions(`itemIcon`,t,a)),null,16,[`class`])):x.getItemProp(t,`icon`)?(n(),f(`span`,e({key:2,class:[c.cx(`itemIcon`),x.getItemProp(t,`icon`)]},{ref_for:!0},x.getPTOptions(`itemIcon`,t,a)),null,16)):u(``,!0),m(`span`,e({id:x.getItemLabelId(t),class:c.cx(`itemLabel`)},{ref_for:!0},x.getPTOptions(`itemLabel`,t,a)),d(x.getItemLabel(t)),17,G),x.getItemProp(t,`items`)?(n(),f(p,{key:3},[v.templates.submenuicon?(n(),l(i(v.templates.submenuicon),{key:0,active:x.isItemActive(t),class:r(c.cx(`submenuIcon`))},null,8,[`active`,`class`])):(n(),l(S,e({key:1,class:c.cx(`submenuIcon`)},{ref_for:!0},x.getPTOptions(`submenuicon`,t,a)),null,16,[`class`]))],64)):u(``,!0)],16,W)),[[w]])],16,U),x.isItemVisible(t)&&x.isItemGroup(t)?(n(),l(C,e({key:0,id:x.getItemId(t)+`_list`,role:`menu`,class:c.cx(`submenu`),menuId:v.menuId,focusedItemId:v.focusedItemId,items:t.items,templates:v.templates,activeItemPath:v.activeItemPath,level:v.level+1,visible:x.isItemActive(t)&&x.isItemGroup(t),pt:c.pt,unstyled:c.unstyled,onItemClick:h[0]||=function(e){return c.$emit(`item-click`,e)},onItemMouseenter:h[1]||=function(e){return c.$emit(`item-mouseenter`,e)},onItemMousemove:h[2]||=function(e){return c.$emit(`item-mousemove`,e)},"aria-labelledby":x.getItemLabelId(t)},{ref_for:!0},c.ptm(`submenu`)),null,16,[`id`,`class`,`menuId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`level`,`visible`,`pt`,`unstyled`,`aria-labelledby`])):u(``,!0)],16,H)):u(``,!0),x.isItemVisible(t)&&x.getItemProp(t,`separator`)?(n(),f(`li`,e({key:1,id:x.getItemId(t),style:x.getItemProp(t,`style`),class:[c.cx(`separator`),x.getItemProp(t,`class`)],role:`separator`},{ref_for:!0},c.ptm(`separator`)),null,16,K)):u(``,!0)],64)}),128))],16,V)):u(``,!0)]}),_:1},16,[`onEnter`])}B.render=q;var J={name:`ContextMenu`,extends:z,inheritAttrs:!1,emits:[`focus`,`blur`,`show`,`hide`,`before-show`,`before-hide`],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:``},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){M(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&N.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?O(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemGroup:function(e){return M(this.getItemProp(e,`items`))},isItemSeparator:function(e){return this.getItemProp(e,`separator`)},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&M(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit(`before-show`),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:``},b(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit(`before-hide`),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:``}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index===-1?{index:-1,level:0,parentKey:``}:this.focusedItemInfo,this.$emit(`focus`,e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:``},this.searchValue=``,this.$emit(`blur`,e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&A(e.key)&&this.searchItems(e,e.key)}},onItemChange:function(e,t){var n=e.processedItem,r=e.isFocus;if(!j(n)){var i=n.index,a=n.key,o=n.level,s=n.parentKey,c=n.items,l=M(c),u=this.activeItemPath.filter(function(e){return e.parentKey!==s&&e.parentKey!==a});l&&(u.push(n),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:o,parentKey:s},r&&b(this.list),!(t===`hover`&&this.queryMatches)&&(this.activeItemPath=u)}},onItemClick:function(e){var t=e.processedItem,n=this.isProccessedItemGroup(t);if(this.isSelected(t)){var r=t.index,i=t.key,a=t.level,o=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(e){return i!==e.key&&i.startsWith(e.key)}),this.focusedItemInfo={index:r,level:a,parentKey:o},b(this.list)}else n?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,`hover`)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index===-1?this.findFirstFocusedItemIndex():this.findNextItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var n=this.focusedItemInfo.index===-1?this.findLastFocusedItemIndex():this.findPrevItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,n=this.visibleItems[this.focusedItemInfo.index],r=this.activeItemPath.find(function(e){return e.key===n.parentKey});j(n.parent)||(this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:``},this.searchValue=``,this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index];this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue=``,this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=S(this.list,`li[id="${`${this.focusedItemIdx}`}"]`),n=t&&S(t,`[data-pc-section="itemlink"]`);n?n.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){E(e,{position:`absolute`}),this.position(),this.autoZIndex&&N.set(`menu`,e,this.baseZIndex||this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit(`show`),b(this.list)},onLeave:function(){this.$emit(`hide`),this.container=null},onAfterLeave:function(e){this.autoZIndex&&N.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,n=this.container.offsetParent?this.container.offsetWidth:C(this.container),r=this.container.offsetParent?this.container.offsetHeight:T(this.container),i=y(),a=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,o=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+n-o>i.width&&(e-=n),t+r-a>i.height&&(t-=r),e<o&&(e=o),t<a&&(t=a),this.container.style.left=e+`px`,this.container.style.top=t+`px`},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!e.visible||!e.target||e.target!==t.target&&!e.target.contains(t.target);n&&r&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!w()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener(`contextmenu`,this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&=(document.removeEventListener(`contextmenu`,this.documentContextMenuListener),null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener(`change`,this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&=(this.query.removeEventListener(`change`,this.matchMediaListener),null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e)?.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return v(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(e){return t.isValidItem(e)}):-1;return n>-1?n+e+1:e},findPrevItemIndex:function(e){var t=this,n=e>0?v(this.visibleItems.slice(0,e),function(e){return t.isValidItem(e)}):-1;return n>-1?n:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r,i=!1;return this.focusedItemInfo.index===-1?r=this.visibleItems.findIndex(function(e){return n.isItemMatched(e)}):(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}):r+this.focusedItemInfo.index),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e===-1?this.focusedItemIdx:`${this.$id}_${e}`,n=S(this.list,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:`nearest`,inline:`start`})},createProcessedItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:``,a=[];return e&&e.forEach(function(e,o){var s=(i===``?``:i+`_`)+o,c={item:e,index:o,level:n,key:s,parent:r,parentKey:i};c.items=t.createProcessedItems(e.items,n+1,c,s),a.push(c)}),a},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(t){return t.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index===-1?null:`${this.$id}${M(this.focusedItemInfo.parentKey)?`_`+this.focusedItemInfo.parentKey:``}_${this.focusedItemInfo.index}`}},components:{ContextMenuSub:B,Portal:I}};function Y(t,i,o,c,d,p){var m=a(`ContextMenuSub`),g=a(`Portal`);return n(),l(g,{appendTo:t.appendTo},{default:s(function(){return[h(_,e({name:`p-anchored-overlay`,onEnter:p.onEnter,onAfterEnter:p.onAfterEnter,onLeave:p.onLeave,onAfterLeave:p.onAfterLeave},t.ptm(`transition`)),{default:s(function(){return[d.visible?(n(),f(`div`,e({key:0,ref:p.containerRef,class:t.cx(`root`)},t.ptmi(`root`)),[h(m,{ref:p.listRef,id:t.$id+`_list`,class:r(t.cx(`rootList`)),role:`menubar`,root:!0,tabindex:t.tabindex,"aria-orientation":`vertical`,"aria-activedescendant":d.focused?p.focusedItemIdx:void 0,menuId:t.$id,focusedItemId:d.focused?p.focusedItemIdx:void 0,items:p.processedItems,templates:t.$slots,activeItemPath:d.activeItemPath,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,level:0,visible:d.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:p.onFocus,onBlur:p.onBlur,onKeydown:p.onKeyDown,onItemClick:p.onItemClick,onItemMouseenter:p.onItemMouseEnter,onItemMousemove:p.onItemMouseMove},null,8,[`id`,`class`,`tabindex`,`aria-activedescendant`,`menuId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`aria-labelledby`,`aria-label`,`visible`,`pt`,`unstyled`,`onFocus`,`onBlur`,`onKeydown`,`onItemClick`,`onItemMouseenter`,`onItemMousemove`])],16)):u(``,!0)]}),_:1},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:1},8,[`appendTo`])}J.render=Y;export{J as default};