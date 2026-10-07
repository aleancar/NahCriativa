import{B as e,D as t,I as n,p as r}from"./C59ukViC.js";import{n as i}from"./GUbs_UsO.js";import{t as a}from"./D5ph-QdN.js";var o=i.extend({name:`buttongroup`,style:`
    .p-buttongroup {
        display: inline-flex;
        border-radius: dt('button.border.radius');
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }

    .p-buttongroup:has(.p-button-raised) {
        box-shadow: dt('button.raised.shadow');
    }

    .p-buttongroup .p-button-raised {
        box-shadow: none;
    }
`,classes:{root:`p-buttongroup p-component`}}),s={name:`ButtonGroup`,extends:{name:`BaseButtonGroup`,extends:a,style:o,provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},inheritAttrs:!1};function c(i,a,o,s,c,l){return n(),r(`span`,t({class:i.cx(`root`),role:`group`},i.ptmi(`root`)),[e(i.$slots,`default`)],16)}s.render=c;export{s as default};