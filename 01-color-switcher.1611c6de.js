const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;function r(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.setAttribute("disabled","");t.addEventListener("click",(()=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),d=setInterval(r,1e3)})),e.addEventListener("click",(()=>{e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.1611c6de.js.map