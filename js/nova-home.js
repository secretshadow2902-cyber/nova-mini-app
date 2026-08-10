// Home screen template generator with Gamee Board Layout
function getHomeScreenHTML() {
  return `
    <!-- Gamee Board Banner Section -->
    <section class="glass-card" style="background: linear-gradient(135deg, rgba(30, 27, 75, 0.85), rgba(15, 23, 42, 0.95)), radial-gradient(circle at top right, rgba(168, 85, 247, 0.35), transparent); padding: 16px; position: relative; overflow: hidden;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div>
          <h4 style="font-size: 14px; font-weight: 800; color: #fff; letter-spacing: 0.5px;">GAMEE BOARD</h4>
          <p style="font-size: 10px; color: var(--text-secondary);">Roll, Play & Win Rewards!</p>
        </div>
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 5px 10px; border-radius: 8px; font-size: 10px; font-weight: 800; color: #000; box-shadow: 0 0 10px rgba(245,158,11,0.4);">
          ⚡ GOLD FEST 2
        </div>
      </div>

      <!-- User Card inside Home Board -->
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 12px; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
          <div id="home-board-avatar" style="width: 42px; height: 42px; background: var(--accent-purple); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: bold; color: #fff;">H</div>
          <div>
            <h5 id="home-board-name" style="font-size: 13px; font-weight: 800; color: #fff;">Hemant</h5>
            <p id="home-board-username" style="font-size: 10px; color: var(--text-secondary);">@Hemant_07</p>
          </div>
        </div>
        <div style="display: flex; gap: 6px; margin-bottom: 8px;">
          <span style="background: rgba(168, 85, 247, 0.2); border: 1px solid rgba(168, 85, 247, 0.4); padding: 3px 8px; border-radius: 6px; font-size: 9px; font-weight: 700; color: var(--accent-purple);">👑 Level 18</span>
          <span style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 3px 8px; border-radius: 6px; font-size: 9px; font-weight: 700; color: var(--gold);">🔥 12 Streak</span>
        </div>
        <div style="display: flex; justify-content: space-around; font-size: 10px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 6px;">
          <span style="color: var(--text-secondary);">Rank: <b style="color: var(--accent-blue);">#125</b></span>
          <span style="color: var(--text-secondary);">Score: <b style="color: var(--gold);">12,450</b></span>
        </div>
      </div>

      <!-- Roll Dice Action Area -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
        <span style="font-size: 11px; font-weight: 700; color: var(--accent-blue);">⚡ 25 / 25 Energy</span>
        <button onclick="alert('Dice Rolled! Moving on board...')" style="background: linear-gradient(135deg, #a855f7, #6366f1); border: none; padding: 8px 18px; border-radius: 10px; color: #fff; font-weight: 800; font-size: 12px; cursor: pointer; box-shadow: 0 0 15px rgba(168,85,247,0.5);">
          ROLL ⚡ 5
        </button>
      </div>
    </section>

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
