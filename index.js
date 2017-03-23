document.addEventListener('DOMContentLoaded', function () { // feel free to change this with $(document).ready()
  var timer = {
    seconds: 0,
    timerId: 0,
    els: {
      timer: document.getElementById('timer'),
      reset: document.getElementById('reset'),
      start: document.getElementById('start'),
      pause: document.getElementById('pause')
    },
    updateTime: function updateTime () {
      this.seconds++
      this.els.timer.textContent = 'Time elapsed: ' + this.seconds
    },
    setupListeners: function () {
      this.els.start.addEventListener('click', function () {
        if (timer.seconds === 0) {
          timer.els.timer.textContent = 'Time elapsed: 0'
        }
        if (timer.timerId === 0) {
          this.interval = setInterval(timer.updateTime.bind(timer), 1000)
          timer.timerId = 1
        }
      })

      this.els.pause.addEventListener('click', function () {
        clearInterval(timer.els.start.interval)
        timer.timerId = 0
      })

      this.els.reset.addEventListener('click', function () {
        clearInterval(timer.els.start.interval)
        timer.seconds = 0
        timer.els.timer.textContent = 'Stop Watch'
        timer.timerId = 0
      })
    }
  }
  timer.setupListeners()
})
