(function(t){function e(e){for(var i,s,r=e[0],c=e[1],u=e[2],m=0,f=[];m<r.length;m++)s=r[m],o[s]&&f.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"024d":function(t,e,n){t.exports=n.p+"assets/img/5.3df3e602.jpg"},"033b":function(t,e,n){"use strict";var i=n("8552"),o=n.n(i);o.a},"11d9":function(t,e,n){t.exports=n.p+"assets/img/3.881e737b.jpg"},2140:function(t,e,n){"use strict";var i=n("67cf"),o=n.n(i);o.a},"26f0":function(t){t.exports={}},3461:function(t,e,n){t.exports=n.p+"assets/img/3.79915f49.jpg"},"405a":function(t,e,n){t.exports=n.p+"assets/img/2.6c48bb56.jpg"},4294:function(t,e,n){},"4ba7":function(t,e,n){"use strict";var i=n("4294"),o=n.n(i);o.a},5256:function(t,e,n){t.exports=n.p+"assets/img/6.f814a10d.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"menu-bar"},[i("div",{staticClass:"logo",attrs:{id:"logo"},on:{click:t.goHome}},[i("img",{staticStyle:{width:"250px"},attrs:{src:n("5fbe")}})]),i("div",{staticClass:"middle"},[i("div",{staticStyle:{"margin-right":"2px"},attrs:{id:"newIn"}},[i("router-link",{staticClass:"router-link",attrs:{to:"/TheNewIn"}},[t._v("NEW IN")])],1),i("div",{attrs:{id:"items"}},[i("router-link",{staticClass:"router-link",attrs:{to:"/TheItems"}},[t._v("ITEMS")])],1)]),i("div",{staticClass:"icon-list",attrs:{id:"icon"}},[i("div",{on:{click:t.goLogin}},[i("i",{staticClass:"fas fa-user-circle"})]),i("div",{on:{click:t.goShopCart}},[i("i",{staticClass:"fas fa-cart-plus"})]),i("div",{on:{click:t.goQA}},[i("i",{staticClass:"fas fa-question-circle"})]),t._m(0),t._m(1),t._m(2)])]),i("router-view")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-search"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-globe-asia"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-money-check-alt"})])}],s={components:{},data:function(){return{}},created:function(){},watch:{},updated:function(){},computed:{},methods:{goHome:function(){this.$router.push("/home")},goLogin:function(){this.$router.push("/TheSignIn")},goShopCart:function(){this.$router.push("/TheShopCart")},goQA:function(){this.$router.push("/TheQA")}},mounted:function(){}},r=s,c=(n("5c0b"),n("2877")),u=Object(c["a"])(r,o,a,!1,null,null,null),l=u.exports,m=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BasePictureArea"),n("BaseItemArea")],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pictureArea"},[n("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.items,function(t){return n("swiper-slide",{key:t.key,staticClass:"box"},[n("img",{attrs:{src:t}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)},g=[],h=(n("dfa4"),n("7212")),v=n.n(h),y={components:{swiper:h["swiper"],swiperSlide:h["swiperSlide"]},data:function(){return{items:[n("8554"),n("405a"),n("11d9"),n("bafb")],swiperOption:{notNextTick:!0,pagination:{el:".swiper-pagination",clickable:!0},direction:"horizontal",autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,slidesPerView:1}}},created:function(){},watch:{},updated:function(){},computed:{},methods:{},mounted:function(){}},b=y,_=(n("033b"),Object(c["a"])(b,d,g,!1,null,null,null)),w=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"itemArea",attrs:{id:"itemArea"}},[t._m(0),n("div",{staticClass:"section2"},t._l(t.hotItem[this.page],function(e){return n("div",{key:e.key},[n("div",{staticClass:"arrangeItem"},[n("img",{attrs:{src:e.img}}),n("div",[t._v(t._s(e.name))]),n("div",[t._v(t._s(e.money))])])])}),0),n("div",{staticClass:"section3"},t._l(t.hotItem.length,function(e){return n("div",{key:e.key},[n("div",{staticClass:"num-hover",attrs:{id:e},on:{click:function(n){return t.go(e)}}},[t._v(t._s(e))])])}),0)])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section1"},[n("div",[t._v("HOT ITEM 20")]),n("div",{staticStyle:{display:"flex"}},[n("div",[t._v("Price")]),n("div",{staticStyle:{"margin-left":"10px"}},[n("select",{attrs:{name:"sort"}},[n("option",[t._v("Low to high")]),n("option",[t._v("High to Low")])])])])])}],S={components:{},data:function(){return{page:0,initialPage:0,currentPage:0,hotItem:[[{name:"查理布朗短T",money:260,img:n("94c9")},{name:"查理‧布朗漫畫長版T",money:200,img:n("6f35")},{name:"查理‧布朗露營字母短袖棉T",money:430,img:n("3461")},{name:"查理．布朗搭火車短袖洋裝",money:450,img:n("8f19")},{name:"查理布朗短T",money:260,img:n("8f19")},{name:"查理‧布朗漫畫長版T",money:200,img:n("024d")},{name:"查理‧布朗露營字母短袖棉T",money:430,img:n("5256")},{name:"查理．布朗搭火車短袖洋裝",money:450,img:n("c21e")},{name:"查理布朗短T",money:260,img:n("a8a9")},{name:"查理‧布朗漫畫長版T",money:200,img:n("e487")},{name:"查理‧布朗露營字母短袖棉T",money:430,img:n("a3ff")},{name:"查理．布朗搭火車短袖洋裝",money:450,img:n("6f35")}],[{name:"查理布朗短T",money:260,img:n("6f35")},{name:"查理‧布朗漫畫長版T",money:200,img:n("3461")},{name:"查理‧布朗露營字母短袖棉T",money:430,img:n("8f19")},{name:"查理．布朗搭火車短袖洋裝",money:450,img:n("024d")},{name:"查理布朗短T",money:260,img:n("94c9")},{name:"查理‧布朗漫畫長版T",money:200,img:n("6f35")},{name:"查理‧布朗露營字母短袖棉T",money:430,img:n("3461")},{name:"查理．布朗搭火車短袖洋裝",money:450,img:n("8f19")},{name:"查理布朗短T",money:260,img:n("3461")},{name:"查理‧布朗漫畫長版T",money:200,img:n("3461")},{name:"查理‧布朗露營字母短袖棉T",money:430,img:n("6f35")},{name:"查理．布朗搭火車短袖洋裝",money:450,img:n("8f19")}],[{name:"查理布朗短T",money:260,img:n("94c9")},{name:"查理‧布朗漫畫長版T",money:200,img:n("6f35")},{name:"查理‧布朗露營字母短袖棉T",money:430,img:n("3461")},{name:"查理．布朗搭火車短袖洋裝",money:450,img:n("8f19")},{name:"查理布朗短T",money:260,img:n("94c9")},{name:"查理‧布朗漫畫長版T",money:200,img:n("6f35")}]]}},created:function(){},watch:{},updated:function(){},computed:{},methods:{go:function(t){t===this.page&&this.page!=t||(this.page=t-1)}},mounted:function(){}},I=S,C=(n("2140"),Object(c["a"])(I,x,T,!1,null,null,null)),j=C.exports,E=(n("26f0"),{components:{BasePictureArea:w,BaseItemArea:j},data:function(){return{}},created:function(){},watch:{},updated:function(){},computed:{},methods:{},mounted:function(){}}),A=E,k=Object(c["a"])(A,f,p,!1,null,null,null),O=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BasePictureArea"),n("BaseItemArea")],1)},P=[],B={components:{BasePictureArea:w,BaseItemArea:j},data:function(){return{}},created:function(){},watch:{},updated:function(){},computed:{},methods:{},mounted:function(){}},N=B,R=Object(c["a"])(N,$,P,!1,null,null,null),z=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view"),n("BasePictureArea"),n("BaseItemArea")],1)},M=[],H={components:{BasePictureArea:w,BaseItemArea:j},data:function(){return{}},created:function(){},watch:{},updated:function(){},computed:{},methods:{},mounted:function(){}},Q=H,G=Object(c["a"])(Q,L,M,!1,null,null,null),F=G.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},V=[],q={components:{},data:function(){return{}},created:function(){},watch:{},updated:function(){},computed:{},methods:{},mounted:function(){}},D=q,K=Object(c["a"])(D,J,V,!1,null,null,null),W=K.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},X=[],Y={components:{},data:function(){return{}},created:function(){},watch:{},updated:function(){},computed:{},methods:{},mounted:function(){}},Z=Y,tt=Object(c["a"])(Z,U,X,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"layout"},[n("div",{staticClass:"border"},[t._m(0),n("div",{on:{click:function(e){return t.logIn()}}},[n("button",{staticStyle:{"font-size":"20px"}},[t._v("Google登入")])]),n("hr",{attrs:{size:"1",width:"100%"}}),t._m(1)])])])},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"child"},[n("div",{staticStyle:{"font-size":"60px"}},[t._v("SIGN IN")]),n("div",{staticStyle:{"font-size":"25px"}},[t._v("會員登錄")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticStyle:{"font-size":"20px"}},[t._v("FB登入")])])}],ot={components:{},data:function(){return{}},created:function(){},watch:{},updated:function(){},computed:{},methods:{logIn:function(){i["a"].googleAuth().directAccess(),i["a"].googleAuth().signIn(this.onSignInSuccess,this.onSignInError)},onSignInSuccess:function(t){console.log("onSignInSuccess"),this.toggleLoading(),this.resetResponse(),this.$http.post("http://your-backend-server.com/auth/google",{code:t,redirect_uri:"postmessage"}).then(function(t){this.$router.push({name:"/home"})},function(t){var e=t.body;this.response=e.error,console.log("BACKEND SERVER - SIGN-IN ERROR",e)})},onSignInError:function(t){this.response="Failed to sign-in",console.log("status",this.response)},toggleLoading:function(){this.loading=""===this.loading?"loading":""},resetResponse:function(){this.response=""}},mounted:function(){}},at=ot,st=(n("4ba7"),Object(c["a"])(at,nt,it,!1,null,null,null)),rt=st.exports;i["a"].use(m["a"]);var ct=new m["a"]({base:"",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"TheHome",component:O},{path:"/TheItems",name:"TheItems",component:z},{path:"/TheNewIn",name:"TheNewIn",component:F},{path:"/TheQA",name:"TheQA",component:W},{path:"/TheShopCart",name:"TheShopCart",component:et},{path:"/TheSignIn",name:"TheSignIn",component:rt}]}),ut=n("2f62");i["a"].use(ut["a"]);var lt=new ut["a"].Store({state:{},mutations:{},actions:{}}),mt=n("84c2"),ft=n.n(mt);i["a"].use(v.a),i["a"].config.productionTip=!1,i["a"].use(ft.a,{client_id:"893746950645-se5tohfabsm855h27s85tht5g7a8l0ft.apps.googleusercontent.com"}),i["a"].googleAuth().load(),new i["a"]({router:ct,store:lt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),o=n.n(i);o.a},"5e27":function(t,e,n){},"5fbe":function(t,e,n){t.exports=n.p+"assets/img/logo2.afd0fec0.png"},"67cf":function(t,e,n){},"6f35":function(t,e,n){t.exports=n.p+"assets/img/2.cd7645cd.jpg"},8552:function(t,e,n){},8554:function(t,e,n){t.exports=n.p+"assets/img/1.2fba938c.jpg"},"8f19":function(t,e,n){t.exports=n.p+"assets/img/4.5a575f8f.jpg"},"94c9":function(t,e,n){t.exports=n.p+"assets/img/1.b6a7ddb1.jpg"},a3ff:function(t,e,n){t.exports=n.p+"assets/img/10.e673dc2f.jpg"},a8a9:function(t,e,n){t.exports=n.p+"assets/img/8.1f24f033.jpg"},bafb:function(t,e,n){t.exports=n.p+"assets/img/4.6dc9c0c0.jpg"},c21e:function(t,e,n){t.exports=n.p+"assets/img/7.42b54343.jpg"},e487:function(t,e,n){t.exports=n.p+"assets/img/9.4ff19ca5.jpg"}});
//# sourceMappingURL=app.a6eb1539.js.map