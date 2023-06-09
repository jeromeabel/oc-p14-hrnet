import{r as x,A as I,u as L,j as N}from"./index-ef1d98ad.js";var e={},D={get exports(){return e},set exports(t){e=t}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v;function M(){if(v)return y;v=1;var t=I,r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(a,n,m){var h,u={},j=null,p=null;m!==void 0&&(j=""+m),n.key!==void 0&&(j=""+n.key),n.ref!==void 0&&(p=n.ref);for(h in n)l.call(n,h)&&!o.hasOwnProperty(h)&&(u[h]=n[h]);if(a&&a.defaultProps)for(h in n=a.defaultProps,n)u[h]===void 0&&(u[h]=n[h]);return{$$typeof:r,type:a,key:j,ref:p,props:u,_owner:c.current}}return y.Fragment=s,y.jsx=i,y.jsxs=i,y}(function(t){t.exports=M()})(D);const R=({label:t,name:r,sortKey:s,sortOrder:l,onSort:c,isActive:o})=>{const i=()=>s===r&&l==="asc"?"▲":s===r&&l==="desc"?"▼":"▼▲";return e.jsx("th",{className:"font-semibold tracking-wide text-gray-600 p-2 min-w-fit whitespace-nowrap",children:e.jsxs("button",{className:`hover:text-black hover:cursor-pointer  flex gap-2 items-center ${o?" text-black":""}`,onClick:()=>c(r),children:[t,e.jsx("span",{className:`w-10 text-left ${o?" text-black":"text-gray-300"} `,children:i()})]})})},T=({headers:t,onSort:r})=>{const[s,l]=x.useState(""),[c,o]=x.useState("asc"),i=a=>{const n=s===a&&c==="asc"?"desc":"asc";l(a),o(n),r(a,n)};return e.jsx("thead",{className:"border-b",children:e.jsx("tr",{children:t.map((a,n)=>{const m=s===a.name;return e.jsx(R,{name:a.name,label:a.label,sortKey:s,sortOrder:c,isActive:m,onSort:i},n)})})})},A=({items:t})=>{const r=s=>typeof s!="object"||!(s instanceof Date)?String(s):s.toLocaleString().split(" ")[0];return e.jsx("tbody",{className:"text-sm text-gray-800",children:t.map((s,l)=>e.jsx("tr",{className:"even:bg-slate-50",children:Object.keys(s).map((c,o)=>e.jsx("td",{className:"p-2 whitespace-nowrap",children:r(s[c])},o))},l))})},B=({onChange:t})=>{const r=s=>{const l=s.target.value,c=parseInt(l,10);isNaN(c)||t(c)};return e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{htmlFor:"entriesSelect","aria-label":"Select the number of entries",children:"Show:"}),e.jsxs("select",{className:"p-1 bg-slate-100 rounded",id:"entriesSelect",onChange:r,children:[e.jsx("option",{children:"10"}),e.jsx("option",{children:"25"}),e.jsx("option",{children:"50"}),e.jsx("option",{children:"100"})]}),e.jsx("span",{children:"entries"})]})},U=({onChange:t})=>{const r=s=>{const l=s.target.value;t(l)};return e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("label",{htmlFor:"searchInput","aria-label":"Filter the data with a search term",children:"Search:"}),e.jsx("input",{className:"p-2 border rounded",id:"searchInput",type:"text",placeholder:"...",onChange:r})]})},z=({currentPage:t,totalPages:r,onChange:s})=>{const l=i=>{i>=1&&i<=r&&s(i)},c=()=>{const i=[];for(let a=1;a<=r;a++){const n=a===t;i.push(e.jsx("button",{className:`px-4 border rounded hover:cursor-pointer hover:border-gray-600  ${n?"border-black":"border-transparent"}`,onClick:()=>l(a),disabled:n,"aria-label":`Page ${a}`,"aria-current":n,children:a},a))}return i},o=(i,a,n)=>e.jsx("button",{className:`py-2 px-4 rounded bg-gray-200 ${n?"opacity-40 ":"hover:cursor-pointer hover:bg-gray-100"}`,onClick:a,disabled:n,children:i});return e.jsxs("nav",{className:"flex gap-2 flex-wrap","aria-label":"Pagination of the table element",children:[o("Previous",()=>l(t-1),t===1),c(),o("Next",()=>l(t+1),t===r)]})},S=({message:t,type:r="error"})=>{const s={error:"text-red-500",warning:"text-orange-500"}[r]||"";return e.jsxs("div",{className:`animate-pulse ${s}`,children:[e.jsx("h1",{className:"text-2xl",children:"⚠️"}),e.jsx("p",{children:t})]})},K=(t,r,s)=>{const l=[...t].sort((c,o)=>{if(!c[r])throw new Error(`The property "${r}" does not exist in the array.`);return c[r]<o[r]?1:-1});return s&&l.reverse(),l},Z=(t,r)=>t.filter(s=>Object.values(s).some(l=>typeof l=="string"&&l.toLowerCase().includes(r.toLowerCase()))),H=({headers:t,items:r,sortBy:s})=>{const[l,c]=x.useState(""),[o,i]=x.useState(10),[a,n]=x.useState(1),[m,h]=x.useState(s),[u,j]=x.useState("asc"),p=x.useMemo(()=>Z(r,l),[r,l]),g=x.useMemo(()=>{const d=(a-1)*o,b=Math.min(d+o,p.length);let f=p.slice(d,b);if(m)try{f=K(f,m,u==="asc")}catch($){console.error($)}return{items:f,startEntry:d,endEntry:b,totalEntries:p.length}},[p,a,o,m,u]),E=x.useMemo(()=>Math.ceil(g.totalEntries/o),[g.totalEntries,o]),C=(d,b)=>{h(d),j(b)},_=d=>{const b=(a-1)*o,f=Math.floor(b/d)+1;i(d),n(f)},k=d=>{c(d),n(1)},O=d=>{n(d)};let w=g.startEntry+1;g.totalEntries===0&&(w=0);const P=r.length>0,F=p.length>0;return e.jsxs("div",{className:"flex flex-col gap-4 lg:gap-8 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row justify-between",children:[e.jsx(B,{onChange:_}),e.jsx(U,{onChange:k})]}),e.jsx("div",{className:"border shadow-lg rounded p-0 lg:p-2 overflow-auto",children:P?F?e.jsxs("table",{className:"w-full",children:[e.jsx(T,{headers:t,onSort:C}),e.jsx(A,{items:g.items})]}):e.jsx(S,{type:"warning",message:"No results found."}):e.jsx(S,{type:"error",message:"No items available."})}),e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row justify-between",children:[e.jsxs("div",{children:["Showing ",w," to ",g.endEntry," of"," ",g.totalEntries," entries"]}),e.jsx(z,{currentPage:a,totalPages:E,onChange:O})]})]})};const Q=[{name:"firstName",label:"First name"},{name:"lastName",label:"Last name"},{name:"dateOfBirth",label:"Date of birth"},{name:"startDate",label:"Start date"},{name:"street",label:"Street"},{name:"city",label:"City"},{name:"state",label:"State"},{name:"zipCode",label:"Zip code"},{name:"department",label:"Department"}],W=()=>{const{employees:t}=L();return N.jsxs("div",{children:[N.jsx("h1",{className:"mb-8 text-4xl",children:"Current employees"}),N.jsx(H,{headers:Q,items:t})]})};export{W as default};
