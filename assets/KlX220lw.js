import{B as e,D as t,I as n,Ot as r,S as i,U as a,b as o,d as s,dt as c,f as l,kt as u,p as d,r as f,u as p,z as m}from"./C59ukViC.js";import{s as h}from"./CjgVaOcC.js";import{n as g}from"./GUbs_UsO.js";import{t as _}from"./C5STy1Vp.js";import{t as v}from"./Dee_RTYz.js";import{t as y}from"./9WzpAW3b.js";var b={name:`star`,meta:{tags:[`star`,`favorite`,`rate`,`like`,`highlight`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10.0001 1.25C10.2856 1.25006 10.5467 1.41196 10.673 1.66797L13.0968 6.58301L18.5177 7.36816C18.8 7.40916 19.0348 7.60664 19.1232 7.87793C19.2115 8.14931 19.1379 8.44712 18.9337 8.64648L15.0148 12.4707L15.9396 17.874C15.9875 18.1551 15.8714 18.4388 15.6408 18.6064C15.41 18.7741 15.1043 18.7965 14.8517 18.6641L10.0001 16.1162L5.14858 18.6641C4.89599 18.7967 4.59033 18.7741 4.35951 18.6064C4.12879 18.4388 4.01278 18.1551 4.06069 17.874L4.98354 12.4717L1.06655 8.64648C0.862294 8.4471 0.788738 8.14934 0.877092 7.87793C0.96549 7.60654 1.20009 7.40907 1.48256 7.36816L6.90248 6.58301L9.32729 1.66797L9.381 1.57715C9.51942 1.37444 9.75021 1.25 10.0001 1.25ZM8.0724 7.60156C7.96309 7.82314 7.75151 7.97734 7.50698 8.0127L3.20131 8.63477L6.31362 11.6729C6.4899 11.8449 6.57079 12.0931 6.52944 12.3359L5.79408 16.6299L9.65151 14.6055L9.73549 14.5684C9.93448 14.4933 10.1579 14.5053 10.3488 14.6055L14.2052 16.6299L13.4708 12.3359C13.4295 12.0931 13.5094 11.8449 13.6857 11.6729L16.798 8.63477L12.4923 8.0127C12.2479 7.97727 12.0362 7.82306 11.9269 7.60156L9.99916 3.69531L8.0724 7.60156Z`,fill:`currentColor`,key:`wt5vek`}]]},x=o({name:`Star`,inheritAttrs:!1,__name:`star`,setup(e){let{Icon:t}=v(b);return(e,r)=>(n(),s(c(t),u(i(e.$attrs)),null,16))}}),S={name:`star-fill`,meta:{tags:[`star-fill`,`favorite`,`rate`,`like`,`full-star`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10.0003 1.25C10.2857 1.25012 10.5469 1.41201 10.6732 1.66797L13.097 6.58301L18.5179 7.36816C18.8002 7.40922 19.035 7.60669 19.1234 7.87793C19.2116 8.14926 19.1381 8.44713 18.9339 8.64648L15.015 12.4707L15.9398 17.874C15.9876 18.155 15.8715 18.4388 15.6409 18.6064C15.4102 18.7741 15.1044 18.7965 14.8519 18.6641L10.0003 16.1162L5.14876 18.6641C4.89621 18.7966 4.5905 18.774 4.3597 18.6064C4.12897 18.4388 4.01296 18.1551 4.06087 17.874L4.98372 12.4717L1.06673 8.64648C0.862475 8.4471 0.78892 8.14934 0.877274 7.87793C0.965683 7.60656 1.20029 7.40906 1.48274 7.36816L6.90266 6.58301L9.32747 1.66797L9.38118 1.57715C9.51961 1.37448 9.75042 1.25 10.0003 1.25Z`,fill:`currentColor`,key:`ix0gw9`}]]},C=o({name:`StarFill`,inheritAttrs:!1,__name:`star-fill`,setup(e){let{Icon:t}=v(S);return(e,r)=>(n(),s(c(t),u(i(e.$attrs)),null,16))}}),w=g.extend({name:`rating`,style:`
    .p-rating {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: dt('rating.gap');
    }

    .p-rating[data-orientation="vertical"] {
        flex-direction: column;
    }

    .p-rating-option {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        outline-color: transparent;
        border-radius: 50%;
        color: dt('rating.icon.color');
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
    }

    .p-rating-option.p-focus-visible {
        box-shadow: dt('rating.focus.ring.shadow');
        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');
        outline-offset: dt('rating.focus.ring.offset');
    }

    .p-rating[data-disabled] .p-rating-option,
    .p-rating[data-readonly] .p-rating-option {
        cursor: default;
    }

    .p-rating:not([data-disabled]) .p-rating-option:hover,
    .p-rating:not([data-readonly]) .p-rating-option:hover {
        color: dt('rating.icon.hover.color');
    }

    .p-rating-option[data-highlighted] {
        color: dt('rating.icon.active.color');
    }

    .p-rating-option svg,
    .p-rating-option i {
        font-size: dt('rating.icon.size');
        width: dt('rating.icon.size');
        height: dt('rating.icon.size');
    }

    .p-rating-on-icon {
        display: flex;
        position: absolute;
        inset: 0;
        overflow: hidden;
        z-index: 1;
        clip-path: inset(0 100% 0 0);
    }

    .p-rating-option[data-highlighted] .p-rating-on-icon {
        clip-path: none;
    }

    .p-rating-option[data-half] .p-rating-on-icon {
        clip-path: inset(0 50% 0 0);
    }

    .p-rating-on-icon[data-orientation="vertical"] {
        clip-path: inset(0 0 100% 0);
    }

    .p-rating-option[data-highlighted] .p-rating-on-icon[data-orientation="vertical"] {
        clip-path: none;
    }

    .p-rating-option[data-half] .p-rating-on-icon[data-orientation="vertical"] {
        clip-path: inset(0 0 50% 0);
    }

    .p-rating-off-icon {
        display: flex;
    }
`,classes:{root:function(e){var t=e.props;return[`p-rating p-component`,{"p-disabled":t.disabled,"p-readonly":t.readonly}]},option:`p-rating-option`,onIcon:`p-rating-on-icon`,offIcon:`p-rating-off-icon`}}),T={name:`Rating`,extends:{name:`BaseRating`,extends:y,props:{readonly:{type:Boolean,default:!1},stars:{type:Number,default:5},allowHalf:{type:Boolean,default:!1},orientation:{type:String,default:`horizontal`},onIcon:{type:String,default:void 0},offIcon:{type:String,default:void 0}},style:w,provide:function(){return{$pcRating:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],optionEls:null,data:function(){return{hovering:!1,hoveringValue:0}},beforeUpdate:function(){this.optionEls=null},methods:{getPTOptions:function(e,t){return this.ptm(e,{context:{highlighted:this.isHighlighted(t),half:this.isHalf(t),checked:this.isChecked(t)}})},optionRef:function(e,t){this.optionEls||=[],this.optionEls[t]=e},startHover:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.d_value??0;!this.disabled&&!this.readonly&&(this.hoveringValue=e,this.hovering=!0)},stopHover:function(){!this.disabled&&!this.readonly&&(this.hovering=!1,this.hoveringValue=0)},resolvePointerValue:function(e,t,n){if(this.allowHalf&&t){var r=t.getBoundingClientRect();return(this.orientation===`vertical`?e.clientY<r.top+r.height/2:e.clientX<r.left+r.width/2)?n+.5:n+1}return n+1},resolveSelectedValue:function(e){return this.d_value===e?null:e},updateValue:function(e,t){this.writeValue(t,e),this.$emit(`change`,{originalEvent:e,value:t})},onPointerEnter:function(){this.disabled||this.readonly||this.startHover()},onPointerMove:function(){!this.disabled&&!this.readonly&&!this.hovering&&this.startHover()},onPointerLeave:function(){this.disabled||this.readonly||this.stopHover()},onFocusIn:function(e){if(!(this.disabled||this.readonly)){var t=e.target;t&&t.type===`radio`&&t.name===this.inputName&&(this.startHover(parseFloat(t.value)),this.$emit(`focus`,e))}},onFocusOut:function(e){if(!(this.disabled||this.readonly)&&!e.currentTarget.contains(e.relatedTarget)){var t,n;this.stopHover(),(t=(n=this.formField).onBlur)==null||t.call(n),this.$emit(`blur`,e)}},onIconPointerMove:function(e,t){this.disabled||this.readonly||this.startHover(this.resolvePointerValue(e,this.optionEls?.[t],t))},onIconClick:function(e,t){this.disabled||this.readonly||this.updateValue(e,this.resolveSelectedValue(this.resolvePointerValue(e,this.optionEls?.[t],t)))},onInputChange:function(e,t){this.disabled||this.readonly||this.updateValue(e,this.resolveSelectedValue(t))},starAriaLabel:function(e){var t,n=(t=this.$primevue)==null||(t=t.config)==null||(t=t.locale)==null?void 0:t.aria;return n?e===1?n.star:n.stars.replace(/{star}/g,e):String(e)}},computed:{inputName:function(){return this.name||_(`rating-`)},activeValue:function(){return this.hovering?this.hoveringValue:this.d_value??0},isHighlighted:function(){var e=this;return function(t){var n=t-1;return n>=0&&e.activeValue>n}},isHalf:function(){var e=this;return function(t){var n=t-1;return e.allowHalf&&n>=0&&e.activeValue>n&&e.activeValue===n+.5}},isChecked:function(){var e=this;return function(t){var n=t-1;return n>=0&&(e.activeValue===n+1||e.allowHalf&&e.activeValue===n+.5)}}},components:{StarFill:C,Star:x}},E=[`data-orientation`,`data-disabled`,`data-readonly`],D=[`data-index`,`data-highlighted`,`data-half`,`data-checked`],O=[`name`,`value`,`checked`,`disabled`,`readonly`,`aria-readonly`,`aria-label`,`onChange`],k=[`name`,`value`,`checked`,`disabled`,`readonly`,`aria-readonly`,`aria-label`,`onChange`],A=[`data-orientation`,`onPointermove`,`onClick`],j=[`onPointermove`,`onClick`];function M(i,o,c,u,g,_){return n(),d(`span`,t({class:i.cx(`root`),"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,"data-readonly":i.readonly?``:void 0},i.ptmi(`root`),{onPointerenter:o[2]||=function(){return _.onPointerEnter&&_.onPointerEnter.apply(_,arguments)},onPointermove:o[3]||=function(){return _.onPointerMove&&_.onPointerMove.apply(_,arguments)},onPointerleave:o[4]||=function(){return _.onPointerLeave&&_.onPointerLeave.apply(_,arguments)},onFocusin:o[5]||=function(){return _.onFocusIn&&_.onFocusIn.apply(_,arguments)},onFocusout:o[6]||=function(){return _.onFocusOut&&_.onFocusOut.apply(_,arguments)}}),[(n(!0),d(f,null,m(i.stars,function(c){return n(),d(`span`,t({key:c,ref_for:!0,ref:function(e){return _.optionRef(e,c-1)},class:i.cx(`option`),"data-index":c-1,"data-highlighted":_.isHighlighted(c)?``:void 0,"data-half":_.isHalf(c)?``:void 0,"data-checked":_.isChecked(c)?``:void 0},{ref_for:!0},_.getPTOptions(`option`,c)),[i.allowHalf?(n(),d(`input`,t({key:0,type:`radio`,class:`p-hidden-accessible`,name:_.inputName,value:c-.5,checked:i.d_value===c-.5,disabled:i.disabled,readonly:i.readonly,"aria-readonly":i.readonly||void 0,"aria-label":_.starAriaLabel(c-.5),onChange:function(e){return _.onInputChange(e,c-.5)},"data-p-hidden-accessible":!0},{ref_for:!0},i.ptm(`halfInput`)),null,16,O)):l(``,!0),p(`input`,t({type:`radio`,class:`p-hidden-accessible`,name:_.inputName,value:c,checked:i.d_value===c,disabled:i.disabled,readonly:i.readonly,"aria-readonly":i.readonly||void 0,"aria-label":_.starAriaLabel(c),onChange:function(e){return _.onInputChange(e,c)},"data-p-hidden-accessible":!0},{ref_for:!0},i.ptm(`fullInput`)),null,16,k),p(`span`,t({class:i.cx(`onIcon`),"data-orientation":i.orientation,onPointermove:function(e){return _.onIconPointerMove(e,c-1)},onClick:function(e){return _.onIconClick(e,c-1)},onMousedown:o[0]||=h(function(){},[`prevent`])},{ref_for:!0},i.ptm(`onIcon`)),[e(i.$slots,`onicon`,{value:c},function(){return[(n(),s(a(i.onIcon?`span`:`StarFill`),{class:r(i.onIcon)},null,8,[`class`]))]})],16,A),p(`span`,t({class:i.cx(`offIcon`),onPointermove:function(e){return _.onIconPointerMove(e,c-1)},onClick:function(e){return _.onIconClick(e,c-1)},onMousedown:o[1]||=h(function(){},[`prevent`])},{ref_for:!0},i.ptm(`offIcon`)),[e(i.$slots,`officon`,{value:c},function(){return[(n(),s(a(i.offIcon?`span`:`Star`),{class:r(i.offIcon)},null,8,[`class`]))]})],16,j)],16,D)}),128))],16,E)}T.render=M;export{T as default};