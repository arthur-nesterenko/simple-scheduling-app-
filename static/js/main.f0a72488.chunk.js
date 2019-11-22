(this["webpackJsonpsimple-scheduling-app"]=this["webpackJsonpsimple-scheduling-app"]||[]).push([[0],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),c=(n(82),n(30)),i=n(7),u=function(e,t,n){var a=r.a.useState((function(){try{var a=sessionStorage.getItem(e);return"string"!==typeof a?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?a:JSON.parse(a||"null")}catch(r){return t}})),o=Object(i.a)(a,2),l=o[0],c=o[1];return r.a.useEffect((function(){try{var t=n?String(l):JSON.stringify(l);sessionStorage.setItem(e,t)}catch(a){}})),[l,c]},s=r.a.createContext({}),m=function(e){var t=e.children,n=e.accountName,a=e.bookTimeRange,o=u(n,[],!1),l=Object(i.a)(o,2),m=l[0],f=l[1],d=r.a.useState((function(){return m})),b=Object(i.a)(d,2),v=b[0],g=b[1],p=r.a.useCallback((function(e,t){g((function(n){return[].concat(Object(c.a)(n),[{email:e.toLowerCase(),slot:t}])}))}),[]),E=r.a.useCallback((function(e){return new Set(v.map((function(e){return e.email}))).has(e)}),[v]),h=r.a.useCallback((function(e){E(e)&&g((function(t){return t.filter((function(t){return t.email!==e}))}))}),[E]);r.a.useEffect((function(){f(v)}),[f,v]);var O=r.a.useMemo((function(){return{addUser:p,hasEmail:E,users:v,bookTimeRange:a,removeUser:h}}),[p,a,E,h,v]);return r.a.createElement(s.Provider,{value:O},t)},f=function(){var e=r.a.useContext(s);if(void 0===e)throw new Error("useBookingProvider must be used within a BookingProvider");return e},d=n(13),b=n(147),v=n(148),g=n(149),p=n(150),E=n(143),h=n(151),O=function(e){var t=r.a.useState(e),n=Object(i.a)(t,2),a=n[0],o=n[1];return[a,r.a.useCallback((function(){return o((function(e){return!e}))}),[])]},y=n(138),k=n(139),C=n(68),S=n(76),j=(n(129),n(10)),w=n.n(j),N=n(75),P=Object(N.extendMoment)(w.a),H=function(e){return P(e,"HH:mm")},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hour",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"22:00",o=H(e),l=H(e),c=H(t),i=H(r);c.isBefore(l)&&c.add(1,"day");for(var u=[];l<=c;){l.isSame(o)||l.subtract(n,a);var s=new P(l).format("HH:mm"),m=l.add(n,a);if(m.isAfter(i))break;u.push({start:s,end:m.format("HH:mm")}),l.add(n,a)}return u},B=function(e){var t=e.start,n=e.end,a=H(t),r=H(n);return P.range(a,r)},I={showSecond:!1,minuteStep:30,format:"HH:mm",allowEmpty:!1,hideDisabledOptions:!1},A=function(e){var t=e.name,n=e.onChange,a=e.title,o=e.value,l=e.disabledHours,c=e.min,i=e.max,u=e.disabledMinutes,s=Object(C.a)(e,["name","onChange","title","value","disabledHours","min","max","disabledMinutes"]),m=r.a.useCallback((function(e){var a=e.format("HH:mm");n(Object(d.a)({},t,a),t,e)}),[t,n]),f=r.a.useMemo((function(){return H(o)}),[o]),b=r.a.useCallback((function(){var e=l({value:o,name:t}),n=parseInt(c),a=Array.from({length:n},(function(e,t){return t})),r=function(e){return Array.from(B({start:H(e).add(1,"hour"),end:w()().endOf("day")}).by("hours"),(function(e){return+e.format("HH")}))}(i);return e.concat(a,r)}),[l,i,c,t,o]),v=r.a.useCallback((function(e){var n=u(e,t);return parseInt(i)===e&&n.push(30),n}),[u,t,i]);return r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("small",null,a),r.a.createElement(S.a,Object.assign({},I,{name:t,onChange:m,value:f,disabledHours:b,disabledMinutes:v},s)))};A.defaultProps={disabledHours:function(){return[]},disabledMinutes:function(){return[]}};var D=r.a.memo(A),M=function(){var e=f(),t=e.users,n=e.bookTimeRange,a=t.map((function(e){return e.slot})).map(B),o=function(e){return new Set(t.map((function(e){var t=e.slot;return JSON.stringify(t)}))).has(JSON.stringify(e))},l=function(e){var t=B(e);return a.some((function(e){return e.contains(t)}))},i=function(e){return x(e.start,e.end,30,"minutes").find((function(e){var t=B(e);return!1===a.some((function(e){return t.intersect(e)}))}))},u=function(e,t){var n=x(t.start,t.end,30,"minutes").filter((function(t){var n=B(t);return e.some((function(e){return n.intersect(e)}))})).map(B).reduce((function(e,t){return[].concat(Object(c.a)(e),[Array.from(t.by("hour"),(function(e){return+e.minute(0).second(0).format("HH")}))])}),[]).flat();return Object(c.a)(new Set(n))}(a,n);return r.a.useMemo((function(){return{bookedSlots:a,checkIsAvailableSlot:l,getFirstAvailableSlots:i,isBooked:o,notAvailableHours:u}}),[a,u])},R=r.a.memo((function(e){var t=e.start,n=e.end,a=e.onChange,o=e.range,l=M().notAvailableHours,c=r.a.useCallback((function(){return l}),[l]);return r.a.createElement(y.a,null,r.a.createElement(k.a,{sm:6},r.a.createElement(D,{name:"start",title:"Start",placeholder:"Start",onChange:a,disabledHours:c,value:t,max:o.end,min:o.start})),r.a.createElement(k.a,{sm:6},r.a.createElement(D,{name:"end",title:"End",placeholder:"End",onChange:a,disabledHours:c,value:n,max:o.end,min:o.start})))})),T=n(154),J=n(144),z=n(145),L=n(140),U=n(141),W=n(142),F=n(153);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var $=function(e){var t=e.onSubmit,n=e.buttonName,a=e.buttonColor,o=e.disableButton,l=e.validInput,c=e.invalidInput,u=r.a.useState(null),s=Object(i.a)(u,2),m=s[0],f=s[1],b=r.a.useCallback((function(e){e.preventDefault(),t(m)}),[t,m]),v=r.a.useCallback((function(e){var t=e.target;f((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(d.a)({},t.name,t.value))}))}),[]);return r.a.createElement(L.a,{onSubmit:b},r.a.createElement(U.a,null,r.a.createElement(W.a,{type:"email",name:"email",onChange:v,invalid:c(m),valid:m?l(m):void 0,placeholder:"Please enter your email"}),r.a.createElement(F.a,{addonType:"append"},r.a.createElement(E.a,{disabled:o(m),color:a},n))))};$.defaultProps={buttonName:"Confirm",buttonColor:"secondary",disableButton:function(){},validInput:function(){},invalidInput:function(){}};var q=$,G=function(e){var t=f().hasEmail,n=function(e){return e&&t(e.email)};return r.a.createElement(q,Object.assign({},e,{disableButton:n,invalidInput:n,validInput:function(e){return!n(e)}}))};G.defaultProps={buttonName:"Confirm",buttonColor:"secondary"};var K=G,Q=function(e){var t=e.onClick,n=e.isOpen,a=e.slot,o=e.onConfirmBooking,l=e.buttonName,c=M().checkIsAvailableSlot,i=r.a.useCallback((function(e){o(e),t()}),[t,o]),u=c(a);return r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"text-capitalize",size:"lg",disabled:u,onClick:t},l),r.a.createElement(T.a,{isOpen:n,toggle:t},r.a.createElement(J.a,{toggle:t},"Slot ",a.start," - ",a.end),r.a.createElement(z.a,null,r.a.createElement(K,{onSubmit:i}))))};Q.defaultProps={buttonName:"Book now"};var V=Q,X=n(146),Y=function(e){var t=e.slot,n=f().addUser,a=O(!1),o=Object(i.a)(a,2),l=o[0],c=o[1],u=r.a.useCallback((function(e){var a=e.email;n(a,t)}),[n,t]),s=r.a.useMemo((function(){return function(e){var t=e.start,n=e.end,a=H(t),r=H(n),o=Math.abs(a.diff(r,"hours",!0));return o>3?"Booking time should be not more than ".concat(3," hours"):0===o?"Booking time should be at least 30 minutes":a.isSameOrAfter(r)?"Start time couldn't be the same or bigger than ".concat(n," h"):r.isSameOrBefore(a)?"End time couldn't be the same or less than ".concat(t," h"):void 0}(t)}),[t]),m="undefined"!==typeof s;return r.a.createElement("div",{className:"py-3"},r.a.createElement(X.a,{color:"danger",className:"my-2",isOpen:m},r.a.createElement("h4",{className:"alert-heading"},"Warning!"),r.a.createElement("strong",null,s)),!m&&r.a.createElement(V,{slot:t,onConfirmBooking:u,isOpen:l,onClick:c,buttonName:"Book now ".concat(t.start," - ").concat(t.end)}))},Z=r.a.memo((function(){var e=O(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],o=r.a.useState(null),l=Object(i.a)(o,2),c=l[0],u=l[1],s=O(!1),m=Object(i.a)(s,2),d=m[0],b=m[1],v=f(),g=v.users,p=v.removeUser,h=r.a.useCallback((function(e){var t=e.email,n=g.find((function(e){return e.email===t.toLowerCase()}));u(n),b()}),[b,g]),y=c?"Are you sure you want to cancel your reservation  ".concat(c.slot.start," - ").concat(c.slot.end,"h ?"):"Email doesn't exist";return r.a.createElement("div",null,r.a.createElement(E.a,{color:"danger",className:"text-capitalize",size:"sm",onClick:a},"Cancel reservation"),r.a.createElement(T.a,{isOpen:n,toggle:a},r.a.createElement(J.a,{toggle:a},"Cancel reservation"),r.a.createElement(z.a,null,r.a.createElement(q,{onSubmit:h,buttonName:"Remove",buttonColor:"danger"}),r.a.createElement(X.a,{className:"my-2",color:c&&c.email?"warning":"danger",isOpen:d,toggle:b},r.a.createElement("h4",{className:"alert-heading"},"Warning!"),r.a.createElement("strong",null,y),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-row-reverse"},c&&c.email&&r.a.createElement(E.a,{color:"danger",onClick:function(){p(c.email),a()}},"Confirm"))))))}));function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var te=function(e){var t=e.accountTitle,n=e.slotRange,a=O(!1),o=Object(i.a)(a,2),l=o[0],c=o[1],u=M(),s=u.getFirstAvailableSlots,m=u.isBooked,f=u.bookedSlots,y=r.a.useCallback((function(){return s(n)}),[s,n]),k=r.a.useState(y),C=Object(i.a)(k,2),S=C[0],j=C[1],w=r.a.useCallback((function(e){j((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},e)}))}),[]);return r.a.useEffect((function(){S&&m(S)&&j((function(){return y()}))}),[f,y,m,S]),r.a.createElement(b.a,null,r.a.createElement(v.a,{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement(g.a,{className:"text-center my-2"},r.a.createElement("strong",null,t)),r.a.createElement(p.a,{className:"my-2"},r.a.createElement("i",{className:"text-muted"},"Choose your time (0.5-3h)")),r.a.createElement(E.a,{onClick:c,color:l?"danger":"success"},l?"Close":"Show available slots"),r.a.createElement(h.a,{isOpen:l},r.a.createElement("div",{className:"d-flex flex-column py-3"},r.a.createElement(R,Object.assign({range:n,onChange:w},S)),j&&r.a.createElement(Y,{slot:S}))),r.a.createElement(v.a,null,r.a.createElement(Z,null))))},ne=n(152),ae={start:"07:00",end:"22:00"};var re=function(){return r.a.createElement(ne.a,{className:"mt-5"},r.a.createElement(y.a,null,r.a.createElement(k.a,{sm:12,md:6},r.a.createElement(m,{bookTimeRange:ae,accountName:"room_1"},r.a.createElement(te,{accountTitle:"Laundry room 1",slotRange:ae}))),r.a.createElement(k.a,{sm:12,md:6},r.a.createElement(m,{accountName:"room_2",bookTimeRange:ae},r.a.createElement(te,{accountTitle:"Laundry room 2",slotRange:ae})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,n){e.exports=n(137)}},[[77,1,2]]]);
//# sourceMappingURL=main.f0a72488.chunk.js.map