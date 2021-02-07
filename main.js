const controls = document.querySelectorAll('.toolkit button');

function removeAllActiveClasses() {
  controls.forEach((control) => control.classList.remove('is-active'));
}

controls.forEach((control) => {
  control.addEventListener('click', (e) => {
    const el = e.target.closest('button');
    const exec = el.dataset.exec;
    if (['italic', 'bold'].includes(exec)) {
      document.execCommand(exec, false, '');
    } else {
      document.execCommand('formatBlock', false, exec);
    }
    removeAllActiveClasses();
    el.classList.add('is-active');
  });
});
