import{B as e,D as t,I as n,Ot as r,U as i,Y as a,d as o}from"./LD8_IYgO.js";import{n as s}from"./EUCZpDVQ.js";import{t as c}from"./C5PlsQHH.js";var l=s.extend({name:`sidebar`,style:`

    .p-sidebar-layout {
        display: flex;
        width: 100%;
        min-height: 100svh;
        background: dt('sidebar.layout.background');
    }

    .p-sidebar {
        display: block;
        position: relative;
        z-index: 20;
    }

    .p-sidebar-backdrop {
        z-index: 15;
    }

    .p-sidebar[data-overlay] {
        z-index: 30;
    }

    .p-sidebar[data-collapsible-mode="none"] {
        display: flex;
        width: var(--px-sidebar-width);
        flex-direction: column;
    }

    .p-sidebar-spacer {
        display: block;
        position: relative;
        flex-shrink: 0;
        background: transparent;
        transition: width 250ms cubic-bezier(.4, 0, .2, 1);
    }

    .p-sidebar:not([data-overlay]) > .p-sidebar-spacer {
        width: var(--px-sidebar-width);
    }

    .p-sidebar[data-collapsible="offcanvas"]:not([data-overlay]) > .p-sidebar-spacer {
        width: 0;
    }

    .p-sidebar[data-collapsible="icon"]:not([data-overlay])>.p-sidebar-spacer {
        width: var(--px-sidebar-width-icon);
    }

    .p-sidebar[data-variant="floating"][data-collapsible="icon"]:not([data-overlay])>.p-sidebar-spacer {
        width: calc(var(--px-sidebar-width-icon) + 1rem + 2px);
    }

    .p-sidebar[data-variant="inset"][data-collapsible="icon"]:not([data-overlay])>.p-sidebar-spacer {
        width: calc(var(--px-sidebar-width-icon) + 0.5rem);
    }

    .p-sidebar[data-collapsible-mode="offcanvas"][data-overlay]>.p-sidebar-spacer {
        width: 0;
    }

    .p-sidebar[data-overlay]:not([data-collapsible-mode="offcanvas"])>.p-sidebar-spacer {
        width: var(--px-sidebar-width-icon);
    }

    .p-sidebar[data-overlay][data-variant="floating"]:not([data-collapsible-mode="offcanvas"])>.p-sidebar-spacer {
        width: calc(var(--px-sidebar-width-icon) + 1rem + 2px);
    }

    .p-sidebar[data-overlay][data-variant="inset"]:not([data-collapsible-mode="offcanvas"])>.p-sidebar-spacer {
        width: calc(var(--px-sidebar-width-icon) + 0.5rem);
    }

    .p-sidebar[data-side="right"]>.p-sidebar-spacer {
        transform: rotate(180deg);
    }

    .p-sidebar-aside {
        position: absolute;
        inset-block: 0;
        z-index: 10;
        display: flex;
        height: 100%;
        width: var(--px-sidebar-width);
        transition: left 250ms cubic-bezier(.4, 0, .2, 1), right 250ms cubic-bezier(.4, 0, .2, 1), width 250ms cubic-bezier(.4, 0, .2, 1);
    }

    .p-sidebar[data-overlay] .p-sidebar-aside {
        z-index: 20;
    }

    .p-sidebar[data-side="left"] .p-sidebar-aside {
        left: 0;
    }

    .p-sidebar[data-side="left"][data-collapsible="offcanvas"] .p-sidebar-aside {
        left: calc(var(--px-sidebar-width) * -1);
    }

    .p-sidebar[data-side="right"] .p-sidebar-aside {
        right: 0;
    }

    .p-sidebar[data-side="right"][data-collapsible="offcanvas"] .p-sidebar-aside {
        right: calc(var(--px-sidebar-width) * -1);
    }

    .p-sidebar[data-variant="floating"] .p-sidebar-aside {
        padding: dt('sidebar.aside.padding');
    }

    .p-sidebar[data-variant="inset"] .p-sidebar-aside {
        padding: dt('sidebar.aside.padding');
    }

    .p-sidebar[data-variant="inset"][data-side="left"] .p-sidebar-aside {
        padding-right: 0;
    }

    .p-sidebar[data-variant="inset"][data-side="right"] .p-sidebar-aside {
        padding-left: 0;
    }

    .p-sidebar[data-variant="floating"][data-collapsible="icon"] .p-sidebar-aside {
        width: calc(var(--px-sidebar-width-icon) + 1rem + 2px);
    }

    .p-sidebar[data-variant="inset"][data-collapsible="icon"] .p-sidebar-aside {
        width: calc(var(--px-sidebar-width-icon) + 0.5rem);
    }

    .p-sidebar[data-variant="sidebar"][data-collapsible="icon"] .p-sidebar-aside {
        width: calc(var(--px-sidebar-width-icon));
    }

    .p-sidebar[data-variant="sidebar"][data-side="left"] .p-sidebar-aside {
        border-right: 1px solid dt('sidebar.border.color');
    }

    .p-sidebar[data-variant="sidebar"][data-side="right"] .p-sidebar-aside {
        border-left: 1px solid dt('sidebar.border.color');
    }

    .p-sidebar-panel {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        overflow: hidden;
        color: dt('sidebar.panel.color');
    }

    .p-sidebar[data-variant="sidebar"] .p-sidebar-panel {
        background: dt('sidebar.panel.background');
    }

    .p-sidebar[data-variant="floating"] .p-sidebar-panel {
        background: dt('sidebar.panel.background');
        border-radius: dt('sidebar.panel.floating.border.radius');
        border: 1px solid dt('sidebar.border.color');
        box-shadow: dt('sidebar.panel.floating.shadow');
    }

    .p-sidebar[data-variant="inset"] .p-sidebar-panel {
        background: dt('sidebar.layout.background');
    }

    .p-sidebar-header {
        display: flex;
        flex-direction: column;
        gap: dt('sidebar.header.gap');
        padding: dt('sidebar.header.padding');
    }

    .p-sidebar-footer {
        display: flex;
        flex-direction: column;
        gap: dt('sidebar.footer.gap');
        padding: dt('sidebar.footer.padding');
    }

    .p-sidebar-content {
        display: flex;
        min-height: 0;
        flex: 1;
        flex-direction: column;
        gap: dt('sidebar.content.gap');
        overflow: auto;
        scrollbar-width: none;
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-content {
        overflow: auto;
        scrollbar-width: none;
    }

    .p-sidebar-group {
        position: relative;
        display: flex;
        width: 100%;
        min-width: 0;
        flex-direction: column;
        padding: dt('sidebar.group.padding');
    }

    .p-sidebar-group-label {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        outline: none;
        height: dt('sidebar.group.label.height');
        border-radius: dt('sidebar.group.label.border.radius');
        padding: dt('sidebar.group.label.padding');
        font-size: dt('sidebar.group.label.font.size');
        font-weight: dt('sidebar.group.label.font.weight');
        color: dt('sidebar.group.label.color');
        transition: translate 250ms cubic-bezier(.4, 0, .2, 1), opacity 250ms cubic-bezier(.4, 0, .2, 1);
    }

    .p-sidebar-group-label:focus-visible {
        outline: dt('sidebar.focus.ring.width') dt('sidebar.focus.ring.style') dt('sidebar.focus.ring.color');
        outline-offset: dt('sidebar.focus.ring.offset');
        box-shadow: dt('sidebar.focus.ring.shadow');
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-group-label {
        translate: 0 -0.375rem;
        opacity: 0;
    }

    .p-sidebar-group-action {
        position: absolute;
        display: flex;
        aspect-ratio: 1;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        top: dt('sidebar.group.action.top');
        right: dt('sidebar.group.action.right');
        width: dt('sidebar.group.action.size');
        height: dt('sidebar.group.action.size');
        border-radius: dt('sidebar.group.action.border.radius');
        color: dt('sidebar.group.action.color');
        transition: background 150ms, color 150ms;
    }

    .p-sidebar-group-action svg {
        font-weight: dt('sidebar.group.action.icon.size');
        width: dt('sidebar.group.action.icon.size');
        height: dt('sidebar.group.action.icon.size');
        flex-shrink: 0;
    }

    .p-sidebar-group-action:hover {
        background: dt('sidebar.group.action.focus.background');
        color: dt('sidebar.group.action.focus.color');
    }

    .p-sidebar-group-action:focus-visible {
        outline: dt('sidebar.focus.ring.width') dt('sidebar.focus.ring.style') dt('sidebar.focus.ring.color');
        outline-offset: dt('sidebar.focus.ring.offset');
        box-shadow: dt('sidebar.focus.ring.shadow');
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-group-action {
        display: none;
    }

    .p-sidebar-group-content {
        display: block;
        width: 100%;
        font-size: 0.875rem;
    }

    .p-sidebar-menu {
        display: flex;
        width: 100%;
        min-width: 0;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: dt('sidebar.menu.gap');
    }

    .p-sidebar-menu-item {
        display: block;
        position: relative;
        list-style: none;
    }

    .p-sidebar-menu-button {
        display: flex;
        width: 100%;
        align-items: center;
        overflow: hidden;
        border: none;
        text-align: left;
        background: none;
        outline: none;
        cursor: pointer;
        padding: dt('sidebar.menu.button.padding');
        gap: dt('sidebar.menu.button.gap');
        height: dt('sidebar.menu.button.height');
        border-radius: dt('sidebar.menu.button.border.radius');
        font-size: dt('sidebar.menu.button.font.size');
        font-weight: dt('sidebar.menu.button.font.weight');
        color: dt('sidebar.menu.button.color');
        transition: width 250ms cubic-bezier(.4, 0, .2, 1), height 250ms cubic-bezier(.4, 0, .2, 1), padding 250ms cubic-bezier(.4, 0, .2, 1), background 250ms cubic-bezier(.4, 0, .2, 1), color 250ms cubic-bezier(.4, 0, .2, 1);
    }

    .p-sidebar-menu-button svg {
        color: dt('sidebar.menu.button.icon.color');
        font-weight: dt('sidebar.menu.button.icon.size');
        width: dt('sidebar.menu.button.icon.size');
        height: dt('sidebar.menu.button.icon.size');
        flex-shrink: 0;
    }

    .p-sidebar-menu-button>span:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .p-sidebar-menu-item:has(> .p-sidebar-menu-action)>.p-sidebar-menu-button {
        padding-inline-end: dt('sidebar.menu.button.with.action.padding.end');
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-menu-button {
        width: dt('sidebar.menu.button.icon.only.width');
        height: dt('sidebar.menu.button.icon.only.width');
        padding: dt('sidebar.menu.button.padding');
    }

    .p-sidebar-menu-button:hover svg {
        color: dt('sidebar.menu.button.icon.focus.color');
    }

    .p-sidebar-menu-button:hover {
        background: dt('sidebar.menu.button.focus.background');
        color: dt('sidebar.menu.button.focus.color');
    }

    .p-sidebar-menu-button:focus-visible {
        outline: dt('sidebar.focus.ring.width') dt('sidebar.focus.ring.style') dt('sidebar.focus.ring.color');
        outline-offset: dt('sidebar.focus.ring.offset');
        box-shadow: dt('sidebar.focus.ring.shadow');
    }

    .p-sidebar-menu-button:active {
        background: dt('sidebar.menu.button.focus.background');
        color: dt('sidebar.menu.button.focus.color');
    }

    .p-sidebar-menu-button:disabled,
    .p-sidebar-menu-button[aria-disabled="true"] {
        pointer-events: none;
        opacity: 0.5;
    }

    .p-sidebar-menu-button[data-active="true"] {
        background: dt('sidebar.menu.button.active.background');
        font-weight: dt('sidebar.menu.button.font.weight');
        color: dt('sidebar.menu.button.active.color');
    }

    .p-sidebar-menu-action {
        position: absolute;
        display: flex;
        aspect-ratio: 1;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        top: dt('sidebar.menu.action.top');
        right: dt('sidebar.menu.action.right');
        width: dt('sidebar.menu.action.width');
        border-radius: dt('sidebar.menu.action.border.radius');
        color: dt('sidebar.menu.action.color');
        transition: opacity 150ms, color 150ms, background 150ms;
    }

    .p-sidebar-menu-action svg {
        font-weight: dt('sidebar.menu.action.icon.size');
        width: dt('sidebar.menu.action.icon.size');
        height: dt('sidebar.menu.action.icon.size');
        flex-shrink: 0;
    }

    .p-sidebar-menu-action:hover {
        background: dt('sidebar.menu.action.focus.background');
        color: dt('sidebar.menu.action.focus.color');
    }

    .p-sidebar-menu-action:focus-visible {
        outline: dt('sidebar.focus.ring.width') dt('sidebar.focus.ring.style') dt('sidebar.focus.ring.color');
        outline-offset: dt('sidebar.focus.ring.offset');
        box-shadow: dt('sidebar.focus.ring.shadow');
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-menu-action {
        display: none;
    }

    .p-sidebar-menu-action[data-show-on-hover] {
        opacity: 0;
    }

    .p-sidebar-menu-item:hover>.p-sidebar-menu-action[data-show-on-hover],
    .p-sidebar-menu-item:focus-within>.p-sidebar-menu-action[data-show-on-hover] {
        opacity: 1;
    }

    .p-sidebar-menu-badge {
        pointer-events: none;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-variant-numeric: tabular-nums;
        user-select: none;
        top: dt('sidebar.menu.badge.top');
        right: dt('sidebar.menu.badge.right');
        height: dt('sidebar.menu.badge.height');
        min-width: dt('sidebar.menu.badge.min.width');
        border-radius: dt('sidebar.menu.badge.border.radius');
        padding: dt('sidebar.menu.badge.padding');
        font-size: dt('sidebar.menu.badge.font.size');
        font-weight: dt('sidebar.menu.badge.font.weight');
        background: dt('sidebar.menu.badge.background');
        border: 1px solid dt('sidebar.menu.badge.border.color');
        color: dt('sidebar.menu.badge.color');
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-menu-badge {
        display: none;
    }

    .p-sidebar-menu-sub {
        display: flex;
        min-width: 0;
        width: 100%;
        flex-direction: column;
        list-style: none;
        padding-inline: 0;
        margin: 0;
        gap: dt('sidebar.menu.sub.gap');
        padding-block: dt('sidebar.menu.sub.padding.block');
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-menu-sub {
        display: none;
    }

    .p-sidebar-menu-item:not([data-collapsible])>.p-sidebar-menu-sub,
    .p-sidebar-menu-item:not([data-collapsible])>.p-sidebar-menu-sub-content-container>.p-sidebar-menu-sub-content-wrapper>.p-sidebar-menu-sub {
        transform: translateX(1px);
        margin-inline: dt('sidebar.menu.sub.indent.margin');
        padding-inline: dt('sidebar.menu.sub.indent.padding');
        border-left: 1px solid dt('sidebar.border.color');
    }

    .p-sidebar-menu-item[data-collapsible]>.p-sidebar-menu-sub,
    .p-sidebar-menu-item[data-collapsible]>.p-sidebar-menu-sub-content-container>.p-sidebar-menu-sub-content-wrapper>.p-sidebar-menu-sub {
        padding-left: dt('sidebar.menu.sub.collapsible.indent');
        padding-block: 0;
        margin-top: dt('sidebar.menu.sub.collapsible.top.margin');
        border-radius: dt('sidebar.menu.sub.collapsible.border.radius');
        overflow: hidden;
    }

    .p-sidebar-menu-sub-item {
        display: block;
        position: relative;
        width: 100%;
        list-style: none;
    }

    .p-sidebar-menu-sub-button {
        display: flex;
        min-width: 0;
        width: 100%;
        transform: translateX(-1px);
        align-items: center;
        overflow: hidden;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        height: dt('sidebar.menu.sub.button.height');
        gap: dt('sidebar.menu.sub.button.gap');
        padding: dt('sidebar.menu.sub.button.padding');
        border-radius: dt('sidebar.menu.sub.button.border.radius');
        font-size: dt('sidebar.menu.sub.button.font.size');
        font-weight: dt('sidebar.menu.sub.button.font.weight');
        color: dt('sidebar.menu.sub.button.color');
        transition: background 150ms, color 150ms;
    }

    .p-sidebar-menu-sub-button>span:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .p-sidebar-menu-sub-button svg {
        color: dt('sidebar.menu.sub.button.icon.color');
        font-weight: dt('sidebar.menu.sub.button.icon.size');
        width: dt('sidebar.menu.sub.button.icon.size');
        height: dt('sidebar.menu.sub.button.icon.size');
        flex-shrink: 0;
    }

    .p-sidebar-menu-sub-button:hover {
        background: dt('sidebar.menu.sub.button.focus.background');
        color: dt('sidebar.menu.sub.button.focus.color');
    }

    .p-sidebar-menu-sub-button:hover svg {
        color: dt('sidebar.menu.sub.button.icon.focus.color');
    }

    .p-sidebar-menu-sub-button:focus-visible {
        outline: dt('sidebar.focus.ring.width') dt('sidebar.focus.ring.style') dt('sidebar.focus.ring.color');
        outline-offset: dt('sidebar.focus.ring.offset');
        box-shadow: dt('sidebar.focus.ring.shadow');
    }

    .p-sidebar-menu-sub-button:active {
        background: dt('sidebar.menu.sub.button.active.background');
        color: dt('sidebar.menu.sub.button.active.color');
    }

    .p-sidebar-menu-sub-button:disabled,
    .p-sidebar-menu-sub-button[aria-disabled="true"] {
        pointer-events: none;
        opacity: 0.5;
    }

    .p-sidebar-menu-sub-button[data-active="true"] {
        background: dt('sidebar.menu.sub.button.active.background');
        color: dt('sidebar.menu.sub.button.active.color');
    }

    .p-sidebar[data-collapsible="icon"] .p-sidebar-menu-sub-button {
        display: none;
    }

    .p-sidebar-rail {
        position: absolute;
        inset-block: 0;
        z-index: 20;
        display: none;
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
        width: 1px;
        transition: background 50ms cubic-bezier(.4, 0, .2, 1) 75ms;
    }

    @media (min-width: 640px) {
        .p-sidebar-rail {
            display: flex;
        }
    }

    .p-sidebar-rail::after {
        content: '';
        position: absolute;
        inset-block: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0.5rem;
    }

    .p-sidebar[data-side="left"] .p-sidebar-rail {
        right: 0;
        cursor: w-resize;
    }

    .p-sidebar[data-side="left"][data-state="collapsed"] .p-sidebar-rail {
        cursor: e-resize;
    }

    .p-sidebar[data-side="right"] .p-sidebar-rail {
        left: 0;
        cursor: e-resize;
    }

    .p-sidebar[data-side="right"][data-state="collapsed"] .p-sidebar-rail {
        cursor: w-resize;
    }

    .p-sidebar[data-collapsible="offcanvas"] {
        overflow: visible;
    }

    .p-sidebar[data-collapsible="offcanvas"] .p-sidebar-aside {
        overflow: visible;
    }

    .p-sidebar[data-collapsible="offcanvas"] .p-sidebar-content {
        overflow: visible;
    }

    .p-sidebar[data-collapsible="offcanvas"] .p-sidebar-rail {
        opacity: 0;
        background: dt('sidebar.layout.background');
        transition: opacity 50ms cubic-bezier(.4, 0, .2, 1) 75ms;
    }

    .p-sidebar[data-collapsible="offcanvas"] .p-sidebar-rail:hover {
        opacity: 1;
    }

    .p-sidebar[data-side="left"][data-collapsible="offcanvas"] .p-sidebar-rail {
        right: -1.5px;
    }

    .p-sidebar[data-side="left"][data-collapsible="offcanvas"] .p-sidebar-rail::after {
        left: 100%;
        transform: none;
    }

    .p-sidebar[data-side="right"][data-collapsible="offcanvas"] .p-sidebar-rail {
        left: -1.5px;
    }

    .p-sidebar[data-side="right"][data-collapsible="offcanvas"] .p-sidebar-rail::after {
        left: auto;
        right: 100%;
        transform: none;
    }

    .p-sidebar-main {
        position: relative;
        display: flex;
        width: 100%;
        flex: 1;
        flex-direction: column;
        background: dt('sidebar.main.background');
    }

    .p-sidebar[data-variant="floating"]~.p-sidebar-main {
        background: dt('sidebar.main.floating.background');
    }

    .p-sidebar[data-variant="inset"]~.p-sidebar-main,
    .p-sidebar-main:has(~ .p-sidebar[data-variant="inset"]) {
        background: dt('sidebar.main.inset.background');
        margin: dt('sidebar.main.margin');
        border-radius: dt('sidebar.main.border.radius');
        box-shadow: dt('sidebar.main.shadow');
    }


/* For PrimeVue */
.p-sidebar-menu-sub-enter-from,
.p-sidebar-menu-sub-leave-to {
    height: 0 !important;
    opacity: 0;
}

.p-sidebar-menu-sub-enter-to,
.p-sidebar-menu-sub-leave-from {
    height: var(--px-sidebar-menu-sub-height, auto);
    opacity: 1;
}

.p-sidebar-menu-sub-enter-active,
.p-sidebar-menu-sub-leave-active {
    transition: height 200ms ease-out, opacity 200ms ease-out;
    overflow: hidden;
}
`,classes:{root:`p-sidebar p-component`}}),u={name:`BaseSidebar`,extends:c,props:{id:{type:String,default:void 0},side:{type:String,default:`left`},variant:{type:String,default:`sidebar`},collapsible:{type:String,default:`icon`},overlay:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},openOnHover:{type:Boolean,default:!1},hoverOpenDelay:{type:Number,default:50},hoverCloseDelay:{type:Number,default:100},dismissable:{type:Boolean,default:!0},hideOnOutsideClick:{type:Boolean,default:!0},width:{type:String,default:`16rem`},iconWidth:{type:String,default:`3rem`},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:l,provide:function(){return{$pcSidebar:this,$parentInstance:this}}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},d(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?f(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=g(e,`string`);return d(t)==`symbol`?t:t+``}function g(e,t){if(d(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(d(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var _={name:`Sidebar`,extends:u,inheritAttrs:!1,emits:[`update:open`],inject:{$pcSidebarLayout:{default:null}},data:function(){return{d_open:this.open===void 0||this.open}},watch:{open:function(e){e!==void 0&&(this.d_open=e)},id:function(e,t){t&&this.unregisterFromLayout(t),e&&this.registerInLayout(e)}},mounted:function(){this.registerInLayout(this.id)},beforeUnmount:function(){this.clearHoverTimer(),this.unregisterFromLayout(this.id)},methods:{registerInLayout:function(e){if(this.$pcSidebarLayout&&e){var t=this;this.$pcSidebarLayout.registerSidebar(e,{toggle:function(e){return t.toggle(e)},get open(){return t.d_open},get state(){return t.displayState},get dismissable(){return t.dismissable},get overlay(){return t.overlay},get hideOnOutsideClick(){return t.hideOnOutsideClick}})}},unregisterFromLayout:function(e){this.$pcSidebarLayout&&e&&this.$pcSidebarLayout.unregisterSidebar(e)},clearHoverTimer:function(){this.hoverTimer&&=(clearTimeout(this.hoverTimer),null)},updateOpen:function(e,t){var n=!!e;this.open===void 0&&(this.d_open=n),this.$emit(`update:open`,n)},toggle:function(e){this.collapsible!==`none`&&this.updateOpen(!this.d_open,e)},expand:function(e){this.updateOpen(!0,e)},collapse:function(e){this.collapsible!==`none`&&this.updateOpen(!1,e)},onPointerEnter:function(e){var t=this;this.openOnHover&&(this.clearHoverTimer(),this.hoverTimer=setTimeout(function(){return t.expand(e)},this.hoverOpenDelay))},onPointerLeave:function(e){var t=this;this.openOnHover&&(this.clearHoverTimer(),this.hoverTimer=setTimeout(function(){return t.collapse(e)},this.hoverCloseDelay))},getSectionAttrs:function(e){return{"data-pc-name":`sidebar`,"data-pc-section":e,"data-state":this.displayState,"data-collapsible":this.displayState===`collapsed`?this.collapsible:void 0,"data-collapsible-mode":this.collapsible,"data-variant":this.variant,"data-side":this.side,"data-overlay":this.overlay?``:void 0}}},computed:{displayState:function(){return this.d_open?`expanded`:`collapsed`},a11yAttrs:function(){var e=this.openOnHover?{onPointerenter:this.onPointerEnter,onPointerleave:this.onPointerLeave}:{};return p(p({},this.getSectionAttrs(`root`)),{},{style:{"--px-sidebar-width":this.width,"--px-sidebar-width-icon":this.iconWidth}},e)},attrs:function(){return t(this.a11yAttrs,this.ptmi(`root`))}}};function v(s,c,l,u,d,f){return s.asChild?e(s.$slots,`default`,{a11yAttrs:f.a11yAttrs,class:r(s.cx(`root`))},void 0,void 0,1):(n(),o(i(s.as),t({key:0,class:s.cx(`root`)},f.attrs),{default:a(function(){return[e(s.$slots,`default`)]}),_:3},16,[`class`]))}_.render=v;export{_ as default};