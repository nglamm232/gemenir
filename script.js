// =========================
// GEMVENIR WEBSITE
// =========================

// Loading

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.display="none";

},2000);

});

// Navbar đổi màu

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

// Hiệu ứng hiện dần khi cuộn

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// Active menu

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// Card hover animation

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Hiệu ứng phóng ảnh khi hiện

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="scale(.95)";

img.style.transition="1s";

imageObserver.observe(img);

});

// Video tự phát khi nhìn thấy

const video=document.querySelector("video");

if(video){

const videoObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

video.play().catch(()=>{});

}else{

video.pause();

}

});

},{
threshold:0.5
});

videoObserver.observe(video);

}

// Hiệu ứng số năm timeline

const years=document.querySelectorAll(".year");

years.forEach(year=>{

year.addEventListener("mouseenter",()=>{

year.style.transform="scale(1.15)";

year.style.color="#b89155";

});

year.addEventListener("mouseleave",()=>{

year.style.transform="scale(1)";

year.style.color="#315b44";

});

});

// Footer năm hiện tại

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} GEMVENIR. All Rights Reserved.`;

}