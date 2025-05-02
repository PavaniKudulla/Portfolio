const sections = Array.from(document.querySelectorAll('#home, #about, #project, #contact'));
console.log(sections); 
const links = document.querySelectorAll('.header .info a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;  
        if (top >= offset && top < height + offset) {
            links.forEach(li => {
                li.classList.remove('active');
                if (li.getAttribute('href').includes(sec.id)) {
                    li.classList.add('active');
                }
            });
        }
    });
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);
};
const hamburger = document.querySelector('.hamburger');
const xicon = document.querySelector('.x-icon');
const info = document.querySelector('.info');
hamburger.addEventListener("click", () => {
    hamburger.style.display = 'none';
    xicon.style.display = 'block';
    info.classList.toggle('active');
});
xicon.addEventListener("click", () => {
    xicon.style.display = 'none';
    hamburger.style.display = 'block';
    info.classList.toggle('active');
});
var typed=new Typed(".text",{
    strings:["Student","Learner","Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress-bar span").forEach((bar) => {
        bar.style.animation = "fillBar 2s ease-in-out forwards";
    });

    // Animate Circular Progress Bars
    setTimeout(() => {
        document.querySelector(".circle-adaptability").style.strokeDashoffset = "0";
        document.querySelector(".circle-teamwork").style.strokeDashoffset = "0";
        document.querySelector(".circle-time").style.strokeDashoffset = "0";
    }, 500);
});
document.addEventListener("DOMContentLoaded", () => {
    const aboutDiv = document.querySelector(".about-div");
    const fullText = `I am a 3rd-year Computer Science student at Gayatri Vidya Parishad College of Engineering, driven by a passion for technology and innovation. With a strong foundation in Data Structures and Algorithms, honed through solving 300+ problems on platforms like LeetCode and GeeksforGeeks, I bring analytical problem-solving skills to the table. As a frontend web developer, I am proficient in building dynamic and responsive user interfaces, complemented by a solid grasp of core Computer Science concepts, including DBMS, OOP, Operating Systems, and Computer Networks. My eagerness to continuously learn and adapt ensures that I am well-prepared to contribute effectively to challenging technical roles.`;
    const shortText = fullText.slice(0, 150) + "..."; 
    const descriptionPara = aboutDiv.querySelector("p:nth-of-type(3)");
    const readMoreBtn = aboutDiv.querySelector(".btn");
    descriptionPara.textContent = shortText;
    readMoreBtn.addEventListener("click", () => {
        if (readMoreBtn.textContent === "Read More") {
            descriptionPara.textContent = fullText;
            readMoreBtn.textContent = "Read Less";
        } else {
            descriptionPara.textContent = shortText;
            readMoreBtn.textContent = "Read More";
        }
    });
});
const contact=document.getElementById("contactme");
contact.addEventListener("click",()=>{
    alert('Thank you');
})
