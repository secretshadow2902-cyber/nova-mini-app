// Bottom Nav Switcher Logic
document.addEventListener("DOMContentLoaded", () => {
  // Load Nova Home by default in center/start
  const mainContainer = document.getElementById("main-content");
  if (mainContainer && typeof getHomeScreenHTML === "function") {
    mainContainer.innerHTML = getHomeScreenHTML();
  }
});

function switchTab(tabName, el) {
  if (el) {
    document.querySelectorAll(".nav-btn, .nav-center-btn").forEach(btn => btn.classList.remove("active"));
    el.classList.add("active");
  }

  const mainContainer = document.getElementById("main-content");
  if (!mainContainer) return;

  if (tabName === "home" && typeof getHomeScreenHTML === "function") {
    mainContainer.innerHTML = getHomeScreenHTML();
  } else if (tabName === "shop" && typeof getShopScreenHTML === "function") {
    mainContainer.innerHTML = getShopScreenHTML();
  } else if (tabName === "games" && typeof getGamesScreenHTML === "function") {
    mainContainer.innerHTML = getGamesScreenHTML();
  } else if (tabName === "rank" && typeof getRankScreenHTML === "function") {
    mainContainer.innerHTML = getRankScreenHTML();
  } else if (tabName === "profile" && typeof getProfileScreenHTML === "function") {
    mainContainer.innerHTML = getProfileScreenHTML();
  }
}
