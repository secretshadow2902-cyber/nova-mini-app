function getBottomNavHTML() {
  return `
    <nav class="bottom-nav">
      <button class="nav-btn active" onclick="switchTab('home', this)"><span class="nav-icon" style="font-size: 18px;">🏠</span>Home</button>
      <button class="nav-btn" onclick="switchTab('games', this)"><span class="nav-icon" style="font-size: 18px;">🎮</span>Games</button>
      <button class="nav-btn" onclick="switchTab('mic', this)"><span class="nav-icon" style="font-size: 18px;">🎙️</span></button>
      <button class="nav-btn" onclick="switchTab('rank', this)"><span class="nav-icon" style="font-size: 18px;">🏆</span>Rank</button>
      <button class="nav-btn" onclick="switchTab('profile', this)"><span class="nav-icon" style="font-size: 18px;">👤</span>Profile</button>
    </nav>
  `;
}
