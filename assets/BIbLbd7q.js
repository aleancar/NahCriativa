import{At as e,B as t,D as n,I as r,Ot as i,S as a,U as o,V as s,Y as c,_ as l,d as u,f as d,g as f,jt as p,kt as m,p as h,u as g,v as _}from"./LD8_IYgO.js";import{N as v,n as y}from"./EUCZpDVQ.js";import{t as b}from"./C5PlsQHH.js";import x from"./D2_kakTV.js";var S=y.extend({name:`commandmenu`,style:`
    .p-commandmenu {
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: dt('commandmenu.height');
        background: dt('commandmenu.background');
        border: 1px solid dt('commandmenu.border.color');
        border-radius: dt('commandmenu.border.radius');
    }

    .p-commandmenu-header {
        background: dt('commandmenu.header.background');
        padding: dt('commandmenu.header.padding');
        border-bottom: 1px solid dt('commandmenu.header.border.color');
    }

    .p-commandmenu-input {
        width: 100%;
        outline: none;
        background: transparent;
        border: 0 none;
        padding: dt('commandmenu.input.padding');
        font-size: dt('commandmenu.input.font.size');
        font-weight: dt('commandmenu.input.font.weight');
        color: dt('commandmenu.input.color');
        appearance: none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
    }

    .p-commandmenu-input::placeholder {
        color: dt('commandmenu.input.placeholder.color');
    }

    .p-commandmenu-list {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        scroll-padding-block: 0.5rem;
        padding: dt('commandmenu.list.padding');
    }

    .p-commandmenu-list:focus-visible {
        outline: none;
    }

    .p-commandmenu-empty-message {
        text-align: center;
        padding: dt('commandmenu.empty.padding');
        color: dt('commandmenu.empty.color');
    }

    .p-commandmenu-footer {
        padding: dt('commandmenu.footer.padding');
        background: dt('commandmenu.footer.background');
        border-top: 1px solid dt('commandmenu.footer.border.color');
    }

    .p-commandmenu .p-menu {
        border: 0;
        border-radius: 0;
        background: transparent;
    }
`,classes:{root:`p-commandmenu p-component`,header:`p-commandmenu-header`,input:`p-commandmenu-input`,list:`p-commandmenu-list`,emptyMessage:`p-commandmenu-empty-message`,footer:`p-commandmenu-footer`}}),C={name:`BaseCommandMenu`,extends:b,props:{model:{type:Array,default:null},search:{type:String,default:null},filter:{type:Function,default:null},placeholder:{type:String,default:null},emptyMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},menuClass:{type:[String,Object,Array],default:null},menuStyle:{type:[String,Object,Array],default:null},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:S,provide:function(){return{$pcCommandMenu:this,$parentInstance:this}}};function w(e){"@babel/helpers - typeof";return w=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},w(e)}function T(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=E(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function E(e,t){if(e){if(typeof e==`string`)return D(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?O(Object(n),!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function A(e,t,n){return(t=j(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=M(e,`string`);return w(t)==`symbol`?t:t+``}function M(e,t){if(w(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(w(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var N={name:`CommandMenu`,extends:C,inheritAttrs:!1,emits:[`update:search`,`select`],data:function(){return{d_search:this.search??``,focusedOptionId:null}},watch:{search:function(e){var t=e??``;this.d_search!==t&&(this.d_search=t,this.resetFocusedOption())}},mounted:function(){this.$refs.menu&&this.focusFirstOption()},methods:{onInputChange:function(e){this.updateSearch(e.target.value)},updateSearch:function(e){var t=e??``;this.d_search=t,this.$emit(`update:search`,t),this.resetFocusedOption()},resetFocusedOption:function(){var e=this;this.$nextTick(function(){e.focusFirstOption()})},focusFirstOption:function(){var e=this.$refs.menu;if(!e){this.focusedOptionId=null;return}e.focused=!0,e.focusedOptionId||e.changeFocusedOptionIndex(0),this.focusedOptionId=e.focusedOptionId??null},onInputKeyDown:function(e){var t=this.$refs.menu;t.onListKeyDown(e),this.focusedOptionId=t?.focusedOptionId??null,this.focusedOptionId&&this.scrollFocusedOptionInView()},scrollFocusedOptionInView:function(){var e=this;requestAnimationFrame(function(){var t,n,r=e.$refs.menu;r&&e.focusedOptionId&&((t=v(r.list,`[id="${e.focusedOptionId}"]`))==null||(n=t.scrollIntoView)==null||n.call(t,{block:`nearest`,inline:`nearest`}))})},wrapCommand:function(e){var t=this;return k(k({},e),{},{command:function(n){var r;(r=e.command)==null||r.call(e,n),t.$emit(`select`,{originalEvent:n.originalEvent,item:e})}})},wrapCommands:function(e){var t=this;return e.map(function(e){return e.items?k(k({},e),{},{items:t.wrapCommands(e.items)}):t.wrapCommand(e)})},filterModel:function(e){var t=[],n=T(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(i.items){var a=this.filterModel(i.items);a.length&&t.push(k(k({},i),{},{items:a}))}else if(i.separator)continue;else{var o=this.scoreItem(i,this.d_search);o>0&&t.push({wrapped:this.wrapCommand(i),score:o})}}}catch(e){n.e(e)}finally{n.f()}return t.sort(function(e,t){return(t.score??0)-(e.score??0)}),t.map(function(e){return e.wrapped??e})},scoreItem:function(e,t){return(this.filter??this.defaultScorer)(e,t)||0},defaultScorer:function(e,t){if(!t)return 1;var n=String(t).toLowerCase();if(String(this.resolveItemLabel(e)).toLowerCase().includes(n))return 1;var r=T(Array.isArray(e.keywords)?e.keywords:e.keywords?[e.keywords]:[]),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(String(a??``).toLowerCase().includes(n))return 1}}catch(e){r.e(e)}finally{r.f()}return 0},resolveItemLabel:function(e){return typeof e.label==`function`?e.label():e.label??``}},computed:{menuId:function(){return`${this.$id}_menu`},listId:function(){return`${this.menuId}_list`},inputAttrs:function(){return n({role:`combobox`,"aria-autocomplete":`list`,"aria-expanded":!0,"aria-controls":this.filteredModel.length?this.listId:void 0,"aria-activedescendant":this.focusedOptionId,autocomplete:`off`,placeholder:this.placeholder,onKeydown:this.onInputKeyDown},this.ptm(`input`))},inputProps:function(){return k(k({},this.inputAttrs),{},{value:this.d_search,onInput:this.onInputChange})},isFiltering:function(){return!!(this.d_search&&this.d_search.length)},emptyMessageText:function(){var e;return this.emptyMessage??((e=this.$primevue)==null||(e=e.config)==null||(e=e.locale)==null?void 0:e.emptyMessage)??``},emptyFilterMessageText:function(){var e,t;return this.emptyFilterMessage??((e=this.$primevue)==null||(e=e.config)==null||(e=e.locale)==null?void 0:e.emptySearchMessage)??((t=this.$primevue)==null||(t=t.config)==null||(t=t.locale)==null?void 0:t.emptyFilterMessage)??``},filteredModel:function(){var e=this.model??[];return this.d_search?this.filterModel(e):this.wrapCommands(e)}},components:{Menu:x}},P=[`value`];function F(v,y,b,x,S,C){var w=s(`Menu`);return v.asChild?t(v.$slots,`default`,{class:i(v.cx(`root`))},void 0,void 0,1):(r(),u(o(v.as),n({key:0,class:v.cx(`root`)},v.ptmi(`root`)),{default:c(function(){return[g(`div`,n({class:v.cx(`header`)},v.ptm(`header`)),[t(v.$slots,`header`,{value:S.d_search,inputProps:C.inputProps},function(){return[g(`input`,n({ref:`input`,type:`text`,role:`combobox`,value:S.d_search,class:v.cx(`input`)},C.inputAttrs,{onInput:y[0]||=function(){return C.onInputChange&&C.onInputChange.apply(C,arguments)}}),null,16,P)]})],16),C.filteredModel.length===0?(r(),h(`div`,n({key:0,class:v.cx(`emptyMessage`)},v.ptm(`emptyMessage`)),[C.isFiltering?t(v.$slots,`emptyfilter`,{},function(){return[l(p(C.emptyFilterMessageText),1)]},void 0,0):t(v.$slots,`empty`,{},function(){return[l(p(C.emptyMessageText),1)]},void 0,1)],16)):d(``,!0),_(w,{id:C.menuId,ref:`menu`,model:C.filteredModel,popup:!1,"aria-label":v.ariaLabel,"aria-labelledby":v.ariaLabelledby,class:i([v.cx(`list`),v.menuClass]),style:e(v.menuStyle),pt:v.ptm(`pcMenu`),unstyled:v.unstyled},f({_:2},[v.$slots.item?{name:`item`,fn:c(function(e){return[t(v.$slots,`item`,m(a(e)))]}),key:`0`}:void 0,v.$slots.submenulabel?{name:`submenulabel`,fn:c(function(e){return[t(v.$slots,`submenulabel`,m(a(e)))]}),key:`1`}:void 0]),1032,[`id`,`model`,`aria-label`,`aria-labelledby`,`class`,`style`,`pt`,`unstyled`]),v.$slots.footer?(r(),h(`div`,n({key:1,class:v.cx(`footer`)},v.ptm(`footer`)),[t(v.$slots,`footer`,{items:C.filteredModel})],16)):d(``,!0)]}),_:3},16,[`class`]))}N.render=F;export{N as default};