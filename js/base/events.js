$(document).ready(function () {
  /*Copiar email*/
  $('#copyEmail').on('click', function () {
    var copyText = $('#copyEmail').text();

    navigator.clipboard.writeText(copyText);
  });
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})