"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[904],{904:function(e,n,t){t.r(n);var r=t(885),a=t(871),c=t(501),i=t(791),o=t(207),u=t(184),s=(0,i.lazy)((function(){return t.e(724).then(t.bind(t,724))}));n.default=function(){var e,n,t=(0,a.UO)().movieId,l=(0,i.useState)(""),d=(0,r.Z)(l,2),f=d[0],v=d[1],h=f.title,p=f.name,m=f.poster_path,x=f.vote_average,g=f.overview,j=f.genres,k=f.release_date,_=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";k&&(k=k.slice(0,4)),(0,i.useEffect)((function(){o.Y5(t).then(v)}),[t]);return(0,u.jsx)(u.Fragment,{children:f&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.rU,{to:_,children:"Back to products"}),(0,u.jsx)(s,{poster_path:m,title:h,name:p,release_date:k,vote_average:x,overview:g,getGenresList:function(){return function(){if(f)return j.map((function(e){return e.name})).join(", ")}()}}),(0,u.jsx)("hr",{}),(0,u.jsx)("div",{children:"Additional information: "}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)("div",{children:"Load Additional information..."}),children:(0,u.jsx)(a.j3,{})})]})})}},207:function(e,n,t){t.d(n,{Hx:function(){return v},KL:function(){return h},Y5:function(){return d},_k:function(){return l},uV:function(){return f}});var r=t(861),a=t(757),c=t.n(a),i="https://api.themoviedb.org/3",o="296d44092a8a94dcab4a4c4bb6b7444f";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(c().mark((function e(){var n,t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(){return u("".concat(i,"/trending/movie/day?api_key=").concat(o))}function d(e){return u("".concat(i,"/movie/").concat(e,"?api_key=").concat(o))}function f(e){return u("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function v(e){return u("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}function h(e){return u("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=904.98171c72.chunk.js.map