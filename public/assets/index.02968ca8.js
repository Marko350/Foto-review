var ce=Object.defineProperty,ie=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var B=(t,s,r)=>s in t?ce(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,L=(t,s)=>{for(var r in s||(s={}))de.call(s,r)&&B(t,r,s[r]);if(M)for(var r of M(s))me.call(s,r)&&B(t,r,s[r]);return t},Q=(t,s)=>ie(t,ue(s));import{i as he,g as pe,L as fe,a as be,r as l,o as ge,j as c,b as e,c as ve,s as ye,d as we,N as U,C as I,e as P,f as R,F as T,u as S,A as j,h as m,B as g,U as K,Q as z,K as W,V as k,k as _,l as E,m as xe,T as H,n as J,p as Ce,D as O,S as Pe,q as D,t as Ne,v as Re,I as Se,M as Ae,w as Le,x as ke,y as De,z as Fe,P as Ue,E as Ie,G as Te,H as V,J as Ee,R as Oe,O as C,W as qe,X as $e,Y as Ge,Z as Me,_ as Be,$ as Qe}from"./vendor.b3d1269a.js";const je=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};je();const Ke={apiKey:"AIzaSyDhJ_MWHJClI5I2AONvrGyPFmkurMa6EKI",authDomain:"foto-review-e1366.firebaseapp.com",projectId:"foto-review-e1366",storageBucket:"foto-review-e1366.appspot.com",messagingSenderId:"990342175889",appId:"1:990342175889:web:3436be118d0dae0575b330"},Y=he(Ke),F=pe(),y=fe(Y),ze=be(Y),X=l.exports.createContext(),w=()=>l.exports.useContext(X),We=t=>{const[s,r]=l.exports.useState(null),[a,n]=l.exports.useState(!0),o=(d,p)=>ve(F,d,p),i=(d,p)=>ye(F,d,p),u=()=>we(F);l.exports.useEffect(()=>{ge(F,d=>{r(d),n(!1)})},[]);const h={currentUser:s,register:o,login:i,logout:u};return c(X.Provider,{value:h,children:[a&&e("div",{children:"Loading..."}),!a&&t.children]})},_e=()=>{const{currentUser:t,logout:s}=w(),r=async()=>{await s()};return e(U,{collapseOnSelect:!0,className:"nav",bg:"dark",variant:"dark",expand:"lg",sticky:"top",children:c(I,{style:{maxWidth:"1200px"},children:[e(P,{to:t?"/albums":"/",className:"navbar-brand",children:e("span",{className:"brand",role:"img",children:"Foto Review"})}),e(U.Toggle,{"aria-controls":"responsive-navbar-nav"}),e(U.Collapse,{id:"responsive-navbar-nav",children:e(R,{className:"me-auto",children:t?c(T,{children:[e(R.Link,{to:"/albums",as:P,className:"ms-4",eventKey:"1",children:e("span",{children:"My albums"})}),e(R.Link,{to:"/",as:P,className:"ms-4",eventKey:"2",children:e("span",{onClick:r,children:"Log Out"})})]}):c(T,{children:[e(R.Link,{to:"/",as:P,className:"ms-4",eventKey:"1",children:e("span",{children:"Login"})}),e(R.Link,{to:"/register",as:P,className:"ms-4",eventKey:"2",children:e("span",{children:"Register"})})]})})})]})})},He=()=>{const t=l.exports.useRef(),s=l.exports.useRef(),[r,a]=l.exports.useState(null),[n,o]=l.exports.useState(null),i=S(),{login:u}=w();return c(I,{style:{maxWidth:"1200px"},children:[n&&e(j,{children:n}),c(m,{onSubmit:async d=>{d.preventDefault(),o(null);try{await u(t.current.value,s.current.value),i("/albums")}catch(p){o(p.message)}},children:[c(m.Group,{id:"email",className:"mb-3",children:[e(m.Label,{children:"Email"}),e(m.Control,{type:"email",ref:t,required:!0})]}),c(m.Group,{id:"password",className:"mb-3",children:[e(m.Label,{children:"Password"}),e(m.Control,{type:"password",ref:s,required:!0})]}),e(g,{disabled:r,type:"submit",children:"Log In"})]}),e("div",{className:"text-center mt-3",children:e(P,{to:"/forgot-password",children:"Forgot Password?"})})]})},Je=()=>{const t=l.exports.useRef(),s=l.exports.useRef(),r=l.exports.useRef(),[a,n]=l.exports.useState(null),[o,i]=l.exports.useState(null),u=S(),{register:h}=w();return c(I,{style:{maxWidth:"1200px"},children:[o&&e(j,{children:o}),c(m,{onSubmit:async p=>{if(p.preventDefault(),s.current.value!==r.current.value)return i("Passwords does not match");i(null);try{await h(t.current.value,s.current.value),u("/albums")}catch(v){console.log(v)}},children:[c(m.Group,{id:"email",className:"mb-3",children:[e(m.Label,{children:"Email"}),e(m.Control,{type:"email",ref:t,required:!0})]}),c(m.Group,{id:"password",className:"mb-3",children:[e(m.Label,{children:"Password"}),e(m.Control,{type:"password",ref:s,required:!0})]}),c(m.Group,{id:"password",className:"mb-3",children:[e(m.Label,{children:"Password Confirmation"}),e(m.Control,{type:"password",ref:r,required:!0})]}),e(g,{disabled:a,type:"submit",children:"Create Account"})]})]})},Ve=()=>{const{currentUser:t}=w(),s=K(k(y,"albums"),W("owner","==",t.uid),z("created","desc"));return _(["albums",t.uid],s,{idField:"id",subscribe:!0},{refetchOnMount:"always"})},Ye=()=>{const t=S(),s=Ve();return e("div",{className:"albums",children:s.data&&s.data.map((r,a)=>c("div",{children:[e(E,{onClick:()=>{t(`/albums/${r.id}`)},className:"album-icon",icon:xe,size:"6x"}),e("h1",{children:r.name}),r.reviewedBy?c("span",{children:["Reviewed by: ",r.reviewedBy]}):null]},a))})},Z=l.exports.createContext(),q=()=>l.exports.useContext(Z),Xe=({children:t})=>{const[s,r]=l.exports.useState([]),[a,n]=l.exports.useState([]),o={chosenPhotos:s,setChosenPhotos:r,notChosenPhotos:a,setNotChosenPhotos:n};return e(Z.Provider,{value:o,children:t})},ee=()=>{const{currentUser:t}=w(),s=async(a,n=[])=>{if(!n.length)return;const o=Ce(y);n.forEach(i=>{const u=O(y,"photos",i.id);o.update(u,{albums:Pe(a)})}),await o.commit()};return{createAlbum:async(a,n=null,o=[],i=null,u=null)=>{const h=k(y,"albums");try{const d=await H(h,{created:J(),name:a,owner:n||t.uid,thumbnail:u,reviewedBy:i});return o.length&&await s(d.id,o),d}catch(d){console.log(d.message)}}}},te=({title:t,album:s})=>{const r=l.exports.useRef(),a=S(),{createAlbum:n}=ee(),{chosenPhotos:o,setChosenPhotos:i}=q();console.log("This is prop album",s);const u=async h=>{if(h.preventDefault(),!!r.current.value){if(s){if(!o.length)return;const d=await n(r.current.value,s.owner,o,null,s.thumbnail);r.current.value="",a(`/albums/${d.id}`);return}n(r.current.value),r.current.value=""}};return l.exports.useEffect(()=>()=>{i([])},[]),e("div",{children:c(m,{className:"create-album",onSubmit:u,children:[c(m.Group,{id:"album",className:"mb-3",children:[e(m.Label,{children:t}),e(m.Control,{type:"text",ref:r,required:!0})]}),e(g,{type:"submit",children:"Create"})]})})},Ze=()=>c("div",{children:[e(te,{title:"Create new album"}),e(Ye,{})]}),et=({photo:t,review:s=null})=>{const[r,a]=l.exports.useState(null),[n,o]=l.exports.useState(null),{chosenPhotos:i,setChosenPhotos:u,notChosenPhotos:h,setNotChosenPhotos:d}=q(),p=f=>{f.stopPropagation(),i.includes(t)?u(b=>b.filter(x=>x!==t)):u(b=>[...b,t])},v=f=>{f.stopPropagation(),!r&&(o(!1),a(!r),i.includes(t)||(d(b=>b.filter(x=>t.id!==x.id)),u(b=>[...b,t])))},A=f=>{f.stopPropagation(),!n&&(a(!1),o(!n),h.includes(t)||(u(b=>b.filter(x=>t.id!==x.id)),d(b=>[...b,t])))};return c("div",{children:[!s&&e("div",{children:e("input",{onClick:p,type:"checkbox"})}),c(D,{className:"photo-card",children:[e(D.Header,{children:e("p",{className:"photo-name",title:t.name,children:t.name})}),e("a",{href:t.url,children:e(D.Img,{variant:"top",src:t.url,title:t._id})}),s&&c(D.Footer,{className:"thumbs",children:[e(g,{onClick:f=>v(f),className:`${r?"green":""}`,children:e(E,{icon:Ne})}),e(g,{onClick:f=>A(f),className:`${n?"red":""}`,children:e(E,{icon:Re})})]})]})]})},tt={default:6,576:2,768:3,992:4},se=({query:t,review:s})=>e(Se,{children:e(Ae,{breakpointCols:tt,className:"photos-masonry",columnClassName:"photos-masonry-column",children:t.data&&t.data.map((r,a)=>e(et,{photo:r,review:s},a))})}),re=t=>{const s=k(y,"photos"),r=K(s,W("albums","array-contains",t),z("created","desc"));return _(["photos",t],r,{idField:"id",subscribe:!0},{refetchOnMount:"always"})},st=t=>{const{currentUser:s}=w(),[r,a]=l.exports.useState(null),[n,o]=l.exports.useState(null),[i,u]=l.exports.useState(null),[h,d]=l.exports.useState(null),[p,v]=l.exports.useState(null);return{error:r,isError:n,isUploading:i,isSuccess:h,progress:p,uploadPhoto:async f=>{if(a(null),o(null),d(null),u(null),!f instanceof File){a("File is no good"),o(!0),u(!1);return}const b=`${Date.now()}-${f.name}`,x=`photos/${s.uid}/${b}`;try{const N=Le(ze,x),$=ke(N,f);$.on("state_changed",G=>{v(Math.round(G.bytesTransferred/G.totalBytes*1e3)/10)}),await $.then();const oe=await De(N),le=k(y,"photos");await H(le,{created:J(),name:f.name,owner:s.uid,path:N.fullPath,size:f.size,type:f.type,albums:[t],url:oe}),v(null),d(!0),u(!1)}catch(N){a(N.message),o(!0),d(!1),u(!1)}}}},rt=({id:t})=>{const{uploadPhoto:s,progress:r}=st(t),a=l.exports.useCallback(p=>{console.log("got files",p),!!p.length&&s(p[0])}),{getRootProps:n,getInputProps:o,acceptedFiles:i,isDragActive:u,isDragAccept:h,isDragReject:d}=Fe({accept:"image/gif, image/jpeg, image/png, image/webp",onDrop:a});return e("div",{style:{margin:"2rem 0 2rem 0"},children:c("div",Q(L({},n()),{id:"dropzone-wrapper",className:`${h?"drag-accept":""} ${d?"drag-reject":""}`,children:[e("input",L({},o())),u?h?e("p",{children:"Drop the photo!"}):e("p",{children:"This file is not acceptable"}):e("p",{children:"Drop photos here"}),r!==null&&e(Ue,{variant:"success",animated:!0,now:r})]}))})},ne=t=>{const s=O(y,"albums",t);return Ie(["album",t],s,{subscribe:!0},{refetchOnMount:"always",select(a){const n=a.id;return a.exists()?L({id:n},a.data()):null}})},nt=()=>{const[t,s]=l.exports.useState(!1);return{newAlbumName:async(a,n)=>{s(!0);try{const o=O(y,"albums",n);await Te(o,{name:a})}catch(o){console.log(o.message)}finally{s(!1)}},isUpdating:t}},at=()=>{const{id:t}=V(),s=l.exports.useRef(),r=re(t),a=ne(t),n=nt(),[o,i]=l.exports.useState(!1),u=S(),h=()=>{i(!o)};return c("div",{children:[o?c("div",{className:"album-name-change",children:[c("form",{onSubmit:p=>{p.preventDefault(),!!s.current.value&&(n.newAlbumName(s.current.value,a.data.id),i(!o))},children:[e("p",{children:"Enter new album name"}),e("input",{ref:s,placeholder:a.data&&a.data.name}),e(g,{type:"submit",style:{marginLeft:"1rem"},children:"Submit"})]}),e(g,{variant:"danger",style:{height:"50%",margin:"auto 0 0 1rem"},onClick:h,children:"X"})]}):c("div",{className:"album-name",children:[a.data&&e("h1",{children:a.data.name}),e(g,{onClick:h,children:"Change album name"})]}),a.data&&e("div",{children:e("h1",{className:"review-link",onClick:()=>u(`/review/${a.data.owner}/${a.data.id}`),children:"Review link"})}),e(rt,{id:t}),r&&e(se,{query:r}),e(te,{title:"Create new album from selected photos",album:a.data})]})},ot=()=>e("div",{children:e("h1",{children:"Page not found"})}),lt=()=>{const{resetPassword:t}=w(),s=l.exports.useRef();return c("div",{children:[e("h1",{children:"Reset password"}),c(m,{onSubmit:async a=>{a.preventDefault();try{await t(s.current.value)}catch(n){console.log(n)}s.current.value=""},children:[c(m.Group,{className:"mb-2",children:[e(m.Label,{children:"E-mail adress:"}),e(m.Control,{type:"text",ref:s})]}),e(g,{type:"submit",variant:"success",children:"Submit"})]})]})},ct=()=>{const{id:t}=V(),s=re(t),r=l.exports.useRef(),[a,n]=l.exports.useState(),[o,i]=l.exports.useState(null),u=ee(),h=ne(t),{notChosenPhotos:d,chosenPhotos:p}=q(),v=A=>{if(A.preventDefault(),s.data&&s.data.length!==d.length+p.length)n(!0),setTimeout(()=>{n(!1)},5e3);else{const f=r.current.value;u.createAlbum(h.data.name,h.data.owner,p,f,h.data.thumbnail),i(!0)}};return c("div",{children:[!o&&c(T,{children:[s.data&&e(se,{query:s,review:!0}),c("form",{onSubmit:v,children:[e("label",{htmlFor:"name",children:"Your name:"}),e("input",{type:"text",name:"name",ref:r,required:!0}),e(g,{type:"submit",children:"Send review"})]}),a?e("p",{style:{marginTop:"2rem"},children:"You need to approve or reject every photo!"}):null]}),o&&c("div",{className:"review-submited",children:[e("h1",{children:"Review sended!"}),e("h2",{children:"Thank you!"})]})]})},ae=({children:t,redirectTo:s})=>{const{currentUser:r}=w();return r?t:e(Ee,{to:s})};function it(){return c("div",{children:[e(_e,{}),c(Oe,{children:[e(C,{path:"/",element:e(He,{})}),e(C,{path:"/register",element:e(Je,{})}),e(C,{path:"/forgot-password",element:e(lt,{})}),e(C,{path:"/review/:owner/:id",element:e(ct,{})}),e(C,{path:"/albums",element:e(ae,{redirectTo:"/",children:e(Ze,{})})}),e(C,{path:"/albums/:id",element:e(ae,{redirectTo:"/",children:e(at,{})})}),e(C,{path:"*",element:e(ot,{})})]})]})}const ut=new qe({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:1e3*60*2,cacheTime:1e3*60*60*4}}});$e.render(e(Ge.StrictMode,{children:e(Me,{client:ut,children:e(Be,{children:e(We,{children:e(Xe,{children:e(Qe,{children:e(it,{})})})})})})}),document.getElementById("root"));