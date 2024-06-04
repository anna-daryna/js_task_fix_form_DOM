document.querySelectorAll("form input").forEach(function(e){var a=document.createElement("label");a.className="field-label",a.htmlFor=e.id,a.textContent=e.name.replace(/([a-z0-9])([A-Z])/g,"$1 $2"),e.placeholder=(e.name.charAt(0).toUpperCase()+e.name.slice(1)).replace(/([a-z0-9])([A-Z])/g,"$1 $2"),e.parentNode.insertBefore(a,e)});
//# sourceMappingURL=index.c3d2085f.js.map
