// Telegram User Data Sync
document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram?.WebApp;
  if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    if (user.first_name) {
      const nameEl = document.getElementById('user-display-name');
      const avatarEl = document.getElementById('user-avatar-letter');
      if (nameEl) nameEl.innerText = user.first_name;
      if (avatarEl) avatarEl.innerText = user.first_name.charAt(0).toUpperCase();
    }
  }
});
