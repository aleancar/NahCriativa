import{B as e,D as t,I as n,V as r,Y as i,ct as a,d as o,g as s,jt as c,p as l,r as u,u as d,z as f}from"./C59ukViC.js";import{_t as p,gt as m,ht as h,n as g}from"./GUbs_UsO.js";import{t as _}from"./CEAV8Kzl.js";import{t as v}from"./60TiK-mC.js";import{t as y}from"./9WzpAW3b.js";import b from"./Bs2x9QwB.js";var x=g.extend({name:`selectbutton`,style:`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),S={name:`BaseSelectButton`,extends:y,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:x,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function C(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=E(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function w(e){return O(e)||D(e)||E(e)||T()}function T(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,t){if(e){if(typeof e==`string`)return k(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function D(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function O(e){if(Array.isArray(e))return k(e)}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var A={name:`SelectButton`,extends:S,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?p(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?p(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?p(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?p(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t){var n=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var r=this.isSelected(t),i=this.getOptionValue(t),a;if(this.multiple){if(r){if(a=this.d_value.filter(function(e){return!h(e,i,n.equalityKey)}),!this.allowEmpty&&a.length===0)return}else a=this.d_value?[].concat(w(this.d_value),[i]):[i]}else{if(r&&!this.allowEmpty)return;a=r?null:i}this.writeValue(a,e),this.$emit(`change`,{originalEvent:e,value:a})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=C(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(h(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=h(this.d_value,n,this.equalityKey);return t},resolveIcon:function(e){return m(e)?e:a(e)},isComponentIcon:function(e){return!!e&&!m(e)}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return _({invalid:this.$invalid})}},directives:{ripple:v},components:{ToggleButton:b}},j=[`aria-labelledby`,`data-p`];function M(a,p,m,h,g,_){var v=r(`ToggleButton`);return n(),l(`div`,t({class:a.cx(`root`),role:`group`,"aria-labelledby":a.ariaLabelledby},a.ptmi(`root`),{"data-p":_.dataP}),[(n(!0),l(u,null,f(a.options,function(r,l){return n(),o(v,{key:_.getOptionRenderKey(r),modelValue:_.isSelected(r),onLabel:_.getOptionLabel(r),offLabel:_.getOptionLabel(r),disabled:a.disabled||_.isOptionDisabled(r),unstyled:a.unstyled,size:a.size,readonly:_.isOptionReadonly(r),onChange:function(e){return _.onOptionSelect(e,r,l)},pt:a.ptm(`pcToggleButton`)},s({_:2},[a.$slots.option?{name:`default`,fn:i(function(){return[e(a.$slots,`option`,{option:r,index:l,icon:r.icon?_.resolveIcon(r.icon):void 0},function(){return[d(`span`,t({ref_for:!0},a.ptm(`pcToggleButton`).label),c(_.getOptionLabel(r)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,j)}A.render=M;export{A as default};