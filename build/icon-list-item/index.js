!function(){"use strict";var e,t={221:function(){var e=window.wp.element,t=window.wp.blocks,n=window.wp.components,o=window.wp.i18n,r=window.wp.blockEditor,i=window.wp.data,c=JSON.parse('{"u2":"themezee/icon-list-item"}');const l=(0,e.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},(0,e.createElement)(n.Path,{d:"M20.95 31.95 35.4 17.5l-2.15-2.15-12.3 12.3L15 21.7l-2.15 2.15ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30ZM9 9v30V9Z"}));(0,t.registerBlockType)(c.u2,{icon:l,edit:function(n){let{attributes:c,setAttributes:l,onReplace:a,mergeBlocks:s,clientId:u}=n;const{placeholder:p,content:h,layout:m}=c,w=(0,e.useRef)(),f=(0,e.useRef)(),v=(0,r.useBlockProps)({ref:w}),{getBlock:d}=(0,i.useSelect)(r.store),k=(0,r.useInnerBlocksProps)(v,{allowedBlocks:["themezee/icon"],template:[["themezee/icon",{iconName:"check",iconLibrary:"wordpress",iconSVG:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"></path></svg>',iconWidth:"1.2em",iconHeight:"1.2em"}]],__experimentalLayout:m,renderAppender:!1});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("li",k,k.children,(0,e.createElement)(r.RichText,{ref:f,identifier:"content",tagName:"div",onChange:e=>l({content:e}),value:h,"aria-label":(0,o.__)("List text","themezee-icon-list-block"),placeholder:p||(0,o.__)("List","themezee-icon-list-block"),onSplit:e=>{const n=d(u).innerBlocks;return(0,t.createBlock)("themezee/icon-list-item",{...c,content:e},n.length>0?[(0,t.createBlock)(n[0].name,n[0].attributes)]:[])},onReplace:a,onMerge:s})))},save:function(t){let{attributes:n}=t;return(0,e.createElement)("li",r.useBlockProps.save(),(0,e.createElement)(r.InnerBlocks.Content,null),(0,e.createElement)(r.RichText.Content,{value:n.content}))},merge(e,t){return{...e,content:e.content+t.content}}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=function(t,n,r,i){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,a=0;a<n.length;a++)(!1&i||c>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(l=!1,i<c&&(c=i));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={214:0,615:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,c=n[0],l=n[1],a=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(a)var u=a(o)}for(t&&t(n);s<c.length;s++)i=c[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self.webpackChunkthemezee_icon_list_block=self.webpackChunkthemezee_icon_list_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[615],(function(){return o(221)}));r=o.O(r)}();