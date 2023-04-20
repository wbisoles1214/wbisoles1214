const menuIcon = document.querySelector(".fas.fa-bars");
const closeIcon = document.querySelector(".fas.fa-times");
const sideMenu = document.getElementById("sidemenu");

menuIcon.addEventListener("click", () => {
  sideMenu.style.right = "0";
});

closeIcon.addEventListener("click", () => {
  sideMenu.style.right = "-200px";
});

// ABOUT SECTION

const tabLinks = document.querySelectorAll(".tab-links");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", () => {
    const tab = tabLink.dataset.tab;

    const tabContents = document.querySelectorAll(".tab-contents");

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");

      if (tabContent.id === `${tab}`) {
        tabContent.classList.add("active-tab");
      }
    });

    tabLinks.forEach((link) => {
      link.classList.remove("active-link");
    });

    tabLink.classList.add("active-link");
  });

  tabLink.removeAttribute("onclick");
});

// SERVICE SECTION

const servicesList = document.querySelector(".services-list");

const frontEndIcon = document.createElement("i");
frontEndIcon.className = "fas fa-code";

const backEndIcon = document.createElement("i");
backEndIcon.className = "fas fa-crop-alt";

const webDesignIcon = document.createElement("i");
webDesignIcon.className = "fas fa-desktop";

const serviceDivs = servicesList.querySelectorAll("div");

serviceDivs[0].insertAdjacentElement("afterbegin", frontEndIcon);
serviceDivs[1].insertAdjacentElement("afterbegin", backEndIcon);
serviceDivs[2].insertAdjacentElement("afterbegin", webDesignIcon);

// PORTFOLIO SECTION

const workList = document.querySelector(".work-list");

const dreamIcon = document.createElement("i");
dreamIcon.className = "fas fa-external-link-alt";
const dreamLink = document.createElement("a");
dreamLink.href = "https://wbisoles1214.github.io/wbisoles1214RPS.github.io";
dreamLink.appendChild(dreamIcon);

const workIcon = document.createElement("i");
workIcon.className = "fas fa-external-link-alt";
const workLink = document.createElement("a");
workLink.href = "https://wbisoles1214.github.io/wbisoles1214Bazaar.github.io/";
workLink.appendChild(workIcon);

const restIcon = document.createElement("i");
restIcon.className = "fas fa-external-link-alt";
const restLink = document.createElement("a");
restLink.href = "#";
restLink.appendChild(restIcon);

const workDivs = workList.querySelectorAll(".work");

workDivs[0].querySelector(".layer > a").appendChild(dreamLink);
workDivs[1].querySelector(".layer > a").appendChild(workLink);
workDivs[2].querySelector(".layer > a").appendChild(restLink);

// text area
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwCFw4aLxm3l7igCBfUNOPGn78LxbhwFghEK2UiB4eTpFwNkOQm92nYE-lpdv5y3C2p/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Using switch case for event handling
document.addEventListener("click", function (event) {
  switch (event.target.id) {
    case "tab1":
      opentab("tabcontent1");
      break;
    case "tab2":
      opentab("tabcontent2");
      break;
    case "tab3":
      opentab("tabcontent3");
      break;
    case "open-menu":
      openmenu();
      break;
    case "close-menu":
      closemenu();
      break;
    default:
      // Do nothing
      break;
  }
});
