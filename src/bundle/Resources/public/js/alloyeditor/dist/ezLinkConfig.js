!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("AlloyEditor")):"function"==typeof define&&define.amd?define(["AlloyEditor"],t):"object"==typeof exports?exports.ezLinkConfig=t(require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezLinkConfig=t(e.AlloyEditor))}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=59)}({59:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(6),u=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(){function e(){n(this,e),this.name="link",this.buttons=["ezlinkedit"],this.test=u.default.SelectionTest.link}return r(e,[{key:"getArrowBoxClasses",value:function(){return"ae-arrow-box ae-arrow-box-bottom"}},{key:"setPosition",value:function(e){var t=new CKEDITOR.dom.element(ReactDOM.findDOMNode(this)),o=e.selectionData.region,n=this.getWidgetXYPoint(o.left,o.top,CKEDITOR.SELECTION_BOTTOM_TO_TOP);return t.addClass("ae-toolbar-transition"),t.setStyles({left:n[0]+"px",top:n[1]+"px"}),!0}}]),e}();t.default=l},6:function(t,o){t.exports=e}}).default});
//# sourceMappingURL=ezLinkConfig.js.map