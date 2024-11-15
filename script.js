window.addEventListener('load', () => {
    const timer = document.getElementById('countdown');
  
    if (timer) {
      var countDownDate = new Date('Nov 15, 2024 16:00:00').getTime();
      setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        timer.innerHTML = `
          <div>
          <h1>Time until class ends</h1>
          <span>${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left!</span>
          <p><a href="" target="_blank">Set a reminders</a></p>
          </div>
        `;
      }, 1000);
    }
  });
  