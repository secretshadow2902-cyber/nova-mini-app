// Home screen template generator logic
function getHomeScreenHTML() {
  return `
    <section class="glass-card daily-reward-card">
      <div class="daily-header">
        <div>
          <h3>DAILY REWARD</h3>
          <p>Login everyday and claim amazing rewards!</p>
        </div>
        <div class="streak-badge">STREAK<br>07 DAYS</div>
      </div>
      <button class="claim-btn" onclick="alert('Reward Claimed Successfully!')">Claim Now 🎁</button>
    </section>

    <section class="quick-grid">
      <div class="quick-item" onclick="alert('Bonus')"><span class="quick-icon">🎁</span><span class="quick-label">Bonus</span></div>
      <div class="quick-item" onclick="alert('Challenges')"><span class="quick-icon">🎯</span><span class="quick-label">Challenges</span></div>
      <div class="quick-item" onclick="alert('Lucky Spin')"><span class="quick-icon">🎡</span><span class="quick-label">Spin</span></div>
      <div class="quick-item" onclick="alert('Events')"><span class="quick-icon">📅</span><span class="quick-label">Events</span></div>
      <div class="quick-item" onclick="alert('Watch')"><span class="quick-icon">📺</span><span class="quick-label">Watch</span></div>
    </section>

    <section>
      <div class="section-title">
        <h4>🔥 Trending Games</h4>
        <span class="view-all" onclick="switchTab('games', document.querySelectorAll('.nav-btn')[1])">View All ›</span>
      </div>
      <div class="games-scroll">
        <div class="game-card">
          <div class="game-thumb">🎲</div>
          <div class="game-info"><h5>Ludo</h5><p>2.3K Playing</p></div>
          <button class="play-now-btn" onclick="alert('Launching Ludo...')">Play Now</button>
        </div>
        <div class="game-card">
          <div class="game-thumb">❌</div>
          <div class="game-info"><h5>Tic Tac Toe</h5><p>1.8K Playing</p></div>
          <button class="play-now-btn" onclick="alert('Launching Tic Tac Toe...')">Play Now</button>
        </div>
        <div class="game-card">
          <div class="game-thumb">🐍</div>
          <div class="game-info"><h5>Snake</h5><p>1.2K Playing</p></div>
          <button class="play-now-btn" onclick="alert('Launching Snake...')">Play Now</button>
        </div>
      </div>
    </section>

    <section class="glass-card">
      <div class="section-title">
        <h4>🏆 Global Leaderboard</h4>
        <span class="view-all" onclick="switchTab('rank', document.querySelectorAll('.nav-btn')[3])">View All ›</span>
      </div>
      <div>
        <div class="lb-row"><div class="lb-left"><span>1</span> <span>Shadow</span></div><span class="lb-score">125.6K pts</span></div>
        <div class="lb-row"><div class="lb-left"><span>2</span> <span>Hemant</span></div><span class="lb-score">98.4K pts</span></div>
        <div class="lb-row"><div class="lb-left"><span>3</span> <span>Venom</span></div><span class="lb-score">86.7K pts</span></div>
      </div>
    </section>
  `;
}
