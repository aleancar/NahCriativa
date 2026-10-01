import{D as e,I as t,Ot as n,U as r,V as i,Y as a,ct as o,d as s,f as c,jt as l,p as u,r as d,u as f,z as p}from"./LD8_IYgO.js";import{s as m}from"./B3iE1oVL.js";import{gt as h,n as g}from"./EUCZpDVQ.js";import{t as _}from"./C5PlsQHH.js";import{t as v}from"./CMKryd0I.js";import{t as y}from"./DyF1kNQf.js";import{n as b}from"./jvO3Q9dO.js";var x=g.extend({name:`organizationchart`,style:`
    
    .p-organizationchart {
        display: block;
        width: 100%;
        overflow: auto;
        padding: 1rem 0;
    }

    .p-organizationchart-subtree {
        position: relative;
        display: flex;
        padding-inline-start: 0;
        margin: 0;
        padding-top: calc(var(--px-gap-y) * 2/3);
        gap: var(--px-gap-x);
    }

    .p-organizationchart-subtree-root {
        padding-top: 0;
    }

    .p-organizationchart-subtree-root::before {
        content: none !important;
    }

    .p-organizationchart-subtree::before {
        content: "";
        position: absolute;
        top: 0;
        height: calc(var(--px-gap-y) * 2/3);
        box-sizing: border-box;
        left: calc(50% - 1px / 2);
        width: 0;
        border-left: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-tree {
        flex-shrink: 0;
        text-align: center;
        list-style-type: none;
        margin: 0 auto;
        position: relative;
        padding: calc(var(--px-gap-y) * 1/3) 0 0 0;
    }

    .p-organizationchart-tree::before,
    .p-organizationchart-tree::after {
        content: "";
        position: absolute;
        height: calc(var(--px-gap-y) * 1/3);
        width: calc(50% + calc(var(--px-gap-x) / 2));
        top: 0;
        right: 50%;
        border-top: 1px solid dt('organizationchart.connector.color');
        box-sizing: border-box;
    }

    .p-organizationchart-tree::after {
        left: 50%;
        border-left: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-tree:only-of-type {
        padding: 0;
    }

    .p-organizationchart-tree:only-of-type::before,
    .p-organizationchart-tree:only-of-type::after {
        display: none;
    }

    .p-organizationchart-tree:first-of-type::before {
        border: none;
    }

    .p-organizationchart-tree:first-of-type::after {
        border-radius: dt('organizationchart.connector.border.radius') 0 0 0;
    }

    .p-organizationchart-tree:last-of-type::before {
        border-right: 1px solid dt('organizationchart.connector.color');
        border-radius: 0 dt('organizationchart.connector.border.radius') 0 0;
    }

    .p-organizationchart-tree:last-of-type::after {
        border: 0 none;
    }

    .p-organizationchart-node {
        position: relative;
        min-width: 4rem;
        width: fit-content;
        margin: 0 auto;
        background: dt('organizationchart.node.background');
        border: 1px solid dt('organizationchart.node.border.color');
        border-radius: dt('organizationchart.node.border.radius');
        color: dt('organizationchart.node.color');
        transition:
            background dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node-content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('organizationchart.node.padding');
        font-size: dt('organizationchart.node.font.size');
        font-weight: dt('organizationchart.node.font.weight');
    }

    .p-organizationchart-node[data-selectable]:not([data-selected]):hover {
        background: dt('organizationchart.node.hover.background');
        color: dt('organizationchart.node.hover.color');
    }

    .p-organizationchart-node[data-selectable][data-selected] {
        background: dt('organizationchart.node.selected.background');
        color: dt('organizationchart.node.selected.color');
    }

    .p-organizationchart-node[data-selectable] {
        cursor: pointer;
        user-select: none;
    }

    .p-organizationchart-node-toggle-button {
        pointer-events: auto;
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
        cursor: pointer;
        user-select: none;
        width: dt('organizationchart.node.toggle.button.size');
        height: dt('organizationchart.node.toggle.button.size');
        background: dt('organizationchart.node.toggle.button.background');
        color: dt('organizationchart.node.toggle.button.color');
        border-radius: dt('organizationchart.node.toggle.button.border.radius');
        border: 1px solid dt('organizationchart.node.toggle.button.border.color');
        display: inline-flex;
        justify-content: center;
        align-items: center;
        outline-color: transparent;
        transition:
            background dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            outline-color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node[data-collapsible]:not([data-collapsed]) .p-organizationchart-node-toggle-button {
        bottom: 0;
        transform: translateX(-50%) translateY(calc(50% + calc(var(--px-gap-y) / 2 * 2/3)));
    }

    .p-organizationchart-node:focus-visible {
        box-shadow: dt('organizationchart.node.focus.ring.shadow');
        outline: dt('organizationchart.node.focus.ring.width') dt('organizationchart.node.focus.ring.style') dt('organizationchart.node.focus.ring.color');
        outline-offset: dt('organizationchart.node.focus.ring.offset');
    }

    .p-organizationchart-node-toggle-button:hover {
        background: dt('organizationchart.node.toggle.button.hover.background');
        color: dt('organizationchart.node.toggle.button.hover.color');
    }

    .p-organizationchart-node-toggle-button:focus-visible {
        box-shadow: dt('organizationchart.node.toggle.button.focus.ring.shadow');
        outline: dt('organizationchart.node.toggle.button.focus.ring.width') dt('organizationchart.node.toggle.button.focus.ring.style') dt('organizationchart.node.toggle.button.focus.ring.color');
        outline-offset: dt('organizationchart.node.toggle.button.focus.ring.offset');
    }

    .p-organizationchart-node-toggle-button svg
    .p-organizationchart-node-toggle-button i {
        font-size: dt('organizationchart.node.toggle.button.icon.size');
        width: dt('organizationchart.node.toggle.button.icon.size');
        height: dt('organizationchart.node.toggle.button.icon.size');
    }


    /* For PrimeVue */
    .p-organizationchart-node-content {
        gap: 0.5rem;
    }
`,classes:{root:`p-organizationchart p-component`,tree:`p-organizationchart-tree`,subtree:function(e){return[`p-organizationchart-subtree`,{"p-organizationchart-subtree-root":e.root}]},node:`p-organizationchart-node`,content:`p-organizationchart-node-content`,label:`p-organizationchart-node-label`,toggle:`p-organizationchart-node-toggle-button`,toggleIndicator:`p-organizationchart-node-toggle-button-icon`}}),S={name:`BaseOrganizationChart`,extends:_,props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectable:{type:Boolean,default:!0},gap:{type:[Number,Array],default:function(){return[40,56]}}},style:x,provide:function(){return{$pcOrganizationChart:this,$parentInstance:this}}},C={name:`OrganizationChartNode`,hostName:`OrganizationChart`,extends:_,emits:[`node-click`,`node-toggle`],props:{node:{type:null,default:null},level:{type:Number,default:1},templates:{type:null,default:null},selectable:{type:Boolean,default:!0},collapsible:{type:Boolean,default:!1},selectionMode:{type:String,default:null},selectionKeys:{type:null,default:null},collapsedKeys:{type:null,default:null}},methods:{onNodeClick:function(){this.nodeSelectable&&this.$emit(`node-click`,this.node)},toggleSelection:function(){this.onNodeClick()},onNodeKeydown:function(e){this.nodeSelectable&&(e.key===`Enter`||e.key===` `)&&(this.$emit(`node-click`,this.node),e.preventDefault(),e.stopPropagation())},onToggle:function(){this.$emit(`node-toggle`,this.node)},onToggleKeydown:function(e){(e.key===`Enter`||e.key===` `)&&(this.$emit(`node-toggle`,this.node),e.preventDefault(),e.stopPropagation())},resolveIcon:function(e){return h(e)?e:o(e)},isComponentIcon:function(e){return!!e&&!h(e)}},computed:{hasChildren:function(){var e;return((e=this.node)==null||(e=e.children)==null?void 0:e.length)>0},isCollapsible:function(){return this.hasChildren&&this.collapsible},checkboxMode:function(){return this.selectionMode===`checkbox`},nodeSelectable:function(){if(!this.selectionMode)return!1;var e=this.node.selectable;return e===!1?!1:e===!0||!!this.selectable},selected:function(){if(!this.selectionKeys)return!1;var e=this.selectionKeys[this.node.key];return this.selectionMode===`checkbox`?e?.checked===!0:e===!0},partialSelected:function(){var e;return this.selectionMode===`checkbox`&&((e=this.selectionKeys)==null||(e=e[this.node.key])==null?void 0:e.partialChecked)===!0},collapsed:function(){return this.isCollapsible?this.collapsedKeys?.[this.node.key]===!0:!1},toggleButtonAriaLabel:function(){var e,t=(e=this.$primevue)==null||(e=e.config)==null||(e=e.locale)==null?void 0:e.aria;return this.collapsed?t?.expand??`Expand`:t?.collapse??`Collapse`}},components:{Checkbox:b,ChevronDown:v,ChevronUp:y}},w=[`data-level`,`aria-level`,`aria-expanded`,`aria-selected`],T=[`tabindex`,`data-selectable`,`data-collapsible`,`data-selected`,`data-partial-selected`,`data-collapsed`],E=[`aria-expanded`,`aria-label`];function D(o,h,g,_,v,y){var b,x=i(`Checkbox`),S=i(`ChevronDown`),C=i(`ChevronUp`),D=i(`OrganizationChartNode`,!0);return t(),u(`li`,e({class:o.cx(`tree`),role:`treeitem`,"data-level":g.level,"aria-level":g.level,"aria-expanded":y.isCollapsible?!y.collapsed:void 0,"aria-selected":g.selectionMode?y.selected:void 0},o.ptm(`tree`)),[f(`div`,e({class:[o.cx(`node`),g.node.styleClass],style:g.node.style,tabindex:y.nodeSelectable?0:-1,"data-selectable":y.nodeSelectable?``:void 0,"data-collapsible":y.isCollapsible?``:void 0,"data-selected":y.selected?``:void 0,"data-partial-selected":y.partialSelected?``:void 0,"data-collapsed":y.collapsed?``:void 0,onClick:h[2]||=function(){return y.onNodeClick&&y.onNodeClick.apply(y,arguments)},onKeydown:h[3]||=function(){return y.onNodeKeydown&&y.onNodeKeydown.apply(y,arguments)}},o.ptm(`node`)),[f(`div`,e({class:o.cx(`content`)},o.ptm(`content`)),[y.checkboxMode?(t(),s(x,{key:0,defaultValue:y.selected,binary:!0,indeterminate:y.partialSelected,size:`small`,tabindex:-1,unstyled:o.unstyled,pt:o.ptm(`pcCheckbox`),"data-p-partialchecked":y.partialSelected},{icon:a(function(e){return[g.templates.checkboxicon?(t(),s(r(g.templates.checkboxicon),{key:0,checked:e.checked,partialChecked:y.partialSelected,class:n(e.class)},null,8,[`checked`,`partialChecked`,`class`])):c(``,!0)]}),_:1},8,[`defaultValue`,`indeterminate`,`unstyled`,`pt`,`data-p-partialchecked`])):c(``,!0),g.templates.default?(t(),s(r(g.templates.default),{key:1,node:g.node,selected:y.selected,partialSelected:y.partialSelected,collapsed:y.collapsed,toggleSelection:y.toggleSelection,icon:g.node.data&&g.node.data.icon?y.resolveIcon(g.node.data.icon):void 0,labelClass:o.cx(`label`)},null,8,[`node`,`selected`,`partialSelected`,`collapsed`,`toggleSelection`,`icon`,`labelClass`])):(t(),u(`span`,e({key:2,class:o.cx(`label`)},o.ptm(`label`)),l(g.node.label),17))],16),y.isCollapsible?(t(),u(`button`,e({key:0,type:`button`,class:o.cx(`toggle`),"aria-expanded":!y.collapsed,"aria-label":y.toggleButtonAriaLabel,onClick:h[0]||=m(function(){return y.onToggle&&y.onToggle.apply(y,arguments)},[`stop`]),onKeydown:h[1]||=function(){return y.onToggleKeydown&&y.onToggleKeydown.apply(y,arguments)}},o.ptm(`toggle`)),[f(`span`,e({class:o.cx(`toggleIndicator`)},o.ptm(`toggleIndicator`)),[g.templates.toggleicon?(t(),s(r(g.templates.toggleicon),{key:0,collapsed:y.collapsed},null,8,[`collapsed`])):y.collapsed?(t(),s(S,{key:1})):(t(),s(C,{key:2}))],16)],16,E)):c(``,!0)],16,T),(b=g.node.children)!=null&&b.length&&!y.collapsed?(t(),u(`ul`,e({key:0,class:o.cx(`subtree`),role:`group`},o.ptm(`subtree`)),[(t(!0),u(d,null,p(g.node.children,function(e){return t(),s(D,{key:e.key,node:e,level:g.level+1,templates:g.templates,selectable:g.selectable,collapsible:g.collapsible,selectionMode:g.selectionMode,selectionKeys:g.selectionKeys,collapsedKeys:g.collapsedKeys,pt:o.pt,unstyled:o.unstyled,onNodeClick:h[4]||=function(e){return o.$emit(`node-click`,e)},onNodeToggle:h[5]||=function(e){return o.$emit(`node-toggle`,e)}},null,8,[`node`,`level`,`templates`,`selectable`,`collapsible`,`selectionMode`,`selectionKeys`,`collapsedKeys`,`pt`,`unstyled`])}),128))],16)):c(``,!0)],16,w)}C.render=D;function O(e){"@babel/helpers - typeof";return O=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},O(e)}function k(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=M(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function A(e){return P(e)||N(e)||M(e)||j()}function j(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(e,t){if(e){if(typeof e==`string`)return F(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function N(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function P(e){if(Array.isArray(e))return F(e)}function F(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?I(Object(n),!0).forEach(function(t){R(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function R(e,t,n){return(t=z(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){var t=B(e,`string`);return O(t)==`symbol`?t:t+``}function B(e,t){if(O(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(O(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var V={name:`OrganizationChart`,extends:S,inheritAttrs:!1,emits:[`node-unselect`,`node-select`,`update:selectionKeys`,`node-expand`,`node-collapse`,`update:collapsedKeys`],data:function(){return{d_collapsedKeys:this.collapsedKeys?L({},this.collapsedKeys):{},d_selectionKeys:this.selectionKeys?L({},this.selectionKeys):{}}},watch:{collapsedKeys:function(e){this.d_collapsedKeys=e?L({},e):{}},selectionKeys:function(e){this.d_selectionKeys=e?L({},e):{}}},methods:{onNodeClick:function(e){if(this.selectionMode){if(this.selectionMode===`checkbox`){this.onCheckboxNodeClick(e);return}var t=e.key,n=this.d_selectionKeys[t]===!0,r;n?(r=this.selectionMode===`single`?{}:L({},this.d_selectionKeys),this.selectionMode!==`single`&&delete r[t],this.$emit(`node-unselect`,e)):(r=this.selectionMode===`single`?{}:L({},this.d_selectionKeys),r[t]=!0,this.$emit(`node-select`,e)),this.d_selectionKeys=r,this.$emit(`update:selectionKeys`,r)}},onCheckboxNodeClick:function(e){var t=this,n=L({},this.d_selectionKeys),r=n[e.key]?.checked!==!0;[e.key].concat(A(this.getDescendantKeys(e))).forEach(function(e){r?n[e]={checked:!0,partialChecked:!1}:delete n[e]}),(this.getAncestorKeys(e.key)??[]).reverse().forEach(function(e){var r,i=t.findNodeByKey(e),a=(i==null||(r=i.children)==null?void 0:r.map(function(e){return e.key}))??[],o=a.every(function(e){return n[e]?.checked===!0}),s=a.some(function(e){return n[e]?.checked===!0||n[e]?.partialChecked===!0});o?n[e]={checked:!0,partialChecked:!1}:s?n[e]={checked:!1,partialChecked:!0}:delete n[e]}),this.d_selectionKeys=n,this.$emit(r?`node-select`:`node-unselect`,e),this.$emit(`update:selectionKeys`,n)},onNodeToggle:function(e){var t=e.key,n=L({},this.d_collapsedKeys);n[t]?(delete n[t],this.$emit(`node-expand`,e)):(n[t]=!0,this.$emit(`node-collapse`,e)),this.d_collapsedKeys=n,this.$emit(`update:collapsedKeys`,n)},findNodeByKey:function(e){var t=k(arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.normalizedValue),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;if(r.key===e)return r;var i=r.children?this.findNodeByKey(e,r.children):null;if(i)return i}}catch(e){t.e(e)}finally{t.f()}return null},getDescendantKeys:function(e){var t=this;return(e.children??[]).flatMap(function(e){return[e.key].concat(A(t.getDescendantKeys(e)))})},getAncestorKeys:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.normalizedValue,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=k(t),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(a.key===e)return n;var o=a.children?this.getAncestorKeys(e,a.children,[].concat(A(n),[a.key])):null;if(o)return o}}catch(e){r.e(e)}finally{r.f()}return null}},computed:{normalizedValue:function(){return this.value?Array.isArray(this.value)?this.value:[this.value]:[]},rootStyle:function(){var e=this.gap??40;return Array.isArray(e)?e.length===0?e=[40,40]:e.length===1&&(e=[e[0],e[0]]):e=[e,e],{"--px-gap-x":`${e[0]}px`,"--px-gap-y":`${e[1]}px`}}},components:{OrganizationChartNode:C}},H=[`aria-multiselectable`];function U(n,r,a,o,c,l){var m=i(`OrganizationChartNode`);return t(),u(`div`,e({class:n.cx(`root`),style:l.rootStyle,role:`tree`,"aria-multiselectable":n.selectionMode===`multiple`||n.selectionMode===`checkbox`},n.ptmi(`root`)),[f(`ul`,e({class:n.cx(`subtree`,{root:!0}),role:`group`},n.ptm(`subtree`)),[(t(!0),u(d,null,p(l.normalizedValue,function(e){return t(),s(m,{key:e.key,node:e,level:1,templates:n.$slots,selectable:n.selectable,collapsible:n.collapsible,selectionMode:n.selectionMode,selectionKeys:c.d_selectionKeys,collapsedKeys:c.d_collapsedKeys,pt:n.pt,onNodeClick:l.onNodeClick,onNodeToggle:l.onNodeToggle,unstyled:n.unstyled},null,8,[`node`,`templates`,`selectable`,`collapsible`,`selectionMode`,`selectionKeys`,`collapsedKeys`,`pt`,`onNodeClick`,`onNodeToggle`,`unstyled`])}),128))],16)],16,H)}V.render=U;export{V as default};