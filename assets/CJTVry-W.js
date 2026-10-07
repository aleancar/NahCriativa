import{B as e,D as t,I as n,Ot as r,U as i,V as a,Y as o,_ as s,d as c,f as l,g as u,jt as d,p as f,v as p}from"./C59ukViC.js";import{n as m,wt as h}from"./GUbs_UsO.js";import{t as g}from"./D5ph-QdN.js";import{t as _}from"./B_HB2GIz.js";import{n as v}from"./DScIcIdx.js";import y from"./C8UxwJfl.js";var b=m.extend({name:`splitbutton`,style:`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-splitbutton p-component`,{"p-splitbutton-raised":n.raised,"p-splitbutton-rounded":n.rounded,"p-splitbutton-fluid":t.hasFluid}]},pcButton:`p-splitbutton-button`,pcDropdown:`p-splitbutton-dropdown`}}),x={name:`SplitButton`,extends:{name:`BaseSplitButton`,extends:g,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:`body`},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:b,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`click`],inject:{$pcFluid:{default:null}},data:function(){return{isExpanded:!1}},mounted:function(){var e=this;this.$watch(`$refs.menu.visible`,function(t){e.isExpanded=t})},methods:{onDropdownButtonClick:function(e){e&&e.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(e){(e.code===`ArrowDown`||e.code===`ArrowUp`)&&(this.onDropdownButtonClick(),e.preventDefault())},onDefaultButtonClick:function(e){this.isExpanded&&this.$refs.menu.hide(e),this.$emit(`click`,e)}},computed:{containerClass:function(){return[this.cx(`root`),this.class]},hasFluid:function(){return h(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:v,PVSMenu:y,ChevronDown:_}},S=[`data-p-severity`];function C(m,h,g,_,v,y){var b=a(`PVSButton`),x=a(`PVSMenu`);return n(),f(`div`,t({class:y.containerClass,style:m.style},m.ptmi(`root`),{"data-p-severity":m.severity}),[p(b,t({type:`button`,class:m.cx(`pcButton`),disabled:m.disabled,severity:m.severity,text:m.text,outlined:m.outlined,size:m.size,fluid:m.fluid,"aria-label":m.label,onClick:y.onDefaultButtonClick},m.buttonProps,{pt:m.ptm(`pcButton`),unstyled:m.unstyled}),{default:o(function(){return[e(m.$slots,`icon`,{},function(){return[m.icon?(n(),f(`span`,t({key:0,class:m.icon},m.ptm(`pcButton`).icon,{"data-pc-section":`buttonicon`}),null,16)):l(``,!0)]}),e(m.$slots,`default`,{},function(){return[s(d(m.label),1)]})]}),_:3},16,[`class`,`disabled`,`severity`,`text`,`outlined`,`size`,`fluid`,`aria-label`,`onClick`,`pt`,`unstyled`]),p(b,t({ref:`button`,type:`button`,iconOnly:``,class:m.cx(`pcDropdown`),disabled:m.disabled,"aria-haspopup":`true`,"aria-expanded":v.isExpanded,"aria-controls":v.isExpanded?m.$id+`_overlay`:void 0,onClick:y.onDropdownButtonClick,onKeydown:y.onDropdownKeydown,severity:m.severity,text:m.text,outlined:m.outlined,size:m.size,unstyled:m.unstyled},m.menuButtonProps,{pt:m.ptm(`pcDropdown`)}),{default:o(function(){return[e(m.$slots,`dropdownicon`,{},function(){return[(n(),c(i(m.menuButtonIcon||m.dropdownIcon?`span`:`ChevronDown`),t({class:m.dropdownIcon||m.menuButtonIcon},m.ptm(`pcDropdown`).icon,{"data-pc-section":`menubuttonicon`}),null,16,[`class`]))]})]}),_:3},16,[`class`,`disabled`,`aria-expanded`,`aria-controls`,`onClick`,`onKeydown`,`severity`,`text`,`outlined`,`size`,`unstyled`,`pt`]),p(x,{ref:`menu`,id:m.$id+`_overlay`,model:m.model,popup:!0,autoZIndex:m.autoZIndex,baseZIndex:m.baseZIndex,appendTo:m.appendTo,unstyled:m.unstyled,pt:m.ptm(`pcMenu`)},u({_:2},[m.$slots.menuitemicon?{name:`itemicon`,fn:o(function(t){return[e(m.$slots,`menuitemicon`,{item:t.item,class:r(t.class)})]}),key:`0`}:void 0,m.$slots.item?{name:`item`,fn:o(function(t){return[e(m.$slots,`item`,{item:t.item,hasSubmenu:t.hasSubmenu,label:t.label,props:t.props})]}),key:`1`}:void 0]),1032,[`id`,`model`,`autoZIndex`,`baseZIndex`,`appendTo`,`unstyled`,`pt`])],16,S)}x.render=C;export{x as default};