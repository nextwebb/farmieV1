!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adminRegForm=document.querySelector(".regForm"),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){this.adminRegForm.addEventListener("submit",(function(e){}))}},{key:"sendRegFormToServer",value:function(){}}])&&r(t.prototype,n),i&&r(t,i),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createProduct=document.querySelector(".productForm"),this.newProductButton=document.querySelector(".newProduct"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.createProduct.addEventListener("submit",(function(e){})),$(".custom-file-input").on("change",(function(){var e=$(this).val().split("\\").pop();$(this).siblings(".custom-file-label").addClass("selected").html(e)})),this.newProductButton.addEventListener("click",(function(){e.showProductForm()})),this.username.addEventListener("keyup",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("keyup",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("keyup",(function(){e.isDifferent(e.password,e.passwordHandler)})),this.username.addEventListener("blur",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("blur",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("blur",(function(){e.isDifferent(e.password,e.passwordHandler)}))}},{key:"formSubmitHandler",value:function(){this.usernameImmediately(),this.usernameAfterDelay(),this.emailAfterDelay(),this.passwordImmediately(),this.passwordAfterDelay(),!this.username.isUnique||this.username.errors||!this.email.isUnique||this.email.errors||this.password.errors||this.form.submit()}},{key:"showProductForm",value:function(){this.createProduct.classList.toggle("d-none")}}])&&o(t.prototype,n),r&&o(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.productsDataTable=document.querySelector("#dataTable"),this.head=document.getElementsByTagName("HEAD")[0],this.link=document.createElement("link"),this.elemArr=[],this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){this.link.rel="stylesheet",this.link.type="text/css",this.link.href="vendor/datatables/dataTables.bootstrap4.min.css",this.appendElement(this.head,this.link)}},{key:"appendElement",value:function(e,t){e.appendChild(t),console.log(e)}},{key:"injectScript",value:function(e){var t=this;e.map((function(e){t.productsDataTable.after(e)})),console.log(document.querySelector("body"))}}])&&s(t.prototype,n),r&&s(t,r),e}();document.querySelector(".regForm")&&new i,document.querySelector(".productForm")&&new a,document.querySelector("#dataTable")&&new u}]);