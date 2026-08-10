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

function getProfileScreenHTML() {
  return `
    <section class="glass-card" style="text-align:center; padding:24px;">
      <div style="width:64px; height:64px; background:var(--accent-purple); border-radius:50%; margin:0 auto 12px auto; display:flex; align-items:center; justify-content:center; font-size:26px; font-weight:bold; box-shadow:0 0 15px rgba(168,85,247,0.5);">H</div>
      <h3 style="font-size:18px; margin-bottom:4px;">Hemant</h3>
      <p style="color:var(--accent-blue); font-size:12px; margin-bottom:16px; font-weight:600;">Elite Member</p>
      <div style="background:rgba(255,255,255,0.03); padding:14px; border-radius:14px; display:flex; justify-content:space-around; border:1px solid rgba(255,255,255,0.05);">
        <div><p style="font-size:10px; color:var(--text-secondary);">LEVEL</p><p style="font-weight:800; font-size:16px;">18</p></div>
        <div><p style="font-size:10px; color:var(--text-secondary);">POINTS</p><p style="font-weight:800; font-size:16px; color:var(--gold);">12,450</p></div>
        <div><p style="font-size:10px; color:var(--text-secondary);">RANK</p><p style="font-weight:800; font-size:16px; color:var(--accent-blue);">#2</p></div>
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
