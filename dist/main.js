(()=>{"use strict";var e,t,n,a,o={138:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var a=n(100),o=n(417),c=n(380),i=n(629),r=n(106),s=e([o]);o=(s.then?(await s)():s)[0];const m=document.querySelector(".popup"),d=document.getElementById("cards-container"),p=document.getElementById("counter-cards"),l=await(0,a.Z)([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);d.addEventListener("click",(async e=>{if(e.target.classList.contains("comments-button")){const{id:t}=e.target.parentElement.parentElement,n=await(0,a.Z)(t);(0,c.Z)(n,m)}else if(e.target.classList.contains("like-button")){const{id:t}=e.target.parentElement.parentElement.parentElement.parentElement;await(0,i.m)(t);const n=await(0,i.n)(),a=(e,t)=>e.item_id===t,o=n.find((e=>a(e,t)))??0;e.target.nextSibling.textContent=`${o.likes??0} Likes`}})),l.forEach((e=>{const t=(0,o.Z)(e);d.appendChild(t)}));const u=(0,r.Z)(d);p.textContent=`Characters (${u})`,t()}catch(e){t(e)}}),1)},100:(e,t,n)=>{n.d(t,{Z:()=>a});const a=async e=>{const t=await fetch(`https://rickandmortyapi.com/api/character/${e}`);return await t.json()}},380:(e,t,n)=>{n.d(t,{Z:()=>c});const a=n.p+"assets/icons8-x-50 (1).png",o=e=>{let t=0;return e&&(t=e.childElementCount),t},c=(e,t)=>{t.innerHTML=`\n    <div class="popup-ele">\n        <div class="button-div">\n            <button alt="quit button" id="quit" class="quit-button"><img src="${a}"></button>\n        </div>\n        <div class="popup-description">\n            <img src="${e.image}">\n            <h1>${e.name}</h1>\n            <div class="popup-description-elements">\n                <p>Status: ${e.status}</p>\n                <p>Species: ${e.species}</p>\n                <p>Gender: ${e.gender}</p>\n                <p>Origin: ${e.origin.name}</p>\n                <p>Location: ${e.location.name}</p>\n            </div>\n            <div class="comments-section">\n                <h2 class="heading-comment">Comments</h2>\n                <ul class="comments-elements">\n                </ul>\n            </div>\n        </div>\n        <div class="popup-form-section">\n            <h2>Add a Comment</h2>\n            <form id="comment-form">\n                <input type="text" id="username" name="username" placeholder="Your Name" required> <br>\n                <textarea id="text-area" placeholder="Your insights" maxlength="300" name="message" required></textarea> <br>\n                <button type="submit" class="button-comment">Comments</button>\n            </form>\n        </div>\n    </div>\n    `,document.querySelector("#quit").addEventListener("click",(()=>{t.innerHTML=""}));const n=document.getElementById("comment-form"),c=document.getElementById("username"),i=document.getElementById("text-area"),r=document.querySelector(".comments-elements"),s=document.querySelector(".heading-comment");s.textContent=`Comment(${o(r)})`;const m=async()=>{const t=await(async e=>{try{const t=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments?item_id=${e}`),n=await t.json();if(t.ok)return n}catch(e){console.log(e.message)}return 0})(e.id);r.innerHTML="",0!==t?t.forEach((e=>{r.innerHTML+=`\n          <li class="individual-comment"><p>${e.creation_date} ${e.username}: ${e.comment}</p></li>\n      `})):r.innerHTML="No Comments Yet",s.textContent=`Comment(${o(r)})`};m(),n.addEventListener("submit",(async t=>{t.preventDefault();const n=c.value,a=i.value;await(async(e,t,n)=>{try{await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:e,username:t,comment:n})})}catch(e){console.log(e.message)}})(e.id,n,a),m(),c.value="",i.value=""}))}},106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=e=>e?e.childElementCount:0},417:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>c});var o=n(629);const e=await(0,o.n)(),c=t=>{const n=document.createElement("div");n.className="card",n.id=t.id;const a=document.createElement("img");a.className="card-image",a.src=t.image,a.alt=t.name,n.appendChild(a);const o=document.createElement("div");o.className="container";const c=document.createElement("div");c.className="containerCardTitleLikeBtn";const i=document.createElement("h4");i.textContent=t.name,c.appendChild(i);const r=document.createElement("div");r.className="containerLikes";const s=document.createElement("button");s.classList.add("like-button");const m=document.createElement("div");m.classList.add("like-img"),s.appendChild(m),r.appendChild(s);const d=e.find((e=>{return t=e,a=n.id,t.item_id===a;var t,a}))??0,p=document.createElement("p");p.textContent=`${d.likes??0} Likes`,r.appendChild(p),c.appendChild(r),o.appendChild(c);const l=document.createElement("button");l.classList.add("comments-button"),l.textContent="Comments",o.appendChild(l);const u=document.createElement("button");return u.classList.add("reservations-button"),u.textContent="Reservations",o.appendChild(u),n.appendChild(o),n};a()}catch(e){a(e)}}),1)},629:(e,t,n)=>{n.d(t,{m:()=>a,n:()=>o});const a=async e=>{const t=JSON.stringify({item_id:e}),n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/likes/",{method:"POST",body:t,headers:{"Content-Type":"application/json"}});return await n.text()},o=async()=>{const e=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/likes");return await e.json()}}},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return o[e](n,n.exports,i),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,c,i)=>{var r;i&&((r=[]).d=1);var s,m,d,p=new Set,l=o.exports,u=new Promise(((e,t)=>{d=t,m=e}));u[t]=l,u[e]=e=>(r&&e(r),p.forEach(e),u.catch((e=>{}))),o.exports=u,c((o=>{var c;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var c=[];c.d=0,o.then((e=>{i[t]=e,a(c)}),(e=>{i[n]=e,a(c)}));var i={};return i[e]=e=>e(c),i}}var r={};return r[e]=e=>{},r[t]=o,r})))(o);var i=()=>s.map((e=>{if(e[n])throw e[n];return e[t]})),m=new Promise((t=>{(c=()=>t(i)).r=0;var n=e=>e!==r&&!p.has(e)&&(p.add(e),e&&!e.d&&(c.r++,e.push(c)));s.map((t=>t[e](n)))}));return c.r?m:i()}),(e=>(e?d(u[n]=e):m(l),a(r)))),r&&(r.d=0)},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i(138)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoidUJBQUlBLEVBQ0FDLEVBQ0FDLEVBQ0FDLEUsK0hDS0osTUFBTUMsRUFBaUJDLFNBQVNDLGNBQWMsVUFDeENDLEVBQVlGLFNBQVNHLGVBQWUsbUJBQ3BDQyxFQUFlSixTQUFTRyxlQUFlLGlCQUV2Q0UsUUFBdUIsT0FBYyxDQUFDLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxLQUczRkgsRUFBVUksaUJBQWlCLFNBQVNDLE1BQU9DLElBQ3pDLEdBQUlBLEVBQUVDLE9BQU9DLFVBQVVDLFNBQVMsbUJBQW9CLENBQ2xELE1BQU0sR0FBRUMsR0FBT0osRUFBRUMsT0FBT0ksY0FBY0EsY0FDaENDLFFBQXdCLE9BQWNGLElBQzVDLE9BQWNFLEVBQWlCZixFQUNqQyxNQUFPLEdBQUlTLEVBQUVDLE9BQU9DLFVBQVVDLFNBQVMsZUFBZ0IsQ0FDckQsTUFBTSxHQUFFQyxHQUFPSixFQUFFQyxPQUFPSSxjQUFjQSxjQUFjQSxjQUFjQSxvQkFDNUQsT0FBU0QsR0FDZixNQUFNRyxRQUFrQixTQUNsQkMsRUFBZSxDQUFDQyxFQUFTQyxJQUFRRCxFQUFRRSxVQUFZRCxFQUNyREUsRUFBU0wsRUFBVU0sTUFBTUMsR0FBUU4sRUFBYU0sRUFBS1YsTUFBUSxFQUNqRUosRUFBRUMsT0FBT2MsWUFBWUMsWUFBYyxHQUFHSixFQUFPSyxPQUFTLFNBQ3hELEtBR0ZwQixFQUFlcUIsU0FBU0MsSUFDdEIsTUFBTUMsR0FBTyxPQUFXRCxHQUN4QnpCLEVBQVUyQixZQUFZRCxFQUFLLElBRzdCLE1BQU1FLEdBQWMsT0FBZ0I1QixHQUNwQ0UsRUFBYW9CLFlBQWMsZUFBZU0sSyx3RENwQzFDLE1BUUEsRUFSc0J2QixNQUFPSyxJQUMzQixNQUFNbUIsUUFBaUJDLE1BQ3JCLDZDQUE2Q3BCLEtBRy9DLGFBRDRCbUIsRUFBU0UsTUFDakIsQywwRUNJdEIsRUFUeUJDLElBQ3ZCLElBQUlDLEVBQVUsRUFLZCxPQUhJRCxJQUNGQyxFQUFVRCxFQUFrQkUsbUJBRXZCRCxDQUFPLEVDeUVoQixFQTFFc0IsQ0FBQ0UsRUFBTW5DLEtBQzNCQSxFQUFVb0MsVUFBWSxrSkFHd0QsZ0dBR3hERCxFQUFLRSw0QkFDWEYsRUFBS0csK0ZBRU1ILEVBQUtJLDJDQUNKSixFQUFLSywyQ0FDTkwsRUFBS00sMENBQ0xOLEVBQUtPLE9BQU9KLDBDQUNWSCxFQUFLUSxTQUFTTCxvdEJBa0J4QnhDLFNBQVNDLGNBQWMsU0FDL0JLLGlCQUFpQixTQUFTLEtBQ25DSixFQUFVb0MsVUFBWSxFQUFFLElBRzFCLE1BQU1RLEVBQWlCOUMsU0FBU0csZUFBZSxnQkFDekM0QyxFQUFXL0MsU0FBU0csZUFBZSxZQUNuQzZDLEVBQVVoRCxTQUFTRyxlQUFlLGFBQ2xDK0IsRUFBb0JsQyxTQUFTQyxjQUFjLHNCQUMzQ2dELEVBQWtCakQsU0FBU0MsY0FBYyxvQkFFL0NnRCxFQUFnQnpCLFlBQWMsV0FBVyxFQUFnQlUsTUFFekQsTUFBTWdCLEVBQWUzQyxVQUNuQixNQUFNNEMsT0NuRFU1QyxPQUFPSyxJQUN6QixJQUNFLE1BQU1tQixRQUFpQkMsTUFBTSxpSEFBaUhwQixLQUN4SXlCLFFBQWFOLEVBQVNFLE9BRTVCLEdBQUlGLEVBQVNxQixHQUNYLE9BQU9mLENBRVgsQ0FBRSxNQUFPZ0IsR0FDUEMsUUFBUUMsSUFBSUYsRUFBTUcsUUFDcEIsQ0FDQSxPQUFPLENBQUMsRUR3Q3dCLENBQVluQixFQUFLekIsSUFDL0NzQixFQUFrQkksVUFBWSxHQUNOLElBQXBCYSxFQUNGQSxFQUFnQnpCLFNBQVNzQixJQUN2QmQsRUFBa0JJLFdBQWEsaURBQ09VLEVBQVFTLGlCQUFpQlQsRUFBUUQsYUFBYUMsRUFBUUEsMEJBQzdGLElBR0RkLEVBQWtCSSxVQUFZLGtCQUdoQ1csRUFBZ0J6QixZQUFjLFdBQVcsRUFBZ0JVLEtBQXFCLEVBR2hGZ0IsSUFFQUosRUFBZXhDLGlCQUFpQixVQUFVQyxNQUFPQyxJQUMvQ0EsRUFBRWtELGlCQUNGLE1BQU1sQixFQUFPTyxFQUFTWSxNQUNoQkMsRUFBT1osRUFBUVcsV0V2RUxwRCxPQUFPSyxFQUFJbUMsRUFBVWMsS0FDdkMsVUFDUTdCLE1BQU0sd0dBQXlHLENBQ25IOEIsT0FBUSxPQUNSQyxRQUFTLENBQ1AsZUFBZ0Isb0JBRWxCQyxLQUFNQyxLQUFLQyxVQUFVLENBQ25CL0MsUUFBU1AsRUFDVG1DLFdBQ0FDLFFBQVNhLEtBR2YsQ0FBRSxNQUFPUixHQUNQQyxRQUFRQyxJQUFJRixFQUFNRyxRQUNwQixHRnlEUSxDQUFZbkIsRUFBS3pCLEdBQUk0QixFQUFNb0IsR0FDakNWLElBQ0FILEVBQVNZLE1BQVEsR0FDakJYLEVBQVFXLE1BQVEsRUFBRSxHQUNsQixDLGlDRzVFSixNQU9BLEVBUHlCekQsR0FDbkJBLEVBQ0tBLEVBQVVrQyxrQkFFWixDLHNFQ0RULE1BQU1yQixRQUFrQixTQTREeEIsRUExRG9CWSxJQUNsQixNQUFNQyxFQUFPNUIsU0FBU21FLGNBQWMsT0FDcEN2QyxFQUFLd0MsVUFBWSxPQUNqQnhDLEVBQUtoQixHQUFLZSxFQUFVZixHQUVwQixNQUFNeUQsRUFBTXJFLFNBQVNtRSxjQUFjLE9BQ25DRSxFQUFJRCxVQUFZLGFBQ2hCQyxFQUFJQyxJQUFNM0MsRUFBVVksTUFDcEI4QixFQUFJRSxJQUFNNUMsRUFBVWEsS0FDcEJaLEVBQUtDLFlBQVl3QyxHQUVqQixNQUFNbkUsRUFBWUYsU0FBU21FLGNBQWMsT0FDekNqRSxFQUFVa0UsVUFBWSxZQUV0QixNQUFNSSxFQUE0QnhFLFNBQVNtRSxjQUFjLE9BQ3pESyxFQUEwQkosVUFBWSw0QkFFdEMsTUFBTTVCLEVBQU94QyxTQUFTbUUsY0FBYyxNQUNwQzNCLEVBQUtoQixZQUFjRyxFQUFVYSxLQUM3QmdDLEVBQTBCM0MsWUFBWVcsR0FFdEMsTUFBTWlDLEVBQWlCekUsU0FBU21FLGNBQWMsT0FDOUNNLEVBQWVMLFVBQVksaUJBRTNCLE1BQU1NLEVBQWExRSxTQUFTbUUsY0FBYyxVQUMxQ08sRUFBV2hFLFVBQVVpRSxJQUFJLGVBRXpCLE1BQU1DLEVBQWdCNUUsU0FBU21FLGNBQWMsT0FFN0NTLEVBQWNsRSxVQUFVaUUsSUFBSSxZQUU1QkQsRUFBVzdDLFlBQVkrQyxHQUN2QkgsRUFBZTVDLFlBQVk2QyxHQUUzQixNQUNNdEQsRUFBU0wsRUFBVU0sTUFBTUMsSUFBUU4sT0FEakJDLEVBQzhCSyxFQURyQkosRUFDMEJVLEVBQUtoQixHQUR2QkssRUFBUUUsVUFBWUQsRUFBdEMsSUFBQ0QsRUFBU0MsQ0FDa0MsS0FBSyxFQUVoRTJELEVBQWM3RSxTQUFTbUUsY0FBYyxLQUMzQ1UsRUFBWXJELFlBQWMsR0FBR0osRUFBT0ssT0FBUyxVQUM3Q2dELEVBQWU1QyxZQUFZZ0QsR0FDM0JMLEVBQTBCM0MsWUFBWTRDLEdBQ3RDdkUsRUFBVTJCLFlBQVkyQyxHQUV0QixNQUFNTSxFQUFpQjlFLFNBQVNtRSxjQUFjLFVBQzlDVyxFQUFlcEUsVUFBVWlFLElBQUksbUJBQzdCRyxFQUFldEQsWUFBYyxXQUM3QnRCLEVBQVUyQixZQUFZaUQsR0FFdEIsTUFBTUMsRUFBcUIvRSxTQUFTbUUsY0FBYyxVQU9sRCxPQU5BWSxFQUFtQnJFLFVBQVVpRSxJQUFJLHVCQUNqQ0ksRUFBbUJ2RCxZQUFjLGVBQ2pDdEIsRUFBVTJCLFlBQVlrRCxHQUV0Qm5ELEVBQUtDLFlBQVkzQixHQUVWMEIsQ0FBSSxFLGdFQzVETixNQUFNb0QsRUFBV3pFLE1BQU9LLElBQzdCLE1BR01xRSxFQUFjaEIsS0FBS0MsVUFBVSxDQUNqQy9DLFFBQVNQLElBRUxtQixRQUFpQkMsTUFDckIsc0dBQ0EsQ0FDRThCLE9BQVEsT0FDUkUsS0FBTWlCLEVBQ05sQixRQVhnQixDQUNsQixlQUFnQixzQkFlbEIsYUFGbUJoQyxFQUFTNkIsTUFFakIsRUFHQXNCLEVBQVczRSxVQUN0QixNQUFNd0IsUUFBaUJDLE1BQ3JCLHNHQUdGLGFBRHdCRCxFQUFTRSxNQUNqQixDLEdDeEJka0QsRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhRSxRQUdyQixJQUFJQyxFQUFTTixFQUF5QkUsR0FBWSxDQUdqREcsUUFBUyxDQUFDLEdBT1gsT0FIQUUsRUFBb0JMLEdBQVVJLEVBQVFBLEVBQU9ELFFBQVNKLEdBRy9DSyxFQUFPRCxPQUNmLENWdEJJN0YsRUFBa0MsbUJBQVhnRyxPQUF3QkEsT0FBTyxrQkFBb0IscUJBQzFFL0YsRUFBbUMsbUJBQVgrRixPQUF3QkEsT0FBTyxtQkFBcUIsc0JBQzVFOUYsRUFBaUMsbUJBQVg4RixPQUF3QkEsT0FBTyxpQkFBbUIsb0JBQ3hFN0YsRUFBZ0I4RixJQUNoQkEsSUFBVUEsRUFBTUMsSUFDbEJELEVBQU1DLEVBQUksRUFDVkQsRUFBTWxFLFNBQVNvRSxHQUFRQSxFQUFHQyxNQUMxQkgsRUFBTWxFLFNBQVNvRSxHQUFRQSxFQUFHQyxJQUFNRCxFQUFHQyxJQUFNRCxNQUMxQyxFQXlCRFYsRUFBb0JZLEVBQUksQ0FBQ1AsRUFBUXpCLEVBQU1pQyxLQUN0QyxJQUFJTCxFQUNKSyxLQUFjTCxFQUFRLElBQUlDLEVBQUksR0FDOUIsSUFFSUssRUFDQUMsRUFDQUMsRUFKQUMsRUFBWSxJQUFJQyxJQUNoQmQsRUFBVUMsRUFBT0QsUUFJakJlLEVBQVUsSUFBSUMsU0FBUSxDQUFDQyxFQUFTQyxLQUNuQ04sRUFBU00sRUFDVFAsRUFBZU0sQ0FBTyxJQUV2QkYsRUFBUTNHLEdBQWtCNEYsRUFDMUJlLEVBQVE1RyxHQUFrQm1HLElBQVFGLEdBQVNFLEVBQUdGLEdBQVFTLEVBQVUzRSxRQUFRb0UsR0FBS1MsRUFBZSxPQUFFSSxTQUM5RmxCLEVBQU9ELFFBQVVlLEVBQ2pCdkMsR0FBTTRDLElBRUwsSUFBSWQsRUFESkksRUF2Q2EsQ0FBQ1UsR0FBVUEsRUFBS0MsS0FBS0MsSUFDbkMsR0FBVyxPQUFSQSxHQUErQixpQkFBUkEsRUFBa0IsQ0FDM0MsR0FBR0EsRUFBSW5ILEdBQWdCLE9BQU9tSCxFQUM5QixHQUFHQSxFQUFJQyxLQUFNLENBQ1osSUFBSW5CLEVBQVEsR0FDWkEsRUFBTUMsRUFBSSxFQUNWaUIsRUFBSUMsTUFBTWhCLElBQ1R6RSxFQUFJMUIsR0FBa0JtRyxFQUN0QmpHLEVBQWE4RixFQUFNLElBQ2hCcEYsSUFDSGMsRUFBSXpCLEdBQWdCVyxFQUNwQlYsRUFBYThGLEVBQU0sSUFFcEIsSUFBSXRFLEVBQU0sQ0FBQyxFQUVYLE9BREFBLEVBQUkzQixHQUFrQm1HLEdBQVFBLEVBQUdGLEdBQzFCdEUsQ0FDUixDQUNELENBQ0EsSUFBSTBGLEVBQU0sQ0FBQyxFQUdYLE9BRkFBLEVBQUlySCxHQUFpQmdILE1BQ3JCSyxFQUFJcEgsR0FBa0JrSCxFQUNmRSxDQUFHLElBa0JLQyxDQUFTTCxHQUV2QixJQUFJTSxFQUFZLElBQU9oQixFQUFZVyxLQUFLaEIsSUFDdkMsR0FBR0EsRUFBRWhHLEdBQWUsTUFBTWdHLEVBQUVoRyxHQUM1QixPQUFPZ0csRUFBRWpHLEVBQWUsSUFFckIyRyxFQUFVLElBQUlDLFNBQVNDLEtBQzFCWCxFQUFLLElBQU9XLEVBQVFTLElBQ2pCbkIsRUFBSSxFQUNQLElBQUlvQixFQUFXQyxHQUFPQSxJQUFNeEIsSUFBVVMsRUFBVWdCLElBQUlELEtBQU9mLEVBQVUxQixJQUFJeUMsR0FBSUEsSUFBTUEsRUFBRXZCLElBQU1DLEVBQUdDLElBQUtxQixFQUFFRSxLQUFLeEIsS0FDMUdJLEVBQVlXLEtBQUtDLEdBQVNBLEVBQUluSCxHQUFld0gsSUFBVSxJQUV4RCxPQUFPckIsRUFBR0MsRUFBSVEsRUFBVVcsR0FBVyxJQUNoQ0ssSUFBVUEsRUFBTW5CLEVBQU9HLEVBQVExRyxHQUFnQjBILEdBQU9wQixFQUFhWCxHQUFXMUYsRUFBYThGLE1BQy9GQSxJQUFVQSxFQUFNQyxFQUFJLEVBQUUsRVc5RHZCVCxFQUFvQlMsRUFBSSxDQUFDTCxFQUFTZ0MsS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYcEMsRUFBb0JzQyxFQUFFRixFQUFZQyxLQUFTckMsRUFBb0JzQyxFQUFFbEMsRUFBU2lDLElBQzVFRSxPQUFPQyxlQUFlcEMsRUFBU2lDLEVBQUssQ0FBRUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxJQUUxRSxFQ05EckMsRUFBb0IyQyxFQUFJLFdBQ3ZCLEdBQTBCLGlCQUFmQyxXQUF5QixPQUFPQSxXQUMzQyxJQUNDLE9BQU9DLE1BQVEsSUFBSUMsU0FBUyxjQUFiLEVBQ2hCLENBQUUsTUFBTzFILEdBQ1IsR0FBc0IsaUJBQVgySCxPQUFxQixPQUFPQSxNQUN4QyxDQUNBLENBUHVCLEdDQXhCL0MsRUFBb0JzQyxFQUFJLENBQUNwRyxFQUFLOEcsSUFBVVQsT0FBT1UsVUFBVUMsZUFBZUMsS0FBS2pILEVBQUs4RyxHLE1DQWxGLElBQUlJLEVBQ0FwRCxFQUFvQjJDLEVBQUVVLGdCQUFlRCxFQUFZcEQsRUFBb0IyQyxFQUFFbEYsU0FBVyxJQUN0RixJQUFJN0MsRUFBV29GLEVBQW9CMkMsRUFBRS9ILFNBQ3JDLElBQUt3SSxHQUFheEksSUFDYkEsRUFBUzBJLGdCQUNaRixFQUFZeEksRUFBUzBJLGNBQWNwRSxNQUMvQmtFLEdBQVcsQ0FDZixJQUFJRyxFQUFVM0ksRUFBUzRJLHFCQUFxQixVQUM1QyxHQUFHRCxFQUFRRSxPQUVWLElBREEsSUFBSUMsRUFBSUgsRUFBUUUsT0FBUyxFQUNsQkMsR0FBSyxJQUFNTixHQUFXQSxFQUFZRyxFQUFRRyxLQUFLeEUsR0FFeEQsQ0FJRCxJQUFLa0UsRUFBVyxNQUFNLElBQUlPLE1BQU0seURBQ2hDUCxFQUFZQSxFQUFVUSxRQUFRLE9BQVEsSUFBSUEsUUFBUSxRQUFTLElBQUlBLFFBQVEsWUFBYSxLQUNwRjVELEVBQW9CNkQsRUFBSVQsQyxLQ2ZFcEQsRUFBb0IsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9jaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2NvdW50ZXJDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9jb21tZW50c1BvcHVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2dldENvbW1lbnRzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL3Bvc3RDb21tZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2NvdW50ZXJDYXJkcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvLi9zcmMvbW9kdWxlcy9jcmVhdGVDYXJkLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS8uL3NyYy9tb2R1bGVzL2ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLXJpY2stYW5kLW1vcnR5LWFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1yaWNrLWFuZC1tb3J0eS1hcGkvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgIXF1ZXVlLmQpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiAocXVldWUuZCA9IDApO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnZXRDaGFyYWN0ZXJzIGZyb20gJy4vbW9kdWxlcy9jaGFyYWN0ZXJzLmpzJztcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gJy4vbW9kdWxlcy9jcmVhdGVDYXJkLmpzJztcbmltcG9ydCBwb3B1cENvbW1lbnRzIGZyb20gJy4vbW9kdWxlcy9jb21tZW50c1BvcHVwLmpzJztcbmltcG9ydCB7IHBvc3RMaWtlLCBnZXRMaWtlcyB9IGZyb20gJy4vbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgZ2V0Q291bnRlckNhcmRzIGZyb20gJy4vbW9kdWxlcy9jb3VudGVyQ2FyZHMuanMnO1xuLy8gaW1wb3J0IGdldFJhbmRvbUFycmF5IGZyb20gJy4vbW9kdWxlcy9yYW5kb21OdW1iZXIuanMnO1xuXG5jb25zdCBjb250YWluZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRzLWNvbnRhaW5lcicpO1xuY29uc3QgY291bnRlckNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZXItY2FyZHMnKTtcblxuY29uc3QgY2hhcmFjdGVyc0RhdGEgPSBhd2FpdCBnZXRDaGFyYWN0ZXJzKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1XSk7XG4vLyBjb25zdCBjaGFyYWN0ZXJzRGF0YSA9IGF3YWl0IGdldENoYXJhY3RlcnMoZ2V0UmFuZG9tQXJyYXkoTWF0aC5yYW5kb20oKSAqIDEwICsgMSkpO1xuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50cy1idXR0b24nKSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBjaGFyYWN0ZXJEZXRhaWwgPSBhd2FpdCBnZXRDaGFyYWN0ZXJzKGlkKTtcbiAgICBwb3B1cENvbW1lbnRzKGNoYXJhY3RlckRldGFpbCwgY29udGFpbmVyUG9wdXApO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlrZS1idXR0b24nKSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgYXdhaXQgcG9zdExpa2UoaWQpO1xuICAgIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgY29uc3QgaWRJc0VxdWFsc1RvID0gKGxpa2VPYmosIGlkeCkgPT4gbGlrZU9iai5pdGVtX2lkID09PSBpZHg7XG4gICAgY29uc3QgcmVzdWx0ID0gbGlrZXNEYXRhLmZpbmQoKG9iaikgPT4gaWRJc0VxdWFsc1RvKG9iaiwgaWQpKSA/PyAwO1xuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lmxpa2VzID8/IDB9IExpa2VzYDtcbiAgfVxufSk7XG5cbmNoYXJhY3RlcnNEYXRhLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xuICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChjaGFyYWN0ZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG59KTtcblxuY29uc3QgY2FyZHNOdW1iZXIgPSBnZXRDb3VudGVyQ2FyZHMoY29udGFpbmVyKTtcbmNvdW50ZXJDYXJkcy50ZXh0Q29udGVudCA9IGBDaGFyYWN0ZXJzICgke2NhcmRzTnVtYmVyfSlgO1xuIiwiY29uc3QgZ2V0Q2hhcmFjdGVycyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2lkfWAsXG4gICk7XG4gIGNvbnN0IGNoYXJhY3RlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjaGFyYWN0ZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhcmFjdGVycztcbiIsImNvbnN0IGNvdW50ZXJDb21tZW50cyA9IChjb21tZW50c0NvbnRhaW5lcikgPT4ge1xuICBsZXQgY291bnRlciA9IDA7XG5cbiAgaWYgKGNvbW1lbnRzQ29udGFpbmVyKSB7XG4gICAgY291bnRlciA9IGNvbW1lbnRzQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICB9XG4gIHJldHVybiBjb3VudGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlckNvbW1lbnRzOyIsImltcG9ydCBxdWl0SWNvbiBmcm9tICcuLi9pbWcvaWNvbnM4LXgtNTAgKDEpLnBuZyc7XG5pbXBvcnQgcG9zdENvbW1lbnQgZnJvbSAnLi9wb3N0Q29tbWVudC5qcyc7XG5pbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9nZXRDb21tZW50cy5qcyc7XG5pbXBvcnQgY291bnRlckNvbW1lbnRzIGZyb20gJy4vY291bnRlckNvbW1lbnRzLmpzJztcblxuY29uc3QgcG9wdXBDb21tZW50cyA9IChkYXRhLCBjb250YWluZXIpID0+IHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tZGl2XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGFsdD1cInF1aXQgYnV0dG9uXCIgaWQ9XCJxdWl0XCIgY2xhc3M9XCJxdWl0LWJ1dHRvblwiPjxpbWcgc3JjPVwiJHtxdWl0SWNvbn1cIj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2V9XCI+XG4gICAgICAgICAgICA8aDE+JHtkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1kZXNjcmlwdGlvbi1lbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgIDxwPlN0YXR1czogJHtkYXRhLnN0YXR1c308L3A+XG4gICAgICAgICAgICAgICAgPHA+U3BlY2llczogJHtkYXRhLnNwZWNpZXN9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkdlbmRlcjogJHtkYXRhLmdlbmRlcn08L3A+XG4gICAgICAgICAgICAgICAgPHA+T3JpZ2luOiAke2RhdGEub3JpZ2luLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkxvY2F0aW9uOiAke2RhdGEubG9jYXRpb24ubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGluZy1jb21tZW50XCI+Q29tbWVudHM8L2gyPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzLWVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWZvcm0tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGgyPkFkZCBhIENvbW1lbnQ8L2gyPlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZD4gPGJyPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHQtYXJlYVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIG1heGxlbmd0aD1cIjMwMFwiIG5hbWU9XCJtZXNzYWdlXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT4gPGJyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uLWNvbW1lbnRcIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICBjb25zdCBxdWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aXQnKTtcbiAgcXVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1BZGRDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtZm9ybScpO1xuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtYXJlYScpO1xuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1lbGVtZW50cycpO1xuICBjb25zdCBoZWFkaW5nQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZy1jb21tZW50Jyk7XG5cbiAgaGVhZGluZ0NvbW1lbnRzLnRleHRDb250ZW50ID0gYENvbW1lbnQoJHtjb3VudGVyQ29tbWVudHMoY29tbWVudHNDb250YWluZXIpfSlgO1xuXG4gIGNvbnN0IGNvbW1lbnRzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb21tZW50c0NvbnRlbnQgPSBhd2FpdCBnZXRDb21tZW50cyhkYXRhLmlkKTtcbiAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoY29tbWVudHNDb250ZW50ICE9PSAwKSB7XG4gICAgICBjb21tZW50c0NvbnRlbnQuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgIDxsaSBjbGFzcz1cImluZGl2aWR1YWwtY29tbWVudFwiPjxwPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9OiAke2NvbW1lbnQuY29tbWVudH08L3A+PC9saT5cbiAgICAgIGA7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudHNDb250YWluZXIuaW5uZXJIVE1MID0gJ05vIENvbW1lbnRzIFlldCc7XG4gICAgfVxuXG4gICAgaGVhZGluZ0NvbW1lbnRzLnRleHRDb250ZW50ID0gYENvbW1lbnQoJHtjb3VudGVyQ29tbWVudHMoY29tbWVudHNDb250YWluZXIpfSlgO1xuICB9O1xuXG4gIGNvbW1lbnRzRGF0YSgpO1xuXG4gIGZvcm1BZGRDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSB1c2VybmFtZS52YWx1ZTtcbiAgICBjb25zdCB0ZXh0ID0gY29tbWVudC52YWx1ZTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudChkYXRhLmlkLCBuYW1lLCB0ZXh0KTtcbiAgICBjb21tZW50c0RhdGEoKTtcbiAgICB1c2VybmFtZS52YWx1ZSA9ICcnO1xuICAgIGNvbW1lbnQudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3B1cENvbW1lbnRzO1xuIiwiY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy94cUhsOTV2aXYzRDZGUkVkUWQzcC9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudHM7XG4iLCJjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpZCwgdXNlcm5hbWUsIGNvbW1lbnRlKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hxSGw5NXZpdjNENkZSRWRRZDNwL2NvbW1lbnRzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRlLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50O1xuIiwiY29uc3QgZ2V0Q291bnRlckNhcmRzID0gKGNvbnRhaW5lcikgPT4ge1xuICBpZiAoY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvdW50ZXJDYXJkczsiLCJpbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vaW52b2x2ZW1lbnRBUEkuanMnO1xuLy8gaW1wb3J0IGxpa2VJbWcgZnJvbSAnLi4vaW1nL2ljb25zOC1oZWFydC0zMi5wbmcnO1xuXG5jb25zdCBsaWtlc0RhdGEgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNoYXJhY3RlcikgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICBjYXJkLmlkID0gY2hhcmFjdGVyLmlkO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NOYW1lID0gJ2NhcmQtaW1hZ2UnO1xuICBpbWcuc3JjID0gY2hhcmFjdGVyLmltYWdlO1xuICBpbWcuYWx0ID0gY2hhcmFjdGVyLm5hbWU7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuXG4gIGNvbnN0IGNvbnRhaW5lckNhcmRUaXRsZUxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bi5jbGFzc05hbWUgPSAnY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bic7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBjaGFyYWN0ZXIubmFtZTtcbiAgY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bi5hcHBlbmRDaGlsZChuYW1lKTtcblxuICBjb25zdCBjb250YWluZXJMaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXJMaWtlcy5jbGFzc05hbWUgPSAnY29udGFpbmVyTGlrZXMnO1xuXG4gIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlLWJ1dHRvbicpO1xuXG4gIGNvbnN0IGxpa2VCdXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gbGlrZUJ1dHRvbkltZy5zcmMgPSBsaWtlSW1nO1xuICBsaWtlQnV0dG9uSW1nLmNsYXNzTGlzdC5hZGQoJ2xpa2UtaW1nJyk7XG5cbiAgbGlrZUJ1dHRvbi5hcHBlbmRDaGlsZChsaWtlQnV0dG9uSW1nKTtcbiAgY29udGFpbmVyTGlrZXMuYXBwZW5kQ2hpbGQobGlrZUJ1dHRvbik7XG5cbiAgY29uc3QgaWRJc0VxdWFsc1RvID0gKGxpa2VPYmosIGlkeCkgPT4gbGlrZU9iai5pdGVtX2lkID09PSBpZHg7XG4gIGNvbnN0IHJlc3VsdCA9IGxpa2VzRGF0YS5maW5kKChvYmopID0+IGlkSXNFcXVhbHNUbyhvYmosIGNhcmQuaWQpKSA/PyAwO1xuXG4gIGNvbnN0IGxpa2VzTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsaWtlc051bWJlci50ZXh0Q29udGVudCA9IGAke3Jlc3VsdC5saWtlcyA/PyAwfSBMaWtlc2A7XG4gIGNvbnRhaW5lckxpa2VzLmFwcGVuZENoaWxkKGxpa2VzTnVtYmVyKTtcbiAgY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0bi5hcHBlbmRDaGlsZChjb250YWluZXJMaWtlcyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDYXJkVGl0bGVMaWtlQnRuKTtcblxuICBjb25zdCBjb21tZW50c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb21tZW50c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50cy1idXR0b24nKTtcbiAgY29tbWVudHNCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudHNCdXR0b24pO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNlcnZhdGlvbnNCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb25zLWJ1dHRvbicpO1xuICByZXNlcnZhdGlvbnNCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb25zJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uc0J1dHRvbik7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDtcbiIsImV4cG9ydCBjb25zdCBwb3N0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBoZWFkZXJzTGlzdCA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9O1xuICBjb25zdCBib2R5Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3hxSGw5NXZpdjNENkZSRWRRZDNwL2xpa2VzLycsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBib2R5Q29udGVudCxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNMaXN0LFxuICAgIH0sXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMveHFIbDk1dml2M0Q2RlJFZFFkM3AvbGlrZXMnLFxuICApO1xuICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsaWtlc0RhdGE7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTM4KTtcbiJdLCJuYW1lcyI6WyJ3ZWJwYWNrUXVldWVzIiwid2VicGFja0V4cG9ydHMiLCJ3ZWJwYWNrRXJyb3IiLCJyZXNvbHZlUXVldWUiLCJjb250YWluZXJQb3B1cCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiY291bnRlckNhcmRzIiwiY2hhcmFjdGVyc0RhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwiYXN5bmMiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJjaGFyYWN0ZXJEZXRhaWwiLCJsaWtlc0RhdGEiLCJpZElzRXF1YWxzVG8iLCJsaWtlT2JqIiwiaWR4IiwiaXRlbV9pZCIsInJlc3VsdCIsImZpbmQiLCJvYmoiLCJuZXh0U2libGluZyIsInRleHRDb250ZW50IiwibGlrZXMiLCJmb3JFYWNoIiwiY2hhcmFjdGVyIiwiY2FyZCIsImFwcGVuZENoaWxkIiwiY2FyZHNOdW1iZXIiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImNvbW1lbnRzQ29udGFpbmVyIiwiY291bnRlciIsImNoaWxkRWxlbWVudENvdW50IiwiZGF0YSIsImlubmVySFRNTCIsImltYWdlIiwibmFtZSIsInN0YXR1cyIsInNwZWNpZXMiLCJnZW5kZXIiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImZvcm1BZGRDb21tZW50IiwidXNlcm5hbWUiLCJjb21tZW50IiwiaGVhZGluZ0NvbW1lbnRzIiwiY29tbWVudHNEYXRhIiwiY29tbWVudHNDb250ZW50Iiwib2siLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY3JlYXRpb25fZGF0ZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0ZXh0IiwiY29tbWVudGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiY29udGFpbmVyQ2FyZFRpdGxlTGlrZUJ0biIsImNvbnRhaW5lckxpa2VzIiwibGlrZUJ1dHRvbiIsImFkZCIsImxpa2VCdXR0b25JbWciLCJsaWtlc051bWJlciIsImNvbW1lbnRzQnV0dG9uIiwicmVzZXJ2YXRpb25zQnV0dG9uIiwicG9zdExpa2UiLCJib2R5Q29udGVudCIsImdldExpa2VzIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJTeW1ib2wiLCJxdWV1ZSIsImQiLCJmbiIsInIiLCJhIiwiaGFzQXdhaXQiLCJjdXJyZW50RGVwcyIsIm91dGVyUmVzb2x2ZSIsInJlamVjdCIsImRlcFF1ZXVlcyIsIlNldCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlaiIsIngiLCJkZXBzIiwibWFwIiwiZGVwIiwidGhlbiIsInJldCIsIndyYXBEZXBzIiwiZ2V0UmVzdWx0IiwiZm5RdWV1ZSIsInEiLCJoYXMiLCJwdXNoIiwiZXJyIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsIndpbmRvdyIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwiY3VycmVudFNjcmlwdCIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsImkiLCJFcnJvciIsInJlcGxhY2UiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==