var e=(e,a,t)=>new Promise(((s,l)=>{var o=e=>{try{r(t.next(e))}catch(a){l(a)}},n=e=>{try{r(t.throw(e))}catch(a){l(a)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,n);r((t=t.apply(e,a)).next())}));import{_ as a}from"./CommonPage.82132f80.js";import{_ as t}from"./TheIcon.4b855aa1.js";import{E as s}from"./style.094cf8fe.js";import{m as l,z as o,ac as n,H as r,c as i,w as u,o as c,e as m,a as d,h as f,d as p,b as v,_ as h}from"./index.9d7012d3.js";import"./AppPage.0b05ab95.js";const y={"mb-15":"",flex:"","items-center":"","justify-between":""},b=m("div",{"text-23":"","font-bold":""}," 关于我 ",-1),g=l({name:"关于我"}),j=Object.assign(g,{setup(l){let g=o(""),j=o(!1);function x(){return e(this,null,(function*(){try{j.value=!0,yield r.updateAbout({content:g.value}),$message.success("更新成功")}finally{j.value=!1}}))}return n((()=>e(this,null,(function*(){const e=yield r.getAbout();g.value=e.data})))),(e,l)=>{const o=t,n=h,r=a;return c(),i(r,{"show-header":!1},{default:u((()=>[m("div",y,[b,d(n,{type:"primary",loading:j.value,onClick:x},{default:u((()=>[j.value?f("",!0):(c(),i(o,{key:0,icon:"line-md:confirm-circle","mr-5":"",size:18})),p(" 保存 ")])),_:1},8,["loading"])]),d(v(s),{modelValue:g.value,"onUpdate:modelValue":l[0]||(l[0]=e=>g.value=e),style:{height:"calc(100vh - 305px)"}},null,8,["modelValue"])])),_:1})}}});export{j as default};