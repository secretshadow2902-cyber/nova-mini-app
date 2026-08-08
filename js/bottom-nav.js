/* ==========================================
   BOTTOM-NAV.JS - 4 Options Bottom Navigation
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderBottomNav();
});

function renderBottomNav() {
  const bottomNavContainer = document.getElementById("bottom-nav");
  if (!bottomNavContainer) return;

  bottomNavContainer.innerHTML = `
    <div class="nav-items-wrapper">
      <button class="nav-item active" onclick="switchTab('home')">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Home</span>
      </button>
      <button class="nav-item" onclick="switchTab('tasks')">
        <span class="nav-icon">📋</span>
        <span class="nav-label">Tasks</span>
      </button>
      <button class="nav-item" onclick="switchTab('leaderboard')">
        <span class="nav-icon">🏆</span>
        <span class="nav-label">Ranks</span>
      </button>
      <button class="nav-item" onclick="switchTab('profile')">
        <span class="nav-icon">👤</span>
        <span class="nav-label">Profile</span>
      </button>
    </div>
  `;
}

function switchTab(tabName) {
  // Sabhi nav items se active class hatana
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => item.classList.remove("active"));

  // Clicked item ko active banana
  event.currentTarget.classList.add("active");

  const mainContent = document.getElementById("main-content");

  // Tab ke mutabiq content change karna
  if (tabName === 'home') {
    loadNovaHome();
  } else if (tabName === 'tasks') {
    mainContent.innerHTML = `
      <section class="glass-card nova-section">
        <div class="section-header">
          <h3>📋 Secret Empire Tasks</h3>
          <span class="badge">Earn</span>
        </div>
        <p class="news-desc">Complete community tasks and earn points for your team profile.</p>
      </section>
    `;
  } else if (tabName === 'leaderboard') {
    mainContent.innerHTML = `
      <section class="glass-card nova-section">
        <div class="section-header">
          <h3>🏆 Full Global Leaderboard</h3>
        </div>
        <p class="news-desc">Leaderboard rankings will update in real-time soon.</p>
      </section>
    `;
  } else if (tabName === 'profile') {
    mainContent.innerHTML = `
      <section class="glass-card nova-section">
        <div class="section-header">
          <h3>👤 User Settings</h3>
        </div>
        <p class="news-desc">Telegram profile info and account connections are active here.</p>
      </section>
    `;
  }
}
