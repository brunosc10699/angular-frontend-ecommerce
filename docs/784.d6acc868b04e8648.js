"use strict";(self.webpackChunkla_bonbonniere=self.webpackChunkla_bonbonniere||[]).push([[784],{1784:(v,l,c)=>{c.r(l),c.d(l,{ProductsModule:()=>Z});var u=c(9808),t=c(4893),d=c(2546),g=c(3013);let f=(()=>{class n{constructor(o){this.snackBar=o}notify(o){this.snackBar.open(o,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(g.ux))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=c(7235),a=c(5519),s=c(2382);function _(n,i){if(1&n&&(t.TgZ(0,"ul")(1,"li"),t._uU(2),t.qZA()()),2&n){const o=i.$implicit;t.xp6(2),t.Oqu(o)}}function h(n,i){if(1&n&&(t.TgZ(0,"ul")(1,"li"),t._uU(2),t.qZA()()),2&n){const o=i.$implicit;t.xp6(2),t.Oqu(o)}}function C(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",13)(1,"h3"),t._uU(2,"Disponibilidade"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Produto dispon\xedvel para retirada na loja mais perto de voc\xea!"),t.qZA(),t.TgZ(5,"h3"),t._uU(6,"Quantidade"),t.qZA(),t.TgZ(7,"button",14),t.NdJ("click",function(){return t.CHM(o),t.oxw().oneLess()}),t._uU(8,"-"),t.qZA(),t.TgZ(9,"input",15),t.NdJ("ngModelChange",function(r){return t.CHM(o),t.oxw().quantity=r}),t.qZA(),t.TgZ(10,"button",16),t.NdJ("click",function(){return t.CHM(o),t.oxw().oneMore()}),t._uU(11,"+"),t.qZA(),t.TgZ(12,"div",17)(13,"button",18),t.NdJ("click",function(){return t.CHM(o),t.oxw().addToBasket()}),t._uU(14,"Adicionar \xe0 Cesta"),t.qZA(),t.TgZ(15,"button",19),t._uU(16,"Continuar Comprando"),t.qZA(),t.TgZ(17,"button",20),t._uU(18,"Ver minha Cesta"),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(9),t.s9C("max",null==o.product?null:o.product.stock),t.Q6J("ngModel",o.quantity)}}function P(n,i){1&n&&(t.TgZ(0,"div",21)(1,"h3"),t._uU(2,"Produto indispon\xedvel"),t.qZA(),t._UZ(3,"img",22),t.TgZ(4,"button",23),t._uU(5,"Ver outros produtos"),t.qZA()())}let x=(()=>{class n{constructor(o,e,r,p){this.productsService=o,this.notificationService=e,this.shoppingBasketService=r,this.route=p,this.quantity=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.product=this.productsService.findById(e),console.log(this.product)}addToBasket(){this.notificationService.notify("Produto adicionado ao carrinho");const o=Object.assign({quantity:this.quantity},this.product);this.shoppingBasketService.addToBasket(o)}oneMore(){this.quantity<this.product.stock&&(this.quantity+=1)}oneLess(){this.quantity>1&&(this.quantity-=1)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.s),t.Y36(f),t.Y36(m.l),t.Y36(a.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-detail"]],decls:30,vars:12,consts:[[1,"container"],[1,"pictures"],[1,"product-picture",3,"src","alt"],[1,"details"],["src","./assets/images/stars-80-percent.webp","alt","Indicador do \xedndice de aceita\xe7\xe3o do produto",1,"stars"],[1,"price"],[1,"price-detail"],[1,"product-information"],[1,"composition"],[4,"ngFor","ngForOf"],[1,"allergens"],["class","quantity",4,"ngIf","ngIfElse"],["unavailable",""],[1,"quantity"],[1,"minus-button",3,"click"],["type","text","disabled","true","name","quantity","min","1",3,"ngModel","max","ngModelChange"],[1,"plus-button",3,"click"],[1,"buttons"],["type","button",1,"add-to-basket-button",3,"click"],["type","button","routerLink","/products",1,"keep-shopping-button"],["type","button","routerLink","/shopping-basket",1,"basket-button"],[1,"unavailable"],["src","./assets/images/sad-customer.webp","alt","Produto indispon\xedvel no momento"],["routerLink","/products"]],template:function(o,e){if(1&o&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._UZ(9,"img",4),t._uU(10," 4.0 (803) "),t.qZA(),t.TgZ(11,"p",5),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"p",6),t._uU(15,"(pre\xe7o por unidadde)"),t.qZA(),t.TgZ(16,"h3"),t._uU(17,"Informa\xe7\xf5es"),t.qZA(),t.TgZ(18,"div",7)(19,"div",8)(20,"h3"),t._uU(21,"Composi\xe7\xe3o"),t.qZA(),t.YNc(22,_,3,1,"ul",9),t.qZA(),t.TgZ(23,"div",10)(24,"h3"),t._uU(25,"Alerg\xeanicos"),t.qZA(),t.YNc(26,h,3,1,"ul",9),t.qZA()()(),t.YNc(27,C,19,2,"div",11),t.YNc(28,P,6,0,"ng-template",null,12,t.W1O),t.qZA()),2&o){const r=t.MAs(29);t.xp6(2),t.Q6J("src",null==e.product?null:e.product.picture,t.LSH)("alt",null==e.product?null:e.product.description),t.xp6(3),t.Oqu(null==e.product?null:e.product.description),t.xp6(2),t.hij("Item ",null==e.product?null:e.product.id,""),t.xp6(5),t.hij(" ",t.xi3(13,9,null==e.product?null:e.product.price,"BRL")," "),t.xp6(10),t.Q6J("ngForOf",null==e.product?null:e.product.composition),t.xp6(4),t.Q6J("ngForOf",null==e.product?null:e.product.allergens),t.xp6(1),t.Q6J("ngIf",null==e.product?null:e.product.stock)("ngIfElse",r)}},directives:[u.sg,u.O5,s.Fj,s.JJ,s.On,a.rH],pipes:[u.H9],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;padding:60px 20px}.pictures[_ngcontent-%COMP%]{width:370px}.details[_ngcontent-%COMP%], .quantity[_ngcontent-%COMP%]{width:380px}.pictures[_ngcontent-%COMP%]{margin-bottom:20px;text-align:center}.product-picture[_ngcontent-%COMP%]{width:100%;height:370px;border-radius:.5rem}.details[_ngcontent-%COMP%]{padding:20px;margin:0 20px 20px;background-color:#a0522d1a;border:20px solid rgba(139,0,0,.1)}.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:50px;font-weight:700;line-height:50px;text-align:center}.details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700}p[_ngcontent-%COMP%]{font-size:16px}.stars[_ngcontent-%COMP%]{width:90px;height:19px}.price[_ngcontent-%COMP%]{margin-top:80px;margin-bottom:20px;font-size:50px;font-weight:700;text-align:center}.price-detail[_ngcontent-%COMP%]{text-align:center;font-weight:700;margin-bottom:55px}.product-information[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.product-information[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.product-information[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:square;line-height:20%;padding-left:0;color:brown;font-size:16px}.product-information[_ngcontent-%COMP%]   .composition[_ngcontent-%COMP%]{margin-right:10px}.product-information[_ngcontent-%COMP%]   .allergens[_ngcontent-%COMP%]{margin-left:10px}.quantity[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.quantity[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:30px;margin-top:16px}input[_ngcontent-%COMP%]{all:unset;width:100%;height:100px;text-align:center;font-size:34px;font-weight:700;background-color:#fff}.plus-button[_ngcontent-%COMP%], .minus-button[_ngcontent-%COMP%]{all:unset;width:100%;height:40px;background-color:#8b0000;color:#fff;text-align:center;font-size:18px;font-weight:700;cursor:pointer}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.add-to-basket-button[_ngcontent-%COMP%], .keep-shopping-button[_ngcontent-%COMP%], .basket-button[_ngcontent-%COMP%], .unavailable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:60px;margin-top:20px;font-size:20px;color:#fff;background-color:brown}.basket-button[_ngcontent-%COMP%]{color:brown;background-color:bisque}.unavailable[_ngcontent-%COMP%]{padding:0;text-align:center}.unavailable[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:36px}"]}),n})();const M=[{path:"",component:c(1828).P},{path:":id",component:x}];let O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.Bz.forChild(M)],a.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,O,s.u5]]}),n})()}}]);