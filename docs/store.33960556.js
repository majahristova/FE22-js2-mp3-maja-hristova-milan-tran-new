var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire0389;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequire0389=o);var d=o("1uU4k"),l=o("8qmuQ");!async function(){try{const e=await(0,d.fetchingProducts)();console.log(e);const t=(0,l.getCartItems)();document.getElementById("cart-count").innerText=t?.length||null,function(e){const t=document.querySelector("#plant-container");for(let n=0;n<e.length;n++){const o=document.createElement("div");o.classList.add("smalldiv");const d=document.createElement("h1"),r=document.createElement("h3"),a=document.createElement("img"),i=document.createElement("h5"),c=document.createElement("button");c.innerText="Add to cart",e[n].saldo<=0&&(c.disabled=!0),c.id=e[n].name+"button",c.addEventListener("click",(()=>{e[n].saldo<=0?(alert("Out of stock"),c.disabled=!0):(console.log("Adding product to cart:",e[n]),(0,l.addToCart)(e[n]))})),t.appendChild(o),o.appendChild(d),o.appendChild(r),o.appendChild(a),o.appendChild(i),o.appendChild(c),d.innerText=e[n].name,r.innerText=e[n].price+" kr",a.src=e[n].img,i.innerText="Left in storage = "+e[n].saldo}}(e),(0,l.setupCartItemAnimation)()}catch(e){console.log(e)}}();
//# sourceMappingURL=store.33960556.js.map
