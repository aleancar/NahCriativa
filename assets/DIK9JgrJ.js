import{B as e,D as t,I as n,Ot as r,U as i,V as a,ct as o,d as s,f as c,jt as l,p as u,r as d,u as f,v as p,z as m}from"./C59ukViC.js";import{gt as h,n as g}from"./GUbs_UsO.js";import{t as _}from"./CEAV8Kzl.js";import{t as v}from"./D5ph-QdN.js";var y=g.extend({name:`metergroup`,style:`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-text {
        font-weight: dt('metergroup.label.text.font.weight');
        font-size: dt('metergroup.label.text.font.size');
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`,classes:{root:function(e){var t=e.props;return[`p-metergroup p-component`,{"p-metergroup-horizontal":t.orientation===`horizontal`,"p-metergroup-vertical":t.orientation===`vertical`}]},meters:`p-metergroup-meters`,meter:`p-metergroup-meter`,labelList:function(e){var t=e.props;return[`p-metergroup-label-list`,{"p-metergroup-label-list-vertical":t.labelOrientation===`vertical`,"p-metergroup-label-list-horizontal":t.labelOrientation===`horizontal`}]},label:`p-metergroup-label`,labelIcon:`p-metergroup-label-icon`,labelMarker:`p-metergroup-label-marker`,labelText:`p-metergroup-label-text`}}),b={name:`MeterGroup`,extends:v,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},style:y,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function x(e){"@babel/helpers - typeof";return x=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},x(e)}function S(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=w(e,`string`);return x(t)==`symbol`?t:t+``}function w(e,t){if(x(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(x(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var T={name:`MeterGroupLabel`,hostName:`MeterGroup`,extends:v,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},inject:[`$pcMeterGroup`],methods:{resolveIcon:function(e){return h(e)?e:o(e)},isComponentIcon:function(e){return!!e&&!h(e)}},computed:{dataP:function(){return _(S({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},E=[`data-p`];function D(a,o,c,p,h,g){return n(),u(`ol`,t({class:a.cx(`labelList`),"data-p":g.dataP},a.ptm(`labelList`)),[(n(!0),u(d,null,m(c.value,function(o,c){return n(),u(`li`,t({key:c+`_label`,class:a.cx(`label`)},{ref_for:!0},a.ptm(`label`)),[e(a.$slots,`icon`,{value:o,class:r(a.cx(`labelIcon`))},function(){return[g.isComponentIcon(o.icon)?(n(),s(i(g.resolveIcon(o.icon)),t({key:0,class:a.cx(`labelIcon`),style:{color:o.color}},{ref_for:!0},a.ptm(`labelIcon`)),null,16,[`class`,`style`])):o.icon?(n(),u(`i`,t({key:1,class:[o.icon,a.cx(`labelIcon`)],style:{color:o.color}},{ref_for:!0},a.ptm(`labelIcon`)),null,16)):(n(),u(`span`,t({key:2,class:a.cx(`labelMarker`),style:{backgroundColor:o.color}},{ref_for:!0},a.ptm(`labelMarker`)),null,16))]}),f(`span`,t({class:a.cx(`labelText`)},{ref_for:!0},a.ptm(`labelText`)),l(o.label)+` (`+l(a.$parentInstance.percentValue(o.value))+`)`,17)],16)}),128))],16,E)}T.render=D;function O(e){"@babel/helpers - typeof";return O=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},O(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?k(Object(n),!0).forEach(function(t){j(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e,t,n){return(t=M(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=N(e,`string`);return O(t)==`symbol`?t:t+``}function N(e,t){if(O(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(O(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var P={name:`MeterGroup`,extends:b,inheritAttrs:!1,methods:{getPTOptions:function(e,t,n){return this.ptm(e,{context:{value:t,index:n}})},percent:function(){var e=((arguments.length>0&&arguments[0]!==void 0?arguments[0]:0)-this.min)/(this.max-this.min)*100;return Math.max(0,Math.min(100,e))},roundedPercent:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.round(this.percent(e))},percentValue:function(e){return this.roundedPercent(e)+`%`},meterCalculatedStyles:function(e){return{backgroundColor:e.color,width:this.orientation===`horizontal`&&this.percent(e.value)+`%`,height:this.orientation===`vertical`&&this.percent(e.value)+`%`}},resolveIcon:function(e){return h(e)?e:o(e)},isComponentIcon:function(e){return!!e&&!h(e)}},computed:{labelValue:function(){var e=this;return Array.isArray(this.value)?this.value.map(function(t){return t!=null&&t.icon?A(A({},t),{},{icon:e.resolveIcon(t.icon)}):t}):this.value},totalPercent:function(){return this.roundedPercent(this.value.reduce(function(e,t){return e+t.value},0))},percentages:function(){var e=0,t=[];return this.value.forEach(function(n){e+=n.value,t.push(e)}),t},dataP:function(){return _(j({},this.orientation,this.orientation))}},components:{MeterGroupLabel:T}},F=[`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`data-p`],I=[`data-p`],L=[`data-p`];function R(i,o,s,l,h,g){var _=a(`MeterGroupLabel`);return n(),u(`div`,t({class:i.cx(`root`),role:`meter`,"aria-valuemin":i.min,"aria-valuemax":i.max,"aria-valuenow":g.totalPercent,"data-p":g.dataP},i.ptmi(`root`)),[i.labelPosition===`start`?e(i.$slots,`label`,{value:g.labelValue,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[p(_,{value:i.value,labelPosition:i.labelPosition,labelOrientation:i.labelOrientation,unstyled:i.unstyled,pt:i.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]},void 0,0):c(``,!0),e(i.$slots,`start`,{value:i.value,totalPercent:g.totalPercent,percentages:g.percentages}),f(`div`,t({class:i.cx(`meters`),"data-p":g.dataP},i.ptm(`meters`)),[(n(!0),u(d,null,m(i.value,function(a,o){return e(i.$slots,`meter`,{value:a,index:o,class:r(i.cx(`meter`)),orientation:i.orientation,size:g.percentValue(a.value),totalPercent:g.totalPercent},function(){return[g.roundedPercent(a.value)?(n(),u(`span`,t({key:0,class:i.cx(`meter`),style:g.meterCalculatedStyles(a),"data-p":g.dataP},{ref_for:!0},g.getPTOptions(`meter`,a,o)),null,16,L)):c(``,!0)]},void 0,o)}),128))],16,I),e(i.$slots,`end`,{value:i.value,totalPercent:g.totalPercent,percentages:g.percentages}),i.labelPosition===`end`?e(i.$slots,`label`,{value:g.labelValue,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[p(_,{value:i.value,labelPosition:i.labelPosition,labelOrientation:i.labelOrientation,unstyled:i.unstyled,pt:i.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]},void 0,1):c(``,!0)],16,F)}P.render=R;export{P as default};