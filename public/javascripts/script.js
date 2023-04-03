const sections = document.querySelectorAll('[id^="section-"]');
const sub_sections = document.querySelectorAll('[id^="sub-section-"]');

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', function() {
    for (let j = 0; j < sections.length; j++) {
      sections[j].classList.remove('section-active');
      sub_sections[j].classList.remove('active');
    }
    this.classList.add('section-active');
    sub_sections[i].classList.add('active');
  });
}