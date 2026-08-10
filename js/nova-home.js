/* ==========================================
   NOVA-HOME.JS - Home View & Leaderboard Preview
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Agar default home view load karna ho
  loadNovaHome();
});

function loadNovaHome() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  mainContent.innerHTML = `
    <!-- Events & News Section -->
    <section class="glass-card nova-section">
      <div class="section-header">
        <h3>📢 Nova Events & News</h3>
        <span class="badge">Live</span>
      </div>
      <p class="news-desc">Welcome to Secret Empire Association! Stay tuned for upcoming community tournaments, score challenges, and exclusive group updates.</p>
    </section>

    <!-- Leaderboard Preview Section -->
    <section class="glass-card nova-section">
      <div class="section-header">
        <h3>🏆 Global Leaderboard</h3>
        <span class="badge">Top Players</span>
      </div>
      <div class="leaderboard-list">
        <div class="leaderboard-item">
          <div class="rank-info">
            <span>1</span>
            <span>Hemant</span>
          </div>
          <span class="rank-pts">2,450 pts</span>
        </div>
        <div class="leaderboard-item">
          <div class="rank-info">
            <span>2</span>
            <span>Secret Member</span>
          </div>
          <span class="rank-pts">2,120 pts</span>
        </div>
        <div class="leaderboard-item">
          <div class="rank-info">
            <span>3</span>
            <span>Nova Player</span>
          </div>
          <span class="rank-pts">1,890 pts</span>
        </div>
      </div>
    </section>
  `;
}
