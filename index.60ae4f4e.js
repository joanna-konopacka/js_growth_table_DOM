document.addEventListener("DOMContentLoaded",function(){var e=function(){l.disabled=n.rows.length>=c,t.disabled=n.rows.length<=d,o.disabled=n.rows[0].cells.length>=s,r.disabled=n.rows[0].cells.length<=i},n=document.querySelector(".field"),l=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),c=10,d=2,s=10,i=2;e(),l.addEventListener("click",function(){if(n.rows.length<c)for(var l=n.insertRow(),t=0;t<n.rows[0].cells.length;t++)l.insertCell();e()}),t.addEventListener("click",function(){n.rows.length>d&&n.deleteRow(-1),e()}),o.addEventListener("click",function(){if(n.rows[0].cells.length<s)for(var l=0;l<n.rows.length;l++)n.rows[l].insertCell();e()}),r.addEventListener("click",function(){if(n.rows[0].cells.length>i)for(var l=0;l<n.rows.length;l++)n.rows[l].deleteCell(-1);e()})});//# sourceMappingURL=index.60ae4f4e.js.map

//# sourceMappingURL=index.60ae4f4e.js.map