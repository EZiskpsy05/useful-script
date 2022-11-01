import { getFlag, LANG, setLang, t, toggleLang } from "./lang.js";
import { DEFAULT_TABID, isTitle, tabs } from "./tabs.js";
import {
  checkBlackWhiteList,
  localStorage,
  recentScripts,
  runScriptInCurrentTab,
} from "./utils.js";
import config from "../config.js";

const tabDiv = document.querySelector("div.tab");
const contentDiv = document.querySelector("div.content");
const flagImg = document.querySelector("img#flag");
const versionSpan = document.querySelector("#version");
const updateBtn = document.querySelector("#update-btn");

async function initLanguage() {
  setLang(await localStorage.get("lang", LANG.vi));
  flagImg.setAttribute("src", getFlag());

  flagImg.onclick = async () => {
    await toggleLang();
    flagImg.setAttribute("src", getFlag());

    // reset UI
    createTabs();
    checkForUpdate();
  };
}

async function runScript(script) {
  let willRun = await checkBlackWhiteList(script);
  if (willRun) {
    recentScripts.add(script);
    runScriptInCurrentTab(script.func);
  }
}

async function createTabs() {
  // clear UI
  tabDiv.innerHTML = "";
  contentDiv.innerHTML = "";

  // make new UI
  for (let tab of tabs) {
    // create tab button
    const tabBtn = document.createElement("button");
    tabBtn.className = "tablinks";
    tabBtn.textContent = t(tab.name);
    tabBtn.type = "button";
    tabBtn.setAttribute("content-id", tab.id);
    tabBtn.onclick = () => openTab(tab.id);
    if (tab.style && typeof tab.style === "object")
      Object.entries(tab.style).forEach(([key, value]) => {
        tabBtn.style[key] = value;
      });

    // create tab content
    const contentContainer = document.createElement("div");
    contentContainer.id = tab.id;
    contentContainer.className = "tabcontent";

    // create button for scripts in tabcontent
    if (!tab.scripts?.length) {
      const emptyText = document.createElement("h3");
      emptyText.innerText = t({
        en: "Nothing here yet...",
        vi: "Chưa có gì ở đây hết...",
      });
      contentContainer.appendChild(emptyText);
    } else {
      for (let script of tab.scripts) {
        // Section title
        if (isTitle(script)) {
          const title = document.createElement("h3");
          title.textContent = t(script.name);
          title.classList.add("section-title");

          contentContainer.appendChild(title);
        }

        // Function button
        else {
          const button = document.createElement("button");
          button.className = "tooltip";

          if (script.func && typeof script.func === "function") {
            button.onclick = () => runScript(script);
          } else if (script.link && typeof script.link === "string") {
            button.onclick = () => window.open(script.link);
          } else {
            button.onclick = () => alert("empty script");
          }

          script.badges?.map((badge) => {
            const { text, color, backgroundColor } = badge;
            const badgeSpan = document.createElement("span");
            badgeSpan.classList.add("badge");
            badgeSpan.innerText = t(text);
            badgeSpan.style.color = color;
            badgeSpan.style.backgroundColor = backgroundColor;

            button.appendChild(badgeSpan);
          });

          if (script.icon && typeof script.icon === "string") {
            const icon = document.createElement("img");
            icon.classList.add("icon");
            icon.src = script.icon;
            button.appendChild(icon);
          }

          const title = document.createElement("span");
          title.innerText = t(script.name);
          button.appendChild(title);

          const tooltip = document.createElement("span");
          tooltip.className = "tooltiptext";
          tooltip.innerText = t(script.description);
          button.appendChild(tooltip);

          contentContainer.appendChild(button);
          contentContainer.appendChild(document.createElement("br"));
        }
      }
    }

    // inject to DOM
    tabDiv.appendChild(tabBtn);
    contentDiv.appendChild(contentContainer);
  }

  // open tab
  let activeTab = await localStorage.get("activeTab", DEFAULT_TABID);
  activeTab && openTab(activeTab);
}

function openTab(tabId) {
  localStorage.set("activeTab", tabId);

  Array.from(document.querySelectorAll(".tabcontent")).forEach((_) => {
    _.style.display = "none";
  });
  Array.from(document.querySelectorAll(".tablinks")).forEach((_) => {
    _.classList.remove("active");
  });
  document.querySelector(".tabcontent#" + tabId).style.display = "block";
  document
    .querySelector('.tablinks[content-id="' + tabId + '"]')
    .classList.add("active");
}

async function checkForUpdate() {
  try {
    const currentVer = (await chrome.runtime.getManifest()).version;
    versionSpan.innerHTML = "v" + currentVer;

    const { version_check, source_code } = config;
    const lastestVer = (await (await fetch(version_check)).json()).version;
    if (lastestVer > currentVer) {
      updateBtn.style.display = "inline-block";
      updateBtn.innerHTML = t({
        vi: "cập nhật v" + lastestVer,
        en: "update v" + lastestVer,
      });
      updateBtn.onclick = () => {
        window.open(source_code);
      };
    } else {
      updateBtn.style.display = "none";
      versionSpan.innerHTML += t({ vi: " (mới nhất)", en: " (lastest)" });
    }
  } catch (e) {
    console.warn("Check for update failed", e);
  }
}

(async function () {
  await initLanguage();
  await createTabs();
  await checkForUpdate();
})();