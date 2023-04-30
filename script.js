const toggle = document.getElementById('toggleDark');
const toggle2 = document.getElementById('toggleDark2');
const body = document.querySelector('body');
const bloglist = document.querySelector('.bloglist a');
const projects = document.querySelectorAll('.projects section');

toggle.addEventListener('click', function() {
  this.classList.toggle('bi-moon');
  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '1s';
    bloglist.style.color = 'black';
    bloglist.style.transition = '1s';
    projects.forEach(project => {
      project.style.color = 'black';
      project.style.borderColor = 'black';
    });
  } else {
    body.style.background = '#0a0a0a';
    body.style.color = 'white';
    body.style.transition = '1s';
    bloglist.style.color = 'white';
    bloglist.style.transition = '1s';
    projects.forEach(project => {
      project.style.color = 'white';
      project.style.borderColor = 'white';
    });
  }
});

toggle2.addEventListener('click', function() {
  this.classList.toggle('bi-moon');
  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '1s';
    bloglist.style.color = 'black';
    bloglist.style.transition = '1s';
    projects.forEach(project => {
      project.style.color = 'black';
      project.style.borderColor = 'black';
    });
  } else {
    body.style.background = '#0a0a0a';
    body.style.color = 'white';
    body.style.transition = '1s';
    bloglist.style.color = 'white';
    bloglist.style.transition = '1s';
    projects.forEach(project => {
      project.style.color = 'white';
      project.style.borderColor = 'white';
    });
  }
});
