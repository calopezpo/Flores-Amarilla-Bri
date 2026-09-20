(function () {
  var screens = Array.prototype.slice.call(document.querySelectorAll('.screen'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
  var current = 0;

  function show(index) {
    screens.forEach(function (s, i) {
      s.classList.toggle('active', i === index);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === index);
    });
    current = index;
  }

  document.querySelectorAll('[data-next]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (current < screens.length - 1) {
        show(current + 1);
      }
    });
  });

  document.querySelectorAll('[data-restart]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      show(0);
    });
  });
})();
