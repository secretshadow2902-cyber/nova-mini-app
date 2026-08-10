// Clean Home screen template generator logic
function getHomeScreenHTML() {
  return `
    <!-- Daily Reward Card -->
    <section class="glass-card daily-reward-card">
      <div class="daily-header">
        <div>
          <h3>DAILY REWARD</h3>
          <p>Login everyday and claim amazing rewards!</p>
        </div>
        <div class="streak-badge">STREAK<br>07 DAYS</div>
      </div>
      <button class="claim-btn" onclick="alert('Reward Claimed Successfully! +500 Coins added.')">Claim Now 🎁</button>
    </section>

    <!-- Interactive Tap / Mining Section -->
    <section class="glass-card" style="text-align: center; background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(15, 23, 42, 0.9));">
      <h4 style="font-size: 15px; margin-bottom: 6px;">⚡ Energy Tap Core</h4>
      <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 14px;">Tap the core to generate points!</p>
      <div onclick="tapEnergyCore(this)" style="width: 90px; height: 90px; background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue)); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 36px; cursor: pointer; box-shadow: 0 0 25px rgba(168, 85, 247, 0.6); transition: transform 0.1s;">
        💎
      </div>
      <p id="tap-counter" style="margin-top: 12px; font-size: 13px; font-weight: 700; color: var(--gold);">Taps: 0</p>
    </section>

    <!-- Quick Navigation Grid -->
    <section class="quick-grid">
      <div class="quick-item" onclick="alert('Bonus opened')"><span class="quick-icon">🎁</span><span class="quick-label">Bonus</span></div>
      <div class="quick-item" onclick="alert('Challenges opened')"><span class="quick-icon">🎯</span><span class="quick-label">Challenges</span></div>
      <div class="quick-item" onclick="alert('Lucky Spin opened')"><span class="quick-icon">🎡</span><span class="quick-label">Spin</span></div>
      <div class="quick-item" onclick="alert('Events opened')"><span class="quick-icon">📅</span><span class="quick-label">Events</span></div>
      <div class="quick-item" onclick="alert('Watch opened')"><span class="quick-icon">📺</span><span class="quick-label">Watch</span></div>
    </section>

    <!-- Trending Games Section -->
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
  `;
}

// Tap Interactive Logic Counter
let tapCount = 0;
function tapEnergyCore(element) {
  tapCount++;
  const counterEl = document.getElementById("tap-counter");
  if (counterEl) {
    counterEl.innerText = `Taps: ${tapCount}`;
  }
  element.style.transform = "scale(0.92)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 100);
}
