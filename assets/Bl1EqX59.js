import{B as e,D as t,I as n,Ot as r,S as i,V as a,Y as o,_ as s,g as c,jt as l,kt as u,p as d,r as f,u as p,v as m,z as h}from"./C59ukViC.js";import{H as g,_t as _,n as v,wt as y,xt as b}from"./GUbs_UsO.js";import{t as x}from"./CEAV8Kzl.js";import S from"./UP6bq5so.js";import{t as C}from"./9rE-hHHF.js";import w from"./CYqruB1R.js";var T=v.extend({name:`inputtags`,style:`
    .p-inputtags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: relative;
        padding-block: calc(dt('inputtags.padding.y') /2);
        padding-inline: dt('inputtags.padding.x');
        gap: dt('inputtags.gap');
        color: dt('inputtags.color');
        background: dt('inputtags.background');
        border: 1px solid dt('inputtags.border.color');
        transition:
            background dt('inputtags.transition.duration'),
            color dt('inputtags.transition.duration'),
            border-color dt('inputtags.transition.duration'),
            outline-color dt('inputtags.transition.duration'),
            box-shadow dt('inputtags.transition.duration');
        appearance: none;
        border-radius: dt('inputtags.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtags.shadow');
    }

    .p-inputtags:not(.p-disabled):hover {
        border-color: dt('inputtags.hover.border.color');
    }

    .p-inputtags.p-focus:not(.p-disabled) {
        border-color: dt('inputtags.focus.border.color');
        box-shadow: dt('inputtags.focus.ring.shadow');
        outline: dt('inputtags.focus.ring.width') dt('inputtags.focus.ring.style') dt('inputtags.focus.ring.color');
        outline-offset: dt('inputtags.focus.ring.offset');
    }

    .p-inputtags.p-invalid {
        border-color: dt('inputtags.invalid.border.color');
    }

    .p-inputtags.p-disabled {
        opacity: 1;
        background: dt('inputtags.disabled.background');
        color: dt('inputtags.disabled.color');
    }

    .p-inputtags.p-variant-filled {
        background: dt('inputtags.filled.background');
    }

    .p-inputtags.p-variant-filled:not(.p-disabled):hover {
        background: dt('inputtags.filled.hover.background');
    }

    .p-inputtags.p-focus.p-variant-filled:not(.p-disabled) {
        background: dt('inputtags.filled.focus.background');
    }

    .p-inputtags-fluid {
        width: 100%;
    }

    .p-inputtags .p-inputtags-item {
        border-radius: dt('inputtags.item.border.radius');
    }

    .p-inputtags .p-inputtags-item .p-chip-label {
        line-height: 1;
    }

    .p-inputtags .p-autocomplete {
        flex: 1 1 auto;
        min-width: 10rem;
    }

    .p-inputtags .p-autocomplete .p-autocomplete-input {
        border: 0;
        background: transparent;
        box-shadow: none;
        padding: calc(dt('inputtags.padding.y') /2) 0;
        width: 100%;
    }

    .p-inputtags .p-autocomplete .p-autocomplete-input:enabled:focus {
        outline: 0;
        box-shadow: none;
    }
`,classes:{root:function(e){var t=e.instance;return[`p-inputtags p-component p-inputwrapper`,{"p-disabled":e.props.disabled,"p-invalid":t.$invalid,"p-focus":t.focused,"p-inputwrapper-filled":t.$filled,"p-inputwrapper-focus":t.focused,"p-inputtags-fluid":t.$fluid,"p-variant-filled":t.$variant===`filled`}]},item:function(e){var t=e.instance,n=e.i;return[`p-inputtags-item`,{"p-focus":t.focusedItemIndex===n}]},chipIcon:`p-inputtags-chip-icon`,pcAutoComplete:`p-inputtags-autocomplete`}}),E={name:`BaseInputTags`,extends:C,props:{typeahead:{type:Boolean,default:!1},suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:`14rem`},placeholder:{type:String,default:null},dataKey:{type:String,default:null},max:{type:Number,default:null},delimiter:{type:[String,RegExp],default:null},allowDuplicate:{type:Boolean,default:!1},addOnBlur:{type:Boolean,default:!1},addOnPaste:{type:Boolean,default:!1},addOnTab:{type:Boolean,default:!1},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:`body`},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},inputProps:{type:null,default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},autoOptionFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:T,provide:function(){return{$pcInputTags:this,$parentInstance:this}}};function D(e){"@babel/helpers - typeof";return D=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},D(e)}function O(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=A(e,`string`);return D(t)==`symbol`?t:t+``}function A(e,t){if(D(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(D(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function j(e){return F(e)||P(e)||N(e)||M()}function M(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(e,t){if(e){if(typeof e==`string`)return I(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function P(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function F(e){if(Array.isArray(e))return I(e)}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var L={name:`InputTags`,extends:E,inheritAttrs:!1,emits:[`focus`,`blur`,`add`,`remove`,`option-select`,`complete`,`before-show`,`before-hide`,`show`,`hide`],data:function(){return{focused:!1,focusedItemIndex:-1,inputValue:``}},methods:{getInputEl:function(){var e;return((e=this.$refs.autocomplete)==null||(e=e.$el)==null?void 0:e.querySelector(`input`))??null},getChipProps:function(e,n){return t({id:`${this.$id}_inputtags_item_${n}`,class:this.cx(`item`,{i:n}),role:`option`,"aria-label":e,"aria-selected":this.focusedItemIndex===n,"aria-setsize":this.d_value.length,"aria-posinset":n+1,"data-p-focused":this.focusedItemIndex===n||void 0,"data-index":n},this.ptm(`item`)||{})},addItem:function(e,t){var n=(t||``).trim();if(n&&!this.disabled){var r=this.d_value??[];if(!(this.max&&r.length>=this.max)&&(this.allowDuplicate||r.indexOf(n)===-1)){this.writeValue([].concat(j(r),[n]),e),this.$emit(`add`,{originalEvent:e,value:n});var i=this.getInputEl();i&&(i.value=``),this.inputValue=``}}},removeItem:function(e,t){if(!this.disabled){e.stopPropagation();var n=this.d_value[t],r=this.d_value.filter(function(e,n){return n!==t});this.focusedItemIndex=-1,this.writeValue(r,e),this.$emit(`remove`,{originalEvent:e,value:n,index:t});var i=this.getInputEl();i&&g(i)}},onContainerClick:function(e){if(!this.disabled){var t=this.getInputEl();t&&e.target!==t&&!t.contains(e.target)&&g(t)}},onInputFocus:function(e){this.focused=!0,this.$emit(`focus`,e)},onInputBlur:function(e){var t;this.addOnBlur&&e!=null&&(t=e.target)!=null&&(t=t.value)!=null&&t.trim()&&this.addItem(e,e.target.value),this.focused=!1,this.focusedItemIndex=-1,this.$emit(`blur`,e)},onOptionSelect:function(e){var t=e.value,n=this.optionLabel?_(t,this.optionLabel):t;this.addItem(e.originalEvent,n),this.$emit(`option-select`,e)},onInputPaste:function(e){var t=this;if(this.addOnPaste||this.delimiter){var n=(e.clipboardData||window.clipboardData).getData(`Text`);if(n){var r=n.split(this.delimiterRegex||/\r?\n/);(r.length>1||this.addOnPaste)&&(e.preventDefault(),r.forEach(function(n){return t.addItem(e,n)}))}}},onInputKeyDown:function(e){if(this.disabled)e.preventDefault();else switch(e.code){case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Backspace`:this.onBackspaceKey(e);break;case`Delete`:this.onDeleteKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Tab`:this.onTabKey(e);break;default:this.onDelimiterKey(e)}},onDelimiterKey:function(e){if(this.delimiter&&(typeof this.delimiter==`string`?e.key===this.delimiter:e.key.match(this.delimiter))){e.preventDefault();var t=e.target.value;t&&t.trim().length&&this.addItem(e,t)}},onArrowLeftKey:function(e){y(e.target.value)&&this.$filled&&(this.focusedItemIndex=this.focusedItemIndex===-1?this.d_value.length-1:this.focusedItemIndex<1?0:this.focusedItemIndex-1,e.preventDefault())},onArrowRightKey:function(e){this.focusedItemIndex!==-1&&(this.focusedItemIndex++,this.focusedItemIndex>this.d_value.length-1&&(this.focusedItemIndex=-1),e.preventDefault())},onBackspaceKey:function(e){if(b(this.d_value)&&!e.target.value){var t=this.focusedItemIndex===-1?this.d_value.length-1:this.focusedItemIndex;this.removeItem(e,t)}},onDeleteKey:function(e){this.focusedItemIndex===-1||e.target.value||this.removeItem(e,this.focusedItemIndex)},onEnterKey:function(e){if(!(e.defaultPrevented||this.isOptionSelectionPending())){var t=e.target.value;t&&t.trim().length&&(e.preventDefault(),this.addItem(e,t))}},isOptionSelectionPending:function(){var e=this.$refs.autocomplete;return this.typeahead&&e?.overlayVisible&&e?.focusedOptionIndex!==-1},onTabKey:function(e){if(this.addOnTab){var t=e.target.value;t&&t.trim().length&&this.addItem(e,t)}}},computed:{delimiterRegex:function(){return this.delimiter?this.delimiter instanceof RegExp?this.delimiter:new RegExp(this.delimiter.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)):null},hiddenInputValue:function(){return(this.d_value||[]).join(`,`)},focusedItemId:function(){return this.focusedItemIndex===-1?null:`${this.$id}_inputtags_item_${this.focusedItemIndex}`},emptyMessageText:function(){var e;return this.emptyMessage||((e=this.$primevue)==null||(e=e.config)==null||(e=e.locale)==null?void 0:e.emptyMessage)||``},emptySearchMessageText:function(){var e;return this.emptySearchMessage||((e=this.$primevue)==null||(e=e.config)==null||(e=e.locale)==null?void 0:e.emptySearchMessage)||``},containerDataP:function(){return x(O({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant===`filled`,empty:!this.$filled},this.size,this.size))}},components:{Chip:S,AutoComplete:w}},R=[`aria-label`,`aria-labelledby`,`aria-activedescendant`,`data-p`],z=[`name`,`value`];function B(g,_,v,y,b,x){var S=a(`Chip`),C=a(`AutoComplete`);return n(),d(`div`,t({ref:`container`,class:g.cx(`root`),role:`listbox`,"aria-orientation":`horizontal`,"aria-label":g.ariaLabel,"aria-labelledby":g.ariaLabelledby,"aria-activedescendant":b.focused&&x.focusedItemId?x.focusedItemId:void 0,onClick:_[6]||=function(){return x.onContainerClick&&x.onContainerClick.apply(x,arguments)},"data-p":x.containerDataP},g.ptmi(`root`)),[(n(!0),d(f,null,h(g.d_value,function(n,i){return e(g.$slots,`chip`,{key:`${i}_${n}`,class:r(g.cx(`item`,{i})),value:n,index:i,chipProps:x.getChipProps(n,i),removeCallback:function(e){return x.removeItem(e,i)}},function(){return[m(S,t({label:n,removable:``,unstyled:g.unstyled,onRemove:function(e){return x.removeItem(e,i)},pt:g.ptm(`pcChip`)},{ref_for:!0},x.getChipProps(n,i)),{removeicon:o(function(){return[e(g.$slots,`chipicon`,{class:r(g.cx(`chipIcon`)),index:i,removeCallback:function(e){return x.removeItem(e,i)}})]}),_:2},1040,[`label`,`unstyled`,`onRemove`,`pt`])]})}),128)),m(C,{ref:`autocomplete`,modelValue:b.inputValue,"onUpdate:modelValue":_[0]||=function(e){return b.inputValue=e},suggestions:g.suggestions,typeahead:g.typeahead,optionLabel:g.optionLabel,optionDisabled:g.optionDisabled,optionGroupLabel:g.optionGroupLabel,optionGroupChildren:g.optionGroupChildren,scrollHeight:g.scrollHeight,placeholder:g.placeholder,dataKey:g.dataKey,minLength:g.minLength,delay:g.delay,appendTo:g.appendTo,inputId:g.inputId,inputStyle:g.inputStyle,inputClass:[g.inputClass,g.cx(`pcInputText`)],inputProps:g.inputProps,overlayStyle:g.overlayStyle,overlayClass:g.overlayClass,autoOptionFocus:g.autoOptionFocus,focusOnHover:g.focusOnHover,searchMessage:g.searchMessage,emptySearchMessage:g.emptySearchMessage,emptyMessage:g.emptyMessage,showEmptyMessage:g.showEmptyMessage,ariaLabel:g.ariaLabel,ariaLabelledby:g.ariaLabelledby,disabled:g.disabled,invalid:g.$invalid,variant:g.variant,unstyled:g.unstyled,class:r(g.cx(`pcAutoComplete`)),pt:g.ptm(`pcAutoComplete`),onFocus:x.onInputFocus,onBlur:x.onInputBlur,onKeydown:x.onInputKeyDown,onPaste:x.onInputPaste,onComplete:_[1]||=function(e){return g.$emit(`complete`,e)},onOptionSelect:x.onOptionSelect,onBeforeShow:_[2]||=function(e){return g.$emit(`before-show`)},onShow:_[3]||=function(e){return g.$emit(`show`)},onBeforeHide:_[4]||=function(e){return g.$emit(`before-hide`)},onHide:_[5]||=function(e){return g.$emit(`hide`)}},c({empty:o(function(){return[b.inputValue&&b.inputValue.length?e(g.$slots,`emptysearch`,{},function(){return[s(l(x.emptySearchMessageText),1)]},void 0,0):e(g.$slots,`empty`,{},function(){return[s(l(x.emptyMessageText),1)]},void 0,1)]}),_:2},[g.$slots.option?{name:`option`,fn:o(function(t){return[e(g.$slots,`option`,u(i(t)))]}),key:`0`}:void 0,g.$slots.optiongroup?{name:`optiongroup`,fn:o(function(t){return[e(g.$slots,`optiongroup`,u(i(t)))]}),key:`1`}:void 0,g.$slots.header?{name:`header`,fn:o(function(t){return[e(g.$slots,`header`,u(i(t)))]}),key:`2`}:void 0,g.$slots.footer?{name:`footer`,fn:o(function(t){return[e(g.$slots,`footer`,u(i(t)))]}),key:`3`}:void 0]),1032,`modelValue.suggestions.typeahead.optionLabel.optionDisabled.optionGroupLabel.optionGroupChildren.scrollHeight.placeholder.dataKey.minLength.delay.appendTo.inputId.inputStyle.inputClass.inputProps.overlayStyle.overlayClass.autoOptionFocus.focusOnHover.searchMessage.emptySearchMessage.emptyMessage.showEmptyMessage.ariaLabel.ariaLabelledby.disabled.invalid.variant.unstyled.class.pt.onFocus.onBlur.onKeydown.onPaste.onOptionSelect`.split(`.`)),p(`input`,t({type:`hidden`,name:g.$formName,value:x.hiddenInputValue},g.ptm(`hiddenInput`),{"data-p-hidden-accessible":!0}),null,16,z)],16,R)}L.render=B;export{L as default};