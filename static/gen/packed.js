document.addEventListener("DOMContentLoaded",function(){var scrollEl=document.querySelector("th.cell_past ~ th:not(.cell_past)");if(!scrollEl){return;}
var scrollElWrapper=scrollEl.closest(".table-container");scrollElWrapper.scroll({left:scrollEl.offsetLeft-scrollElWrapper.offsetWidth/2,behavior:'smooth'});});document.addEventListener("DOMContentLoaded",function(){var locationInput=document.getElementById("location-input");var locationsList=document.getElementById("locations-list");locationInput.onfocus=function(e){e.target.value="";}
locationInput.onchange=function(){document.getElementById("location-form").submit();locationInput.disabled=true;}
locationInput.oninput=function(e){if(!window.fetch)return;window.fetch("https://geo.api.gouv.fr/communes?nom="+e.target.value+"&boost=population&limit=5").then(function(r){return r.json()}).then(function(data){if(!data.length)return
locationsList.innerHTML=data.map(l=>{return"<option value='"+l.nom+"'></option>";})});}});const pStart={x:0,y:0};const pCurrent={x:0,y:0};const main=document.querySelector("main");function loading(){main.classList.add('is-loading');window.location.reload();}
function swipeStart(e){if(window.scrollY>0)return;if(typeof e["targetTouches"]!=="undefined"){let touch=e.targetTouches[0];pStart.x=touch.screenX;pStart.y=touch.screenY;}else{pStart.x=e.screenX;pStart.y=e.screenY;}}
function swipe(e){if(window.scrollY>0)return;if(typeof e["changedTouches"]!=="undefined"){let touch=e.changedTouches[0];pCurrent.x=touch.screenX;pCurrent.y=touch.screenY;}else{pCurrent.x=e.screenX;pCurrent.y=e.screenY;}
const changeY=pStart.y<pCurrent.y?Math.abs(pStart.y-pCurrent.y):0;if(changeY>100){loading();}}
document.addEventListener("touchstart",e=>swipeStart(e),false);document.addEventListener("touchmove",e=>swipe(e),false);
