"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[1069],{4137:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),i=(t(7294),t(4137));const a={hide_title:!0,sidebar_position:10},o="API Versioning",p={unversionedId:"openapi-backend/versioning",id:"openapi-backend/versioning",title:"API Versioning",description:"Since OpenAPI specification already supports the version field in the info object,",source:"@site/docs/openapi-backend/versioning.md",sourceDirName:"openapi-backend",slug:"/openapi-backend/versioning",permalink:"/docs/openapi-backend/versioning",draft:!1,editUrl:"https://github.com/epilot-dev/docs/edit/main/docs/openapi-backend/versioning.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Javascript API",permalink:"/docs/openapi-backend/api"},next:{title:"Quick Start",permalink:"/docs/openapi-client-axios/intro"}},c={},s=[],l={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-versioning"},"API Versioning"),(0,i.kt)("p",null,"Since OpenAPI specification already supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," field in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#infoObject"},(0,i.kt)("inlineCode",{parentName:"a"},"info")," object"),",\nit's easy to do URI versioning utilising multiple ",(0,i.kt)("a",{parentName:"p",href:"#class-openapibackend"},(0,i.kt)("inlineCode",{parentName:"a"},"OpenAPIBackend"))," instances with different\n",(0,i.kt)("a",{parentName:"p",href:"#parameter-optsapiroot"},(0,i.kt)("inlineCode",{parentName:"a"},"apiRoot"))," values."),(0,i.kt)("p",null,"Simple example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const apiV1 = new OpenAPIBackend({\n  definition: "./openapi-v1.json",\n  apiRoot: "/v1",\n});\n\nconst apiV2 = new OpenAPIBackend({\n  definition: "./openapi-v2.json",\n  apiRoot: "/v2",\n});\n\nconst v1Handlers = {\n  notFound,\n  getPet,\n  listPets,\n  createPet,\n};\napiV1.register(v1Handlers);\n\nconst v2Handlers = {\n  ...v1Handlers,\n  deletePet, // add new operation\n  createPet: createPetV2, // override old handler\n};\napiV2.register(v2Handlers);\n')),(0,i.kt)("p",null,"For a real world API versioning implementation with ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-backend"),", see\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ether/etherpad-lite/blob/39425e4e5bc4579d4b478d3b8b5e92fde55bde86/src/node/hooks/express/openapi.js"},"ether/etherpad")))}u.isMDXComponent=!0}}]);