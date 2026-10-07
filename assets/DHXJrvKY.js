import{B as e,D as t,H as n,I as r,Ot as i,U as a,V as o,X as s,Y as c,_ as l,ct as u,d,f,jt as p,p as m,r as h,u as g,v as _}from"./C59ukViC.js";import{t as v}from"./CjgVaOcC.js";import{H as y,Q as b,X as x,a as S,gt as C,n as w,nt as T,x as E}from"./GUbs_UsO.js";import{t as D}from"./1d7j-Dyg.js";import{_ as O}from"#entry";import{t as k}from"./D5ph-QdN.js";import{t as A}from"./imFFGfEM.js";import{t as j}from"./foZnPCvN.js";import{t as M}from"./CSEOBWRs.js";import{n as N}from"./DScIcIdx.js";import{t as P}from"./CgI2XZah.js";var F=w.extend({name:`confirmpopup`,style:`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
        will-change: transform;
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-message {
        color: dt('confirmpopup.message.color');
        font-weight: dt('confirmpopup.message.font.weight');
        font-size: dt('confirmpopup.message.font.size');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left', '0px'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`,classes:{root:`p-confirmpopup p-component`,content:`p-confirmpopup-content`,icon:`p-confirmpopup-icon`,message:`p-confirmpopup-message`,footer:`p-confirmpopup-footer`,pcRejectButton:`p-confirmpopup-reject-button`,pcAcceptButton:`p-confirmpopup-accept-button`}}),I={name:`ConfirmPopup`,extends:{name:`BaseConfirmPopup`,extends:k,props:{group:String},style:F,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var e=this;this.confirmListener=function(t){t&&t.group===e.group&&(e.confirmation=t,e.target=t.target,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.onHide(),e.confirmation=null},O.on(`confirm`,this.confirmListener),O.on(`close`,this.closeListener)},beforeUnmount:function(){O.off(`confirm`,this.confirmListener),O.off(`close`,this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.unbindResizeListener(),this.container&&=(D.clear(this.container),null),this.target=null,this.confirmation=null},methods:{accept:function(){this.visible&&(this.visible=!1,this.confirmation.accept&&this.confirmation.accept())},reject:function(){this.visible&&(this.visible=!1,this.confirmation.reject&&this.confirmation.reject())},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(e){(e.code===`Space`||e.code===`Enter`||e.code===`NumpadEnter`)&&(this.accept(),y(this.target),e.preventDefault())},onRejectKeydown:function(e){(e.code===`Space`||e.code===`Enter`||e.code===`NumpadEnter`)&&(this.reject(),y(this.target),e.preventDefault())},onEnter:function(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus===`accept`,this.autoFocusReject=this.confirmation.defaultFocus===`reject`,this.target=this.target||document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),D.set(`overlay`,e,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,y(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(e){D.clear(e)},alignOverlay:function(){T(this.container,this.target,!1);var e=b(this.container),t=b(this.target),n=0;e.left<t.left&&(n=t.left-e.left),this.container.style.setProperty(S(`confirmpopup.arrow.left`).name,`${n}px`),e.top<t.top&&(this.container.setAttribute(`data-p-confirmpopup-flipped`,`true`),!this.isUnstyled&&E(this.container,`p-confirmpopup-flipped`))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.visible&&e.container&&!e.container.contains(t.target)&&!e.isTargetClicked(t)?e.onHide():e.alignOverlay()},document.addEventListener(`click`,this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new A(this.target,function(){e.visible&&e.onHide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!x()&&e.onHide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},focus:function(){var e=this.container.querySelector(`[autofocus]`);e&&e.focus({preventScroll:!0})},isTargetClicked:function(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef:function(e){this.container=e},onOverlayClick:function(e){j.emit(`overlay-click`,{originalEvent:e,target:this.target})},onOverlayKeydown:function(e){e.code===`Escape`&&(O.emit(`close`,this.closeListener),y(this.target))},resolveIcon:function(e){return C(e)?e:u(e)},isComponentIcon:function(e){return!!e&&!C(e)}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var e=this.confirmation;return e.acceptLabel||e.acceptProps?.label||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e=this.confirmation;return e.rejectLabel||e.rejectProps?.label||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!=null&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!=null&&e.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:N,Portal:M},directives:{focustrap:P}},L=[`aria-modal`];function R(u,y,b,x,S,C){var w=o(`Button`),T=o(`Portal`),E=n(`focustrap`);return r(),d(T,null,{default:c(function(){return[_(v,t({name:`p-anchored-overlay`,onEnter:C.onEnter,onAfterEnter:C.onAfterEnter,onLeave:C.onLeave,onAfterLeave:C.onAfterLeave},u.ptm(`transition`)),{default:c(function(){return[S.visible?s((r(),m(`div`,t({key:0,ref:C.containerRef,role:`alertdialog`,class:u.cx(`root`),"aria-modal":S.visible,onClick:y[2]||=function(){return C.onOverlayClick&&C.onOverlayClick.apply(C,arguments)},onKeydown:y[3]||=function(){return C.onOverlayKeydown&&C.onOverlayKeydown.apply(C,arguments)}},u.ptmi(`root`)),[u.$slots.container?e(u.$slots,`container`,{message:S.confirmation,acceptCallback:C.accept,rejectCallback:C.reject},void 0,void 0,0):(r(),m(h,{key:1},[u.$slots.message?(r(),d(a(u.$slots.message),{key:1,message:S.confirmation,icon:S.confirmation.icon?C.resolveIcon(S.confirmation.icon):void 0},null,8,[`message`,`icon`])):(r(),m(`div`,t({key:0,class:u.cx(`content`)},u.ptm(`content`)),[e(u.$slots,`icon`,{},function(){return[u.$slots.icon?(r(),d(a(u.$slots.icon),{key:0,class:i(u.cx(`icon`))},null,8,[`class`])):C.isComponentIcon(S.confirmation.icon)?(r(),d(a(C.resolveIcon(S.confirmation.icon)),t({key:1,class:u.cx(`icon`)},u.ptm(`icon`)),null,16,[`class`])):S.confirmation.icon?(r(),m(`span`,t({key:2,class:[S.confirmation.icon,u.cx(`icon`)]},u.ptm(`icon`)),null,16)):f(``,!0)]}),g(`span`,t({class:u.cx(`message`)},u.ptm(`message`)),p(S.confirmation.message),17)],16)),g(`div`,t({class:u.cx(`footer`)},u.ptm(`footer`)),[_(w,t({class:[u.cx(`pcRejectButton`),S.confirmation.rejectClass],autofocus:S.autoFocusReject,unstyled:u.unstyled,size:S.confirmation.rejectProps?.size||`small`,text:S.confirmation.rejectProps?.text||!1,onClick:y[0]||=function(e){return C.reject()},onKeydown:C.onRejectKeydown},S.confirmation.rejectProps,{pt:u.ptm(`pcRejectButton`)}),{default:c(function(){return[C.rejectIcon||u.$slots.rejecticon?e(u.$slots,`rejecticon`,{},function(){return[g(`span`,t({class:C.rejectIcon},u.ptm(`pcRejectButton`).icon,{"data-pc-section":`rejectbuttonicon`}),null,16)]},void 0,0):f(``,!0),l(` `+p(C.rejectLabel),1)]}),_:3},16,[`class`,`autofocus`,`unstyled`,`size`,`text`,`onKeydown`,`pt`]),_(w,t({class:[u.cx(`pcAcceptButton`),S.confirmation.acceptClass],autofocus:S.autoFocusAccept,unstyled:u.unstyled,size:S.confirmation.acceptProps?.size||`small`,onClick:y[1]||=function(e){return C.accept()},onKeydown:C.onAcceptKeydown},S.confirmation.acceptProps,{pt:u.ptm(`pcAcceptButton`)}),{default:c(function(){return[C.acceptIcon||u.$slots.accepticon?e(u.$slots,`accepticon`,{},function(){return[g(`span`,t({class:C.acceptIcon},u.ptm(`pcAcceptButton`).icon,{"data-pc-section":`acceptbuttonicon`}),null,16)]},void 0,0):f(``,!0),l(` `+p(C.acceptLabel),1)]}),_:3},16,[`class`,`autofocus`,`unstyled`,`size`,`onKeydown`,`pt`])],16)],64))],16,L)),[[E]]):f(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:3})}I.render=R;export{I as default};