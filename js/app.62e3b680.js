(function(t){function e(e){for(var n,a,o=e[0],i=e[1],u=e[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(d.length)d.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var t,e=0;e<l.length;e++){for(var r=l[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(n=!1)}n&&(l.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},s={app:0},l=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/click-sixteen/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=i;l.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"29cb":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"w-screen h-screen bg-blue-200 mx-auto flex flex-col items-center justify-around",attrs:{id:"everything"}},[r("div",{staticClass:"w-full",attrs:{id:"topbar"}},[t.started?r("div",{staticClass:"text-5xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-around",attrs:{id:"topbarstarted"}},[r("p",[t._v("Current: "),r("b",[t._v(t._s(t.cur))])]),r("p",[t._v("Time: "),r("b",[t._v(t._s((t.time/100).toFixed(2)+"s"))])])]):r("div",{staticClass:"text-5xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-around",attrs:{id:"topbarnotstarted"}},[r("p",[t._v("Click Sixteen")]),r("p",[t._v("Last Time: "),r("b",[t._v(t._s(0===t.lastTime?"N/A":(t.lastTime/100).toFixed(2)+"s"))])])])]),r("div",{staticClass:"m-5 flex-1 w-11/12 md:w-3/4 border border-gray-700",attrs:{id:"playarea"}},[t.started?r("div",{staticClass:"h-full flex flex-wrap items-stretch",attrs:{id:"playareastarted"}},t._l(t.nums,(function(e){return r("div",{key:e,class:t.buttonSize,attrs:{id:"buttons"}},[r("NumberButton",{attrs:{num:e,colored:t.colored,penalty:t.penalty},on:{increment:function(r){return t.increment(e)}}})],1)})),0):r("div",{staticClass:"w-full h-full",attrs:{id:"playareanotstarted"}},[r("div",{staticClass:"flex flex-col w-full h-full",attrs:{id:"optionsbuttons"}},[r("button",{staticClass:"w-full h-full border border-gray-700 bg-gray-400",on:{click:function(e){return t.startColor()}}},[r("p",{staticClass:"text-5xl font-bold"},[t._v("START COLOR")]),r("p",{staticClass:"text-2xl text-gray-700"},[t._v("Click all the colors from red to purple!")])]),t._l([3,4,5],(function(e){return r("button",{staticClass:"w-full h-full border border-gray-700 bg-gray-400",on:{click:function(r){return t.start(e)}}},[r("p",{staticClass:"text-5xl font-bold"},[t._v("START "+t._s(e*e))]),r("p",{staticClass:"text-2xl text-gray-700"},[t._v("Click all the numbers from 1 to "+t._s(e*e))])])}))],2)])])])])},l=[],a=(r("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"w-full h-full border-2 text-6xl",class:[t.penaltyStyle,t.buttonColor],on:{click:function(e){return t.$emit("increment")}}},[t.colored?t._e():r("p",[t._v(t._s(t.num))])])}),o=[],i=(r("a9e3"),{name:"NumberButton",props:{num:Number,colored:Boolean,penalty:Boolean},computed:{buttonColor:function(){if(!this.colored)return"bg-gray-400";switch(this.num){case 1:return"bg-red-700";case 2:return"bg-red-400";case 3:return"bg-orange-400";case 4:return"bg-yellow-200";case 5:return"bg-green-200";case 6:return"bg-green-600";case 7:return"bg-teal-500";case 8:return"bg-blue-700";case 9:return"bg-purple-500"}return this.colored?"bg-red-400":"bg-gray-400"},penaltyStyle:function(){return this.penalty?"border-red-700 text-red-500":"border-gray-700"}}}),u=i,c=r("2877"),f=Object(c["a"])(u,a,o,!1,null,null,null),d=f.exports,p={name:"Game",components:{NumberButton:d},data:function(){return{nums:[],size:0,colored:!1,started:!1,cur:1,time:0,timer:null,lastTime:0,penalty:!1,penaltyTimer:75}},computed:{buttonSize:function(){return"w-1/".concat(this.size," h-1/").concat(this.size)}},methods:{start:function(t){for(var e=this,r=[],n=1;n<t*t+1;n++)r.push(n);this.randomize(r),this.nums=r,this.size=t,this.colored=!1,this.started=!0;var s=this.penaltyTimer;this.timer=setInterval((function(){e.time+=1,e.penalty&&(s-=1,0===s&&(e.penalty=!1,s=e.penaltyTimer))}),10)},startColor:function(){this.start(3),this.colored=!0},increment:function(t){t===this.cur?(this.cur+=1,this.cur>this.size*this.size&&(clearTimeout(this.timer),this.started=!1,this.lastTime=this.time,this.time=0,this.cur=1)):this.penalty=!0},randomize:function(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[r],t[r]=n}}}},b=p,m=Object(c["a"])(b,s,l,!1,null,null,null),h=m.exports;r("29cb");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.62e3b680.js.map