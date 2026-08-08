/* ==========================================
   TELEGRAM-AUTH.JS - Handles Telegram WebApp Data
   ========================================== */

const TelegramAuth = {
  init() {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand(); // App ko full screen expand karne ke liye
      
      // User data fetch karna agar available ho
      const user = tg.initDataUnsafe?.user;
      return {
        id: user ? user.id : 'guest_123',
        firstName: user ? user.firstName : 'Nova User',
        lastName: user ? user.lastName : '',
        username: user ? user.username : 'novaguest',
        photoUrl: user ? user.photoUrl : null,
        isTelegram: true
      };
    } else {
      // Agar browser mein test kar rahe hain (Telegram ke bahar)
      return {
        id: 'web_test_123',
        firstName: 'Hemant',
        lastName: '',
        username: 'hemantsanjay',
        photoUrl: null,
        isTelegram: false
      };
    }
  }
};
