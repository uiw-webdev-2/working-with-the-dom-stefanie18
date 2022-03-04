/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Friends from "./Friends.js";

const Friends = new Friends(
  "Friends",
  "Orange",
  "Purple",
  image.png

);

const content = `
     <figure class="backpack__image">
       <img src=${Friends.image} alt="" />
     </figure>
     <h1 class="backpack__name">${Friends.name}}</h1>
     <ul class="backpack__features">
     <li> pictureFrame: ${Friends.pictureFrame} <li>
     <li> sofa: ${Friends.sofa} <li>
     </ul>
   </article>
 `;

const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('backpack');
newArticle.setAttribute('id','everyday');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);
