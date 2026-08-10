/* ==========================================
   TELEGRAM-AUTH.JS - Telegram WebApp Integration
   ========================================== */

let telegramUser = null;

document.addEventListener("DOMContentLoaded", () => {
  initTelegramAuth();
});

function initTelegramAuth() {
  const tg = window.Telegram?.WebApp;
  
  if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    telegramUser = tg.initDataUnsafe.user;
    tg.expand(); // Mini app ko full screen expand karein
  } else {
    // Fallback data agar browser ya test mode mein khula ho
    telegramUser = {
      id: 12345678,
      first_name: "Hemant",
      username: "secretshadow"
    };
  }

  // Event trigger karein taaki profile aur home components data load kar sakein
  const event = new CustomEvent("telegramUserReady", { detail: telegramUser });
  document.dispatchEvent(event);
}
