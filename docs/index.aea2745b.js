function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire0389;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire0389=n),n.register("1uU4k",(function(t,o){e(t.exports,"baseUrl",(()=>r)),e(t.exports,"fetchingProducts",(()=>a));const r="https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/",n=r+"productinfo.json";async function a(){console.log("fetchingProducts");const e=await fetch(n),t=await e.json();return localStorage.setItem("dataOfProducts",JSON.stringify(t)),localStorage.getItem("products")||localStorage.setItem("products","[]"),t}}));
//# sourceMappingURL=index.aea2745b.js.map
