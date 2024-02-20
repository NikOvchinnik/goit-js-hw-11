import{i as a,S as c}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function m(r){const i="https://pixabay.com",t="/api/?",l=new URLSearchParams({key:"42408042-b97fa2d9d3888df0f8d594195",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=i+t+l;return fetch(e).then(s=>s.json())}function f(r){const i=r.hits.map(t=>`<li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img
          src=${t.webformatURL}
          alt=${t.tags}
          width="360"
          height="200"
        />
        </a>
        <ul class="img-list-info">
          <li class="img-item">
            <h2 class="img-title">Likes</h2>
            <p class="img-text">${t.likes}</p>
          </li>
          <li class="img-item">
            <h2 class="img-title">Views</h2>
            <p class="img-text">${t.views}</p>
          </li>
          <li class="img-item">
            <h2 class="img-title">Comments</h2>
            <p class="img-text">${t.comments}</p>
          </li>
          <li class="img-item">
            <h2 class="img-title">Downloads</h2>
            <p class="img-text">${t.downloads}</p>
          </li>
        </ul>
      </li>`).join("");o.listElem.innerHTML=i,g.refresh()}const o={formElem:document.querySelector(".form-search"),listElem:document.querySelector(".gallery-list"),loaderElem:document.querySelector(".loader-container")};o.formElem.addEventListener("submit",u);function u(r){r.preventDefault();const i=r.target.elements.image.value.trim();if(!i)return a.show({title:"Error",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",message:"Please, enter name of image",messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight"});p(),m(i).then(t=>{if(t.hits.length===0)return o.listElem.innerHTML="",a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight"});f(t)}).catch(t=>{console.log("Error")}).finally(()=>{h(),o.formElem.reset()})}const d={captionDelay:250,captionsData:"alt"},g=new c(".gallery-list a",d);function h(){o.loaderElem.classList.add("is-hidden")}function p(){o.loaderElem.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
