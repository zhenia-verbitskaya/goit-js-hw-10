import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");function m(t,e){const r={delay:t,radioChecked:e};return new Promise((o,s)=>{setTimeout(()=>{e==="fulfilled"?o(r):s(r)},t)})}n.addEventListener("submit",l);function l(t){t.preventDefault();const e=t.target,r=Number(e.elements.delay.value),o=e.elements.state.value;m(r,o).then(({delay:s})=>{i.success({title:"OK",message:`✅ Fulfilled promise in ${s} ms`})}).catch(({delay:s})=>{i.error({title:"Error",message:`❌ Rejected promise in ${s} ms`})}),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map
