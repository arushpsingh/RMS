"use strict";(()=>{var e={};e.id=569,e.ids=[569],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},12781:e=>{e.exports=require("stream")},73837:e=>{e.exports=require("util")},14263:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>v,originalPathname:()=>y,patchFetch:()=>x,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>f,staticGenerationAsyncStorage:()=>q,staticGenerationBailout:()=>h});var o={};t.r(o),t.d(o,{GET:()=>l});var n=t(10884),s=t(16132),i=t(21040),a=t(50467),u=t(48779),d=t(96721),c=t.n(d),p=t(95798);async function l(e){try{let r=e.cookies.get("authToken")?.value;if(!r)return p.Z.error("Auth token not provided",401);let t=c().verify(r,process.env.JWT_KEY),o=t._id,n=await u.n.findById(o).select("-password");if(!n)return p.Z.error("User not found",404);return console.log("User details:",n),p.Z.json({user:n})}catch(e){return console.error("Error fetching user",e.message),p.Z.error("Internal server error",500)}}(0,a.u)();let m=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/current/route",pathname:"/api/current",filename:"route",bundlePath:"app/api/current/route"},resolvedPagePath:"C:\\Users\\6666\\Downloads\\rms\\src\\app\\api\\current\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:g,staticGenerationAsyncStorage:q,serverHooks:f,headerHooks:v,staticGenerationBailout:h}=m,y="/api/current/route";function x(){return(0,i.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:q})}},50467:(e,r,t)=>{t.d(r,{u:()=>i});var o=t(11185),n=t.n(o);let{MONGO_URI:s}=process.env,i=async()=>{try{await n().connect(s),console.log("Db connected")}catch(e){console.log("Failed to connect",e)}}},48779:(e,r,t)=>{t.d(r,{n:()=>i});let{Schema:o,default:n}=t(11185),s=new o({firstname:{type:String,required:[!0,"First name is required"]},lastname:{type:String,required:[!0,"Last name is required"]},email:{type:String,required:[!0,"Email id is required"],unique:!0},password:{type:String,required:[!0,"Password is required"]}}),i=n.models.Users||n.model("Users",s)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[271,107,721],()=>t(14263));module.exports=o})();