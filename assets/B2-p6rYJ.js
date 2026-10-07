import{B as e,D as t,I as n,f as r,p as i,u as a}from"./C59ukViC.js";import{n as o}from"./GUbs_UsO.js";import{t as s}from"./D5ph-QdN.js";var c=o.extend({name:`card`,style:`
    .p-card {
        display: block;
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
        font-size: dt('card.subtitle.font.size');
        font-weight: dt('card.subtitle.font.weight');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),l={name:`Card`,extends:{name:`BaseCard`,extends:s,style:c,provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function u(o,s,c,l,u,d){return n(),i(`div`,t({class:o.cx(`root`)},o.ptmi(`root`)),[o.$slots.header?(n(),i(`div`,t({key:0,class:o.cx(`header`)},o.ptm(`header`)),[e(o.$slots,`header`)],16)):r(``,!0),a(`div`,t({class:o.cx(`body`)},o.ptm(`body`)),[o.$slots.title||o.$slots.subtitle?(n(),i(`div`,t({key:0,class:o.cx(`caption`)},o.ptm(`caption`)),[o.$slots.title?(n(),i(`div`,t({key:0,class:o.cx(`title`)},o.ptm(`title`)),[e(o.$slots,`title`)],16)):r(``,!0),o.$slots.subtitle?(n(),i(`div`,t({key:1,class:o.cx(`subtitle`)},o.ptm(`subtitle`)),[e(o.$slots,`subtitle`)],16)):r(``,!0)],16)):r(``,!0),a(`div`,t({class:o.cx(`content`)},o.ptm(`content`)),[e(o.$slots,`content`)],16),o.$slots.footer?(n(),i(`div`,t({key:1,class:o.cx(`footer`)},o.ptm(`footer`)),[e(o.$slots,`footer`)],16)):r(``,!0)],16)],16)}l.render=u;export{l as default};