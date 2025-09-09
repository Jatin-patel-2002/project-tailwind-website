const navdialog = document.getElementById('nav-dialog');

function handleMenu() {
  navdialog.classList.toggle('hidden');
}

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Reveal when scrolled into view
        entry.target.classList.remove("-translate-x-48");
        entry.target.classList.remove("translate-x-48");
        entry.target.classList.add("translate-x-0", "transition-transform", "duration-700");
      } else {
        // Optional: reset when out of view
        entry.target.classList.add(isLTR ? "-translate-x-48" : "translate-x-48");
        entry.target.classList.remove("translate-x-0");
      }
    });
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback, {
    threshold: speed,
  });

  intersectionObserver.observe(element);
}

const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.15);
const dtElements = document.querySelectorAll('dt');

dtElements.forEach(element => {
  element.addEventListener('click', () => {
    const ddId = element.getAttribute('aria-controls');
    const ddElement = document.getElementById(ddId);
    const ddArrowIcon = element.querySelector('i'); // 👈 fixed

    ddElement.classList.toggle('hidden');
    ddArrowIcon.classList.toggle('-rotate-180'); // 👈 will rotate correctly now
  });
});
