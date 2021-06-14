class CountdownTimer {
  constructor({ selector, targetDate } = {}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    const targetDay = new Date(this.targetDate);

    setInterval(() => {
      const presentDay = Date.now();
      const deltaTime = targetDay - presentDay;
      this.updateClockFace(this.getTimeComponents(deltaTime));
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateClockFace({ days, hours, mins, secs }) {
    const $selectorId = document.querySelector(this.selector);
    const $days = $selectorId.querySelector('[data-value="days"]');
    const $hours = $selectorId.querySelector('[data-value="hours"]');
    const $minutes = $selectorId.querySelector('[data-value="mins"]');
    const $seconds = $selectorId.querySelector('[data-value="secs"]');

    $days.textContent = `${days}`;
    $hours.textContent = `${hours}`;
    $minutes.textContent = `${mins}`;
    $seconds.textContent = `${secs}`;

    return { $days, $hours, $minutes, $seconds };
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 17, 2021"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jul 17, 2021"),
});