/* ==========================================
   BOTTOM-NAV.JS - Navigation Bar Controller
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderBottomNav();
});

function renderBottomNav() {
  const bottomNav = document.getElementById("bottom-nav");
  if (!bottomNav) return;

  bottomNav.innerHTML = `
    <div class="nav-items-wrapper">
      <button class="nav-item active" onclick="switchTab('home', this)">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Home</span>
      </button>
      <button class="nav-item" onclick="switchTab('tasks', this)">
        <span class="nav-icon">📋</span>
        <span class="nav-label">Tasks</span>
      </button>
      <button class="nav-item" onclick="switchTab('ranks', this)">
        <span class="nav-icon">🏆</span>
        <span class="nav-label">Ranks</span>
      </button>
      <button class="nav-item" onclick="switchTab('profile', this)">
        <span class="nav-icon">👤</span>
        <span class="nav-label">Profile</span>
      </button>
    </div>
  `;
}

function switchTab(tabName, element) {
  // Active class toggle karein
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  element.classList.add("active");

  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  // Tab ke anusar content load karein
  if (tabName === "home") {
    loadNovaHome();
  } else if (tabName === "tasks") {
    mainContent.innerHTML = `
      <section class="glass-card nova-section">
        <div class="section-header">
          <h3>📋 Secret Tasks</h3>
          <span class="badge">Active</span>
        </div>
        <p class="news-desc">Complete daily community tasks and challenges to earn exclusive points for Secret Empire Association.</p>
      </section>
    `;
  } else if (tabName === "ranks") {
    mainContent.innerHTML = `
      <section class="glass-card nova-section">
        <div class="section-header">
          <h3>🏆 Community Rankings</h3>
          <span class="badge">Global</span>
        </div>
        <p class="news-desc">Check out the top-performing members across all categories and tournaments.</p>
      </section>
    `;
  } else if (tabName === "profile") {
    mainContent.innerHTML = `
      <section class="glass-card nova-section">
        <div class="section-header">
          <h3>👤 Member Profile</h3>
          <span class="badge">Connected</span>
        </div>
        <p class="news-desc">Your personal Telegram account details, stats, and achievements are linked securely here.</p>
      </section>
    `;
  }
}
