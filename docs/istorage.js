!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}({33:function(e,t,n){"use strict";n.r(t);n(34),n(35),n(36)},34:function(e,t){window.IStorage=function(){var e,t="istorage js-istorage",n="getRequest",a="getResponse",r="setRequest",o="setResponse",u="triggerRequest",i="triggerResponse",s=0,c={},l={};function d(n){e&&e.data("isLoaded")?p(n):function(n){e||(a=$("<iframe>").attr({src:app.config.istorageIframeURL}).addClass(t),e=a.appendTo("body"));var a;e.on("load",(function(){$(this).data({isLoaded:!0}),n()}))}((function(){p(n)}))}function f(e,t){e.postMessage(JSON.stringify(t),"*")}function p(t){f(e[0].contentWindow,t)}function y(e,t){var s=t.payload;switch(t.type){case n:f(e,{type:a,payload:{value:localStorage.getItem(s.key),requestID:s.requestID}});break;case r:localStorage.setItem(s.key,s.value),f(e,{type:o,payload:{key:s.key,value:s.value,requestID:s.requestID}});break;case o:I(s.requestID,{key:s.key,value:s.value,source:e});break;case a:I(s.requestID,s.value,e);break;case u:localStorage.setItem(s.eventName,JSON.stringify({data:s.data,requestID:s.requestID})),localStorage.removeItem(s.eventName);break;case i:!function(e,t){l[e]&&l[e].forEach((function(e){e(t)}))}(s.eventName,s.data),I(s.requestID)}}function v(e){var t;try{t=JSON.parse(e)}catch(e){return}return t}function g(e){var t=v(e.data);t&&y(e.source,t)}function b(e){if(e.newValue){var t=v(e.newValue);f(window.parent,{type:i,payload:{eventName:e.key,data:t&&t.data,requestID:t&&t.requestID}})}}function m(e){var t;t=e.callback,c[++s]=t,d({type:e.type,payload:$.extend({},e.payload,{requestID:s})})}function I(e,t,n){c[e]&&c[e](t,n),delete c[e]}return window.addEventListener("message",g),{get:function(e,t){m({type:n,callback:t,payload:{key:e}})},set:function(e,t,n){m({type:r,callback:n,payload:{key:e,value:t}})},trigger:function(e,t,n){m({type:u,callback:n,payload:{eventName:e,data:t}})},on:function(e,t){l[e]?l[e].push(t):l[e]=[t]},removeEventListeners:function(e){delete l[e]},listenIframeWindow:function(){window.addEventListener("storage",b)}}}()},35:function(e,t){window.addEventListener("load",IStorage.listenIframeWindow)},36:function(e,t,n){}});