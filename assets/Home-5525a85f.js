import{r as n,j as e}from"./index-16145cb4.js";import{C as c}from"./CTA-2bc93122.js";const m="/oc-p14-hrnet/bg/bg.jpg",p="/oc-p14-hrnet/bg/bg-placeholder2.jpg",h=({originalImage:s,placeholderImage:r})=>{const[l,o]=n.useState(!0),i=()=>{o(!1)},t=g=>{const x=[600,900,1200,1600],d=g.replace(/\.[^/.]+$/,"");return x.map(a=>`${d}-${a}.webp ${a}w`).join(", ")};return e.jsxs("div",{className:"relative h-full",children:[l&&e.jsx("img",{src:r,alt:"Placeholder",className:"absolute h-full inset-0 object-cover",width:"1440",height:"960"}),e.jsxs("picture",{children:[e.jsx("source",{srcSet:t(s),type:"image/webp"}),e.jsx("source",{srcSet:t(s),type:"image/jpeg"}),e.jsx("img",{src:`${s}-1600.jpg`,alt:"Image",className:`w-full  h-full object-cover rounded-lg   ${l?"hidden":"block"}`,onLoad:i,width:"1440",height:"900",sizes:"(max-width: 1023px) 100vw, 50vw"})]})]})},f=()=>e.jsxs("div",{className:"h-full flex flex-col-reverse lg:flex-row py-4 lg:py-8 gap-4 lg:gap-16",children:[e.jsxs("div",{className:"flex-1 flex flex-col justify-center gap-2 lg:gap-4",children:[e.jsx("h1",{className:"text-4xl lg:text-5xl",children:"Welcome"}),e.jsx("h2",{className:"text-3xl lg:text-4xl",children:"HRnet is the app to manage employees records."}),e.jsx("p",{className:"text-xl mt-2 lg:mt-4",children:"Please, select your action"}),e.jsxs("div",{className:"flex gap-4 lg:gap-8 mt-8 lg:mt-16",children:[e.jsx(c,{title:"Add employee",href:"/add"}),e.jsx(c,{title:"View employees",href:"/view"})]})]}),e.jsx("div",{className:"flex-1 rounded-lg",children:e.jsx(h,{originalImage:m,placeholderImage:p})})]});export{f as default};
