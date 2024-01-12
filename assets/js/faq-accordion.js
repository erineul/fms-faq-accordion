var accordionButton = document.getElementsByClassName('accordion-button');

var collapseAccordion = function () {
var accordionDetails = this.parentElement.nextElementSibling;

if(this.classList.contains('collapsed')) {
    this.classList.remove('collapsed');
    this.setAttribute('aria-expanded', true);
    accordionDetails.classList.add('show');
}
else {
    this.classList.add('collapsed');
    this.setAttribute('aria-expanded', false);
    accordionDetails.classList.remove('show');
}
};

for (var i = 0; i < accordionButton.length; i++) {
accordionButton[i].addEventListener('click', collapseAccordion);
}