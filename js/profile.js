/* ==========================================
   PROFILE.JS - Top Profile Card Component
   ========================================== */

document.addEventListener("telegramUserReady", (e) => {
  renderProfile(e.detail);
});

function renderProfile(user) {
  const profileContainer = document.getElementById("profile-container");
  if (!profileContainer) return;

  const displayName = user.first_name || "Nova User";
  const initials = displayName.charAt(0).toUpperCase();
  const avatarHtml = user.photo_url 
    ? `<img src="${user.photo_url}" alt="Avatar">` 
    : `<span>${initials}</span>`;

  profileContainer.innerHTML = `
    <div class="profile-card-mini">
      <div class="profile-avatar">
        ${avatarHtml}
      </div>
      <div class="profile-info">
        <h4>${displayName}</h4>
        <span>Connected</span>
      </div>
    </div>
  `;
}

function toggleMenu() {
  alert("Secret Empire Association Menu options coming soon!");
}
