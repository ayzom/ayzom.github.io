(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7286:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return i(5525)}])},5525:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return l}});var t=i(5893),s=i(6465),n=i.n(s),o=i(7294);async function c(){let e=await fetch("https://api.hashnode.com/",{headers:{"content-type":"application/json"},body:'{"operationName":null,"variables":{},"query":"{\\n  user(username: \\"arki7n\\") {\\n    publication {\\n      posts(page: 0) {\\n        title\\n        brief\\n        slug\\n        cuid\\n        coverImage\\n        dateAdded\\n      }\\n    }\\n  }\\n}\\n"}',method:"POST"}),a=await e.json();if(!a)return{notFound:!0};let{data:{user:{publication:i}}}=a;return console.log(JSON.stringify(i)),Promise.resolve({blog:i})}function d(){let[e,a]=(0,o.useState)({}),[i,s]=(0,o.useState)(!1);i||c().then(e=>{s(!0),a(e.blog.posts)});let d={year:"numeric",month:"short",day:"numeric"};return(0,t.jsxs)("div",{className:"jsx-1c5571ef9a53170d",children:[(0,t.jsxs)("div",{className:"jsx-1c5571ef9a53170d custom-width",children:[(0,t.jsx)("h1",{className:"jsx-1c5571ef9a53170d text-3xl",children:"Awesome Articles"}),(0,t.jsx)("div",{className:"jsx-1c5571ef9a53170d band pt-16",children:e.length&&e.map((e,a)=>(0,t.jsx)("div",{className:"jsx-1c5571ef9a53170d item-"+(a+1),children:(0,t.jsxs)("a",{href:"https://blog.ayzom.com/"+e.slug,className:"jsx-1c5571ef9a53170d card",children:[(0,t.jsx)("div",{style:{backgroundImage:"url("+e.coverImage+")"},className:"jsx-1c5571ef9a53170d thumb"}),(0,t.jsxs)("article",{className:"jsx-1c5571ef9a53170d",children:[(0,t.jsxs)("h1",{className:"jsx-1c5571ef9a53170d",children:[e.title," "]}),(0,t.jsx)("span",{className:"jsx-1c5571ef9a53170d",children:new Date(e.dateAdded).toLocaleDateString("en-US",d)})]})]})},a))})]}),(0,t.jsx)(n(),{id:"1c5571ef9a53170d",children:"width: 100%;\n          .custom-width {padding-left:10%;padding-right:10%}.band.jsx-1c5571ef9a53170d{width:90%;display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-gap:20px}@media(min-width:30em){.band.jsx-1c5571ef9a53170d{grid-template-columns:1fr 1fr}}@media(min-width:60em){.band.jsx-1c5571ef9a53170d{grid-template-columns:repeat(4,1fr)}}.card.jsx-1c5571ef9a53170d{background:white;text-decoration:none;color:#444;-webkit-box-shadow:0 2px 5px rgba(0,0,0,.1);-moz-box-shadow:0 2px 5px rgba(0,0,0,.1);box-shadow:0 2px 5px rgba(0,0,0,.1);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100%;position:relative;top:0;-webkit-transition:all.1s ease-in;-moz-transition:all.1s ease-in;-o-transition:all.1s ease-in;transition:all.1s ease-in}.card.jsx-1c5571ef9a53170d:hover{top:-2px;-webkit-box-shadow:0 4px 5px rgba(0,0,0,.2);-moz-box-shadow:0 4px 5px rgba(0,0,0,.2);box-shadow:0 4px 5px rgba(0,0,0,.2)}.card.jsx-1c5571ef9a53170d article.jsx-1c5571ef9a53170d{padding:20px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.card.jsx-1c5571ef9a53170d h1.jsx-1c5571ef9a53170d{font-size:20px;margin:0;color:#333}.card.jsx-1c5571ef9a53170d p.jsx-1c5571ef9a53170d{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;line-height:1.4}.card.jsx-1c5571ef9a53170d span.jsx-1c5571ef9a53170d{font-size:12px;font-weight:bold;color:#999;text-transform:uppercase;letter-spacing:.05em;margin:2em 0 0 0}.card.jsx-1c5571ef9a53170d .thumb.jsx-1c5571ef9a53170d{padding-bottom:60%;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center center}@media(min-width:60em){.item-1.jsx-1c5571ef9a53170d{grid-column:1/span 2}.item-1.jsx-1c5571ef9a53170d h1.jsx-1c5571ef9a53170d{font-size:24px}}"})]})}function l(){return(0,t.jsx)("main",{className:"mt-36",children:(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)("div",{className:"ml-40",children:(0,t.jsx)(d,{})})})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7286)}),_N_E=e.O()}]);