import{B as e,D as t,I as n,Ot as r,S as i,U as a,V as o,X as s,Y as c,d as l,f as u,jt as d,kt as f,p,u as m,v as h}from"./LD8_IYgO.js";import{a as g,t as _}from"./B3iE1oVL.js";import{n as v}from"./EUCZpDVQ.js";import{t as y}from"./CEAV8Kzl.js";import{t as b}from"./C5PlsQHH.js";import{t as x}from"./liTNUue3.js";import{n as S}from"./DO1oD-V-.js";import{t as C}from"./UnJgCTab.js";import{t as w}from"./CSNoNhe6.js";var T=v.extend({name:`panel`,style:`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        font-weight: dt('panel.title.font.weight');
        font-size: dt('panel.title.font.size');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }

    .p-panel-trigger {
        cursor: pointer;
    }
`,classes:{root:function(e){return[`p-panel p-component`,{"p-panel-toggleable":e.props.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`}}),E={name:`Panel`,extends:{name:`BasePanel`,extends:b,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0,iconOnly:!0}}}},style:T,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return y({toggleable:this.toggleable})}},components:{Plus:w,Minus:C,Button:S},directives:{ripple:x}},D=[`data-p`],O=[`data-p`],k=[`id`],A=[`id`,`aria-labelledby`];function j(v,y,b,x,S,C){var w=o(`Button`);return n(),p(`div`,t({class:v.cx(`root`),"data-p":C.dataP},v.ptmi(`root`)),[m(`div`,t({class:v.cx(`header`),"data-p":C.dataP},v.ptm(`header`)),[e(v.$slots,`header`,{id:v.$id+`_header`,class:r(v.cx(`title`)),collapsed:S.d_collapsed},function(){return[v.header?(n(),p(`span`,t({key:0,id:v.$id+`_header`,class:v.cx(`title`)},v.ptm(`title`)),d(v.header),17,k)):u(``,!0)]}),m(`div`,t({class:v.cx(`headerActions`)},v.ptm(`headerActions`)),[e(v.$slots,`icons`),v.toggleable?e(v.$slots,`togglebutton`,{collapsed:S.d_collapsed,toggleCallback:function(e){return C.toggle(e)},keydownCallback:function(e){return C.onKeyDown(e)}},function(){return[h(w,t({id:v.$id+`_header`,class:v.cx(`pcToggleButton`),"aria-label":C.buttonAriaLabel,"aria-controls":v.$id+`_content`,"aria-expanded":!S.d_collapsed,unstyled:v.unstyled,onClick:y[0]||=function(e){return C.toggle(e)},onKeydown:y[1]||=function(e){return C.onKeyDown(e)}},v.toggleButtonProps,{pt:v.ptm(`pcToggleButton`)}),{default:c(function(){return[e(v.$slots,`toggleicon`,{collapsed:S.d_collapsed},function(){return[(n(),l(a(S.d_collapsed?`Plus`:`Minus`),f(i(v.ptm(`pcToggleButton`).icon)),null,16))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]},void 0,0):u(``,!0)],16)],16,O),h(_,t({name:`p-collapsible`},v.ptm(`transition`)),{default:c(function(){return[s(m(`div`,t({id:v.$id+`_content`,class:v.cx(`contentContainer`),role:`region`,"aria-labelledby":v.$id+`_header`},v.ptm(`contentContainer`)),[m(`div`,t({class:v.cx(`contentWrapper`)},v.ptm(`contentWrapper`)),[m(`div`,t({class:v.cx(`content`)},v.ptm(`content`)),[e(v.$slots,`default`)],16),v.$slots.footer?(n(),p(`div`,t({key:0,class:v.cx(`footer`)},v.ptm(`footer`)),[e(v.$slots,`footer`)],16)):u(``,!0)],16)],16,A),[[g,!S.d_collapsed]])]}),_:3},16)],16,D)}E.render=j;export{E as default};