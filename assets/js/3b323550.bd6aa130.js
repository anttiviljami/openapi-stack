"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[3939],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:4},o="Request validation",l={unversionedId:"openapi-backend/request-validation",id:"openapi-backend/request-validation",title:"Request validation",description:"All you need to enable request validation is to register a validationFail handler.",source:"@site/docs/openapi-backend/request-validation.md",sourceDirName:"openapi-backend",slug:"/openapi-backend/request-validation",permalink:"/docs/openapi-backend/request-validation",draft:!1,editUrl:"https://github.com/anttiviljami/openapi-stack/edit/main/docs/openapi-backend/request-validation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Operation Handlers",permalink:"/docs/openapi-backend/operation-handlers"},next:{title:"Response validation",permalink:"/docs/openapi-backend/response-validation"}},p={},s=[],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request-validation"},"Request validation"),(0,r.kt)("p",null,"All you need to enable request validation is to register a ",(0,r.kt)("a",{parentName:"p",href:"/docs/openapi-backend/api#validationfail-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"validationFail"))," handler."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'function validationFailHandler(c: Context, _req: Request, res: Response) {\n  return res.status(400).json({ status: 400, err: c.validation.errors });\n}\napi.register("validationFail", validationFailHandler);\n')),(0,r.kt)("p",null,"Once registered, this handler gets called if any JSON Schemas in either operation parameters (in: path, query, header, cookie) or requestPayload don't match the request."),(0,r.kt)("p",null,"The context object ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," gets a ",(0,r.kt)("inlineCode",{parentName:"p"},"validation")," property with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/openapi-backend/api#validationresult-object"},"validation result"),"."))}u.isMDXComponent=!0}}]);