"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[734],{734:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(885),o=t(791),a=t(501),c=t(207),s="Form_form__e1yzW",u="Form_searchInput__X8+62",i="Form_searchButton__nK6j9",l=t(126),f=t(66),d=t(184),h=function(e){var n=e.query,t=e.onSearch,a=(0,o.useState)(""),c=(0,r.Z)(a,2),h=c[0],p=c[1];(0,o.useEffect)((function(){p(n)}),[n]);return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),null!==h?h!==n&&t({search:h}):f.Am.warn("You have to write something",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},className:s,children:[(0,d.jsx)("input",{type:"text",name:"input",value:h||" ",onChange:function(e){p(e.target.value)},className:u,placeholder:"Enter movie name..."}),(0,d.jsx)("button",{type:"submit",className:i,children:(0,d.jsx)(l.dVI,{})})]})},p=(t(462),t(924)),g=(0,o.lazy)((function(){return t.e(841).then(t.bind(t,841))})),m=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],u=(0,a.lr)(),i=(0,r.Z)(u,2),l=i[0],m=i[1],v=l.get("search");return(0,o.useEffect)((function(){null!==v&&c.KL(v).then((function(e){var n=e.results;if(!n.length)return f.Am.error('Not found anything for "'.concat(v,'"'),{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});s(n),f.Am.success("Results for ".concat(v),{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}))}),[v]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{query:v,onSearch:m}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,d.jsx)(p.iT,{height:80,width:80,color:"black",visible:!0,ariaLabel:"oval-loading",secondaryColor:"grey",strokeWidth:2,strokeWidthSecondary:2})}),children:t&&(0,d.jsx)(g,{movies:t})})]})}},207:function(e,n,t){t.d(n,{Hx:function(){return h},KL:function(){return p},Y5:function(){return f},_k:function(){return l},uV:function(){return d}});var r=t(861),o=t(757),a=t.n(o),c="https://api.themoviedb.org/3",s="296d44092a8a94dcab4a4c4bb6b7444f";function u(){return i.apply(this,arguments)}function i(){return i=(0,r.Z)(a().mark((function e(){var n,t,r,o=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function l(){return u("".concat(c,"/trending/movie/day?api_key=").concat(s))}function f(e){return u("".concat(c,"/movie/").concat(e,"?api_key=").concat(s))}function d(e){return u("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function h(e){return u("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}function p(e){return u("".concat(c,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=734.3a0a2738.chunk.js.map