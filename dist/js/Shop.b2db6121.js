(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Shop"],{"0790":function(t,e,c){},1148:function(t,e,c){"use strict";var n=c("a691"),r=c("1d80");t.exports=function(t){var e=String(r(this)),c="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(c+=e);return c}},"13b1":function(t,e,c){"use strict";c("69c1")},"408a":function(t,e,c){var n=c("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"5f6f":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r=Object(n["H"])("data-v-2786c764");Object(n["t"])("data-v-2786c764");var a={class:"wrapper"},i={class:"search1"},o=Object(n["h"])("div",{class:"search1__content"},[Object(n["h"])("span",{class:"search1__content__icon iconfont"},""),Object(n["h"])("input",{class:"search1__content__input",placeholder:"请输入商品名称"})],-1);Object(n["r"])();var s=r((function(t,e,c,r,s,u){var d=Object(n["x"])("ShopInfo"),l=Object(n["x"])("Content"),h=Object(n["x"])("Cart");return Object(n["q"])(),Object(n["d"])("div",a,[Object(n["h"])("div",i,[Object(n["h"])("div",{class:"search1__back iconfont",onClick:e[1]||(e[1]=function(){return r.handleBackClick&&r.handleBackClick.apply(r,arguments)})},""),o]),r.item.imgUrl?(Object(n["q"])(),Object(n["d"])(d,{key:0,item:r.item,hideBorder:!0},null,8,["item"])):Object(n["e"])("",!0),Object(n["h"])(l),Object(n["h"])(h)])})),u=c("1da1"),d=(c("96cf"),c("d7d0")),l=(c("b0c0"),Object(n["H"])("data-v-5866c716"));Object(n["t"])("data-v-5866c716");var h={class:"content"},b={class:"category"},_={class:"product"},p={class:"product__item__detail"},j={class:"product__item__title"},O={class:"product__item__sales"},f={class:"product__item__price"},m=Object(n["h"])("span",{class:"product__item__yen"},"¥",-1),v={class:"product__item__origin"},C={class:"product__number"};Object(n["r"])();var g=l((function(t,e,c,r,a,i){return Object(n["q"])(),Object(n["d"])("div",h,[Object(n["h"])("div",b,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(r.categories,(function(t){return Object(n["q"])(),Object(n["d"])("div",{class:{category__item:!0,"category__item--active":r.currentTab===t.tab},key:t.name,onClick:function(){return r.handleTabClick(t.tab)}},Object(n["z"])(t.name),11,["onClick"])})),128))]),Object(n["h"])("div",_,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(r.list,(function(t){var e,c,a;return Object(n["q"])(),Object(n["d"])("div",{class:"product__item",key:t._id},[Object(n["h"])("img",{class:"product__item__img",src:t.imgUrl},null,8,["src"]),Object(n["h"])("div",p,[Object(n["h"])("h4",j,Object(n["z"])(t.name),1),Object(n["h"])("p",O,"月售 "+Object(n["z"])(t.sales)+" 件",1),Object(n["h"])("p",f,[m,Object(n["g"])(Object(n["z"])(t.price)+" ",1),Object(n["h"])("span",v,"¥"+Object(n["z"])(t.oldPrice),1)])]),Object(n["h"])("div",C,[Object(n["h"])("span",{class:"product__number__minus iconfont",onClick:function(){r.changeCartItemInfo(r.shopId,t._id,t,-1)}},"",8,["onClick"]),Object(n["g"])(" "+Object(n["z"])((null===(e=r.cartList)||void 0===e||null===(c=e[r.shopId])||void 0===c||null===(a=c[t._id])||void 0===a?void 0:a.count)||0)+" ",1),Object(n["h"])("span",{class:"product__number__plus iconfont",onClick:function(){r.changeCartItemInfo(r.shopId,t._id,t,1)}},"",8,["onClick"])])])})),128))])])})),k=c("b775"),I=c("6c02"),w=c("75c9"),x=[{name:"全部商品",tab:"all"},{name:"秒杀",tab:"seckill"},{name:"新鲜水果",tab:"fruit"}],y=function(){var t=Object(n["v"])(x[0].tab),e=function(e){t.value=e};return{currentTab:t,handleTabClick:e}},z=function(t,e){var c=Object(n["u"])({list:[]}),r=function(){var n=Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(k["a"])("/api/shop/".concat(e,"/products"),{tab:t.value});case 2:a=n.sent,0===(null===a||void 0===a?void 0:a.errno)&&null!==a&&void 0!==a&&null!==(r=a.data)&&void 0!==r&&r.length&&(c.list=a.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(n["E"])((function(){r(),console.log("watchEffect")}));var a=Object(n["A"])(c),i=a.list;return{list:i}},L={name:"Content",setup:function(){var t=Object(I["c"])(),e=t.params.id,c=Object(w["a"])(),n=c.cartList,r=c.addItemToCart,a=c.changeCartItemInfo,i=y(),o=i.currentTab,s=i.handleTabClick,u=z(o,e),d=u.list;return{categories:x,currentTab:o,handleTabClick:s,list:d,cartList:n,addItemToCart:r,shopId:e,changeCartItemInfo:a}}};c("9c3d");L.render=g,L.__scopeId="data-v-5866c716";var S=L,T=Object(n["H"])("data-v-0d095e32");Object(n["t"])("data-v-0d095e32");var q={class:"cart"},F={key:0,class:"product"},H={class:"product__header"},P=Object(n["g"])(" 全选 "),B={key:0,class:"product__item"},R={class:"product__item__detail"},E={class:"product__item__title"},M={class:"product__item__price"},N=Object(n["h"])("span",{class:"product__item__yen"},"¥",-1),U={class:"product__item__origin"},A={class:"product__number"},D={class:"check"},J={class:"check__icon"},W={class:"check__icon__tag"},G={class:"check__info"},K=Object(n["g"])(" 总计："),Q={class:"check__info__price"},V={class:"check__btn"},X=Object(n["g"])(" 去结算 ");Object(n["r"])();var Y=T((function(t,e,c,r,a,i){var o=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])(n["a"],null,[r.showCart?(Object(n["q"])(),Object(n["d"])("div",{key:0,class:"mask",onClick:e[1]||(e[1]=function(){return r.handleCartShowChange&&r.handleCartShowChange.apply(r,arguments)})})):Object(n["e"])("",!0),Object(n["h"])("div",q,[r.showCart?(Object(n["q"])(),Object(n["d"])("div",F,[Object(n["h"])("div",H,[Object(n["h"])("div",{class:"product__header__all",onClick:e[2]||(e[2]=function(){return r.setCartItemsChecked(r.shopId)})},[Object(n["h"])("span",{class:"product__header__icon iconfont",innerHTML:r.allChecked?"":""},null,8,["innerHTML"]),P]),Object(n["h"])("div",{class:"product__header__clear",onClick:e[3]||(e[3]=function(){return r.cleanCartProducts(r.shopId)})},"清空购物车")]),(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(r.productList,(function(t){return Object(n["q"])(),Object(n["d"])(n["a"],{key:t._id},[t.count>0?(Object(n["q"])(),Object(n["d"])("div",B,[Object(n["h"])("div",{class:"product__item__checked iconfont",innerHTML:t.check?"":"",onClick:function(){return r.changeCartItemChecked(r.shopId,t._id)}},null,8,["innerHTML","onClick"]),Object(n["h"])("img",{class:"product__item__img",src:t.imgUrl},null,8,["src"]),Object(n["h"])("div",R,[Object(n["h"])("h4",E,Object(n["z"])(t.name),1),Object(n["h"])("p",M,[N,Object(n["g"])(Object(n["z"])(t.price)+" ",1),Object(n["h"])("span",U,"¥"+Object(n["z"])(t.oldPrice),1)])]),Object(n["h"])("div",A,[Object(n["h"])("span",{class:"product__number__minus iconfont",onClick:function(){r.changeCartItemInfo(r.shopId,t._id,t,-1)}},"",8,["onClick"]),Object(n["g"])(" "+Object(n["z"])(t.count||0)+" ",1),Object(n["h"])("span",{class:"product__number__plus iconfont",onClick:function(){r.changeCartItemInfo(r.shopId,t._id,t,1)}},"",8,["onClick"])])])):Object(n["e"])("",!0)],64)})),128))])):Object(n["e"])("",!0),Object(n["h"])("div",D,[Object(n["h"])("div",J,[Object(n["h"])("img",{src:"http://www.dell-lee.com/imgs/vue3/basket.png",class:"check__icon__img",onClick:e[4]||(e[4]=function(){return r.handleCartShowChange&&r.handleCartShowChange.apply(r,arguments)})}),Object(n["h"])("div",W,Object(n["z"])(r.total),1)]),Object(n["h"])("div",G,[K,Object(n["h"])("span",Q,"¥ "+Object(n["z"])(r.price),1)]),Object(n["h"])("div",V,[Object(n["h"])(o,{to:{path:"/orderConfirmation/".concat(r.shopId)}},{default:T((function(){return[X]})),_:1},8,["to"])])])])],64)})),Z=(c("b680"),c("5502")),$=function(t){var e=Object(Z["b"])(),c=e.state.cartList,r=Object(n["b"])((function(){var e=c[t],n=0;if(e)for(var r in e){var a=e[r];n+=a.count}return n})),a=Object(n["b"])((function(){var e=c[t],n=0;if(e)for(var r in e){var a=e[r];a.check&&(n+=a.count*a.price)}return n.toFixed(2)})),i=Object(n["b"])((function(){var e=c[t]||[];return e})),o=Object(n["b"])((function(){var e=c[t],n=!0;if(e)for(var r in e){var a=e[r];a.count>0&&!a.check&&(n=!1)}return n})),s=function(t,c){e.commit("changeCartItemChecked",{shopId:t,productId:c})},u=function(t){e.commit("cleanCartProducts",{shopId:t})},d=function(t){e.commit("setCartItemsChecked",{shopId:t})};return{total:r,price:a,productList:i,changeCartItemChecked:s,allChecked:o,cleanCartProducts:u,setCartItemsChecked:d}},tt=function(){var t=Object(n["v"])(!1),e=function(){t.value=!t.value};return{showCart:t,handleCartShowChange:e}},et={name:"Cart",setup:function(){var t=Object(I["c"])(),e=t.params.id,c=tt(),n=c.showCart,r=c.handleCartShowChange,a=Object(w["a"])(),i=a.changeCartItemInfo,o=$(e),s=o.total,u=o.price,d=o.productList,l=o.changeCartItemChecked,h=o.allChecked,b=o.cleanCartProducts,_=o.setCartItemsChecked;return{total:s,price:u,shopId:e,productList:d,changeCartItemInfo:i,changeCartItemChecked:l,allChecked:h,cleanCartProducts:b,setCartItemsChecked:_,showCart:n,handleCartShowChange:r}}};c("7527");et.render=Y,et.__scopeId="data-v-0d095e32";var ct=et,nt=function(){var t=Object(I["c"])(),e=Object(n["u"])({item:{}}),c=function(){var c=Object(u["a"])(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,Object(k["a"])("/api/shop/".concat(t.params.id));case 2:n=c.sent,0===n.errno&&n.data&&(e.item=n.data),console.log(n,"------------");case 5:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),r=Object(n["A"])(e),a=r.item;return{item:a,getItemData:c}},rt=function(){var t=Object(I["d"])(),e=function(){t.back()};return e},at={name:"Shop",components:{ShopInfo:d["a"],Content:S,Cart:ct},setup:function(){var t=nt(),e=t.item,c=t.getItemData;c();var n=rt();return{item:e,handleBackClick:n}}};c("13b1");at.render=s,at.__scopeId="data-v-2786c764";e["default"]=at},"66dd":function(t,e,c){},"69c1":function(t,e,c){},7527:function(t,e,c){"use strict";c("0790")},"75c9":function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));c("b680");var n=c("7a23"),r=c("5502"),a=function(t){var e=Object(r["b"])(),c=e.state.cartList,a=function(t,c,n,r){e.commit("changeCartItemInfo",{shopId:t,productId:c,productInfo:n,num:r})},i=Object(n["b"])((function(){var e=c[t]||[];return e})),o=Object(n["b"])((function(){var e=c[t],n={total:0,price:0,allChecked:!0};if(e)for(var r in e){var a=e[r];n.total+=a.count,a.check&&(n.price+=a.count*a.price),a.count>0&&!a.check&&(n.allChecked=!1)}return n.price=n.price.toFixed(2),n}));return{cartList:c,productList:i,calculations:o,changeCartItemInfo:a}}},"9c3d":function(t,e,c){"use strict";c("ae15")},ae15:function(t,e,c){},b680:function(t,e,c){"use strict";var n=c("23e7"),r=c("a691"),a=c("408a"),i=c("1148"),o=c("d039"),s=1..toFixed,u=Math.floor,d=function(t,e,c){return 0===e?c:e%2===1?d(t,e-1,c*t):d(t*t,e/2,c)},l=function(t){var e=0,c=t;while(c>=4096)e+=12,c/=4096;while(c>=2)e+=1,c/=2;return e},h=function(t,e,c){var n=-1,r=c;while(++n<6)r+=e*t[n],t[n]=r%1e7,r=u(r/1e7)},b=function(t,e){var c=6,n=0;while(--c>=0)n+=t[c],t[c]=u(n/e),n=n%e*1e7},_=function(t){var e=6,c="";while(--e>=0)if(""!==c||0===e||0!==t[e]){var n=String(t[e]);c=""===c?n:c+i.call("0",7-n.length)+n}return c},p=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){s.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,c,n,o,s=a(this),u=r(t),p=[0,0,0,0,0,0],j="",O="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(j="-",s=-s),s>1e-21)if(e=l(s*d(2,69,1))-69,c=e<0?s*d(2,-e,1):s/d(2,e,1),c*=4503599627370496,e=52-e,e>0){h(p,0,c),n=u;while(n>=7)h(p,1e7,0),n-=7;h(p,d(10,n,1),0),n=e-1;while(n>=23)b(p,1<<23),n-=23;b(p,1<<n),h(p,1,1),b(p,2),O=_(p)}else h(p,0,c),h(p,1<<-e,0),O=_(p)+i.call("0",u);return u>0?(o=O.length,O=j+(o<=u?"0."+i.call("0",u-o)+O:O.slice(0,o-u)+"."+O.slice(o-u))):O=j+O,O}})},c000:function(t,e,c){"use strict";c("66dd")},d7d0:function(t,e,c){"use strict";c("b0c0");var n=c("7a23"),r=Object(n["H"])("data-v-62c85e8c");Object(n["t"])("data-v-62c85e8c");var a={class:"shop"},i={class:"shop__content__title"},o={class:"shop__content__tags"},s={class:"shop__content__tag"},u={class:"shop__content__tag"},d={class:"shop__content__tag"},l={class:"shop__content__highlight"};Object(n["r"])();var h=r((function(t,e,c,r,h,b){return Object(n["q"])(),Object(n["d"])("div",a,[Object(n["h"])("img",{src:c.item.imgUrl,class:"shop__img"},null,8,["src"]),Object(n["h"])("div",{class:{shop__content:!0,"shop__content--bordered":!c.hideBorder}},[Object(n["h"])("div",i,Object(n["z"])(c.item.name),1),Object(n["h"])("div",o,[Object(n["h"])("span",s,"月售: "+Object(n["z"])(c.item.sales),1),Object(n["h"])("span",u,"起送: "+Object(n["z"])(c.item.expressLimit),1),Object(n["h"])("span",d,"基础运费: "+Object(n["z"])(c.item.expressPrice),1)]),Object(n["h"])("p",l,Object(n["z"])(c.item.slogan),1)],2)])})),b={name:"ShopInfo",props:["item","hideBorder"],setup:function(){}};c("c000");b.render=h,b.__scopeId="data-v-62c85e8c";e["a"]=b}}]);
//# sourceMappingURL=Shop.b2db6121.js.map