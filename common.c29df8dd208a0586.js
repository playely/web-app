"use strict";(self.webpackChunkplay_jolly_web_app=self.webpackChunkplay_jolly_web_app||[]).push([[592],{1228:(m,n,a)=>{a.d(n,{e:()=>l});var r=a(2089),i=a(5e3),c=a(6578),_=a(1523);let l=(()=>{class s{constructor(e,o){this.storageService=e,this.appService=o}get isUserAuthenticated(){return null!==this.storageService.getLocalItem(r.B.AUTH_TOKEN)}register(e){return Promise.resolve()}login(e,o){const t={email:"test@text.com",image:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",name:"John Smith",token:"dfwefwefwefwefewfwefewfwe",id:"123423232"};return this.storageService.setLocalItem(r.B.AUTH_TOKEN,t.token),this.storageService.setLocalItem(r.B.AUTH_USER,JSON.stringify(t)),this.storageService.setLocalItem(r.B.SILENT_LOGIN,o),this.appService.changeSession({email:t.email,image:t.image,name:t.name,id:t.id}),Promise.resolve(t)}logout(){return this.appService.changeSession(null),this.storageService.removeLocalItem(r.B.AUTH_TOKEN),this.storageService.removeLocalItem(r.B.AUTH_USER),Promise.resolve()}resetPassword(e){return Promise.resolve()}saveNewPassword(e,o){return Promise.resolve()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(c.V),i.LFG(_.z))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);