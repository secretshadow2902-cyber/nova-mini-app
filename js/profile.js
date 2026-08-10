function getProfileScreenHTML() {
  return `
    <!-- Gamee Board Style Profile Card -->
    <section class="glass-card" style="background: linear-gradient(135deg, rgba(30, 27, 75, 0.85), rgba(15, 23, 42, 0.95)), radial-gradient(circle at top right, rgba(168, 85, 247, 0.35), transparent); position: relative; overflow: hidden;">
      <div style="font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 12px; letter-spacing: 0.5px;">PLAYER PROFILE</div>
      
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
        <div id="profile-avatar-box" style="width: 54px; height: 54px; background: var(--accent-purple); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; color: #fff; box-shadow: 0 0 15px rgba(168,85,247,0.5);">H</div>
        <div>
          <h3 id="profile-display-name" style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 2px;">Hemant</h3>
          <p id="profile-username" style="font-size: 11px; color: var(--text-secondary);">@Hemant_07</p>
        </div>
      </div>

      <div style="display: flex; gap: 8px; margin-bottom: 14px;">
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); padding: 6px 12px; border-radius: 12px; font-size: 11px; font-weight: 700; color: var(--accent-blue);">
          👑 Level 18
        </div>
        <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 6px 12px; border-radius: 12px; font-size: 11px; font-weight: 700; color: var(--gold);">
          🔥 12 Day Streak
        </div>
      </div>

      <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 14px; display: flex; justify-content: space-around; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
        <div><p style="font-size:9px; color:var(--text-secondary); letter-spacing:0.5px;">RANK</p><p style="font-weight:800; font-size:14px; color:var(--accent-blue); margin-top:2px;">#125</p></div>
        <div style="width:1px; background:rgba(255,255,255,0.1);"></div>
        <div><p style="font-size:9px; color:var(--text-secondary); letter-spacing:0.5px;">SCORE</p><p style="font-weight:800; font-size:14px; color:var(--gold); margin-top:2px;">12,450</p></div>
      </div>
    </section>

    <!-- Additional Profile Settings / Actions -->
    <section class="glass-card">
      <div class="section-title">
        <h4>⚙️ Account Settings</h4>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
        <button class="play-now-btn" style="padding: 10px; font-size: 12px;" onclick="alert('Telegram Cloud Sync Active')">🔗 Telegram ID Connected</button>
        <button class="play-now-btn" style="padding: 10px; font-size: 12px; background: rgba(168, 85, 247, 0.15); color: var(--accent-purple);" onclick="alert('Notification settings updated')">🔔 Notifications Enabled</button>
      </div>
    </section>
  `;
}

function getShopScreenHTML() {
  return `
    <section class="glass-card">
      <div class="section-title">
        <h4>🛒 Nova Shop</h4>
      </div>
      <p style="color:var(--text-secondary); font-size:13px; margin-bottom:14px;">Upgrade your power-ups, energy packs, and exclusive items.</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div class="game-card"><div class="game-thumb">⚡</div><div class="game-info"><h5>Energy Pack</h5><p>+500 Energy</p></div><button class="play-now-btn" onclick="alert('Purchased Energy Pack!')">Buy 100 🪙</button></div>
        <div class="game-card"><div class="game-thumb">💎</div><div class="game-info"><h5>Diamond Box</h5><p>Mystery Loot</p></div><button class="play-now-btn" onclick="alert('Purchased Diamond Box!')">Buy 50 💎</button></div>
      </div>
    </section>
  `;
}

function getGamesScreenHTML() {
  return `
    <section class="glass-card">
      <div class="section-title">
        <h4>🎮 Game Hub</h4>
      </div>
      <p style="color:var(--text-secondary); font-size:13px; margin-bottom:14px;">Choose from our collection of multiplayer and tournament games.</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div class="game-card"><div class="game-thumb">🎲</div><div class="game-info"><h5>Ludo</h5><p>Board Game</p></div><button class="play-now-btn" onclick="alert('Playing Ludo')">Play</button></div>
        <div class="game-card"><div class="game-thumb">❌</div><div class="game-info"><h5>Tic Tac Toe</h5><p>Strategy</p></div><button class="play-now-btn" onclick="alert('Playing Tic Tac Toe')">Play</button></div>
        <div class="game-card"><div class="game-thumb">🐍</div><div class="game-info"><h5>Snake</h5><p>Classic</p></div><button class="play-now-btn" onclick="alert('Playing Snake')">Play</button></div>
        <div class="game-card"><div class="game-thumb">🎯</div><div class="game-info"><h5>Archery</h5><p>Skill</p></div><button class="play-now-btn" onclick="alert('Playing Archery')">Play</button></div>
      </div>
    </section>
  `;
}

function getRankScreenHTML() {
  return `
    <section class="glass-card">
      <div class="section-title">
        <h4>🏆 Global Leaderboard</h4>
      </div>
      <div style="margin-top:10px;">
        <div class="lb-row"><div class="lb-left"><span>1</span> <span>Shadow</span></div><span class="lb-score">125.6K pts</span></div>
        <div class="lb-row"><div class="lb-left"><span>2</span> <span>Hemant</span></div><span class="lb-score">98.4K pts</span></div>
        <div class="lb-row"><div class="lb-left"><span>3</span> <span>Venom</span></div><span class="lb-score">86.7K pts</span></div>
        <div class="lb-row"><div class="lb-left"><span>4</span> <span>Titan</span></div><span class="lb-score">79.3K pts</span></div>
        <div class="lb-row"><div class="lb-left"><span>5</span> <span>Matrix</span></div><span class="lb-score">69.8K pts</span></div>
      </div>
    </section>
  `;
}
