import{r,o as z,a as d,c,d as t,k as b,j as u,v as p,F as f,g as k,t as n,b as l,w as o,u as i,T as V,i as H}from"./app.4c99d882.js";import{I as A,g as Z,S as C,v as M}from"./menu.74fd1659.js";/* empty css            */const B={class:"mt-[25px]"},G=t("div",{class:"font-bold text-primary py-4 text-xl"},"Penyakit",-1),I={class:"inputan"},N=t("span",null,"Kode",-1),O={class:"inputan"},P=t("span",null,"Value",-1),R=t("div",null,[t("br"),t("button",{class:"bg-primary/20 text-primary px-10 py-2 rounded-full"}," Add Data ")],-1),T={class:"w-full text-sm border border-gray-200 bg-white rounded-xl shadows p-4 pt-10 mt-6 max-h-[85vh] overflow-auto"},F={class:"px-4"},E={class:"table-auto w-[600px] md:w-full"},L=t("thead",null,[t("tr",{class:"text-left"},[t("th",null,"No."),t("th",null,"Kode"),t("th",null,"Value"),t("th",null,"Aksi")])],-1),J={class:"pr-6 py-2"},Q={class:"pr-6 py-2"},W={class:"pr-6 py-2"},X={class:"pr-6 py-2"},Y=t("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",class:"w-4 h-4"},[t("path",{fill:"currentColor",d:"M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"}),t("path",{fill:"currentColor",d:"M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"}),t("path",{fill:"currentColor",d:"M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"}),t("path",{fill:"currentColor",d:"M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"})],-1),tt={class:"relative z-30"},et={class:"px-1 py-1"},at=["onClick"],st=t("div",{class:"text-center pt-4"},null,-1),lt={class:"my-[70px]"},ot={class:"mt-[25px]"},it=t("div",{class:"font-bold text-primary py-4 text-xl"},"Gejala",-1),nt={class:"inputan"},rt=t("span",null,"Kode",-1),dt={class:"inputan"},ct=t("span",null,"Value",-1),ut=t("div",null,[t("br"),t("button",{class:"bg-primary/20 text-primary px-10 py-2 rounded-full"}," Add Data ")],-1),pt={class:"w-full my-[20px] text-sm border border-gray-200 bg-white rounded-xl shadows p-4 pt-10 max-h-[85vh] overflow-auto"},vt={class:"px-4"},_t={class:"table-auto w-[600px] md:w-full"},ht=t("thead",null,[t("tr",{class:"text-left"},[t("th",null,"No."),t("th",null,"Kode"),t("th",null,"Value"),t("th",null,"Aksi")])],-1),mt={class:"pr-6 py-2"},yt={class:"pr-6 py-2"},gt={class:"pr-6 py-2"},ft={class:"pr-6 py-2"},xt=t("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",class:"w-4 h-4"},[t("path",{fill:"currentColor",d:"M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"}),t("path",{fill:"currentColor",d:"M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"}),t("path",{fill:"currentColor",d:"M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"}),t("path",{fill:"currentColor",d:"M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"})],-1),wt={class:"relative z-30"},bt={class:"px-1 py-1"},kt=["onClick"],Vt=t("div",{class:"text-center pt-4"},null,-1),Ht={class:"my-[70px]"},At={class:"mt-[25px]"},Zt=t("div",{class:"font-bold text-primary py-4 text-xl"},"Relasi",-1),Ct={class:"inputan"},Mt=t("span",null,"Kode Penyakit",-1),jt={class:"inputan"},Dt=t("span",null,"Kode Gejala",-1),St=t("div",null,[t("br"),t("button",{class:"bg-primary/20 text-primary px-10 py-2 rounded-full"}," Add Data ")],-1),qt={class:"w-full my-[20px] text-sm border border-gray-200 bg-white rounded-xl shadows p-4 pt-10 max-h-[85vh] overflow-auto"},Kt={class:"px-4"},Ut={class:"table-auto w-[600px] md:w-full"},$t=t("thead",null,[t("tr",{class:"text-left"},[t("th",null,"No."),t("th",null,"Kode Gejala"),t("th",null,"Kode Penyakit"),t("th",null,"Aksi")])],-1),zt={class:"pr-6 py-2"},Bt={class:"pr-6 py-2"},Gt={class:"pr-6 py-2"},It={class:"pr-6 py-2"},Nt=t("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",class:"w-4 h-4"},[t("path",{fill:"currentColor",d:"M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"}),t("path",{fill:"currentColor",d:"M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"}),t("path",{fill:"currentColor",d:"M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"}),t("path",{fill:"currentColor",d:"M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"})],-1),Ot={class:"relative z-30"},Pt={class:"px-1 py-1"},Rt=["onClick"],Tt=t("div",{class:"text-center pt-4"},null,-1),Qt={name:"exam",setup(Ft){r(["2023-01-01",new Date().toISOString().split("T")[0]]);const v=r([]),j=r([]),D=r([]),_=r({kode:"",value:""}),h=r({kode:"",value:""}),m=r({gejala_kode:"",penyakit_kode:""});async function S(){v.value=[];try{const{data:s}=await axios.get("/diagnose/penyakit?limit=1000");console.log(s),v.value=s.data.data}catch(s){s.response.request.status==401&&(localStorage.removeItem("token"),location.reload())}}async function U(){v.value=[];try{const{data:s}=await axios.get("/diagnose/gejala?limit=1000");console.log(s),j.value=s.data.data}catch(s){s.response.request.status==401&&(localStorage.removeItem("token"),location.reload())}}async function $(){v.value=[];try{const{data:s}=await axios.get("/diagnose/relasi?limit=1000");console.log(s),D.value=s.data.data}catch(s){s.response.request.status==401&&(localStorage.removeItem("token"),location.reload())}}async function x(s){let a={};s=="/diagnose/penyakit"&&(a=_.value),s=="/diagnose/gejala"&&(a=h.value),s=="/diagnose/relasi"&&(a=m.value);try{const{data:e}=await axios.post(s,a)}catch(e){console.log(e)}}async function w(s){if(confirm(`Do you want to Delete ${s.name} !`))try{const{data:a}=await axios.delete(`/user/${s.id}`);console.log(a),S()}catch(a){console.log(a)}}return z(()=>{S(),U(),$()}),(s,a)=>(d(),c(f,null,[t("div",null,[t("div",B,[G,t("form",{onSubmit:a[2]||(a[2]=b(e=>x("/diagnose/penyakit"),["prevent"])),class:"grid md:grid-cols-3 gap-x-4"},[t("div",I,[N,u(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>_.value.kode=e),required:""},null,512),[[p,_.value.kode]])]),t("div",O,[P,u(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>_.value.value=e),required:""},null,512),[[p,_.value.value]])]),R],32)]),t("div",T,[t("div",F,[t("table",E,[L,t("tbody",null,[(d(!0),c(f,null,k(v.value,(e,y,q)=>(d(),c("tr",{class:"border-t",key:e},[t("td",J,n(y+1)+".",1),t("td",Q,n(e.kode),1),t("td",W,n(e.value),1),t("td",X,[l(i(M),{as:"div",class:"relative inline-block text-left"},{default:o(()=>[t("div",null,[l(i(A),{class:"p-2 rounded-lg text-primary bg-primary/10"},{default:o(()=>[Y]),_:1})]),t("div",tt,[l(V,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:o(()=>[l(i(Z),{class:"absolute right-0 mt-2 w-40 z-30 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:o(()=>[t("div",et,[l(i(C),null,{default:o(({active:g})=>[t("button",{onClick:K=>w(e),class:H([g?"bg-primary text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])}," Delete ",10,at)]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),_:2},1024)])]))),128))])])]),st])]),t("div",lt,[t("div",ot,[it,t("form",{onSubmit:a[5]||(a[5]=b(e=>x("/diagnose/gejala"),["prevent"])),class:"grid md:grid-cols-3 gap-x-4"},[t("div",nt,[rt,u(t("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=e=>h.value.kode=e),required:""},null,512),[[p,h.value.kode]])]),t("div",dt,[ct,u(t("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=e=>h.value.value=e),required:""},null,512),[[p,h.value.value]])]),ut],32)]),t("div",pt,[t("div",vt,[t("table",_t,[ht,t("tbody",null,[(d(!0),c(f,null,k(j.value,(e,y,q)=>(d(),c("tr",{class:"border-t",key:e},[t("td",mt,n(y+1)+".",1),t("td",yt,n(e.kode),1),t("td",gt,n(e.value),1),t("td",ft,[l(i(M),{as:"div",class:"relative inline-block text-left"},{default:o(()=>[t("div",null,[l(i(A),{class:"p-2 rounded-lg text-primary bg-primary/10"},{default:o(()=>[xt]),_:1})]),t("div",wt,[l(V,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:o(()=>[l(i(Z),{class:"absolute right-0 mt-2 w-40 z-30 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:o(()=>[t("div",bt,[l(i(C),null,{default:o(({active:g})=>[t("button",{onClick:K=>w(e),class:H([g?"bg-primary text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])}," Delete ",10,kt)]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),_:2},1024)])]))),128))])])]),Vt])]),t("div",Ht,[t("div",At,[Zt,t("form",{onSubmit:a[8]||(a[8]=b(e=>x("/diagnose/relasi"),["prevent"])),class:"grid md:grid-cols-3 gap-x-4"},[t("div",Ct,[Mt,u(t("input",{type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>m.value.penyakit_kode=e),required:""},null,512),[[p,m.value.penyakit_kode]])]),t("div",jt,[Dt,u(t("input",{type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>m.value.gejala_kode=e),required:""},null,512),[[p,m.value.gejala_kode]])]),St],32)]),t("div",qt,[t("div",Kt,[t("table",Ut,[$t,t("tbody",null,[(d(!0),c(f,null,k(D.value,(e,y,q)=>(d(),c("tr",{class:"border-t",key:e},[t("td",zt,n(y+1)+".",1),t("td",Bt,n(e.gejala_kode),1),t("td",Gt,n(e.penyakit_kode),1),t("td",It,[l(i(M),{as:"div",class:"relative inline-block text-left"},{default:o(()=>[t("div",null,[l(i(A),{class:"p-2 rounded-lg text-primary bg-primary/10"},{default:o(()=>[Nt]),_:1})]),t("div",Ot,[l(V,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:o(()=>[l(i(Z),{class:"absolute right-0 mt-2 w-40 z-30 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:o(()=>[t("div",Pt,[l(i(C),null,{default:o(({active:g})=>[t("button",{onClick:K=>w(e),class:H([g?"bg-primary text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])}," Delete ",10,Rt)]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),_:2},1024)])]))),128))])])]),Tt])])],64))}};export{Qt as default};
