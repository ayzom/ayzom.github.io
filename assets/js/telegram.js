!function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function n(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,i,n){e.$$.on_destroy.push(function(e,...i){if(null==e)return t;const n=e.subscribe(...i);return n.unsubscribe?()=>n.unsubscribe():n}(i,n))}function r(t,e){t.appendChild(e)}function l(t,e,i){t.insertBefore(e,i||null)}function c(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(){return t=" ",document.createTextNode(t);var t}function f(t,e,i,n){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)}function m(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function b(t,e){t.value=null==e?"":e}function u(t,e,i,n){t.style.setProperty(e,i,n?"important":"")}class g{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,i=null){this.e||(this.e=h(e.nodeName),this.t=e,this.h(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)l(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(c)}}let x;function w(t){x=t}const y=[],v=[],k=[],_=[],$=Promise.resolve();let z=!1;function L(t){k.push(t)}let M=!1;const H=new Set;function T(){if(!M){M=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];w(e),R(e.$$)}for(y.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];H.has(e)||(H.add(e),e())}k.length=0}while(y.length);for(;_.length;)_.pop()();z=!1,M=!1,H.clear()}}function R(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const A=new Set;function E(t,e){-1===t.$$.dirty[0]&&(y.push(t),z||(z=!0,$.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(a,s,r,l,h,d,p=[-1]){const f=x;w(a);const m=s.props||{},b=a.$$={fragment:null,ctx:null,props:d,update:t,not_equal:h,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:i(),dirty:p,skip_bound:!1};let u=!1;if(b.ctx=r?r(a,m,(t,e,...i)=>{const n=i.length?i[0]:e;return b.ctx&&h(b.ctx[t],b.ctx[t]=n)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](n),u&&E(a,t)),e}):[],b.update(),u=!0,n(b.before_update),b.fragment=!!l&&l(b.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);b.fragment&&b.fragment.l(t),t.forEach(c)}else b.fragment&&b.fragment.c();s.intro&&((g=a.$$.fragment)&&g.i&&(A.delete(g),g.i(y))),function(t,i,a){const{fragment:s,on_mount:r,on_destroy:l,after_update:c}=t.$$;s&&s.m(i,a),L(()=>{const i=r.map(e).filter(o);l?l.push(...i):n(i),t.$$.on_mount=[]}),c.forEach(L)}(a,s.target,s.anchor),T()}var g,y;w(f)}let I;"function"==typeof HTMLElement&&(I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,i){this[t]=i}$destroy(){!function(t,e){const i=t.$$;null!==i.fragment&&(n(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const V=[];const q=function(e,i=t){let n;const o=[];function s(t){if(a(e,t)&&(e=t,n)){const t=!V.length;for(let t=0;t<o.length;t+=1){const i=o[t];i[1](),V.push(i,e)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,r=t){const l=[a,r];return o.push(l),1===o.length&&(n=i(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}(!1);function C(e){let i,n,o,a;return{c(){i=h("span"),n=h("div"),n.innerHTML='<img src="https://ayzom.com/assets/img/akhilesh.png">',o=p(),this.c=t,m(n,"class","chat_avatar"),a=new g(null),m(i,"class","chat_msg_item chat_msg_item_admin")},m(t,s){l(t,i,s),r(i,n),r(i,o),a.m(e[0],i)},p(t,[e]){1&e&&a.p(t[0])},i:t,o:t,d(t){t&&c(i)}}}function N(t,e,i){let{text:n}=e;return t.$$set=t=>{"text"in t&&i(0,n=t.text)},[n]}class j extends I{constructor(t){super(),this.shadowRoot.innerHTML="<style>.chat_msg_item_admin{overflow-wrap:break-word;letter-spacing:.1px;text-rendering:optimizeLegibility;font-family:'Roboto';font-weight:500;-webkit-font-smoothing:antialiased;font-size:12px;line-height:18px;position:relative;margin:8px 0 15px 0;padding:8px 10px;max-width:60%;display:block;border-radius:3px;animation:zoomIn .5s cubic-bezier(.42, 0, .58, 1);clear:both;z-index:999;margin-left:60px;float:left;background:rgba(0, 0, 0, 0.03);color:#666}.chat_avatar{letter-spacing:.1px;text-rendering:optimizeLegibility;font-family:'Roboto';font-weight:500;-webkit-font-smoothing:antialiased;font-size:12px;line-height:18px;color:#666;position:absolute;top:0;width:40px;height:40px;text-align:center;border-radius:50%;left:-52px;background:rgba(0, 0, 0, 0.03)}img{letter-spacing:.1px;text-rendering:optimizeLegibility;font-family:'Roboto';font-weight:500;-webkit-font-smoothing:antialiased;font-size:12px;line-height:18px;color:#666;width:40px;height:40px;text-align:center;border-radius:50%}</style>",S(this,{target:this.shadowRoot},N,C,a,{text:0}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),T()))}static get observedAttributes(){return["text"]}get text(){return this.$$.ctx[0]}set text(t){this.$set({text:t}),T()}}function P(e){let i;return{c(){i=h("span"),this.c=t,m(i,"class","chat_msg_item chat_msg_item_user")},m(t,n){l(t,i,n),i.innerHTML=e[0]},p(t,[e]){1&e&&(i.innerHTML=t[0])},i:t,o:t,d(t){t&&c(i)}}}function O(t,e,i){let{text:n}=e;return t.$$set=t=>{"text"in t&&i(0,n=t.text)},[n]}customElements.define("my-admin",j);class B extends I{constructor(t){super(),this.shadowRoot.innerHTML="<style>.chat_msg_item_user{overflow-wrap:break-word;letter-spacing:.1px;text-rendering:optimizeLegibility;font-family:'Roboto';font-weight:500;-webkit-font-smoothing:antialiased;font-size:12px;line-height:18px;position:relative;margin:8px 0 15px 0;padding:8px 10px;max-width:60%;display:block;border-radius:3px;animation:zoomIn .5s cubic-bezier(.42, 0, .58, 1);clear:both;z-index:999;margin-right:20px;float:right;background:#42a5f5;color:#eceff1}</style>",S(this,{target:this.shadowRoot},O,P,a,{text:0}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),T()))}static get observedAttributes(){return["text"]}get text(){return this.$$.ctx[0]}set text(t){this.$set({text:t}),T()}}function U(t){let e,i,n;return{c(){e=d("svg"),i=d("g"),n=d("path"),u(n,"text-indent","0"),u(n,"text-transform","none"),u(n,"direction","ltr"),u(n,"block-progression","tb"),u(n,"baseline-shift","baseline"),u(n,"color","#000000"),u(n,"enable-background","accumulate"),m(n,"d","m 34.79625,986.35968 a 1.0001,1.0001 0 0 0 -0.5,1.71875 l 14.28125,14.28127 -14.28125,14.2812 a 1.0054782,1.0054782 0 1 0 1.40625,1.4375 l 14.3125,-14.2812 14.28125,14.2812 a 1.0054782,1.0054782 0 1 0 1.40625,-1.4375 L 51.42125,1002.3597 65.7025,988.07843 a 1.0001,1.0001 0 0 0 -0.71875,-1.71875 1.0001,1.0001 0 0 0 -0.6875,0.28125 L 50.015,1000.9222 35.7025,986.64093 a 1.0001,1.0001 0 0 0 -0.71875,-0.28125 1.0001,1.0001 0 0 0 -0.1875,0 z"),m(n,"fill","#000000"),m(n,"fill-opacity","1"),m(n,"fill-rule","evenodd"),m(n,"stroke","none"),m(n,"marker","none"),m(n,"visibility","visible"),m(n,"display","inline"),m(n,"overflow","visible"),m(i,"transform","translate(0,-952.36218)"),m(e,"xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),m(e,"xmlns:svg","http://www.w3.org/2000/svg"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"version","1.1"),m(e,"x","0px"),m(e,"y","0px"),m(e,"viewBox","0 0 100 125")},m(t,o){l(t,e,o),r(e,i),r(i,n)},d(t){t&&c(e)}}}function D(t){let e,i,n,o,a,s;return{c(){e=d("svg"),i=d("g"),n=d("path"),o=d("path"),a=d("path"),s=d("path"),u(n,"text-indent","0"),u(n,"text-transform","none"),u(n,"direction","ltr"),u(n,"block-progression","tb"),u(n,"baseline-shift","baseline"),u(n,"color","#000000"),u(n,"enable-background","accumulate"),m(n,"d","m 92,964.37773 a 2.000005,2.000005 0 0 1 1.99969,1.99969 l 0,57.27998 A 2.000005,2.000005 0 0 1 92,1025.6571 l -12.44969,0 2.315,12.3209 a 2.000005,2.000005 0 0 1 -3.15719,1.975 l -19.25906,-14.2959 -51.4490599,0 a 2.000005,2.000005 0 0 1 -1.99969,-1.9997 l 0,-57.27998 a 2.000005,2.000005 0 0 1 1.99969,-1.99969 l 83.9999999,0 z m -1.99969,3.99938 -80.0006199,0 0,53.28059 50.1103099,0 a 2.000005,2.000005 0 0 1 1.19188,0.394 l 15.69,11.6466 -1.81719,-9.6716 a 2.000005,2.000005 0 0 1 1.96531,-2.369 l 12.86031,0 0,-53.28059 z"),m(n,"fill","#000000"),m(n,"fill-opacity","1"),m(n,"fill-rule","evenodd"),m(n,"stroke","none"),m(n,"marker","none"),m(n,"visibility","visible"),m(n,"display","inline"),m(n,"overflow","visible"),u(o,"text-indent","0"),u(o,"text-transform","none"),u(o,"direction","ltr"),u(o,"block-progression","tb"),u(o,"baseline-shift","baseline"),u(o,"color","#000000"),u(o,"enable-background","accumulate"),m(o,"d","m 66.84281,998.4894 a 2.000005,2.000005 0 0 1 1.26063,3.5597 c -10.69712,8.8358 -25.59226,8.7744 -36.2075,-3e-4 a 2.000005,2.000005 0 1 1 2.54812,-3.0828 c 9.22476,7.6253 21.80962,7.6839 31.1125,-3e-4 a 2.000005,2.000005 0 0 1 1.28625,-0.4762 z"),m(o,"fill","#000000"),m(o,"fill-opacity","1"),m(o,"fill-rule","evenodd"),m(o,"stroke","none"),m(o,"marker","none"),m(o,"visibility","visible"),m(o,"display","inline"),m(o,"overflow","visible"),u(a,"text-indent","0"),u(a,"text-transform","none"),u(a,"direction","ltr"),u(a,"block-progression","tb"),u(a,"baseline-shift","baseline"),u(a,"color","#000000"),u(a,"enable-background","accumulate"),m(a,"d","m 69.53,981.37757 c 3.84202,0 6.99969,3.15798 6.99969,7 a 2.000005,2.000005 0 1 1 -3.99938,0 c 0,-1.67798 -1.32233,-3.00031 -3.00031,-3.00031 -1.67798,0 -3.00031,1.32233 -3.00031,3.00031 a 2.000005,2.000005 0 1 1 -3.99938,0 c 0,-3.84202 3.15767,-7 6.99969,-7 z"),m(a,"fill","#000000"),m(a,"fill-opacity","1"),m(a,"fill-rule","evenodd"),m(a,"stroke","none"),m(a,"marker","none"),m(a,"visibility","visible"),m(a,"display","inline"),m(a,"overflow","visible"),u(s,"text-indent","0"),u(s,"text-transform","none"),u(s,"direction","ltr"),u(s,"block-progression","tb"),u(s,"baseline-shift","baseline"),u(s,"color","#000000"),u(s,"enable-background","accumulate"),m(s,"d","m 30.47,981.37757 c 3.84202,0 6.99969,3.15798 6.99969,7 a 2.000005,2.000005 0 1 1 -3.99938,0 c 0,-1.67798 -1.32233,-3.00031 -3.00031,-3.00031 -1.67798,0 -3.00031,1.32233 -3.00031,3.00031 a 2.000005,2.000005 0 1 1 -3.99938,0 c 0,-3.84202 3.15767,-7 6.99969,-7 z"),m(s,"fill","#000000"),m(s,"fill-opacity","1"),m(s,"fill-rule","evenodd"),m(s,"stroke","none"),m(s,"marker","none"),m(s,"visibility","visible"),m(s,"display","inline"),m(s,"overflow","visible"),m(i,"transform","translate(0,-952.36218)"),m(e,"xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),m(e,"height","40"),m(e,"width","40"),m(e,"xmlns:svg","http://www.w3.org/2000/svg"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"version","1.1"),m(e,"x","0px"),m(e,"y","0px"),m(e,"viewBox","0 0 100 55")},m(t,c){l(t,e,c),r(e,i),r(i,n),r(i,o),r(i,a),r(i,s)},d(t){t&&c(e)}}}function W(e){let i,o,a,s,d,g,x,w,y,v,k,_,$,z,L,M,H,T,R=e[2]&&U(),A=!e[2]&&D();return{c(){i=h("main"),o=h("div"),a=h("div"),s=h("div"),s.innerHTML='<div class="chat_option"><div class="header_img"><img src="https://ayzom.com/assets/img/akhilesh.png"></div> \n\t\t\t\t<span id="chat_head">Akhilesh Yadav</span>  <br>  <span class="agent">Status</span>  <span class="online">(Online)</span></div>',d=p(),g=h("div"),g.innerHTML='<div class="chat_body"><p>Ask me anything. Please drop your email/phone/socialmedia profile link so I can connect later in case I am offline.</p></div> \n\t\t\t<span class="chat_msg_item chat_msg_item_admin"><div class="chat_avatar"><img src="https://ayzom.com/assets/img/akhilesh.png"></div>\n\t\t\t\tHey there! Any question?</span>',x=p(),w=h("div"),y=h("a"),y.innerHTML='<svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 60" style="enable-background:new 0 0 64 64;" xml:space="preserve"><g><path d="M9.4,35v3h1H13l2.7,14h0.8h6.5l-2.7-14h3.8l25.1,6.3V43v-8h3.3V21h-3.3v-9.3L24.2,18H9.4v3h-6v14h1H9.4z M49.4,23h1.3v10   h-1.3V23z M25.4,19.8l22-5.5V21h0v14h0v6.7l-22-5.5V19.8z M20.7,50h-3.3l-2.3-12h3.3L20.7,50z M11.4,35V21v-1h12v16H20h-7.4h-1.3   V35z M5.4,23h4v10h-4V23z"></path><rect x="54.9" y="27" width="4.8" height="2"></rect><rect x="54.7" y="20" transform="matrix(0.9126 -0.4088 0.4088 0.9126 -3.5859 25.19)" width="5" height="2"></rect><rect x="56.1" y="32.5" transform="matrix(0.4088 -0.9126 0.9126 0.4088 1.827 72.8513)" width="2" height="5"></rect></g></svg>',v=p(),k=h("textarea"),$=p(),z=h("a"),R&&R.c(),L=p(),A&&A.c(),this.c=t,m(s,"class","chat_header"),m(g,"id","chat_converse"),m(g,"class","chat_conversion chat_converse"),u(g,"display","block"),m(y,"id","fab_send"),m(y,"class","fab is-visible"),m(k,"id","chatSend"),m(k,"name","chat_message"),m(k,"placeholder","Send a message"),m(k,"class","chat_field chat_message"),m(w,"class","fab_field"),m(a,"class",_=e[2]?"chat is-visible":"chat hide-div"),m(z,"id","prime"),m(z,"class",M=e[2]?"fab is-float is-visible":"fab"),m(o,"class","fabs")},m(t,n){l(t,i,n),r(i,o),r(o,a),r(a,s),r(a,d),r(a,g),e[6](g),r(a,x),r(a,w),r(w,y),r(w,v),r(w,k),b(k,e[0]),r(o,$),r(o,z),R&&R.m(z,null),r(z,L),A&&A.m(z,null),H||(T=[f(y,"click",e[4]),f(k,"input",e[7]),f(z,"click",e[3])],H=!0)},p(t,[e]){1&e&&b(k,t[0]),4&e&&_!==(_=t[2]?"chat is-visible":"chat hide-div")&&m(a,"class",_),t[2]?R||(R=U(),R.c(),R.m(z,L)):R&&(R.d(1),R=null),t[2]?A&&(A.d(1),A=null):A||(A=D(),A.c(),A.m(z,null)),4&e&&M!==(M=t[2]?"fab is-float is-visible":"fab")&&m(z,"class",M)},i:t,o:t,d(t){t&&c(i),e[6](null),R&&R.d(),A&&A.d(),H=!1,n(T)}}}function Y(t,e,i){let n;s(t,q,t=>i(2,n=t));let{name:o}=e,a="",r="";function l(t,e){const i=document.querySelector("body tg-chat").shadowRoot.querySelector("#chat_converse");new("Admin"===e?j:B)({target:document.querySelector("body tg-chat").shadowRoot.querySelector("#chat_converse"),props:{text:t}});return i.scrollTo(0,i.scrollHeight),""}const c=new WebSocket("wss://oqf7v5fe68.execute-api.us-east-1.amazonaws.com/production/");function h(t){return t&&r.insertAdjacentHTML("beforeend",l(t,"Admin")),0}return c.onopen=async function(t){try{const t=await fetch("https://api.ayzom.com/service"),e=await t.json();c.send(`{"action":"test", "echo":"User Visit - ${e} Referred: ${document.referrer}"}`)}catch(t){console.log(t),c.send(`{"action":"test", "echo":"User Visit! No IP Detected, Referred: ${document.referrer} "}`)}},c.onmessage=function(t){h(t.data)},c.onclose=function(t){t.wasClean,h("Talk to you later! Please connect at <a href='https://linkedin.com/in/arki7n'>linkedin.com/in/arki7n</a>")},c.onerror=function(t){h("Talk to you later! Please connect at <a href='https://linkedin.com/in/arki7n'>linkedin.com/in/arki7n</a>")},t.$$set=t=>{"name"in t&&i(5,o=t.name)},[a,r,n,function(){q.set(!n)},function(){let t=a;!function(t){t&&r.insertAdjacentHTML("beforeend",l(t,"User"))}(t),c.send(`{"action":"test", "echo":"${t}"}`),i(0,a="")},o,function(t){v[t?"unshift":"push"](()=>{r=t,i(1,r)})},function(){a=this.value,i(0,a)}]}customElements.define("my-user",B);customElements.define("tg-chat",class extends I{constructor(t){super(),this.shadowRoot.innerHTML="<style>.hide-div{visibility:hidden}.fabs{bottom:0;position:fixed;margin:1em;right:0;z-index:998}.fab{display:block;width:56px;height:56px;border-radius:50%;text-align:center;color:#f0f0f0;margin:25px auto 0;box-shadow:0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);cursor:pointer;-webkit-transition:all .1s ease-out;transition:all .1s ease-out;position:relative;z-index:998;overflow:hidden;background:#42a5f5}.fab:not(:last-child){width:0;height:0;margin:20px auto 0;opacity:0;visibility:hidden;line-height:40px}.fab:not(:last-child).is-visible{width:40px;height:40px;margin:15px auto 10;opacity:1;visibility:visible}.fab:nth-last-child(1){-webkit-transition-delay:25ms;transition-delay:25ms}.fab:not(:last-child):nth-last-child(2){-webkit-transition-delay:20ms;transition-delay:20ms}.fab:not(:last-child):nth-last-child(3){-webkit-transition-delay:40ms;transition-delay:40ms}.fab:not(:last-child):nth-last-child(4){-webkit-transition-delay:60ms;transition-delay:60ms}.fab:not(:last-child):nth-last-child(5){-webkit-transition-delay:80ms;transition-delay:80ms}.fab:active,.fab:focus,.fab:hover{box-shadow:0 0 6px rgba(0, 0, 0, .16), 0 6px 12px rgba(0, 0, 0, .32)}.chat{position:fixed;right:85px;bottom:20px;width:400px;font-size:12px;line-height:22px;font-family:'Roboto';font-weight:500;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;opacity:0;box-shadow:1px 1px 100px 2px rgba(0, 0, 0, 0.22);border-radius:10px;-webkit-transition:all .2s ease-out;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.chat_header{font-size:13px;font-family:'Roboto';font-weight:500;color:#f3f3f3;height:55px;background:#42a5f5;border-top-left-radius:10px;border-top-right-radius:10px;padding-top:8px}.chat.is-visible{opacity:1;-webkit-animation:zoomIn .2s cubic-bezier(.42, 0, .58, 1);animation:zoomIn .2s cubic-bezier(.42, 0, .58, 1)}.chat_option{float:left;font-size:15px;list-style:none;position:relative;height:100%;width:100%;text-align:relative;margin-right:10px;letter-spacing:0.5px;font-weight:400\n         }.chat_option img{border-radius:50%;width:55px;float:left;margin:-30px 20px 10px 20px;border:4px solid rgba(0, 0, 0, 0.21)}.chat_option .agent{font-size:12px;font-weight:300}.chat_option .online{opacity:0.4;font-size:11px;font-weight:300}.chat_body{background:#fff;width:100%;display:inline-block;text-align:center;overflow-y:auto}.chat_body p{padding:20px;color:#888\n         }.chat_field{position:relative;margin:5px 0 5px 0;width:50%;font-family:'Roboto';font-size:12px;line-height:30px;font-weight:500;color:#4b4b4b;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;border:none;outline:none;display:inline-block}.chat_field.chat_message{height:30px;resize:none;font-size:13px;font-weight:400}.fab_field{width:100%;display:inline-block;text-align:center;background:#fff;border-top:1px solid #eee;border-bottom-right-radius:10px;border-bottom-left-radius:10px}.fab_field a{display:inline-block;text-align:center}#fab_send{float:right;background:rgba(0, 0, 0, 0)}.fab_field .fab{width:35px;height:35px;box-shadow:none;margin:5px}.chat_converse{position:relative;background:#fff;margin:6px 0 0px 0;height:300px;min-height:0;font-size:12px;line-height:18px;overflow-y:auto;width:100%;float:right;padding-bottom:30px}.chat .chat_converse .chat_msg_item{position:relative;margin:8px 0 15px 0;padding:8px 10px;max-width:60%;display:block;word-wrap:break-word;border-radius:3px;-webkit-animation:zoomIn .5s cubic-bezier(.42, 0, .58, 1);animation:zoomIn .5s cubic-bezier(.42, 0, .58, 1);clear:both;z-index:999}.chat .chat_converse .chat_msg_item .chat_avatar{position:absolute;top:0}.chat .chat_converse .chat_msg_item.chat_msg_item_admin .chat_avatar{left:-52px;background:rgba(0, 0, 0, 0.03)}.chat .chat_converse .chat_msg_item .chat_avatar,.chat_avatar img{width:40px;height:40px;text-align:center;border-radius:50%}.chat .chat_converse .chat_msg_item.chat_msg_item_admin{margin-left:60px;float:left;background:rgba(0, 0, 0, 0.03);color:#666}.chat .chat_converse .chat_msg_item.chat_msg_item_admin:before{content:'';position:absolute;top:15px;left:-12px;z-index:998;border:6px solid transparent;border-right-color:rgba(255, 255, 255, .4)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{border-radius:0}::-webkit-scrollbar-thumb{margin:2px;border-radius:10px;background:rgba(0, 0, 0, 0.2)}.is-float{box-shadow:0 0 6px rgba(0, 0, 0, .16), 0 6px 12px rgba(0, 0, 0, .32)}@-webkit-keyframes zoomIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0.0}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes zoomIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0.0}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes load{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0.0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes load{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0.0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@media only screen and (min-width: 300px){.chat{width:250px}}@media only screen and (min-width: 480px){.chat{width:300px}.chat_field{width:65%}}@media only screen and (min-width: 768px){.chat{width:300px}.chat_field{width:65%}}@media only screen and (min-width: 1024px){.chat{width:300px}.chat_field{width:65%}}@-webkit-keyframes ripple{100%{opacity:0;-moz-transform:scale(5);-ms-transform:scale(5);webkit-transform:scale(5);-webkit-transform:scale(5);transform:scale(5)}}@keyframes ripple{100%{opacity:0;-moz-transform:scale(5);-ms-transform:scale(5);webkit-transform:scale(5);-webkit-transform:scale(5);transform:scale(5)}}::-webkit-input-placeholder{color:#bbb}:-ms-input-placeholder{color:#bbb}::-moz-placeholder{color:#bbb}:-moz-placeholder{color:#bbb}</style>",S(this,{target:this.shadowRoot},Y,W,a,{name:5}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),T()))}static get observedAttributes(){return["name"]}get name(){return this.$$.ctx[5]}set name(t){this.$set({name:t}),T()}})}();
//# sourceMappingURL=bundle.js.map


document.querySelector("body tg-chat").shadowRoot.querySelector("#prime").click();
