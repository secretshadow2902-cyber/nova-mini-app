/* ==========================================
   NOVA-HOME.JS - Handles Events News & Global View
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadNovaHome();
});

function loadNovaHome() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  // Nova Home UI with glassmorphism & curved design
  mainContent.innerHTML = `
    <!-- Events News & Details Section -->
    <section class="glass-card nova-section">
      <div class="section-header">
        <h3>📢 Nova Events & News</h3>
        <span class="badge">Live</span>
      </div>
      <div class="news-content">
        <p class="news-title">Welcome to Secret Empire Association!</p>
        <p class="news-desc">Stay tuned for upcoming community tournaments, score challenges, and exclusive group updates.</p>
      </div>
    </section>

    <!-- Global Leaderboard Preview Section -->
    <section class="glass-card nova-section" style="margin-top: 16px;">
      <div class="section-header">
        <h3>🏆 Global Leaderboard</h3>
        <span class="view-all-link">Top Players</span>
      </div>
      <div class="leaderboard-list">
        <div class="leaderboard-item">
          <span class="rank gold">1</span>
          <span class="player-name">Hemant</span>
          <span class="player-score">2,450 pts</span>
        </div>
        <div class="leaderboard-item">
          <span class="rank silver">2</span>
          <span class="player-name">Secret Member</span>
          <span class="player-score">2,120 pts</span>
        </div>
        <div class="leaderboard-item">
          <span class="rank bronze">3</span>
          <span class="player-name">Nova Player</span>
          <span class="player-score">1,890 pts</span>
        </div>
      </div>
    </section>
  `;
}
