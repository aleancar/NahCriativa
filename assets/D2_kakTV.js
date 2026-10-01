import{B as e,D as t,H as n,I as r,Ot as i,U as a,V as o,X as s,Y as c,_ as l,ct as u,d,f,g as p,jt as m,p as h,r as g,u as _,v,z as y}from"./LD8_IYgO.js";import{s as b,t as x}from"./B3iE1oVL.js";import{$ as S,H as C,N as w,X as T,c as E,gt as D,n as O,nt as k,v as A}from"./EUCZpDVQ.js";import{t as j}from"./CEAV8Kzl.js";import{t as M}from"./1d7j-Dyg.js";import{t as N}from"./C5PlsQHH.js";import{t as P}from"./CMKryd0I.js";import{t as ee}from"./liTNUue3.js";import{t as te}from"./De87BZP-.js";import{t as ne}from"./qRQ5VK3H.js";import{t as re}from"./C7n5Sed4.js";var ie=O.extend({name:`menu`,style:`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list,
    .p-menu-submenu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

     .p-menu-submenu-list {
        padding-inline-start: 1rem;
        padding-inline-end: 0;
     }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        font-weight: dt('menu.item.label.font.weight');
        font-size: dt('menu.item.label.font.size');
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
        font-size: dt('menu.item.icon.size');
        width: dt('menu.item.icon.size');
        height: dt('menu.item.icon.size');
    }

    .p-menu-item.p-focus > .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) > .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
        will-change: transform;
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
        font-size: dt('menu.submenu.label.font.size');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }

    .p-menu-item-submenu-icon {
        margin-inline-start: auto;
        color: dt('menu.submenu.icon.color');
        font-size: dt('menu.submenu.icon.size');
        width: dt('menu.submenu.icon.size');
        height: dt('menu.submenu.icon.size');
        flex-shrink: 0;
        transition: transform 0.2s;
    }

    .p-menu-item-submenu-icon[data-expanded] {
        transform: rotate(180deg);
    }

    .p-menu-item:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-submenu-icon,
    .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-submenu-icon {
        color: dt('menu.submenu.icon.focus.color');
    }
`,classes:{root:function(e){return[`p-menu p-component`,{"p-menu-overlay":e.props.popup}]},start:`p-menu-start`,list:`p-menu-list`,submenuLabel:`p-menu-submenu-label`,submenuList:`p-menu-submenu-list`,separator:`p-menu-separator`,end:`p-menu-end`,item:function(e){var t=e.instance;return[`p-menu-item`,{"p-menu-item-toggleable":t.toggleable,"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:`p-menu-item-content`,itemLink:`p-menu-item-link`,itemIcon:`p-menu-item-icon`,itemLabel:`p-menu-item-label`,itemSubmenuIcon:`p-menu-item-submenu-icon`}}),ae={name:`BaseMenu`,extends:N,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},expandedKeys:{type:Object,default:void 0},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ie,provide:function(){return{$pcMenu:this,$parentInstance:this}}},F={name:`Menuitem`,hostName:`Menu`,extends:N,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null,toggleable:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},depth:{type:Number,default:0}},inject:{$pcMenu:{default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){if(!this.disabled()){if(this.toggleable){var t,n,r;e.preventDefault(),(t=this.$pcMenu)==null||t.setFocusedOptionId(this.id),(n=this.$pcMenu)==null||n.focusMenuList(),(r=this.$pcMenu)==null||r.toggleSubmenu(this.id);return}this.$emit(`item-click`,{originalEvent:e,item:this.item,id:this.id})}},onItemMouseMove:function(e){this.$emit(`item-mousemove`,{originalEvent:e,item:this.item,id:this.id})},onItemMousedown:function(e){this.toggleable&&e.preventDefault()},visible:function(){var e;return!!((e=this.$pcMenu)!=null&&e.visible(this.item))},disabled:function(){return this.$pcMenu?.disabled(this.item)},label:function(){return this.$pcMenu?.label(this.item)},getMenuItemProps:function(e){return{action:t({class:this.cx(`itemLink`),tabindex:`-1`},this.getPTOptions(`itemLink`)),icon:t({class:[this.cx(`itemIcon`),D(e.icon)?e.icon:void 0]},this.getPTOptions(`itemIcon`)),label:t({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`))}},resolveIcon:function(e){return D(e)?e:u(e)},isComponentIcon:function(e){return!!e&&!D(e)}},computed:{dataP:function(){return j({focus:this.isItemFocused(),disabled:this.disabled()})},ariaMeta:function(){var e;return((e=this.$pcMenu)==null||(e=e.ariaMetaMap)==null?void 0:e.get(this.item))||{}}},directives:{ripple:ee},components:{ChevronDownIcon:P}},I=[`id`,`aria-label`,`aria-disabled`,`aria-haspopup`,`aria-expanded`,`aria-level`,`aria-posinset`,`aria-setsize`,`data-focused`,`data-disabled`,`data-toggleable`,`data-depth`,`data-p`],L=[`data-p`],R=[`href`,`target`],z=[`data-p`],B=[`data-p`];function V(c,l,u,p,v,y){var x=o(`ChevronDownIcon`),S=n(`ripple`);return y.visible()?(r(),h(`li`,t({key:0,id:u.id,class:[c.cx(`item`),u.item.class],role:`menuitem`,style:u.item.style,"aria-label":y.label(),"aria-disabled":y.disabled(),"aria-haspopup":u.toggleable?`true`:void 0,"aria-expanded":u.toggleable?u.expanded:void 0,"aria-level":y.ariaMeta.level,"aria-posinset":y.ariaMeta.posinset,"aria-setsize":y.ariaMeta.setsize,"data-focused":y.isItemFocused(),"data-disabled":y.disabled()||!1,"data-toggleable":u.toggleable||void 0,"data-depth":u.toggleable?u.depth:void 0,"data-p":y.dataP,onClick:l[2]||=b(function(e){return y.onItemClick(e)},[`self`]),onMousedown:l[3]||=function(e){return y.onItemMousedown(e)}},y.getPTOptions(`item`)),[_(`div`,t({class:c.cx(`itemContent`),onClick:l[0]||=function(e){return y.onItemClick(e)},onMousemove:l[1]||=function(e){return y.onItemMouseMove(e)},"data-p":y.dataP},y.getPTOptions(`itemContent`)),[u.templates.item?u.templates.item?(r(),d(a(u.templates.item),{key:1,item:u.item,label:y.label(),icon:u.item.icon?y.resolveIcon(u.item.icon):void 0,props:y.getMenuItemProps(u.item)},null,8,[`item`,`label`,`icon`,`props`])):f(``,!0):s((r(),h(`a`,t({key:0,href:u.item.url,class:c.cx(`itemLink`),target:u.item.target,tabindex:`-1`},y.getPTOptions(`itemLink`)),[u.templates.itemicon?(r(),d(a(u.templates.itemicon),{key:0,item:u.item,class:i(c.cx(`itemIcon`))},null,8,[`item`,`class`])):y.isComponentIcon(u.item.icon)?(r(),d(a(y.resolveIcon(u.item.icon)),t({key:1,class:c.cx(`itemIcon`),"data-p":y.dataP},y.getPTOptions(`itemIcon`)),null,16,[`class`,`data-p`])):u.item.icon?(r(),h(`span`,t({key:2,class:[c.cx(`itemIcon`),u.item.icon],"data-p":y.dataP},y.getPTOptions(`itemIcon`)),null,16,z)):f(``,!0),_(`span`,t({class:c.cx(`itemLabel`),"data-p":y.dataP},y.getPTOptions(`itemLabel`)),m(y.label()),17,B),u.toggleable?(r(),h(g,{key:3},[u.templates&&u.templates.submenuicon?(r(),d(a(u.templates.submenuicon),{key:0,item:u.item,class:i(c.cx(`itemSubmenuIcon`)),"data-expanded":u.expanded||void 0},null,8,[`item`,`class`,`data-expanded`])):(r(),d(x,t({key:1,class:c.cx(`itemSubmenuIcon`),"data-expanded":u.expanded||void 0},y.getPTOptions(`itemSubmenuIcon`)),null,16,[`class`,`data-expanded`]))],64)):f(``,!0)],16,R)),[[S]])],16,L),u.toggleable&&u.expanded?(r(),h(`ul`,t({key:0,class:c.cx(`submenuList`),role:`menu`},c.ptm(`submenuList`)),[e(c.$slots,`submenu`)],16)):f(``,!0)],16,I)):f(``,!0)}F.render=V;var H={name:`MenuSub`,hostName:`Menu`,extends:N,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],inject:{$pcMenu:{default:null}},props:{items:{type:Array,default:null},depth:{type:Number,default:0},parentId:{type:String,default:null},templates:{type:Object,default:null},focusedOptionId:{type:String,default:null}},methods:{itemId:function(e,t){return e?.key==null?`${this.parentId}_${t}`:String(e.key)},toggleable:function(e){var t;return!!((t=this.$pcMenu)!=null&&t.isItemToggleable(e,this.depth))},expanded:function(e,t){var n;return!this.toggleable(e)||!!((n=this.$pcMenu)!=null&&n.isSubmenuExpanded(this.itemId(e,t)))},label:function(e){return this.$pcMenu?.label(e)},visible:function(e){var t;return!!((t=this.$pcMenu)!=null&&t.visible(e))}},components:{Menuitem:F}},U=[`id`];function W(e,n,i,s,u,b){var x=o(`MenuSub`,!0),S=o(`Menuitem`);return r(!0),h(g,null,y(i.items,function(o,s){return r(),h(g,{key:b.itemId(o,s)},[o.separator&&b.visible(o)?(r(),h(`li`,t({key:0,class:[e.cx(`separator`),o.class],style:o.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):o.items&&b.visible(o)&&!b.toggleable(o)?(r(),h(g,{key:1},[_(`li`,t({id:b.itemId(o,s),class:[e.cx(`submenuLabel`),o.class],role:`none`},{ref_for:!0},e.ptm(`submenuLabel`)),[i.templates&&i.templates.submenulabel?(r(),d(a(i.templates.submenulabel),{key:0,item:o},null,8,[`item`])):(r(),h(g,{key:1},[l(m(b.label(o)),1)],64))],16,U),v(x,{items:o.items,depth:i.depth+1,parentId:b.itemId(o,s),templates:i.templates,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:n[0]||=function(t){return e.$emit(`item-click`,t)},onItemMousemove:n[1]||=function(t){return e.$emit(`item-mousemove`,t)},pt:e.pt},null,8,[`items`,`depth`,`parentId`,`templates`,`focusedOptionId`,`unstyled`,`pt`])],64)):b.visible(o)&&!o.separator?(r(),d(S,{key:2,id:b.itemId(o,s),item:o,index:s,templates:i.templates,focusedOptionId:i.focusedOptionId,toggleable:!!o.items&&b.toggleable(o),expanded:b.expanded(o,s),depth:i.depth,unstyled:e.unstyled,onItemClick:n[4]||=function(t){return e.$emit(`item-click`,t)},onItemMousemove:n[5]||=function(t){return e.$emit(`item-mousemove`,t)},pt:e.pt},p({_:2},[o.items&&b.toggleable(o)?{name:`submenu`,fn:c(function(){return[v(x,{items:o.items,depth:i.depth+1,parentId:b.itemId(o,s),templates:i.templates,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:n[2]||=function(t){return e.$emit(`item-click`,t)},onItemMousemove:n[3]||=function(t){return e.$emit(`item-mousemove`,t)},pt:e.pt},null,8,[`items`,`depth`,`parentId`,`templates`,`focusedOptionId`,`unstyled`,`pt`])]}),key:`0`}:void 0]),1032,[`id`,`item`,`index`,`templates`,`focusedOptionId`,`toggleable`,`expanded`,`depth`,`unstyled`,`pt`])):f(``,!0)],64)}),128)}H.render=W;function G(e){"@babel/helpers - typeof";return G=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},G(e)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?K(Object(n),!0).forEach(function(t){J(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function J(e,t,n){return(t=oe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){var t=se(e,`string`);return G(t)==`symbol`?t:t+``}function se(e,t){if(G(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(G(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Y(e){return ue(e)||X(e)||le(e)||ce()}function ce(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function X(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ue(e){if(Array.isArray(e))return Z(e)}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Q=`[data-pc-section="item"][data-disabled="false"]`,$={name:`Menu`,extends:ae,inheritAttrs:!1,emits:[`show`,`hide`,`focus`,`blur`,`update:expandedKeys`],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionId:null,d_expandedKeys:{}}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.target=null,this.container&&this.autoZIndex&&M.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionId!==e.id&&this.setFocusedOptionId(e.id))},itemMouseMove:function(e){this.focused&&this.setFocusedOptionId(e.id)},setFocusedOptionId:function(e){this.focusedOptionId=e},focusMenuList:function(){this.list&&C(this.list)},onListFocus:function(e){this.focused=!0,!this.popup&&!this.focusedOptionId&&this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.setFocusedOptionId(null),this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.popup&&(C(this.target),this.hide());break;case`Tab`:this.onTabKey()}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionId);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)C(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionId);this.changeFocusedOptionIndex(t),e.preventDefault()}},onTabKey:function(){this.overlayVisible&&(C(this.target),this.hide())},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(S(this.container,Q).length-1),e.preventDefault()},onEnterKey:function(e){e.preventDefault();var t=w(this.list,`[id="${this.focusedOptionId}"]`);if(t){if(t.getAttribute(`data-toggleable`)===`true`){(w(t,`[data-pc-section="itemcontent"]`)||t).click();return}var n=w(t,`a[data-pc-section="itemlink"]`);this.popup&&C(this.target),(n||t).click()}},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=Y(S(this.container,Q)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=Y(S(this.container,Q)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=S(this.container,Q),n=e>=t.length?t.length-1:e<0?0:e;n>-1&&this.setFocusedOptionId(t[n].getAttribute(`id`))},toggle:function(e,t){this.overlayVisible?this.hide():this.show(e,t)},show:function(e,t){this.overlayVisible=!0,this.target=t??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){E(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&M.set(`menu`,e,this.baseZIndex||this.$primevue.config.zIndex.menu),this.popup&&this.focusMenuList(),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit(`hide`)},onAfterLeave:function(e){this.autoZIndex&&M.clear(e)},alignOverlay:function(){k(this.container,this.target),A(this.target)>A(this.container)&&(this.container.style.minWidth=A(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!e.target||e.target!==t.target&&!e.target.contains(t.target);e.overlayVisible&&n&&r?e.hide():!e.popup&&n&&r&&e.setFocusedOptionId(null)},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new te(this.target,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!T()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},visible:function(e){return typeof e?.visible==`function`?e.visible():e?.visible!==!1},disabled:function(e){return typeof e?.disabled==`function`?e.disabled():e?.disabled},label:function(e){return typeof e?.label==`function`?e.label():e?.label},isItemToggleable:function(e,t){return e?.toggleable===void 0?t>0:e.toggleable},isSubmenuExpanded:function(e){var t;return!!((t=this.currentExpandedKeys)!=null&&t[e])},toggleSubmenu:function(e){var t=q(q({},this.currentExpandedKeys||{}),{},J({},e,!this.isSubmenuExpanded(e)));this.expandedKeys===void 0?this.d_expandedKeys=t:this.$emit(`update:expandedKeys`,t)},onOverlayClick:function(e){ne.emit(`overlay-click`,{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{dataP:function(){return j({popup:this.popup})},currentExpandedKeys:function(){return this.expandedKeys===void 0?this.d_expandedKeys:this.expandedKeys},ariaMetaMap:function(){var e=this,t=new Map,n=function(t,r){var i=[];return(t||[]).forEach(function(t){e.visible(t)&&!t.separator&&(t.items&&!e.isItemToggleable(t,r)?i.push.apply(i,Y(n(t.items,r+1))):i.push(t))}),i},r=function(e,i,a){var o=n(e,a);o.forEach(function(e,n){t.set(e,{level:i,posinset:n+1,setsize:o.length}),e.items&&r(e.items,i+1,a+1)})};return r(this.model||[],1,0),t}},components:{MenuSub:H,Portal:re}},de=[`id`,`data-p`],fe=[`id`,`tabindex`,`aria-activedescendant`,`aria-label`,`aria-labelledby`];function pe(n,i,a,s,l,u){var p=o(`MenuSub`),m=o(`Portal`);return r(),d(m,{appendTo:n.appendTo,disabled:!n.popup},{default:c(function(){return[v(x,t({name:`p-anchored-overlay`,onEnter:u.onEnter,onLeave:u.onLeave,onAfterLeave:u.onAfterLeave},n.ptm(`transition`)),{default:c(function(){return[!n.popup||l.overlayVisible?(r(),h(`div`,t({key:0,ref:u.containerRef,id:n.$id,class:n.cx(`root`),onClick:i[3]||=function(){return u.onOverlayClick&&u.onOverlayClick.apply(u,arguments)},"data-p":u.dataP},n.ptmi(`root`)),[n.$slots.start?(r(),h(`div`,t({key:0,class:n.cx(`start`)},n.ptm(`start`)),[e(n.$slots,`start`)],16)):f(``,!0),_(`ul`,t({ref:u.listRef,id:n.$id+`_list`,class:n.cx(`list`),role:`menu`,tabindex:n.tabindex,"aria-activedescendant":l.focused?l.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:i[0]||=function(){return u.onListFocus&&u.onListFocus.apply(u,arguments)},onBlur:i[1]||=function(){return u.onListBlur&&u.onListBlur.apply(u,arguments)},onKeydown:i[2]||=function(){return u.onListKeyDown&&u.onListKeyDown.apply(u,arguments)}},n.ptm(`list`)),[v(p,{items:n.model,depth:0,parentId:n.$id,templates:n.$slots,focusedOptionId:l.focusedOptionId,unstyled:n.unstyled,onItemClick:u.itemClick,onItemMousemove:u.itemMouseMove,pt:n.pt},null,8,[`items`,`parentId`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`])],16,fe),n.$slots.end?(r(),h(`div`,t({key:1,class:n.cx(`end`)},n.ptm(`end`)),[e(n.$slots,`end`)],16)):f(``,!0)],16,de)):f(``,!0)]}),_:3},16,[`onEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}$.render=pe;export{$ as default};