if(typeof HTMLElement!="undefined"&&!HTMLElement.prototype.insertAdjacentElement)HTMLElement.prototype.insertAdjacentElement=function(b,a){switch(b){case "beforeBegin":this.parentNode.insertBefore(a,this);break;case "afterBegin":this.insertBefore(a,this.firstChild);break;case "beforeEnd":this.appendChild(a);break;case "afterEnd":this.nextSibling?this.parentNode.insertBefore(a,this.nextSibling):this.parentNode.appendChild(a)}},HTMLElement.prototype.insertAdjacentHTML=function(b,a){var c=this.ownerDocument.createRange();
c.setStartBefore(this);c=c.createContextualFragment(a);this.insertAdjacentElement(b,c)},HTMLElement.prototype.insertAdjacentText=function(b,a){var c=document.createTextNode(a);this.insertAdjacentElement(b,c)};
function drawCert(b,a,c,d){backWidth=b[0]*37.795+"px";backHeight=b[1]*37.795+"px";a=a.charAt(0)!="["&&a.charAt(a.length-1)!="]"?eval("["+a+"]"):eval(a);c=eval(c);b=document.createElement("div");b.id="certPanel";b.className="cert";b.style.width=backWidth;b.style.height=backHeight;scrollPanel.insertAdjacentElement("beforeEnd",b);d&&b.insertAdjacentHTML("beforeEnd","<img id='backImg' src='"+d+"' width='"+backWidth+"' height='"+backHeight+"'/>");for(i=0;i<a.length;i++)d=document.createElement("span"),
d.name="certData",d.className="data",i<c.length?(d.style.top=c[i][0],d.style.left=c[i][1]):(d.style.top=20*i+"px",d.style.left="20px"),navigator.appName.indexOf("Explorer")>-1?d.innerText=a[i]:d.textContent=a[i],makeDraggable(d),b.insertAdjacentElement("beforeEnd",d)}var scrollPanelWidth,scrollPanelHeight;
function bodyOnBeforePrint(){scrollPanelWidth=scrollPanel.style.width;scrollPanelHeight=scrollPanel.style.height;scrollPanel.style.width=certPanel.style.width;scrollPanel.style.height=certPanel.style.height;scrollPanel.style.overflow="hidden";certPanel.style.top=0;certPanel.style.left=0;certPanel.style.borderTopWidth=0;certPanel.style.borderLeftWidth=0;certPanel.style.borderRightWidth=0;certPanel.style.borderBottomWidth=0;backImg.style.display="none"}
function bodyOnAfterPrint(){scrollPanel.style.width=scrollPanelWidth;scrollPanel.style.height=scrollPanelHeight;scrollPanel.style.overflow="scroll";certPanel.style.top=0;certPanel.style.left=0;certPanel.style.borderTopWidth=2;certPanel.style.borderLeftWidth=2;certPanel.style.borderRightWidth=2;certPanel.style.borderBottomWidth=2;backImg.style.display="block"}
function collectDataPos(){for(var b=[],a=document.getElementsByTagName("span"),c=0;c<a.length;c++)a[c].name=="certData"&&(b[b.length]=[a[c].style.top,a[c].style.left]);return b.toJSONString()}
function addDataObj(){var b=document.getElementById("dataDetail");if(b&&b.value!=""){var a=document.createElement("span");a.name="certData";a.className="data";a.style.top="20px";a.style.left="20px";navigator.appName.indexOf("Explorer")>-1?a.innerText=b.value:a.textContent=b.value;makeDraggable(a);var c=document.getElementById("certPanel");c&&c.insertAdjacentElement("beforeEnd",a);b.value=""}};