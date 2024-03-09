(function(){"use strict";var e={479:function(e,t,r){var n=r(751),i=r(641),a=r(33);const o={class:"header"},s=(0,i.Lk)("div",{class:"title"},null,-1),l={class:"container"},c=(0,i.Lk)("div",{class:"search"},null,-1),h={class:"body"};function u(e,t,u,p,d,g){const f=(0,i.g2)("StatusBar"),v=(0,i.g2)("MainContent");return(0,i.uX)(),(0,i.CE)("div",{class:"pc-container",style:(0,a.Tr)({backgroundImage:"url("+r(365)+")"})},[(0,i.Lk)("div",o,[s,(0,i.Lk)("div",l,[(0,i.bo)((0,i.Lk)("input",{type:"text",placeholder:"Search...（Press enter to search）","onUpdate:modelValue":t[0]||(t[0]=e=>d.city=e),onKeyup:t[1]||(t[1]=(0,n.jR)(((...e)=>g.getWeatherByCity&&g.getWeatherByCity(...e)),["enter"]))},null,544),[[n.Jo,d.city]]),c])]),(0,i.Lk)("div",h,[(0,i.bF)(f,{weather:d.weather,temperatureUnit:d.temperatureUnit,onToggleUnit:g.toggleUnit},null,8,["weather","temperatureUnit","onToggleUnit"]),(0,i.bF)(v,{weather:d.weather,temperatureUnit:d.temperatureUnit,loading:d.loading},null,8,["weather","temperatureUnit","loading"])])],4)}const p=e=>((0,i.Qi)("data-v-15487288"),e=e(),(0,i.jt)(),e),d={class:"status-bar"},g={class:"left z"},f={class:"right y"},v={class:"y"},w={class:"y"},m=p((()=>(0,i.Lk)("label",{for:"cmn-toggle-1"},null,-1)));function k(e,t,r,n,o,s){return(0,i.uX)(),(0,i.CE)("div",d,[(0,i.Lk)("span",g,[(0,i.Lk)("span",null,"position: "+(0,a.v_)(r.weather?r.weather.name:"City name"),1)]),(0,i.Lk)("span",f,[(0,i.Lk)("span",v,[(0,i.Lk)("span",null,(0,a.v_)("Celsius"===r.temperatureUnit?"Switch to Fahrenheit":"Switch to Celsius"),1),(0,i.Lk)("div",w,[(0,i.Lk)("input",{id:"cmn-toggle-1",class:"cmn-toggle cmn-toggle-round",type:"checkbox",onClick:t[0]||(t[0]=(...e)=>s.toggleUnit&&s.toggleUnit(...e))}),m])])])])}var y={props:{weather:Object,temperatureUnit:String},methods:{toggleUnit(){this.$emit("toggleUnit")}}},b=r(262);const C=(0,b.A)(y,[["render",k],["__scopeId","data-v-15487288"]]);var U=C;const L={class:"main-content"},_={class:"weather-box"},x={class:"z"},j=["src"],O={class:"z text"},F={key:0,class:"temperature z"},$={key:0,class:"description"},E={key:1,class:"feel"},W={class:"info-boxes"},T={class:"info-box"},B={class:"info-box"},S={class:"info-box"},X={class:"info-box"};function I(e,t,r,n,o,s){return(0,i.uX)(),(0,i.CE)("div",L,[(0,i.Lk)("div",_,[(0,i.Lk)("div",x,[r.weather?((0,i.uX)(),(0,i.CE)("img",{key:0,src:s.weatherIconUrl,alt:"Weather Icon"},null,8,j)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",O,[r.weather?((0,i.uX)(),(0,i.CE)("span",F,(0,a.v_)(r.weather?s.temperature:"-"),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",null,[r.weather?((0,i.uX)(),(0,i.CE)("p",$,(0,a.v_)(r.weather?r.weather.description:"-"),1)):(0,i.Q3)("",!0),r.weather?((0,i.uX)(),(0,i.CE)("p",E,"Apparent temperature: "+(0,a.v_)(r.weather?s.feelTemperature:"-"),1)):(0,i.Q3)("",!0)])])]),(0,i.Lk)("div",W,[(0,i.Lk)("div",T,"pressure: "+(0,a.v_)(r.weather?r.weather.pressure:"-")+"hPa",1),(0,i.Lk)("div",B,"visibility: "+(0,a.v_)(r.weather?r.weather.visibility:"-")+"km",1),(0,i.Lk)("div",S,"wind speed: "+(0,a.v_)(r.weather?r.weather.wind_speed:"-")+"m/s",1),(0,i.Lk)("div",X,"measure time: "+(0,a.v_)(r.weather?r.weather.measurement_time:"-")+"(UTC+8 Beijing Time)",1)])])}var P={props:{weather:Object,temperatureUnit:String,loading:Boolean},computed:{temperature(){return this.weather?"Celsius"===this.temperatureUnit?`${this.weather.temperatureCelsius.toFixed(1)}°C`:`${this.weather.temperatureFahrenheit.toFixed(1)}°F`:"-"},feelTemperature(){return this.weather?"Celsius"===this.temperatureUnit?`${this.weather.feels_like_celsius.toFixed(1)}°C`:`${this.weather.feels_like_fahrenheit.toFixed(1)}°F`:"-"},weatherIconUrl(){return this.weather&&this.weather.icon?`https://openweathermap.org/img/wn/${this.weather.icon}@2x.png`:""}}};const Q=(0,b.A)(P,[["render",I],["__scopeId","data-v-3793ec5b"]]);var z=Q,A={components:{StatusBar:U,MainContent:z},data(){return{weather:null,city:"",temperatureUnit:"Celsius",loading:!1}},created(){this.getCurrentLocationWeather()},methods:{getCurrentLocationWeather(){this.loading=!0,navigator.geolocation.getCurrentPosition((e=>{const t=e.coords.latitude,r=e.coords.longitude;this.getWeather(t,r)}))},getWeatherByCity(){this.loading=!0,fetch(`http://127.0.0.1:8000/api/get_coordinates_by_city?city=${this.city}`).then((e=>e.json())).then((e=>{if(e.error)alert(`error: ${e.error}`),this.loading=!1;else{const t=e.lat,r=e.lon;this.getWeather(t,r)}})).catch((e=>{console.error("request failure:",e),this.loading=!1}))},getWeather(e,t){fetch(`http://127.0.0.1:8000//api/get_weather?lat=${e}&lon=${t}`).then((e=>e.json())).then((e=>{e.error?(alert(`Error: ${e.error}`),this.weather=null,this.loading=!1):(this.weather=e,this.loading=!1)})).catch((e=>{console.error("request failure:",e),this.loading=!1,alert("Weather data fetch failed. Please try again later.")}))},toggleUnit(){this.temperatureUnit="Celsius"===this.temperatureUnit?"Fahrenheit":"Celsius"}}};const q=(0,b.A)(A,[["render",u]]);var M=q;(0,n.Ef)(M).mount("#app")},365:function(e,t,r){e.exports=r.p+"static/img/BG.914d75f0.jpg"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,a){if(!n){var o=1/0;for(h=0;h<e.length;h++){n=e[h][0],i=e[h][1],a=e[h][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(h--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[n,i,a]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],s=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var h=l(r)}for(t&&t(n);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(h)},n=self["webpackChunkapp_client"]=self["webpackChunkapp_client"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(479)}));n=r.O(n)})();
//# sourceMappingURL=app.367dfd40.js.map