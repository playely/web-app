"use strict";(self.webpackChunkplay_jolly_web_app=self.webpackChunkplay_jolly_web_app||[]).push([[37],{3037:(q,l,o)=>{o.r(l),o.d(l,{ContentModule:()=>w});var a=o(9808),s=o(8555),g=o(7625),p=o(9051),d=o(1256),n=o(5e3),u=o(7363),h=o(1228),C=o(1523),m=o(3774),O=o(1840),_=o(3246);function M(e,i){1&e&&n._UZ(0,"app-banner")}function P(e,i){if(1&e&&n._UZ(0,"app-hero-carousel",4),2&e){const t=n.oxw();n.Q6J("carousel",t.hero)}}function v(e,i){1&e&&n._UZ(0,"app-card-carousel",4),2&e&&n.Q6J("carousel",i.$implicit)}let x=(()=>{class e extends p.H{constructor(t,c,r){super(),this.contentService=t,this.authService=c,this.appService=r,this.isAuth=this.authService.isUserAuthenticated,this.carousels=[]}ngOnInit(){this.fetchHome(),this.appService.getLanguageChange().pipe((0,g.R)(this.destroy$)).subscribe(t=>{t&&this.fetchHome()})}fetchHome(){this.contentService.getHomeCarousels().then(t=>{this.carousels=t.filter(c=>c.type!==d.C5.HERO),this.hero=t.find(c=>c.type===d.C5.HERO)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u._),n.Y36(h.e),n.Y36(C.z))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-content"]],features:[n.qOj],decls:4,vars:3,consts:[[4,"ngIf"],[3,"carousel",4,"ngIf"],[1,"carousels"],[3,"carousel",4,"ngFor","ngForOf"],[3,"carousel"]],template:function(t,c){1&t&&(n.YNc(0,M,1,0,"app-banner",0),n.YNc(1,P,1,1,"app-hero-carousel",1),n.TgZ(2,"div",2),n.YNc(3,v,1,1,"app-card-carousel",3),n.qZA()),2&t&&(n.Q6J("ngIf",!c.isAuth),n.xp6(1),n.Q6J("ngIf",c.isAuth),n.xp6(2),n.Q6J("ngForOf",c.carousels))},directives:[a.O5,m.S,O.C,a.sg,_.l],styles:[".carousels[_ngcontent-%COMP%]{margin-left:70px}"]}),e})();var Z=o(2313),y=o(5245),T=o(7227),A=o(6198),f=o(821);function F(e,i){if(1&e&&(n.TgZ(0,"p",22),n._uU(1),n._UZ(2,"span",14),n.qZA()),2&e){const t=i.$implicit;n.xp6(1),n.hij("",t," ")}}function U(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"div",3)(1,"div",4)(2,"div",5),n.NdJ("click",function(){return n.CHM(t),n.oxw().redirectToPlayer()}),n._UZ(3,"img",6)(4,"div",7)(5,"img",8),n.qZA(),n.TgZ(6,"div",9)(7,"div",10)(8,"div",11)(9,"p",12),n._uU(10),n.qZA(),n.TgZ(11,"p",13),n._uU(12),n._UZ(13,"span",14),n._uU(14),n.ALo(15,"TextTime"),n.qZA()(),n.TgZ(16,"div",15)(17,"div",16)(18,"mat-icon"),n._uU(19,"playlist_add"),n.qZA(),n.TgZ(20,"p"),n._uU(21),n.ALo(22,"translate"),n.qZA()(),n.TgZ(23,"div",16)(24,"mat-icon"),n._uU(25,"file_download"),n.qZA(),n.TgZ(26,"p"),n._uU(27),n.ALo(28,"translate"),n.qZA()(),n.TgZ(29,"div",16)(30,"mat-icon"),n._uU(31,"share"),n.qZA(),n.TgZ(32,"p"),n._uU(33),n.ALo(34,"translate"),n.qZA()()()(),n.TgZ(35,"div",17),n.YNc(36,F,3,1,"p",18),n.qZA(),n.TgZ(37,"div",19)(38,"p"),n._uU(39),n.qZA()(),n.TgZ(40,"div",20)(41,"h4"),n._uU(42),n.ALo(43,"translate"),n.qZA(),n.TgZ(44,"p"),n._uU(45),n.qZA()()()(),n.TgZ(46,"div",21),n._UZ(47,"app-grid-carousel",2),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(10),n.Oqu(t.content.title),n.xp6(2),n.hij(" ",t.content.releaseYear," "),n.xp6(2),n.hij(" ",n.lcZ(15,11,t.content.duration)," "),n.xp6(7),n.Oqu(n.lcZ(22,13,"addWatchlist")),n.xp6(6),n.Oqu(n.lcZ(28,15,"Download")),n.xp6(6),n.Oqu(n.lcZ(34,17,"Share")),n.xp6(3),n.Q6J("ngForOf",t.content.tags),n.xp6(3),n.Oqu(t.content.type),n.xp6(3),n.Oqu(n.lcZ(43,19,"Description")),n.xp6(3),n.Oqu(t.content.description),n.xp6(2),n.Q6J("carousel",t.suggestedCarousel)}}const j=[{path:":tab",component:x,data:{isContentPage:!0}},{path:":contentType/:contentId",component:(()=>{class e extends p.H{constructor(t,c,r,I){super(),this.contentService=t,this.router=c,this.title=r,this.appService=I}ngOnInit(){this.scrollToTop(),this.fetchContent(),this.appService.getLanguageChange().pipe((0,g.R)(this.destroy$)).subscribe(t=>{t&&this.fetchContent()})}fetchContent(){this.contentService.getContent("id").then(t=>{this.content=t,this.title.setTitle(t.title)}),this.contentService.getSuggested("id").then(t=>{this.suggestedCarousel=t}),this.contentService.getRelated("id").then(t=>{this.relatedCarousel=t})}redirectToPlayer(){var t;this.router.navigate([`player/${null===(t=this.content)||void 0===t?void 0:t.title}`],{state:this.content})}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u._),n.Y36(s.F0),n.Y36(Z.Dx),n.Y36(C.z))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-details"]],features:[n.qOj],decls:3,vars:2,consts:[["class","details-container",4,"ngIf"],[1,"related"],[3,"carousel"],[1,"details-container"],[1,"content-container"],[1,"content-container__banner",3,"click"],["src","https://play-jolly-assets.s3.amazonaws.com/content/dummy/details-16x9.png","alt",""],[1,"overlay"],["src","assets/img/svg/player/play.svg","alt","Play",1,"play-icon"],[1,"content-container__info"],[1,"data-container"],[1,"data"],[1,"title"],[1,"subtitle"],[1,"circle"],[1,"options"],[1,"item"],[1,"tags"],["class","tag",4,"ngFor","ngForOf"],[1,"type"],[1,"description"],[1,"suggestions"],[1,"tag"]],template:function(t,c){1&t&&(n.YNc(0,U,48,21,"div",0),n.TgZ(1,"div",1),n._UZ(2,"app-card-carousel",2),n.qZA()),2&t&&(n.Q6J("ngIf",c.content),n.xp6(2),n.Q6J("carousel",c.relatedCarousel))},directives:[a.O5,y.Hw,a.sg,T.X,_.l],pipes:[A.V,f.X$],styles:[".details-container[_ngcontent-%COMP%]{padding:0;display:flex;flex-direction:row;flex-wrap:wrap}.details-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{flex:2}.details-container[_ngcontent-%COMP%]   .content-container__banner[_ngcontent-%COMP%]{position:relative}.details-container[_ngcontent-%COMP%]   .content-container__banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:3px;transition:transform .2s}.details-container[_ngcontent-%COMP%]   .content-container__banner[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{border-radius:3px;background-color:#0a070b1a;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.details-container[_ngcontent-%COMP%]   .content-container__banner[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]{width:50px;position:absolute;top:45%;left:45%}.details-container[_ngcontent-%COMP%]   .content-container__banner[_ngcontent-%COMP%]:hover{cursor:pointer}.details-container[_ngcontent-%COMP%]   .content-container__banner[_ngcontent-%COMP%]:hover   .play-icon[_ngcontent-%COMP%]{transform:scale(1.5)}.details-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;margin:0 0 10px;padding:0;font-style:normal;font-weight:600;font-size:38px;line-height:48px}.details-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#fff;margin:0;padding:0;font-style:normal;font-weight:400;font-size:20px;line-height:24px;display:inline-flex;align-items:center}.content-container__info[_ngcontent-%COMP%]{margin-top:20px}.content-container__info[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:5px;height:5px;border-radius:100%;background:#FFF;margin-left:10px;margin-right:10px}.content-container__info[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.content-container__info[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.content-container__info[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;color:#4f4e50}.content-container__info[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px}.content-container__info[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:10px 0 0;font-weight:400;font-size:14px;line-height:20px}.content-container__info[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{cursor:pointer;color:#1884f7}.content-container__info[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#1884f7}.content-container__info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:18px 0}.content-container__info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}.content-container__info[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-transform:capitalize;margin:0;padding:0}.content-container__info[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{display:inline-flex;margin-top:20px}.content-container__info[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background:#4F4E50}.content-container__info[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-flex;align-items:center;text-transform:capitalize}.content-container__info[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:last-child   .circle[_ngcontent-%COMP%]{display:none}.suggestions[_ngcontent-%COMP%]{flex:1;padding-left:24px;width:20%}"]}),e})()},{path:"not-found",component:(()=>{class e{constructor(t){this.router=t,this.ticks=10}ngOnInit(){this.interval=setInterval(()=>{this.ticks>0?this.ticks--:(this.router.navigate(["/home"]),clearInterval(this.interval))},1e3)}ngOnDestroy(){this.interval&&clearInterval(this.interval)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-not-found"]],decls:14,vars:13,consts:[[1,"not-found-container"],["src","assets/img/ilogo.png","alt","",1,"img"]],template:function(t,c){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"img",1),n.TgZ(2,"h1"),n._uU(3),n.ALo(4,"translate"),n.qZA(),n.TgZ(5,"h5"),n._uU(6),n.ALo(7,"translate"),n.qZA(),n.TgZ(8,"h5"),n._uU(9),n.ALo(10,"translate"),n.qZA(),n.TgZ(11,"h5"),n._uU(12),n.ALo(13,"translate"),n.qZA()()),2&t&&(n.xp6(3),n.Oqu(n.lcZ(4,5,"notFound.title")),n.xp6(3),n.hij("",n.lcZ(7,7,"notFound.message_1"),"..."),n.xp6(3),n.hij("...",n.lcZ(10,9,"notFound.message_2"),""),n.xp6(3),n.AsE("",n.lcZ(13,11,"notFound.message_3")," ",c.ticks,""))},pipes:[f.X$],styles:[".not-found-container[_ngcontent-%COMP%]{text-align:center;height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.not-found-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:10px}.not-found-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .not-found-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0}.not-found-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:75px}"]}),e})(),data:{hideFooter:!0,title:"notFound"}},{path:"",redirectTo:"/home"}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.Bz.forChild(j)],s.Bz]}),e})();var b=o(4466),Y=o(9060);let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,S,b.m,Y.q]]}),e})()}}]);