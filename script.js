let body = document.querySelector("body");

// Main Container
let mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
body.append(mainContainer);

// container
let container = document.createElement("div");
container.classList.add("container");
mainContainer.append(container);

// ---------------------navbar--------------
let nav = document.createElement("nav")
container.append(nav)

let h1 = document.createElement("h1")
nav.append(h1)
h1.innerText = "Start Bootstrap"

// ul elements
let ul = document.createElement("ul")
let homeLi = document.createElement("li")
homeLi.innerText = "Home"

let resumeLi = document.createElement("li")
resumeLi.innerText = "Resume"

let projectsLi = document.createElement("li")
projectsLi.innerText = "Projects"

let contactLi = document.createElement("li")
contactLi.innerText = "contact"

ul.append(homeLi, resumeLi, projectsLi, contactLi)
nav.append(ul)

//---------------- banner--------------------
let bannerSection = document.createElement("section")
bannerSection.classList.add("banner")
container.append(bannerSection)

// left-right div elements
let leftDiv = document.createElement("div")
leftDiv.classList.add("left-div")
let rightDiv = document.createElement("div")
rightDiv.classList.add("right-div")
bannerSection.append(leftDiv, rightDiv)

// Left Div
// ul
let ulBanner = document.createElement("ul")
let li1 = document.createElement("li")
li1.id = "li1"
li1.innerText = "DESIGN"
let li2 = document.createElement("li")
li2.innerText = "DEVELOPMENT"
let li3 = document.createElement("li")
li3.innerText = "MARKETING"
ulBanner.append(li1, li2, li3)
leftDiv.append(ulBanner)

// p, h1
let p = document.createElement("p")
p.innerText = "I can help your business to"
let h1Banner = document.createElement("h1")
h1Banner.innerText = "Get online and grow fast"
leftDiv.append(p, h1Banner)

// buttons
let btnDiv = document.createElement("div")
btnDiv.classList.add("btnDiv")
let btnResume = document.createElement("button")
btnResume.innerText = "Resume"
btnResume.id = "resume"
let btnProjects = document.createElement("button")
btnProjects.innerText = "Projects"
btnProjects.id = "projects"
btnDiv.append(btnResume, btnProjects)
leftDiv.append(btnDiv)

// Right Div
let img = document.createElement("img")
img.src = './profile.png'
rightDiv.append(img)

//---------------- section-About--------------------
let aboutSection = document.createElement("section");
aboutSection.classList.add("about-section");
mainContainer.append(aboutSection);

let h2 = document.createElement("h2");
h2.innerText = "About Me";
let p1 = document.createElement("p");
p1.innerText = "My name is Start Bootstrap and I help brands grow.";
p1.id = "p1";
let p2 = document.createElement("p");
p2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?";
p2.id = "p2";
aboutSection.append(h2, p1, p2);

let iconDiv = document.createElement("div");
iconDiv.classList.add("icon-div");

iconTwitter = document.createElement("i");
iconTwitter.classList.add("bi", "bi-twitter");

iconLinkedin = document.createElement("i");
iconLinkedin.classList.add("bi", "bi-linkedin");

iconGithub = document.createElement("i");
iconGithub.classList.add("bi", "bi-github");
iconDiv.append(iconTwitter, iconLinkedin, iconGithub);
aboutSection.append(iconDiv);

//---------------- Footer--------------------
let footer = document.createElement("footer");
body.append(footer);

let pFooter = document.createElement("p");
pFooter.innerText = "Copyright © Your Website 2023";

let ulFooter = document.createElement("ul");

let liPrivacy = document.createElement("li");
let aPrivacy = document.createElement("a");
aPrivacy.innerText = "Privacy";
aPrivacy.href = "#";
liPrivacy.id = "liPrivacy";
liPrivacy.appendChild(aPrivacy);

let liTerms = document.createElement("li");
let aTerms = document.createElement("a");
aTerms.innerText = "Terms";
aTerms.href = "#";
liTerms.appendChild(aTerms);

let liContact = document.createElement("li");
let aContact = document.createElement("a");
aContact.innerText = "Contact";
aContact.href = "#";
liContact.appendChild(aContact);

ulFooter.append(liPrivacy, liTerms, liContact);
footer.append(pFooter, ulFooter);
