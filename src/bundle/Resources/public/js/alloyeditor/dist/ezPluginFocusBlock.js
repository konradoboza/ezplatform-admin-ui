!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ezPluginFocusBlock=t():(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezPluginFocusBlock=t())}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=55)}({55:function(e,t,o){"use strict";!function(e){if(!CKEDITOR.plugins.get("ezfocusblock")){var t=function(e){return e.element.findOne(".is-block-focused")},o=function(e){var t=e.block,o=e.elements;return t?o[o.length-2]:null},n=function(e){var n=o(e.data.path),r=t(e.editor);!r||n&&n.$===r.$||r.removeClass("is-block-focused"),n&&n.addClass("is-block-focused")},r=function(e){var o=t(e.editor);o&&o.removeClass("is-block-focused")},u=function(e){var t=document.createDocumentFragment(),o=document.createElement("div"),n=void 0;t.appendChild(o),o.innerHTML=e.data.dataValue;var r=o.querySelectorAll(".is-block-focused");if(r.length){for(n=0;n!=r.length;++n){var u=r[n];u.classList.remove("is-block-focused"),u.getAttribute("class")||u.removeAttribute("class")}e.data.dataValue=o.innerHTML}};CKEDITOR.plugins.add("ezfocusblock",{init:function(e){e.on("selectionChange",n),e.on("blur",r),e.on("getData",u)}})}}(window)}}).default});
//# sourceMappingURL=ezPluginFocusBlock.js.map