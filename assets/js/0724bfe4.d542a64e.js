"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[4994],{4137:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(k,s(s({ref:t},l),{},{components:a})):n.createElement(k,s({ref:t},l))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(4137));const r={title:"Quick Start",hide_title:!0,sidebar_position:1},s=void 0,o={unversionedId:"openapi-backend/intro",id:"openapi-backend/intro",title:"Quick Start",description:"openapi-backend",source:"@site/docs/openapi-backend/intro.md",sourceDirName:"openapi-backend",slug:"/openapi-backend/intro",permalink:"/docs/openapi-backend/intro",draft:!1,editUrl:"https://github.com/epilot-dev/docs/edit/main/docs/openapi-backend/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Philosophy",permalink:"/docs/api-first"},next:{title:"Examples",permalink:"/docs/openapi-backend/examples"}},p={},c=[{value:"Features",id:"features",level:2},{value:"Quick Start",id:"quick-start",level:2}],l={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{alt:"openapi-backend logo",src:"/img/openapi-stack-logo.png",className:"max-w-[150px]"}),(0,i.kt)("h1",{className:"mb-6"},"openapi-backend"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/anttiviljami/openapi-backend/actions?query=workflow%3ACI"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/anttiviljami/openapi-backend/workflows/CI/badge.svg",alt:"CI"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/anttiviljami/openapi-backend"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/anttiviljami/openapi-backend?label=github%20stars",alt:"GitHub stars"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-backend"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/openapi-backend.svg",alt:"npm version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-backend"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dw/openapi-backend",alt:"npm downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/anttiviljami/openapi-backend/blob/master/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"http://img.shields.io/:license-mit-blue.svg",alt:"License"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://buymeacoff.ee/anttiviljami"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/donate-buy%20me%20a%20coffee-orange",alt:"Buy me a coffee"}))),(0,i.kt)("p",null,(0,i.kt)("b",null,"Build, Validate, Route, Authenticate, and Mock using OpenAPI definitions.")),(0,i.kt)("p",null,"OpenAPI Backend is a Framework-agnostic middleware tool for building beautiful APIs with ",(0,i.kt)("a",{href:"https://github.com/OAI/OpenAPI-Specification"},"OpenAPI Specification"),".")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Build APIs by describing them in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md"},"OpenAPI specification")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Register handlers for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#fixed-fields-8"},"operationIds"),"\nto route requests in your favourite Node.js backend"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#data-types"},"JSON Schema")," to validate\nAPI requests and/or responses. OpenAPI Backend uses the ",(0,i.kt)("a",{parentName:"li",href:"https://ajv.js.org/"},"AJV")," library under the hood for performant validation"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Register Auth / Security Handlers for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#securitySchemeObject"},"OpenAPI Security Schemes"),"\nto authorize API requests"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Auto-mock API responses using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#example-object"},"OpenAPI examples objects"),"\nor ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schema-object"},"JSON Schema definitions")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Built with TypeScript, types included"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Optimised runtime routing and validation. ",(0,i.kt)("strong",{parentName:"li"},"No generated code!")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","OpenAPI 3.1 support")),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"The easiest way to get started with OpenAPI Backend is to check out one of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/openapi-backend/examples"},"examples"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save openapi-backend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import OpenAPIBackend from "openapi-backend";\n\n// create api with your definition file or object\nconst api = new OpenAPIBackend({ definition: "./petstore.yml" });\n\n// register your framework specific request handlers here\napi.register({\n  getPets: (c, req, res) => res.status(200).json({ result: "ok" }),\n  getPetById: (c, req, res) => res.status(200).json({ result: "ok" }),\n  validationFail: (c, req, res) =>\n    res.status(400).json({ err: c.validation.errors }),\n  notFound: (c, req, res) => res.status(404).json({ err: "not found" }),\n});\n\n// initalize the backend\napi.init();\n')))}d.isMDXComponent=!0}}]);