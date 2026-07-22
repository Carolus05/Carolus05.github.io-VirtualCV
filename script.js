  // Mobile nav toggle
  const toggle = document.getElementById('menuToggle');
  const navTree = document.getElementById('navTree');
  if(toggle){
    toggle.addEventListener('click', () => navTree.classList.toggle('open'));
    navTree.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navTree.classList.remove('open')));
  }

  // Active nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-tree a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-tree a[href="#${entry.target.id}"]`);
        if(active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(sec => observer.observe(sec));
