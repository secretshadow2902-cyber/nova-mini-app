/* ==========================================
   PROFILE.JS - Top-Left Telegram Profile Render
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const profileContainer = document.getElementById("profile-container");

  if (!profileContainer) return;

  // Telegram auth se user details get karna
  const userData = TelegramAuth.init();

  // Profile HTML structure with glassmorphism & squircle style
  profileContainer.innerHTML = `
    <div class="profile-card-inner">
      <div class="profile-avatar-wrapper">
        ${
          userData.photoUrl 
            ? `<img src="${userData.photoUrl}" alt="Avatar" class="profile-avatar">` 
            : `<div class="profile-avatar-placeholder">${userData.firstName.charAt(0)}</div>`
        }
        <span class="online-dot"></span>
      </div>
      <div class="profile-info">
        <h4 class="profile-name">${userData.firstName}</h4>
        <span class="profile-status">Connected</span>
      </div>
    </div>
  `;
});
