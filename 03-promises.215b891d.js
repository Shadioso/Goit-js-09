const e=document.querySelector("input[name=delay]"),t=document.querySelector("input[name=step]"),o=document.querySelector("input[name=amount]"),n=(document.querySelector("button"),document.querySelector("form")),u=(e,t)=>new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}));n.addEventListener("submit",(n=>{n.preventDefault();let l=e.valueAsNumber;const m=t.valueAsNumber,r=o.valueAsNumber;for(let e=1;e<=r;e+=1)u(e,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),l+=m}));
//# sourceMappingURL=03-promises.215b891d.js.map