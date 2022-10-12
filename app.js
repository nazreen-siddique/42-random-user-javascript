import get from "./utils/getElement.js";
import getUser from "./utils/getuser.js";
 
const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
// console.log(img);
const displayUser = (person)=>{
    console.log(person);
img.src = person.image;
value.textContent = person.name;
title.textContent= `my name is`;
btns.forEach((btn)=>btn.classList.remove("active"))
btns[0].classList.add("active");

btns.forEach((btn)=>{
const label = btn.dataset.label;
btn.addEventListener("click",()=>{
    title.textContent=`my ${label} is`
    value.textContent=person[label];
btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
});
});
};

const showUSer = async()=>{
    const person = await getUser();
    displayUser(person);
};
window.addEventListener("DOMContentLoaded",showUSer);
btn.addEventListener("click",showUSer);