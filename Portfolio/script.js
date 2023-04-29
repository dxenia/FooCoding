// Responsive navigation (Home)

const toggle = document.getElementById("toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("display-nav-menu");
}

// Fetch API (My Work)

const repoText = document.querySelector(".repo-btn-text");

generateRepo = () => {
  fetch("https://api.github.com/users/dxenia/repos")
    .then((response) => response.json())
    .then((data) => {

      console.log(data);

      data.splice(1, 1);

      let arrayIndex = Math.floor(Math.random() * data.length);
      console.log(arrayIndex);

      repoText.innerHTML = `Click on the link to see my code: <a target=”_blank” href="${data[arrayIndex].clone_url}"> ${data[arrayIndex].name}</a>`;

    });
}

getGithubInfo = () => {
  fetch("https://api.github.com/users/dxenia")
    .then((response) => response.json())
    .then((info) => {
    
      console.log(info);

      const infoPicture = document.querySelector(".picture");
      infoPicture.src = info.avatar_url;
    
      const infoName = document.querySelector(".name");
      infoName.innerText = `Name: ${info.name} (@${info.login})`;

      const infoLocation = document.querySelector(".location");
      infoLocation.innerText = `Location: ${info.location}`;

      const infoAccount = document.querySelector(".account");
      infoAccount.href = info.html_url;
    })
}

getGithubInfo();

// Get data (About)

const API_KEY = "ViH681Z8VyM8JYQS9H0sYCy3e0rYB2J6mES8Nl9Fx6mxLtWHlpzPbql3X5M";
const SPREADSHEET_ID = "16CXH6i5TR6yYUJY0W554a3RV9N3c2dFyzXUQX4umRZQ";

fetch("https://api.sheetson.com/v2/sheets/PortfolioItems", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "X-Spreadsheet-Id": SPREADSHEET_ID,
  }
}).then(r => r.json())
  .then(result => {
    
    console.log(result)
    
    const ul = document.querySelector(".about-ul");
    
    const workArray = result.results;
    console.log(workArray);

    function displayExperience(array) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        console.log(item)

        const li = document.createElement("li")
        li.innerHTML = `${item.position} 
        @${item.company} (${item.year})`;
        ul.appendChild(li)
      }
    }
    displayExperience(workArray);
  })

// Post data (About)

const experienceForm = document.querySelector(".add-experience");

experienceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const updatedPosition = experienceForm.elements["position"].value;
  const updatedCompany = experienceForm.elements["company"].value;
  const updatedYear = experienceForm.elements["year"].value;

  fetch("https://api.sheetson.com/v2/sheets/PortfolioItems", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "X-Spreadsheet-Id": SPREADSHEET_ID,
    "Content-Type": "application/json"
  },
    body: JSON.stringify({
      position: updatedPosition,
      company: updatedCompany,
      year: updatedYear
    })
  })
  .then(r => r.json())
  .then(result => console.log(result))
})

// Show / Hide editing panel (Admin)

function hideForm() {
  const admin = document.getElementById("admin");
  const hiddenForm = document.getElementById("hiddenForm");

  admin.addEventListener("change", function () {
    if (this.checked === true) {
      hiddenForm.style.display = "flex";
    } else {
      hiddenForm.style.display = "none";
    }
  });
}

// Contact form (Contact)

function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const number = document.forms["contactForm"]["number"].value;
  const message = document.forms["contactForm"]["message"].value;
  const error = "";

  if (name == "") {
    error += "Please enter your name.";
  }

  if (email == "") {
    error += "Please enter your email.";
  } else if (!validateEmail(email)) {
    error += "Please enter a valid email address."
  }

  if (number == "") {
    error += "Please enter your phone number.";
  }

  if (message == "") {
    alert(error);
    return false;
  }
}

function validateEmail(email) {
  const validTemplate = /\S+@\S+\.\S+/;
  return validTemplate.test(email);
}
