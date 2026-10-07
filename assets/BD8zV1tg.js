import{B as e,D as t,I as n,Ot as r,U as i,Y as a,d as o}from"./C59ukViC.js";import{J as s,n as c}from"./GUbs_UsO.js";import{t as l}from"./D5ph-QdN.js";var u=c.extend({name:`compare`,style:`
    .p-compare {
        display: block;
        position: relative;
        border-radius: dt('compare.border.radius');
        overflow: hidden;
    }

    .p-compare-item {
        display: block;
    }

    .p-compare-handle {
        display: block;
        background: dt('compare.handle.background');
    }

    .p-compare-handle[data-orientation="horizontal"] {
        width: dt('compare.handle.size');
        height: 100%;
    }

    .p-compare-handle[data-orientation="vertical"] {
        width: 100%;
        height: dt('compare.handle.size');
    }

    .p-compare-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        width: dt('compare.indicator.size');
        height: dt('compare.indicator.size');
        transform: translate(-50%, -50%);
        background: dt('compare.indicator.background');
        color: dt('compare.indicator.icon.color');
        cursor: pointer;
        border-radius: dt('compare.indicator.border.radius');
    }

    .p-compare-indicator svg,
    .p-compare-indicator i {
        font-size: dt('compare.indicator.icon.size');
        width: dt('compare.indicator.icon.size');
        height: dt('compare.indicator.icon.size');
    }

    .p-compare-input {
        clip-path: inset(50%);
        overflow: hidden;
        white-space: nowrap;
        border: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        margin: -1px;
        position: fixed;
        top: 0;
        left: 0;
    }

    .p-compare-handle:has(.p-compare-input:focus-visible) .p-compare-indicator {
        outline: dt('compare.indicator.focus.ring.width') dt('compare.indicator.focus.ring.style') dt('compare.indicator.focus.ring.color');
        outline-offset: dt('compare.indicator.focus.ring.offset');
    }
`,classes:{root:`p-compare p-component`,input:`p-compare-input`}}),d={name:`Compare`,extends:{name:`BaseCompare`,extends:l,props:{modelValue:{type:Number,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},orientation:{type:String,default:`horizontal`},slideOnHover:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},tabindex:{type:Number,default:void 0},ariaLabel:{type:String,default:void 0},ariaLabelledby:{type:String,default:void 0},name:{type:String,default:void 0},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:u,provide:function(){return{$pcCompare:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:modelValue`,`value-change-end`,`focus`,`blur`],data:function(){return{d_value:this.normalizeValue(this.modelValue??(this.min+this.max)/2),isDragging:!1,isHandlePointerDown:!1,dragOffsetPx:0}},watch:{modelValue:function(e){e!==void 0&&(this.d_value=this.normalizeValue(e))},min:function(){this.updateValue(this.d_value)},max:function(){this.updateValue(this.d_value)},step:function(){this.updateValue(this.d_value)}},methods:{clamp:function(e,t,n){return Math.min(Math.max(e,t),n)},getPrecision:function(e){var t=String(e);if(t.includes(`e-`))return Number(t.split(`e-`)[1]||0);var n=t.indexOf(`.`);return n>=0?t.length-n-1:0},roundToStep:function(e,t,n){if(!t)return e;var r=this.getPrecision(t),i=Math.round((e-n)/t)*t+n;return Number(i.toFixed(r))},normalizeValue:function(e){return this.clamp(this.roundToStep(Number(e??this.min),this.step,this.min),this.min,this.max)},getValuePercent:function(e){var t=this.max-this.min;return t?this.clamp((e-this.min)/t*100,0,100):0},getValueFromPointer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e.currentTarget,r=n.getBoundingClientRect(),i=this.isHorizontal?r.width:r.height;if(!i)return this.min;var a=((this.isHorizontal?e.clientX-r.left:e.clientY-r.top)-t)/i,o=this.clamp(a,0,1),c=this.isHorizontal?s(n)?1-o:o:1-o,l=this.min+c*(this.max-this.min);return this.normalizeValue(l)},updateValue:function(e){var t=this.normalizeValue(e);return t===this.d_value||(this.d_value=t,this.$emit(`update:modelValue`,t)),t},updateValueFromPointer:function(e){this.dragOffsetPx=0,this.updateValue(this.getValueFromPointer(e,0))},resetPointerState:function(){this.isDragging=!1,this.isHandlePointerDown=!1,this.dragOffsetPx=0},onPointerDown:function(e){var t,n;this.disabled||this.readonly||(e.pointerType!==`mouse`||e.button===0)&&(e.preventDefault(),(t=(n=e.currentTarget).setPointerCapture)==null||t.call(n,e.pointerId),this.isDragging=!0,this.isHandlePointerDown?this.isHandlePointerDown=!1:(this.dragOffsetPx=0,this.updateValueFromPointer(e)))},onPointerMove:function(e){this.disabled||this.readonly||(this.slideOnHover?this.updateValueFromPointer(e):this.isDragging&&(e.preventDefault(),this.updateValue(this.getValueFromPointer(e,this.dragOffsetPx))))},onPointerUp:function(e){var t,n;this.disabled||this.readonly||this.isDragging&&(e.preventDefault(),(t=(n=e.currentTarget).hasPointerCapture)!=null&&t.call(n,e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),this.resetPointerState(),this.$emit(`value-change-end`,{originalEvent:e,value:this.d_value}))},onPointerCancel:function(e){this.isDragging&&this.$emit(`value-change-end`,{originalEvent:e,value:this.d_value}),this.resetPointerState()},onLostPointerCapture:function(e){this.isDragging&&this.$emit(`value-change-end`,{originalEvent:e,value:this.d_value}),this.resetPointerState()},onHandlePointerDown:function(e){if(!(this.disabled||this.readonly)&&(e.pointerType!==`mouse`||e.button===0)){e.preventDefault();var t=e.currentTarget;if(t){var n=t.getBoundingClientRect(),r=this.isHorizontal?n.left+n.width/2:n.top+n.height/2,i=this.isHorizontal?e.clientX:e.clientY;this.dragOffsetPx=i-r}else this.dragOffsetPx=0;this.isHandlePointerDown=!0}},onInputInput:function(e){this.disabled||this.readonly||this.updateValue(Number(e.target.value))},onInputChange:function(e){if(!(this.disabled||this.readonly)){var t=this.updateValue(Number(e.target.value));this.$emit(`value-change-end`,{originalEvent:e,value:t})}},onInputFocus:function(e){this.disabled||this.readonly||this.$emit(`focus`,e)},onInputBlur:function(e){this.disabled||this.readonly||this.$emit(`blur`,e)}},computed:{isHorizontal:function(){return this.orientation===`horizontal`},attrs:function(){return t(this.a11yAttrs,this.ptmi(`root`))},a11yAttrs:function(){return{"data-pc-section":`root`,"data-orientation":this.orientation,"data-disabled":this.disabled?``:void 0,"data-invalid":this.invalid?``:void 0,"data-dragging":this.isDragging?``:void 0,onPointerdown:this.onPointerDown,onPointermove:this.onPointerMove,onPointerup:this.onPointerUp,onPointercancel:this.onPointerCancel,onLostpointercapture:this.onLostPointerCapture}}}};function f(s,c,l,u,d,f){return s.asChild?e(s.$slots,`default`,{class:r(s.cx(`root`)),a11yAttrs:f.a11yAttrs,value:d.d_value,isDragging:d.isDragging},void 0,void 0,1):(n(),o(i(s.as),t({key:0,class:s.cx(`root`)},f.attrs),{default:a(function(){return[e(s.$slots,`default`,{value:d.d_value,isDragging:d.isDragging})]}),_:3},16,[`class`]))}d.render=f;export{d as default};