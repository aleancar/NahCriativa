import{B as e,D as t,I as n,Ot as r,U as i,V as a,ct as o,d as s,f as c,jt as l,p as u,r as d,u as f,v as p,z as m}from"./LD8_IYgO.js";import{gt as h,n as g}from"./EUCZpDVQ.js";import{t as _}from"./C5PlsQHH.js";import{t as v}from"./-iPzC4Cd.js";var y=g.extend({name:`breadcrumb`,style:`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
        font-weight: dt('breadcrumb.item.label.font.weight');
        font-size: dt('breadcrumb.item.label.font.size');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover,
    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
        font-weight: dt('breadcrumb.item.label.font.weight');
        font-size: dt('breadcrumb.item.label.font.size');
    }

    .p-breadcrumb-item-icon,
    .p-breadcrumb-item-link svg,
    .p-breadcrumb-item-link i {
        color: dt('breadcrumb.item.icon.color');
        width: dt('breadcrumb.item.icon.size');
        height: dt('breadcrumb.item.icon.size');
        transition: inherit;
    }

    .p-breadcrumb-item-link i {
        font-size: dt('breadcrumb.item.icon.size');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon,
    .p-breadcrumb-item-link:hover svg,
    .p-breadcrumb-item-link:hover i {
        color: dt('breadcrumb.item.icon.hover.color');
    }

    .p-breadcrumb-ellipsis {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: dt('breadcrumb.item.icon.color');
    }
`,classes:{root:`p-breadcrumb p-component`,list:`p-breadcrumb-list`,homeItem:`p-breadcrumb-home-item`,separator:`p-breadcrumb-separator`,separatorIcon:`p-breadcrumb-separator-icon`,item:function(e){return[`p-breadcrumb-item`,{"p-disabled":e.instance.disabled()}]},itemLink:`p-breadcrumb-item-link`,itemIcon:`p-breadcrumb-item-icon`,itemLabel:`p-breadcrumb-item-label`}}),b={name:`BaseBreadcrumb`,extends:_,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:y,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},x={name:`BreadcrumbItem`,hostName:`Breadcrumb`,extends:_,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,n=e.url,r=typeof window<`u`?window.location.pathname:``;return t===r||n===r?`page`:void 0},resolveIcon:function(e){return h(e)?e:o(e)},isComponentIcon:function(e){return!!e&&!h(e)}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:t({class:this.cx(`itemLink`),"aria-current":this.isCurrentUrl(),onClick:function(t){return e.onClick(t)}},this.ptm(`itemLink`,this.ptmOptions)),icon:t({class:[this.cx(`itemIcon`),h(this.item.icon)?this.item.icon:void 0]},this.ptm(`itemIcon`,this.ptmOptions)),label:t({class:this.cx(`itemLabel`)},this.ptm(`itemLabel`,this.ptmOptions))}}}},S=[`href`,`target`,`aria-current`];function C(e,a,o,d,f,p){return p.visible()?(n(),u(`li`,t({key:0,class:[e.cx(`item`),o.item.class]},e.ptm(`item`,p.ptmOptions)),[o.templates.item?(n(),s(i(o.templates.item),{key:1,item:o.item,label:p.label(),icon:o.item.icon?p.resolveIcon(o.item.icon):void 0,props:p.getMenuItemProps},null,8,[`item`,`label`,`icon`,`props`])):(n(),u(`a`,t({key:0,href:o.item.url||`#`,class:e.cx(`itemLink`),target:o.item.target,"aria-current":p.isCurrentUrl(),onClick:a[0]||=function(){return p.onClick&&p.onClick.apply(p,arguments)}},e.ptm(`itemLink`,p.ptmOptions)),[o.templates&&o.templates.itemicon?(n(),s(i(o.templates.itemicon),{key:0,item:o.item,class:r(e.cx(`itemIcon`,p.ptmOptions))},null,8,[`item`,`class`])):p.isComponentIcon(o.item.icon)?(n(),s(i(p.resolveIcon(o.item.icon)),t({key:1,class:e.cx(`itemIcon`)},e.ptm(`itemIcon`,p.ptmOptions)),null,16,[`class`])):o.item.icon?(n(),u(`span`,t({key:2,class:[e.cx(`itemIcon`),o.item.icon]},e.ptm(`itemIcon`,p.ptmOptions)),null,16)):c(``,!0),o.item.label?(n(),u(`span`,t({key:3,class:e.cx(`itemLabel`)},e.ptm(`itemLabel`,p.ptmOptions)),l(p.label()),17)):c(``,!0)],16,S))],16)):c(``,!0)}x.render=C;var w={name:`Breadcrumb`,extends:b,inheritAttrs:!1,components:{BreadcrumbItem:x,ChevronRight:v}};function T(r,i,o,l,h,g){var _=a(`BreadcrumbItem`),v=a(`ChevronRight`);return n(),u(`nav`,t({class:r.cx(`root`)},r.ptmi(`root`)),[f(`ol`,t({class:r.cx(`list`)},r.ptm(`list`)),[r.home?(n(),s(_,t({key:0,item:r.home,class:r.cx(`homeItem`),templates:r.$slots,pt:r.pt,unstyled:r.unstyled},r.ptm(`homeItem`)),null,16,[`item`,`class`,`templates`,`pt`,`unstyled`])):c(``,!0),(n(!0),u(d,null,m(r.model,function(i,a){return n(),u(d,{key:i.label+`_`+a},[r.home||a!==0?(n(),u(`li`,t({key:0,class:r.cx(`separator`)},{ref_for:!0},r.ptm(`separator`)),[e(r.$slots,`separator`,{},function(){return[p(v,t({"aria-hidden":`true`,class:r.cx(`separatorIcon`)},{ref_for:!0},r.ptm(`separatorIcon`)),null,16,[`class`])]})],16)):c(``,!0),p(_,{item:i,index:a,templates:r.$slots,pt:r.pt,unstyled:r.unstyled},null,8,[`item`,`index`,`templates`,`pt`,`unstyled`])],64)}),128))],16)],16)}w.render=T;export{w as default};